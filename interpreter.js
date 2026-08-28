/* ================================================================
 *  INTERPRETADOR DE C (subset usado nas aulas)
 *  ================================================================ */

function tokenizeC(src) {
  const t = [];
  let i = 0, ln = 1;
  const isId = function (c) { return /[A-Za-z_]/.test(c); };
  const isD = function (c) { return /[0-9]/.test(c); };
  while (i < src.length) {
    const c = src[i];
    if (c === "\n") { ln++; i++; continue; }
    if (/\s/.test(c)) { i++; continue; }
    if (c === "#") { while (i < src.length && src[i] !== "\n") i++; continue; }
    if (c === "/" && src[i + 1] === "/") { while (i < src.length && src[i] !== "\n") i++; continue; }
    if (c === "/" && src[i + 1] === "*") {
      i += 2;
      while (i < src.length && !(src[i] === "*" && src[i + 1] === "/")) { if (src[i] === "\n") ln++; i++; }
      i += 2;
      continue;
    }
    if (c === '"') {
      let j = i + 1, s = "";
      while (j < src.length && src[j] !== '"') {
        if (src[j] === "\\" && j + 1 < src.length) { s += src[j] + src[j + 1]; j += 2; continue; }
        s += src[j]; j++;
      }
      t.push({ v: s, str: true, ln: ln }); i = j + 1; continue;
    }
    if (c === "'") {
      let j = i + 1, s = "";
      if (src[j] === "\\") { s = src[j] + src[j + 1]; j += 2; } else { s = src[j]; j++; }
      while (j < src.length && src[j] !== "'") { s += src[j]; j++; }
      t.push({ v: s, ch: true, ln: ln }); i = j + 1; continue;
    }
    if (isId(c)) {
      let j = i;
      while (j < src.length && /[A-Za-z0-9_]/.test(src[j])) j++;
      t.push({ v: src.slice(i, j), ln: ln }); i = j; continue;
    }
    if (isD(c)) {
      let j = i;
      while (j < src.length && /[0-9.]/.test(src[j])) j++;
      t.push({ v: parseFloat(src.slice(i, j)), num: true, ln: ln }); i = j; continue;
    }
    // operadores multi-caractere
    const two = src.substr(i, 2);
    if (["++", "--", "+=", "-=", "*=", "/=", "%=", "==", "!=", "<=", ">=", "&&", "||"].indexOf(two) >= 0) {
      t.push({ v: two, ln: ln }); i += 2; continue;
    }
    if ("+-*/%=<>(){}[];,&!|?:".indexOf(c) >= 0) { t.push({ v: c, ln: ln }); i++; continue; }
    i++;
  }
  return t;
}

function interpretC(code, io) {
  const err = function (m, tok) {
    throw new Error("C · linha " + (tok ? (tok.ln || "?") : "?") + ": " + m);
  };

  const t = tokenizeC(code);
  let p = 0;
  const peek = function () { return t[p]; };
  const next = function () { return t[p++]; };
  const isK = function (k) { return peek() && peek().v === k; };

  const TYPE_WORDS = ["void", "int", "float", "double", "char", "long", "short", "unsigned", "signed", "const", "static", "struct"];

  function parseType() {
    let base = null, raw = "";
    while (peek() && TYPE_WORDS.indexOf(peek().v) >= 0) {
      const w = next().v;
      raw += w + " ";
      if (w === "int" || w === "long" || w === "short" || w === "unsigned" || w === "signed") base = "int";
      else if (w === "float") base = "float";
      else if (w === "double") base = "double";
      else if (w === "char") base = "char";
      else if (w === "void") base = "void";
    }
    return base;
  }

  function consumeStars() {
    let n = 0;
    while (isK("*")) { next(); n++; }
    return n;
  }

  /* ----- expressões ----- */
  const BP = { "=": 1, "+=": 1, "-=": 1, "*=": 1, "/=": 1, "%=": 1, "||": 3, "&&": 4, "==": 5, "!=": 5, ">": 6, "<": 6, ">=": 6, "<=": 6, "+": 7, "-": 7, "*": 8, "/": 8, "%": 8 };

  function parseExpr(minP) {
    let left = parseUnary();
    while (true) {
      const tk = peek();
      if (!tk) break;
      const prec = BP[tk.v];
      if (prec === undefined) {
        if (tk.v === "?") err("operador ternário ainda não suportado", tk);
        break;
      }
      if (prec < minP) break;
      next();
      const right = parseExpr((tk.v === "=" || tk.v === "+=" || tk.v === "-=" || tk.v === "*=" || tk.v === "/=" || tk.v === "%=") ? prec : prec + 1);
      left = { k: "bin", op: tk.v, left: left, right: right, ln: tk.ln };
    }
    if (isK("?")) err("operador ternário ainda não suportado", peek());
    return left;
  }

  function isCastStart() {
    // '(' seguido de palavras de tipo (e estrelas) e depois ')'
    let j = p + 1;
    if (!t[j]) return false;
    let sawType = false;
    while (t[j] && TYPE_WORDS.indexOf(t[j].v) >= 0) { sawType = true; j++; }
    while (t[j] && t[j].v === "*") j++;
    return sawType && t[j] && t[j].v === ")";
  }

  function parseUnary() {
    const tk = peek();
    if (!tk) err("expressão incompleta", tk);
    if (tk.v === "-") { next(); return { k: "neg", e: parseUnary(), ln: tk.ln }; }
    if (tk.v === "!") { next(); return { k: "not", e: parseUnary(), ln: tk.ln }; }
    if (tk.v === "*") { next(); return { k: "deref", e: parseUnary(), ln: tk.ln }; }
    if (tk.v === "&") { next(); return { k: "addr", e: parseUnary(), ln: tk.ln }; }
    if (tk.v === "++") { next(); return { k: "preinc", e: parseUnary(), ln: tk.ln }; }
    if (tk.v === "--") { next(); return { k: "predec", e: parseUnary(), ln: tk.ln }; }
    if (tk.v === "(" && isCastStart()) {
      next();
      const type = parseType();
      let ptr = consumeStars();
      if (!isK(")")) err("esperava ) no cast", peek());
      next();
      return { k: "cast", type: type, ptr: ptr, e: parseUnary(), ln: tk.ln };
    }
    return parsePostfix();
  }

  function parsePostfix() {
    let base = parsePrimary();
    while (true) {
      if (isK("[")) {
        next();
        const idx = parseExpr(1);
        if (!isK("]")) err("esperava ]", peek());
        next();
        base = { k: "index", arr: base, idx: idx, ln: base.ln };
        continue;
      }
      if (isK("(")) {
        next();
        const args = [];
        if (!isK(")")) {
          args.push(parseExpr(1));
          while (isK(",")) { next(); args.push(parseExpr(1)); }
        }
        if (!isK(")")) err("esperava )", peek());
        next();
        base = { k: "call", fn: base, args: args, ln: base.ln };
        continue;
      }
      if (isK("++")) { next(); base = { k: "postinc", e: base, ln: base.ln }; continue; }
      if (isK("--")) { next(); base = { k: "postdec", e: base, ln: base.ln }; continue; }
      break;
    }
    return base;
  }

  function parsePrimary() {
    const tk = peek();
    if (!tk) err("expressão incompleta", tk);
    if (tk.v === "(") {
      next();
      const e = parseExpr(1);
      if (!isK(")")) err("esperava )", peek());
      next();
      return e;
    }
    if (tk.num) { next(); return { k: "num", v: tk.v, ln: tk.ln }; }
    if (tk.str) { next(); return { k: "strlit", v: tk.v, ln: tk.ln }; }
    if (tk.ch) {
      next();
      let cv;
      if (tk.v === "\\n") cv = 10;
      else if (tk.v === "\\t") cv = 9;
      else if (tk.v === "\\0") cv = 0;
      else if (tk.v === "\\\\") cv = 92;
      else if (tk.v.length) cv = tk.v.charCodeAt(0);
      return { k: "num", v: cv, ln: tk.ln };
    }
    next();
    return { k: "var", name: tk.v, ln: tk.ln };
  }

  /* ----- declarações ----- */
  function parseInitializer() { return parseExpr(1); }

  function parseDeclarators(type, ptr) {
    const items = [];
    // estrelas podem vir antes do nome (int *p)
    let stars = consumeStars();
    while (true) {
      const nameTok = next();
      if (!nameTok || nameTok.v === "," || nameTok.v === ";" || nameTok.v === ")") err("esperava nome na declaração", nameTok);
      const item = { name: nameTok.v, type: type, ptr: ptr + stars, dims: null, init: null, ln: nameTok.ln };
      while (isK("[")) {
        next();
        if (isK("]")) { item.dims = item.dims || []; item.dims.push(null); next(); continue; }
        const d = parseExpr(1);
        if (!isK("]")) err("esperava ]", peek());
        next();
        item.dims = item.dims || [];
        item.dims.push(d && d.k === "num" ? d.v : 1);
      }
      if (isK("=")) {
        next();
        const v = peek();
        if (v && v.str) { next(); item.init = { k: "strlit", v: v.v, ln: v.ln }; }
        else item.init = parseInitializer();
      }
      items.push(item);
      stars = 0;
      if (isK(",")) { next(); continue; }
      break;
    }
    return items;
  }

  /* ----- funções ----- */
  const funcs = {};

  function parseParamList() {
    const params = [];
    if (isK("void") && t[p + 1] && t[p + 1].v === ")") { next(); return params; }
    while (peek() && !isK(")")) {
      const type = parseType();
      if (!type) err("tipo de parâmetro inválido", peek());
      let ptr = consumeStars();
      const nm = next();
      if (nm.v === ")" || nm.v === ",") err("parâmetro sem nome", nm);
      let arr = false;
      while (isK("[")) { next(); if (isK("]")) next(); else { if (!isK("]")) next(); } arr = true; }
      params.push({ name: nm.v, type: type, ptr: ptr, array: arr });
      if (isK(",")) next();
    }
    return params;
  }

  function parseTypeParenthesized() {
    if (!isK("(")) return null;
    const save = p;
    next();
    const base = parseType();
    if (!base) { p = save; return null; }
    let ptr = consumeStars();
    return { base: base, ptr: ptr };
  }

  /* ----- declaração de variável no corpo ----- */
  function parseLocalDecl() {
    const type = parseType();
    if (!type) return null;
    let ptr = consumeStars();
    const items = parseDeclarators(type, ptr);
    if (!isK(";")) err("esperava ; após declaração", peek());
    next();
    return { k: "decl", items: items, decl: true };
  }

  /* ----- statements ----- */
  function parseStatement() {
    const tk = peek();
    if (!tk) err("estrutura incompleta", tk);
    if (tk.v === ";") { next(); return { k: "empty", ln: tk.ln }; }
    if (tk.v === "{") { next(); const body = parseStmtBlock(); return { k: "block", body: body, ln: tk.ln }; }
    if (TYPE_WORDS.indexOf(tk.v) >= 0 && tk.v !== "void") {
      return parseLocalDecl();
    }
    if (tk.v === "if") {
      next();
      if (!isK("(")) err("esperava ( após if", tk);
      next();
      const cond = parseExpr(1);
      if (!isK(")")) err("esperava )", peek());
      next();
      const then = parseStatement();
      let els = null;
      if (isK("else")) { next(); els = parseStatement(); }
      return { k: "if", cond: cond, then: then, els: els, ln: tk.ln };
    }
    if (tk.v === "while") {
      next();
      if (!isK("(")) err("esperava (", tk);
      next();
      const cond = parseExpr(1);
      if (!isK(")")) err("esperava )", peek());
      next();
      return { k: "while", cond: cond, body: parseStatement(), ln: tk.ln };
    }
    if (tk.v === "do") {
      next();
      const body = parseStatement();
      if (!isK("while")) err("esperava while após do", peek());
      next();
      if (!isK("(")) err("esperava (", peek());
      next();
      const cond = parseExpr(1);
      if (!isK(")")) err("esperava )", peek());
      next();
      if (!isK(";")) err("esperava ;", peek());
      next();
      return { k: "dowhile", body: body, cond: cond, ln: tk.ln };
    }
    if (tk.v === "for") {
      next();
      if (!isK("(")) err("esperava (", tk);
      next();
      let init = null;
      if (!isK(";")) {
        if (TYPE_WORDS.indexOf(peek().v) >= 0) {
          init = parseLocalDeclFor(); // declaração
        } else {
          init = { k: "exstmt", e: parseExpr(1) };
        }
      }
      if (!isK(";")) err("esperava ; no for", peek());
      next();
      let cond = null;
      if (!isK(";")) cond = parseExpr(1);
      if (!isK(";")) err("esperava ;", peek());
      next();
      let inc = null;
      if (!isK(")")) inc = parseExpr(1);
      if (!isK(")")) err("esperava )", peek());
      next();
      return { k: "for", init: init, cond: cond, inc: inc, body: parseStatement(), ln: tk.ln };
    }
    if (tk.v === "return") {
      next();
      let e = null;
      if (!isK(";")) e = parseExpr(1);
      if (!isK(";")) err("esperava ;", peek());
      next();
      return { k: "return", e: e, ln: tk.ln };
    }
    if (tk.v === "break") { next(); if (!isK(";")) err("esperava ;", peek()); next(); return { k: "break", ln: tk.ln }; }
    if (tk.v === "continue") { next(); if (!isK(";")) err("esperava ;", peek()); next(); return { k: "continue", ln: tk.ln }; }
    if (tk.v === "switch") {
      next();
      if (!isK("(")) err("esperava (", tk);
      next();
      const e = parseExpr(1);
      if (!isK(")")) err("esperava )", peek());
      next();
      if (!isK("{")) err("esperava { no switch", peek());
      next();
      const cases = [];
      let cur = null;
      while (peek() && !isK("}")) {
        if (isK("case")) {
          next();
          const val = parseExpr(1);
          if (!isK(":")) err("esperava :", peek());
          next();
          cur = { val: val, body: [] };
          cases.push(cur);
        } else if (isK("default")) {
          next();
          if (!isK(":")) err("esperava :", peek());
          next();
          cur = { val: null, body: [] };
          cases.push(cur);
        } else {
          if (!cur) err("esperava case antes de statements", peek());
          cur.body.push(parseStatement());
        }
      }
      if (!isK("}")) err("esperava }", peek());
      next();
      return { k: "switch", e: e, cases: cases, ln: tk.ln };
    }
    const e = parseExpr(1);
    if (!isK(";")) err("esperava ;", peek());
    next();
    return { k: "exstmt", e: e, ln: tk.ln };
  }

  function parseLocalDeclFor() {
    const type = parseType();
    let ptr = consumeStars();
    const items = parseDeclarators(type, ptr);
    return { k: "decl", items: items, decl: true, declFor: true };
  }

  function parseStmtBlock() {
    const out = [];
    while (peek() && !isK("}")) {
      out.push(parseStatement());
    }
    if (isK("}")) next();
    return out;
  }

  function parseTopDecl() {
    const type = parseType();
    if (!type) return null;
    let ptr = consumeStars();
    // função?
    if (peek() && peek().v === ")") err("função sem nome", peek());
    const marker = peek();
    if (marker && marker.v === "," || (marker && peek().v === ";")) {
      // declaração global (inicialização a partir de expressão)
      const items = parseDeclarators(type, ptr);
      if (!isK(";")) err("esperava ;", peek());
      next();
      return { k: "gdecl", items: items };
    }
    // se próximo é '(' então é função
    const nm = next();
    if (!isK("(")) {
      // ainda pode ser declaração global com esse nome único
      p--;
      const items = parseDeclarators(type, ptr);
      if (!isK(";")) err("esperava ;", peek());
      next();
      return { k: "gdecl", items: items };
    }
    next();
    const params = parseParamList();
    if (!isK(")")) err("esperava )", peek());
    next();
    if (isK(";")) { next(); return { k: "proto", name: nm.v }; }
    if (!isK("{")) err("esperava { no corpo da função", peek());
    next();
    const body = parseStmtBlock();
    funcs[nm.v] = { params: params, body: body, type: type };
    return { k: "func", name: nm.v };
  }

  /* ----- topo ----- */
  const globals = [];
  while (peek()) {
    const item = parseTopDecl();
    if (item) {
      if (item.k === "gdecl") globals.push(item);
    } else {
      err("elemento não reconhecido: " + peek().v, peek());
    }
  }

  /* ----- execução ----- */
  const mem = [];
  const ctx = {
    mem: mem,
    guard: { steps: 0, MAX: 400000, loops: 0, LMAX: 2500000 },
    funcs: funcs,
    globalScope: null
  };

  function newScope(parent) {
    return { vars: new Map(), parent: parent || null };
  }
  const G = newScope(null);
  ctx.globalScope = G;

  function lookup(scope, name) {
    let s = scope;
    while (s) {
      if (s.vars.has(name)) return s.vars.get(name);
      s = s.parent;
    }
    return null;
  }

  function allocCtx(n) {
    const slot = mem.length;
    for (let i = 0; i < n; i++) mem.push(0);
    return slot;
  }

  function declVar(scope, item, dims, ptr) {
    const n = dims ? dims.reduce(function (a, b) { return a * b; }, 1) : 1;
    const slot = allocCtx(n);
    scope.vars.set(item.name, { slot: slot, dims: dims || null, ptr: ptr, type: item.type });
    return slot;
  }

  function truthy(v) { return !!v; }

  function evalE(scope, node) {
    ctx.guard.steps++;
    if (ctx.guard.steps > ctx.guard.MAX) throw new Error("C · limite de execução excedido (loop infinito?).");
    switch (node.k) {
      case "num": return node.v;
      case "strlit": return { t: "str", v: node.v };
      case "neg": return -evalE(scope, node.e);
      case "not": return !evalE(scope, node.e);
      case "cast": {
        const v = evalE(scope, node.e);
        if (node.type === "int") return Math.trunc(Number(v));
        if (node.type === "char") return String.fromCharCode(Number(v)).charCodeAt(0);
        return Number(v);
      }
      case "var": {
        const ent = lookup(scope, node.name);
        if (!ent) throw new Error("C · linha " + node.ln + ": variável não declarada: " + node.name);
        if (ent.arrParam) return { t: "arr", slot: ent.slot, dims: null };
        if (ent.dims) return { t: "arr", slot: ent.slot, dims: ent.dims };
        if (ent.ptr) return mem[ent.slot];
        return mem[ent.slot];
      }
      case "index": return mem[resolveArray(scope, node).slot];
      case "addr": return storeLoc(scope, node.e).slot;
      case "deref": {
        const slot = evalE(scope, node.e);
        return mem[slot];
      }
      case "preinc": { const l = storeLoc(scope, node.e); mem[l.slot] = (mem[l.slot] || 0) + 1; return mem[l.slot]; }
      case "predec": { const l = storeLoc(scope, node.e); mem[l.slot] = (mem[l.slot] || 0) - 1; return mem[l.slot]; }
      case "postinc": { const l = storeLoc(scope, node.e); const v = mem[l.slot] || 0; mem[l.slot] = v + 1; return v; }
      case "postdec": { const l = storeLoc(scope, node.e); const v = mem[l.slot] || 0; mem[l.slot] = v - 1; return v; }
      case "bin": {
        const a = evalE(scope, node.left);
        const b = evalE(scope, node.right);
        switch (node.op) {
          case "+": return num(a) + num(b);
          case "-": return num(a) - num(b);
          case "*": return num(a) * num(b);
          case "/": if (num(b) === 0) throw new Error("C · linha " + node.ln + ": divisão por zero."); return num(a) / num(b);
          case "%": if (num(b) === 0) throw new Error("C · linha " + node.ln + ": divisão por zero."); return num(a) % num(b);
          case "==": return num(a) === num(b);
          case "!=": return num(a) !== num(b);
          case ">": return num(a) > num(b);
          case "<": return num(a) < num(b);
          case ">=": return num(a) >= num(b);
          case "<=": return num(a) <= num(b);
          case "&&": return a && b;
          case "||": return a || b;
          case "=": { const l = storeLoc(scope, node.left); mem[l.slot] = num(b); return mem[l.slot]; }
          case "+=": { const l = storeLoc(scope, node.left); mem[l.slot] = num(a) + num(b); return mem[l.slot]; }
          case "-=": { const l = storeLoc(scope, node.left); mem[l.slot] = num(a) - num(b); return mem[l.slot]; }
          case "*=": { const l = storeLoc(scope, node.left); mem[l.slot] = num(a) * num(b); return mem[l.slot]; }
          case "/=": { const l = storeLoc(scope, node.left); if (num(b) === 0) throw new Error("C · divisão por zero."); mem[l.slot] = num(a) / num(b); return mem[l.slot]; }
          case "%=": { const l = storeLoc(scope, node.left); if (num(b) === 0) throw new Error("C · divisão por zero."); mem[l.slot] = num(a) % num(b); return mem[l.slot]; }
        }
        return 0;
      }
      case "call": return callFunc(scope, node);
    }
    return 0;
  }

  function num(v) {
    if (v && v.t === "str") return NaN;
    return Number(v);
  }

  function resolveArray(scope, node) {
    const idxs = [];
    let cur = node;
    while (cur && cur.k === "index") { idxs.unshift(evalE(scope, cur.idx)); cur = cur.arr; }
    if (!cur || cur.k !== "var") throw new Error("C · índice em expressão inválida");
    const ent = lookup(scope, cur.name);
    if (!ent) throw new Error("C · linha " + cur.ln + ": variável não declarada: " + cur.name);
    if (ent.arrParam) return { slot: ent.slot + (idxs.length ? Number(idxs[0]) : 0) };
    if (!ent.dims) {
      if (ent.ptr) return { slot: (mem[ent.slot] || 0) + (idxs.length ? idxs[0] : 0) };
      throw new Error("C · linha " + cur.ln + ": " + cur.name + " não é um vetor");
    }
    if (idxs.length !== ent.dims.length) throw new Error("C · linha " + node.ln + ": número de índices não bate com as dimensões");
    let offs = 0;
    for (let k = 0; k < ent.dims.length; k++) offs = offs * ent.dims[k] + Number(idxs[k]);
    return { slot: ent.slot + offs };
  }

  function storeLoc(scope, target) {
    switch (target.k) {
      case "var": {
        const ent = lookup(scope, target.name);
        if (!ent) throw new Error("C · linha " + target.ln + ": variável não declarada: " + target.name);
        if (ent.dims) throw new Error("C · atribuição a vetor sem índice", target.ln);
        if (ent.arrParam) throw new Error("C · atribuição a vetor sem índice", target.ln);
        return { slot: ent.slot };
      }
      case "index":
        return resolveArray(scope, target);
      case "deref": {
        const slot = evalE(scope, target.e);
        return { slot: slot };
      }
      default:
        throw new Error("C · linha " + (target.ln || 0) + ": atribuição inválida (precisa ser variável)");
    }
  }

  function execInit(scope, item) {
    let dims = item.dims;
    let slot;
    if (dims) {
      if (item.init && item.init.k === "strlit") {
        const s = item.init.v;
        const arr = s.length + 1 + (dims.reduce(function (a, b) { return a * b; }, 1) > s.length + 1 ? 0 : 0);
        slot = declVar(scope, item, dims, item.ptr);
        for (let k = 0; k < s.length; k++) mem[slot + k] = s.charCodeAt(k);
        mem[slot + s.length] = 0;
      } else {
        slot = declVar(scope, item, dims, item.ptr);
        if (item.init) {
          const v = evalE(scope, item.init);
          mem[slot] = num(v);
        }
      }
    } else {
      slot = declVar(scope, item, null, item.ptr);
      if (item.init) {
        const v = evalE(scope, item.init);
        mem[slot] = num(v);
      }
    }
    return slot;
  }

  function execStmts(scope, list) {
    for (let i = 0; i < list.length; i++) {
      const r = execStmt(scope, list[i]);
      if (r) return r;
    }
    return null;
  }

  function execStmt(scope, s) {
    ctx.guard.steps++;
    if (ctx.guard.steps > ctx.guard.MAX) throw new Error("C · limite de execução excedido.");
    switch (s.k) {
      case "empty": return null;
      case "block": {
        const sub = newScope(scope);
        return execStmts(sub, s.body);
      }
      case "decl": {
        s.items.forEach(function (it) { execInit(scope, it); });
        return null;
      }
      case "exstmt":
        evalE(scope, s.e);
        return null;
      case "if":
        return truthy(evalE(scope, s.cond)) ? execStmt(scope, s.then) : (s.els ? execStmt(scope, s.els) : null);
      case "while": {
        ctx.guard.loops = 0;
        while (truthy(evalE(scope, s.cond))) {
          ctx.guard.loops++;
          if (ctx.guard.loops > ctx.guard.LMAX) throw new Error("C · loop while muito longo.");
          const r = execStmt(scope, s.body);
          if (r && r.sig === "return") return r;
          if (r && r.sig === "break") break;
        }
        return null;
      }
      case "dowhile": {
        ctx.guard.loops = 0;
        do {
          ctx.guard.loops++;
          if (ctx.guard.loops > ctx.guard.LMAX) throw new Error("C · loop do-while muito longo.");
          const r = execStmt(scope, s.body);
          if (r && r.sig === "return") return r;
          if (r && r.sig === "break") break;
        } while (truthy(evalE(scope, s.cond)));
        return null;
      }
      case "for": {
        const sub = newScope(scope);
        if (s.init) {
          if (s.init.k === "decl") s.init.items.forEach(function (it) { execInit(sub, it); });
          else if (s.init.k === "exstmt") evalE(sub, s.init.e);
          else evalE(sub, s.init);
        }
        if (s.cond && !truthy(evalE(sub, s.cond))) return null;
        ctx.guard.loops = 0;
        while (!s.cond || truthy(evalE(sub, s.cond))) {
          ctx.guard.loops++;
          if (ctx.guard.loops > ctx.guard.LMAX) throw new Error("C · loop for muito longo.");
          const r = execStmt(sub, s.body);
          if (r && r.sig === "return") return r;
          if (r && r.sig === "break") break;
          if (s.inc) evalE(sub, s.inc);
        }
        return null;
      }
      case "break": return { sig: "break" };
      case "continue": return { sig: "continue" };
      case "switch": {
        const v = evalE(scope, s.e);
        let idx = -1;
        for (let k = 0; k < s.cases.length; k++) {
          if (s.cases[k].val === null) continue;
          if (num(evalE(scope, s.cases[k].val)) === num(v)) { idx = k; break; }
        }
        if (idx < 0) for (let k = 0; k < s.cases.length; k++) if (s.cases[k].val === null) idx = k;
        if (idx < 0) return null;
        for (let k = idx; k < s.cases.length; k++) {
          const r = execStmts(scope, s.cases[k].body);
          if (r) {
            if (r.sig === "break") return null;
            return r; // return
          }
        }
        return null;
      }
      case "return":
        return { sig: "return", value: s.e ? evalE(scope, s.e) : undefined };
      case "printf": return null;
    }
    return null;
  }

  /* ----- funções matemáticas (<math.h>) ----- */
  var MATH_BUILTINS = {
    sqrt: Math.sqrt, pow: Math.pow, exp: Math.exp,
    log: Math.log, log10: Math.log10,
    fabs: Math.abs, abs: Math.abs,
    floor: Math.floor, ceil: Math.ceil, trunc: Math.trunc,
    fmod: function (a, b) { return num(a) % num(b); }
  };

  /* ----- printf / scanf (ast simplificado: entram como stmts especiais) ----- */
  // printf e scanf são tratados durante a PARSING como expressões especiais
  function builtinCall(scope, node) {
    // implementado em callFunc
    return 0;
  }

  function readCString(slot) {
    let out = "", k = slot;
    while (k < mem.length && mem[k] !== 0) { out += String.fromCharCode(mem[k]); k++; }
    return out;
  }

  function formatOutput(fmt, args, argPos) {
    let out = "";
    for (let i = 0; i < fmt.length; i++) {
      const c = fmt[i];
      if (c === "\\" && i + 1 < fmt.length) {
        const e = fmt[i + 1];
        out += e === "n" ? "\n" : e === "t" ? "\t" : e === "\\" ? "\\" : e === '"' ? '"' : "\\" + e;
        i++;
        continue;
      }
      if (c === "%") {
        if (i + 1 < fmt.length && fmt[i + 1] === "%") { out += "%"; i++; continue; }
        let prec = -1, conv;
        let j = i + 1;
        if (fmt[j] === ".") {
          j++;
          let np = "";
          while (j < fmt.length && /\d/.test(fmt[j])) { np += fmt[j]; j++; }
          prec = parseInt(np, 10) || 0;
        }
        while (j < fmt.length && /l/.test(fmt[j])) j++;
        conv = fmt[j] || "";
        const val = args[argPos];
        argPos++;
        if (conv === "d" || conv === "i") out += String(Math.trunc(Number(val)));
        else if (conv === "f") out += prec >= 0 ? Number(val).toFixed(prec) : String(Number(val));
        else if (conv === "s") {
          if (val && val.t === "str") out += val.v;
          else if (val && val.t === "arr") out += readCString(Number(val.slot));
          else out += readCString(Number(val));
        }
        else if (conv === "c") out += String.fromCharCode(Number(val));
        else if (conv === "p") out += "0x" + Number(val).toString(16);
        else out += "%" + conv;
        i = j;
        continue;
      }
      out += c;
    }
    return { out: out, pos: argPos };
  }

  function callFunc(scope, node) {
    // builtin printf / scanf
    const fnNode = node.fn;
    if (fnNode && fnNode.k === "var") {
      const name = fnNode.name;
      if (name === "printf" || name === "puts") {
        const fmtArg = node.args[0];
        if (!fmtArg || fmtArg.k !== "strlit") throw new Error("printf espera um texto como primeiro argumento");
        const fmt = fmtArg.v;
        const args = node.args.slice(1).map(function (a) { return evalE(scope, a); });
        let r = formatOutput(fmt, args, 0);
        if (name === "puts") r.out += "\n";
        io.out(r.out);
        return undefined;
      }
      if (name === "scanf") {
        const fmtArg = node.args[0];
        if (!fmtArg || fmtArg.k !== "strlit") throw new Error("scanf espera um formato");
        const fmt = fmtArg.v;
        const targets = node.args.slice(1);
        let ti = 0, pi = 0;
        while (pi < fmt.length) {
          if (fmt[pi] !== "%") { pi++; continue; }
          pi++;
          if (fmt[pi] === "%") { pi++; continue; }
          if (fmt[pi] === ".") { while (pi < fmt.length && /\d/.test(fmt[pi] || "")) pi++; if (fmt[pi]) pi++; continue; }
          const conv = fmt[pi] || "";
          const target = targets[ti];
          ti++;
          if (!target) break;
          const raw = io.inp("Valor: ");
          const locScalar = function () {
            return storeLoc(scope, target.k === "addr" ? target.e : target);
          };
          if (conv === "d" || conv === "i") mem[locScalar().slot] = parseInt(raw, 10) || 0;
          else if (conv === "f" || conv === "lf") mem[locScalar().slot] = parseFloat(raw) || 0;
          else if (conv === "c") mem[locScalar().slot] = (raw && raw.length ? raw.charCodeAt(0) : 0);
          else if (conv === "s" || conv === "[") {
            let slot;
            if (target.k === "addr") slot = storeLoc(scope, target.e).slot;
            else if (target.k === "var") {
              const ent = lookup(scope, target.name);
              if (ent && (ent.dims || ent.arrParam)) slot = ent.slot;
              else if (ent && ent.ptr) slot = mem[ent.slot];
              else slot = storeLoc(scope, target).slot;
            } else if (target.k === "deref") slot = Number(evalE(scope, target.e));
            else slot = storeLoc(scope, target).slot;
            for (let k = 0; k < raw.length; k++) mem[slot + k] = raw.charCodeAt(k);
            mem[slot + raw.length] = 0;
          }
          pi++;
        }
        return undefined;
      }
      if (MATH_BUILTINS[name]) {
        const vals = node.args.map(function (a) { return num(evalE(scope, a)); });
        return MATH_BUILTINS[name].apply(null, vals);
      }
    }
    // função definida pelo usuário
    const f = funcs[fnNode.name];
    if (!f) throw new Error("C · linha " + node.ln + ": função não definida: " + fnNode.name);
    const sub = newScope(G);
    f.params.forEach(function (pr, i) {
      const argNode = node.args[i];
      if (pr.array) {
        let slot;
        const av = evalE(scope, argNode);
        if (av && av.t === "arr") slot = av.slot;
        else if (av && av.t === "str") {
          slot = allocCtx(av.v.length + 1);
          for (let k = 0; k < av.v.length; k++) mem[slot + k] = av.v.charCodeAt(k);
          mem[slot + av.v.length] = 0;
        }
        else slot = Number(av);
        sub.vars.set(pr.name, { slot: slot, dims: null, ptr: pr.ptr, type: pr.type, arrParam: true, array: true });
      } else {
        const av = evalE(scope, argNode);
        const slot = allocCtx(1);
        mem[slot] = num(av);
        sub.vars.set(pr.name, { slot: slot, dims: null, ptr: pr.ptr, type: pr.type });
      }
    });
    const r = execStmts(sub, f.body);
    if (r && r.sig === "return") return r.value;
    return undefined;
  }

  /* declarar globais a partir de expressões simples */
  globals.forEach(function (g) {
    g.items.forEach(function (it) {
      execInit(G, it);
    });
  });

  /* achar main */
  const mainFn = funcs["main"];
  if (!mainFn) throw new Error("C · função main() não encontrada.");
  execStmts(G, mainFn.body);
}

/* ================================================================
 *  Interface pública (retorna {ok} executando e escrevendo em io)
 *  ================================================================ */
function runCAPI(code, io) {
  try {
    interpretC(code, io);
    return true;
  } catch (e) {
    io.out("ERRO: " + e.message + "\n");
    return false;
  }
}

if (typeof window !== "undefined") {
  window.runC = runCAPI;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = { runC: runCAPI };
}