/* Curso: HTML */
window.COURSES = window.COURSES || {};
window.COURSES.html = {
  name: "HTML",
  topics: [
    {
      id: "html-intro",
      title: "Estrutura Básica do HTML",
      subtitle: "A espinha dorsal de toda página web.",
      blocks: [
        { t: "h", h: "O que é HTML" },
        { t: "p", p: "HTML (HyperText Markup Language) é a linguagem de marcação que define a ESTRUTURA das páginas web. Ele organiza o conteúdo com \"tags\": títulos, parágrafos, imagens, links e muito mais. Juntamente com CSS (estilo) e JavaScript (interatividade), forma a base da web." },
        { t: "h", h: "A estrutura mínima de uma página" },
        { t: "code", c: String.raw`<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Minha primeira página</title>
</head>
<body>
    <h1>Olá, mundo!</h1>
    <p>Este é meu primeiro site.</p>
</body>
</html>`, lang: "html" },
        { t: "h", h: "O que cada parte significa" },
        { t: "lst", items: [
          "<!DOCTYPE html>: avisa que o documento segue o HTML5.",
          "<html>: a raiz de todo o documento.",
          "<head>: dados sobre a página (não aparecem na tela).",
          "<meta charset=\"UTF-8\">: garante acentos e emojis corretos.",
          "<title>: o texto da aba do navegador.",
          "<body>: tudo o que aparece na página."
        ]},
        { t: "h", h: "Tags de abertura e fechamento" },
        { t: "p", p: "A maioria das tags vem em par: <tag>conteúdo</tag>. A de fechamento tem a barra /. Algumas são auto-fechadas, como <br> e <img>." },
        { t: "note", p: "As tags podem ser aninhadas (uma dentro da outra) e a indentação ajuda a enxergar a hierarquia. Feche sempre as tags na ordem inversa em que abriu." }
      ],
      quiz: [
        { q: "A primeira linha de um documento HTML5 é:", opts: ["<html>", "<!DOCTYPE html>", "<head>", "<DOCTYPE>"], ans: 1, expl: "<!DOCTYPE html> declara que o documento usa HTML5 e vem antes de tudo." },
        { q: "Onde fica o título que aparece na aba do navegador?", opts: ["No <body>", "No <title> dentro do <head>", "No <footer>", "Em qualquer lugar"], ans: 1, expl: "O <title> fica dentro do <head> e controla o texto da aba do navegador." },
        { q: "O conteúdo visível da página fica dentro de:", opts: ["<head>", "<meta>", "<body>", "<script>"], ans: 2, expl: "Tudo que o visitante vê vai dentro do <body>." },
        { q: "Para que serve o atributo lang no <html>?", opts: ["Definir o estilo da página.", "Informar o idioma do documento.", "Criar um link externo.", "Ativar JavaScript."], ans: 1, expl: "O lang define o idioma do conteúdo, auxiliando leitores de tela e mecanismos de busca." },
        { q: "Qual é a função da tag <meta charset=\"UTF-8\">?", opts: ["Criar um parágrafo.", "Garantir que acentos e emojis sejam exibidos corretamente.", "Definir o título da página.", "Inserir uma imagem."], ans: 1, expl: "A codificação UTF-8 suporta caracteres especiais do português e emojis, evitando problemas de exibição." },
        { q: "HTML é a sigla de:", opts: ["HyperText Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup", "High Text Machine Learning"], ans: 0, expl: "HTML significa HyperText Markup Language, a linguagem de marcação padrão da web." },
        { q: "A tag que representa a raiz de todo o documento HTML é:", opts: ["<body>", "<head>", "<html>", "<root>"], ans: 2, expl: "A tag <html> envolve todo o conteúdo do documento e é a raiz da árvore HTML." },
        { q: "Dentro de qual tag ficam as informações sobre a página (dados metadados)?", opts: ["<body>", "<meta>", "<head>", "<footer>"], ans: 2, expl: "O <head> contém metadados, título e links para recursos que não aparecem no conteúdo visível." },
        { q: "A maioria das tags HTML:", opts: ["São auto-fechadas.", "Vem em par de abertura e fechamento.", "Não precisam ser fechadas.", "Só funcionam dentro do body."], ans: 1, expl: "A maioria das tags tem uma de abertura e outra de fechamento, como <p>...</p>." },
        { q: "O que acontece quando uma tag não é fechada corretamente?", opts: ["Nada, o navegador ignora.", "O navegador pode renderizar a página de forma inesperada.", "O site é bloqueado.", "O servidor rejeita o HTML."], ans: 1, expl: "Tags não fechadas podem causar problemas de renderização, pois o navegador tenta adivinhar a estrutura correta." }
      ]
    },
    {
      id: "html-texto",
      title: "Títulos e Texto",
      subtitle: "Organizando conteúdo com headings e parágrafos.",
      blocks: [
        { t: "h", h: "Cabeçalhos (headings)" },
        { t: "p", p: "Do <h1> (mais importante) ao <h6> (menos importante), os headings organizam a hierarquia do texto." },
        { t: "code", c: String.raw`<h1>Título principal</h1>
<h2>Subtítulo da seção</h2>
<h3>Subseção</h3>`, lang: "html" },
        { t: "h", h: "Parágrafos e ênfase" },
        { t: "code", c: String.raw`<p>Texto normal.</p>
<p><strong>Texto forte (negrito)</strong> e <em>texto em ênfase (itálico)</em>.</p>`, lang: "html" },
        { t: "h", h: "Quebra de linha" },
        { t: "code", c: String.raw`<p>Primeira linha<br>segunda linha, mesma linha</p>`, lang: "html" },
        { t: "h", h: "Comentários" },
        { t: "p", p: "Comentários não aparecem na página; servem para anotações no código." },
        { t: "code", c: String.raw`<!-- isto é um comentário -->
<p>Texto visível.</p>`, lang: "html" },
        { t: "note", p: "Não use <h1> para deixar o texto maior/negrito: os headings têm função SEMÂNTICA. Para estilo, usamos CSS!" }
      ],
      quiz: [
        { q: "Quantos níveis de heading existem (h1 até h)?", opts: ["3", "4", "5", "6"], ans: 3, expl: "Os níveis vão de <h1> a <h6>." },
        { q: "Qual tag deixa o texto em negrito com significado?", opts: ["<b>", "<strong>", "<bold>", "<negrito>"], ans: 1, expl: "<strong> dá ênfase com significado semântico (além do efeito visual)." },
        { q: "Um comentário em HTML começa com:", opts: ["//", "<!--", "/*", "#"], ans: 1, expl: "Comentários HTML vão de <!-- até -->." },
        { q: "A tag correta para criar um parágrafo de texto é:", opts: ["<div>", "<p>", "<span>", "<text>"], ans: 1, expl: "A tag <p> define parágrafos; <div> é genérica e <span> é inline." },
        { q: "A quebra de linha dentro de um parágrafo é feita com:", opts: ["<br>", "<hr>", "<lb>", "<break>"], ans: 0, expl: "A tag <br> insere uma quebra de linha sem iniciar um novo parágrafo." },
        { q: "A tag usada para criar texto em itálico com ênfase semântica é:", opts: ["<i>", "<em>", "<italic>", "<italico>"], ans: 1, expl: "<em> indica ênfase semântica, diferente de <i> que é apenas estilístico." },
        { q: "Qual é a diferença entre <strong> e <b>?", opts: ["São idênticas.", "<strong> indica importância semântica; <b> é apenas visual.", "<b> é semântico e <strong> não.", "<b> só funciona em caixa alta."], ans: 1, expl: "<strong> transmite importância/severidade; <b> aplica negrito sem significado semântico extra." },
        { q: "A tag <hr> é usada para:", opts: ["Inserir um hiperlink.", "Criar uma linha horizontal de separação.", "Fazer uma quebra de parágrafo.", "Criar uma tabela."], ans: 1, expl: "O <hr> cria uma linha horizontal que representa uma quebra temática entre seções." },
        { q: "O heading <h1> é considerado:", opts: ["O menos importante.", "O mais importante e deve aparecer poucas vezes por página.", "Apenas um estilo visual.", "Um parágrafo destacado."], ans: 1, expl: "O <h1> é o heading de maior hierarquia e normalmente aparece uma única vez por página." },
        { q: "Comentários em HTML são exibidos na página para o visitante?", opts: ["Sim, em cinza.", "Não, são ignorados pelo navegador na renderização.", "Apenas no modo desenvolvedor.", "Somente em impressões."], ans: 1, expl: "Comentários são ignorados pelo navegador e não aparecem na página; servem apenas para anotações no código." }
      ]
    },
    {
      id: "html-links",
      title: "Links e Imagens",
      subtitle: "Navegação com <a> e imagens com <img>.",
      blocks: [
        { t: "h", h: "Links com <a>" },
        { t: "p", p: "A tag <a> cria links. O atributo href indica o destino; o texto entre as tags é o que o usuário vê." },
        { t: "code", c: String.raw`<a href="https://www.example.com">Visite um site</a>
<a href="pagina2.html">Ir para outra página do site</a>`, lang: "html" },
        { t: "h", h: "Atributos" },
        { t: "p", p: "Atributos ficam DENTRO da tag de abertura, no formato nome=\"valor\". Eles configuram a tag." },
        { t: "lst", items: [
          "href: destino do link.",
          "target=\"_blank\": abre em uma nova aba.",
          "src: endereço da imagem.",
          "alt: texto alternativo da imagem."
        ]},
        { t: "h", h: "Imagens com <img>" },
        { t: "p", p: "A tag <img> é auto-fechada (não tem tag de fechamento) e sempre deve ter o alt." },
        { t: "code", c: String.raw`<img src="foto.jpg" alt="Uma foto qualquer">`, lang: "html" },
        { t: "warn", p: "O atributo alt é essencial para acessibilidade (leitores de tela) e para quando a imagem não carrega. Sempre preencha!" }
      ],
      quiz: [
        { q: "Qual tag cria um link?", opts: ["<link>", "<a>", "<href>", "<url>"], ans: 1, expl: "A tag de âncora <a> cria links; <link> serve para ligar folhas de estilo." },
        { q: "O atributo que define o endereço de um link é:", opts: ["src", "url", "href", "link"], ans: 2, expl: "href indica o destino do <a> que o usuário vai abrir." },
        { q: "O atributo alt de uma imagem serve para:", opts: ["Definir a altura.", "Descrever o conteúdo da imagem (acessibilidade).", "Mostrar a imagem maior.", "Trocar o tamanho."], ans: 1, expl: "alt descreve a imagem para leitores de tela e aparece se a imagem falhar." },
        { q: "O atributo target=\"_blank\" em um link faz:", opts: ["Abrir o link na mesma aba.", "Abrir o link em uma nova aba ou janela.", "Baixar o arquivo linkado.", "Desativar o link."], ans: 1, expl: "target=\"_blank\" instrui o navegador a abrir o destino do link em uma nova aba." },
        { q: "A tag <img> é considerada auto-fechada porque:", opts: ["Não precisa de alt.", "Não possui tag de fechamento correspondente.", "Sempre aparece no início da página.", "Não aceita atributos."], ans: 1, expl: "Diferente de tags como <p>, a <img> não tem uma tag de fechamento; ela se encerra sozinha." },
        { q: "O atributo src em uma <img> serve para:", opts: ["Definir o texto alternativo.", "Indicar o caminho ou endereço da imagem.", "Criar um link para a imagem.", "Definir o estilo da imagem."], ans: 1, expl: "O atributo src (source) indica onde o navegador deve buscar o arquivo da imagem." },
        { q: "Um link que abre o aplicativo de e-mail do usuário deve usar:", opts: ["href=\"mailto:email@exemplo.com\"", "href=\"email:email@exemplo.com\"", "href=\"send:email@exemplo.com\"", "href=\"http://email@exemplo.com\""], ans: 0, expl: "O esquema mailto: abre o cliente de e-mail padrão com o destinatário pré-preenchido." },
        { q: "Para criar um link que aponte para uma seção da mesma página, usamos:", opts: ["href=\"#id-do-elemento\"", "href=\"@id-do-elemento\"", "href=\"link#id-do-elemento\"", "href=\"sec:id-do-elemento\""], ans: 0, expl: "Um # seguido do id do elemento cria uma âncora interna que leva àquela seção da página." },
        { q: "Qual atributo permite baixar um arquivo ao clicar em um link?", opts: ["href", "save", "download", "get"], ans: 2, expl: "O atributo download instrui o navegador a baixar o arquivo em vez de abri-lo na página." },
        { q: "A tag <img> NÃO pode conter:", opts: ["O atributo alt.", "Uma tag de fechamento.</img>", "O atributo src.", "O atributo width."], ans: 1, expl: "A <img> é auto-fechada e não possui tag de fechamento; tentar usar </img> é inválido." }
      ]
    },
    {
      id: "html-tabelas",
      title: "Tabelas",
      subtitle: "Organizando dados em linhas e colunas.",
      blocks: [
        { t: "h", h: "Como montar uma tabela" },
        { t: "p", p: "Use <table> para a tabela inteira, <tr> para cada linha, <th> para células de cabeçalho e <td> para células de dados." },
        { t: "code", c: String.raw`<table>
    <tr>
        <th>Aluno</th>
        <th>Nota</th>
    </tr>
    <tr>
        <td>Ana</td>
        <td>8.5</td>
    </tr>
    <tr>
        <td>Bia</td>
        <td>7.0</td>
    </tr>
</table>`, lang: "html" },
        { t: "h", h: "Dividindo a tabela em partes" },
        { t: "p", p: "Para maior organização, podemos separar cabeçalho, corpo e rodapé da tabela:" },
        { t: "code", c: String.raw`<table>
    <thead>
        <tr><th>Produto</th><th>Preço</th></tr>
    </thead>
    <tbody>
        <tr><td>Teclado</td><td>R$ 99</td></tr>
        <tr><td>Mouse</td><td>R$ 45</td></tr>
    </tbody>
</table>`, lang: "html" },
        { t: "note", p: "O número de células por linha deve ser consistente, senão a tabela fica torta. Cuidado para manter a mesma quantidade de <td> em cada <tr>." }
      ],
      quiz: [
        { q: "A tag que cria uma linha na tabela é:", opts: ["<td>", "<tr>", "<th>", "<line>"], ans: 1, expl: "<tr> (table row) define uma linha; dentro dela vão <th> ou <td>." },
        { q: "Uma célula de cabeçalho é criada com:", opts: ["<td>", "<th>", "<head>", "<cabeçalho>"], ans: 1, expl: "<th> (table header) cria células de cabeçalho, normalmente em negrito." },
        { q: "A tag que envolve toda a tabela é:", opts: ["<tabela>", "<table>", "<tb>", "<rows>"], ans: 1, expl: "A tabela inteira fica dentro de <table>." },
        { q: "As tags <thead> e <tbody> servem para:", opts: ["Estilizar a tabela com CSS.", "Separar semanticamente o cabeçalho e o corpo da tabela.", "Adicionar linhas automaticamente.", "Remover células vazias."], ans: 1, expl: "O <thead> agrupa as linhas de cabeçalho e o <tbody> as linhas de dados, melhorando a organização e o acesso de leitores de tela." },
        { q: "O que acontece se uma linha da tabela tiver menos <td> que as outras?", opts: ["Nada, o navegador ajusta sozinho.", "A tabela pode ficar desalinhada ou com colunas quebradas.", "O navegador gera um erro visível.", "A linha é ignorada automaticamente."], ans: 1, expl: "A quantidade de células deve ser consistente em cada linha para manter o alinhamento correto das colunas." },
        { q: "A tag para criar uma célula de dados na tabela é:", opts: ["<td>", "<th>", "<cell>", "<data>"], ans: 0, expl: "A tag <td> (table data) define uma célula de dados comum dentro de uma linha." },
        { q: "O <tfoot> é usado para:", opts: ["Definir o cabeçalho da tabela.", "Agrupar linhas de rodapé da tabela.", "Inserir uma imagem na tabela.", "Estilizar a tabela com CSS."], ans: 1, expl: "O <tfoot> agrupa células de rodapé da tabela, como totais ou notas de rodapé." },
        { q: "O atributo colspan serve para:", opts: ["Definir a cor da tabela.", "Fazer uma célula ocupar várias colunas.", "Adicionar colunas automaticamente.", "Definir a largura da tabela."], ans: 1, expl: "O colspan faz uma célula se estender horizontalmente por múltiplas colunas." },
        { q: "O atributo rowspan serve para:", opts: ["Fazer uma célula ocupar várias linhas.", "Definir o número de linhas.", "Remover linhas duplicadas.", " Criar uma tabela a partir de um arquivo."], ans: 0, expl: "O rowspan faz uma célula se estender verticalmente por múltiplas linhas." },
        { q: "Qual tag define um título descritivo para a tabela inteira?", opts: ["<caption>", "<title>", "<thead>", "<summary>"], ans: 0, expl: "O <caption> dentro de <table> fornece um título acessível que descreve o conteúdo da tabela." }
      ]
    },
    {
      id: "html-formularios",
      title: "Formulários",
      subtitle: "Coletando dados do usuário com <form> e <input>.",
      blocks: [
        { t: "h", h: "A tag <form>" },
        { t: "p", p: "O <form> agrupa os campos. O atributo action diz para onde os dados vão e method diz o método HTTP (get ou post)." },
        { t: "h", h: "Exemplo de formulário" },
        { t: "code", c: String.raw`<form action="recebe.php" method="post">
    <label for="nome">Nome:</label>
    <input type="text" id="nome" name="nome">

    <label for="email">E-mail:</label>
    <input type="email" id="email" name="email">

    <label for="msg">Mensagem:</label>
    <textarea id="msg" name="msg"></textarea>

    <button type="submit">Enviar</button>
</form>`, lang: "html" },
        { t: "h", h: "Tipos de input mais comuns" },
        { t: "lst", items: [
          "type=\"text\": campo de texto.",
          "type=\"email\": valida formato de e-mail.",
          "type=\"password\": esconde o que é digitado.",
          "type=\"number\": aceita apenas números.",
          "type=\"checkbox\" / \"radio\": seleções.",
          "<select>: lista suspensa.",
          "<textarea>: área de texto maior."
        ]},
        { t: "note", p: "O atributo name é essencial: é pelo name que o servidor identifica cada campo. O label com for (ligado ao id) melhora a acessibilidade." }
      ],
      quiz: [
        { q: "Qual atributo do input valida formato de e-mail no navegador?", opts: ["type=\"email\"", "type=\"text\"", "type=\"mail\"", "readonly"], ans: 0, expl: "type=\"email\" faz o navegador validar o formato do e-mail automaticamente." },
        { q: "O <label for=\"nome\"> se liga ao campo:", opts: ["Ao de cima na página.", "Ao input com id ou name igual a \"nome\".", "Ao primeiro input.", "A nenhum."], ans: 1, expl: "O for do label referencia o id do input, melhorando a acessibilidade e o clique." },
        { q: "Para uma área de texto grande, usamos:", opts: ["<input type=\"text\">", "<textarea>", "<select>", "<p contenteditable>"], ans: 1, expl: "O <textarea> é o campo multi-linha para textos maiores." },
        { q: "O atributo action de um <form> indica:", opts: ["O método HTTP usado.", "O destino para onde os dados do formulário são enviados.", "O tipo de cada campo.", "O idioma do formulário."], ans: 1, expl: "O action aponta a URL que receberá os dados quando o formulário é enviado." },
        { q: "Qual atributo do botão dispara o envio do formulário?", opts: ["type=\"button\"", "type=\"submit\"", "type=\"send\"", "type=\"post\""], ans: 1, expl: "O type=\"submit\" faz o botão enviar os dados do formulário ao servidor." },
        { q: "O atributo method em um <form> define:", opts: ["O destino dos dados.", "A forma como os dados são enviados ao servidor (GET ou POST).", "O tipo de cada campo.", "O idioma do formulário."], ans: 1, expl: "O method determina o método HTTP usado para o envio: GET (dados na URL) ou POST (dados no corpo)." },
        { q: "Para criar uma lista suspensa de opções, usamos:", opts: ["<input type=\"list\">", "<select> com <option>", "<datalist>", "<menu>"], ans: 1, expl: "O <select> cria uma lista suspensa e cada opção é definida com <option> dentro dele." },
        { q: "O campo <input type=\"password\">:", opts: ["Aceita apenas números.", "Esconde os caracteres digitados.", "É obrigatório em todo formulário.", "Valida formato de e-mail."], ans: 1, expl: "O type=\"password\" mascara os caracteres digitados com pontos ou asteriscos por segurança." },
        { q: "Para permitir que o usuário selecione várias opções de uma vez, usamos:", opts: ["<input type=\"radio\">", "<input type=\"checkbox\">", "<input type=\"select\">", "<input type=\"multi\">"], ans: 1, expl: "O checkbox permite múltiplas seleções; o radio permite apenas uma dentro do mesmo grupo." },
        { q: "O atributo name em um <input> é importante porque:", opts: ["Define a aparência do campo.", "É pelo name que o servidor identifica cada dado enviado.", "Esconde o campo do usuário.", "Define o tipo de validação."], ans: 1, expl: "O name funciona como chave dos dados enviados; sem ele, o servidor não sabe identificar o valor do campo." }
      ]
    },
    {
      id: "html-semantica",
      title: "Semântica e Estrutura de Página",
      subtitle: "Tags que dão significado às seções do site.",
      blocks: [
        { t: "h", h: "O que é HTML semântico" },
        { t: "p", p: "Tags semânticas descrevem o SIGNIFICADO do conteúdo, não apenas a aparência. Elas melhoram acessibilidade e SEO (rankings do Google), e deixam o código mais claro." },
        { t: "h", h: "As principais" },
        { t: "lst", items: [
          "<header>: cabeçalho da página ou de uma seção.",
          "<nav>: bloco de navegação (menus).",
          "<main>: conteúdo principal e único da página.",
          "<section>: agrupa conteúdo relacionado.",
          "<article>: conteúdo independente (post, notícia...).",
          "<aside>: conteúdo complementar (barra lateral).",
          "<footer>: rodapé."
        ]},
        { t: "code", c: String.raw`<header>
    <h1>Meu Site</h1>
    <nav>
        <a href="index.html">Home</a>
        <a href="sobre.html">Sobre</a>
    </nav>
</header>

<main>
    <section>
        <h2>Últimos artigos</h2>
        <article>
            <h3>Artigo 1</h3>
            <p>Conteúdo do artigo...</p>
        </article>
    </section>
</main>

<footer>
    <p>&copy; 2026 Meu Site</p>
</footer>`, lang: "html" },
        { t: "h", h: "div vs tags semânticas" },
        { t: "p", p: "A <div> é uma caixa genérica, sem significado. Use as tags semânticas sempre que o conteúdo tiver um papel claro; use <div> só para agrupamento de estilo." },
        { t: "note", p: "Escrever HTML semântico é como montar um sumário: buscadores e leitores de tela entendem a página muito melhor." }
      ],
      quiz: [
        { q: "A tag que representa o conteúdo principal da página é:", opts: ["<header>", "<main>", "<nav>", "<aside>"], ans: 1, expl: "<main> envolve o conteúdo central e único da página." },
        { q: "Menus e links de navegação ficam dentro de:", opts: ["<nav>", "<footer>", "<h1>", "<article>"], ans: 0, expl: "<nav> marca blocos de navegação, como menus." },
        { q: "A diferença entre <section> e <div> é:", opts: ["Nenhuma.", "A section tem significado semântico de agrupar conteúdo relacionado.", "A div é sempre maior.", "Section não existe."], ans: 1, expl: "<section> agrupa conteúdo com significado; <div> é apenas uma caixa genérica." },
        { q: "Qual tag semântica representa um conteúdo independente, como uma notícia ou post?", opts: ["<div>", "<section>", "<article>", "<aside>"], ans: 2, expl: "<article> é usada para conteúdo autônomo que faz sentido fora do contexto da página." },
        { q: "O <aside> é indicado para:", opts: ["O conteúdo principal da página.", "Conteúdo complementar, como uma barra lateral.", "Links de navegação.", "Rodapé do site."], ans: 1, expl: "O <aside> representa conteúdo relacionado de forma indireta ao texto principal, como dicas ou anúncios laterais." },
        { q: "A tag <header> representa:", opts: ["Apenas o topo da página.", "O cabeçalho da página ou de uma seção, contendo títulos e navegação.", "O título do navegador.", "Um parágrafo de destaque."], ans: 1, expl: "O <header> pode representar o cabeçalho da página inteira ou de uma seção individual." },
        { q: "A tag <footer> é usada para:", opts: ["Links externos.", "Rodapé da página ou seção, com informações complementares como copyright e contatos.", "Menu de navegação.", "Imagens decorativas."], ans: 1, expl: "O <footer> contém informações de encerramento de página ou seção, como direitos autorais e links úteis." },
        { q: "Qual é a principal vantagem de usar tags semânticas em vez de apenas <div>?", opts: ["Deixam o código mais curto.", "Melhoram acessibilidade, SEO e legibilidade do código.", "Eliminam a necessidade de CSS.", "São as únicas aceitas no HTML5."], ans: 1, expl: "Tags semânticas comunicam o significado do conteúdo para leitores de tela, buscadores e desenvolvedores." },
        { q: "A tag <figure> com <figcaption> é usada para:", opts: ["Criar gráficos com CSS.", "Associar uma legenda a um conteúdo independente como imagem ou código.", "Definir o layout da página.", "Substituir a tag <div>."], ans: 1, expl: "O <figure> agrupa conteúdo como imagens e o <figcaption> fornece a legenda de forma semântica." },
        { q: "O <main> deve aparecer quantas vezes em uma página?", opts: ["Quantas vezes quiser.", "De preferência uma única vez, contendo o conteúdo principal.", "Sempre no rodapé.", "Uma vez para cada seção."], ans: 1, expl: "<main> representa o conteúdo central e único; a página deve ter apenas um elemento <main>." }
      ]
    },
    {
      id: "html-media",
      title: "Mídia: imagens, áudio e vídeo",
      subtitle: "Imagens responsivas, áudio e vídeo com HTML nativo.",
      blocks: [
        { t: "h", h: "Imagens: além do básico" },
        { t: "p", p: "A tag <img> ganha atributos que vão além de src e alt. width/height definem as dimensões e evitam o salto de layout quando a página carrega; loading=\"lazy\" adia o download de imagens fora da tela; loading=\"eager\" (padrão) carrega na hora." },
        { t: "code", c: String.raw`<img src="foto.jpg" alt="Pôr do sol na praia"
     width="800" height="600"
     loading="lazy">`, lang: "html" },
        { t: "h", h: "Imagens responsivas: srcset e picture" },
        { t: "p", p: "O atributo srcset entrega várias versões da mesma imagem e o navegador escolhe a ideal conforme a largura da tela. Já o <picture> permite trocar o arquivo inteiro em media queries específicas, útil para formatos modernos como webp ou para imagens com orientação muito diferente." },
        { t: "code", c: String.raw`<img src="foto.jpg"
     srcset="foto-400.jpg 400w, foto-800.jpg 800w, foto-1200.jpg 1200w"
     sizes="(max-width: 600px) 100vw, 50vw"
     alt="Paisagem de montanhas">

<picture>
    <source media="(min-width: 800px)" srcset="foto-larga.webp" type="image/webp">
    <img src="foto.jpg" alt="Paisagem de montanhas">
</picture>`, lang: "html" },
        { t: "h", h: "Áudio com <audio>" },
        { t: "p", p: "O <audio> usa controls para mostrar os controles de reprodução. autoplay tenta tocar sozinho (mas os navegadores quase sempre bloqueiam sem interação do usuário) e loop repete. O atributo preload controla se o navegador baixa o áudio antecipadamente." },
        { t: "code", c: String.raw`<audio controls preload="metadata">
    <source src="musica.mp3" type="audio/mpeg">
    <source src="musica.ogg" type="audio/ogg">
    Seu navegador não suporta áudio HTML5.
</audio>`, lang: "html" },
        { t: "h", h: "Vídeo com <video>" },
        { t: "p", p: "Assim como no áudio, oferecemos múltiplos <source> para o navegador escolher o formato que suporta (ex.: mp4 e webm). Sempre inclua texto de fallback dentro do <video> para navegadores antigos." },
        { t: "code", c: String.raw`<video controls width="640" poster="capa.jpg">
    <source src="video.mp4" type="video/mp4">
    <source src="video.webm" type="video/webm">
    Seu navegador não suporta vídeo HTML5.
</video>`, lang: "html" },
        { t: "h", h: "Figure e figcaption" },
        { t: "p", p: "O <figure> agrupa um conteúdo independente (imagem, código, gráfico) e o <figcaption> fornece a legenda. Eles conectam a mídia ao seu texto explicativo de forma semântica." },
        { t: "code", c: String.raw`<figure>
    <img src="grafico.png" alt="Gráfico de vendas do trimestre">
    <figcaption>Vendas do primeiro trimestre de 2026.</figcaption>
</figure>`, lang: "html" },
        { t: "warn", p: "width e height no <img> evitam o deslocamento da página ao carregar (CLS, Cumulative Layout Shift), mas não definem o tamanho de exibição: isso é papel do CSS. Se definir largura e altura desproporcionais, use object-fit no CSS para não distorcer a imagem." },
        { t: "note", p: "autoplay raramente funciona sem mudo (muted). Nos navegadores modernos, um vídeo só toca sozinho se tiver o atributo muted, justamente para não incomodar o usuário." }
      ],
      quiz: [
        { q: "loading=\"lazy\" em uma <img> significa que:", opts: ["A imagem nunca carrega.", "A imagem é carregada somente quando está perto da área visível.", "A imagem carrega primeiro que todas.", "A imagem só carrega com clique."], ans: 1, expl: "lazy adia o download até a imagem se aproximar do viewport, economizando dados em telas longas." },
        { q: "Qual é o papel do <source> dentro de <video>?", opts: ["Definir a legenda do vídeo.", "Oferecer formatos alternativos; o navegador usa o primeiro que suporta.", "Controlar o volume do vídeo.", "Redimensionar a imagem."], ans: 1, expl: "Vários <source> dão alternativas de codec; o navegador escolhe o primeiro suportado, garantindo compatibilidade." },
        { q: "A diferença entre <figure> e <img> com legenda solta é:", opts: ["Nenhuma.", "O <figure> com <figcaption> liga a mídia à sua legenda de forma semântica.", "O <figure> deixa a imagem maior.", "O <img> não aceita texto."], ans: 1, expl: "<figcaption> dentro de <figure> associa a legenda ao conteúdo de forma semanticamente correta, útil para leitores de tela." },
        { q: "Por que width e height ajudam no desempenho, mesmo com loading=\"lazy\"?", opts: ["Eles diminuem o peso do arquivo.", "Reservam espaço e evitam o salto de layout ao carregar.", "Eles comprimem a imagem automaticamente.", "Não ajudam em nada."], ans: 1, expl: "Definir as dimensões reserva o espaço na página, prevenindo o deslocamento do conteúdo (CLS) quando a imagem termina de carregar." },
        { q: "Qual atributo define a imagem de capa de um vídeo antes de ele ser reproduzido?", opts: ["thumb", "poster", "cover", "preview"], ans: 1, expl: "O atributo poster exibe uma imagem de pré-visualização enquanto o vídeo não foi iniciado." },
        { q: "O elemento <source> dentro de <audio> ou <video> serve para:", opts: ["Definir o volume do arquivo de mídia.", "Fornecer formatos alternativos para o navegador escolher o que suporta.", "Controlar a velocidade de reprodução.", "Inserir uma legenda."], ans: 1, expl: "Cada <source> aponta para um formato diferente; o navegador usa o primeiro que consegue reproduzir." },
        { q: "Para que o <audio> ou <video> exiba os controles de reprodução na tela, é necessário:", opts: ["Atributo controls.", "Atributo autoplay.", "Atributo loop.", "Atributo poster."], ans: 0, expl: "O atributo controls renderiza os botões de play, pausa, volume e barra de progresso nativos." },
        { q: "O autoplay em um <video> só funciona automaticamente se o vídeo tiver o atributo:", opts: ["controls", "muted", "loop", "preload"], ans: 1, expl: "Navegadores modernos bloqueiam autoplay com som; o vídeo só toca sozinho se estiver mudo (muted)." },
        { q: "O preload em <audio> ou <video> controla:", opts: ["A velocidade de reprodução.", "Se o navegador deve baixar o arquivo de mídia antecipadamente.", "A quantidade de repetitions.", "O formato do arquivo."], ans: 1, expl: "preload define quando o navegador deve começar a baixar o arquivo: none, metadata ou auto." },
        { q: "O atributo srcset em uma <img> serve para:", opts: ["Definir o texto alternativo.", "Entregar várias versões da imagem para o navegador escolher conforme a tela.", "Trocar a ordem de exibição.", "Definir o tamanho exibido em CSS."], ans: 1, expl: "srcset lista vários arquivos com suas larguras (w) para o navegador escolher a versão ideal para a largura da tela." }
      ]
    },
    {
      id: "html-formularios",
      title: "Formulários avançados",
      subtitle: "Tipos de campo, validação nativa e boas práticas.",
      blocks: [
        { t: "h", h: "Tipos de input especializados" },
        { t: "p", p: "Além do type=\"text\", o HTML5 traz campos que mudam o teclado no celular e validam o formato: email, url, number, date, range, color e file. Usar o tipo certo melhora a experiência e reduz erros de digitação." },
        { t: "code", c: String.raw`<input type="email" name="email">
<input type="url" name="site">
<input type="number" name="idade" min="0" max="120" step="1">
<input type="date" name="nascimento">
<input type="range" name="volume" min="0" max="100" value="50">
<input type="color" name="cor" value="#58cc02">
<input type="file" name="avatar" accept="image/*">`, lang: "html" },
        { t: "h", h: "Atributos de validação" },
        { t: "p", p: "A validação nativa dispensa grande parte do JavaScript: required torna o campo obrigatório, placeholder é o texto-fantasma de exemplo, pattern aplica uma expressão regular e min/max limitam valores numéricos ou de data." },
        { t: "code", c: String.raw`<form>
    <label for="cpf">CPF:</label>
    <input type="text" id="cpf" name="cpf"
           placeholder="000.000.000-00"
           required
           pattern="[0-9]{3}\. ?[0-9]{3}\. ?[0-9]{3}-?[0-9]{2}"
           title="Digite o CPF no formato 000.000.000-00">

    <label for="idade">Idade:</label>
    <input type="number" id="idade" name="idade" min="0" max="150">

    <button type="submit">Enviar</button>
</form>`, lang: "html" },
        { t: "h", h: "Datalist: sugestões + texto livre" },
        { t: "p", p: "O <datalist> oferece sugestões de preenchimento, mas o usuário ainda pode digitar qualquer valor. É diferente do <select>, que restringe às opções. Use datalist quando quiser agilizar sem tirar a liberdade." },
        { t: "code", c: String.raw`<label for="cidade">Cidade:</label>
<input type="text" id="cidade" name="cidade" list="cidades">
<datalist id="cidades">
    <option value="São Paulo">
    <option value="Rio de Janeiro">
    <option value="Belo Horizonte">
</datalist>`, lang: "html" },
        { t: "h", h: "Fieldset e legend" },
        { t: "p", p: "O <fieldset> agrupa campos relacionados e o <legend> dá um título ao grupo. É essencial para conjuntos de radio buttons ou checkboxes: o usuário entende que pertencem ao mesmo tema." },
        { t: "code", c: String.raw`<fieldset>
    <legend>Meio de transporte</legend>
    <label><input type="radio" name="transporte" value="onibus"> Ônibus</label>
    <label><input type="radio" name="transporte" value="metro"> Metrô</label>
    <label><input type="radio" name="transporte" value="carro"> Carro</label>
</fieldset>`, lang: "html" },
        { t: "h", h: "GET vs POST" },
        { t: "p", p: "O method determina como os dados vão ao servidor. GET envia os dados na URL (visíveis e limitados em tamanho), ideal para busca e favorito. POST envia no corpo da requisição (oculto na URL, sem limite prático), ideal para dados sensíveis, upload e alterações." },
        { t: "note", p: "A validação nativa pode ser burlada com facilidade: é uma conveniência para o usuário, NÃO uma medida de segurança. Todo dado recebido deve ser revalidado no servidor." },
        { t: "warn", p: "type=\"email\" aceita formatos tecnicamente válidos mas estranhos, como a@b. Se precisar validar domínios reais ou exigir determinada estrutura, ou combiná-lo com pattern, ou validar no servidor. A validação nativa é permissiva de propósito." }
      ],
      quiz: [
        { q: "O <datalist> se diferencia do <select> porque:", opts: ["Mostra apenas opções fixas.", "Oferece sugestões, mas o usuário pode digitar livremente.", "Não funciona em navegadores.", "Só aceita números."], ans: 1, expl: "datalist sugere valores sem restringir a digitação; o select limita às opções listadas." },
        { q: "O atributo pattern em um campo usa:", opts: ["Plain text simples.", "Uma expressão regular (regex) para validar o formato.", "Uma lista de valores permitidos.", "JavaScript embutido."], ans: 1, expl: "pattern recebe uma regex que o valor digitado deve satisfazer para a validação nativa passar." },
        { q: "Qual método HTTP NÃO mostra os dados na URL?", opts: ["GET", "POST", "PUT", "DELETE"], ans: 1, expl: "O POST envia os dados no corpo da requisição, fora da URL; o GET os coloca na própria URL." },
        { q: "Quando o objetivo é buscar rapidamente um termo que pode virar um favorito/URL compartilhável, o melhor é:", opts: ["Sempre POST.", "GET, porque os parâmetros ficam na URL.", "Sempre file.", "Não usar form."], ans: 1, expl: "GET expõe os parâmetros na URL, o que permite compartilhar e favoritar buscas; dados sensíveis devem usar POST." },
        { q: "O <fieldset> com <legend> serve para:", opts: ["Criar uma tabela de dados.", "Agrupar campos relacionados com um título descritivo.", "Esconder campos do formulário.", "Validar os dados no servidor."], ans: 1, expl: "O <fieldset> delimita um grupo de campos e o <legend> fornece um rótulo acessível para esse grupo." },
        { q: "Qual atributo define o passo de incremento de um <input type=\"number\">?", opts: ["increment", "step", "delta", "range"], ans: 1, expl: "O atributo step define o intervalo entre valores válidos, como step=\"0.5\" para meio em meio." },
        { q: "O <input type=\"range\"> exibe na tela:", opts: ["Um campo de texto numérico.", "Um controle deslizante (slider) para selecionar um valor.", "Uma lista suspensa.", "Um seletor de cor."], ans: 1, expl: "O type=\"range\" renderiza um slider que permite escolher um valor entre um mínimo e máximo." },
        { q: "O <input type=\"color\"> permite ao usuário:", opts: ["Digitar uma cor em texto.", "Escolher uma cor por meio de um seletor visual nativo.", "Aplicar cores ao formulário.", "Definir a cor de fundo da página."], ans: 1, expl: "O type=\"color\" abre um seletor de cores nativo do navegador, retornando um valor hexadecimal." },
        { q: "O atributo required em um campo de formulário:", opts: ["Esconde o campo.", "Torna o campo obrigatório antes de enviar.", "Desabilita o campo.", "Define um valor padrão."], ans: 1, expl: "O required impede que o formulário seja enviado se o campo estiver vazio." },
        { q: "No <input type=\"file\">, o atributo accept serve para:", opts: ["Definir o tamanho máximo do arquivo.", "Filtrar quais tipos de arquivo o navegador mostra para seleção.", "Aceitar automaticamente o arquivo.", "Comprimir o arquivo antes do upload."], ans: 1, expl: "O accept restringe os tipos de arquivo exibidos no seletor, como accept=\"image/*\" para imagens." }
      ]
    },
    {
      id: "html-acessibilidade",
      title: "Acessibilidade",
      subtitle: "Tornando o conteúdo utilizável por todas as pessoas.",
      blocks: [
        { t: "h", h: "Por que se importar" },
        { t: "p", p: "Acessibilidade (a11y) garante que pessoas com deficiência visual, motora ou cognitiva consigam usar o site. É também um requisito legal em muitos países e melhora o SEO. Muita coisa já vem de fábrica se usarmos HTML semântico corretamente." },
        { t: "h", h: "Textos alternativos e hierarquia" },
        { t: "p", p: "Todo <img> precisa de um alt descritivo (ou alt vazio \"\" se for puramente decorativo, para o leitor de tela pular). Os headings devem formar uma hierarquia lógica: um único <h1>, seguido de <h2>, <h3>... sem pular níveis só para ajustar o tamanho." },
        { t: "code", c: String.raw`<h1>Cardápio do restaurante</h1>
<h2>Pratos principais</h2>
<h3>Massas</h3>
<h3>Carnes</h3>
<h2>Sobremesas</h2>

<img src="foto-prato.jpg" alt="Spaghetti ao molho de tomate com manjericão">
<img src="divisor.png" alt="">`, lang: "html" },
        { t: "h", h: "Labels e navegação" },
        { t: "p", p: "Todo campo de formulário deve ter um <label> ligado a ele via for/id, ou o leitor de tela não saberá o que pedir. Use <nav> para menus, o que permite saltar direto para a navegação. O atributo lang no <html> informa o idioma e melhora a pronúncia dos leitores de tela." },
        { t: "code", c: String.raw`<label for="busca">Buscar produtos:</label>
<input type="search" id="busca" name="busca">

<label for="senha">Senha:</label>
<input type="password" id="senha" name="senha" autocomplete="current-password">`, lang: "html" },
        { t: "h", h: "Contraste, teclado e ARIA" },
        { t: "p", p: "O contraste entre texto e fundo deve respeitar a WCAG (mínimo 4.5:1 para texto normal). Tudo deve ser operável por teclado (Tab, Enter, setas). Quando o HTML semântico não basta, entram os atributos ARIA: role descreve o papel de um elemento e aria-label dá um nome acessível a elementos sem texto visível." },
        { t: "h", h: "ARIA básica" },
        { t: "code", c: String.raw`<button aria-label="Fechar o diálogo">X</button>

<div role="alert" aria-live="assertive">Erro: dados inválidos.</div>

<nav aria-label="Menu principal">
    <a href="index.html">Home</a>
    <a href="contato.html">Contato</a>
</nav>`, lang: "html" },
        { t: "warn", p: "ARIA é um complemento, não um substituto da semântica. \"No ARIA is better than bad ARIA\": adicionar roles errados confunde mais do que ajuda. Prefira tags nativas (<button>, <nav>, <input>) antes de recorrer a role." },
        { t: "note", p: "aria-label sobrescreve o nome acessível de um elemento. Use-o com cuidado: em botões com texto visível significativo, o rótulo deve refletir o contexto, senão o usuário de leitor de tela ouve algo diferente do que vê." }
      ],
      quiz: [
        { q: "Uma imagem puramente decorativa deve ter:", opts: ["Um alt bem descritivo.", "alt vazio (alt=\"\"), para o leitor de tela ignorar.", "Sem tag img.", "Um title obrigatório."], ans: 1, expl: "Imagem decorativa usa alt=\"\" para os leitores de tela pularem; imagens informativas exigem alt descritivo." },
        { q: "Qual é a hierarquia de headings correta em uma página?", opts: ["Vários <h1> e nenhum <h2>.", "Um <h1>, depois <h2>, <h3>... sem pular níveis.", "Começar pelo <h6>.", "Qualquer ordem, tanto faz."], ans: 1, expl: "A hierarquia deve ser lógica e sem lacunas, garantindo a estrutura de navegação para leitores de tela." },
        { q: "Quando devemos adicionar o atributo role a um elemento?", opts: ["Sempre, em todo elemento.", "Só quando a semântica nativa não existe ou é insuficiente.", "Nunca.", "Só em textos."], ans: 1, expl: "role é um recurso de última instância; a semântica nativa deve vir primeiro. ARIA mal usado prejudica." },
        { q: "O contraste mínimo recomendado pela WCAG para texto normal é:", opts: ["1.5:1", "3:1", "4.5:1", "10:1"], ans: 2, expl: "Para texto de tamanho normal, a WCAG exige pelo menos 4.5:1 de contraste entre texto e fundo." },
        { q: "O atributo aria-label é útil quando:", opts: ["O elemento já tem um <label> visível.", "Um elemento interativo não tem texto visível para descrever sua função.", "A página precisa de mais contraste.", "O navegador é antigo."], ans: 1, expl: "aria-label fornece um nome acessível a elementos como botões sem texto, permitindo que leitores de tela descrevam sua função." },
        { q: "O atributo lang no <html> serve para:", opts: ["Mudar a cor do texto.", "Informar o idioma da página aos leitores de tela e buscadores.", "Traduzir o conteúdo automaticamente.", "Definir a codificação do documento."], ans: 1, expl: "O lang permite que leitores de tela pronunciem o texto corretamente e que buscadores identifiquem o idioma." },
        { q: "Todos os elementos interativos de um formulário devem ser:", opts: ["Estilizados com CSS.", "Operáveis por teclado (Tab, Enter, setas).", "Escondidos dos leitores de tela.", "Acompanhados de imagens."], ans: 1, expl: "A acessibilidade exige que todo componente interativo possa ser acessado e utilizado apenas com o teclado." },
        { q: "O atributo for no <label> deve corresponder a:", opts: ["O name de qualquer elemento.", "O id do campo de formulário que ele descreve.", "O type do input.", "A classe CSS do campo."], ans: 1, expl: "O for do label referencia o id do input, permitindo que o clique no rótulo ative o campo." },
        { q: "O atributo aria-live é útil quando:", opts: ["A página está em construção.", "O conteúdo de uma região muda dinamicamente e o leitor de tela deve anunciá-lo.", "O elemento está oculto.", "O navegador é antigo."], ans: 1, expl: "aria-live informa ao leitor de tela que o conteúdo de uma região pode mudar, anunciando atualizações." },
        { q: "Antes de usar atributos ARIA, a melhor prática é:", opts: ["Usar apenas ARIA e ignorar as tags nativas.", "Utilizar elementos HTML nativos que já possuem semântica adequada.", "Remover todos os rôles da página.", "Evitar o uso de任何形式 de acessibilidade."], ans: 1, expl: "\"No ARIA is better than bad ARIA\": elementos nativos como <button> e <nav> já trazem semântica correta." }
      ]
    }
  ]
};