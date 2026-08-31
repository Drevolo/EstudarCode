/* Curso: JavaScript */
window.COURSES = window.COURSES || {};
window.COURSES.js = {
  name: "JavaScript",
  topics: [
    {
      id: "js-intro",
      title: "Introdução ao JavaScript",
      subtitle: "A linguagem que dá vida às páginas web.",
      blocks: [
        { t: "h", h: "O que é JavaScript?" },
        { t: "p", p: "JavaScript (JS) é a linguagem de programação dos navegadores: ela torna as páginas interativas. Além do navegador, também roda no servidor com o Node.js." },
        { t: "h", h: "Onde ele roda?" },
        { t: "lst", items: [
          "No navegador (Chrome, Firefox, Edge...), direto nas páginas.",
          "No console do navegador: aperte F12 e clique na aba Console.",
          "Em arquivos .js que o HTML carrega.",
          "Fora do navegador, no Node.js."
        ]},
        { t: "code", c: String.raw`console.log("Olá, mundo!");`, lang: "js" },
        { t: "h", h: "Exibindo mensagens" },
        { t: "p", p: "console.log() mostra informações no console (ideal para testes durante o desenvolvimento). Já alert() abre uma janela no navegador." },
        { t: "code", c: String.raw`console.log("Isso aparece no console");
console.log(10 + 5);`, lang: "js" },
        { t: "h", h: "Ligando um arquivo .js ao HTML" },
        { t: "code", c: String.raw`<script src="script.js"></script>`, lang: "html" },
        { t: "note", p: "Quase todo comando em JS termina com ponto e vírgula. O \";\" é opcional, mas muito comum — use sempre para evitar surpresas." }
      ],
      quiz: [
        { q: "A função que exibe uma mensagem no console é:", opts: ["print()", "echo()", "console.log()", "write()"], ans: 2, expl: "console.log() imprime no console do navegador, essencial para testar o código." },
        { q: "O atalho F12 no navegador abre:", opts: ["As Ferramentas do Desenvolvedor (DevTools).", "Um novo site.", "O menu de impressão.", "Configurações."], ans: 0, expl: "F12 abre o DevTools, onde fica o console para executar e depurar JS." },
        { q: "Além do navegador, o JavaScript também roda:", opts: ["Nunca fora do navegador.", "Em qualquer máquina, sem nada instalado.", "No servidor, com o Node.js.", "Somente no celular."], ans: 2, expl: "O Node.js permite executar JavaScript no servidor (back-end)." },
        { q: "A função alert() faz o quê?", opts: ["Imprime no console.", "Fecha o navegador.", "Abre uma janela com uma mensagem na tela.", "Salva um arquivo."], ans: 2, expl: "alert() abre uma caixa de diálogo no navegador com o texto indicado." },
        { q: "Como ligamos um arquivo .js a uma página HTML?", opts: ["Usando a tag <link>.", "Com a tag <script src=\"...\">.", "Através de <style>.", "Não é possível."], ans: 1, expl: "A tag <script> com o atributo src carrega e executa o arquivo JavaScript externo." }
      ]
    },
    {
      id: "js-variaveis",
      title: "Variáveis e Tipos",
      subtitle: "let, const e os tipos de dados do JS.",
      blocks: [
        { t: "h", h: "Declarando variáveis" },
        { t: "p", p: "As formas modernas são let (para valores que mudam) e const (para valores fixos). Evite var, que é a forma antiga com regras confusas." },
        { t: "code", c: String.raw`let nome = "Gabriel";
const PI = 3.14;

nome = "Ana";   // ok: let pode mudar
PI = 2;         // ERRO! const não pode ser alterada`, lang: "js" },
        { t: "h", h: "Tipos de dados" },
        { t: "lst", items: [
          "number: inteiros e decimais (20, 19.90).",
          "string: textos (\"Ana\", 'a').",
          "boolean: true ou false.",
          "null: ausência intencional de valor.",
          "undefined: valor ainda não definido.",
          "object: estruturas como objeto e array."
        ]},
        { t: "code", c: String.raw`let idade = 20;
let preco = 19.90;
let nome = "Ana";
let aprovado = true;
let endereco = null;

console.log(typeof idade);      // number
console.log(typeof nome);       // string
console.log(typeof aprovado);   // boolean`, lang: "js" },
        { t: "h", h: "Concatenando textos" },
        { t: "code", c: String.raw`let nome = "Ana";
let idade = 20;

console.log(nome + " tem " + idade + " anos.");`, lang: "js" },
        { t: "note", p: "typeof informa o tipo de um valor — ótimo para descobrir \"o que\" uma variável é." }
      ],
      quiz: [
        { q: "Qual palavra-chave declara uma variável que NÃO pode ser reatribuída?", opts: ["let", "var", "const", "static"], ans: 2, expl: "const cria uma constante: o valor não pode ser alterado depois." },
        { q: "typeof é usado para:", opts: ["Imprimir na tela.", "Descobrir o tipo de um valor.", "Criar variáveis.", "Somar números."], ans: 1, expl: "typeof devolve uma string com o tipo: \"number\", \"string\", \"boolean\", etc." },
        { q: "Para uma variável que vai mudar de valor, o ideal é usar:", opts: ["const", "let", "nenhuma", "types"], ans: 1, expl: "let é para valores variáveis; const é para valores fixos." },
        { q: "O que typeof null retorna em JavaScript?", opts: ["\"null\"", "\"undefined\"", "\"object\"", "\"boolean\""], ans: 2, expl: "typeof null retorna \"object\" — é um bug histórico da linguagem, mas null não é um objeto de verdade." },
        { q: "Em JavaScript, qual é o resultado de \"2\" + 2?", opts: ["4", "\"22\"", "Erro de tipo", "\"4\""], ans: 1, expl: "Quando o + mistura string e number, o JS converte o número para texto e concatena: \"2\" + 2 = \"22\"." }
      ]
    },
    {
      id: "js-funcoes",
      title: "Funções",
      subtitle: "Funções tradicionais, expressões e arrow functions.",
      blocks: [
        { t: "h", h: "Declarando funções" },
        { t: "code", c: String.raw`function soma(a, b) {
    return a + b;
}

console.log(soma(2, 3));   // 5`, lang: "js" },
        { t: "h", h: "Expressão de função" },
        { t: "p", p: "Uma função pode ser guardada em uma variável, tornando-se um \"valor\" como qualquer outro." },
        { t: "code", c: String.raw`const dobro = function (x) {
    return x * 2;
};

console.log(dobro(4));   // 8`, lang: "js" },
        { t: "h", h: "Arrow functions" },
        { t: "p", p: "Sintaxe moderna e enxuta: (parâmetros) => resultado. Sem chaves e return, a arrow devolve direto a expressão." },
        { t: "code", c: String.raw`const triplo = (x) => x * 3;

console.log(triplo(4));   // 12`, lang: "js" },
        { t: "note", p: "return devolve o valor a quem chamou a função e encerra a função na hora." }
      ],
      quiz: [
        { q: "Qual palavra declara uma função tradicional?", opts: ["func", "def", "function", "funcao"], ans: 2, expl: "Em JavaScript, usamos a palavra function." },
        { q: "O que a arrow (x) => x * 3 faz?", opts: ["Soma x com 3.", "Multiplica x por 3.", "Declara uma classe.", "Imprime x."], ans: 1, expl: "A arrow recebe x e devolve x * 3; sem chaves, o resultado é retornado automaticamente." },
        { q: "return dentro de uma função:", opts: ["Imprime um valor.", "Devolve um valor e encerra a função.", "Inicia um laço.", "Cria uma variável."], ans: 1, expl: "return envia o resultado de volta para quem chamou a função." },
        { q: "Qual é a forma correta de declarar uma arrow function que recebe um parâmetro e retorna o dobro?", opts: ["x => x * 2", "x -> x * 2", "function(x) -> x * 2", "arrow(x) => x * 2"], ans: 0, expl: "Quando há apenas um parâmetro, os parênteses são opcionais em arrow functions: x => x * 2." },
        { q: "O que acontece se uma função não tiver uma instrução return?", opts: ["Retorna 0.", "Retorna null.", "Retorna undefined automaticamente.", "Dá erro de compilação."], ans: 2, expl: "Funções sem return explicitamente retornam undefined por padrão em JavaScript." }
      ]
    },
    {
      id: "js-condicionais",
      title: "Condicionais",
      subtitle: "if, else, switch e a diferença entre == e ===.",
      blocks: [
        { t: "h", h: "if / else if / else" },
        { t: "code", c: String.raw`let nota = 7.5;

if (nota >= 6) {
    console.log("Aprovado!");
} else if (nota >= 4) {
    console.log("Recuperação.");
} else {
    console.log("Reprovado.");
}`, lang: "js" },
        { t: "h", h: "== vs ===" },
        { t: "p", p: "== compara apenas o valor (fazendo conversão) e === compara o valor E o tipo. A boa prática é usar sempre ===." },
        { t: "code", c: String.raw`console.log(5 == "5");    // true  (compara só o valor)
console.log(5 === "5");   // false (tipos diferentes!)`, lang: "js" },
        { t: "h", h: "switch" },
        { t: "p", p: "Prático quando uma variável é testada contra vários valores constantes." },
        { t: "code", c: String.raw`let cor = "verde";

switch (cor) {
    case "azul":
        console.log("Azul");
        break;
    case "verde":
        console.log("Verde");
        break;
    default:
        console.log("Outra cor");
}`, lang: "js" },
        { t: "warn", p: "Não esqueça o break no switch: sem ele, o programa continua executando o case seguinte." }
      ],
      quiz: [
        { q: "O operador === compara:", opts: ["Apenas o valor.", "O valor e o tipo.", "Somente o tipo.", "Nada."], ans: 1, expl: "=== exige igualdade de valor E de tipo, evitando conversões inesperadas." },
        { q: "Em JS, 5 == \"5\" resulta em:", opts: ["true", "false", "Erro", "undefined"], ans: 0, expl: "== converte automaticamente e compara só o valor, por isso \"5\" e 5 são considerados iguais." },
        { q: "Para testar uma variável contra vários valores constantes, a estrutura ideal é:", opts: ["for", "switch", "while", "função"], ans: 1, expl: "O switch serve exatamente para comparar uma variável com vários casos constantes." },
        { q: "O que acontece no switch se esquecer o break?", opts: ["O programa para na hora.", "Continua executando os cases seguintes até encontrar um break ou o final.", "Dá erro de sintaxe.", "Volta ao primeiro case."], ans: 1, expl: "Sem break, o switch faz 'fall-through': executa o próximo case sem verificar a condição." },
        { q: "Qual é o resultado de: 10 > 5 && 3 < 1?", opts: ["true", "false", "15", "Erro"], ans: 1, expl: "O operador && exige que AMBAS as expressões sejam true. Como 3 < 1 é false, o resultado é false." }
      ]
    },
    {
      id: "js-lacos",
      title: "Laços",
      subtitle: "for, while, for...of e forEach.",
      blocks: [
        { t: "h", h: "for clássico" },
        { t: "code", c: String.raw`for (let i = 1; i <= 5; i++) {
    console.log(i);
}`, lang: "js" },
        { t: "h", h: "while" },
        { t: "code", c: String.raw`let j = 1;
while (j <= 5) {
    console.log(j);
    j++;
}`, lang: "js" },
        { t: "h", h: "for...of e forEach" },
        { t: "p", p: "Para percorrer arrays, o for...of e o forEach são mais claros:" },
        { t: "code", c: String.raw`const cores = ["azul", "verde", "roxo"];

for (const c of cores) {
    console.log(c);
}

cores.forEach(function (c) {
    console.log(c);
});`, lang: "js" },
        { t: "h", h: "i++ e i--" },
        { t: "p", p: "i++ equivale a i = i + 1 e i-- a i = i - 1. Também existem +=, -=, *= e /= (ex.: soma += i é o mesmo que soma = soma + i)." },
        { t: "warn", p: "Cuidado com loop infinito: se a condição do while nunca mudar, o navegador pode travar." }
      ],
      quiz: [
        { q: "Quantas vezes executa for (let i = 1; i <= 3; i++)?", opts: ["2 vezes", "3 vezes", "4 vezes", "Infinitas"], ans: 1, expl: "Executa para i = 1, 2 e 3 — três repetições." },
        { q: "O forEach é usado para:", opts: ["Somar dois números.", "Percorrer os elementos de um array.", "Criar variáveis.", "Declarar funções."], ans: 1, expl: "forEach executa uma função para cada elemento do array." },
        { q: "O while testa a condição:", opts: ["Depois de executar o bloco.", "Antes de cada repetição.", "Uma única vez.", "Somente no final do programa."], ans: 1, expl: "O while verifica a condição antes de executar o bloco a cada volta." },
        { q: "Para percorrer os elementos de um array sem usar índices, qual é a opção moderna?", opts: ["for (let i = 0; ...)", "while", "for...of", "do...while"], ans: 2, expl: "O for...of percorre diretamente os valores do array, sem precisar gerenciar o índice manualmente." },
        { q: "A expressão i++ equivale a qual outra forma?", opts: ["i = i - 1", "i += 2", "i = i + 1", "i = i * 1"], ans: 2, expl: "i++ é um atalho para i = i + 1, incrementando o valor da variável em 1." }
      ]
    },
    {
      id: "js-arrays",
      title: "Arrays e Objetos",
      subtitle: "Coleções de valores e agrupamentos nome: valor.",
      blocks: [
        { t: "h", h: "Arrays" },
        { t: "p", p: "Arrays guardam vários valores; a indexação começa em 0. O método push adiciona no final e length mede o tamanho." },
        { t: "code", c: String.raw`const frutas = ["maçã", "banana"];
frutas.push("uva");

console.log(frutas.length);   // 3
console.log(frutas[0]);       // maçã`, lang: "js" },
        { t: "h", h: "Objetos" },
        { t: "p", p: "Objetos agrupam propriedades no formato nome: valor e são acessados com ponto:" },
        { t: "code", c: String.raw`const pessoa = {
    nome: "Ana",
    idade: 20,
    cidade: "São Paulo"
};

console.log(pessoa.nome);       // Ana
console.log(pessoa["idade"]);   // 20`, lang: "js" },
        { t: "h", h: "Métodos comuns de array" },
        { t: "lst", items: [
          "push(x): adiciona x no final.",
          "pop(): remove o último item.",
          "length: número de elementos.",
          "indexOf(x): posição de x (ou -1 se não existir).",
          "map(f): cria um novo array transformando cada item."
        ]},
        { t: "code", c: String.raw`const numeros = [1, 2, 3, 4];
const dobrados = numeros.map(function (n) {
    return n * 2;
});

console.log(dobrados);   // [2, 4, 6, 8]`, lang: "js" },
        { t: "note", p: "Um array em JS é um tipo de objeto: acessamos por índice ([0], [1]...). Um objeto normal, por chave (pessoa.nome)." }
      ],
      quiz: [
        { q: "O método push:", opts: ["Remove o último item.", "Adiciona um item no final do array.", "Ordena o array.", "Descobre o tipo."], ans: 1, expl: "push(x) acrescenta x ao final do array." },
        { q: "Para acessar a propriedade nome da pessoa, usamos:", opts: ["pessoa(nome)", "pessoa.nome", "nome.pessoa", "pessoa -> nome"], ans: 1, expl: "Objetos são acessados com notação de ponto: objeto.propriedade." },
        { q: "O método map:", opts: ["Elimina o array.", "Cria um novo array aplicando uma função em cada item.", "Imprime o array.", "Adiciona ao final."], ans: 1, expl: "map aplica a função a cada elemento e devolve um novo array com os resultados." },
        { q: "O método pop() em um array:", opts: ["Adiciona um item no início.", "Remove e retorna o último elemento.", "Remove o primeiro elemento.", "Não existe em JavaScript."], ans: 1, expl: "pop() remove o último item do array e o devolve. Para remover o primeiro, use shift()." },
        { q: "Dado const nums = [10, 20, 30], qual é o valor de nums.indexOf(20)?", opts: ["0", "1", "2", "-1"], ans: 1, expl: "indexOf devolve o índice da primeira ocorrência do valor. 20 está na posição 1 (contando de 0)." }
      ]
    },
    {
      id: "js-dom",
      title: "Manipulando o DOM",
      subtitle: "Interagindo com elementos da página.",
      blocks: [
        { t: "h", h: "O que é o DOM" },
        { t: "p", p: "O DOM (Document Object Model) é a representação em objetos da página HTML. Com JavaScript, pegamos elementos e modificamos seu conteúdo, estilo e comportamento." },
        { t: "h", h: "Selecionando elementos" },
        { t: "p", p: "getElementById pega um elemento pelo id; querySelector aceita qualquer seletor CSS." },
        { t: "code", c: String.raw`// HTML: <h1 id="titulo">Olá</h1>
//       <button id="btn">Clique</button>

const titulo = document.getElementById("titulo");
const btn = document.querySelector("#btn");

titulo.textContent = "Novo título!";`, lang: "js" },
        { t: "h", h: "Adicionando eventos" },
        { t: "p", p: "addEventListener escuta ações do usuário (clique, teclado, mouse) em um elemento:" },
        { t: "code", c: String.raw`btn.addEventListener("click", function () {
    alert("Você clicou!");
});`, lang: "js" },
        { t: "h", h: "Exemplo completo: contador" },
        { t: "code", c: String.raw`// HTML: <p id="contador">0</p>
//       <button id="mais">+1</button>

let valor = 0;
const contador = document.getElementById("contador");
const botao = document.getElementById("mais");

botao.addEventListener("click", function () {
    valor++;
    contador.textContent = valor;
});`, lang: "js" },
        { t: "note", p: "textContent altera o texto de um elemento e innerHTML altera o HTML interno. Prefira textContent para textos simples (mais seguro)." }
      ],
      quiz: [
        { q: "Qual função seleciona um elemento pelo seu id?", opts: ["document.getElementById()", "document.querySelectorAll()", "document.write()", "element.get()"], ans: 0, expl: "getElementById(\"id\") retorna o elemento cujo atributo id corresponde." },
        { q: "Para trocar o texto de um elemento, usamos:", opts: ["element.textContent = ...", "element.value = ...", "element.text()", "element.innerHTML()"], ans: 0, expl: "textContent substitui o texto dentro do elemento." },
        { q: "addEventListener(\"click\", funcao) serve para:", opts: ["Criar um elemento.", "Executar uma função quando o clique acontecer.", "Sumir com o elemento.", "Trocar o estilo."], ans: 1, expl: "O evento \"click\" dispara a função passada sempre que o usuário clicar no elemento." },
        { q: "Qual método seleciona o PRIMEIRO elemento que corresponde a um seletor CSS?", opts: ["document.getElementById()", "document.querySelector()", "document.querySelectorAll()", "document.getElement()"], ans: 1, expl: "querySelector aceita qualquer seletor CSS e devolve o primeiro elemento encontrado. querySelectorAll devolve todos." },
        { q: "Qual é a diferença entre textContent e innerHTML?", opts: ["São sinônimos.", "textContent injeta HTML; innerHTML injeta apenas texto.", "textContent define o texto puro; innerHTML injeta HTML interpretado pelo navegador.", "innerHTML não existe em JavaScript."], ans: 2, expl: "textContent insere texto como está (mais seguro); innerHTML interpreta a string como HTML, o que pode ser útil, mas abre brechas de segurança (XSS) se vier de usuários." }
      ]
    },
    {
      id: "js-objetos",
      title: "Objetos e JSON",
      subtitle: "Estruturas chave: valor e a troca de dados em texto.",
      blocks: [
        { t: "h", h: "Objetos literais" },
        { t: "p", p: "Objetos agrupam propriedades no formato chave: valor. No literal, as chaves normalmente ficam sem aspas; o acesso é feito com ponto (pessoa.nome) ou com colchetes (pessoa[\"idade\"]), útil quando a chave é dinâmica ou tem caracteres especiais." },
        { t: "code", c: String.raw`const pessoa = { nome: "Ana", idade: 20 };

console.log(pessoa.nome);        // Ana
console.log(pessoa["idade"]);    // 20

pessoa.cidade = "São Paulo";     // nova propriedade
pessoa.idade = 21;               // altera existente

console.log(pessoa.cidade);      // São Paulo`, lang: "js" },
        { t: "h", h: "Listando chaves e valores" },
        { t: "p", p: "Object.keys() devolve as chaves em um array. O for...in percorre as propriedades do objeto; o for...of percorre arrays e outros iteráveis. Misturar os dois é erro clássico: for...of num objeto lança TypeError, pois objeto não é iterável." },
        { t: "code", c: String.raw`const aluno = { nome: "Ivo", nota: 8.5 };

console.log(Object.keys(aluno));   // ["nome", "nota"]

for (const chave in aluno) {
    console.log(chave);            // nome, nota
}

for (const valor of ["a", "b", "c"]) {
    console.log(valor);            // a, b, c
}`, lang: "js" },
        { t: "h", h: "De objeto para texto e vice-versa" },
        { t: "p", p: "Grande parte dos programas troca dados com servidores no formato JSON (JavaScript Object Notation). JSON.stringify converte um valor em texto JSON; JSON.parse faz o caminho inverso." },
        { t: "code", c: String.raw`const dados = { nome: "Ana", idade: 21 };
const texto = JSON.stringify(dados);
console.log(texto);                // {"nome":"Ana","idade":21}

const deVolta = JSON.parse(texto);
console.log(deVolta.nome);         // Ana`, lang: "js" },
        { t: "note", p: "JSON é texto, não JavaScript: chaves obrigatoriamente com aspas duplas e sem funções, undefined ou comentários. JSON.parse lança SyntaxError se o texto estiver fora do formato — trate ou valide o dado antes de usar." },
        { t: "warn", p: "Buscar chave inexistente retorna undefined sem reclamar — diferente de Python, que lança KeyError. Por isso, verifique (if (pessoa.cidade === undefined)) ou use um valor padrão antes de usar uma propriedade que talvez não exista." }
      ],
      quiz: [
        { q: "Dado const p = { nome: \"Ana\" }, qual opção NÃO devolve \"Ana\"?", opts: ["p.nome", "p[\"nome\"]", "p[\"no\" + \"me\"]", "p.nome()"], ans: 3, expl: "p.nome() tenta chamar a propriedade como função; como nome é uma string, isso lança TypeError. As outras três formas de acesso devolvem \"Ana\"." },
        { q: "Qual função devolve um array com as chaves de um objeto?", opts: ["Object.keys(obj)", "obj.keys()", "Array.keys(obj)", "JSON.stringify(obj)"], ans: 0, expl: "Object.keys(obj) devolve o array de chaves. obj.keys() não existe para objetos comuns — em arrays, keys() devolve um iterador de índices, não um array." },
        { q: "O que JSON.parse(texto) faz?", opts: ["Converte JSON em texto legível.", "Analisa um texto JSON e constrói o valor JavaScript equivalente.", "Valida arquivos HTML.", "Ordena as chaves de um objeto."], ans: 1, expl: "JSON.parse interpreta o texto e monta o valor (objeto, array, número...); se o texto não for JSON válido, lança SyntaxError. O caminho inverso é JSON.stringify." },
        { q: "Qual afirmação sobre JSON e objetos JS está correta?", opts: ["Chaves de JSON são obrigatoriamente com aspas duplas; chaves de objeto JS podem ficar sem aspas.", "Objetos JS não podem virar texto.", "JSON aceita funções e undefined.", "JSON e objeto JavaScript são exatamente a mesma coisa."], ans: 0, expl: "JSON é um formato de texto restrito: aspas duplas nas chaves e apenas dados serializáveis, sem funções, undefined ou comentários. Objetos JS são estruturas em memória com sintaxe mais livre." },
        { q: "O que Object.keys({ a: 1, b: 2 }) devolve?", opts: ["[1, 2]", "[\"a\", \"b\"]", "[\"a: 1\", \"b: 2\"]", "undefined"], ans: 1, expl: "Object.keys devolve um array com os nomes das propriedades (chaves) do objeto." },
        { q: "O que acontece se você usar for...of em um objeto comum em JavaScript?", opts: ["Percorre as chaves normalmente.", "Lança TypeError, pois objeto não é iterável.", "Retorna undefined.", "Percorre os valores automaticamente."], ans: 1, expl: "Objetos comuns não são iteráveis. Para percorrer propriedades, use for...in ou Object.keys()." }
      ]
    },
    {
      id: "js-array-metodos",
      title: "Métodos de Array",
      subtitle: "map, filter, reduce e companhia: programar por intenção.",
      blocks: [
        { t: "h", h: "Arrow functions e map/filter" },
        { t: "p", p: "Os métodos modernos de array recebem funções — com arrow functions ficam curtas: (n) => n * 2. map constrói um novo array transformando cada item; filter mantém apenas os itens que passam no teste. Nenhum dos dois altera o array original (imutabilidade)." },
        { t: "code", c: String.raw`const numeros = [1, 2, 3, 4];

const dobrados = numeros.map((n) => n * 2);
const pares = numeros.filter((n) => n % 2 === 0);

console.log(dobrados);   // [2, 4, 6, 8]
console.log(pares);      // [2, 4]`, lang: "js" },
        { t: "h", h: "reduce, find, some, every" },
        { t: "p", p: "reduce acumula todos os itens em um único valor (soma, junção, médias). find devolve o primeiro item que atende ao teste (undefined se nenhum). some devolve true se ao menos um passa; every, apenas se todos passam." },
        { t: "code", c: String.raw`const valores = [10, 20, 5, 8];

const soma = valores.reduce((acc, n) => acc + n, 0);
console.log(soma);                                   // 43

console.log(valores.find((n) => n > 15));            // 20
console.log(valores.some((n) => n < 10));            // true
console.log(valores.every((n) => n > 3));            // true`, lang: "js" },
        { t: "h", h: "sort e encadeamento" },
        { t: "p", p: "sort ordena in-place. Por padrão compara como string: [2, 10, 1].sort() devolve [1, 10, 2]! Passe sempre a função de comparação (a, b) => a - b. No encadeamento, cada método devolve um array e o próximo continua a partir dele." },
        { t: "code", c: String.raw`const notas = [4, 9, 2, 7];

const crescente = [...notas].sort((a, b) => a - b);
console.log(crescente);   // [2, 4, 7, 9]

const aprovados = notas.filter((n) => n >= 5).reduce((acc, n) => acc + n, 0);
console.log(aprovados);   // 16`, lang: "js" },
        { t: "note", p: "O estilo é declarativo: descrevemos o QUE queremos (filtre, transforme, acumule), não COMO fazer (índices, contadores, condições). Isso reduz erros de off-by-one típicos dos laços tradicionais com for (let i = 0; ...)." },
        { t: "warn", p: "map/filter não alteram o array original; sort altera SIM, e por comparação de strings por padrão. Para preservar o original (como acima), copie antes com [...notas]. Antes de sortar números, use (a, b) => a - b." }
      ],
      quiz: [
        { q: "Dado const ns = [10, 20, 5], o que devolve ns.find((n) => n > 15)?", opts: ["[20]", "20", "true", "undefined"], ans: 1, expl: "find devolve o PRIMEIRO elemento que atende ao teste, no caso 20 — um valor, não um array. Se nenhum passasse, devolveria undefined." },
        { q: "Com const ns = [2, 10, 1], o que produz ns.sort() sem função de comparação?", opts: ["[1, 2, 10]", "[10, 2, 1]", "[1, 10, 2]", "[2, 1, 10]"], ans: 2, expl: "O sort padrão ordena como string em ordem lexicográfica: \"1\", \"10\", \"2\" resultam em [1, 10, 2]. Por isso números exigem a função (a, b) => a - b." },
        { q: "Qual método retorna true apenas se TODOS os elementos passarem no teste?", opts: ["some", "every", "find", "filter"], ans: 1, expl: "every exige que todos passem; some basta um. filter devolve um array com os aprovados e find devolve o primeiro elemento." },
        { q: "Qual é a diferença prática entre map e forEach?", opts: ["São idênticos.", "map devolve um NOVO array com os resultados; forEach não devolve nada útil.", "map altera o array original; forEach não.", "forEach devolve um novo array; map não devolve nada."], ans: 1, expl: "map constrói e devolve um novo array sem tocar no original, permitindo encadeamento. forEach apenas executa um efeito para cada item e devolve undefined." },
        { q: "O que filter() faz com o array original?", opts: ["Altera-o removendo os itens reprovados.", "Não o altera — devolve um novo array apenas com os itens aprovados.", "Remove todos os elementos.", "Devolve true ou false."], ans: 1, expl: "filter é imutável: o array original continua intacto. Ele cria e retorna um novo array com apenas os elementos que passaram no teste." },
        { q: "Como o reduce funciona em poucas palavras?", opts: ["Remove duplicatas de um array.", "Acumula os elementos em um único valor usando uma função acumuladora.", "Filtra valores acima da média.", "Organiza o array em ordem crescente."], ans: 1, expl: "reduce recebe uma função (acumulador, valor atual) e um valor inicial, iterando sobre cada item para construir um resultado final (soma, string, objeto, etc.)." }
      ]
    },
    {
      id: "js-async",
      title: "JavaScript Assíncrono",
      subtitle: "Ordem de execução, Promises e async/await.",
      blocks: [
        { t: "h", h: "Execução em ordem e o event loop" },
        { t: "p", p: "JavaScript roda um bloco por vez, de cima para baixo. O assíncrono adia pedaços de código: setTimeout e Promises agendam callbacks, que só rodam depois que o bloco atual terminar. É o event loop: a fila síncrona primeiro, tarefas agendadas depois — nunca em paralelo real com a thread principal do navegador." },
        { t: "code", c: String.raw`console.log("1: primeira instrução");
console.log("2: segunda instrução");

// Repare: um setTimeout(funcao, 0) aqui não executaria funcao na hora.
// Ele ficaria agendado e rodaria depois que este bloco síncrono terminar.
console.log("3: terceira e última");`, lang: "js" },
        { t: "h", h: "Callbacks, Promises e async/await" },
        { t: "p", p: "Callbacks aninhados demais viram \"callback hell\"; Promises organizam o fluxo com .then e .catch. O .then registra o que roda quando a promessa é resolvida — note no código abaixo que a linha síncrona seguinte executa primeiro. async/await é açúcar sobre Promises: a função async devolve uma Promise, e o await espera por ela dentro de um fluxo com cara de código síncrono." },
        { t: "code", c: String.raw`function buscarEmMemoria() {
    return new Promise(function (resolve) {
        resolve("dados simulados");
    });
}

buscarEmMemoria().then(function (resposta) {
    console.log("Resolvido: " + resposta);
});

console.log("Esta linha roda antes do .then acima.");`, lang: "js" },
        { t: "h", h: "fetch e chamadas a APIs" },
        { t: "p", p: "fetch(url) faz uma requisição HTTP e devolve uma Promise. O padrão é: fetch(url).then(r => r.json()).then(usarDados) ou, na forma mais moderna, const resp = await fetch(url); const dados = await resp.json();. Um fetch real depende de rede e server; o que importa aqui é o padrão: nunca bloquear a interface, reagir quando a resposta chegar." },
        { t: "note", p: "async/await não cria paralelismo: continua sendo um só thread. Se duas operações não dependem uma da outra, dispare as duas Promises (ex.: com Promise.all) em vez de aguardá-las em sequência — esperar em série é mais lento sem necessidade." },
        { t: "warn", p: "Uma Promise que falha e não tem .catch gera erro não tratado (Unhandled Rejection), que passa despercebido. Trate sempre o caminho do erro: .catch na cadeia ou try/catch num bloco async." }
      ],
      quiz: [
        { q: "Com setTimeout(callback, 0), quando o callback roda?", opts: ["Imediatamente, interrompendo o bloco atual.", "Depois que o bloco síncrono atual terminar, mesmo com delay 0.", "Em uma thread separada, em paralelo.", "Nunca, se o tempo for 0."], ans: 1, expl: "O delay 0 apenas significa \"não esperar\"; o callback ainda é agendado e só executa após a tarefa síncrona atual — o event loop não interrompe o que está rodando." },
        { q: "O que é uma Promise em JavaScript?", opts: ["Um tipo de loop.", "Um objeto que representa o resultado de uma operação assíncrona (um valor futuro).", "Uma função exclusiva de HTML.", "Um sinônimo de variável global."], ans: 1, expl: "Uma Promise encapsula um valor que ainda não existe: fica pendente e depois é resolvida ou rejeitada. Acompanhamos a resolução com .then e o erro com .catch." },
        { q: "No código promise.then(ok).catch(erro), o que acontece se a Promise rejeitar?", opts: ["ok é chamado mesmo assim.", "erro é chamado com o motivo da rejeição.", "Nada; o erro é ignorado em silêncio.", "O programa recarrega a página."], ans: 1, expl: "A rejeição pula o .then e cai no .catch, que recebe o motivo. Sem tratamento, transforma-se em Unhandled Rejection — erro silencioso, difícil de depurar." },
        { q: "Qual é o papel do async em async function carregar()?", opts: ["Faz a função rodar mais rápido.", "Faz a função SEMPRE devolver uma Promise.", "Permite usar variáveis globais.", "Transforma a função em um loop."], ans: 1, expl: "Toda função async devolve uma Promise; dentro dela, o await pausa o fluxo aguardando outra Promise (como um fetch), deixando o código com aparência sequencial sem travar a página." },
        { q: "No async/await, como tratamos erros de forma semelhante ao .catch?", opts: ["Usando um segundo .then()", "Envolvendo o código com try/catch.", "Usando setTimeout.", "Não é possível tratar erros com await."], ans: 1, expl: "Dentro de uma função async, o bloco try/catch captura erros das Promises aguardadas com await, da mesma forma que .catch faz na cadeia de Promises." },
        { q: "fetch(url) devolve o quê?", opts: ["Um objeto String.", "Uma Promise que resolve com a resposta da requisição HTTP.", "Um objeto DOM.", "Um array de dados."], ans: 1, expl: "fetch é assíncrono e retorna uma Promise. Para obter os dados, encadear .then(r => r.json()) ou usar await dentro de uma função async." }
      ]
    }
  ]
};