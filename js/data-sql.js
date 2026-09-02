/* Curso: SQL */
window.COURSES = window.COURSES || {};
window.COURSES.sql = {
  name: "SQL",
  topics: [
    {
      id: "sql-intro",
      title: "Introdução ao SQL",
      subtitle: "A linguagem padrão para acessar e manipular bancos de dados relacionais.",
      blocks: [
        { t: "h", h: "O que é SQL?" },
        { t: "p", p: "SQL (Structured Query Language) é a linguagem padrão para criar, consultar, atualizar e gerenciar bancos de dados relacionais. Com ela, você pode buscar informações, inserir registros, criar tabelas e muito mais — tudo usando comandos baseados em inglês, fáceis de ler e escrever." },
        { t: "h", h: "Bancos de dados relacionais" },
        { t: "p", p: "Um banco relacional armazena dados em tabelas (linhas × colunas), como planilhas. Cada tabela representa uma entidade (clientes, pedidos, produtos) e as colunas definem os campos. As tabelas se relacionam por meio de chaves (IDs)." },
        { t: "h", h: "SGBD: o que é e exemplos" },
        { t: "p", p: "O SGBD (Sistema Gerenciador de Banco de Dados) é o software que interpreta e executa comandos SQL. Ele cuida da criação, manipulação, segurança e performance do banco." },
        { t: "lst", items: [
          "MySQL: open-source, muito usado em sites e aplicações web.",
          "PostgreSQL: avançado, com suporte a tipos complexos e extensões.",
          "SQLite: leve, embutido em apps e ideal para aprendizado local.",
          "Oracle / SQL Server: grandes, usados em empresas corporativas."
        ]},
        { t: "h", h: "Primeiro contato com SELECT" },
        { t: "p", p: "O comando mais básico do SQL é o SELECT, usado para consultar dados de uma tabela:" },
        { t: "code", c: String.raw`-- Seleciona todas as colunas da tabela clientes
SELECT * FROM clientes;

-- Seleciona apenas nome e email
SELECT nome, email FROM clientes;`, lang: "sql" },
        { t: "note", p: "SQL não diferencia maiúsculas de minúsculas (SELECT = select), mas por convenção escrevemos comandos em MAIÚSCULAS e nomes de tabelas/colunas em minúsculas." },
        { t: "warn", p: "O ; (ponto e vírgula) no final de cada comando é obrigatório na maioria dos SGBDs — ele indica o fim de uma instrução SQL." }
      ],
      quiz: [
        { q: "SQL significa:", opts: ["Simple Query Language", "Structured Query Language", "Standard Query Logic", "System Query Language"], ans: 1, expl: "SQL significa Structured Query Language, a linguagem padrão para bancos de dados relacionais." },
        { q: "O que um SGBD faz?", opts: ["Edita imagens.", "Gerencia bancos de dados, interpretando e executando comandos SQL.", "Cria páginas web.", "Compila código Python."], ans: 1, expl: "O SGBD é o software que interpreta comandos SQL e gerencia todo o ciclo de vida do banco de dados." },
        { q: "Em um banco relacional, os dados são armazenados em:", opts: ["Arquivos de texto simples.", "Tabelas com linhas e colunas.", "Pasta do computador.", "Planilhas do Excel."], ans: 1, expl: "Bancos relacionais organizam dados em tabelas (linhas × colunas), cada linha sendo um registro." },
        { q: "O comando SELECT é usado para:", opts: ["Deletar tabelas.", "Consultar dados.", "Inserir registros.", "Criar banco de dados."], ans: 1, expl: "SELECT é o comando de leitura (consulta) de dados — o mais básico do SQL." },
        { q: "O que o * significa em SELECT * FROM clientes?", opts: ["Seleciona a primeira coluna.", "Seleciona todas as colunas da tabela.", "Seleciona todas as tabelas.", "Seleciona a primeira linha."], ans: 1, expl: "O asterisco (*) é um coringa que representa todas as colunas da tabela." },
        { q: "Qual destes é um SGBD?", opts: ["Python", "MySQL", "JavaScript", "HTML"], ans: 1, expl: "MySQL é um SGBD open-source amplamente usado em aplicações web." },
        { q: "O que acontece sem o ponto e vírgula no final de um comando SQL?", opts: ["Nada, é opcional.", "Pode causar erro dependendo do SGBD.", "O comando é ignorado.", "Executa duas vezes."], ans: 1, expl: "O ; indica o fim da instrução; sem ele, muitos SGBDs não sabem onde termina o comando." },
        { q: "O comando SELECT nome FROM clientes retorna:", opts: ["Todos os dados de todas as tabelas.", "A coluna 'nome' de todos os registros da tabela 'clientes'.", "Apenas a primeira linha da tabela.", "O nome do banco de dados."], ans: 1, expl: "SELECT [coluna] FROM [tabela] retorna todos os valores daquela coluna, uma linha por registro." },
        { q: "Qual é a principal característica de um banco relacional?", opts: ["Dados em formato de texto.", "Dados organizados em tabelas com relações entre si.", "Dados em formato JSON.", "Dados armazenados apenas em nuvem."], ans: 1, expl: "Tabelas relacionadas por chaves (IDs) é a base do modelo relacional, que permite cruzar dados de diferentes entidades." },
        { q: "SQLite é diferente dos outros SGBDs porque:", opts: ["Não aceita comandos SQL.", "É muito mais caro.", "É leve e embutido diretamente na aplicação, sem servidor separado.", "Só funciona no Windows."], ans: 2, expl: "SQLite não requer um servidor dedicado — o banco inteiro é um único arquivo, ideal para apps e testes locais." }
      ]
    },
    {
      id: "sql-select",
      title: "SELECT e WHERE",
      subtitle: "Selecionando colunas e filtrando resultados com condições.",
      blocks: [
        { t: "h", h: "Selecionando colunas específicas" },
        { t: "p", p: "Em vez de usar *, você pode escolher exatamente quais colunas desejar. Isso é mais eficiente e deixa a consulta mais clara:" },
        { t: "code", c: String.raw`SELECT nome, email, cidade
FROM clientes;`, lang: "sql" },
        { t: "h", h: "Filtrando com WHERE" },
        { t: "p", p: "O WHERE filtra registros com base em uma condição. Apenas as linhas que atendem à condição são retornadas:" },
        { t: "code", c: String.raw`-- Clientes da cidade de São Paulo
SELECT nome, email
FROM clientes
WHERE cidade = 'São Paulo';

-- Pedidos com valor acima de 100
SELECT id, valor
FROM pedidos
WHERE valor > 100;`, lang: "sql" },
        { t: "h", h: "Operadores de comparação" },
        { t: "lst", items: [
          "=  igual a",
          "<> ou !=  diferente de",
          ">  maior que",
          "<  menor que",
          ">=  maior ou igual",
          "<=  menor ou igual"
        ]},
        { t: "h", h: "AND, OR e NOT" },
        { t: "p", p: "Combine múltiplas condições com AND (todas devem ser verdadeiras), OR (pelo menos uma verdadeira) ou NOT (inverte a condição):" },
        { t: "code", c: String.raw`-- Clientes de SP com mais de 18 anos
SELECT nome
FROM clientes
WHERE cidade = 'São Paulo' AND idade > 18;

-- Clientes de SP ou do Rio
SELECT nome, cidade
FROM clientes
WHERE cidade = 'São Paulo' OR cidade = 'Rio de Janeiro';

-- Clientes que NÃO são de SP
SELECT nome, cidade
FROM clientes
WHERE NOT cidade = 'São Paulo';`, lang: "sql" },
        { t: "h", h: "LIKE: busca por padrões" },
        { t: "p", p: "O LIKE permite buscas parciais com coringas: % representa qualquer sequência de caracteres e _ representa um único caractere:" },
        { t: "code", c: String.raw`-- Nomes que começam com 'A'
SELECT nome FROM clientes
WHERE nome LIKE 'A%';

-- Emails do domínio gmail
SELECT email FROM clientes
WHERE email LIKE '%gmail.com';`, lang: "sql" },
        { t: "h", h: "IN e BETWEEN" },
        { t: "p", p: "IN testa se um valor está em uma lista. BETWEEN testa se está dentro de um intervalo (inclusive):" },
        { t: "code", c: String.raw`-- Clientes de cidades específicas
SELECT nome, cidade
FROM clientes
WHERE cidade IN ('São Paulo', 'Rio', 'Belo Horizonte');

-- Pedidos entre 50 e 200
SELECT id, valor
FROM pedidos
WHERE valor BETWEEN 50 AND 200;`, lang: "sql" },
        { t: "note", p: "O BETWEEN é inclusivo: WHERE valor BETWEEN 50 AND 200 inclui registros com valor = 50 e valor = 200." },
        { t: "warn", p: "Valores de texto (strings) no SQL usam aspas simples ('texto'), não aspas duplas. Aspas duplas geralmente são usadas para nomes de colunas/tabelas." }
      ],
      quiz: [
        { q: "O que o WHERE faz em um SELECT?", opts: ["Ordena os resultados.", "Filtra registros com base em uma condição.", "Conta quantas linhas existem.", "Junta duas tabelas."], ans: 1, expl: "WHERE é o filtro: apenas as linhas que atendem à condição são retornadas na consulta." },
        { q: "Qual operador testa se um valor NÃO é igual a outro?", opts: ["==", "<>", "!=", "Ambas <> e !="], ans: 3, expl: "Tanto <> quanto != são aceitos na maioria dos SGBDs para testar desigualdade." },
        { q: "O que cidade LIKE 'A%' encontra?", opts: ["Cidades com 'A' em qualquer lugar.", "Cidades que começam com 'A'.", "Cidades com exatamente um caractere.", "Cidades que terminam com 'A'."], ans: 1, expl: "'A%' significa 'A' seguido de qualquer coisa — o % é um coringa para zero ou mais caracteres." },
        { q: "O operador BETWEEN 10 AND 20 inclui os valores 10 e 20?", opts: ["Apenas 10.", "Apenas 20.", "Sim, ambos são inclusivos.", "Nenhum dos dois."], ans: 2, expl: "BOTH LIMITES são inclusivos: WHERE BETWEEN 10 AND 20 inclui 10, 20 e tudo entre eles." },
        { q: "Para listar clientes de SP ou do Rio, usamos:", opts: ["WHERE cidade = 'SP' AND cidade = 'Rio'", "WHERE cidade = 'SP' OR cidade = 'Rio'", "WHERE cidade IN ('SP' AND 'Rio')", "WHERE cidade = 'SP' + 'Rio'"], ans: 1, expl: "OR retorna linhas onde pelo menos uma das condições é verdadeira. AND exigiria que fosse as duas cidades ao mesmo tempo." },
        { q: "O que SELECT DISTINCT faz?", opts: ["Remove colunas duplicadas.", "Retorna valores únicos (sem duplicatas) da coluna.", "Seleciona todas as colunas.", "Conta as linhas."], ans: 1, expl: "DISTINCT elimina linhas repetidas: SELECT DISTINCT cidade retorna cada cidade apenas uma vez." },
        { q: "A consulta WHERE NOT cidade = 'São Paulo' é equivalente a:", opts: ["WHERE cidade = 'São Paulo'", "WHERE cidade <> 'São Paulo'", "WHERE cidade IS NULL", "WHERE cidade = NULL"], ans: 1, expl: "NOT inverte a condição: se não é São Paulo, é equivalente a cidade diferente de São Paulo." },
        { q: "O que o _ (underscore) representa no LIKE?", opts: ["Qualquer número de caracteres.", "Exatamente um caractere.", "Um espaço em branco.", "Nada, é ignorado."], ans: 1, expl: "Underscore (_) é um coringa para exatamente um caractere, diferente de % que representa qualquer quantidade." },
        { q: "Qual consulta lista produtos com nome que termina com 'fone'?", opts: ["WHERE nome LIKE 'fone%'", "WHERE nome LIKE '%fone'", "WHERE nome = '*fone'", "WHERE nome LIKE '_fone_'"], ans: 1, expl: "'%fone' encontra qualquer texto que termine com 'fone', com qualquer coisa antes." },
        { q: "Os valores de texto em consultas SQL devem ser envolvidos por:", opts: ["Aspas duplas \" \"", "Aspas simples ' '", "Parênteses ( )", "Colchetes [ ]"], ans: 1, expl: "No SQL padrão, strings usam aspas simples: WHERE cidade = 'São Paulo'." }
      ]
    },
    {
      id: "sql-order",
      title: "ORDER BY e LIMIT",
      subtitle: "Ordenando resultados, limitando linhas e usando aliases.",
      blocks: [
        { t: "h", h: "Ordenando com ORDER BY" },
        { t: "p", p: "ORDER BY organiza os resultados por uma ou mais colunas. ASC ordena de forma crescente (padrão) e DESC, decrescente:" },
        { t: "code", c: String.raw`-- Clientes em ordem alfabética (crescente)
SELECT nome, cidade
FROM clientes
ORDER BY nome ASC;

-- Pedidos do mais caro para o mais barato
SELECT id, valor, data
FROM pedidos
ORDER BY valor DESC;`, lang: "sql" },
        { t: "h", h: "Múltiplas colunas de ordenação" },
        { t: "p", p: "Você pode ordenar por várias colunas: a primeira define a ordem principal; em caso de empate, a segunda decide, e assim por diante:" },
        { t: "code", c: String.raw`-- Ordena por cidade, e dentro da cidade por nome
SELECT nome, cidade
FROM clientes
ORDER BY cidade ASC, nome ASC;`, lang: "sql" },
        { t: "h", h: "LIMIT e OFFSET" },
        { t: "p", p: "LIMIT controla quantas linhas são retornadas. OFFSET pula um número de linhas antes de começar — útil para paginação:" },
        { t: "code", c: String.raw`-- Primeiros 5 pedidos mais caros
SELECT id, valor
FROM pedidos
ORDER BY valor DESC
LIMIT 5;

-- Paginação: página 2 (pula 10, mostra 10)
SELECT id, nome, email
FROM clientes
ORDER BY id
LIMIT 10 OFFSET 10;`, lang: "sql" },
        { t: "h", h: "Aliases com AS" },
        { t: "p", p: "AS renomeia uma coluna ou tabela no resultado da consulta. Não altera o banco — apenas muda o nome exibido:" },
        { t: "code", c: String.raw`-- Renomeando colunas
SELECT nome AS nome_cliente, email AS endereco
FROM clientes;

-- Calculando e renomeando
SELECT nome, preco, quantidade,
       preco * quantidade AS valor_total
FROM produtos;`, lang: "sql" },
        { t: "note", p: "Em PostgreSQL e MySQL, AS é opcional: SELECT nome cliente funciona. Mas usar AS é mais claro e portável entre SGBDs." },
        { t: "warn", p: "LIMIT não é padronizado no SQL. No PostgreSQL e MySQL usa-se LIMIT ... OFFSET. No SQL Server, usa-se SELECT TOP 10 ... No Oracle, usa-se FETCH FIRST 10 ROWS ONLY." }
      ],
      quiz: [
        { q: "A ordenação padrão do ORDER BY é:", opts: ["DESC (decrescente)", "ASC (crescente)", "Aleatória", "Por ordem de inserção"], ans: 1, expl: "ASC (ascendente/crescente) é o padrão: se omitir, o SQL ordena de A-Z ou menor para maior." },
        { q: "Qual cláusula limita a quantidade de linhas retornadas?", opts: ["TOP", "LIMIT", "ROWNUM", "Depende do SGBD, mas LIMIT é comum"], ans: 3, expl: "LIMIT é usado no PostgreSQL/MySQL; TOP no SQL Server; FETCH FIRST no Oracle. A resposta correta depende do SGBD." },
        { q: "O que ORDER BY cidade ASC, nome ASC faz?", opts: ["Ordena só por cidade.", "Ordena por cidade primeiro; em caso de empate, por nome.", "Ordena por nome primeiro.", "Não faz nada."], ans: 1, expl: "A primeira coluna define a ordem principal; a segunda desempata." },
        { q: "O que SELECT preco AS valor faz?", opts: ["Renomeia a coluna 'preco' para 'valor' no resultado.", "Cria uma nova coluna no banco.", "Deleta a coluna preco.", "Multiplica preco por valor."], ans: 0, expl: "AS é um alias: muda o nome da coluna apenas no resultado da consulta, sem alterar o banco." },
        { q: "LIMIT 10 OFFSET 20 retorna:", opts: ["As 10 primeiras linhas.", "Linhas 11 a 20.", "Linhas 21 a 30.", "As 20 primeiras linhas."], ans: 2, expl: "OFFSET 20 pula as primeiras 20 linhas; LIMIT 10 pega as 10 seguintes — linhas 21 a 30 (página 3 de 10 em 10)." },
        { q: "Para ordenar por preço do mais alto para o mais baixo, usamos:", opts: ["ORDER BY preco ASC", "ORDER BY preco DESC", "ORDER BY preco HIGH", "SORT BY preco DOWN"], ans: 1, expl: "DESC ordena de forma decrescente: do maior para o menor valor." },
        { q: "O que acontece ao usar ORDER BY sem ASC nem DESC?", opts: ["Erro de sintaxe.", "Ordena de forma crescente (padrão).", "Ordena aleatoriamente.", "Não ordena."], ans: 1, expl: "ASC é o padrão implícito: ORDER BY nome é a mesma coisa que ORDER BY nome ASC." },
        { q: "O alias definido com AS pode ser usado no WHERE?", opts: ["Sim, sempre.", "Não, o WHERE usa os nomes originais das colunas.", "Apenas no MySQL.", "Apenas com chaves."], ans: 1, expl: "O WHERE filtra com os nomes reais das colunas; aliases com AS são apenas para exibição no resultado." },
        { q: "Qual consulta retorna os 3 clientes mais recentes (maior id)?", opts: ["SELECT * FROM clientes ORDER BY id LIMIT 3;", "SELECT * FROM clientes WHERE id = 3;", "SELECT TOP 3 * FROM clientes ORDER BY id DESC;", "SELECT * FROM clientes ORDER BY id DESC LIMIT 3;"], ans: 3, expl: "ORDER BY id DESC coloca os maiores IDs primeiro; LIMIT 3 pega apenas os 3 primeiros." },
        { q: "Para ordenar por cidade em ordem alfabética e, dentro da cidade, por nome do mais recente, usamos:", opts: ["ORDER BY cidade, nome", "ORDER BY cidade ASC, nome DESC", "ORDER BY nome DESC, cidade ASC", "SORT BY cidade, nome DESC"], ans: 1, expl: "cidade ASC ordena de A-Z; nome DESC desempata do Z-A dentro de cada cidade." }
      ]
    },
    {
      id: "sql-agregacao",
      title: "Funções de Agregação",
      subtitle: "Contando, somando e agrupando dados com COUNT, SUM, AVG e GROUP BY.",
      blocks: [
        { t: "h", h: "Funções de agregação" },
        { t: "p", p: "Funções de agregação processam múltiplas linhas e retornam um único valor. São fundamentais para resumir dados:" },
        { t: "lst", items: [
          "COUNT(coluna): conta o número de linhas (ignora NULL).",
          "COUNT(*): conta todas as linhas, incluindo valores NULL.",
          "SUM(coluna): soma todos os valores numéricos.",
          "AVG(coluna): calcula a média dos valores.",
          "MIN(coluna): retorna o menor valor.",
          "MAX(coluna): retorna o maior valor."
        ]},
        { t: "code", c: String.raw`-- Quantos clientes existem?
SELECT COUNT(*) AS total_clientes
FROM clientes;

-- Valor total e médio dos pedidos
SELECT
    SUM(valor) AS valor_total,
    AVG(valor) AS valor_medio,
    MIN(valor) AS menor_pedido,
    MAX(valor) AS maior_pedido
FROM pedidos;`, lang: "sql" },
        { t: "h", h: "Agrupando com GROUP BY" },
        { t: "p", p: "GROUP BY agrupa linhas que têm valores iguais em uma coluna, permitindo usar funções de agregação por grupo:" },
        { t: "code", c: String.raw`-- Quantos clientes há em cada cidade?
SELECT cidade, COUNT(*) AS quantidade
FROM clientes
GROUP BY cidade;

-- Valor total de pedidos por cliente
SELECT cliente_id, SUM(valor) AS total_gasto
FROM pedidos
GROUP BY cliente_id;`, lang: "sql" },
        { t: "h", h: "Filtrando grupos com HAVING" },
        { t: "p", p: "HAVING filtra resultados DEPOIS da agregação, diferente do WHERE que filtra ANTES. Use HAVING quando a condição envolver funções de agregação:" },
        { t: "code", c: String.raw`-- Cidades com mais de 5 clientes
SELECT cidade, COUNT(*) AS qtd
FROM clientes
GROUP BY cidade
HAVING COUNT(*) > 5;

-- Clientes que gastaram mais de 500 no total
SELECT cliente_id, SUM(valor) AS total
FROM pedidos
GROUP BY cliente_id
HAVING SUM(valor) > 500;`, lang: "sql" },
        { t: "note", p: "Ordem de execução: FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY. WHERE filtra linhas individuais; HAVING filtra grupos já formados." },
        { t: "warn", p: "Em SELECT com GROUP BY, toda coluna que não está em uma função de agregação DEVE estar no GROUP BY. Caso contrário, o comportamento é indefinido no SQL padrão." }
      ],
      quiz: [
        { q: "COUNT(*) conta:", opts: ["Apenas valores não nulos.", "Todas as linhas, incluindo NULLs.", "Apenas a primeira coluna.", "Apenas colunas de texto."], ans: 1, expl: "COUNT(*) conta todas as linhas sem importar o conteúdo das colunas." },
        { q: "Qual função retorna a soma dos valores de uma coluna?", opts: ["AVG()", "COUNT()", "SUM()", "MAX()"], ans: 2, expl: "SUM() soma todos os valores numéricos de uma coluna, ignorando NULLs automaticamente." },
        { q: "GROUP BY serve para:", opts: ["Ordenar os resultados.", "Agrupar linhas com valores iguais para usar funções de agregação por grupo.", "Filtrar linhas antes da consulta.", "Excluir dados duplicados."], ans: 1, expl: "GROUP BY transforma múltiplas linhas em grupos, permitindo contar, somar ou calcular média por categoria." },
        { q: "Qual é a diferença entre WHERE e HAVING?", opts: ["São sinônimos.", "WHERE filtra antes do agrupamento; HAVING filtra depois.", "WHERE só funciona com números.", "HAVING não aceita funções de agregação."], ans: 1, expl: "WHERE filtra linhas individuais antes do GROUP BY; HAVING filtra grupos formados, podendo usar funções de agregação." },
        { q: "A consulta SELECT cidade, COUNT(*) FROM clientes GROUP BY cidade retorna:", opts: ["O total de clientes.", "Quantos clientes há em cada cidade.", "Todas as cidades com seus clientes.", "A cidade com mais clientes."], ans: 1, expl: "GROUP BY cidade agrupa por cidade; COUNT(*) conta quantas linhas (clientes) existem em cada grupo." },
        { q: "O que COUNT(coluna) faz quando há valores NULL na coluna?", opts: ["Conta os NULLs também.", "Ignora os valores NULL, contando apenas os não nulos.", "Dá erro.", "Retorna 0."], ans: 1, expl: "COUNT(coluna) desconsidera valores NULL. Para contar tudo, incluindo NULLs, use COUNT(*)." },
        { q: "Qual consulta retorna a média de preço por categoria de produto?", opts: ["SELECT AVG(preco) FROM produtos;", "SELECT categoria, AVG(preco) FROM produtos GROUP BY categoria;", "SELECT categoria, AVG(preco) FROM produtos;", "SELECT AVG(preco) FROM produtos GROUP BY categoria;"], ans: 1, expl: "GROUP BY categoria permite calcular a média de preço para cada categoria separadamente." },
        { q: "O que acontece se uma coluna não agregada não estiver no GROUP BY?", opts: ["É ignorada silenciosamente.", "Pode retornar resultados indefinidos ou causar erro.", "O SGBD agrupa automaticamente.", "A coluna é removida do resultado."], ans: 1, expl: "No SQL padrão, colunas não agregadas que não estão no GROUP BY causam erro — o SGBD não sabe qual valor representar o grupo." },
        { q: "HAVING COUNT(*) > 3 significa:", opts: ["Retornar grupos com mais de 3 colunas.", "Retornar apenas grupos que tenham mais de 3 linhas.", "Retornar os 3 primeiros grupos.", "Retornar grupos com valor maior que 3."], ans: 1, expl: "HAVING filtra grupos: apenas aqueles cuja contagem de linhas seja maior que 3 aparecem no resultado." },
        { q: "Para saber o maior valor de pedido por cliente, usamos:", opts: ["SELECT MAX(valor) FROM pedidos;", "SELECT cliente_id, MAX(valor) FROM pedidos GROUP BY cliente_id;", "SELECT cliente_id, MAX(valor) FROM pedidos;", "SELECT MAX(valor) FROM pedidos ORDER BY cliente_id;"], ans: 1, expl: "GROUP BY cliente_id agrupa os pedidos por cliente; MAX(valor) retorna o maior pedido de cada um." }
      ]
    },
    {
      id: "sql-joins",
      title: "JOINs",
      subtitle: "Combinando dados de duas ou mais tabelas de forma poderosa.",
      blocks: [
        { t: "h", h: "Por que JOINs?" },
        { t: "p", p: "Em bancos relacionais, os dados estão divididos em tabelas para evitar repetição. JOINs combinam essas tabelas de volta, ligando-as por colunas relacionadas (geralmente chaves primárias e estrangeiras)." },
        { t: "code", c: String.raw`-- Estrutura de exemplo:
-- clientes (id, nome, email)
-- pedidos (id, cliente_id, valor, data)`, lang: "sql" },
        { t: "h", h: "INNER JOIN" },
        { t: "p", p: "Retorna apenas as linhas que têm correspondência em AMBAS as tabelas. É o join mais comum:" },
        { t: "code", c: String.raw`-- Lista cada pedido com o nome do cliente
SELECT clientes.nome, pedidos.id, pedidos.valor
FROM clientes
INNER JOIN pedidos ON clientes.id = pedidos.cliente_id;`, lang: "sql" },
        { t: "h", h: "LEFT JOIN" },
        { t: "p", p: "Retorna todas as linhas da tabela da esquerda, e as correspondentes da direita. Se não houver correspondência, retorna NULL para as colunas da direita:" },
        { t: "code", c: String.raw`-- Todos os clientes, mesmo os que não fizeram pedido
SELECT clientes.nome, pedidos.valor
FROM clientes
LEFT JOIN pedidos ON clientes.id = pedidos.cliente_id;`, lang: "sql" },
        { t: "h", h: "RIGHT JOIN" },
        { t: "p", p: "O oposto do LEFT: retorna todas as linhas da tabela da direita. Em geral, pode ser reescrito como LEFT JOIN invertendo as tabelas." },
        { t: "code", c: String.raw`-- Todos os pedidos, mesmo sem cliente associado
SELECT clientes.nome, pedidos.valor
FROM clientes
RIGHT JOIN pedidos ON clientes.id = pedidos.cliente_id;`, lang: "sql" },
        { t: "h", h: "FULL OUTER JOIN" },
        { t: "p", p: "Retorna todas as linhas de AMBAS as tabelas. Quando não há correspondência, preenche com NULL do lado que faltar:" },
        { t: "code", c: String.raw`-- Todos os clientes e todos os pedidos
SELECT clientes.nome, pedidos.valor
FROM clientes
FULL OUTER JOIN pedidos ON clientes.id = pedidos.cliente_id;`, lang: "sql" },
        { t: "h", h: "CROSS JOIN" },
        { t: "p", p: "Gera o produto cartesiano: cada linha da primeira tabela combina com cada linha da segunda. Se a primeira tem 3 e a segunda 4, resultado = 12 linhas." },
        { t: "code", c: String.raw`-- Combinação de todos os clientes com todos os produtos
SELECT clientes.nome, produtos.nome AS produto
FROM clientes
CROSS JOIN produtos;`, lang: "sql" },
        { t: "note", p: "O apelido (alias) com AS facilita a leitura: ao invés de clientes.nome, escreva c.nome e use c, p no ON. Isso torna joins com múltiplas tabelas muito mais legíveis." },
        { t: "warn", p: "Um JOIN sem condição (esquecer o ON) gera um CROSS JOIN, produzindo todas as combinações possíveis — geralmente não é o desejado e pode consumir muita memória." }
      ],
      quiz: [
        { q: "O que um INNER JOIN retorna?", opts: ["Todas as linhas da tabela esquerda.", "Todas as linhas da tabela direita.", "Apenas linhas com correspondência em ambas as tabelas.", "Todas as linhas de ambas as tabelas."], ans: 2, expl: "INNER JOIN mantém apenas as linhas onde a condição do ON é verdadeira em ambas as tabelas." },
        { q: "Em um LEFT JOIN, o que acontece com linhas da tabela esquerda sem correspondência na direita?", opts: ["São removidas.", "Retornam com NULL nas colunas da tabela direita.", "Causam erro.", "São duplicadas."], ans: 1, expl: "LEFT JOIN preserva todas as linhas da tabela esquerda; colunas da direita recebem NULL quando não há correspondência." },
        { q: "O FULL OUTER JOIN retorna:", opts: ["Apenas linhas com correspondência.", "Todas as linhas de ambas as tabelas, com NULL onde não houver par.", "Apenas linhas da tabela da esquerda.", "O mesmo que INNER JOIN."], ans: 1, expl: "FULL OUTER JOIN combina tudo: linhas com e sem correspondência em ambas as tabelas." },
        { q: "Se a tabela A tem 5 linhas e B tem 3, quantas linhas o CROSS JOIN gera?", opts: ["5", "3", "8", "15"], ans: 3, expl: "CROSS JOIN gera o produto cartesiano: 5 × 3 = 15 combinações." },
        { q: "Qual é a sintaxe correta de um JOIN?", opts: ["JOIN clientes ON pedidos.cliente_id = clientes.id", "JOIN clientes WHERE pedidos.cliente_id = clientes.id", "JOIN clientes USING clientes.id", "JOIN clientes FOR pedidos.cliente_id = clientes.id"], ans: 0, expl: "A condição de junção é definida com ON seguida da igualdade entre chaves das tabelas." },
        { q: "A tabela do LEFT JOIN que aparece à ESQUERDA do FROM:", opts: ["Pode ter linhas sem correspondência, que aparecem com NULLs.", "Nunca pode ter valores NULL.", "É sempre a tabela maior.", "É sempre ignorada."], ans: 0, expl: "A tabela esquerda (após FROM) é totalmente preservada; linhas sem par recebem NULL nas colunas da direita." },
        { q: "O que acontece se esquecer o ON em um JOIN?", opts: ["Erro de sintaxe.", "O SGBD faz um INNER JOIN automático.", "Gera um CROSS JOIN (produto cartesiano).", "Retorna a primeira tabela apenas."], ans: 2, expl: "Sem ON, não há condição de junção; todas as combinações são geradas — quase sempre indesejado." },
        { q: "Um RIGHT JOIN pode ser reescrito como:", opts: ["Um INNER JOIN.", "Um LEFT JOIN invertendo a ordem das tabelas.", "Um CROSS JOIN.", "Não existe RIGHT JOIN no SQL."], ans: 1, expl: "Basta inverter as tabelas e usar LEFT JOIN: SELECT a.x FROM b LEFT JOIN a ON ... produz o mesmo resultado." },
        { q: "Para listar todos os clientes que não fizeram nenhum pedido, a melhor opção é:", opts: ["INNER JOIN.", "LEFT JOIN com WHERE pedidos.id IS NULL.", "RIGHT JOIN.", "CROSS JOIN."], ans: 1, expl: "LEFT JOIN preserva todos os clientes; WHERE pedidos.id IS NULL filtra apenas os que não têm pedido correspondente." },
        { q: "A alias (apelido) com AS em um JOIN serve para:", opts: ["Renomear a tabela permanentemente no banco.", "Simplificar a referência à tabela na consulta (c, p ao invés de clientes, pedidos).", "Criar uma nova tabela.", "Deletar a tabela original."], ans: 1, expl: "Alias de tabela torna a consulta mais curta e legível: FROM clientes c JOIN pedidos p ON c.id = p.cliente_id." }
      ]
    },
    {
      id: "sql-subconsultas",
      title: "Subconsultas",
      subtitle: "Consultas dentro de consultas: poder e flexibilidade.",
      blocks: [
        { t: "h", h: "O que são subconsultas?" },
        { t: "p", p: "Uma subconsulta (ou subquery) é um SELECT dentro de outro SELECT, INSERT, UPDATE ou DELETE. Ela pode aparecer no WHERE, no FROM ou até no SELECT, e serve para resolver problemas complexos em etapas." },
        { t: "h", h: "Subconsulta no WHERE" },
        { t: "p", p: "A forma mais comum: usa o resultado da subconsulta como condição de filtro. É ideal para encontrar registros que dependem de dados de outra tabela:" },
        { t: "code", c: String.raw`-- Clientes que fizeram algum pedido
SELECT nome
FROM clientes
WHERE id IN (
    SELECT DISTINCT cliente_id
    FROM pedidos
);

-- Pedidos com valor acima da média
SELECT id, valor
FROM pedidos
WHERE valor > (SELECT AVG(valor) FROM pedidos);`, lang: "sql" },
        { t: "h", h: "Subconsulta no FROM" },
        { t: "p", p: "Quando você precisa tratar o resultado de uma subconsulta como se fosse uma tabela temporária, use-a no FROM (alias é obrigatório):" },
        { t: "code", c: String.raw`-- Total gasto por cliente, filtrando quem gastou mais de 500
SELECT nome, total_gasto
FROM (
    SELECT cliente_id, SUM(valor) AS total_gasto
    FROM pedidos
    GROUP BY cliente_id
) AS resumo
JOIN clientes ON clientes.id = resumo.cliente_id
WHERE total_gasto > 500;`, lang: "sql" },
        { t: "h", h: "Subconsulta no SELECT" },
        { t: "p", p: "Uma subconsulta no SELECT retorna um valor escalar (único) para cada linha. É útil para colunas calculadas baseadas em outra tabela:" },
        { t: "code", c: String.raw`-- Cada cliente com o total de seus pedidos
SELECT nome,
       (SELECT SUM(valor) FROM pedidos WHERE cliente_id = clientes.id) AS total_gasto
FROM clientes;`, lang: "sql" },
        { t: "h", h: "ANY, ALL e EXISTS" },
        { t: "lst", items: [
          "ANY: verdadeiro se pelo menos um resultado da subconsulta atender a condição.",
          "ALL: verdadeiro se todos os resultados atenderem a condição.",
          "EXISTS: verdadeiro se a subconsulta retornar pelo menos uma linha."
        ]},
        { t: "code", c: String.raw`-- Clientes que têm algum pedido (com EXISTS)
SELECT nome
FROM clientes c
WHERE EXISTS (
    SELECT 1 FROM pedidos p WHERE p.cliente_id = c.id
);

-- Produtos com preço maior que TODOS os da categoria 'Livros'
SELECT nome, preco
FROM produtos
WHERE preco > ALL (
    SELECT preco FROM produtos WHERE categoria = 'Livros'
);`, lang: "sql" },
        { t: "note", p: "Subconsultas podem ser lentas se retornarem muitas linhas. Para grandes volumes, prefira JOINs ou CTEs (WITH), que tendem a ser mais eficientes." },
        { t: "warn", p: "Uma subconsulta no WHERE que retorna múltiplas linhas NÃO pode ser comparada com = (apenas com IN, ANY, ALL). Usar = com múltiplos resultados gera erro." }
      ],
      quiz: [
        { q: "Uma subconsulta no WHERE com IN significa:", opts: ["O valor da coluna deve ser igual a todos os resultados.", "O valor da coluna deve estar presente em pelo menos um resultado da subconsulta.", "A subconsulta retorna uma única linha.", "A subconsulta é ignorada."], ans: 1, expl: "IN testa se o valor está contido no conjunto retornado pela subconsulta — equivalente lógico a vários OR." },
        { q: "O que acontece ao usar = com uma subconsulta que retorna mais de uma linha?", opts: ["Funciona normalmente.", "Retorna a primeira linha.", "Gera erro de sintaxe.", "Retorna todas as linhas."], ans: 2, expl: "Subconsultas com múltiplos resultados não podem ser comparadas com =. Use IN, ANY ou ALL." },
        { q: "A subconsulta SELECT AVG(valor) FROM pedidos retorna:", opts: ["Todas as linhas de pedidos.", "Uma única linha com a média dos valores.", "O maior valor.", "O menor valor."], ans: 1, expl: "Funções de agregação como AVG() retornam um único valor escalar — ideal para comparações no WHERE." },
        { q: "EXISTS retorna TRUE quando:", opts: ["A subconsulta retorna zero linhas.", "A subconsulta retorna pelo menos uma linha.", "Todos os valores são NULL.", "A tabela está vazia."], ans: 1, expl: "EXISTS verifica se existe pelo menos uma linha no resultado da subconsulta — é geralmente mais rápido que IN para grandes volumes." },
        { q: "O que ANY faz em WHERE preco > ANY (subconsulta)?", opts: ["Preço maior que todos os valores.", "Preço maior que pelo menos um dos valores.", "Preço menor que todos.", "Preço igual a algum."], ans: 1, expl: "ANY retorna TRUE se a condição for verdadeira para pelo menos um valor da subconsulta." },
        { q: "Uma subconsulta no FROM precisa de:", opts: ["Nada especial.", "Um alias (nome depois do fechamento de parênteses).", "A palavra-chave TEMP.", "A cláusula CREATE."], ans: 1, expl: "Subconsultas no FROM funcionam como tabelas derivadas e exigem um alias obrigatório." },
        { q: "Para listar clientes que NÃO fizeram pedidos com subconsulta, usamos:", opts: ["WHERE id IN (SELECT cliente_id FROM pedidos)", "WHERE id NOT IN (SELECT cliente_id FROM pedidos)", "WHERE EXISTS (SELECT 1 FROM pedidos)", "WHERE id = (SELECT cliente_id FROM pedidos)"], ans: 1, expl: "NOT IN exclui os IDs que aparecem na subconsulta, mantendo apenas os clientes sem pedidos." },
        { q: "A subconsulta no SELECT deve retornar:", opts: ["Múltiplas linhas.", "Exatamente uma linha e uma coluna (escalar).", "Qualquer quantidade de linhas.", "Nada, é apenas uma query."], ans: 1, expl: "No SELECT, a subconsulta deve retornar um único valor (escalar) para cada linha da consulta externa." },
        { q: "Qual é a vantagem de EXISTS sobre IN para grandes volumes?", opts: ["EXISTS para na primeira correspondência; IN processa todos os resultados.", "IN é mais rápido sempre.", "EXISTS retorna todos os resultados.", "Não há diferença."], ans: 0, expl: "EXISTS para de verificar assim que encontrar a primeira linha correspondente, enquanto IN pode precisar avaliar toda a subconsulta." },
        { q: "Uma subconsulta correlacionada é:", opts: ["Uma subconsulta que depende da consulta externa (referencia colunas dela).", "Uma subconsulta que roda independentemente.", "Uma subconsulta que retorna apenas NULL.", "Uma subconsulta no SELECT apenas."], ans: 0, expl: "Na subconsulta correlacionada, a condição referência colunas da consulta externa — ela é executada uma vez para cada linha externa." }
      ]
    },
    {
      id: "sql-dml",
      title: "INSERT, UPDATE e DELETE",
      subtitle: "Inserindo, atualizando e removendo dados do banco.",
      blocks: [
        { t: "h", h: "INSERT INTO" },
        { t: "p", p: "INSERT INTO adiciona novas linhas a uma tabela. Você especifica as colunas e os valores correspondentes:" },
        { t: "code", c: String.raw`-- Inserir um único registro
INSERT INTO clientes (nome, email, cidade)
VALUES ('Ana Silva', 'ana@email.com', 'São Paulo');

-- Inserir múltiplos registros de uma vez
INSERT INTO clientes (nome, email, cidade)
VALUES
    ('Carlos Souza', 'carlos@email.com', 'Rio de Janeiro'),
    ('Maria Costa', 'maria@email.com', 'Belo Horizonte');`, lang: "sql" },
        { t: "h", h: "Valores padrão e NULL" },
        { t: "p", p: "Se uma coluna tem valor padrão definido (DEFAULT), você pode omiti-la do INSERT. Para inserir NULL explicitamente, basta usar NULL:" },
        { t: "code", c: String.raw`-- Se 'ativo' tem DEFAULT TRUE e 'telefone' aceita NULL
INSERT INTO clientes (nome, email)
VALUES ('Pedro Lima', 'pedro@email.com');

-- Inserir NULL explicitamente
INSERT INTO clientes (nome, email, telefone)
VALUES ('João Alves', 'joao@email.com', NULL);`, lang: "sql" },
        { t: "h", h: "UPDATE" },
        { t: "p", p: "UPDATE modifica registros existentes. O WHERE é essencial — sem ele, TODAS as linhas da tabela são atualizadas:" },
        { t: "code", c: String.raw`-- Atualizar o email de um cliente específico
UPDATE clientes
SET email = 'novo@email.com'
WHERE id = 1;

-- Atualizar múltiplas colunas
UPDATE clientes
SET cidade = 'Campinas', telefone = '(19) 99999-0000'
WHERE id = 3;

-- ATENÇÃO: sem WHERE, atualiza TODAS as linhas!
UPDATE clientes
SET ativo = FALSE;`, lang: "sql" },
        { t: "h", h: "DELETE FROM" },
        { t: "p", p: "DELETE remove linhas da tabela. Como no UPDATE, o WHERE é fundamental — sem ele, todas as linhas são deletadas:" },
        { t: "code", c: String.raw`-- Deletar um cliente específico
DELETE FROM clientes
WHERE id = 5;

-- Deletar clientes inativos
DELETE FROM clientes
WHERE ativo = FALSE;`, lang: "sql" },
        { t: "note", p: "DELETE remove linhas, não colunas. Para remover uma coluna, use ALTER TABLE DROP COLUMN. Para apagar todos os dados de uma tabela rapidamente, TRUNCATE TABLE é mais rápido que DELETE sem WHERE." },
        { t: "warn", p: "ATENÇÃO: UPDATE ou DELETE sem WHERE afeta TODAS as linhas da tabela. Sempre teste primeiro com SELECT WHERE para verificar quais linhas serão modificadas." }
      ],
      quiz: [
        { q: "O INSERT INTO adiciona:", opts: ["Novas colunas a uma tabela.", "Novas linhas (registros) a uma tabela.", "Novas tabelas ao banco.", "Novos índices à tabela."], ans: 1, expl: "INSERT INTO é o comando DML para inserir novos registros (linhas) em uma tabela." },
        { q: "O que acontece ao executar UPDATE clientes SET cidade = 'SP' sem WHERE?", opts: ["Nada, é ignorado.", "Atualiza TODOS os clientes para cidade = 'SP'.", "Atualiza apenas o primeiro cliente.", "Gera erro."], ans: 1, expl: "Sem WHERE, o UPDATE afeta todas as linhas — cuidado extremo para não alterar dados que não deveriam ser modificados." },
        { q: "Para inserir NULL em uma coluna, usamos:", opts: ["0", "'' (string vazia)", "NULL", "NADA"], ans: 2, expl: "NULL é o valor SQL para ausência de dados. Não confunda com string vazia ou zero." },
        { q: "A cláusula WHERE em um DELETE serve para:", opts: ["Deletar toda a tabela.", "Especificar quais linhas devem ser removidas.", "Definir a tabela alvo.", "Criar um backup antes."], ans: 1, expl: "WHERE filtra quais linhas serão deletadas; sem ele, todas as linhas são removidas." },
        { q: "O que INSERT INTO clientes (nome) VALUES ('Ana') faz com as outras colunas?", opts: ["Insere valor vazio nelas.", "Usa o valor padrão (DEFAULT) ou NULL, dependendo da definição da tabela.", "Gera erro por não informar todas as colunas.", "Deleta as outras colunas."], ans: 1, expl: "Colunas omitidas no INSERT recebem DEFAULT (se definido) ou NULL automaticamente." },
        { q: "DELETE FROM clientes remove:", opts: ["A tabela clientes do banco.", "Todas as linhas da tabela clientes.", "Apenas a estrutura da tabela.", "Apenas linhas com WHERE."], ans: 1, expl: "DELETE FROM sem WHERE remove todos os registros da tabela, mantendo sua estrutura intacta." },
        { q: "UPDATE clientes SET nome = 'X' WHERE id = 999 — se nenhum cliente tem id 999:", opts: ["Altera o primeiro cliente.", "Nenhuma linha é alterada.", "Gera erro.", "Cria um novo cliente."], ans: 1, expl: "Se nenhuma linha satisfaz o WHERE, nenhuma é alterada — nenhum erro é gerado." },
        { q: "Como inserir múltiplos registros em um único INSERT?", opts: ["Vários INSERT separados.", "Um INSERT com múltiplas cláusulas VALUES separadas por vírgula.", "Não é possível no SQL.", "Usando UPDATE."], ans: 1, expl: "VALUES aceita múltiplas listas de valores, cada uma entre parênteses e separada por vírgula." },
        { q: "TRUNCATE TABLE é diferente de DELETE porque:", opts: ["É mais lento.", "Remove a tabela do banco.", "Esvazia a tabela de forma mais rápida e não pode ser desfeito facilmente.", "Aceita WHERE."], ans: 2, expl: "TRUNCATE remove todos os registros de forma mais rápida que DELETE, geralmente sem log detalhado — é mais difícil de reverter." },
        { q: "Qual é a ordem correta para atualizar dados com segurança?", opts: ["Executar UPDATE direto.", "Testar com SELECT WHERE antes de executar o UPDATE.", "Usar DELETE primeiro.", "Reiniciar o banco."], ans: 1, expl: "Sempre verifique quais linhas serão afetadas com um SELECT usando a mesma condição WHERE antes de executar UPDATE ou DELETE." }
      ]
    },
    {
      id: "sql-ddl",
      title: "CREATE TABLE e DDL",
      subtitle: "Definindo a estrutura do banco: tabelas, colunas e tipos de dados.",
      blocks: [
        { t: "h", h: "O que é DDL?" },
        { t: "p", p: "DDL (Data Definition Language) é o conjunto de comandos SQL para criar, modificar e excluir estruturas do banco (tabelas, índices, visões). Os principais comandos são CREATE, ALTER e DROP." },
        { t: "h", h: "CREATE TABLE" },
        { t: "p", p: "CREATE TABLE cria uma nova tabela definindo nome da coluna, tipo de dados e opcionalmente uma restrição:" },
        { t: "code", c: String.raw`CREATE TABLE clientes (
    id        INT PRIMARY KEY,
    nome      VARCHAR(100) NOT NULL,
    email     VARCHAR(150),
    cidade    VARCHAR(80),
    idade     INT,
    ativo     BOOLEAN DEFAULT TRUE
);`, lang: "sql" },
        { t: "h", h: "Tipos de dados comuns" },
        { t: "lst", items: [
          "INT: números inteiros (ex.: idade, quantidade).",
          "VARCHAR(n): texto de tamanho variável (máximo n caracteres).",
          "TEXT: texto de tamanho ilimitado (para descrições longas).",
          "DATE: data sem hora (ex.: '2025-06-15').",
          "BOOLEAN: valor lógico TRUE ou FALSE.",
          "DECIMAL(p, s): número decimal com precisão p e s casas decimais (ex.: DECIMAL(10,2) para moeda).",
          "TIMESTAMP: data e hora completas."
        ]},
        { t: "h", h: "ALTER TABLE" },
        { t: "p", p: "ALTER TABLE modifica uma tabela existente: adicionar, remover ou alterar colunas:" },
        { t: "code", c: String.raw`-- Adicionar uma coluna
ALTER TABLE clientes ADD COLUMN telefone VARCHAR(20);

-- Alterar o tipo de uma coluna
ALTER TABLE clientes ALTER COLUMN idade TYPE SMALLINT;

-- Remover uma coluna
ALTER TABLE clientes DROP COLUMN telefone;`, lang: "sql" },
        { t: "h", h: "DROP TABLE" },
        { t: "p", p: "DROP TABLE exclui uma tabela inteira e todos os seus dados permanentemente:" },
        { t: "code", c: String.raw`-- Excluir uma tabela
DROP TABLE clientes;

-- Excluir apenas se existir (evita erro)
DROP TABLE IF EXISTS clientes;`, lang: "sql" },
        { t: "note", p: "DECIMAL(10,2) significa até 10 dígitos no total, com 2 casas decimais — ou seja, até 99.999.999,99. Para moeda brasileira, DECIMAL(10,2) é perfeito." },
        { t: "warn", p: "DROP TABLE apaga a tabela e TODOS os dados permanentemente. Não existe 'lixeira' no SQL padrão. Use IF EXISTS para evitar erros se a tabela não existir." }
      ],
      quiz: [
        { q: "DDL significa:", opts: ["Data Definition Language", "Data Delete Language", "Database Design Language", "Data Display Language"], ans: 0, expl: "DDL é a linguagem de definição de dados, responsável por criar e modificar estruturas do banco." },
        { q: "O que CREATE TABLE faz?", opts: ["Consulta dados de uma tabela.", "Cria uma nova tabela com a estrutura definida.", "Modifica uma tabela existente.", "Remove uma tabela."], ans: 1, expl: "CREATE TABLE define uma nova tabela, suas colunas, tipos de dados e restrições." },
        { q: "O tipo VARCHAR(100) aceita:", opts: ["Apenas 100 caracteres.", "Texto de tamanho variável, com até 100 caracteres.", "Apenas números.", "Texto ilimitado."], ans: 1, expl: "VARCHAR(n) guarda textos com tamanho variável, de 0 até n caracteres — mais eficiente que CHAR(n) que sempre ocupa n caracteres." },
        { q: "DECIMAL(10,2) é adequado para armazenar:", opts: ["Datas.", "Texto longo.", "Valores monetários com duas casas decimais.", "Números inteiros grandes."], ans: 2, expl: "DECIMAL(10,2) guarda números com até 10 dígitos no total, 2 dos quais decimais — ideal para preços e valores financeiros." },
        { q: "O que ALTER TABLE clientes ADD COLUMN telefone VARCHAR(20) faz?", opts: ["Remove a coluna telefone.", "Adiciona a coluna 'telefone' à tabela clientes.", "Cria uma tabela chamada telefone.", "Modifica o tipo da coluna telefone."], ans: 1, expl: "ADD COLUMN acrescenta uma nova coluna à tabela existente, definindo nome e tipo." },
        { q: "DROP TABLE clientes:", opts: ["Apenas esvazia a tabela.", "Remove a tabela inteira permanentemente.", "Renomeia a tabela.", "Cria uma cópia da tabela."], ans: 1, expl: "DROP TABLE exclui a estrutura e todos os dados da tabela — não há como desfazer sem backup." },
        { q: "Qual é a diferença entre VARCHAR e TEXT?", opts: ["VARCHAR aceita números e TEXT não.", "VARCHAR tem limite definido; TEXT é para quantidades maiores de texto.", "TEXT é mais rápido.", "Não existe TEXT no SQL."], ans: 1, expl: "VARCHAR(n) tem limite definido; TEXT não tem limite prático e é usado para descrições, comentários ou textos longos." },
        { q: "O que a cláusula DEFAULT faz na definição de uma coluna?", opts: ["Torna a coluna obrigatória.", "Define um valor que será usado quando nada for informado no INSERT.", "Cria um índice automático.", "Impede valores duplicados."], ans: 1, expl: "DEFAULT define um valor padrão: se o INSERT não informar valor para aquela coluna, o padrão é usado." },
        { q: "O que acontece ao executar DROP TABLE sem IF EXISTS em uma tabela que não existe?", opts: ["Nada acontece.", "Gera erro.", "Cria a tabela vazia.", "Cria uma tabela com o mesmo nome."], ans: 1, expl: "DROP TABLE sem IF EXISTS em tabela inexistente gera erro. IF EXISTS previne isso." },
        { q: "O tipo BOOLEAN aceita quais valores?", opts: ["0 e 1 apenas.", "TRUE e FALSE.", "QUALQUER texto.", "Números decimais."], ans: 1, expl: "BOOLEAN aceita TRUE e FALSE (em alguns SGBDs, 1 e 0 também funcionam por compatibilidade)." }
      ]
    },
    {
      id: "sql-constraints",
      title: "Constraints",
      subtitle: "Garantindo integridade dos dados com regras na criação da tabela.",
      blocks: [
        { t: "h", h: "O que são Constraints?" },
        { t: "p", p: "Constraints são regras aplicadas às colunas de uma tabela para garantir a integridade e consistência dos dados. Elas impedem dados inválidos, duplicados ou inconsistentes de serem inseridos no banco." },
        { t: "h", h: "PRIMARY KEY" },
        { t: "p", p: "PRIMARY KEY identifica cada linha de forma exclusiva na tabela. Não pode ser NULL e não pode ter valores duplicados:" },
        { t: "code", c: String.raw`CREATE TABLE clientes (
    id    INT PRIMARY KEY,
    nome  VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE
);`, lang: "sql" },
        { t: "h", h: "FOREIGN KEY" },
        { t: "p", p: "FOREIGN KEY cria uma ligação entre duas tabelas, garantindo que o valor de uma coluna exista na tabela referenciada:" },
        { t: "code", c: String.raw`CREATE TABLE pedidos (
    id          INT PRIMARY KEY,
    cliente_id  INT,
    valor       DECIMAL(10,2),
    CONSTRAINT fk_cliente
        FOREIGN KEY (cliente_id)
        REFERENCES clientes(id)
);`, lang: "sql" },
        { t: "h", h: "NOT NULL e UNIQUE" },
        { t: "lst", items: [
          "NOT NULL: a coluna não pode ter valores NULL — é obrigatória.",
          "UNIQUE: todos os valores da coluna devem ser diferentes entre si."
        ]},
        { t: "h", h: "CHECK e DEFAULT" },
        { t: "code", c: String.raw`CREATE TABLE produtos (
    id       INT PRIMARY KEY,
    nome     VARCHAR(100) NOT NULL,
    preco    DECIMAL(10,2) CHECK (preco > 0),
    estoque  INT DEFAULT 0 CHECK (estoque >= 0),
    ativo    BOOLEAN DEFAULT TRUE
);`, lang: "sql" },
        { t: "h", h: "ON DELETE CASCADE" },
        { t: "p", p: "ON DELETE CASCADE define o que acontece com linhas dependentes quando a linha referenciada é deletada. CASCADE apaga as dependentes automaticamente:" },
        { t: "code", c: String.raw`CREATE TABLE pedidos (
    id          INT PRIMARY KEY,
    cliente_id  INT,
    CONSTRAINT fk_cliente
        FOREIGN KEY (cliente_id)
        REFERENCES clientes(id)
        ON DELETE CASCADE
);`, lang: "sql" },
        { t: "note", p: "ON DELETE CASCADE significa: se o cliente for deletado, todos os seus pedidos também são. Outras opções: SET NULL (coloca NULL), RESTRICT (impede a deleção), NO ACTION (comportamento padrão)." },
        { t: "warn", p: "CASCADE pode ser perigoso: deletar um registro pode apagar cadeias inteiras de dados dependentes. Use com cautela e sempre tenha backups." }
      ],
      quiz: [
        { q: "PRIMARY KEY garante que:", opts: ["A coluna pode ser NULL.", "Cada linha tenha um valor único e não nulo naquela coluna.", "A coluna aceita valores repetidos.", "A coluna tenha valor padrão."], ans: 1, expl: "PRIMARY KEY é a identificação exclusiva da linha: não aceita NULL nem duplicatas." },
        { q: "FOREIGN KEY liga:", opts: ["Duas tabelas, referenciando uma chave primária de outra tabela.", "Duas colunas da mesma tabela.", "Dois bancos de dados.", "Dois SGBDs diferentes."], ans: 0, expl: "FOREIGN KEY referencia a PRIMARY KEY de outra tabela, criando um vínculo relacional entre elas." },
        { q: "O que ON DELETE CASCADE faz quando o registro pai é deletado?", opts: ["Impede a deleção.", "Deleta automaticamente os registros dependentes nas tabelas filhas.", "Coloca NULL nos dependentes.", "Nada."], ans: 1, expl: "CASCADE propaga a deleção: registros filhos que referenciam o registro pai são automaticamente removidos." },
        { q: "NOT NULL impede:", opts: ["Valores duplicados.", "Valores nulos na coluna.", "Valores negativos.", "Valores de texto."], ans: 1, expl: "NOT NULL é uma restrição que exige que a coluna tenha sempre um valor — NULL não é aceito." },
        { q: "CHECK (preco > 0) significa:", opts: ["O preco deve ser maior que 0 para ser aceito.", "O preco deve ser menor que 0.", "O preco deve ser par.", "O preco deve ser NULL."], ans: 0, expl: "CHECK valida uma expressão lógica: o INSERT ou UPDATE é rejeitado se a condição for falsa." },
        { q: "UNIQUE impede:", opts: ["Valores NULL.", "Valores duplicados em diferentes linhas da mesma coluna.", "A inserção de dados.", "A atualização de dados."], ans: 1, expl: "UNIQUE garante que não haja dois registros com o mesmo valor naquela coluna. Diferente de PRIMARY KEY, aceita um NULL." },
        { q: "DEFAULT define:", opts: ["Uma restrição de validação.", "Um valor automático quando o INSERT não informa valor para a coluna.", "Uma chave primária.", "Um índice de busca."], ans: 1, expl: "DEFAULT é o valor que a coluna assume automaticamente se nada for informado no INSERT." },
        { q: "ON DELETE SET NULL coloca:", opts: ["O registro inteiro como NULL.", "A chave estrangeira como NULL quando o registro pai é deletado.", "Todos os valores da linha como NULL.", "Nada, apenas impede a deleção."], ans: 1, expl: "SET NULL preserva a linha filha, mas coloca NULL na coluna de referência (chave estrangeira)." },
        { q: "Uma tabela pode ter quantas PRIMARY KEY?", opts: ["Quantas quiser.", "Apenas uma.", "Uma por coluna.", "Nenhuma."], ans: 1, expl: "Uma tabela pode ter apenas uma PRIMARY KEY. Para combinar colunas como chave exclusiva, use UNIQUE constraint." },
        { q: "A diferença entre PRIMARY KEY e UNIQUE é:", opts: ["Não há diferença.", "PRIMARY KEY não aceita NULL; UNIQUE aceita pelo menos um NULL.", "UNIQUE é mais restritivo.", "PRIMARY KEY é opcional; UNIQUE é obrigatório."], ans: 1, expl: "Ambos garantem unicidade, mas PRIMARY KEY é obrigatoriamente NOT NULL e define a identidade da tabela. UNIQUE aceita um único NULL na maioria dos SGBDs." }
      ]
    },
    {
      id: "sql-views",
      title: "Views e Índices",
      subtitle: "Simplificando consultas complexas e acelerando buscas.",
      blocks: [
        { t: "h", h: "O que é uma View?" },
        { t: "p", p: "Uma View é uma consulta salva no banco de dados, tratada como se fosse uma tabela real. Quando você consulta a View, o banco executa a consulta original por baixo dos panos. É útil para simplificar consultas complexas, proteger dados sensíveis e padronizar acessos." },
        { t: "code", c: String.raw`-- Criando uma View com pedidos e nomes de clientes
CREATE VIEW resumo_pedidos AS
SELECT
    c.nome AS cliente,
    p.id AS pedido_id,
    p.valor,
    p.data
FROM clientes c
INNER JOIN pedidos p ON c.id = p.cliente_id;

-- Usando a View como se fosse uma tabela
SELECT cliente, valor
FROM resumo_pedidos
WHERE valor > 100;`, lang: "sql" },
        { t: "h", h: "Visões Materializadas" },
        { t: "p", p: "Uma visão materializada armazena o resultado da consulta em disco, diferente da View normal que executa a consulta a cada acesso. É ideal para consultas pesadas que não precisam de dados em tempo real:" },
        { t: "code", c: String.raw`-- Criando uma visão materializada
CREATE MATERIALIZED VIEW vendas_por_cliente AS
SELECT cliente_id, SUM(valor) AS total_gasto
FROM pedidos
GROUP BY cliente_id;

-- Atualizando os dados armazenados
REFRESH MATERIALIZED VIEW vendas_por_cliente;`, lang: "sql" },
        { t: "h", h: "Índices" },
        { t: "p", p: "Um índice é uma estrutura que acelera buscas em colunas específicas, semelhante ao índice de um livro. Criar um índice faz o SELECT ficar muito mais rápido nas colunas indexadas, mas consome espaço e pode desacelerar INSERTs e UPDATEs:" },
        { t: "code", c: String.raw`-- Criar um índice na coluna email
CREATE INDEX idx_email ON clientes(email);

-- Índice único (impede duplicatas)
CREATE UNIQUE INDEX idx_cpf ON clientes(cpf);

-- Índice composto (mais de uma coluna)
CREATE INDEX idx_cidade_nome ON clientes(cidade, nome);`, lang: "sql" },
        { t: "h", h: "Quando usar índices?" },
        { t: "lst", items: [
          "Colunas usadas frequentemente no WHERE.",
          "Colunas usadas em JOINs (ON).",
          "Colunas usadas no ORDER BY.",
          "NÃO indexe tabelas pequenas (o overhead não compensa).",
          "NÃO indexe colunas com poucos valores distintos (ex.: 'ativo' com TRUE/FALSE)."
        ]},
        { t: "note", p: "A maioria dos SGBDs cria automaticamente um índice para PRIMARY KEY e colunas UNIQUE. Não é necessário criar manualmente nessas colunas." },
        { t: "warn", p: "Muitos índices tornam INSERT, UPDATE e DELETE mais lentos, pois cada alteração precisa atualizar todos os índices. Use com moderação e monitore a performance." }
      ],
      quiz: [
        { q: "Uma View é:", opts: ["Uma tabela física com dados.", "Uma consulta salva no banco, tratada como tabela virtual.", "Um tipo de índice.", "Um arquivo de backup."], ans: 1, expl: "View é uma consulta armazenada com nome; ao consultá-la, o banco executa a query original por baixo." },
        { q: "A principal diferença entre View e visão materializada é:", opts: ["Visão materializada não pode ser consultada.", "Visão materializada armazena o resultado em disco; View executa a consulta a cada acesso.", "View é mais rápida sempre.", "Não há diferença."], ans: 1, expl: "Visão materializada guarda os resultados em disco (cache), tornando consultas pesadas mais rápidas — mas precisa ser atualizada manualmente ou por agendamento." },
        { q: "CREATE INDEX idx_email ON clientes(email) cria:", opts: ["Uma tabela chamada idx_email.", "Um índice na coluna email que acelera buscas.", "Uma constraint de unicidade.", "Uma nova coluna na tabela."], ans: 1, expl: "Índice acelera SELECTs que filtram ou ordenam pela coluna indexada, ao custo de espaço e lentidão em INSERT/UPDATE." },
        { q: "Quando NÃO devemos criar um índice?", opts: ["Em colunas usadas no WHERE.", "Em colunas com poucos valores distintos (ex.: gênero com M/F).", "Em colunas usadas em ORDER BY.", "Em colunas de JOIN."], ans: 1, expl: "Colunas com poucos valores distintos não se beneficiam de índice — a busca sequencial já é eficiente." },
        { q: "O que REFRESH MATERIALIZED VIEW faz?", opts: ["Atualiza os dados armazenados na visão materializada.", "Remove a visão materializada.", "Consulta a visão.", "Recria a visão do zero."], ans: 0, expl: "REFRESH atualiza os dados cache da visão materializada com o resultado mais recente da query original." },
        { q: "Um índice composto serve para:", opts: ["Indexar apenas uma coluna.", "Acelerar consultas que filtram ou ordenam por mais de uma coluna simultaneamente.", "Substituir a PRIMARY KEY.", "Criar uma nova tabela."], ans: 1, expl: "Índice composto (cidade, nome) otimiza buscas como WHERE cidade = 'SP' AND nome LIKE 'A%'." },
        { q: "Qual tipo de operação é prejudicada por índices?", opts: ["INSERT, UPDATE e DELETE.", "Apenas DELETE.", "Apenas SELECT.", "Nenhuma."], ans: 0, expl: "Cada INSERT, UPDATE ou DELETE precisa atualizar todos os índices da tabela, tornando essas operações mais lentas." },
        { q: "Por que usar Views?", opts: ["Para tornar o banco mais lento.", "Para simplificar consultas complexas e proteger dados sensíveis.", "Para deletar tabelas.", "Para criar backup."], ans: 1, expl: "Views simplificam consultas frequentes, podem esconder colunas sensíveis e padronizam o acesso aos dados." },
        { q: "Os índices são criados automaticamente para:", opts: ["Todas as colunas.", "PRIMARY KEY e colunas UNIQUE.", "Apenas colunas de texto.", "Nenhuma coluna."], ans: 1, expl: "A maioria dos SGBDs cria índices automáticos para PRIMARY KEY e UNIQUE constraints." },
        { q: "DROP VIEW nome_da_view:", opts: ["Deleta a tabela associada.", "Remove a View do banco de dados.", "Remove apenas os dados da View.", "Não existe."], ans: 1, expl: "DROP VIEW remove apenas a definição da View; dados originais nas tabelas permanecem intactos." }
      ]
    },
    {
      id: "sql-transacoes",
      title: "Transações",
      subtitle: "Garantindo integridade: tudo ou nada com COMMIT e ROLLBACK.",
      blocks: [
        { t: "h", h: "O que é uma transação?" },
        { t: "p", p: "Uma transação é um grupo de operações SQL que devem ser executadas como uma unidade indivisível: ou todas acontecem com sucesso, ou nenhuma acontece. É a base da confiabilidade em bancos de dados — especialmente quando uma operação depende de outra." },
        { t: "h", h: "BEGIN, COMMIT e ROLLBACK" },
        { t: "p", p: "BEGIN inicia a transação. COMMIT confirma todas as operações. ROLLBACK desfaz tudo que foi feito desde o BEGIN:" },
        { t: "code", c: String.raw`-- Transferência entre contas
BEGIN;

UPDATE contas SET saldo = saldo - 500 WHERE id = 1;
UPDATE contas SET saldo = saldo + 500 WHERE id = 2;

-- Se tudo deu certo:
COMMIT;

-- Se algo deu errado:
-- ROLLBACK;`, lang: "sql" },
        { t: "h", h: "Exemplo prático com tratamento de erro" },
        { t: "code", c: String.raw`BEGIN;

UPDATE contas SET saldo = saldo - 500 WHERE id = 1;

-- Verifica se há saldo suficiente
DO $$
BEGIN
    IF (SELECT saldo FROM contas WHERE id = 1) < 0 THEN
        RAISE EXCEPTION 'Saldo insuficiente';
    END IF;
END $$;

UPDATE contas SET saldo = saldo + 500 WHERE id = 2;

COMMIT;`, lang: "sql" },
        { t: "h", h: "Propriedades ACID" },
        { t: "p", p: "Transações confiáveis seguem as 4 propriedades ACID:" },
        { t: "lst", items: [
          "Atomicidade (Atomicity): todas as operações happen ou nenhuma acontece.",
          "Consistência (Consistency): o banco sai de um estado válido para outro estado válido.",
          "Isolamento (Isolation): transações simultâneas não interferem umas nas outras.",
          "Durabilidade (Durability): após COMMIT, os dados são gravados permanentemente."
        ]},
        { t: "h", h: "SAVEPOINT e ROLLBACK parcial" },
        { t: "p", p: "SAVEPOINT cria pontos de retorno parcial dentro de uma transação. ROLLBACK TO SAVEPOINT desfaz apenas até aquele ponto:" },
        { t: "code", c: String.raw`BEGIN;

UPDATE contas SET saldo = saldo - 200 WHERE id = 1;
SAVEPOINT sp1;

UPDATE contas SET saldo = saldo - 100 WHERE id = 1;

-- Algo deu errado no segundo UPDATE
ROLLBACK TO sp1;

-- O primeiro UPDATE permanece; o segundo foi desfeito
COMMIT;`, lang: "sql" },
        { t: "h", h: "Níveis de isolamento" },
        { t: "p", p: "O isolamento controla quanto uma transação pode ver dados de outras transações em andamento:" },
        { t: "lst", items: [
          "READ UNCOMMITTED: pode ver dados não confirmados (dirty reads).",
          "READ COMMITTED: só vê dados já confirmados (padrão de muitos SGBDs).",
          "REPEATABLE READ: garante que dados lidos não mudam durante a transação.",
          "SERIALIZABLE: o mais seguro; ejecuta transações como se fossem sequenciais."
        ]},
        { t: "note", p: "Por padrão, a maioria dos SGBDs usa READ COMMITTED. SERIALIZABLE é mais seguro, mas pode causar mais bloqueios e perda de performance." },
        { t: "warn", p: "Se um erro ocorrer e você não fizer ROLLBACK,许多 SGBDs mantêm a transação aberta até timeout. Sempre trate erros explicitamente e faça ROLLBACK quando necessário." }
      ],
      quiz: [
        { q: "Uma transação garante que:", opts: ["Os dados são sempre inseridos corretamente.", "Todas as operações happen ou nenhuma acontece.", "As queries ficam mais rápidas.", "Os dados são automaticamente salvos."], ans: 1, expl: "Atomicidade: uma transação é indivisível — COMMIT confirma tudo, ROLLBACK desfaz tudo." },
        { q: "O que COMMIT faz?", opts: ["Desfaz todas as operações.", "Confirma e grava permanentemente todas as operações da transação.", "Cria uma nova transação.", "Remove dados do banco."], ans: 1, expl: "COMMIT finaliza a transação, gravando todas as alterações de forma permanente no banco." },
        { q: "ROLLBACK:", opts: ["Confirma as alterações.", "Desfaz todas as alterações desde o BEGIN.", "Fecha o banco de dados.", "Cria um backup."], ans: 1, expl: "ROLLBACK desfaz tudo que foi feito desde o início da transação, restaurando o estado anterior." },
        { q: "A letra A em ACID significa:", opts: ["Access (Acesso)", "Atomicity (Atomicidade)", "Accuracy (Precisão)", "Availability (Disponibilidade)"], ans: 1, expl: "Atomicity: ou todas as operações happen ou nenhuma acontece — unidade indivisível." },
        { q: "SAVEPOINT permite:", opts: ["Fechar a transação.", "Criar um ponto de retorno parcial para desfazer apenas parte da transação.", "Confirmar tudo imediatamente.", "Deletar a transação."], ans: 1, expl: "ROLLBACK TO SAVEPOINT desfaz apenas operações após o SAVEPOINT, mantendo o restante da transação." },
        { q: "O nível de isolamento mais seguro é:", opts: ["READ UNCOMMITTED", "READ COMMITTED", "REPEATABLE READ", "SERIALIZABLE"], ans: 3, expl: "SERIALIZABLE oferece o maior nível de isolamento, tratando transações como se fossem sequenciais, mas pode causar mais bloqueios." },
        { q: "READ COMMITTED impede:", opts: ["Dados duplicados.", "Dirty reads (ler dados de transações não confirmadas).", "DELETE sem WHERE.", "Índices não atualizados."], ans: 1, expl: "READ COMMITTED só permite ler dados que já foram confirmados com COMMIT por outra transação." },
        { q: "Se uma transação faz 3 UPDATEs e depois ROLLBACK:", opts: ["Apenas o último UPDATE é desfeito.", "Os 3 UPDATEs são desfeitos.", "Nenhum UPDATE é desfeito.", "O banco é apagado."], ans: 1, expl: "ROLLBACK desfaz TODAS as operações desde o BEGIN — os 3 UPDATEs são revertidos." },
        { q: "A letra D em ACID (Durabilidade) significa que:", opts: ["Dados podem ser deletados facilmente.", "Após COMMIT, os dados são gravados permanentemente, mesmo em caso de falha.", "Dados ficam disponíveis para todos os usuários.", "Dados podem ser lidos por qualquer transação."], ans: 1, expl: "Durabilidade garante que após COMMIT, os dados sobrevivem a falhas do sistema — são gravados de forma persistente." },
        { q: "Sem BEGIN/COMMIT, cada instrução SQL no SGBD padrão:", opts: ["É tratada como uma transação automática.", "Nunca salva dados.", "Exige ROLLBACK manual.", "É ignorada."], ans: 0, expl: "No modo autocommit (padrão), cada instrução é uma transação implícita que é COMMITada automaticamente." }
      ]
    }
  ]
};
