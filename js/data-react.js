/* Curso: React */
window.COURSES = window.COURSES || {};
window.COURSES.react = {
  name: "React",
  topics: [
    {
      id: "react-intro",
      title: "Introdução ao React",
      subtitle: "A biblioteca mais popular para interfaces de usuário.",
      blocks: [
        { t: "h", h: "O que é React?" },
        { t: "p", p: "React é uma biblioteca JavaScript criada pelo Meta (Facebook) para construir interfaces de usuário. Em vez de manipular o DOM diretamente, o React trabalha com uma representação leve chamada Virtual DOM, que atualiza apenas o que realmente mudou na tela." },
        { t: "h", h: "Virtual DOM" },
        { t: "p", p: "Quando o estado muda, o React cria uma nova árvore virtual, compara com a anterior (diffing) e aplica apenas as mudanças necessárias ao DOM real. Isso torna a atualização da interface muito mais rápida." },
        { t: "lst", items: [
          "O DOM real é lento para manipular diretamente.",
          "O Virtual DOM é uma cópia leve em memória.",
          "O React compara as duas árvores e atualiza só o que mudou.",
          "Isso otimiza o desempenho automaticamente."
        ]},
        { t: "h", h: "SPA — Single Page Application" },
        { t: "p", p: "React permite criar SPAs: aplicações onde a página não recarrega inteiramente a cada ação. O conteúdo é trocado via JavaScript, dando a sensação de um aplicativo desktop no navegador." },
        { t: "h", h: "JSX — JavaScript XML" },
        { t: "p", p: "JSX é a sintaxe que mistura HTML com JavaScript dentro dos arquivos .jsx. Ela permite escrever a estrutura da interface de forma declarativa, sem precisar de template strings ou métodos como createElement." },
        { t: "code", c: String.raw`const App = () => {
  const nome = "Gabriel";
  return <h1>Olá, {nome}!</h1>;
};`, lang: "jsx" },
        { t: "h", h: "Create React App vs Vite" },
        { t: "lst", items: [
          "Create React App (CRA): ferramenta oficial antiga, mais pesada, dev server mais lento.",
          "Vite: ferramenta moderna, molto mais rápido, suporta React por padrão.",
          "Hoje em dia, Vite é a recomendação da comunidade para novos projetos."
        ]},
        { t: "code", c: String.raw`# Criando um projeto com Vite
npm create vite@latest meu-app -- --template react

# Entrando na pasta e instalando dependências
cd meu-app
npm install
npm run dev`, lang: "bash" },
        { t: "h", h: "Quando usar React?" },
        { t: "lst", items: [
          "Interfaces ricas e interativas.",
          "SPAs que precisam de atualizações dinâmicas.",
          "Aplicações com muitos componentes reutilizáveis.",
          "Projetos onde a comunidade e ecossistema importam.",
          "Dashboards, e-commerc e redes sociais."
        ]},
        { t: "note", p: "React é uma biblioteca, não um framework. Ele cuida da camada de visualização, mas você escolhe as outras ferramentas (rotação, estado global, etc.)." },
        { t: "warn", p: "Não confunda React com React Native. React é para web; React Native é para aplicativos mobile nativos." }
      ],
      quiz: [
        { q: "O que é o Virtual DOM no React?", opts: ["Uma cópia leve do DOM real usada para otimizar atualizações.", "Um substituto permanente do DOM.", "Uma API do navegador para manipular elementos.", "Uma ferramenta de teste do React."], ans: 0, expl: "O Virtual DOM é uma representação em memória do DOM real. O React compara versões antigas e novas para aplicar apenas as mudanças necessárias, evitando re-renderizações completas." },
        { q: "React é classificado como:", opts: ["Framework completo.", "Biblioteca para construção de interfaces.", "Linguagem de programação.", "Banco de dados front-end."], ans: 1, expl: "React é uma biblioteca — ele resolve apenas a camada de UI. Para rotas, estado global e outras necessidades, você usa bibliotecas complementares." },
        { q: "JSX permite:", opts: ["Escrever HTML dentro de arquivos JavaScript.", "Executar CSS em tempo real.", "Substituir o navegador.", "Criar banco de dados."], ans: 0, expl: "JSX é uma extensão de sintaxe que permite misturar HTML com JavaScript, tornando a criação de interfaces mais declarativa e legível." },
        { q: "O que significa SPA?", opts: ["Single Page Application — a página não recarrega inteiramente.", "Simple Programming Approach — um estilo de codificação.", "Server Page Application — tudo roda no servidor.", "Static Page Assembly — páginas estáticas."], ans: 0, expl: "Uma SPA carrega uma única vez e troca o conteúdo via JavaScript, sem recarregar a página inteira a cada navegação." },
        { q: "Por que o Virtual DOM é mais rápido que manipular o DOM real?", opts: ["Porque não usa JavaScript.", "Porque opera na memória e aplica apenas as diferenças ao DOM real.", "Porque elimina o HTML da página.", "Porque roda em uma thread separada."], ans: 1, expl: "A comparação (diffing) acontece na memória, e o React atualiza apenas os nós que mudaram no DOM real, evitando operações custosas." },
        { q: "Qual ferramenta é recomendada hoje para criar um projeto React?", opts: ["Create React App", "Vite", "Webpack manualmente", "Angular CLI"], ans: 1, expl: "Vite é a escolha moderna: dev server muito mais rápido, configuração mínima e suporte nativo a React." },
        { q: "Quem criou o React?", opts: ["Google", "Meta (Facebook)", "Microsoft", "Twitter"], ans: 1, expl: "O React foi criado pelo time do Facebook (agora Meta) em 2013 e desde então tornou-se a biblioteca de UI mais usada no mundo." },
        { q: "React Native é usado para:", opts: ["Criar jogos.", "Desenvolver aplicativos mobile nativos.", "Manipular banco de dados.", "Criar sites estáticos."], ans: 1, expl: "React Native usa a mesma sintaxe do React para criar apps nativos para iOS e Android, sem usar WebView." },
        { q: "Para criar um projeto React com Vite, o comando correto é:", opts: ["npm create vite@latest app -- --template react", "npm install react", "npx create-react-app app", "npm init react app"], ans: 0, expl: "npm create vite@latest com o template react cria a estrutura do projeto com Vite e React prontos para uso." },
        { q: "React é ideal para:", opts: ["Sites com apenas texto estático.", "Interfaces ricas e interativas com muitos componentes.", "Apenas back-end.", "Scripts de automação."], ans: 1, expl: "React brilha em interfaces complexas e dinâmicas, onde a reutilização de componentes e atualizações eficientes são importantes." }
      ]
    },
    {
      id: "react-componentes",
      title: "Componentes e JSX",
      subtitle: "Os blocos de construção de uma aplicação React.",
      blocks: [
        { t: "h", h: "O que são componentes?" },
        { t: "p", p: "Componentes são funções (ou classes) que retornam JSX — a descrição de uma parte da interface. Cada componente é uma unidade reutilizável e isolada, como peças de Lego que se encaixam para formar a aplicação completa." },
        { t: "code", c: String.raw`function Cabecalho() {
  return <h1>Meu Site</h1>;
}

function App() {
  return (
    <div>
      <Cabecalho />
      <p>Bem-vindo ao meu site!</p>
    </div>
  );
}`, lang: "jsx" },
        { t: "h", h: "Componentes funcionais" },
        { t: "p", p: "Hoje em dia, quase todos os componentes React são escritos como funções JavaScript puras. Eles recebem dados via props e retornam JSX. Não há necessidade de classes." },
        { t: "code", c: String.raw`const Saudacao = (nome) => {
  return <h2>Olá, {nome}!</h2>;
};

// Usando arrow function com retorno implícito
const Saudacao2 = (nome) => <h2>Olá, {nome}!</h2>;`, lang: "jsx" },
        { t: "h", h: "Sintaxe JSX" },
        { t: "lst", items: [
          "JSX parece HTML, mas é JavaScript — use className em vez de class.",
          "Use htmlFor em vez de for em labels.",
          "Todos os COMPONENTES devem ser escritos com letra maiúscula.",
          "Uma tag de abertura SEMPRE precisa de fechamento (<img />).",
          "Um componente só pode retornar UM elemento pai (use Fragment se necessário)."
        ]},
        { t: "code", c: String.raw`// Correto
const App = () => <div className="app">...</div>;

// Errado — class não existe em JSX
const App = () => <div class="app">...</div>;`, lang: "jsx" },
        { t: "h", h: "Expressões JavaScript no JSX" },
        { t: "p", p: "Dentro das chaves { }, você pode usar qualquer expressão JavaScript: variáveis, chamadas de função, operadores ternários e até arrays." },
        { t: "code", c: String.raw`const App = () => {
  const hora = new Date().getHours();
  const msg = hora < 12 ? "Bom dia!" : "Boa noite!";

  return (
    <div>
      <h1>{msg}</h1>
      <p>2 + 2 = {2 + 2}</p>
    </div>
  );
};`, lang: "jsx" },
        { t: "h", h: "Fragmentos (Fragment)" },
        { t: "p", p: "Quando um componente precisa retornar múltiplos elementos lado a lado sem adicionar uma div extra, use Fragment." },
        { t: "code", c: String.raw`import { Fragment } from "react";

const Lista = () => (
  <Fragment>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </Fragment>
);

// Ou com a sintaxe curta <></>
const Lista2 = () => (
  <>
    <li>Item 1</li>
    <li>Item 2</li>
  </>
);`, lang: "jsx" },
        { t: "h", h: "Componentes aninhados" },
        { t: "p", p: "Componentes podem ser usados dentro de outros, criando uma árvore de componentes. Isso permite dividir a interface em partes pequenas e gerenciáveis." },
        { t: "code", c: String.raw`const Cabecalho = () => <header><h1>Logo</h1></header>;
const Rodape = () => <footer><p>&copy; 2025</p></footer>;

const App = () => (
  <div>
    <Cabecalho />
    <main>Conteúdo principal</main>
    <Rodape />
  </div>
);`, lang: "jsx" },
        { t: "note", p: "Componentes em React são funções que retornam JSX. Pense neles como funções que 'descrevem' o que deve aparecer na tela para um determinado pedaço da interface." },
        { t: "warn", p: "Nunca coloque tags HTML como <p> dentro de <div> dentro de <p>. O JSX valida a hierarquia correta de elementos HTML." }
      ],
      quiz: [
        { q: "Em JSX, qual atributo substitui o 'class' do HTML?", opts: ["class", "className", "style", "id"], ans: 1, expl: "class é uma palavra-chave reservada do JavaScript, então o JSX usa className para definir classes CSS." },
        { q: "Como se chamam os componentes que são funções JavaScript que retornam JSX?", opts: ["Componentes de classe", "Componentes funcionais", "Componentes estáticos", "Componentes abstratos"], ans: 1, expl: "Componentes funcionais são funções puras que recebem props e retornam JSX. São a forma moderna e padrão de criar componentes no React." },
        { q: "Por que componentes React devem começar com letra maiúscula?", opts: ["Por estética apenas.", "Para o React distinguir de elementos HTML nativos.", "Porque é opcional.", "Para funcionar com classes."], ans: 1, expl: "Letra maiúscula indica ao React que é um componente customizado. Tags minúsculas como <div> são tratadas como elementos HTML nativos." },
        { q: "O que o Fragment <> faz no React?", opts: ["Cria uma div invisível.", "Retorna múltiplos elementos sem adicionar um nó extra ao DOM.", "Remove elementos da tela.", "Cria um componente vazio."], ans: 1, expl: "Fragment agrupa elementos sem criar um elemento pai no DOM, evitando divs desnecessárias na estrutura HTML." },
        { q: "O que pode ser usado dentro das chaves { } no JSX?", opts: ["Apenas texto.", "Qualquer expressão JavaScript válida.", "Apenas variáveis.", "Apenas CSS."], ans: 1, expl: "Dentro das chaves você pode usar variáveis, cálculos, funções, operadores ternários — qualquer expressão JS." },
        { q: "Qual o retorno correto de um componente React?", opts: ["Múltiplos elementos lado a lado.", "Apenas um único elemento pai (ou Fragment).", "Uma string HTML.", "Um objeto JSON."], ans: 1, expl: "Um componente deve retornar um único elemento raiz. Use Fragment <> para agrupar sem adicionar div extra ao DOM." },
        { q: "Como se declara um componente funcional moderno no React?", opts: ["class MeuComponente extends React.Component", "function MeuComponente() { return <div/> }", "MeuComponente = () => <div/>", "Ambas as duas últimas."], ans: 3, expl: "Tanto function quanto arrow function são formas válidas de declarar componentes funcionais." },
        { q: "Componentes aninhados servem para:", opts: ["Dividir a interface em partes reutilizáveis e pequenas.", "Aumentar o tamanho dos arquivos.", "Substituir o CSS.", "Conectar ao banco de dados."], ans: 0, expl: "Componentes aninhados permitem compor interfaces complexas a partir de partes menores, cada uma com sua responsabilidade." },
        { q: "No JSX, a tag <img> precisa de fechamento?", opts: ["Não, nunca.", "Sim, sempre: <img />.", "Apenas se tiver conteúdo.", "Depende do navegador."], ans: 1, expl: "No JSX todas as tags devem ser fechadas. Tags autoconfechadas como <img> usam a forma <img />." },
        { q: "O que acontece se usar <div class=\"app\"> no JSX?", opts: ["Funciona normalmente.", "Gera um erro ou warning — deve ser className.", "Cria um atributo inválido.", "Nada, o React ignora."], ans: 1, expl: "class é palavra-chave reservada do JS. O JSX exige className para atribuir classes CSS a elementos." }
      ]
    },
    {
      id: "react-props",
      title: "Props",
      subtitle: "Passando dados entre componentes de forma unidirecional.",
      blocks: [
        { t: "h", h: "O que são props?" },
        { t: "p", p: "Props (propriedades) são dados que um componente pai passa para um componente filho. Elas funcionam como argumentos de função — o componente filho recebe e usa para renderizar algo na tela." },
        { t: "code", c: String.raw`const Cartao = (props) => {
  return (
    <div className="cartao">
      <h2>{props.titulo}</h2>
      <p>{props.descricao}</p>
    </div>
  );
};

// Usando
const App = () => (
  <Cartao titulo="React" descricao="Uma biblioteca incrível." />
);`, lang: "jsx" },
        { t: "h", h: "Destructuring nas props" },
        { t: "p", p: "Em vez de usar props.titulo toda vez, você pode desestruturar os dados diretamente no parâmetro da função, tornando o código mais limpo." },
        { t: "code", c: String.raw`const Cartao = ({ titulo, descricao }) => {
  return (
    <div className="cartao">
      <h2>{titulo}</h2>
      <p>{descricao}</p>
    </div>
  );
};`, lang: "jsx" },
        { t: "h", h: "props.children" },
        { t: "p", p: "Todo componente React recebe automaticamente uma prop chamada children, que contém o que foi colocado entre as tags de abertura e fechamento do componente." },
        { t: "code", c: String.raw`const Container = ({ children }) => {
  return <div className="container">{children}</div>;
};

// Usando
const App = () => (
  <Container>
    <h1>Título</h1>
    <p>Parágrafo dentro do container.</p>
  </Container>
);`, lang: "jsx" },
        { t: "h", h: "Props padrão (default props)" },
        { t: "p", p: "Para evitar que uma prop seja undefined, você pode definir valores padrão diretamente no desestruturamento ou usando default parameters." },
        { t: "code", c: String.raw`// Forma moderna (default parameters)
const Botao = ({ texto = "Clique", cor = "azul" }) => {
  return <button style={{ backgroundColor: cor }}>{texto}</button>;
};

// Usando
<Botao />                         // texto="Clique", cor="azul"
<Botao texto="Enviar" cor="verde" />  // sobrescreve os padrões`, lang: "jsx" },
        { t: "h", h: "Props são somente leitura" },
        { t: "p", p: "Componentes filhos NUNCA devem modificar as props recebidas. Props são imutáveis — se o componente pai mudar o dado, o filho atualiza automaticamente." },
        { t: "code", c: String.raw`const Exibicao = ({ nome }) => {
  // NUNCA faça isso:
  // nome = "Outro nome"; // ERRO! Props são imutáveis

  return <p>Olá, {nome}</p>;
};`, lang: "jsx" },
        { t: "h", h: "Passando funções como props" },
        { t: "p", p: "Além de dados, props podem ser funções. Isso permite que o componente filho comunique com o pai, como ao clicar em um botão." },
        { t: "code", c: String.raw`const Botao = ({ aoClicar }) => {
  return <button onClick={aoClicar}>Clique aqui</button>;
};

const App = () => {
  const lidarComClique = () => alert("Clicou!");

  return <Botao aoClicar={lidarComClique} />;
};`, lang: "jsx" },
        { t: "note", p: "Pense nas props como a \"API\" de um componente: elas definem o que o componente precisa para funcionar. Mantenha o nome das props claro e descritivo." },
        { t: "warn", p: "Componentes React devem ser puros: dado as mesmas props, sempre produzir o mesmo resultado. Não altere props nem crie efeitos colaterais sem useEffect." }
      ],
      quiz: [
        { q: "O que são props no React?", opts: ["Variáveis de estado interno.", "Dados passados de um componente pai para um filho.", "Funções de lifecycle.", "Variáveis globais."], ans: 1, expl: "Props são o mecanismo de comunicação descendente: o pai envia dados ao filho que os usa para renderizar." },
        { q: "Como acessar uma prop chamada 'nome' em um componente funcional?", opts: ["this.nome", "props.nome ou por destructuring { nome }", "window.nome", "getNome()"], ans: 1, expl: "Props são acessíveis como props.nome ou diretamente via destructuring no parâmetro da função." },
        { q: "O que é props.children?", opts: ["A primeira prop que o componente recebe.", "O conteúdo entre as tags de abertura e fechamento do componente.", "Uma prop obrigatória.", "Um método de ciclo de vida."], ans: 1, expl: "children representa tudo que foi colocado dentro do componente: <Componente><h1>Isso aqui</h1></Componente>." },
        { q: "Como definir um valor padrão para uma prop?", opts: ["Usando this.defaultProps.", "Usando default parameters no destructuring: ({ nome = 'Ana' }).", "Não é possível.", "Usando props.default."], ans: 1, expl: "Default parameters são a forma moderna: const Comp = ({ nome = 'Ana' }) => ... — se nome não for passado, usa 'Ana'." },
        { q: "Componente filho pode modificar as props recebidas?", opts: ["Sim, livremente.", "Não, props são imutáveis.", "Apenas com useState.", "Apenas se o pai permitir."], ans: 1, expl: "Props são somente leitura. Alterar props é considerado uma prática anti-pattern no React." },
        { q: "Para que servem funções passadas como props?", opts: ["Para o filho comunicar ações ao componente pai.", "Para estilizar o componente.", "Para criar novos componentes.", "Para acessar o DOM diretamente."], ans: 0, expl: "Funções como props permitem que o filho execute lógica do pai, como lidar com cliques ou mudanças de estado." },
        { q: "Ao desestruturar props, qual é a sintaxe correta?", opts: ["const Comp = (titulo, descricao) => ...", "const Comp = ({ titulo, descricao }) => ...", "const Comp = { titulo, descricao } => ...", "const Comp = [titulo, descricao] => ..."], ans: 1, expl: "Destructuring发生在 parâmetros da função, entre chaves, extraindo as propriedades diretamente." },
        { q: "Quando o pai atualiza uma prop, o que acontece com o filho?", opts: ["Nada, o filho não atualiza.", "O filho é re-renderizado com o novo valor.", "O filho é destruído e recriado.", "O filho mantém o valor antigo."], ans: 1, expl: "O React detecta a mudança na prop e re-renderiza o componente filho com o novo valor automaticamente." },
        { q: "O que significa dizer que as props são 'unidirecionais'?", opts: ["Dados fluem apenas de cima para baixo: pai → filho.", "Dados fluem de filho para pai.", "Dados podem fluir em qualquer direção.", "Props são usadas apenas em um sentido."], ans: 0, expl: "Unidirecional significa que dados fluem apenas do componente pai para o filho — o filho não altera dados do pai." },
        { q: "Qual a diferença principal entre props e estado (state)?", opts: ["Props são mutáveis; state é imutável.", "Props vêm do pai e são imutáveis; state é gerenciado internamente pelo componente.", "Não há diferença.", "State é passado como argumento; props são internas."], ans: 1, expl: "Props são dados externos recebidos do componente pai; state é dado interno que o próprio componente gerencia e pode alterar." }
      ]
    },
    {
      id: "react-usestate",
      title: "Estado com useState",
      subtitle: "Gerenciando dados reativos dentro de componentes.",
      blocks: [
        { t: "h", h: "O que é estado (state)?" },
        { t: "p", p: "Estado são dados que pertencem ao componente e podem mudar ao longo do tempo. Quando o estado muda, o React re-renderiza o componente para refletir a nova informação na tela." },
        { t: "h", h: "useuseState — a hook" },
        { t: "p", p: "useState é um hook que permite adicionar estado a componentes funcionais. Ele retorna um array com dois valores: o valor atual e uma função para atualizá-lo." },
        { t: "code", c: String.raw`import { useState } from "react";

const Contador = () => {
  const [contagem, setContagem] = useState(0);

  return (
    <div>
      <p>Contagem: {contagem}</p>
      <button onClick={() => setContagem(contagem + 1)}>
        +1
      </button>
    </div>
  );
};`, lang: "jsx" },
        { t: "h", h: "Como funciona o useState" },
        { t: "lst", items: [
          "useState(0) retorna [valorAtual, funcaoAtualizar].",
          "O valor entre parênteses é o valor inicial (só usado na primeira renderização).",
          "setContagem(novoValor) atualiza o estado e re-renderiza o componente.",
          "O componente re-executa toda a função quando o estado muda."
        ]},
        { t: "h", h: "Estado é imutável" },
        { t: "p", p: "Nunca altere o estado diretamente (contagem = contagem + 1). Sempre use a função de atualização (setContagem) para garantir que o React detecte a mudança e re-renderize corretamente." },
        { t: "code", c: String.raw`// ERRADO — mutação direta
contagem = contagem + 1;

// CORRETO — sempre use a setter
setContagem(contagem + 1);`, lang: "jsx" },
        { t: "h", h: "Atualização funcional" },
        { t: "p", p: "Quando o novo estado depende do anterior, use a forma funcional: setContagem(valorAnterior => valorAnterior + 1). Isso garante que você sempre está trabalhando com o valor mais recente." },
        { t: "code", c: String.raw`// Forma funcional — mais segura
setContagem((contagemAnterior) => contagemAnterior + 1);

// Com múltiplos cliques rápidos, isso funciona corretamente
const incrementar = () => {
  setContagem((anterior) => anterior + 1);
  setContagem((anterior) => anterior + 1);
  setContagem((anterior) => anterior + 1);
  // Resultado: contagem aumenta 3
};`, lang: "jsx" },
        { t: "h", h: "Estado com objetos" },
        { t: "p", p: "Quando o estado é um objeto, você precisa criar um novo objeto ao atualizar — não mutate o objeto existente. Use spread operator para isso." },
        { t: "code", c: String.raw`const [usuario, setUsuario] = useState({
  nome: "Gabriel",
  idade: 25
});

// ERRADO — muta o objeto direto
// usuario.nome = "Ana";  // O React NÃO detecta a mudança!

// CORRETO — cria novo objeto
setUsuario({ ...usuario, nome: "Ana" });`, lang: "jsx" },
        { t: "h", h: "Múltiplos estados" },
        { t: "p", p: "Você pode ter quantos useState quiser em um componente. Cada um é independente e controla uma parte diferente do estado." },
        { t: "code", c: String.raw`const Formulario = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [idade, setIdade] = useState(0);

  return (
    <form>
      <input value={nome} onChange={(e) => setNome(e.target.value)} />
      <input value={email} onChange={(e) => setEmail(e.target.value)} />
    </form>
  );
};`, lang: "jsx" },
        { t: "note", p: "O useState só atualiza o estado no final da renderização atual. Se você chamar setContagem três vezes no mesmo event handler, o componente só re-renderiza uma vez com o valor final." },
        { t: "warn", p: "Nunca crie um useState dentro de um loop, condicional ou função interna. Coloque sempre no topo do componente, na mesma ordem em cada renderização." }
      ],
      quiz: [
        { q: "O que o useState retorna?", opts: ["Um valor único.", "Um array com [valorAtual, funcaoAtualizar].", "Um objeto com valor e setter.", "Uma Promise."], ans: 1, expl: "useState retorna um array de dois elementos: o estado atual e a função para atualizá-lo, chamada de setter." },
        { q: "Qual o argumento passado para useState na primeira chamada?", opts: ["O valor que será exibido na tela.", "O valor inicial do estado.", "Uma função de callback.", "Nenhum argumento."], ans: 1, expl: "O valor entre parênteses é o valor inicial — ele só é usado na primeira renderização do componente." },
        { q: "Por que nunca devemos mutar o estado diretamente?", opts: ["Porque dá erro de sintaxe.", "Porque o React não detecta a mudança e não re-renderiza.", "Porque é mais lento.", "Porque é proibido pela linguagem."], ans: 1, expl: "O React compara referências de objetos. Se você muta o mesmo objeto, ele não detecta mudança e o componente não atualiza." },
        { q: "Quando usar a forma funcional do setter (e.g., setVal(a => a + 1))?", opts: ["Sempre.", "Quando o novo estado depende do estado anterior.", "Quando o estado é um objeto.", "Nunca."], ans: 1, expl: "A forma funcional garante que você está trabalhando com o valor mais recente do estado, especialmente útil com atualizações rápidas." },
        { q: "O que acontece ao chamar setState três vezes no mesmo handler?", opts: ["Dá erro.", "Re-renderiza três vezes com valores intermediários.", "Re-renderiza uma vez com o valor final.", "Nada acontece."], ans: 2, expl: "O React agrupa as atualizações do mesmo handler e aplica todas de uma vez, re-renderizando apenas uma vez com o estado final." },
        { q: "Ao atualizar um estado que é um objeto, como preservar as outras propriedades?", opts: ["Usando Object.assign.", "Usando spread operator: { ...obj, propriedade: novoValor }.", "Chamando setState duas vezes.", "Mutando diretamente."], ans: 1, expl: "Spread operator cria um novo objeto com todas as propriedades anteriores e sobrescreve apenas a que você quer mudar." },
        { q: "Quantos useState podem existir em um componente?", opts: ["No máximo um.", "Dois.", "Três.", "Quantos forem necessários."], ans: 3, expl: "Cada useState é independente e controla uma parte diferente do estado. Você pode usar quantos precisar." },
        { q: "Qual a prática correta ao atualizar estado que depende do anterior?", opts: ["Usar o valor capturado no closure.", "Usar a forma funcional: setVal(prev => ...).", "Usar window.state.", "Usar globalThis."], ans: 1, expl: "A forma funcional acessa o valor mais recente, evitando problemas com stale closures em atualizações rápidas." },
        { q: "O que acontece se você chamar useState dentro de um if/condicional?", opts: ["Funciona normalmente.", "Pode causar bugs — hooks devem ser chamados na mesma ordem sempre.", "Dá erro de compilação.", "Nada."], ans: 1, expl: "O React usa a ordem dos hooks para associá-los ao componente. Mudar a ordem (com condicionais) causa bugs difíceis de rastrear." },
        { q: "Para que serve o useState no React?", opts: ["Gerenciar o ciclo de vida do componente.", "Adicionar estado reativo a componentes funcionais.", "Fazer requisições HTTP.", "Gerenciar rotas."], ans: 1, expl: "useState é o hook que permite que componentes funcionais tenham estado — dados que mudam e re-renderizam a interface." }
      ]
    },
    {
      id: "react-useeffect",
      title: "Efeitos Colaterais com useEffect",
      subtitle: "Conectando componentes ao mundo exterior.",
      blocks: [
        { t: "h", h: "O que são efeitos colaterais?" },
        { t: "p", p: "Efeitos colaterais são operações que acontecem fora do ciclo normal de renderização: buscar dados de uma API, manipular o DOM, configurar event listeners ou timers. O useEffect é o hook que permite executar essas operações." },
        { t: "code", c: String.raw`import { useEffect, useState } from "react";

const Timer = () => {
  const [segundos, setSegundos] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setSegundos((s) => s + 1);
    }, 1000);

    return () => clearInterval(id); // cleanup
  }, []);

  return <p>Timer: {segundos}s</p>;
};`, lang: "jsx" },
        { t: "h", h: "Sintaxe do useEffect" },
        { t: "p", p: "useEffect recebe duas coisas: uma função com o código do efeito e um array de dependências. A função roda após a renderização do componente." },
        { t: "code", c: String.raw`useEffect(() => {
  // código do efeito
  console.log("Componente montou!");

  return () => {
    // cleanup (opcional)
    console.log("Componente desmontou!");
  };
}, [dependencias]);`, lang: "jsx" },
        { t: "h", h: "Array de dependências" },
        { t: "lst", items: [
          "Array vazio []: o efeito roda apenas uma vez (na montagem).",
          "Com dependências [a, b]: o efeito roda quando a ou b mudam.",
          "Sem array: o efeito roda em CADA renderização (geralmente indesejado).",
          "O React compara os valores das dependências com Object.is para decidir se re-executa."
        ]},
        { t: "code", c: String.raw`// Roda apenas na montagem
useEffect(() => {
  console.log("Montou!");
}, []);

// Roda quando 'termo' mudar
useEffect(() => {
  console.log("Buscando:", termo);
  buscarDados(termo);
}, [termo]);`, lang: "jsx" },
        { t: "h", h: "Função de cleanup" },
        { t: "p", p: "Se o efeito cria algo que precisa ser desfeito (timers, subscriptions, event listeners), retorne uma função de cleanup. Ela roda quando o componente desmonta ou antes de re-executar o efeito." },
        { t: "code", c: String.raw`useEffect(() => {
  const handler = (e) => console.log("Scroll:", e);
  window.addEventListener("scroll", handler);

  return () => {
    window.removeEventListener("scroll", handler);
  };
}, []);`, lang: "jsx" },
        { t: "h", h: "Fetch de dados com useEffect" },
        { t: "p", p: "O caso de uso mais comum: buscar dados de uma API quando o componente monta ou quando uma dependência muda." },
        { t: "code", c: String.raw`const Usuario = ({ id }) => {
  const [usuario, setUsuario] = useState(null);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    setCarregando(true);
    fetch(\`/api/usuarios/\${id}\`)
      .then((res) => res.json())
      .then((dados) => {
        setUsuario(dados);
        setCarregando(false);
      });
  }, [id]);

  if (carregando) return <p>Carregando...</p>;
  return <h2>{usuario.nome}</h2>;
};`, lang: "jsx" },
        { t: "h", h: "Cuidados comuns" },
        { t: "lst", items: [
          "Nunca esqueça o array de dependências — senão o efeito roda infinitamente.",
          "Use cleanup para evitar memory leaks.",
          "Não assíncrono direto no useEffect — crie uma função async interna.",
          "Evite dependências que mudam a cada render (objetos, arrays criados inline)."
        ]},
        { t: "note", p: "O useEffect roda DEPOIS da renderização, não durante. Isso garante que o DOM já está atualizado quando o efeito executa." },
        { t: "warn", p: "Efeitos com array vazio [] rodam uma vez na montagem. Mas se o efeito usa estado ou props, o lint vai avisar — adicione-as ao array de dependências." }
      ],
      quiz: [
        { q: "Para que serve o useEffect no React?", opts: ["Gerenciar estado do componente.", "Executar efeitos colaterais (APIs, timers, DOM).", "Criar novos componentes.", "Estilizar componentes."], ans: 1, expl: "useEffect permite executar operações que saem do ciclo normal de renderização, como requisições HTTP e subscriptions." },
        { q: "O array de dependências vazio [] significa:", opts: ["O efeito roda em cada renderização.", "O efeito roda apenas uma vez (na montagem).", "O efeito nunca roda.", "O efeito roda a cada mudança de estado."], ans: 1, expl: "Array vazio = sem dependências = roda apenas na montagem do componente e nunca mais." },
        { q: "Para que serve a função de cleanup retornada pelo useEffect?", opts: ["Para recriar o componente.", "Para desfazer o efeito (remover listeners, limpar timers).", "Para atualizar o estado.", "Para renderizar novamente."], ans: 1, expl: "O cleanup é chamado quando o componente desmonta ou antes de re-executar o efeito, evitando memory leaks." },
        { q: "Se o useEffect não tiver array de dependências, o que acontece?", opts: ["Roda apenas na montagem.", "Roda em cada renderização do componente.", "Dá erro.", "Roda apenas quando o componente desmonta."], ans: 1, expl: "Sem array, o efeito executa após CADA renderização — geralmente isso é indesejado e pode causar loops infinitos." },
        { q: "Como buscar dados de uma API corretamente com useEffect?", opts: ["Direto no useEffect: useEffect(async () => await fetch(...)).", "Criando uma função async dentro do useEffect e chamando-a.", "Usando setTimeout.", "Usando XMLHttpRequest diretamente."], ans: 1, expl: "O callback do useEffect não pode ser async diretamente. Crie uma função async interna e a chame dentro do efeito." },
        { q: "Se o efeito usa a prop 'id', onde ela deve estar?", opts: ["Em nenhum lugar.", "No array de dependências: useEffect(..., [id]).", "No return do efeito.", "No estado do componente."], ans: 1, expl: "Toda variável externa usada dentro do efeito deve estar no array de dependências para garantir correção." },
        { q: "O useEffect roda em que momento?", opts: ["Antes da renderização.", "Durante a renderização.", "Depois da renderização, quando o DOM já está atualizado.", "Antes do componente montar."], ans: 2, expl: "useEffect é chamado após a renderização, garantindo que o DOM já reflete o estado atual quando o efeito executa." },
        { q: "Para que limpar um intervalo no useEffect?", opts: ["Chamar clearInterval no return da função de cleanup.", "Usar useState.", "Não é necessário.", "Usar setTimeout."], ans: 0, expl: "Retorne uma função que chama clearInterval(id) para parar o intervalo quando o componente desmontar." },
        { q: "O que acontece se você esquecer o array de dependências?", opts: ["Funciona normalmente.", "O efeito pode rodar infinitamente ou não reagir a mudanças corretamente.", "Dá erro de compilação.", "Nada."], ans: 1, expl: "Sem dependências corretas, o efeito pode re-executar desnecessariamente ou ignorar mudanças importantes, causando bugs." },
        { q: "Qual é a forma correta de fazer fetch com cleanup?", opts: ["Usar AbortController no cleanup para cancelar a requisição.", "Não é possível cancelar fetch.", "Usar window.fetch direto.", "Usar setTimeout no cleanup."], ans: 0, expl: "AbortController permite cancelar a requisição fetch no cleanup, evitando atualizar estado de componentes desmontados." }
      ]
    },
    {
      id: "react-eventos",
      title: "Eventos e Formulários",
      subtitle: "Lidando com interações do usuário no React.",
      blocks: [
        { t: "h", h: "Sintaxe de eventos no React" },
        { t: "p", p: "No React, eventos são tratados como props (onClick, onChange, onSubmit). A diferença do HTML é que os nomes usam camelCase e os handlers são funções JavaScript, não strings." },
        { t: "code", c: String.raw`const Botao = () => {
  const handleClick = () => {
    console.log("Clicou!");
  };

  return <button onClick={handleClick}>Clique aqui</button>;
};`, lang: "jsx" },
        { t: "h", h: "Objeto de evento (SyntheticEvent)" },
        { t: "p", p: "O React encapsula os eventos nativos do navegador em um SyntheticEvent, que tem a mesma interface mas funciona de forma consistente em todos os navegadores." },
        { t: "code", c: String.raw`const Botao = () => {
  const handleClick = (evento) => {
    console.log("Tipo:", evento.type);
    console.log("Alvo:", evento.target);
    // Para acessar o evento nativo: evento.nativeEvent
  };

  return <button onClick={handleClick}>Clique</button>;
};`, lang: "jsx" },
        { t: "h", h: "Formulários controlados" },
        { t: "p", p: "Em formulários controlados, o valor do input é controlado pelo estado do React. Toda mudança atualiza o estado, que atualiza o input — criando um ciclo reativo." },
        { t: "code", c: String.raw`import { useState } from "react";

const Formulario = () => {
  const [nome, setNome] = useState("");

  return (
    <form>
      <input
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        placeholder="Digite seu nome"
      />
      <p>Olá, {nome}!</p>
    </form>
  );
};`, lang: "jsx" },
        { t: "h", h: "onChange — capturando mudanças" },
        { t: "p", p: "O evento onChange dispara toda vez que o valor do input muda. Use e.target.value para obter o valor digitado pelo usuário." },
        { t: "code", c: String.raw`const InputEmail = () => {
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <input
      type="email"
      value={email}
      onChange={handleChange}
    />
  );
};`, lang: "jsx" },
        { t: "h", h: "onSubmit — enviando formulários" },
        { t: "p", p: "Para lidar com o envio de formulários, use o evento onSubmit no elemento <form>. Sempre previna o comportamento padrão para evitar recarregar a página." },
        { t: "code", c: String.raw`const Formulario = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Impede recarregar a página
    console.log("Enviando:", { nome, email });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={nome} onChange={(e) => setNome(e.target.value)} />
      <input value={email} onChange={(e) => setEmail(e.target.value)} />
      <button type="submit">Enviar</button>
    </form>
  );
};`, lang: "jsx" },
        { t: "h", h: "Múltiplos inputs" },
        { t: "p", p: "Para formulários com vários campos, você pode usar um único objeto no estado e uma função genérica de handleChange." },
        { t: "code", c: String.raw`const Formulario = () => {
  const [dados, setDados] = useState({
    nome: "",
    email: "",
    senha: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDados((anterior) => ({ ...anterior, [name]: value }));
  };

  return (
    <form>
      <input name="nome" value={dados.nome} onChange={handleChange} />
      <input name="email" value={dados.email} onChange={handleChange} />
      <input name="senha" type="password" value={dados.senha} onChange={handleChange} />
    </form>
  );
};`, lang: "jsx" },
        { t: "h", h: "Checkbox, select e textarea" },
        { t: "p", p: "Para checkbox, use e.target.checked. Para select, use e.target.value. Para textarea, o valor é controlado pela prop value, assim como input." },
        { t: "code", c: String.raw`const FormularioAvancado = () => {
  const [aceito, setAceito] = useState(false);
  const [cor, setCor] = useState("azul");
  const [bio, setBio] = useState("");

  return (
    <form>
      <input
        type="checkbox"
        checked={aceito}
        onChange={(e) => setAceito(e.target.checked)}
      />
      <select value={cor} onChange={(e) => setCor(e.target.value)}>
        <option value="azul">Azul</option>
        <option value="vermelho">Vermelho</option>
      </select>
      <textarea value={bio} onChange={(e) => setBio(e.target.value)} />
    </form>
  );
};`, lang: "jsx" },
        { t: "note", p: "Formulários controlados são o padrão no React. Eles tornam o estado da interface sempre previsível e depurável, pois o estado é a única fonte da verdade." },
        { t: "warn", p: "Sempre use e.preventDefault() no onSubmit para evitar que o formulário recarregue a página inteira." }
      ],
      quiz: [
        { q: "Como o React trata eventos no JSX?", opts: ["Como strings: onClick=\"funcao()\".", "Como funções passadas diretamente: onClick={funcao}.", "Como classes.", "Como seletores CSS."], ans: 1, expl: "Eventos no React aceitam funções JavaScript diretamente, como onClick={handleClick}, sem strings." },
        { q: "O que é um formulário controlado?", opts: ["Um formulário que não pode ser alterado.", "Um formulário cujo valor é controlado pelo estado do React.", "Um formulário que envia dados automaticamente.", "Um formulário com validação automática."], ans: 1, expl: "Em formulários controlados, o valor do input é sempre espelhado no estado React, criando um ciclo reativo." },
        { q: "Para obter o valor digitado em um input, qual propriedade do evento usar?", opts: ["e.value", "e.target.value", "e.target.text", "e.target.innerHTML"], ans: 1, expl: "e.target.value retorna o valor atual do elemento que disparou o evento (o input)." },
        { q: "O que e.preventDefault() faz no onSubmit?", opts: ["Impede que o formulário seja enviado ao servidor e recarregue a página.", "Impede que o componente re-renderize.", "Cancela a requisição HTTP.", "Remove todos os inputs."], ans: 0, expl: "preventDefault() evita o comportamento padrão do navegador (recarregar a página ao enviar um form)." },
        { q: "Para checkbox, qual propriedade do evento indica se está marcado?", opts: ["e.target.value", "e.target.checked", "e.target.selected", "e.target.marked"], ans: 1, expl: "Para inputs do tipo checkbox, e.target.checked retorna true ou false indicando o estado do checkbox." },
        { q: "Como atualizar apenas uma propriedade de um objeto no estado?", opts: ["Mutando a propriedade diretamente.", "Usando spread: { ...obj, propriedade: novoValor }.", "Usando Object.assign no estado.", "Criando novo useState para cada propriedade."], ans: 1, expl: "Spread operator cria novo objeto, preservando as propriedades existentes e sobrescrevendo apenas a desejada." },
        { q: "Qual a diferença entre onClick e onSubmit?", opts: ["onClick é para botões; onSubmit é para formulários.", "Não há diferença.", "onClick é nativo do HTML; onSubmit é do React.", "onSubmit só funciona com GET."], ans: 0, expl: "onClick dispara ao clicar em um elemento (geralmente botão). onSubmit dispara ao enviar um formulário." },
        { q: "Por que usamos camelCase nos nomes de eventos do React?", opts: ["Por estética.", "Porque eventos JSX são props JavaScript, não atributos HTML.", "Porque é obrigatório no HTML.", "Porque o React converte automaticamente."], ans: 1, expl: "No JSX, props são camelCase porque são propriedades JavaScript. onClick, onChange, onSubmit etc." },
        { q: "Em um input controlado, o que acontece se o valor do input for diferente do estado?", opts: ["Nada, aceita o valor do DOM.", "O React sobrescreve o valor do input com o estado.", "Dá erro.", "O input fica desabilitado."], ans: 1, expl: "O React sempre força o valor do input a ser igual ao estado. Se mudar direto no DOM, o React reverte na próxima renderização." },
        { q: "Para criar um handleChange genérico para vários inputs, como obter o name do campo?", opts: ["e.target.name", "e.target.id", "e.name", "this.name"], ans: 0, expl: "O atributo name do input está disponível via e.target.name, permitindo usar um único handler para múltiplos campos." }
      ]
    },
    {
      id: "react-listas",
      title: "Listas e Chaves",
      subtitle: "Renderizando coleções de dados de forma eficiente.",
      blocks: [
        { t: "h", h: "Renderizando listas com map" },
        { t: "p", p: "Para renderizar uma lista de elementos, o método JavaScript map é a ferramenta principal do React. Ele transforma cada item do array em um elemento JSX." },
        { t: "code", c: String.raw`const Frutas = () => {
  const frutas = ["Maçã", "Banana", "Laranja"];

  return (
    <ul>
      {frutas.map((fruta) => (
        <li>{fruta}</li>
      ))}
    </ul>
  );
};`, lang: "jsx" },
        { t: "h", h: "A prop key" },
        { t: "p", p: "Quando renderiza listas, o React precisa de uma key única para cada item. A key ajuda o React a identificar qual item mudou, foi adicionado ou removido, otimizando a re-renderização." },
        { t: "code", c: String.raw`const Frutas = () => {
  const frutas = ["Maçã", "Banana", "Laranja"];

  return (
    <ul>
      {frutas.map((fruta, indice) => (
        <li key={indice}>{fruta}</li>
      ))}
    </ul>
  );
};

// Melhor usar IDs únicos como key
const Usuarios = ({ usuarios }) => (
  <ul>
    {usuarios.map((u) => (
      <li key={u.id}>{u.nome}</li>
    ))}
  </ul>
);`, lang: "jsx" },
        { t: "h", h: "Por que keys são importantes?" },
        { t: "lst", items: [
          "Keys ajudam o React a identificar que itens mudaram.",
          "Sem keys, o React re-renderiza todos os itens (lento).",
          "Com keys, o React atualiza apenas os itens que mudaram.",
          "Use IDs únicos do banco de dados, não o índice do array.",
          "O índice só é aceitável se a lista NÃO for reordenada ou filtrada."
        ]},
        { t: "h", h: "Listas com objetos" },
        { t: "p", p: "Na prática, listas contêm objetos. Acesse as propriedades com notação de ponto e use o ID único como key." },
        { t: "code", c: String.raw`const usuarios = [
  { id: 1, nome: "Ana", email: "ana@email.com" },
  { id: 2, nome: "Bruno", email: "bruno@email.com" },
  { id: 3, nome: "Carlos", email: "carlos@email.com" }
];

const ListaUsuarios = () => (
  <div>
    {usuarios.map((u) => (
      <div key={u.id}>
        <h3>{u.nome}</h3>
        <p>{u.email}</p>
      </div>
    ))}
  </div>
);`, lang: "jsx" },
        { t: "h", h: "Lista filtrada" },
        { t: "p", p: "Para filtrar itens antes de renderizar, encadene filter() antes de map(). Isso retorna apenas os itens que atendem à condição." },
        { t: "code", c: String.raw`const numeros = [1, 2, 3, 4, 5, 6];

const Pares = () => (
  <ul>
    {numeros
      .filter((n) => n % 2 === 0)
      .map((n) => (
        <li key={n}>{n}</li>
      ))}
  </ul>
);`, lang: "jsx" },
        { t: "h", h: "Lista ordenada" },
        { t: "p", p: "Para ordenar itens, use o método sort() antes de map(). Lembre-se de criar uma cópia com spread antes de ordenar para não mutar o array original." },
        { t: "code", c: String.raw`const frutas = ["Banana", "Maçã", "Laranja"];

const FrutasOrdenadas = () => (
  <ul>
    {[...frutas]
      .sort()
      .map((f, i) => (
        <li key={f}>{f}</li>
      ))}
  </ul>
);`, lang: "jsx" },
        { t: "h", h: "Listas vazias e condicionais" },
        { t: "p", p: "Sempre trate o caso de lista vazia. Use operador ternário ou && para exibir uma mensagem quando não houver itens." },
        { t: "code", c: String.raw`const Lista = ({ itens }) => (
  <div>
    {itens.length === 0 ? (
      <p>Nenhum item encontrado.</p>
    ) : (
      <ul>
        {itens.map((item) => (
          <li key={item.id}>{item.nome}</li>
        ))}
      </ul>
    )}
  </div>
);`, lang: "jsx" },
        { t: "note", p: "A key deve ser estável, única e previsível. Nunca gere keys com Math.random() — isso causa re-renderizações desnecessárias a cada atualização." },
        { t: "warn", p: "Nunca use o índice do array como key se a lista for reordenada, filtrada ou tiver itens adicionados/removidos. Isso causa bugs de renderização." }
      ],
      quiz: [
        { q: "Como o React renderiza uma lista de elementos?", opts: ["Usando um loop for.", "Usando o método map() de arrays JavaScript.", "Usando forEach().", "Usando um switch."], ans: 1, expl: "map() transforma cada item do array em um elemento JSX, retornando um novo array que o React renderiza na tela." },
        { q: "Para que serve a prop key em listas?", opts: ["Estilizar cada item individualmente.", "Ajudar o React a identificar que itens mudaram, foram adicionados ou removidos.", "Definir a ordem dos itens.", "Criar efeitos de animação."], ans: 1, expl: "Keys permitem que o React rastreie itens da lista de forma eficiente, atualizando apenas o que realmente mudou." },
        { q: "Qual a melhor fonte de keys para listas?", opts: ["O índice do array (map(i)).", "Um ID único do banco de dados ou da API.", "O nome do item.", "Math.random()."], ans: 1, expl: "IDs únicos do banco de dados são estáveis e imutáveis. O índice só é aceitável se a lista nunca for reordenada ou filtrada." },
        { q: "Por que não devemos usar Math.random() como key?", keys: ["Porque gera erros de sintaxe.", "Porque muda a cada renderização, causando re-renderizações desnecessárias.", "Porque é muito lento.", "Porque o React não aceita strings."], ans: 1, expl: "Keys aleatórias mudam a cada render, fazendo o React destruir e recriar todos os elementos, perdendo performance e estado." },
        { q: "Para renderizar apenas números pares de uma lista, qual sequência de métodos usar?", opts: ["map().filter()", "filter().map()", "forEach().map()", "reduce().map()"], ans: 1, expl: "Primeiro filtre (filter) os itens que atendem à condição e depois mapeie (map) para criar os elementos JSX." },
        { q: "O que acontece se você esquecer a key na lista?", opts: ["Nada, funciona normalmente.", "O React gera um warning no console sobre keys ausentes.", "A lista não renderiza.", "Dá erro de compilação."], ans: 1, expl: "O React emite um warning pedindo keys, pois sem elas a otimização de diffing não funciona corretamente." },
        { q: "Para ordenar uma lista antes de renderizar, qual método usar?", opts: ["sort() diretamente no array original.", "sort() em uma cópia: [...array].sort().", "order()", "list()"], ans: 1, expl: "sort() muta o array original — sempre faça uma cópia com spread antes de ordenar para evitar efeitos colaterais." },
        { q: "Para exibir uma mensagem quando a lista está vazia, qual abordagem é correta?", opts: ["if (itens.length === 0) return <p>Vazio</p> antes do map.", "Usar ternário: itens.length === 0 ? <p>Vazio</p> : <ul>{map}</ul>.", "Ambas funcionam.", "Apenas usar &&."], ans: 2, expl: "Tanto return antecipado quanto ternário são formas válidas. O && também funciona: itens.length === 0 && <p>Vazio</p>." },
        { q: "O map() retorna:", opts: ["Nada (é void).", "Um novo array transformado.", "O mesmo array original.", "Um único elemento JSX."], ans: 1, expl: "map() retorna um novo array onde cada item foi transformado — neste caso, de dados para elementos React." },
        { q: "Por que [...frutas].sort() é melhor que frutas.sort()?", opts: ["É mais rápido.", "Não muta o array original, evitando bugs.", "É a única forma que funciona no React.", "Retorna uma string."], ans: 1, expl: "Spread cria uma cópia. Sort muta o array original, o que pode causar bugs difíceis de rastrear em componentes React." }
      ]
    },
    {
      id: "react-router",
      title: "React Router",
      subtitle: "Navegação entre páginas em uma SPA React.",
      blocks: [
        { t: "h", h: "Por que React Router?" },
        { t: "p", p: "Em uma SPA, não há recarregamento de página. O React Router permite criar múltiplas 'páginas' (rotas) dentro de uma única aplicação, trocando o conteúdo exibido com base na URL." },
        { t: "h", h: "Instalando o React Router" },
        { t: "code", c: String.raw`npm install react-router-dom`, lang: "bash" },
        { t: "h", h: "BrowserRouter e Route" },
        { t: "p", p: "BrowserRouter envolve toda a aplicação e define como as URLs são interpretadas. Route mapeia uma URL para um componente." },
        { t: "code", c: String.raw`import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Sobre from "./pages/Sobre";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre" element={<Sobre />} />
    </Routes>
  </BrowserRouter>
);`, lang: "jsx" },
        { t: "h", h: "Link — navegação sem recarregamento" },
        { t: "p", p: "A tag <Link> substitui o <a> para navegar entre rotas. Ela previne o recarregamento da página, mantendo a SPA." },
        { t: "code", c: String.raw`import { Link } from "react-router-dom";

const Navbar = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/sobre">Sobre</Link>
    <Link to="/contato">Contato</Link>
  </nav>
);`, lang: "jsx" },
        { t: "h", h: "useParams — parâmetros de rota" },
        { t: "p", p: "useParams retorna um objeto com os parâmetros definidos na URL. É útil para rotas dinâmicas como /usuarios/:id." },
        { t: "code", c: String.raw`import { useParams } from "react-router-dom";

const Usuario = () => {
  const { id } = useParams();
  return <h2>Perfil do usuário #{id}</h2>;
};

// Na definição da rota:
// <Route path="/usuarios/:id" element={<Usuario />} />`, lang: "jsx" },
        { t: "h", h: "useNavigate — navegação programática" },
        { t: "p", p: "useNavigate retorna uma função para navegar de forma programática, como ao enviar um formulário ou após um login." },
        { t: "code", c: String.raw`import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // ... validar login
    navigate("/dashboard"); // redireciona
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Entrar</button>
    </form>
  );
};`, lang: "jsx" },
        { t: "h", h: "Rota 404 — página não encontrada" },
        { t: "p", p: "Para tratar rotas que não existem, crie uma rota curinga com * no path. Ela captura qualquer URL não mapeada." },
        { t: "code", c: String.raw`import { Route, Routes } from "react-router-dom";

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/sobre" element={<Sobre />} />
    <Route path="*" element={<NaoEncontrada />} />
  </Routes>
);`, lang: "jsx" },
        { t: "note", p: "React Router v6 é o padrão atual. Evite usar versões antigas (v5), pois a API mudou significativamente — Routes substitui Switch, element substitui component." },
        { t: "warn", p: "Todo componente que usa hooks do React Router (useParams, useNavigate) DEVE estar dentro de BrowserRouter. Caso contrário, dá erro em tempo de execução." }
      ],
      quiz: [
        { q: "O que o React Router permite fazer?", opts: ["Gerenciar estado global.", "Criar múltiplas rotas (páginas) em uma SPA sem recarregar.", "Fazer requisições HTTP.", "Estilizar componentes."], ans: 1, expl: "React Router mapeia URLs para componentes, permitindo navegar entre 'páginas' sem recarregar o navegador." },
        { q: "Qual componente envolve toda a aplicação para habilitar rotas?", opts: ["<Routes>", "<BrowserRouter>", "<Link>", "<Route>"], ans: 1, expl: "BrowserRouter é o provider que habilita a navegação por URL em toda a árvore de componentes." },
        { q: "Para navegar sem recarregar a página, qual tag usar?", opts: ["<a href=\"/\">", "<Link to=\"/\">", "<Redirect to=\"/\">", "<NavLink>"], ans: 1, expl: "Link do React Router previne o comportamento padrão de recarregamento do <a>, mantendo a SPA." },
        { q: "O hook useParams retorna:", opts: ["O histórico de navegação.", "Um objeto com os parâmetros da URL.", "A URL atual como string.", "O componente da rota atual."], ans: 1, expl: "useParams retorna os parâmetros dinâmicos da rota, como { id: '5' } para /usuarios/5." },
        { q: "Para navegar de forma programática (após login, por exemplo), qual hook usar?", opts: ["useState", "useEffect", "useNavigate", "useParams"], ans: 2, expl: "useNavigate retorna uma função que permite redirecionar o usuário para outra rota via JavaScript." },
        { q: "Como tratar uma rota que não existe (404)?", opts: ["Criar uma rota com path=\"*\".", "Usar um if externo.", "Não é possível no React.", "Criar um componente ErrorBoundary."], ans: 0, expl: "A rota com path=\"*\" é um curinga que captura qualquer URL não mapeada, exibindo a página 404." },
        { q: "Na v6 do React Router, qual prop define o componente renderizado por uma rota?", opts: ["component", "element", "render", "children"], ans: 1, expl: "Na v6, element substitui component: <Route path=\"/\" element={<Home />} />." },
        { q: "Qual a diferença entre <a> e <Link>?", opts: ["<a> é HTML nativo e recarrega a página; <Link> do React Router não recarrega.", "Não há diferença.", "<Link> é mais rápido.", "<a> não funciona no React."], ans: 0, expl: "<a> faz navegação HTTP normal (recarrega). <Link> intercepta o clique e troca o conteúdo via JavaScript." },
        { q: "Para definir uma rota com parâmetro dinâmico, a sintaxe correta é:", opts: ["/usuarios/:id", "/usuarios/{id}", "/usuarios?id=:id", "/usuarios(id)"], ans: 0, expl: "Dois-pontos seguidos de um nome (:id) definem um parâmetro dinâmico na rota." },
        { q: "Onde todos os hooks do React Router (useParams, useNavigate) devem ser chamados?", opts: ["Em qualquer lugar.", "Dentro de componentes que estejam dentro de BrowserRouter.", "Apenas no componente App.", "Apenas em páginas."], ans: 1, expl: "Hooks do React Router dependem do contexto do BrowserRouter. Sem ele, eles lançam erro em runtime." }
      ]
    },
    {
      id: "react-context",
      title: "Context API",
      subtitle: "Compartilhando dados entre componentes sem prop drilling.",
      blocks: [
        { t: "h", h: "O problema do prop drilling" },
        { t: "p", p: "Quando um dado precisa passar por vários níveis de componentes (avô → pai → filho → neto), temos o prop drilling. Isso torna o código verboso e difícil de manter. A Context API resolve esse problema." },
        { t: "h", h: "Criando um contexto" },
        { t: "p", p: "Um contexto é criado com createContext. Ele retorna um objeto com Provider (para fornecer dados) e Consumer (para consumir dados). Provider é o mais usado." },
        { t: "code", c: String.raw`import { createContext, useContext, useState } from "react";

const TemaContext = createContext();`, lang: "jsx" },
        { t: "h", h: "Provider — fornecendo dados" },
        { t: "p", p: "O Provider envolve os componentes que precisam acessar o contexto. Ele recebe uma prop value com os dados que serão compartilhados." },
        { t: "code", c: String.raw`const App = () => {
  const [tema, setTema] = useState("claro");

  const alternarTema = () => {
    setTema((t) => (t === "claro" ? "escuro" : "claro"));
  };

  return (
    <TemaContext.Provider value={{ tema, alternarTema }}>
      <Cabecalho />
      <Conteudo />
    </TemaContext.Provider>
  );
};`, lang: "jsx" },
        { t: "h", h: "useContext — consumindo dados" },
        { t: "p", p: "O hook useContext recebe um contexto e retorna o valor do Provider mais próximo. Qualquer componente dentro do Provider pode acessar os dados." },
        { t: "code", c: String.raw`const Cabecalho = () => {
  const { tema, alternarTema } = useContext(TemaContext);

  return (
    <header style={{
      backgroundColor: tema === "escuro" ? "#333" : "#fff"
    }}>
      <button onClick={alternarTema}>Alternar Tema</button>
    </header>
  );
};`, lang: "jsx" },
        { t: "h", h: "Contexto com múltiplos valores" },
        { t: "p", p: "O value do Provider aceita qualquer tipo de dado: objetos, funções e até múltiplos contextos aninhados." },
        { t: "code", c: String.raw`const UsuarioContext = createContext();
const TemaContext = createContext();

const App = () => (
  <UsuarioContext.Provider value={usuario}>
    <TemaContext.Provider value={tema}>
      <MinhaApp />
    </TemaContext.Provider>
  </UsuarioContext.Provider>
);

// Dentro de qualquer componente filho:
const usuario = useContext(UsuarioContext);
const tema = useContext(TemaContext);`, lang: "jsx" },
        { t: "h", h: "Custom hook para contexto" },
        { t: "p", p: "Uma boa prática é criar um hook customizado que encapsula useContext. Isso centraliza o acesso e adiciona tratamento de erro." },
        { t: "code", c: String.raw`const useTema = () => {
  const contexto = useContext(TemaContext);
  if (!contexto) {
    throw new Error("useTema deve ser usado dentro de TemaProvider");
  }
  return contexto;
};

// Uso
const Cabecalho = () => {
  const { tema, alternarTema } = useTema();
  // ...
};`, lang: "jsx" },
        { t: "h", h: "Quando usar Context API?" },
        { t: "lst", items: [
          "Tema (dark/light) global da aplicação.",
          "Autenticação — dados do usuário logado.",
          "Idioma/localização.",
          "Qualquer dado que muitos componentes precisam e está distante na árvore."
        ]},
        { t: "note", p: "Context API não substitui o estado global para dados complexos. Para isso, considere Zustand, Jotai ou Redux. Context é ideal para dados simples e de baixa frequência de atualização." },
        { t: "warn", p: "Quando o value do Provider muda, TODOS os componentes que usam useContext re-renderizam. Para otimizar, divida contextos ou use memoização." }
      ],
      quiz: [
        { q: "O que a Context API resolve?", opts: ["Prop drilling — passar dados por vários níveis de componentes.", "Estilização de componentes.", "Requisições HTTP.", "Gerenciamento de rotas."], ans: 0, expl: "Context permite compartilhar dados entre componentes sem precisar passar props por intermediários desnecessários." },
        { q: "Como se cria um contexto no React?", opts: ["useState().", "createContext().", "useContext().", "new Context()."], ans: 1, expl: "createContext() retorna um objeto com Provider e Consumer. É o ponto de partida para usar contextos." },
        { q: "O que o Provider faz?", opts: ["Consome os dados do contexto.", "Fornece (disponibiliza) dados do contexto para componentes filhos.", "Cria o estado do componente.", "Define as rotas da aplicação."], ans: 1, expl: "Provider é o componente que envolve a árvore e define o valor que os componentes filhos podem acessar." },
        { q: "Como um componente acessa o valor de um contexto?", opts: ["Usando this.context.", "Usando o hook useContext(contexto).", "Usando props diretamente.", "Usando window.context."], ans: 1, expl: "useContext recebe o contexto criado com createContext e retorna o value do Provider mais próximo." },
        { q: "Para que serve o valor value no Provider?", opts: ["Definir a estilização do Provider.", "Passar dados e funções que os componentes filhos podem acessar.", "Definir a rota da aplicação.", "Configurar o tema do navegador."], ans: 1, expl: "Value é o objeto que contém todos os dados (e funções) que os componentes dentro do Provider podem consumir." },
        { q: "Quando o Provider muda de value, o que acontece?", opts: ["Nada.", "Todos os componentes que usam useContext re-renderizam.", "Apenas o componente que mudou re-renderiza.", "A aplicação inteira recarrega."], ans: 1, expl: "Mudanças no value causam re-renderização em todos os consumidores do contexto — por isso é bom dividir contextos." },
        { q: "Qual é a boa prática ao expor um contexto?", opts: ["Retornar useContext diretamente.", "Criar um custom hook (ex: useTema) que encapsula useContext.", "Exportar o Provider globalmente.", "Usar window para acessar."], ans: 1, expl: "Um custom hook centraliza o acesso, adiciona validação e melhora a experiência de uso do contexto." },
        { q: "Context API substitui completamente o Redux?", opts: ["Sim, para todos os casos.", "Não — Context é ideal para dados simples; Redux/Zustand para estado complexo.", "Context é mais rápido que Redux sempre.", "Redux foi removido do React."], ans: 1, expl: "Context é leve e perfeito para temas, autenticação e dados simples. Para estado complexo com muitas atualizações, bibliotecas como Zustand são mais eficientes." },
        { q: "Para que serve um custom hook que usa useContext?", opts: ["Para esconder o contexto.", "Para adicionar tratamento de erro e centralizar o acesso.", "Para criar novos contextos.", "Para evitar o uso de hooks."], ans: 1, expl: "O custom hook valida se o contexto está sendo usado corretamente (dentro do Provider) e centraliza o acesso." },
        { q: "Um dado que muda a cada segundo é adequado para Context API?", opts: ["Sim, perfeito.", "Não — atualizações muito frequentes causam re-renderizações desnecessárias em todos os consumidores.", "Depende do navegador.", "Apenas com Redux."], ans: 1, expl: "Context re-renderiza todos os consumidores a cada mudança. Para dados de alta frequência, use estado local ou uma biblioteca de estado." }
      ]
    },
    {
      id: "react-hooks",
      title: "Custom Hooks",
      subtitle: "Reutilizando lógica entre componentes de forma limpa.",
      blocks: [
        { t: "h", h: "O que são Custom Hooks?" },
        { t: "p", p: "Custom Hooks são funções JavaScript comecadas com 'use' que encapsulam lógica reutilizável com hooks do React. Eles permitem extrair lógica complexa de componentes e compartilhá-la entre vários deles." },
        { t: "code", c: String.raw`// useFetch.js
import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [dados, setDados] = useState(null);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    setCarregando(true);
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("Erro na requisição");
        return res.json();
      })
      .then((dados) => {
        setDados(dados);
        setCarregando(false);
      })
      .catch((err) => {
        setErro(err.message);
        setCarregando(false);
      });
  }, [url]);

  return { dados, carregando, erro };
};

export default useFetch;`, lang: "jsx" },
        { t: "h", h: "Usando o custom hook" },
        { t: "p", p: "Um custom hook se comporta como qualquer outro hook: é chamado dentro de um componente e retorna dados ou funções." },
        { t: "code", c: String.raw`const Usuarios = () => {
  const { dados, carregando, erro } = useFetch("/api/usuarios");

  if (carregando) return <p>Carregando...</p>;
  if (erro) return <p>Erro: {erro}</p>;

  return (
    <ul>
      {dados.map((u) => (
        <li key={u.id}>{u.nome}</li>
      ))}
    </ul>
  );
};`, lang: "jsx" },
        { t: "h", h: "useLocalStorage" },
        { t: "p", p: "Um hook que sincroniza o estado com o localStorage do navegador. Permite persistir dados entre recarregamentos da página." },
        { t: "code", c: String.raw`import { useState } from "react";

const useLocalStorage = (chave, valorInicial) => {
  const [valor, setValor] = useState(() => {
    const salvo = localStorage.getItem(chave);
    return salvo ? JSON.parse(salvo) : valorInicial;
  });

  const setValorPersistido = (novoValor) => {
    setValor(novoValor);
    localStorage.setItem(chave, JSON.stringify(novoValor));
  };

  return [valor, setValorPersistido];
};

// Uso
const [tema, setTema] = useLocalStorage("tema", "claro");`, lang: "jsx" },
        { t: "h", h: "Regras dos Hooks" },
        { t: "p", p: "Hooks têm regras estritas que devem ser seguidas para funcionar corretamente. O React usa a ordem dos hooks para associá-los ao componente." },
        { t: "lst", items: [
          "Chame hooks apenas no nível superior — nunca dentro de loops, condicionais ou funções internas.",
          "Chame hooks apenas em componentes funcionais ou em outros custom hooks.",
          "O nome do custom hook DEVE começar com 'use' (ex: useFetch, useLocalStorage).",
          "Nunca chame hooks de forma condicional — isso quebra a ordem de associação."
        ]},
        { t: "code", c: String.raw`// CORRETO
const Componente = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState("");
  // ...
};

// ERRADO — hook dentro de condicional
const Componente = () => {
  if (condicao) {
    const [a, setA] = useState(0); // NUNCA faça isso!
  }
};`, lang: "jsx" },
        { t: "h", h: "Compondo múltiplos custom hooks" },
        { t: "p", p: "Custom hooks podem ser compostos — um hook pode chamar outros hooks. Isso permite construir abstrações complexas a partir de partes simples." },
        { t: "code", c: String.raw`const useUsuario = (id) => {
  const { dados, carregando, erro } = useFetch(\`/api/usuarios/\${id}\`);
  const [favorito, setFavorito] = useLocalStorage(\`fav-\${id}\`, false);

  return { usuario: dados, carregando, erro, favorito, setFavorito };
};

// Uso limpo
const Perfil = ({ id }) => {
  const { usuario, carregando, favorito, setFavorito } = useUsuario(id);
  // ...
};`, lang: "jsx" },
        { t: "h", h: "Dica: useDebugValue" },
        { t: "p", p: "O hook useDebugValue adiciona uma label ao seu custom hook, facilitando a depuração no React DevTools." },
        { t: "code", c: String.raw`import { useDebugValue } from "react";

const useOnline = () => {
  const [online, setOnline] = useState(navigator.onLine);

  useDebugValue(online ? "🟢 Online" : "🔴 Offline");

  useEffect(() => {
    const handler = () => setOnline(navigator.onLine);
    window.addEventListener("online", handler);
    window.addEventListener("offline", handler);
    return () => {
      window.removeEventListener("online", handler);
      window.removeEventListener("offline", handler);
    };
  }, []);

  return online;
};`, lang: "jsx" },
        { t: "note", p: "Custom Hooks não precisam retornar JSX — eles retornam dados, funções ou combinações. Pense neles como utilitários que encapsulam lógica complexa." },
        { t: "warn", p: "O lint do React (eslint-plugin-react-hooks) ajuda a garantir que as regras dos hooks sejam seguidas. Configure-o no seu projeto." }
      ],
      quiz: [
        { q: "O que é um Custom Hook no React?", opts: ["Um componente especial.", "Uma função JavaScript comecada com 'use' que encapsula lógica reutilizável com hooks.", "Um hook nativo do React.", "Uma classe com métodos de ciclo de vida."], ans: 1, expl: "Custom hooks são funções que encapsulam lógica com hooks (useState, useEffect) para reutilizar entre componentes." },
        { q: "Qual regra define o nome de um custom hook?", opts: ["Deve terminar com 'Hook'.", "Deve começar com 'use'.", "Deve ter o mesmo nome do componente.", "Não há regra de nome."], ans: 1, expl: "A convenção é começar com 'use' (useFetch, useLocalStorage). Isso permite que o lint verifique as regras dos hooks." },
        { q: "Hooks podem ser chamados dentro de um if/condicional?", opts: ["Sim, sempre.", "Não — hooks devem ser chamados na mesma ordem em cada renderização.", "Apenas useEffect.", "Apenas custom hooks."], ans: 1, expl: "A ordem dos hooks é fixa. Condicionais mudam a ordem, causando bugs difíceis de rastrear." },
        { q: "O que o useFetch retorna?", opts: ["Uma Promise.", "Um objeto com dados, carregando e erro.", "Uma string.", "Um componente JSX."], ans: 1, expl: "useFetch retorna { dados, carregando, erro }, encapsulando toda a lógica de requisição HTTP." },
        { q: "Custom hooks podem chamar outros custom hooks?", opts: ["Não, é proibido.", "Sim — hooks podem ser compostos entre si.", "Apenas se estiverem no mesmo arquivo.", "Apenas se exportados corretamente."], ans: 1, expl: "Hooks são compostos: um hook pode chamar outros hooks, construindo abstrações complexas a partir de partes simples." },
        { q: "Para que serve o useDebugValue?", opts: ["Para adicionar um label ao custom hook no React DevTools.", "Para depurar erros no console.", "Para testar hooks automaticamente.", "Para criar novos hooks."], ans: 0, expl: "useDebugValue adiciona uma descrição ao hook, aparecendo no React DevTools e facilitando a depuração." },
        { q: "Um custom hook precisa retornar JSX?", opts: ["Sim, sempre.", "Não — retorna dados, funções ou combinações.", "Apenas se for um componente.", "Depende do caso de uso."], ans: 1, expl: "Custom hooks retornam dados e funções. Eles não renderizam JSX — isso é responsabilidade do componente que os consome." },
        { q: "Por que o eslint-plugin-react-hooks é importante?", opts: ["Para estilizar o código.", "Para garantir que as regras dos hooks sejam seguidas automaticamente.", "Para gerar documentação.", "Para criar testes."], ans: 1, expl: "O plugin detecta violações das regras dos hooks (chamadas condicionais, ordem errada) automaticamente no editor." },
        { q: "Qual a principal vantagem de custom hooks sobre funções utilitárias comuns?", opts: ["São mais rápidos.", "Podem usar hooks do React (useState, useEffect) internamente.", "Retornam JSX automaticamente.", "São chamados apenas uma vez."], ans: 1, expl: "Funções comuns não podem chamar hooks. Custom hooks encapsulam lógica que depende de estado, efeitos e outros hooks." },
        { q: "O hook useLocalStorage sincroniza o estado com:", opts: ["O banco de dados.", "O localStorage do navegador.", "O servidor.", "O sessionStorage do servidor."], ans: 1, expl: "useLocalStorage persiste o valor no localStorage do navegador, mantendo os dados entre recarregamentos da página." }
      ]
    }
  ]
};