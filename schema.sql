-- ================================================================
--  Supabase — Schema do EstudarCode
--  Rode este SQL no seu projeto em:
--      Dashboard → SQL Editor → New query → cole → Run
--  ================================================================

-- Tabela que guarda TODO o progresso de cada usuário em uma única linha.
--   answers : respostas de quiz  { "curso/topico/qN": {picked, correct} }
--   gam     : gamificação        { xp, hearts, streak, badges, ... }
create table if not exists public.user_progress (
  id         uuid primary key default gen_random_uuid(),
  user_id    uuid not null references auth.users (id) on delete cascade,
  answers    jsonb not null default '{}'::jsonb,
  gam        jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now(),
  unique (user_id)
);

-- Índice para busca rápida por usuário (já coberto por unique, mas explícito)
create index if not exists user_progress_user_id_idx
  on public.user_progress (user_id);

-- ================================================================
--  Segurança (RLS — Row Level Security)
--  Cada usuário só consegue ler/escrever a PRÓPRIA linha.
--  Isso permite usar a chave "anon" no navegador sem risco.
--  ================================================================
alter table public.user_progress enable row level security;

drop policy if exists "own progress select" on public.user_progress;
create policy "own progress select"
  on public.user_progress for select
  using (auth.uid() = user_id);

drop policy if exists "own progress insert" on public.user_progress;
create policy "own progress insert"
  on public.user_progress for insert
  with check (auth.uid() = user_id);

drop policy if exists "own progress update" on public.user_progress;
create policy "own progress update"
  on public.user_progress for update
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);
