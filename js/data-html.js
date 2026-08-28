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
        { q: "O conteúdo visível da página fica dentro de:", opts: ["<head>", "<meta>", "<body>", "<script>"], ans: 2, expl: "Tudo que o visitante vê vai dentro do <body>." }
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
        { q: "Um comentário em HTML começa com:", opts: ["//", "<!--", "/*", "#"], ans: 1, expl: "Comentários HTML vão de <!-- até -->." }
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
        { q: "O atributo alt de uma imagem serve para:", opts: ["Definir a altura.", "Descrever o conteúdo da imagem (acessibilidade).", "Mostrar a imagem maior.", "Trocar o tamanho."], ans: 1, expl: "alt descreve a imagem para leitores de tela e aparece se a imagem falhar." }
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
        { q: "A tag que envolve toda a tabela é:", opts: ["<tabela>", "<table>", "<tb>", "<rows>"], ans: 1, expl: "A tabela inteira fica dentro de <table>." }
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
        { q: "Para uma área de texto grande, usamos:", opts: ["<input type=\"text\">", "<textarea>", "<select>", "<p contenteditable>"], ans: 1, expl: "O <textarea> é o campo multi-linha para textos maiores." }
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
        { q: "A diferença entre <section> e <div> é:", opts: ["Nenhuma.", "A section tem significado semântico de agrupar conteúdo relacionado.", "A div é sempre maior.", "Section não existe."], ans: 1, expl: "<section> agrupa conteúdo com significado; <div> é apenas uma caixa genérica." }
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
        { q: "Por que width e height ajudam no desempenho, mesmo com loading=\"lazy\"?", opts: ["Eles diminuem o peso do arquivo.", "Reservam espaço e evitam o salto de layout ao carregar.", "Eles comprimem a imagem automaticamente.", "Não ajudam em nada."], ans: 1, expl: "Definir as dimensões reserva o espaço na página, prevenindo o deslocamento do conteúdo (CLS) quando a imagem termina de carregar." }
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
        { q: "Quando o objetivo é buscar rapidamente um termo que pode virar um favorito/URL compartilhável, o melhor é:", opts: ["Sempre POST.", "GET, porque os parâmetros ficam na URL.", "Sempre file.", "Não usar form."], ans: 1, expl: "GET expõe os parâmetros na URL, o que permite compartilhar e favoritar buscas; dados sensíveis devem usar POST." }
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
        { q: "O contraste mínimo recomendado pela WCAG para texto normal é:", opts: ["1.5:1", "3:1", "4.5:1", "10:1"], ans: 2, expl: "Para texto de tamanho normal, a WCAG exige pelo menos 4.5:1 de contraste entre texto e fundo." }
      ]
    }
  ]
};