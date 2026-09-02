/* Curso: Node.JS */
window.COURSES = window.COURSES || {};
window.COURSES.node = {
  name: "Node.JS",
  topics: [
    {
      id: "node-intro",
      title: "Introdução ao Node.JS",
      subtitle: "JavaScript fora do navegador — assíncrono, rápido e escalável.",
      blocks: [
        { t: "h", h: "O que é Node.js?" },
        { t: "p", p: "Node.js é um ambiente de execução JavaScript construído sobre o motor V8 do Chrome. Ele permite rodar JavaScript no servidor, criando aplicações web, APIs, ferramentas de linha de comando e muito mais — tudo com a mesma linguagem do front-end." },
        { t: "h", h: "O motor V8 e por que isso importa" },
        { t: "p", p: "O V8 compila o JavaScript diretamente em código de máquina (Just-In-Time), o que torna a execução extremamente rápido. Node pegou esse motor e acrescentou APIs de sistema operacional — acesso a arquivos, rede, processos — que o navegador não oferece." },
        { t: "h", h: "Event Loop e modelo não-bloqueante" },
        { t: "p", p: "O Event Loop é o coração do Node. Em vez de bloquear o thread enquanto espera uma resposta (como leitura de arquivo ou consulta ao banco), o Node registra a operação e continua executando outro código. Quando a operação termina, uma callback é chamada. Isso permite lidar com milhares de conexões simultâneas com um único thread." },
        { t: "code", c: String.raw`const http = require("node:http");

const server = http.createServer((req, res) => {
  res.end("Olá do Node.js!");
});

server.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});`, lang: "javascript" },
        { t: "h", h: "Quando usar Node.js?" },
        { t: "lst", items: [
          "APIs REST e backends de tempo real (chat, notificações).",
          "Microsserviços e micro-frontends.",
          "Ferramentas de build e automação (Webpack, Vite).",
          "Scripts e automações no terminal.",
          "Streaming de dados e processamento em background."
        ]},
        { t: "h", h: "npm e node_modules" },
        { t: "p", p: "O npm (Node Package Manager) é o gerenciador de pacotes padrão. Ele baixa bibliotecas de terceiros e as organiza na pasta node_modules, enquanto o package.json registra o nome, versão e dependências do projeto." },
        { t: "code", c: String.raw`// Inicializa um novo projeto
npm init -y

// Instala uma dependência
npm install express

// Instala uma devDependency
npm install --save-dev nodemon`, lang: "javascript" },
        { t: "note", p: "O node_modules é gerado automaticamente e não deve ser commitado no Git. Adicione-o ao .gitignore — ele é restaurado com npm install." },
        { t: "warn", p: "Nunca execute código de confiança duvidosa com Node.js. Diferente do navegador, o Node tem acesso total ao sistema de arquivos e à rede. Execute apenas pacotes que você conhece." }
      ],
      quiz: [
        { q: "Node.js é construído sobre qual motor JavaScript?", opts: ["SpiderMonkey", "V8", "Chakra", "JavaScriptCore"], ans: 1, expl: "O V8 é o motor desenvolvido pelo Google, o mesmo do Chrome, e é a base do Node.js." },
        { q: "O Event Loop do Node.js permite:", opts: ["Bloquear o thread até uma resposta chegar.", "Executar várias operações sem bloquear o thread principal.", "Rodar JavaScript apenas no navegador.", "Substituir o banco de dados."], ans: 1, expl: "O modelo não-bloqueante é a grande vantagem do Node: operações lentas (rede, disco) são delegadas e o thread continua livre para processar outras requisições." },
        { q: "Qual comando instala um pacote e o registra no package.json?", opts: ["npm run", "npm install", "npm start", "npm create"], ans: 1, expl: "npm install <pacote> baixa a biblioteca, a coloca em node_modules e a registra como dependência no package.json." },
        { q: "O que a pasta node_modules contém?", opts: ["O código-fonte do seu projeto.", "As dependências instaladas pelo npm.", "Os logs do servidor.", "Os arquivos de configuração do sistema."], ans: 1, expl: "O node_modules armazena todas as bibliotecas de terceiros que o projeto depende, baixadas automaticamente pelo npm." },
        { q: "O que npm significa?", opts: ["Node Package Manager", "New Project Manager", "Node Process Module", "Network Package Manager"], ans: 0, expl: "npm é o Node Package Manager — o gerenciador de pacotes oficial do Node.js." },
        { q: "Qual é a principal diferença entre dependência e devDependency?", opts: ["devDependencies são mais rápidas.", "devDependencies só são usadas em desenvolvimento, não em produção.", "devDependencies são obrigatórias.", "Não há diferença."], ans: 1, expl: "devDependencies (como nodemon, jest) só são necessárias durante o desenvolvimento. Dependências normais são usadas em produção." },
        { q: "O que acontece quando um arquivo é lido com a forma bloqueante no Node?", opts: ["O Event Loop é pausado e nada mais é processado até a leitura terminar.", "O servidor cai automaticamente.", "Nada, o Node não tem operações bloqueantes.", "Uma exceção é lançada."], ans: 0, expl: "A forma bloqueante (readFileSync) congela o thread principal — nenhum outro request é atendido até a operação de disco terminar." },
        { q: "Node.js roda JavaScript:", opts: ["Apenas no navegador.", "No servidor, fora do navegador.", "Apenas em mobile.", "Apenas em desktop."], ans: 1, expl: "Node.js é um runtime de servidor: executa JavaScript no lado do servidor, com acesso ao sistema de arquivos e à rede." },
        { q: "Para que serve o npm init?", opts: ["Instalar dependências.", "Criar o package.json inicial do projeto.", "Iniciar o servidor.", "Criar a pasta node_modules."], ans: 1, expl: "npm init (ou npm init -y para aceitar padrões) gera o package.json que descreve o projeto e suas dependências." },
        { q: "Qual das opções abaixo é um uso típico de Node.js?", opts: ["Compilar Java para binário.", "Criar uma API REST com Express.", "Gerar relatórios em Excel.", "Desenvolver jogos em 3D."], ans: 1, expl: "APIs REST é o uso mais clássico do Node — ele é ideal para servidores HTTP de alta performance e baixa latência." }
      ]
    },
    {
      id: "node-modulos",
      title: "Módulos e npm",
      subtitle: "Organizando código com require/exports e ES Modules.",
      blocks: [
        { t: "h", h: "Sistema de módulos CommonJS" },
        { t: "p", p: "No Node.js, cada arquivo é um módulo. Você exporta valores com module.exports e importa com require. É o sistema original do Node, usado por padrão até hoje em muitos projetos." },
        { t: "code", c: String.raw`// utils.js
function somar(a, b) {
  return a + b;
}

function subtrair(a, b) {
  return a - b;
}

module.exports = { somar, subtrair };`, lang: "javascript" },
        { t: "code", c: String.raw`// app.js
const { somar, subtrair } = require("./utils");

console.log(somar(10, 5));   // 15
console.log(subtrair(10, 5)); // 5`, lang: "javascript" },
        { t: "h", h: "ES Modules (import/export)" },
        { t: "p", p: "A partir do Node 14, você pode usar a sintaxe de ES Modules, a mesma do navegador. Basta adicionar \"type\": \"module\" no package.json ou usar a extensão .mjs." },
        { t: "code", c: String.raw`// utils.mjs (ou package.json com "type": "module")
export function somar(a, b) {
  return a + b;
}

export const PI = 3.14159;`, lang: "javascript" },
        { t: "code", c: String.raw`// app.mjs
import { somar, PI } from "./utils.mjs";

console.log(somar(10, 5)); // 15
console.log(PI);           // 3.14159`, lang: "javascript" },
        { t: "h", h: "package.json: o manifesto do projeto" },
        { t: "p", p: "O package.json guarda todas as informações do projeto: nome, versão, script de execução, dependências e configurações diversas. Ele é o ponto de partida de qualquer projeto Node." },
        { t: "code", c: String.raw`{
  "name": "meu-projeto",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "start": "node app.js",
    "dev": "nodemon app.js",
    "test": "jest"
  },
  "dependencies": {
    "express": "^4.18.0"
  },
  "devDependencies": {
    "nodemon": "^3.0.0",
    "jest": "^29.0.0"
  }
}`, lang: "javascript" },
        { t: "h", h: "npm scripts" },
        { t: "p", p: "Os scripts definidos no package.json são executados com npm run <nome>. O npm start e npm test são exceções — podem ser chamados direto, sem run." },
        { t: "code", c: String.raw`// Executa o script "dev" definido no package.json
npm run dev

// Equivalente a:
npm start`, lang: "javascript" },
        { t: "note", p: "Use require() no padrão CommonJS e import/export em ES Modules. Não misture os dois no mesmo arquivo — isso gera erros." },
        { t: "warn", p: "O npm install sem --save (ou --save-dev) já salva no package.json por padrão desde o npm 5. Não é mais necessário passar esses flags, mas é bom saber que existem." }
      ],
      quiz: [
        { q: "No CommonJS, como exportamos algo de um módulo?", opts: ["export default", "module.exports", "window.export", "global.export"], ans: 1, expl: "module.exports é o objeto onde o CommonJS coloca as exportações do módulo." },
        { q: "Para usar ES Modules no Node, qual campo é necessário no package.json?", opts: ["\"module\": true", "\"type\": \"module\"", "\"esm\": true", "\"import\": true"], ans: 1, expl: "\"type\": \"module\" informa ao Node que os arquivos .js devem ser tratados como ES Modules." },
        { q: "O que o comando npm init -y faz?", opts: ["Instala todas as dependências.", "Cria o package.json com valores padrão sem perguntar nada.", "Inicia o servidor.", "Cria a pasta node_modules."], ans: 1, expl: "O -y aceita todos os padrões automaticamente, gerando o package.json imediatamente." },
        { q: "No script \"start\": \"node app.js\", qual comando roda o script?", opts: ["npm run start", "npm start", "node start", "app.js"], ans: 1, expl: "start e test são scripts especiais: npm start funciona sem o run. Para outros scripts, é necessário npm run <nome>." },
        { q: "require() é usado em qual sistema de módulos?", opts: ["ES Modules", "CommonJS", "AMD", "UMD"], ans: 1, expl: "require() é a forma de importar módulos no padrão CommonJS, o sistema original do Node.js." },
        { q: "O que acontece ao misturar require() e import no mesmo arquivo?", opts: ["Funciona normalmente.", "Gera erro de sintaxe ou execução.", "O Node converte automaticamente.", "Apenas o import é executado."], ans: 1, expl: "Misturar CommonJS e ES Modules no mesmo arquivo causa erros — escolha um padrão por projeto." },
        { q: "Uma devDependency é instalada com:", opts: ["npm install --save-dev <pacote>", "npm install --global <pacote>", "npm run <pacote>", "npm create <pacote>"], ans: 0, expl: "O flag --save-dev (ou -D) registra a dependência como devDependencies no package.json." },
        { q: "Qual é a diferença entre import e require?", opts: ["Não há diferença.", "import é estático e analisado em tempo de compilação; require é dinâmico e chamado em runtime.", "import só funciona no navegador.", "require é mais moderno."], ans: 1, expl: "import é estático (pode ser analisado sem executar) e suporta tree-shaking; require é dinâmico e pode ser chamado condicionalmente." },
        { q: "O que o módulo \"fs\" do Node.js permite fazer?", opts: ["Criar servidores HTTP.", "Ler e escrever no sistema de arquivos.", "Gerenciar pacotes npm.", "Executar código em paralelo."], ans: 1, expl: "O módulo fs (File System) fornece funções para ler, escrever e manipular arquivos e diretórios no disco." },
        { q: "Na sintaxe import { nome } from \"./arquivo\", o que o \"{}\" significa?", opts: ["Importa o módulo inteiro.", "Importa apenas exportações nomeadas específicas.", "Cria um novo objeto.", "Define variáveis globais."], ans: 1, expl: "As chaves desestruturam as exportações nomeadas: import { somar } pega apenas a função somar do módulo." }
      ]
    },
    {
      id: "node-fs",
      title: "Sistema de Arquivos (fs)",
      label: "fs",
      subtitle: "Lendo, escrevendo e gerenciando arquivos com Node.js.",
      blocks: [
        { t: "h", h: "Módulo fs: leitura e escrita" },
        { t: "p", p: "O módulo fs (File System) permite interagir com o sistema de arquivos. Existem duas formas: a síncrona (bloqueia o thread) e a assíncrona (usa callbacks ou Promises). Prefira sempre a assíncrona em servidores." },
        { t: "code", c: String.raw`import fs from "node:fs";

// Leitura assíncrona com callback
fs.readFile("dados.txt", "utf8", (err, conteudo) => {
  if (err) {
    console.error("Erro ao ler:", err.message);
    return;
  }
  console.log(conteudo);
});

// Leitura síncrona (bloqueia o thread)
const texto = fs.readFileSync("dados.txt", "utf8");
console.log(texto);`, lang: "javascript" },
        { t: "h", h: "Escrevendo arquivos" },
        { t: "code", c: String.raw`import fs from "node:fs";

const dados = JSON.stringify({ nome: "Ana", idade: 25 }, null, 2);

// writeFileSync: bloqueia até terminar
fs.writeFileSync("usuario.json", dados, "utf8");

// writeFile assíncrono
fs.writeFile("saida.txt", "Olá, arquivo!", "utf8", (err) => {
  if (err) throw err;
  console.log("Arquivo criado com sucesso!");
});`, lang: "javascript" },
        { t: "h", h: "Streams: processando arquivos grandes" },
        { t: "p", p: "Para arquivos grandes, ler tudo de uma vez consome muita memória. Streams processam os dados em pedaços (chunks), permitindo trabalhar com arquivos de gigabytes sem estourar a RAM." },
        { t: "code", c: String.raw`import fs from "node:fs";

const stream = fs.createReadStream("arquivo-grande.txt", {
  encoding: "utf8",
  highWaterMark: 1024  // chunks de 1KB
});

stream.on("data", (chunk) => {
console.log("Recebi " + chunk.length + " caracteres");
});

stream.on("end", () => {
  console.log("Leitura finalizada!");
});`, lang: "javascript" },
        { t: "h", h: "Promises com promisify" },
        { t: "p", p: "A maioria das funções do fs aceita callbacks. Para convertê-las em Promises (usando async/await), utilize o util.promisify — ou prefira fs/promises, que já expõe versões com Promise." },
        { t: "code", c: String.raw`// Opção 1: módulo fs/promises (recomendado)
import fs from "node:fs/promises";

async function lerArquivo(caminho) {
  const conteudo = await fs.readFile(caminho, "utf8");
  return conteudo;
}

// Opção 2: promisify
import { readFile } from "node:fs";
import { promisify } from "node:util";

const readFileAsync = promisify(readFile);
const texto = await readFileAsync("dados.txt", "utf8");`, lang: "javascript" },
        { t: "h", h: "Módulo path: caminhos de forma segura" },
        { t: "p", p: "Nunca junte strings para formar caminhos — o separador muda entre Windows e Linux. Use o módulo path, que resolve isso automaticamente." },
        { t: "code", c: String.raw`import path from "node:path";

const caminho = path.join("src", "dados", "usuarios.json");
console.log(caminho); // src/dados/usuarios.json (ou src\\dados\\usuarios.json no Windows)

const absoluto = path.resolve("src", "app.js");
const extensao = path.extname("arquivo.txt");  // ".txt"
const nome = path.basename("/home/user/app.js"); // "app.js"`, lang: "javascript" },
        { t: "note", p: "Prefira fs/promises com async/await ao invés de callbacks. O código fica mais legível e o tratamento de erros usa try/catch padrão." },
        { t: "warn", p: "readFileSync e writeFileSync bloqueiam o thread inteiro. Em um servidor atendendo milhares de requests, isso é desastroso — use sempre as versões assíncronas." }
      ],
      quiz: [
        { q: "Qual a diferença principal entre readFile e readFileSync?", opts: ["readFile é mais rápido.", "readFile é assíncrono; readFileSync bloqueia o thread.", "readFileSync só lê binários.", "Não há diferença."], ans: 1, expl: "readFile usa callback/Promise e não bloqueia; readFileSync congela a execução até a leitura terminar." },
        { q: "O módulo path.resolve() serve para:", opts: ["Deletar arquivos.", "Criar caminhos absolutos de forma segura.", "Ler conteúdo de arquivos.", "Comprimir arquivos."], ans: 1, expl: "path.resolve() monta caminhos absolutos que funcionam corretamente tanto no Windows quanto no Linux." },
        { t: "h", h: "" },
        { q: "Streams são ideais quando:", opts: ["O arquivo é pequeno (menos de 1KB).", "O arquivo é grande e não deve ser carregado inteiro na memória.", "O arquivo é somente leitura.", "O arquivo está em nuvem."], ans: 1, expl: "Streams processam dados em pedaços, evitando carregar arquivos gigantes na memória de uma vez." },
        { q: "Como o Node lida com erros em operações assíncronas com callback?", opts: ["O erro é ignorado.", "O primeiro argumento do callback é o objeto de erro (err).", "O programa encerra automaticamente.", "O erro é retornado como string."], ans: 1, expl: "No padrão error-first callback, o primeiro parâmetro é sempre o erro (ou null se tudo ocorrer bem)." },
        { q: "Qual a forma recomendada de usar fs com async/await?", opts: ["fs.readFile com callback", "import fs from 'node:fs/promises'", "fs.readFileSync", "require('fs').read"], ans: 1, expl: "fs/promises já retorna Promises nativamente, permitindo usar async/await sem wrappers extras." },
        { q: "O que path.join('src', 'dados', 'arquivo.json') retorna?", opts: ["src/dados/arquivo.json", "src dados arquivo.json", "src+dados+arquivo.json", "src\\dados\\arquivo.json no Windows e src/dados/arquivo.json no Linux."], ans: 3, expl: "path.join monta o caminho usando o separador correto do sistema operacional atual." },
        { q: "Qual método verifica se um arquivo ou diretório existe?", opts: ["fs.exists()", "fs.existsSync() ou fs.access()", "fs.check()", "fs.stat()"], ans: 1, expl: "fs.existsSync() retorna true/false; fs.access() é a versão assíncrona recomendada (existsSync é síncrona)." },
        { q: "Ao usar writeFileSync, o que acontece se o arquivo já existir?", opts: ["Lança erro.", "O conteúdo antigo é apagado e substituído pelo novo.", "O novo conteúdo é adicionado ao final.", "Nada acontece."], ans: 1, expl: "writeFileSync sobrescreve completamente o conteúdo do arquivo. Para adicionar ao final, use a flag 'a'." },
        { q: "O que a flag 'a' no writeFile signfica?", opts: ["Append (acrescenta ao final do arquivo).", "Append (cria backup automático).", "Append (abre no modo leitura).", "Append (apaga o conteúdo anterior)."], ans: 0, expl: "A flag 'a' (append) faz com que o conteúdo seja adicionado ao final do arquivo existente, sem apagar o que já tem." },
        { q: "O módulo path.basename('/home/user/app.js') retorna:", opts: ["/home/user/", "app.js", "app", ".js"], ans: 1, expl: "basename extrai o nome do arquivo (incluindo extensão) de um caminho completo." }
      ]
    },
    {
      id: "node-http",
      title: "HTTP Básico",
      subtitle: "Criando servidores web com o módulo http nativo.",
      blocks: [
        { t: "h", h: "O módulo http nativo" },
        { t: "p", p: "O Node.js vem com um módulo http integrado que permite criar servidores web sem nenhuma biblioteca externa. Ele expõe uma API de baixo nível para trabalhar com requisições e respostas HTTP." },
        { t: "code", c: String.raw`import http from "node:http";

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Olá, mundo!");
});

server.listen(3000, () => {
  console.log("Servidor ouvindo na porta 3000");
});`, lang: "javascript" },
        { t: "h", h: "Entendendo req e res" },
        { t: "p", p: "O objeto req (IncomingMessage) contém informações sobre a requisição: URL, método HTTP, headers. O objeto res (ServerResponse) é usado para enviar a resposta de volta ao cliente." },
        { t: "code", c: String.raw`const server = http.createServer((req, res) => {
  console.log("Método:", req.method);
  console.log("URL:", req.url);
  console.log("Headers:", req.headers);

  res.writeHead(200, {
    "Content-Type": "application/json",
    "X-Custom-Header": "valor"
  });

  res.end(JSON.stringify({ status: "ok" }));
});`, lang: "javascript" },
        { t: "h", h: "Status codes e headers" },
        { t: "p", p: "Cada resposta HTTP precisa de um status code que indica o resultado da operação. Headers adicionam metadados como tipo de conteúdo e políticas de cache." },
        { t: "lst", items: [
          "200: OK — requisição bem-sucedida.",
          "201: Created — recurso criado com sucesso.",
          "400: Bad Request — dados inválidos.",
          "404: Not Found — recurso não encontrado.",
          "500: Internal Server Error — erro interno no servidor."
        ]},
        { t: "h", h: "Lendo o body da requisição" },
        { t: "p", p: "O body da requisição (POST, PUT) chega em pedaços. É necessário acumular os chunks antes de processar." },
        { t: "code", c: String.raw`const server = http.createServer((req, res) => {
  if (req.method === "POST") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      const dados = JSON.parse(body);
      console.log("Recebido:", dados);

      res.writeHead(201, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Recebido", dados }));
    });
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Não encontrado" }));
  }
});`, lang: "javascript" },
        { t: "note", p: "O módulo http nativo é ótimo para aprender e para protótipos rápidos, mas na prática quase todo mundo usa Express.js, que abstraia muito dessa verbose." },
        { t: "warn", p: "Nunca esqueça de chamar res.end() em todas as rotas — senão o cliente fica esperando a resposta para sempre e a conexão trava." }
      ],
      quiz: [
        { q: "Qual método cria um servidor HTTP no Node.js?", opts: ["http.listen()", "http.createServer()", "http.start()", "http.server()"], ans: 1, expl: "http.createServer() recebe uma função callback e retorna um servidor que pode ser iniciado com .listen()." },
        { q: "O objeto req contém informações sobre:", opts: ["A resposta ao cliente.", "A requisição recebida do cliente.", "O banco de dados.", "O sistema de arquivos."], ans: 1, expl: "req (IncomingMessage) representa a requisição HTTP: método, URL, headers e body." },
        { q: "Para enviar JSON na resposta, qual Content-Type devemos usar?", opts: ["text/plain", "application/json", "text/html", "application/xml"], ans: 1, expl: "application/json indica ao cliente que o corpo da resposta contém dados em formato JSON." },
        { q: "O que o status 404 indica?", opts: ["Sucesso.", "Recurso não encontrado.", "Erro interno do servidor.", "Dados inválidos."], ans: 1, expl: "404 Not Found é retornado quando o servidor não encontra o recurso solicitado pelo cliente." },
        { q: "Como ler o body de um POST no módulo http?", opts: ["req.body automaticamente.", "Escutando eventos 'data' e 'end' no req.", "req.params.body.", "http.readBody(req)."], ans: 1, expl: "O body chega em chunks: você escuta 'data' para acumular e 'end' para saber quando terminou." },
        { q: "O que acontece se não chamar res.end()?", opts: ["A resposta é enviada automaticamente.", "O cliente fica esperando e a conexão trava.", "O servidor reinicia.", "O body é enviado vazio."], ans: 1, expl: "Sem res.end(), o servidor nunca finaliza a resposta e o cliente trava aguardando dados." },
        { q: "O método req.method retorna:", opts: ["A URL da requisição.", "O método HTTP (GET, POST, etc.).", "Os headers da requisição.", "O corpo da requisição."], ans: 1, expl: "req.method retorna o verbo HTTP usado na requisição: GET, POST, PUT, DELETE, etc." },
        { q: "res.writeHead(200, headers) serve para:", opts: ["Definir o body da resposta.", "Enviar headers e status code da resposta.", "Fechar a conexão.", "Ler headers da requisição."], ans: 1, expl: "writeHead configura o status code e os headers que serão enviados na resposta." },
        { q: "Qual é a porta padrão que o navegador acessa quando você digita http://localhost?", opts: ["80", "3000", "8080", "443"], ans: 0, expl: "HTTP usa a porta 80 por padrão; HTTPS usa 443. Portas como 3000 e 8080 são comuns em desenvolvimento." },
        { q: "Para escutar em todas as interfaces de rede (0.0.0.0), usamos:", opts: ["server.listen(3000, '0.0.0.0')", "server.listen(0.0.0.0:3000)", "server.bind(3000)", "server.connect(3000)"], ans: 0, expl: "server.listen(porta, host) aceita o IP '0.0.0.0' para escutar em todas as interfaces de rede da máquina." }
      ]
    },
    {
      id: "node-express",
      title: "Express.js",
      subtitle: "O framework mais popular para APIs web em Node.js.",
      blocks: [
        { t: "h", h: "O que é Express?" },
        { t: "p", p: "Express é um micro-framework minimalista para Node.js que simplifica drasticamente a criação de servidores HTTP e APIs. Ele fornece rotas, middlewares e convenções para organizar o código, sem a verbose do módulo http puro." },
        { t: "code", c: String.raw`import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Bem-vindo à API!");
});

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});`, lang: "javascript" },
        { t: "h", h: " Métodos HTTP: GET, POST, PUT, DELETE" },
        { t: "p", p: "O Express expõe métodos para cada verbo HTTP. Cada um aceita um path (rota) e uma função callback que recebe req e res." },
        { t: "code", c: String.raw`// GET: buscar dados
app.get("/usuarios", (req, res) => {
  res.json([{ id: 1, nome: "Ana" }]);
});

// POST: criar dados
app.post("/usuarios", (req, res) => {
  const novo = req.body;
  res.status(201).json(novo);
});

// PUT: atualizar dados
app.put("/usuarios/:id", (req, res) => {
  const { id } = req.params;
  res.json({ id, ...req.body });
});

// DELETE: remover dados
app.delete("/usuarios/:id", (req, res) => {
  res.status(204).send();
});`, lang: "javascript" },
        { t: "h", h: "req.params, req.query e req.body" },
        { t: "p", p: "O Express organiza os dados da requisição em propriedades convenientes: params são os parâmetros de rota, query são os parâmetros da URL (?chave=valor), e body é o corpo enviado no POST/PUT." },
        { t: "code", c: String.raw`// GET /usuarios/42?ativo=true
app.get("/usuarios/:id", (req, res) => {
  const { id } = req.params;     // "42"
  const { ativo } = req.query;   // "true"

  res.json({ id, ativo });
});`, lang: "javascript" },
        { t: "h", h: "res.json e res.send" },
        { t: "p", p: "res.json() serializa um objeto JavaScript para JSON e envia com o Content-Type correto. res.send() detecta automaticamente o tipo: strings viram HTML, objetos viram JSON, buffers viram binário." },
        { t: "code", c: String.raw`app.get("/status", (req, res) => {
  res.json({ status: "ok", uptime: process.uptime() });
});

app.get("/html", (req, res) => {
  res.send("<h1>Olá!</h1>");
});`, lang: "javascript" },
        { t: "h", h: "Middlewares: o conceito central do Express" },
        { t: "p", p: "Middlewares são funções que recebem req, res e next. Elas processam a requisição antes de chegar à rota final — para logging, autenticação, parsing de body, entre outros." },
        { t: "code", c: String.raw`// Middleware global: roda em todas as rotas
app.use(express.json());  // parseia JSON no body

// Middleware de rota específico
app.get("/admin", autenticar, (req, res) => {
  res.json({ message: "Área admin" });
});

function autenticar(req, res, next) {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ error: "Token ausente" });
  }
  next();  // passa para a próxima função
}`, lang: "javascript" },
        { t: "note", p: "express.json() é um middleware que faz parsing do body JSON. Sem ele, req.body será undefined em requisições POST/PUT com Content-Type application/json." },
        { t: "warn", p: "Esquecer de chamar next() em um middleware trava a requisição — o cliente nunca recebe resposta. Certifique-se de chamar next() ou enviar resposta (res.json/res.send) em todas as rotas." }
      ],
      quiz: [
        { q: "Para instalar o Express, usamos:", opts: ["npm install express", "npm create express", "npm init express", "npx express start"], ans: 0, expl: "npm install express baixa e instala o pacote, adicionando-o às dependências do projeto." },
        { q: "O middleware express.json() serve para:", opts: ["Servir arquivos estáticos.", "Fazer parse do body JSON nas requisições.", "Autenticar usuários.", "Conectar ao banco de dados."], ans: 1, expl: "express.json() parseia o body das requisições com Content-Type application/json, populando req.body." },
        { q: "req.params rota /usuarios/:id com id=5 retorna:", opts: ["{ id: 5 }", "{ id: '5' }", "5", "undefined"], ans: 1, expl: "Os params da URL sempre chegam como strings; é preciso converter para número quando necessário." },
        { q: "res.json() e res.send() são diferentes porque:", opts: ["res.json() só aceita strings.", "res.json() define Content-Type application/json; res.send() detecta automaticamente.", "res.send() não existe.", "São exatamente iguais."], ans: 1, expl: "res.json() força JSON e define o header correto; res.send() infere o tipo a partir do dado enviado." },
        { q: "Em Express, a ordem das rotas importa porque:", opts: ["Não importa.", "As rotas são avaliadas de cima para baixo; a primeira que bater é executada.", "O Express aleatoriza a ordem.", "Todas as rotas rodam sempre."], ans: 1, expl: "O Express percorre as rotas na ordem em que foram definidas; a primeira que casar com a URL é executada." },
        { q: "O que o método next() faz dentro de um middleware?", opts: ["Encerra a resposta.", "Passa a requisição para o próximo middleware ou rota.", "Reinicia o servidor.", "Deleta o body da requisição."], ans: 1, expl: "next() diz ao Express: terminei aqui, passe para a próxima função da fila." },
        { q: "Para ler query strings como ?page=2&limit=10, usamos:", opts: ["req.params", "req.query", "req.body", "req.url"], ans: 1, expl: "req.query contém os parâmetros da query string parsed em um objeto." },
        { q: "app.use() serve para:", opts: ["Criar apenas rotas GET.", "Registrar middlewares globais que rodam em todas as rotas.", "Fechar o servidor.", "Deletar rotas."], ans: 1, expl: "app.use() registra middlewares globais (ou de path) que executam antes de qualquer rota." },
        { q: "O status 204 significa:", opts: ["Erro interno.", "Requisição bem-sucedida, sem conteúdo na resposta.", "Recurso não encontrado.", "Redirecionamento."], ans: 1, expl: "204 No Content é usado quando a operação deu certo, mas não há dados para enviar (comum em DELETE)." },
        { q: "Para aceitar JSON no body de um POST, é obrigatório usar:", opts: ["app.use(express.json())", "app.use(express.urlencoded())", "body-parser manual", "app.parse()"], ans: 0, expl: "express.json() é o middleware que faz o parse do JSON e popula req.body; sem ele, req.body é undefined." }
      ]
    },
    {
      id: "node-rotas",
      title: "Rotas e Middleware",
      subtitle: "Organizando rotas com Router e middlewares reutilizáveis.",
      blocks: [
        { t: "h", h: "Router do Express" },
        { t: "p", p: "Conforme o projeto cresce, colocar todas as rotas no arquivo principal fica bagunçado. O Router do Express permite criar módulos de rotas separados e depois registrá-los no app principal." },
        { t: "code", c: String.raw`// routes/usuarios.js
import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.json({ message: "Lista de usuários" });
});

router.get("/:id", (req, res) => {
  res.json({ id: req.params.id });
});

export default router;`, lang: "javascript" },
        { t: "code", c: String.raw`// app.js
import express from "express";
import usuariosRouter from "./routes/usuarios.js";

const app = express();
app.use(express.json());

// Registra o router no path /usuarios
app.use("/usuarios", usuariosRouter);

app.listen(3000);`, lang: "javascript" },
        { t: "h", h: "Middlewares de rota" },
        { t: "p", p: "Middlewares podem ser aplicados a rotas específicas, roteando a lógica antes de atingir o handler final. É útil para autenticação, validação e permissões." },
        { t: "code", c: String.raw`// Middleware de autenticação
function verificarToken(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ error: "Não autenticado" });
  }
  // Aqui validar o token (veremos em JWT)
  next();
}

// Aplicado apenas a rotas específicas
router.get("/perfil", verificarToken, (req, res) => {
  res.json({ nome: "Ana", email: "ana@email.com" });
});

// Aplicado a todas as rotas do router
router.use(verificarToken);

router.get("/", listarTodos);
router.delete("/:id", deletarUm);`, lang: "javascript" },
        { t: "h", h: "Middleware global vs middleware de rota" },
        { t: "p", p: "Um middleware registrado com app.use() roda em TODAS as requisições. Um middleware passado como argumento de uma rota (router.get('/path', middleware, handler)) roda apenas naquela rota." },
        { t: "code", c: String.raw`// Global: roda em todas as rotas
app.use(morgan("dev"));       // log de requisições
app.use(express.json());      // parse do body
app.use(cors());              // libera CORS

// Específico: roda só nessa rota
app.get("/admin/dashboard", verificarAdmin, dashboardHandler);`, lang: "javascript" },
        { t: "h", h: "Error handling middleware" },
        { t: "p", p: "Middlewares de erro capturam exceções e erros explícitos. Eles recebem quatro parâmetros (err, req, res, next) — o Express os distingue dos middlewares normais justamente por terem 4 argumentos." },
        { t: "code", c: String.raw`// Middleware de erro: 4 parâmetros
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    error: err.message || "Erro interno do servidor"
  });
});

// Para disparar o middleware de erro:
router.get("/risco", (req, res, next) => {
  try {
    // algo que pode falhar
    throw new Error("Algo deu errado");
  } catch (err) {
    next(err);  // encaminha para o middleware de erro
  }
});`, lang: "javascript" },
        { t: "h", h: "CORS: liberando requisições cross-origin" },
        { t: "p", p: "CORS (Cross-Origin Resource Sharing) é um mecanismo de segurança que bloqueia requisições de domínios diferentes. Em desenvolvimento, é necessário habilitar explicitamente." },
        { t: "code", c: String.raw`import cors from "cors";

// Libera todas as origens (desenvolvimento)
app.use(cors());

// Configuração restritiva (produção)
app.use(cors({
  origin: "https://meusite.com",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));`, lang: "javascript" },
        { t: "note", p: "Middlewares executam na ordem em que são registrados. Um app.use() antes das rotas roda antes delas; um app.use() depois das rotas só roda se nenhuma rota anterior respondreu." },
        { t: "warn", p: "O middleware de erro DEVE ter exatamente 4 parâmetros (err, req, res, next). Se tiver 3, o Express o trata como middleware normal e ignora os erros." }
      ],
      quiz: [
        { q: "O Router do Express serve para:", opts: ["Criar middlewares de erro.", "Organizar rotas em módulos separados.", "Substituir o Express.", "Gerenciar banco de dados."], ans: 1, expl: "O Router permite criar arquivos de rotas separados e registrá-los no app com app.use('/prefixo', router)." },
        { q: "Um middleware de erro no Express precisa de quantos parâmetros?", opts: ["2", "3", "4", "5"], ans: 2, expl: "O middleware de erro recebe (err, req, res, next) — quatro parâmetros — o que o diferencia dos middlewares normais." },
        { q: "CORS bloqueia requisições porque:", opts: ["O navegador não suporta HTTP.", "Políticas de segurança impedem requisições entre domínios diferentes por padrão.", "O Express não permite requisições externas.", "O banco de dados não aceita conexões externas."], ans: 1, expl: "CORS é uma política do navegador que impede que um site acesse recursos de outro domínio sem permissão explícita." },
        { q: "app.use('/api', router) registra o router no path:", opts: ["/", "/router", "/api", "/api/router"], ans: 2, expl: "Todas as rotas definidas no router terão o prefixo /api automaticamente." },
        { q: "Middlewares globais com app.use() rodam:", opts: ["Apenas na primeira rota.", "Em todas as requisições que passam pelo servidor.", "Apenas em rotas GET.", "Apenas quando há erro."], ans: 1, expl: "app.use() sem path registra o middleware para todas as requisições, independente do método ou path." },
        { q: "Em um middleware, o que happens se não chamarmos next() nem respondermos?", opts: ["A requisição continua normalmente.", "A requisição trava e o cliente fica esperando para sempre.", "O servidor reinicia.", "O Express cria uma resposta vazia automaticamente."], ans: 1, expl: "Se o middleware não chama next() nem envia resposta, o Express não faz mais nada e o cliente trava." },
        { q: "Para registrar middlewares na ordem correta, devemos colocar app.use(express.json()):", opts: ["Depois das rotas.", "Antes das rotas que precisam ler req.body.", "Em qualquer lugar, não importa.", "Apenas em produção."], ans: 1, expl: "express.json() deve vir antes das rotas que dependem de req.body; caso contrário, o body não será parseado." },
        { q: "O que o módulo morgan faz em um app Express?", opts: ["Autenticação de usuários.", "Logs de requisições HTTP no terminal.", "Conexão com banco de dados.", "Parse de JSON."], ans: 1, expl: "morgan é um middleware de logging que mostra no console cada requisição HTTP recebida pelo servidor." },
        { q: "Um middleware de autenticação que retorna 401 e chama next() em caso de sucesso funciona porque:", opts: ["next() sempre ignora o erro.", "O handler da rota só é chamado se o token for válido.", "O Express não valida tokens.", "401 significa sucesso."], ans: 1, expl: "O middleware retorna 401 e interrompe se o token for inválido; se válido, chama next() para passar à rota." },
        { q: "Podemos definir middlewares aninhados (um router dentro de outro)?", opts: ["Não, é proibido.", "Sim, routers podem ser aninhados e middlewares empilhados.", "Apenas com Express 5.", "Somente em produção."], ans: 1, expl: "Routers são composáveis: app.use('/api', router) e router.use(middleware) permitem aninhar camadas de middlewares." }
      ]
    },
    {
      id: "node-restapi",
      title: "API REST Completa",
      subtitle: "CRUD, validação, organização e boas práticas em APIs reais.",
      blocks: [
        { t: "h", h: "Arquitetura de pastas" },
        { t: "p", p: "Uma API bem organizada separa responsabilidades: rotas definem os endpoints, controllers contêm a lógica de negócio, models descrevem os dados, e middlewares tratam横切 concernes (auth, erros, logging)." },
        { t: "code", c: String.raw`meu-api/
├── src/
│   ├── routes/
│   │   └── usuarios.routes.js
│   ├── controllers/
│   │   └── usuarios.controller.js
│   ├── models/
│   │   └── usuario.model.js
│   ├── middlewares/
│   │   ├── auth.js
│   │   └── errorHandler.js
│   └── app.js
├── package.json
└── .env`, lang: "javascript" },
        { t: "h", h: "CRUD completo" },
        { t: "p", p: "CRUD representa as quatro operações básicas de dados: Create, Read, Update e Delete. Uma API REST bem feita expõe esses quatro verbos nos endpoints corretos." },
        { t: "code", c: String.raw`// routes/usuarios.routes.js
import { Router } from "express";
import * as controller from "../controllers/usuarios.controller.js";

const router = Router();

router.get("/",       controller.listar);
router.get("/:id",    controller.buscarPorId);
router.post("/",      controller.criar);
router.put("/:id",    controller.atualizar);
router.delete("/:id", controller.deletar);

export default router;`, lang: "javascript" },
        { t: "h", h: "Validação com Zod" },
        { t: "p", p: "Validar dados de entrada é essencial para segurança e integridade. O Zod é uma biblioteca moderna que define schemas com tipos e mensagens de erro claras." },
        { t: "code", c: String.raw`import { z } from "zod";

const criarUsuarioSchema = z.object({
  nome: z.string().min(2, "Nome deve ter no mínimo 2 caracteres"),
  email: z.string().email("Email inválido"),
  idade: z.number().int().positive().max(150),
  senha: z.string().min(8, "Senha deve ter no mínimo 8 caracteres")
});

// No controller
export function criar(req, res) {
  try {
    const dados = criarUsuarioSchema.parse(req.body);
    // dados validados e tipados
    res.status(201).json(dados);
  } catch (err) {
    res.status(400).json({ errors: err.errors });
  }
}`, lang: "javascript" },
        { t: "h", h: "Paginação" },
        { t: "p", p: "Retornar todos os registros de uma vez é perigoso em produção — a resposta fica gigante e lenta. Paginação Divide os resultados em páginas, usando query params como page e limit." },
        { t: "code", c: String.raw`// Controller com paginação
export async function listar(req, res) {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  const total = await Usuario.countDocuments();
  const usuarios = await Usuario.find()
    .skip(skip)
    .limit(limit);

  res.json({
    data: usuarios,
    pagination: {
      page,
      limit,
      total,
      pages: Math.ceil(total / limit)
    }
  });
}`, lang: "javascript" },
        { t: "note", p: "Use o verbo POST para criar, GET para buscar, PUT/PATCH para atualizar e DELETE para remover. PATCH atualiza parcialmente; PUT substitui o recurso inteiro." },
        { t: "warn", p: "Nunca confie nos dados que chegam do cliente. Valide sempre com Zod, Joi ou similar antes de processar — senão dados inválidos entram no banco e corrompem o sistema." }
      ],
      quiz: [
        { q: "Em uma API REST, qual verbo HTTP é usado para CRIAR um recurso?", opts: ["GET", "POST", "PUT", "DELETE"], ans: 1, expl: "POST é o verbo padrão para criação de recursos em uma API REST." },
        { q: "A arquitetura de pastas routes/controllers/models separa:", opts: ["Banco de dados de arquivos estáticos.", "Rota (endpoint) de lógica de negócio de dados.", "Front-end do back-end.", "Desenvolvimento de produção."], ans: 1, expl: "Routes definem endpoints, controllers contêm a lógica, models definem a estrutura dos dados." },
        { q: "PATCH difere de PUT porque:", opts: ["PATCH deleta o recurso.", "PATCH atualiza apenas campos específicos; PUT substitui o recurso inteiro.", "PATCH é mais lento.", "PATCH só funciona com JSON."], ans: 1, expl: "PATCH faz atualização parcial (só os campos enviados); PUT espera todos os campos do recurso." },
        { q: "Zod é usado para:", opts: ["Conectar ao banco de dados.", "Validar e tipar dados de entrada.", "Criar servidores HTTP.", "Gerenciar dependências."], ans: 1, expl: "Zod define schemas que validam dados e retornam mensagens de erro claras quando os dados são inválidos." },
        { q: "Por que paginação é importante em uma API?", opts: ["Porque o JavaScript não suporta listas grandes.", "Para não sobrecarregar o servidor e o cliente com muitos dados de uma vez.", "Porque o HTTP não aceita mais de 10 itens.", "Porque o Express exige paginação."], ans: 1, expl: "Paginação limita a quantidade de dados retornados, melhorando performance e evitando timeouts." },
        { q: "O método PUT em /usuarios/5 atualiza:", opts: ["Todos os usuários.", "Apenas o usuário com id 5.", "O último usuário da lista.", "Nenhum usuário."], ans: 1, expl: "PUT /usuarios/5 atinge o recurso identificado pelo id 5 — o id vem na URL como parâmetro de rota." },
        { q: "Para deletar um recurso, o verbo correto é:", opts: ["DELETE", "REMOVE", "DESTROY", "PURGE"], ans: 0, expl: "DELETE é o verbo HTTP padrão para remoção de recursos em REST." },
        { q: "Qual é a resposta correta ao criar um recurso com sucesso?", opts: ["200 OK", "201 Created", "204 No Content", "301 Redirect"], ans: 1, expl: "201 Created indica que o recurso foi criado com sucesso — é o status semântico correto para POST bem-sucedido." },
        { q: "req.query.page retorna o valor:", opts: ["Como número automaticamente.", "Como string, precisando de parseInt.", "Como objeto.", "Como booleano."], ans: 1, expl: "Query params sempre chegam como strings no Express; é necessário converter com parseInt para usar como número." },
        { q: "O que significa REST no contexto de APIs?", opts: ["Representational State Transfer", "Remote Execution Standard Transfer", "Resource Endpoints Standard Technology", "Rapid Execution Server Technology"], ans: 0, expl: "REST é um estilo arquitetural para APIs baseado em recursos identificáveis por URLs e manipulados com verbos HTTP." }
      ]
    },
    {
      id: "node-mongodb",
      title: "Banco de Dados com MongoDB",
      subtitle: "Conectando ao MongoDB com Mongoose — schemas, models e queries.",
      blocks: [
        { t: "h", h: "MongoDB: banco NoSQL orientado a documentos" },
        { t: "p", p: "O MongoDB armazena dados em documentos JSON (BSON), não em tabelas rígidas como bancos SQL. Cada documento é um objeto flexível, e as coleções são como tabelas — mas sem esquema fixo. É perfeito para APIs Node.js." },
        { t: "h", h: "Mongoose: ODM para MongoDB" },
        { t: "p", p: "O Mongoose é a biblioteca mais usada para conectar Node.js ao MongoDB. Ele adiciona validação, schemas e uma API de consultas elegante sobre o driver nativo." },
        { t: "code", c: String.raw`import mongoose from "mongoose";

async function conectarDB() {
  await mongoose.connect("mongodb://localhost:27017/estudar");
  console.log("Conectado ao MongoDB!");
}

conectarDB().catch(console.error);`, lang: "javascript" },
        { t: "h", h: "Schemas e Models" },
        { t: "p", p: "Um Schema define a estrutura, validação e comportamento dos documentos. O Model é gerado a partir do Schema e fornece a API de CRUD." },
        { t: "code", c: String.raw`import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: [true, "Nome é obrigatório"],
    trim: true,
    minlength: 2
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  idade: {
    type: Number,
    min: 0,
    max: 150
  },
  ativo: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true  // createdAt e updatedAt automáticos
});

const Usuario = mongoose.model("Usuario", usuarioSchema);`, lang: "javascript" },
        { t: "h", h: "CRUD com Mongoose" },
        { t: "code", c: String.raw`// Criar
const ana = await Usuario.create({
  nome: "Ana",
  email: "ana@email.com",
  idade: 25
});

// Ler todos
const todos = await Usuario.find({ ativo: true });

// Ler um por ID
const usuario = await Usuario.findById("id_aqui");

// Atualizar
await Usuario.findByIdAndUpdate("id_aqui", {
  nome: "Ana Silva"
}, { new: true });

// Deletar
await Usuario.findByIdAndDelete("id_aqui");`, lang: "javascript" },
        { t: "h", h: "Populate: referências entre coleções" },
        { t: "p", p: "Documentos podem referenciar outros documentos (como foreign keys no SQL). O populate() traz os dados referenciados automaticamente em vez de apenas os IDs." },
        { t: "code", c: String.raw`const postSchema = new mongoose.Schema({
  titulo: String,
  conteudo: String,
  autor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Usuario"  // referência ao model Usuario
  }
});

const Post = mongoose.model("Post", postSchema);

// Populate traz os dados do autor
const posts = await Post.find().populate("autor");
// posts[0].autor agora é o objeto completo do usuário`, lang: "javascript" },
        { t: "note", p: "Mongoose adiciona validação automática: campos com required: true lançam erro se não forem enviados, min/max validam números, e unique garante unicidade no banco." },
        { t: "warn", p: "Nunca coloque a senha diretamente no banco sem hash (bcrypt). Nunca exponha a senha em respostas da API — sempre a remova antes de enviar ao cliente." }
      ],
      quiz: [
        { q: "MongoDB é um banco:", opts: ["Relacional (SQL).", "NoSQL orientado a documentos.", "Em memória apenas.", "Planilha Excel."], ans: 1, expl: "MongoDB armazena dados em documentos BSON/JSON, não em tabelas — é um banco NoSQL orientado a documentos." },
        { q: "O que é um Schema no Mongoose?", opts: ["Uma tabela SQL.", "Uma definição da estrutura, validação e comportamento dos documentos.", "Uma query de leitura.", "Uma função de callback."], ans: 1, expl: "O Schema é o molde: define campos, tipos, validações e opções como timestamps." },
        { q: "Qual método cria um documento no Mongoose?", opts: ["Usuario.save()", "Usuario.create()", "Usuario.insert()", "Ambos create e save."], ans: 3, expl: "create() cria e salva de uma vez; save() salva uma instância já criada com new Usuario(). Ambos funcionam." },
        { q: "O populate() serve para:", opts: ["Deletar documentos.", "Trazer dados completos de documentos referenciados em vez de apenas IDs.", "Conectar ao banco de dados.", "Criar índices."], ans: 1, expl: "Populate substitui os ObjectId referenciados pelos documentos completos, similar a JOIN no SQL." },
        { t: "h", h: "" },
        { q: "timestamps: true no schema cria automaticamente:", opts: ["Uma coluna 'data'.", "Os campos createdAt e updatedAt em cada documento.", "Um log no console.", "Uma tabela separada."], ans: 1, expl: "timestamps adiciona dois campos de data gerenciados automaticamente pelo Mongoose." },
        { q: "O que o método find() retorna?", opts: ["Um único documento.", "Um array de documentos.", "O número de documentos.", "Um booleano."], ans: 1, expl: "find() retorna um array com todos os documentos que casam com o filtro — ou array vazio se nenhum encontrar." },
        { q: "Para definir que um campo é único no Mongoose, usamos:", opts: ["unique: true", "indexed: true", "primary: true", "distinct: true"], ans: 0, expl: "unique: true cria um índice único, impedindo que dois documentos tenham o mesmo valor naquele campo." },
        { q: "O que mongoose.connect() retorna?", opts: ["Um documento.", "Uma Promise que resolve quando a conexão é estabelecida.", "O banco de dados.", "Um modelo."], ans: 1, expl: "mongoose.connect() retorna uma Promise; é necessário aguardar com await ou .then() antes de fazer queries." },
        { q: "Qual é a vantagem do Mongoose sobre o driver nativo do MongoDB?", validacao: true, opts: ["É mais rápido.", "Adiciona validação, schemas e uma API de consultas mais amigável.", "Funciona sem MongoDB instalado.", "Suporta apenas JavaScript."], ans: 1, expl: "Mongoose adiciona camadas de validação, tipos, virtuals e uma query builder elegante sobre o driver nativo." },
        { q: "findByIdAndUpdate com { new: true } retorna:", opts: ["O documento antigo.", "O documento já atualizado.", "true ou false.", "undefined."], ans: 1, expl: "Sem { new: true }, o método retorna o documento ANTES da atualização; com ele, retorna o documento JÁ atualizado." }
      ]
    },
    {
      id: "node-jwt",
      title: "Autenticação com JWT",
      subtitle: "Login, registro e proteção de rotas com JSON Web Tokens.",
      blocks: [
        { t: "h", h: "O que é JWT?" },
        { t: "p", p: "JWT (JSON Web Token) é um padrão de autenticação stateless. O servidor gera um token assinado com o dado do usuário; o cliente envia esse token a cada requisição, e o servidor valida a assinatura sem precisar consultar o banco." },
        { t: "code", c: String.raw`// Estrutura de um JWT
// Header.Payload.Signature
eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiIxMjM0In0.ass1gn4tUr4
//    header (algoritmo)    payload (dados)        assinatura`, lang: "javascript" },
        { t: "h", h: "Hashing de senhas com bcrypt" },
        { t: "p", p: "NUNCA armazene senhas em texto plano. O bcrypt gera hashes seguros com salt automático, tornando praticamente impossível reverter a senha." },
        { t: "code", c: String.raw`import bcrypt from "bcrypt";

// Gerar hash da senha (10 rounds de salt)
const senha = "minhaSenha123";
const hash = await bcrypt.hash(senha, 10);
console.log(hash); // $2b$10$N9qo8uLOickgx2ZMRZoMye...

// Verificar senha no login
const senhaCorreta = await bcrypt.compare("minhaSenha123", hash);
console.log(senhaCorreta); // true

const senhaErrada = await bcrypt.compare("outraSenha", hash);
console.log(senhaErrada);  // false`, lang: "javascript" },
        { t: "h", h: "Registro de usuário" },
        { t: "code", c: String.raw`import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const app = express();
app.use(express.json());

app.post("/register", async (req, res) => {
  try {
    const { nome, email, senha } = req.body;

    // Verificar se já existe
    const existente = await Usuario.findOne({ email });
    if (existente) {
      return res.status(400).json({ error: "Email já cadastrado" });
    }

    // Hash da senha
    const hash = await bcrypt.hash(senha, 10);

    // Criar usuário
    const usuario = await Usuario.create({
      nome,
      email,
      senha: hash
    });

    res.status(201).json({
      id: usuario._id,
      nome: usuario.nome,
      email: usuario.email
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});`, lang: "javascript" },
        { t: "h", h: "Login e geração do token" },
        { t: "code", c: String.raw`app.post("/login", async (req, res) => {
  const { email, senha } = req.body;

  const usuario = await Usuario.findOne({ email });
  if (!usuario) {
    return res.status(401).json({ error: "Credenciais inválidas" });
  }

  const senhaValida = await bcrypt.compare(senha, usuario.senha);
  if (!senhaValida) {
    return res.status(401).json({ error: "Credenciais inválidas" });
  }

  const token = jwt.sign(
    { userId: usuario._id },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );

  res.json({ token, usuario: { id: usuario._id, nome: usuario.nome } });
});`, lang: "javascript" },
        { t: "h", h: "Middleware de autenticação" },
        { t: "p", p: "O middleware intercepta a requisição, extrai o token do header Authorization, valida a assinatura e coloca os dados do usuário em req.user para uso nas rotas protegidas." },
        { t: "code", c: String.raw`function autenticar(req, res, next) {
  const header = req.headers.authorization;

  if (!header?.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Token não fornecido" });
  }

  const token = header.split(" ")[1];

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = payload;  // { userId: "...", iat: ..., exp: ... }
    next();
  } catch (err) {
    return res.status(401).json({ error: "Token inválido ou expirado" });
  }
}

// Rota protegida
app.get("/perfil", autenticar, (req, res) => {
  res.json({ userId: req.user.userId });
});`, lang: "javascript" },
        { t: "h", h: "Refresh token" },
        { t: "p", p: "Um token de curta duração (ex.: 15min) pode ser renovado com um refresh token de longa duração (ex.: 7 dias), sem exigir novo login. O refresh token também é armazenado no banco e pode ser revogado." },
        { t: "code", c: String.raw`app.post("/refresh", async (req, res) => {
  const { refreshToken } = req.body;

  if (!refreshToken) {
    return res.status(401).json({ error: "Refresh token necessário" });
  }

  try {
    const payload = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);

    // Verificar se o refresh token existe no banco
    const armazenado = await RefreshToken.findOne({ token: refreshToken });
    if (!armazenado) {
      return res.status(401).json({ error: "Refresh token inválido" });
    }

    // Gerar novo access token
    const novoToken = jwt.sign(
      { userId: payload.userId },
      process.env.JWT_SECRET,
      { expiresIn: "15m" }
    );

    res.json({ token: novoToken });
  } catch (err) {
    res.status(401).json({ error: "Refresh token expirado" });
  }
});`, lang: "javascript" },
        { t: "note", p: "O JWT_SECRET deve ser uma string longa e aleatória, guardada em variáveis de ambiente (.env), nunca no código-fonte. Se o secret vazar, qualquer pessoa pode forjar tokens válidos." },
        { t: "warn", p: "Nunca armazene dados sensíveis no payload do JWT — ele é decodificável por qualquer um (apenas a ASSINATURA é protegida). Guarde apenas o userId e dados não sensíveis." }
      ],
      quiz: [
        { q: "JWT significa:", opts: ["JavaScript Web Token", "JSON Web Token", "Java Work Token", "Joint Web Token"], ans: 1, expl: "JWT é JSON Web Token — um padrão aberto para transmissão de informações entre duas partes como objeto JSON." },
        { q: "Por que usamos bcrypt para senhas?", opts: ["É mais rápido que MD5.", "Gera hashes com salt, tornando a reversão praticamente impossível.", "É nativo do Node.js.", "Armazena a senha em texto plano criptografado."], ans: 1, expl: "bcrypt aplica hashing com salt aleatório, protegendo contra rainbow tables e tornando brute force extremamente lento." },
        { q: "Um JWT é composto por:", opts: ["Apenas o payload.", "Header, payload e assinatura.", "Usuário e senha criptografados.", "Um hash MD5 do payload."], ans: 1, expl: "JWT tem três partes: header (algoritmo), payload (dados) e signature (assinatura criptográfica)." },
        { q: "jwt.sign(payload, secret) gera:", opts: ["Uma hash de senha.", "Um token JWT assinado.", "Uma conexão com o banco.", "Uma sessão de cookies."], ans: 1, expl: "jwt.sign() gera o token JWT com o payload e assina com a chave secreta fornecida." },
        { q: "O header Authorization deve ter o formato:", opts: ["Token meutoken", "Bearer meutoken", "JWT meutoken", "Auth meutoken"], ans: 1, expl: "O formato padrão é 'Bearer <token>' — o prefixo Bearer indica que o token é do tipo portador." },
        { q: "jwt.verify() faz:", opts: ["Gera um novo token.", "Verifica a validade e assinatura de um token recebido.", "Deleta o token do banco.", "Criptografa o payload."], ans: 1, expl: "jwt.verify() valida a assinatura e decodifica o payload; lança erro se o token for inválido ou expirado." },
        { q: "O refresh token serve para:", opts: ["Substituir o login.", "Gerar novos access tokens sem exigir novo login do usuário.", "Criptografar a senha.", "Autenticar o servidor."], ans: 1, expl: "O refresh token tem vida longa e permite renovar o access token (curta duração) sem login repetido." },
        { q: "Nunca armazenar no payload do JWT:", opts: ["O ID do usuário.", "A senha do usuário.", "O tempo de expiração.", "O nome de usuário."], ans: 1, expl: "O payload é codificável por qualquer pessoa; dados sensíveis como senha nunca devem estar nele." },
        { q: "O JWT_SECRET deve ser guardado:", opts: ["No código-fonte.", "No package.json.", "Em variáveis de ambiente (.env), nunca no código.", "No banco de dados."], ans: 2, expl: "Secrets ficam em .env e são acessados via process.env.JWT_SECRET — nunca devem ser commitados no repositório." },
        { q: "O que acontece se o token expirar?", opts: ["Nada, o token continua válido.", "jwt.verify() lança erro e o middleware retorna 401.", "O servidor reinicia.", "O banco de dados é limpo."], ans: 1, expl: "JWTs têm data de expiração; quando expiram, jwt.verify() lança JsonWebTokenError e o middleware rejeita a requisição." }
      ]
    },
    {
      id: "node-deploy",
      title: "Deploy e Produção",
      subtitle: "Colocando sua aplicação no ar — PM2, Docker e boas práticas.",
      blocks: [
        { t: "h", h: "Variáveis de ambiente (.env)" },
        { t: "p", p: "Nunca hardcode valores sensíveis no código. Use variáveis de ambiente para portas, strings secretas, URLs de banco e configurações de produção. A biblioteca dotenv carrega as variáveis do arquivo .env para process.env." },
        { t: "code", c: String.raw`// .env (nunca committar!)
PORT=3000
NODE_ENV=production
MONGO_URI=mongodb://localhost:27017/prod
JWT_SECRET=sua_string_super_secreta_e_longa
JWT_REFRESH_SECRET=outra_string_ultra_secreta`, lang: "javascript" },
        { t: "code", c: String.raw`// app.js
import "dotenv/config";

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(\`Servidor rodando na porta \${port}\`);
});`, lang: "javascript" },
        { t: "h", h: "PM2: gerenciador de processos" },
        { t: "p", p: "O PM2 é o gerenciador de processos padrão para Node.js em produção. Ele mantém a aplicação rodando, reinicia em caso de crash, faz load balancing e gerencia logs." },
        { t: "code", c: String.raw`# Instalar PM2 globalmente
npm install -g pm2

# Iniciar a aplicação
pm2 start app.js --name "api"

# Listar processos
pm2 list

# Ver logs
pm2 logs api

# Reiniciar
pm2 restart api

# Parar
pm2 stop api

# Salvar configuração para auto-start no boot
pm2 save
pm2 startup`, lang: "bash" },
        { t: "h", h: "Logging em produção" },
        { t: "p", p: "console.log não é adequado para produção — ele não tem níveis de severidade, timestamps ou rotação de arquivos. Use bibliotecas como pino ou winston." },
        { t: "code", c: String.raw`import pino from "pino";

const logger = pino({
  level: process.env.LOG_LEVEL || "info",
  timestamp: pino.stdTimeFunctions.isoTime
});

logger.info("Servidor iniciado");
logger.warn("Porta usando padrão");
logger.error({ err: new Error("Falha") }, "Erro ao conectar ao banco");`, lang: "javascript" },
        { t: "h", h: "Health checks" },
        { t: "p", p: "Um endpoint de health check permite que o load balancer e ferramentas de monitoramento verifiquem se a aplicação está respondendo corretamente." },
        { t: "code", c: String.raw`app.get("/health", async (req, res) => {
  try {
    // Verificar conexão com o banco
    await mongoose.connection.db.admin().ping();

    res.status(200).json({
      status: "ok",
      uptime: process.uptime(),
      timestamp: new Date().toISOString()
    });
  } catch (err) {
    res.status(503).json({
      status: "error",
      message: err.message
    });
  }
});`, lang: "javascript" },
        { t: "h", h: "Docker basics" },
        { t: "p", p: "Docker empacota a aplicação em um container isolado, garantindo que rode igual em qualquer máquina. O Dockerfile descreve como construir a imagem; docker-compose gerencia múltiplos serviços." },
        { t: "code", c: String.raw`# Dockerfile
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .

EXPOSE 3000

CMD ["node", "app.js"]`, lang: "bash" },
        { t: "code", c: String.raw`# docker-compose.yml
version: "3.8"
services:
  api:
    build: .
    ports:
      - "3000:3000"
    environment:
      - MONGO_URI=mongodb://mongo:27017/prod
      - JWT_SECRET=minha_chave
    depends_on:
      - mongo

  mongo:
    image: mongo:6
    ports:
      - "27017:27017"
    volumes:
      - mongo-data:/data/db

volumes:
  mongo-data:`, lang: "bash" },
        { t: "note", p: "Em produção, habilite compression ( gzip ), helmet (segurança de headers) e rate-limiting (proteção contra abuso). Essas são camadas simples que evitam problemas sérios." },
        { t: "warn", p: "Nunca rode node app.js diretamente em produção — o Node não se reinicia em caso de crash. Use PM2 ou Docker, que cuidam disso automaticamente." }
      ],
      quiz: [
        { q: "O arquivo .env deve ser:", opts: ["Commitado no Git.", "Adicionado ao .gitignore e nunca exposto.", "Enviado ao npm.", "Criptografado com bcrypt."], ans: 1, expl: "O .env contém segredos e nunca deve ser versionado. Adicione-o ao .gitignore para não ser commitado." },
        { q: "O PM2 serve para:", opts: ["Criar bancos de dados.", "Manter a aplicação rodando, reiniciar em crashes e fazer load balancing.", "Substituir o Express.", "Gerenciar pacotes npm."], ans: 1, expl: "PM2 é um process manager: mantém o Node rodando, reinicia em crashes e distribui carga entre CPU cores." },
        { q: "process.env.PORT retorna:", opts: ["Sempre 3000.", "O valor definido nas variáveis de ambiente.", "A porta do banco de dados.", "undefined sempre."], ans: 1, expl: "process.env lê variáveis de ambiente; PORT é definida no .env ou no sistema operacional." },
        { q: "Dockerfile serve para:", opts: ["Armazenar dados do banco.", "Descrever como construir a imagem Docker da aplicação.", "Gerenciar logs.", "Configurar o Express."], ans: 1, expl: "O Dockerfile lista comandos (FROM, COPY, RUN) que instruem como montar a imagem do container." },
        { q: "Um health check endpoint retorna:", opts: ["200 com dados de status quando saudável.", "Sempre 500.", "HTML com gráficos.", "Nada — é apenas visual."], ans: 0, expl: "Health checks retornam 200 quando tudo está OK e status de erro (5xx) quando algo falhou, permitindo monitoramento automatizado." },
        { q: "O que npm ci --only=production faz?", opts: ["Instala apenas dependências de produção, ignorando devDependencies.", "Instala todas as dependências normalmente.", "Remove o node_modules.", "Atualiza todas as dependências."], ans: 0, expl: "npm ci --only=production instala apenas as dependências normais (não dev), reduzindo o tamanho da imagem Docker." },
        { q: "O que o módulo helmet faz em produção?", opts: ["Criptografa o banco de dados.", "Adiciona headers de segurança HTTP ao Express.", "Faz backup automático.", "Gerencia variáveis de ambiente."], ans: 1, expl: "Helmet configura headers HTTP de segurança (X-Content-Type-Options, X-Frame-Options, etc.) para proteger a aplicação." },
        { q: "NODE_ENV=production em produções provoca:", opts: ["Erros intencionais para debug.", "Comportamentos otimizados do Express e frameworks, como views em cache.", "Desligamento automático.", "Exclusão de logs."], ans: 1, expl: "Quando NODE_ENV é production, Express e muitas bibliotecas ativam otimizações e desabilitam comportamentos de debug." },
        { q: "O que docker-compose.yml faz?", opts: ["Define uma única imagem Docker.", "Gerencia múltiplos containers (app + banco + mais) com um único comando.", "Substitui o PM2.", "Faz deploy automático na AWS."], ans: 1, expl: "docker-compose orchestrates vários containers: definir api, banco de dados, cache e mais no mesmo arquivo." },
        { q: "Por que evitar console.log em produção?", opts: ["console.log é lento e não tem níveis de severidade, timestamps ou rotação de logs.", "console.log não existe no Node.js.", "console.log apaga logs anteriores.", "console.log só funciona em desenvolvimento."], ans: 0, expl: "console.log não oferece níveis (info/warn/error), timestamps ou rotação — bibliotecas como pino/winston resolvem isso." }
      ]
    }
  ]
};
