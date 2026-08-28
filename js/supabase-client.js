/* ================================================================
 *  Supabase — Cliente de autenticação e sincronização de progresso
 *  -------------------------------------------------------------------
 *  Depende de:
 *    - supabase-config.js  (disponibiliza window.SUPABASE_CONFIG)
 *    - SDK do Supabase:     <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
 *
 *  Este módulo expõe window.supabaseSync com a API usada pelo app.js:
 *    - config ok?  supabaseSync.ready / supabaseSync.configError()
 *    - auth:       signUp(email, senha), signIn(email, senha),
 *                  signOut(), getUser(), onAuthChange(cb), currentUser()
 *    - dados:      getGam() / setGam(obj), getAnswers() / setAnswer(k, v),
 *                  saveToCloud(), loadFromCloud(), mergeLocalIntoCloud(),
 *                  getMergeStatus()
 *    - helpers:    debounce / markDirty()
 *  ================================================================ */
(function () {
  "use strict";

  const cfg = window.SUPABASE_CONFIG || {};
  const hasConfig = function () {
    return !!cfg.url && !!cfg.anonKey &&
      cfg.url.indexOf("COLE-") !== 0 && cfg.anonKey.indexOf("COLE-") !== 0;
  };

  // Cliente Supabase (se houver SDK e config válida)
  let sb = null;
  if (hasConfig() && window.supabase && window.supabase.createClient) {
    sb = window.supabase.createClient(cfg.url, cfg.anonKey, {
      auth: { persistSession: true, autoRefreshToken: true }
    });
  }

  // Estado em memória, espelho do que fica na nuvem + localStorage
  const LR_ANSWERS = "estudarC_progress";
  const LR_GAM = "estudarCode_gam";

  let answers = readLocalAnswers();   // { "curso/topico/qN": {picked, correct} }
  let gam = readLocalGam();
  let currentUser = null;
  let listeners = [];
  let mergeState = "idle";   // idle | merging | done | error
  let dirty = false;
  let saveTimer = null;

  /* ---------------- leitura/escrita local (fallback) ---------------- */
  function readLocalAnswers() {
    try { return JSON.parse(localStorage.getItem(LR_ANSWERS)) || {}; } catch (e) { return {}; }
  }
  function writeLocalAnswers(v) {
    try { localStorage.setItem(LR_ANSWERS, JSON.stringify(v)); } catch (e) { /* quota */ }
  }
  function readLocalGam() {
    try { return JSON.parse(localStorage.getItem(LR_GAM)) || {}; } catch (e) { return {}; }
  }
  function writeLocalGam(v) { try { localStorage.setItem(LR_GAM, JSON.stringify(v)); } catch (e) {} }

  /* ---------------- merge de gamificação ---------------- */
  // Regras de fusão entre o progresso local e o da nuvem (ambos do mesmo usuário).
  function mergeGam(a, b) {
    const out = Object.assign({}, a, b);
    const pickMax = function (k) { if (typeof a[k] === "number" && typeof b[k] === "number") out[k] = Math.max(a[k], b[k]); };
    ["xp", "hearts", "maxHearts", "streak", "bestStreak", "correctQ", "cardsSeen", "runs"].forEach(pickMax);
    // badges / doneTopics / earned: união de chaves (verdadeiro vence)
    ["badges", "doneTopics", "earned"].forEach(function (k) {
      const merged = Object.assign({}, (a && a[k]) || {}, (b && b[k]) || {});
      out[k] = merged;
    });
    // última atividade: o mais recente
    if (a.lastActive && b.lastActive) out.lastActive = a.lastActive > b.lastActive ? a.lastActive : b.lastActive;
    return out;
  }

  // Respostas de quiz: união; em conflito, "corretou" (true) vence.
  function mergeAnswers(local, cloud) {
    const out = Object.assign({}, cloud || {}, local || {});
    for (const k in local) {
      if (local[k] && local[k].correct === true) out[k] = local[k];
      else if (cloud && cloud[k] && cloud[k].correct === true) out[k] = cloud[k];
    }
    return out;
  }

  /* ---------------- API de dados (usada pelo app.js) ---------------- */
  function getGam() { return gam; }
  function setGam(obj) {
    gam = obj;
    writeLocalGam(gam);  // espelho local (rápido/offline)
    markDirty();
  }
  function getAnswers() { return answers; }

  function setAnswer(key, value) {
    answers[key] = value;
    writeLocalAnswers(answers);   // espelho local (rápido/offline)
    markDirty();
  }
  function removeAnswer(key) {
    delete answers[key];
    writeLocalAnswers(answers);
    markDirty();
  }

  // Marca que há alterações pendentes e agenda um save na nuvem (debounce).
  function markDirty() {
    if (!currentUser) return;
    dirty = true;
    if (saveTimer) clearTimeout(saveTimer);
    saveTimer = setTimeout(saveToCloud, 800);
  }

  // Zera todo o progresso em memória, local e na nuvem.
  async function resetAll() {
    answers = {};
    gam = {};
    try { localStorage.removeItem(LR_ANSWERS); } catch (e) {}
    try { localStorage.removeItem(LR_GAM); } catch (e) {}
    if (sb && currentUser) {
      try { await sb.from("user_progress").delete().eq("user_id", currentUser.id); } catch (e) { console.warn(e); }
    }
    notify();
  }

  /* ---------------- persistência na nuvem ---------------- */
  async function saveToCloud() {
    if (!sb || !currentUser) return;
    if (saveTimer) { clearTimeout(saveTimer); saveTimer = null; }
    if (!dirty) return;
    dirty = false;
    try {
      const row = {
        answers: answers,
        gam: gam,
        updated_at: new Date().toISOString()
      };
      const { error } = await sb.from("user_progress")
        .upsert(Object.assign({ user_id: currentUser.id }, row), { onConflict: "user_id" });
      if (error) { console.warn("[supabase] save", error); dirty = true; }
    } catch (e) {
      console.warn("[supabase] save error", e);
      dirty = true;
    }
  }

  async function loadFromCloud() {
    if (!sb || !currentUser) return null;
    const { data, error } = await sb.from("user_progress")
      .select("answers, gam")
      .eq("user_id", currentUser.id)
      .maybeSingle();
    if (error) throw error;
    return data || null;
  }

  /* ---------------- merge no primeiro login ---------------- */
  // Junta localStorage local + nuvem; escreve o resultado na nuvem.
  async function mergeLocalIntoCloud() {
    if (!sb || !currentUser) return;
    mergeState = "merging"; notify();
    try {
      const cloud = await loadFromCloud();
      const localAnswers = readLocalAnswers();
      const localGam = readLocalGam();

      // Se não há nada local, apenas carrega a nuvem.
      const mergedAnswers = mergeAnswers(localAnswers, (cloud && cloud.answers) || {});
      const mergedGam = mergeGam(Object.keys(localGam).length ? localGam : {}, (cloud && cloud.gam) || {});

      answers = mergedAnswers;
      gam = mergedGam;

      // Persiste na nuvem
      const { error } = await sb.from("user_progress")
        .upsert({
          user_id: currentUser.id,
          answers: answers,
          gam: gam,
          updated_at: new Date().toISOString()
        }, { onConflict: "user_id" });
      if (error) throw error;

      // Limpa o espelho local (a nuvem agora é a fonte de verdade).
      try { localStorage.removeItem(LR_ANSWERS); } catch (e) {}
      try { localStorage.removeItem(LR_GAM); } catch (e) {}

      mergeState = "done";
    } catch (e) {
      mergeState = "error";
      console.warn("[supabase] merge error", e);
    }
    notify();
  }

  /* ---------------- sessão ---------------- */
  function getUser() { return currentUser; }

  async function signUp(email, password) {
    if (!sb) throw new Error("Configuração do Supabase pendente.");
    const { data, error } = await sb.auth.signUp({ email: email, password: password });
    if (error) throw error;
    return data;
  }

  async function signIn(email, password) {
    if (!sb) throw new Error("Configuração do Supabase pendente.");
    const { data, error } = await sb.auth.signInWithPassword({ email: email, password: password });
    if (error) throw error;
    return data;
  }

  async function signOut() {
    if (!sb) return;
    try { await sb.auth.signOut(); } catch (e) { console.warn("[supabase] signOut", e); }
    // Garantia extra: remove qualquer token de sessão deixado no localStorage
    // (evita que o App "entre direto" após atualizar a página pós-logout).
    try {
      Object.keys(localStorage).forEach(function (k) {
        if (k.indexOf("sb-") === 0 && k.indexOf("auth-token") > -1) localStorage.removeItem(k);
      });
    } catch (e) { /* ignore */ }
    currentUser = null;
  }

  async function resetPassword(email) {
    if (!sb) throw new Error("Configuração do Supabase pendente.");
    const { error } = await sb.auth.resetPasswordForEmail(email);
    if (error) throw error;
  }

  function onAuthChange(cb) { listeners.push(cb); }

  async function handleAuth(user) {
    currentUser = (user && user.id) ? user : null;
    if (currentUser) {
      await mergeLocalIntoCloud();
    } else {
      mergeState = "idle";
    }
    notify();
  }

  function notify() {
    listeners.forEach(function (cb) {
      try { cb({ user: currentUser, merge: mergeState }); } catch (e) {}
    });
  }

  /* ---------------- init ---------------- */
  async function init() {
    if (!sb) { notify(); return; }
    try {
      const { data, error } = await sb.auth.getSession();
      if (error) console.warn("[supabase] session", error);
      currentUser = (data && data.session && data.session.user) || null;
      if (currentUser) {
        await mergeLocalIntoCloud();
      }
    } catch (e) {
      // Se falhar a leitura da sessão, garante que o app NÃO fique "logado".
      console.warn("[supabase] session error", e);
      currentUser = null;
    } finally {
      sb.auth.onAuthStateChange(function (_event, session) {
        handleAuth((session && session.user) || null);
      });
      // Sempre notifica no fim para que a tela de login seja exibida corretamente.
      notify();
    }
  }

  /* ================================================================
   *  Interface pública
   *  ================================================================ */
  window.supabaseSync = {
    ready: !!sb,
    configError: function () {
      return hasConfig()
        ? null
        : "Preencha o arquivo supabase-config.js com a URL e a chave anon do seu projeto Supabase.";
    },
    getUser: getUser,
    signUp: signUp,
    signIn: signIn,
    signOut: signOut,
    resetPassword: resetPassword,
    onAuthChange: onAuthChange,
    getGam: getGam,
    setGam: setGam,
    getAnswers: getAnswers,
    setAnswer: setAnswer,
    removeAnswer: removeAnswer,
    resetAll: resetAll,
    saveToCloud: saveToCloud,
    loadFromCloud: loadFromCloud,
    mergeLocalIntoCloud: mergeLocalIntoCloud,
    getMergeStatus: function () { return mergeState; },
    init: init
  };

  (function autoBoot() {
    init();
    window.addEventListener("beforeunload", function () {
      if (saveTimer) clearTimeout(saveTimer);
      if (dirty && sb && currentUser) {
        // best-effort no unload (pode não completar a tempo; o debounce usual já salva)
        sb.from("user_progress").upsert({ user_id: currentUser.id, answers: answers, gam: gam })
          .then(function () {}).catch(function () {});
      }
    });
  })();
})();
