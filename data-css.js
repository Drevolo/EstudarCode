/* Curso: CSS */
window.COURSES = window.COURSES || {};
window.COURSES.css = {
  name: "CSS",
  topics: [
    {
      id: "css-intro",
      title: "O que é CSS",
      subtitle: "Dando estilo e aparência às páginas HTML.",
      blocks: [
        { t: "h", h: "O que é CSS" },
        { t: "p", p: "CSS (Cascading Style Sheets) é a linguagem de estilo da web. Ele define cores, fontes, espaçamentos, tamanhos e posições. HTML cuida da estrutura; CSS, da aparência." },
        { t: "h", h: "Três formas de aplicar CSS" },
        { t: "lst", items: [
          "Arquivo externo (recomendado): um arquivo .css ligado pelo HTML.",
          "Tag <style> dentro do <head>.",
          "Atributo style direto em um elemento (estilo inline)."
        ]},
        { t: "code", c: String.raw`<!-- Arquivo externo: melhor prática -->
<link rel="stylesheet" href="style.css">

<!-- Estilo via <style> no head -->
<style>
    p { color: gray; }
</style>

<!-- Estilo inline (evite) -->
<p style="color: red;">Texto vermelho</p>`, lang: "html" },
        { t: "h", h: "Sintaxe básica" },
        { t: "p", p: "Uma regra CSS tem um seletor (quem vai ser estilizado) e declarações no formato propriedade: valor." },
        { t: "code", c: String.raw`p {
    color: red;
    font-size: 16px;
}`, lang: "css" },
        { t: "note", p: "\"Cascata\" significa que várias regras podem se combinar; a regra mais específica (ou a última declarada) vence quando houver conflito." }
      ],
      quiz: [
        { q: "A melhor forma de usar CSS em um projeto é:", opts: ["Estilo inline em cada tag.", "Arquivo externo ligado com <link>.", "Sempre dentro do <body>.", "Não usar CSS."], ans: 1, expl: "Arquivo externo separa estilo de estrutura, fácil de reutilizar e manter." },
        { q: "A sintaxe de uma regra CSS é:", opts: ["propriedade: valor; { seletor }", "seletor { propriedade: valor; }", "seletor = propriedade", "{ propriedade: seletor }"], ans: 1, expl: "Escolhemos um seletor e, entre chaves, declaramos propriedades: valores." },
        { q: "O nome \"Cascata\" (Cascading) se refere a:", opts: ["Uma cascata de fontes.", "Regras que se combinam e sobrepõem.", "Animações em cascata.", "Ordem alfabética."], ans: 1, expl: "Regras CSS se acumulam; quando há conflito, a mais específica ou a última vence." }
      ]
    },
    {
      id: "css-seletores",
      title: "Seletores",
      subtitle: "Escolhendo exatamente quais elementos estilizar.",
      blocks: [
        { t: "h", h: "Tipos de seletor" },
        { t: "lst", items: [
          "p { }: por tipo de tag (todos os <p>).",
          ".classe { }: por classe (pode repetir).",
          "#id { }: por id (único na página).",
          "* { }: universal (todos os elementos).",
          "nav a { }: descendente (<a> dentro de <nav>).",
          "h1, h2 { }: agrupamento (aplica a vários)."
        ]},
        { t: "code", c: String.raw`/* seletor por tipo */
p {
    color: gray;
}

/* seletor por classe */
.destacado {
    background-color: yellow;
}

/* seletor por id */
#titulo {
    font-size: 30px;
}

/* seletor descendente */
nav a {
    text-decoration: none;
}

/* agrupamento */
h1, h2 {
    color: navy;
}`, lang: "css" },
        { t: "note", p: "Classe (.nome) pode ser reutilizada em vários elementos; id (#nome) deve ser único na página. Essa é uma regra de ouro do HTML/CSS." }
      ],
      quiz: [
        { q: "Um seletor de classe começa com:", opts: ["#", ".", "&", "@"], ans: 1, expl: "Ponto (.minhaClasse) seleciona por classe; #minhaId seleciona por id." },
        { q: "O seletor universal é:", opts: ["div", "*", "all", "body"], ans: 1, expl: "O asterisco * seleciona todos os elementos da página." },
        { q: "Seletor descendente \"div p\" estiliza:", opts: ["Todas as divs.", "Todos os <p> que estão DENTRO de uma <div>.", "Todas as tags.", "Só o primeiro <p>."], ans: 1, expl: "\"div p\" usa o espaço para exigir que o <p> seja descendente de uma <div>." }
      ]
    },
    {
      id: "css-texto",
      title: "Cores, Texto e Fontes",
      subtitle: "Brilho, tamanho e aparência tipográfica.",
      blocks: [
        { t: "h", h: "Cores" },
        { t: "p", p: "As cores podem ser escritas por nome (red), em hexadecimal (#1a73e8) ou com rgb()/rgba():" },
        { t: "code", c: String.raw`h1 {
    color: #1a73e8;
    background-color: rgb(240, 240, 240);
}`, lang: "css" },
        { t: "h", h: "Texto e fontes" },
        { t: "code", c: String.raw`p {
    font-family: Arial, sans-serif;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    line-height: 1.5;
}`, lang: "css" },
        { t: "h", h: "Unidades de medida" },
        { t: "lst", items: [
          "px: pixels (tamanho fixo).",
          "em: relativo ao tamanho da fonte do elemento pai.",
          "rem: relativo à fonte da raiz (mais previsível).",
          "%: porcentagem do elemento pai.",
          "vw / vh: 1% da largura / altura da janela."
        ]},
        { t: "note", p: "text-align alinha horizontalmente (left, center, right); line-height define a altura de cada linha de texto (1.5 é confortável para ler)." }
      ],
      quiz: [
        { q: "Na cor hexadecimal, o vermelho puro é:", opts: ["#00ff00", "#ff0000", "#0000ff", "#ffffff"], ans: 1, expl: "#ff0000 = máximo de vermelho (ff), zero de verde e zero de azul." },
        { q: "A propriedade que muda a fonte é:", opts: ["color", "font-size", "font-family", "font-style"], ans: 2, expl: "font-family escolhe a família tipográfica (ex.: Arial, Times)." },
        { q: "font-size: 16px define:", opts: ["A largura do texto.", "O tamanho da letra.", "A cor da fonte.", "O espaçamento entre linhas."], ans: 1, expl: "font-size controla o tamanho do texto." }
      ]
    },
    {
      id: "css-boxmodel",
      title: "Box Model",
      subtitle: "Entendendo margens, bordas, paddings e dimensões.",
      blocks: [
        { t: "h", h: "Todo elemento é uma caixa" },
        { t: "p", p: "Dentro para fora, um elemento tem: conteúdo, padding (espaço interno), border (borda) e margin (espaço externo)." },
        { t: "code", c: String.raw`div {
    margin: 20px;    /* espaço FORA da borda */
    border: 2px solid red;
    padding: 15px;   /* espaço DENTRO da borda */
    width: 200px;
}`, lang: "css" },
        { t: "h", h: "box-sizing: border-box" },
        { t: "p", p: "Por padrão, width soma o conteúdo + padding + border. Com box-sizing: border-box, o width passa a INCLUIR padding e borda — muito mais intuitivo. É uma prática quase universal." },
        { t: "code", c: String.raw`* {
    box-sizing: border-box;
}

.box {
    width: 200px;
    padding: 20px;
    border: 2px solid red;
    margin: 10px;
}`, lang: "css" },
        { t: "note", p: "Memorize de dentro para fora: conteúdo → padding → border → margin. Confundir padding com margin é o erro nº1 de quem está começando." }
      ],
      quiz: [
        { q: "De dentro para fora, a ordem correta é:", opts: ["margin, border, padding, conteúdo", "conteúdo, padding, border, margin", "border, conteúdo, margin, padding", "padding, margin, conteúdo, border"], ans: 1, expl: "Conteúdo primeiro, depois padding (interno), border e margin (externo)." },
        { q: "O que o box-sizing: border-box faz?", opts: ["Soma padding/borda ao width.", "Faz o width incluir padding e borda.", "Remove a borda.", "Deixa o elemento invisível."], ans: 1, expl: "Com border-box, o width declarado já inclui padding e borda, facilitando os cálculos." },
        { q: "O espaço DENTRO da borda (entre conteúdo e borda) é o:", opts: ["margin", "padding", "border-radius", "gap"], ans: 1, expl: "Padding é o respiro interno; margin é o espaço externo entre elementos." }
      ]
    },
    {
      id: "css-flexbox",
      title: "Flexbox e Posicionamento",
      subtitle: "Distribuindo elementos em linha ou coluna facilmente.",
      blocks: [
        { t: "h", h: "display: flex" },
        { t: "p", p: "Com display: flex no contêiner, os filhos se alinham em linha (direção padrão). É a forma moderna de criar layouts." },
        { t: "code", c: String.raw`.menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
}`, lang: "css" },
        { t: "code", c: String.raw`<div class="menu">
    <div>Home</div>
    <div>Sobre</div>
    <div>Contato</div>
</div>`, lang: "html" },
        { t: "h", h: "Propriedades principais" },
        { t: "lst", items: [
          "justify-content: alinha no eixo principal (linha).",
          "align-items: alinha no eixo transversal (coluna).",
          "flex-direction: row (linha) ou column (coluna).",
          "gap: espaço entre os itens."
        ]},
        { t: "h", h: "position" },
        { t: "lst", items: [
          "static (padrão): fluxo normal da página.",
          "relative: se move em relação à sua posição normal.",
          "absolute: se posiciona em relação ao ancestral posicionado.",
          "fixed: fixo na janela, não rola com a página."
        ]},
        { t: "note", p: "justify-content (eixo principal) e align-items (eixo transversal) são as duas perguntas mais cobradas sobre Flexbox." }
      ],
      quiz: [
        { q: "Habilitamos o Flexbox com:", opts: ["display: grid", "display: flex", "position: flex", "flex: yes"], ans: 1, expl: "display: flex ativa o modelo Flexbox no contêiner." },
        { q: "justify-content alinha os itens no eixo:", opts: ["Transversal", "Principal (horizontal no padrão)", "Diagonal", "Nenhum"], ans: 1, expl: "Por padrão, os itens ficam em linha (eixo principal horizontal) e o justify-content distribui nesse eixo." },
        { q: "O position que fixa o elemento na janela é:", opts: ["relative", "absolute", "fixed", "static"], ans: 2, expl: "fixed mantém o elemento preso à janela, mesmo ao rolar a página." }
      ]
    },
    {
      id: "css-responsivo",
      title: "Design Responsivo",
      subtitle: "Sites que se adaptam a celular, tablet e computador.",
      blocks: [
        { t: "h", h: "O que é responsividade" },
        { t: "p", p: "Layout responsivo é aquele que se adapta ao tamanho da tela. O principal recurso são as media queries." },
        { t: "h", h: "Media queries" },
        { t: "p", p: "Com @media, aplicamos regras só quando a condição for verdadeira (ex.: largura mínima da tela)." },
        { t: "code", c: String.raw`/* Base: celular (mobile-first) */
.menu {
    display: flex;
    flex-direction: column;
}

/* Telas a partir de 768px: computador */
@media (min-width: 768px) {
    .menu {
        flex-direction: row;
    }
}`, lang: "css" },
        { t: "h", h: "Unidades relativas" },
        { t: "p", p: "Prefira unidades relativas no layout: %, vw, vh, rem. Evite larguras fixas; use max-width em vez de width quando possível." },
        { t: "code", c: String.raw`.container {
    width: 90%;
    max-width: 1100px;
    margin: 0 auto;
}`, lang: "css" },
        { t: "note", p: "Mobile-first = desenvolver primeiro para telas pequenas e usar @media (min-width) para telas maiores. É a prática recomendada." }
      ],
      quiz: [
        { q: "O principal recurso do CSS para adaptar o layout por tela é:", opts: ["JavaScript", "A media query @media", "O atributo width do HTML", "Imagens grandes"], ans: 1, expl: "As media queries aplicam regras CSS conforme o tamanho da tela." },
        { q: "@media (min-width: 768px) aplica as regras quando:", opts: ["A tela for menor que 768px.", "A tela tiver 768px ou mais.", "Sempre.", "No celular."], ans: 1, expl: "min-width ativa a partir de 768px para cima." },
        { q: "Mobile-first significa:", opts: ["Começar o CSS pelos computadores.", "Começar o desenvolvimento pelos celulares e ir crescendo.", "Não usar CSS no mobile.", "Usar apenas px."], ans: 1, expl: "Mobile-first começa nas telas pequenas e evolui com @media (min-width)." }
      ]
    },
    {
      id: "css-grid",
      title: "CSS Grid",
      subtitle: "Layouts em duas dimensões com linhas e colunas.",
      blocks: [
        { t: "h", h: "O que o Grid resolve" },
        { t: "p", p: "Enquanto o Flexbox organiza itens em UMA direção (linha OU coluna), o Grid trabalha em DUAS dimensões ao mesmo tempo. Isso torna possível criar grades de layout sem hacks de largura, floats ou margens negativas." },
        { t: "code", c: String.raw`.container {
    display: grid;
    grid-template-columns: 200px 1fr 1fr;
    grid-template-rows: auto 300px;
    gap: 16px;
}`, lang: "css" },
        { t: "h", h: "grid-template-columns e repeat()" },
        { t: "p", p: "grid-template-columns define as colunas; grid-template-rows, as linhas. A função repeat() evita repetição: repeat(3, 1fr) equivale a 1fr 1fr 1fr. A unidade fr distribui o espaço livre proporcionalmente." },
        { t: "code", c: String.raw`.grades {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
}`, lang: "css" },
        { t: "h", h: "grid-template-areas" },
        { t: "p", p: "Com grid-template-areas damos nomes às regiões e posicionamos cada item pelo nome. É muito legível para layouts de página." },
        { t: "code", c: String.raw`.pagina {
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-areas:
        "header header"
        "menu   conteudo"
        "rodape rodape";
    gap: 12px;
}

.pagina header  { grid-area: header; }
.pagina nav     { grid-area: menu; }
.pagina main    { grid-area: conteudo; }
.pagina footer  { grid-area: rodape; }`, lang: "css" },
        { t: "h", h: "Posicionamento explícito: grid-column e grid-row" },
        { t: "p", p: "grid-column e grid-row controlam onde um item começa e termina, incluindo o span para expandir várias células. A contagem inclui as linhas da grade (ex.: coluna 1 a 3 ocupa duas colunas)." },
        { t: "code", c: String.raw`.destaque {
    grid-column: 1 / 3;    /* das linhas 1 a 3 (ocupa 2 colunas) */
    grid-row: span 2;      /* ocupa 2 linhas */
}`, lang: "css" },
        { t: "h", h: "auto-fit, minmax e responsividade" },
        { t: "p", p: "A combinação repeat(auto-fit, minmax(200px, 1fr)) cria o número de colunas conforme o espaço disponível, cada uma com no mínimo 200px. Isso gera um grid responsivo sem media queries. A diferença para auto-fill é que o auto-fit colapsa as colunas vazias ao encolher os itens." },
        { t: "note", p: "Use Grid para o layout geral da página e Flexbox para alinhar itens dentro de uma linha ou coluna. Eles são complementares, não concorrentes: muitos projetos usam ambos." },
        { t: "warn", p: "A fr (fraction) só faz sentido no eixo que tem espaço livre. Se o contêiner não tiver largura definida ou houver conteúdo que não quebre (longas strings sem espaço), o Grid pode transbordar. Pense no comportamento do conteúdo, não só na grade." }
      ],
      quiz: [
        { q: "A principal diferença entre Grid e Flexbox é:", opts: ["Não há diferença.", "Grid trabalha em duas dimensões; Flexbox, em uma.", "Flexbox é duas dimensões; Grid, uma.", "Grid é mais lento."], ans: 1, expl: "Grid organiza linhas E colunas simultaneamente; Flexbox alinha em um único eixo por vez." },
        { q: "repeat(auto-fit, minmax(200px, 1fr)) produz:", opts: ["Sempre 3 colunas.", "O número de colunas que couber, cada uma com mínimo de 200px.", "Uma coluna única.", "Colunas de 200px exatas."], ans: 1, expl: "auto-fit cria colunas flexíveis com mínimo de 200px, ajustando a quantidade ao espaço disponível." },
        { q: "A diferença entre auto-fit e auto-fill é:", opts: ["Nenhuma.", "auto-fit colapsa colunas vazias (itens esticam); auto-fill mantém os trilhos vazios.", "auto-fill é mais rápido.", "auto-fit só funciona com fr."], ans: 1, expl: "auto-fill mantém trilhos vazios reservando espaço; auto-fit os colapsa, fazendo os itens ocuparem a largura toda." },
        { q: "Em grid-column: 2 / 4, o item ocupa:", opts: ["2 colunas (das linhas 2 a 4).", "3 colunas.", "4 colunas.", "1 coluna."], ans: 0, expl: "grid-column usa as linhas da grade; de 2 a 4 cobre 2 colunas (2-3 e 3-4)." }
      ]
    },
    {
      id: "css-animacoes",
      title: "Transições e Animações",
      subtitle: "Movimento e feedback visual com transition, transform e keyframes.",
      blocks: [
        { t: "h", h: "Transições: mudanças suaves" },
        { t: "p", p: "A propriedade transition anima a mudança entre dois estados (ex.: hover). Ela recebe property, duration, timing-function (easing) e delay. Sem ela, a troca é instantânea; com ela, o elemento \"desliza\" até o novo estado." },
        { t: "code", c: String.raw`.botao {
    background-color: #58cc02;
    transition: background-color 0.3s ease, transform 0.3s ease-in-out;
}

.botao:hover {
    background-color: #46a302;
    transform: scale(1.05);
}`, lang: "css" },
        { t: "h", h: "Transform: translate, rotate e scale" },
        { t: "p", p: "transform move, gira e redimensiona um elemento sem afetar o fluxo do layout. translate desloca, rotate gira (em graus ou radianos) e scale escala. Vários podem ser combinados em uma única declaração." },
        { t: "code", c: String.raw`.card:hover {
    transform: translateY(-4px) rotate(2deg) scale(1.02);
}`, lang: "css" },
        { t: "h", h: "Animações com @keyframes" },
        { t: "p", p: "@keyframes define os estados intermediários de uma animação e a propriedade animation a aplica. animation recebe a duração, o timing, a repetição e a direção. O exemplo abaixo cria um pulso contínuo." },
        { t: "code", c: String.raw`@keyframes pulsar {
    0%   { transform: scale(1); }
    50%  { transform: scale(1.15); }
    100% { transform: scale(1); }
}

.pulso {
    animation: pulsar 1.5s ease-in-out infinite;
}`, lang: "css" },
        { t: "h", h: "Passo a passo de um slide" },
        { t: "lst", items: [
          "1. Defina os keyframes: de translateX(-100%) a translateX(0).",
          "2. Escolha a duração (ex.: 1s).",
          "3. Defina o timing function (ease-out para começar suave e desacelerar).",
          "4. Opcional: animation-delay para atrasar, e fill-mode para segurar o estado inicial/ final."
        ]},
        { t: "code", c: String.raw`@keyframes deslizar {
    from { transform: translateX(-100%); opacity: 0; }
    to   { transform: translateX(0); opacity: 1; }
}

.painel {
    animation: deslizar 1s ease-out forwards;
}`, lang: "css" },
        { t: "h", h: "Os principais easings" },
        { t: "lst", items: [
          "linear: velocidade constante.",
          "ease: começa rápido e desacelera (padrão).",
          "ease-in: começa lento e acelera.",
          "ease-out: começa rápido e desacelera.",
          "ease-in-out: lento no início e no fim.",
          "cubic-bezier(...): curva totalmente personalizada."
        ]},
        { t: "note", p: "Prefira animar transform e opacity: essas propriedades não causam reflow do layout e podem ser aceleradas pela GPU. Animar width, height, margin ou top força o navegador a recalcular o layout a cada quadro, o que é caro." },
        { t: "warn", p: "As animações podem causar enjoo em pessoas com sensibilidade a movimento (por exemplo, vestibulares). Use a media query prefers-reduced-motion para desativar ou reduzir animações para quem pedir." }
      ],
      quiz: [
        { q: "Qual é a forma mais eficiente de animar um elemento?", opts: ["Animando width e height.", "Animando transform e opacity.", "Animando margin e top.", "Não importa."], ans: 1, expl: "transform e opacity são compostas pela GPU e não causam reflow; animar layout é custoso e causa jank." },
        { q: "A diferença entre transition e animation é:", opts: ["Nenhuma.", "transition anima entre estados (ex.: hover); animation usa @keyframes com controle total de repetição e frames.", "animation não existe.", "transition só funciona com hover."], ans: 1, expl: "transition reage a uma mudança de estado; animation roda keyframes declarados, com repetição, atraso e direção." },
        { q: "O recurso do CSS para respeitar usuários sensíveis a movimento é:", opts: ["@media (prefers-reduced-motion).", "animation: none global.", "A tag <stop> do HTML.", "transition: reduced."], ans: 0, expl: "prefers-reduced-motion é uma media query que permite desativar animações para quem solicitar." },
        { q: "O easing ease-out significa:", opts: ["Velocidade constante.", "Começa rápido e desacelera.", "Começa lento e acelera.", "Parece uma mola."], ans: 1, expl: "ease-out inicia rápido e reduz a velocidade no fim, dando sensação de chegada suave." }
      ]
    },
    {
      id: "css-variaveis",
      title: "Variáveis CSS (custom properties)",
      subtitle: "Reutilização e temas com --nome e var().",
      blocks: [
        { t: "h", h: "O que são custom properties" },
        { t: "p", p: "Variáveis CSS armazenam valores reutilizáveis (cores, espaçamentos, fontes) e são declaradas com --nome. Usamos var(--nome) para lê-las. A vantagem: muda em um só lugar e o valor se propaga pelo documento." },
        { t: "code", c: String.raw`:root {
    --cor-primaria: #58cc02;
    --cor-texto: #333;
    --espaco: 16px;
}

h1 {
    color: var(--cor-primaria);
}

p {
    color: var(--cor-texto);
    padding: var(--espaco);
}`, lang: "css" },
        { t: "h", h: "Fallbacks: var() com valor padrão" },
        { t: "p", p: "O segundo argumento de var(--nome, valor) é o fallback: é usado se a variável não estiver definida ou for inválida. Isso torna o código mais robusto em navegadores antigos ou quando o escopo não alcança." },
        { t: "code", c: String.raw`.cartao {
    background: var(--cor-fundo, #ffffff);
    border: 2px solid var(--cor-borda, #ccc);
}`, lang: "css" },
        { t: "h", h: "Escopo: o poderoso da cascata" },
        { t: "p", p: "Diferente de constantes de preprocessadores, as variáveis CSS respeitam o escopo da cascata. Declaradas em :root valem para tudo; declaradas em um contêiner, valem apenas para aquele trecho. Isso é o que permite criar temas facilmente." },
        { t: "code", c: String.raw`.tema-escuro {
    --cor-fundo: #1e1e1e;
    --cor-texto: #f0f0f0;
}

.tema-claro {
    --cor-fundo: #ffffff;
    --cor-texto: #222;
}

.card {
    background: var(--cor-fundo);
    color: var(--cor-texto);
}`, lang: "css" },
        { t: "h", h: "Temas claro/escuro com prefers-color-scheme" },
        { t: "p", p: "Combinando variáveis e a media query prefers-color-scheme, criamos temas claro/escuro que respeitam a preferência do sistema, sem tocar em cada componente." },
        { t: "code", c: String.raw`:root {
    --cor-fundo: #ffffff;
    --cor-texto: #222;
}

@media (prefers-color-scheme: dark) {
    :root {
        --cor-fundo: #1e1e1e;
        --cor-texto: #f0f0f0;
    }
}

body {
    background: var(--cor-fundo);
    color: var(--cor-texto);
}`, lang: "css" },
        { t: "note", p: "A regra da cascata vale para variáveis: o valor aplicado é o mais específico que alcança o elemento. Isso permite sobrescrever uma variável global dentro de um componente apenas redefinindo-a localmente." },
        { t: "warn", p: "O fallback var(--x, padrao) NÃO entra em ação se a variável existir mas o valor usado for inválido no contexto (ex.: um valor não numérico em width). Nesse caso a declaração inteira é descartada. A variável deve ser válida no uso, não apenas existir." }
      ],
      quiz: [
        { q: "Como declarar e usar uma variável CSS?", opts: ["Declarar $cor e usar $cor.", "Declarar --cor e usar var(--cor).", "Declarar @cor e usar cor.", "Declarar var e usar var()."], ans: 1, expl: "Custom properties usam --no nome e são lidas com var(--nome)." },
        { q: "O que acontece se --cor não for definida e usarmos var(--cor, azul)?", opts: ["A declaração é ignorada.", "Usa o fallback azul.", "Quebra a página.", "Usa preto."], ans: 1, expl: "O segundo argumento do var() é o fallback, usado quando a variável não está definida (ou não alcançada)." },
        { q: "O escopo de uma variável declarada em :root é:", opts: ["Somente a raiz.", "Todo o documento.", "Somente o primeiro elemento.", "Apenas o body."], ans: 1, expl: ":root é o elemento raiz, e variáveis ali são herdadas por toda a página." },
        { q: "Sobrescrever --cor-fundo dentro de uma classe .card:", opts: ["Não tem efeito.", "Aplica o novo valor apenas dentro de .card e seus descendentes.", "Muda toda a página.", "Cria um erro."], ans: 1, expl: "Por causa da cascata e do escopo, redefinir a variável localmente muda o valor apenas naquele subárvore." }
      ]
    }
  ]
};