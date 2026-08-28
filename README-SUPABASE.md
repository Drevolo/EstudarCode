# EstudarCode — Login + progresso na nuvem (Supabase)

Este app agora usa **login obrigatório** com progresso sincronizado entre várias
máquinas. A autenticação e o armazenamento ficam no **Supabase** (backend-as-a-service),
enquanto o site continua sendo estático (pode ficar no GitHub Pages).

## Resumo da arquitetura

- **Autenticação**: Supabase Auth (email + senha)
- **Banco**: Postgres, tabela `user_progress` (1 linha por usuário com `answers` + `gam` em JSONB)
- **Frontend**: continua estático; chama a API do Supabase
- **Primeiro login**: o progresso que estava no `localStorage` é **mesclado** na conta
- **O que fica local**: apenas o tema claro/escuro (preferência de máquina)

## Passo a passo (manual, só você pode fazer)

### 1. Criar o projeto no Supabase

1. Acesse **https://supabase.com** e crie uma conta (ou entre).
2. Clique em **New project**, escolha nome/região/senha do banco.
3. Aguarde o projeto ser criado (~1–2 min).

### 2. Pegar a URL e a chave anon

1. No painel, menu lateral: **Settings** → **API** (ou **Project Settings → API**).
2. Copie:
   - **Project URL**
   - **anon public** (a chave chamada `anon` / `public`)

> Use **somente** a chave `anon`. **NUNCA** use a `service_role` no navegador.

### 3. Preencher a configuração do site

Abra o arquivo **`supabase-config.js`** deste projeto e preencha:

```js
window.SUPABASE_CONFIG = {
  url: "https://SEU-PROJETO.supabase.co",   // Project URL
  anonKey: "eyJhbGciOi...",                  // anon public
};
```

### 4. Rodar o SQL (criar a tabela + segurança)

1. No painel: **SQL Editor** → **New query**.
2. Cole o conteúdo do arquivo **`schema.sql`** deste projeto.
3. Clique em **Run**.

Isso cria a tabela `user_progress` e ativa a segurança (RLS) para que cada
usuário acesse apenas o próprio progresso.

### 5. Configurar o Auth de email

1. No painel: **Authentication** → **Providers** → **Email**.
2. Deixe habilitado. Em **Confirm email**, escolha se quer exigir confirmação
   por email (recomendado). Ajuste o remetente/assunto se quiser.
3. Em **Authentication → URL Configuration**, defina o **Site URL** para a URL
   do seu site (ex.: `https://drevolo.github.io/EstudarCode/`) e inclua a URL
   de redirecionamento para o fluxo de redefinição de senha.

### 6. Publicar

Como o site é estático e já usa o Supabase via CDN, basta publicar os arquivos
como antes (ex.: GitHub Pages). Funciona normalmente.

---

## Fluxo de primeiro login e mesclagem

- Sem login: aparece a tela **Entrar / Criar conta**.
- Ao criar conta ou entrar pela primeira vez em uma máquina com progresso
  antigo no `localStorage`, esse progresso é **mesclado** na conta da nuvem.
- Depois disso a nuvem vira a fonte de verdade; o `localStorage` de progresso
  é limpo (o tema continua local).
- Abrindo em outra máquina e entrando com a mesma conta, o progresso aparece.

## Como funciona a mesclagem

- **Respostas de quiz**: união; quando há conflito, a resposta correta (`correct: true`) vence.
- **Gamificação** (XP, corações, streak, etc.): usa o **maior** valor entre local e nuvem.
- **Badges / tópicos concluídos / conquistas**: união de chaves (o que existe em um, existe no resultado).

## Segurança

- A tabela usa **RLS** — o navegador só acessa a própria linha via `auth.uid()`.
- Apenas a `anon key` fica exposta, o que é seguro do lado do cliente graças às políticas.

## Dúvidas

- **Esqueci a senha**: a tela de login tem o link "Esqueci minha senha" (fluxo nativo do Supabase).
- **Quero deslogar**: o botão de sair fica na tela inicial.
