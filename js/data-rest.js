/* Curso: REST API */
window.COURSES = window.COURSES || {};
window.COURSES.rest = {
  name: "REST API",
  topics: [
    {
      id: "rest-intro",
      title: "O que é REST",
      subtitle: "Representational State Transfer — o estilo arquitetural por trás da maioria das APIs modernas.",
      blocks: [
        { t: "h", h: "REST é um estilo arquitetural" },
        { t: "p", p: "REST (Representational State Transfer) não é um protocolo nem uma especificação rígida: é um conjunto de restrições arquiteturais propostas por Roy Fielding em 2000. Quando uma API segue essas restrições, dizemos que ela é \"RESTful\"." },
        { t: "h", h: "Os princípios fundamentais do REST" },
        { t: "lst", items: [
          "Cliente-Servidor: o cliente (app, browser) e o servidor têm responsabilidades separadas e podem evoluir de forma independente.",
          "Stateless: cada requisição carrega toda a informação necessária. O servidor não guarda estado entre chamadas.",
          "Cache: respostas podem ser marcadas como cacheáveis ou não, reduzindo chamadas desnecessárias.",
          "Interface Uniforme: o contrato entre cliente e servidor é previsível — URIs para recursos, métodos HTTP para ações, representações no body.",
          "Sistema em Camadas: entre cliente e servidor podem existir proxies, gateways e balancers de carga sem afetar a comunicação."
        ]},
        { t: "h", h: "Richardson Maturity Model" },
        { t: "p", p: "Leonard Richardson propôs um modelo para medir o quão \"RESTful\" uma API é. Quatro níveis:" },
        { t: "ol", items: [
          "Nível 0 — POX: tudo por uma única URI (geralmente POST), sem recursos nem verbos HTTP claros. Ex.: SOAP clássico.",
          "Nível 1 — Recursos: introduce URIs distintas por recurso, mas ainda usa apenas POST para tudo.",
          "Nível 2 — Verbos HTTP: usa GET, POST, PUT, DELETE corretamente, com status codes apropriados.",
          "Nível 3 — HATEOAS: o servidor retorna links que o cliente pode seguir (Hypermedia). É o nível mais completo."
        ]},
        { t: "h", h: "Recursos e URIs" },
        { t: "p", p: "Em REST, tudo é um recurso: um usuário, um produto, uma lista de pedidos. Cada recurso é acessado por uma URI (Uniform Resource Identifier), que funciona como um endereço único." },
        { t: "code", c: String.raw`GET /api/usuarios          → lista de usuários
GET /api/usuarios/42       → usuário com id 42
POST /api/usuarios         → cria um novo usuário
PUT /api/usuarios/42       → atualiza o usuário 42
DELETE /api/usuarios/42    → remove o usuário 42`, lang: "http" },
        { t: "note", p: "Nomes de URIs devem ser substantivos no plural (recomendado), representando o recurso e não a ação. Evite verbos como /getUsuario — em REST, o verbo está no método HTTP." },
        { t: "warn", p: "Uma API \"REST-like\" pode ignorar alguns princípios (como HATEOAS) e ainda ser muito útil. Nem toda API precisa chegar ao nível 3 do Richardson; na prática, a maioria das APIs modernas opera no nível 2." }
      ],
      quiz: [
        { q: "REST significa:", opts: ["Remote Execution State Transfer", "Representational State Transfer", "Resource Entity State Transfer", "Relational Entity State Technology"], ans: 1, expl: "REST é a sigla de Representational State Transfer, cunhada por Roy Fielding em sua tese de doutorado (2000)." },
        { q: "Em REST, \"stateless\" significa que:", opts: ["O servidor guarda o estado de cada cliente em memória.", "Cada requisição contém toda a informação necessária para ser processada.", "O cliente não pode manter estado local.", "O servidor não pode armazenar dados persistentes."], ans: 1, expl: "Stateless quer dizer que o servidor não retém estado entre requisições — cada chamada deve trazer todos os dados de autenticação e contexto de que precisa." },
        { q: "No Richardson Maturity Model, o nível 0 representa:", opts: ["Uma API com HATEOAS completo.", "Uma única URI com apenas POST.", "REST plenamente implementado.", "Uma API com cache habilitado."], ans: 1, expl: "Nível 0 usa uma única URI e geralmente apenas POST, sem distinção de recursos ou verbos HTTP — como SOAP clássico." },
        { q: "Em uma API REST, o que define um recurso?", opts: ["Apenas entidades de banco de dados.", "Qualquer coisa que tenha um identificador (URI) e possa ser representada.", "Apenas arquivos físicos no servidor.", "Somente objetos JSON."], ans: 1, expl: "Um recurso em REST é qualquer conceito acessível por uma URI — pode ser um dado, uma ação abstrata, ou até um composite." },
        { q: "A sigla HATEOAS significa:", opts: ["Hypermedia As The Engine Of Application State", "High Availability Transfer Engine Of API Standards", "Hypermedia Access Transfer Engine For API Operations", "Hypertext Application Transfer Engine Or Standard"], ans: 0, expl: "HATEOAS (Hypermedia As The Engine Of Application State) é o nível mais alto do Richardson, onde o servidor entrega links que o cliente pode seguir." },
        { q: "Em REST, o verbo da ação é representado por:", opts: ["A URI do recurso.", "O método HTTP (GET, POST, PUT, DELETE...).", "Um parâmetro no body da requisição.", "Um header personalizado."], ans: 1, expl: "Em REST, o verbo está no método HTTP: GET para ler, POST para criar, PUT para substituir, DELETE para remover, etc." },
        { q: "Qual é a forma recomendada de nomear uma URI de recurso?", opts: ["/getUsuarios", "/usuarios", "/action/listUsers", "/usuarios/get"], ans: 1, expl: "URIs devem ser substantivos no plural (ex.: /usuarios) sem verbos. O verbo está representado pelo método HTTP." },
        { q: "Quem propôs REST e em que ano?", opts: ["Martin Fowler, 2003.", "Roy Fielding, 2000.", "Tim Berners-Lee, 1994.", "Guido van Rossum, 2001."], ans: 1, expl: "Roy Fielding definiu REST em sua tese de doutorado de 2000, «Architectural Styles and the Design of Network-based Software Architectures»." },
        { q: "O princípio \"Cache\" em REST implica que:", opts: ["Todas as respostas devem ser cacheadas sempre.", "O servidor pode indicar se a resposta é cacheável ou não, otimizando chamadas.", "O cliente nunca deve cachear nada.", "Cache é proibido em REST."], ans: 1, expl: "REST permite que o servidor marque respostas como cacheáveis (com headers como Cache-Control), reduzindo chamadas repetidas ao servidor." },
        { q: "No nível 2 do Richardson Maturity Model:", opts: ["Usa-se apenas POST para tudo.", "Implementa-se HATEOAS completo.", "Usam-se verbos HTTP corretos (GET, POST, PUT, DELETE) com status codes adequados.", "Não há distinção de recursos."], ans: 2, expl: "No nível 2, a API usa verbos HTTP adequadamente e retorna status codes corretos — é o nível mais comum em APIs modernas." }
      ]
    },
    {
      id: "rest-metodos",
      title: "Métodos HTTP",
      subtitle: "GET, POST, PUT, PATCH, DELETE e mais — cada verbo com seu papel na API.",
      blocks: [
        { t: "h", h: "Métodos HTTP: os verbos do REST" },
        { t: "p", p: "Cada requisição HTTP carrega um método (ou verbo) que diz ao servidor qual a intenção do cliente. Em REST, os métodos mais usados são GET, POST, PUT, PATCH e DELETE." },
        { t: "h", h: "GET — Leitura" },
        { t: "p", p: "Usado para ler um ou mais recursos. Deve ser idempotente e sem efeito colateral (side-effect). Não deve alterar dados." },
        { t: "code", c: String.raw`GET /api/usuarios HTTP/1.1
Host: api.exemplo.com

HTTP/1.1 200 OK
Content-Type: application/json

[
  { "id": 1, "nome": "Ana" },
  { "id": 2, "nome": "Bia" }
]`, lang: "http" },
        { t: "h", h: "POST — Criação" },
        { t: "p", p: "Envia dados ao servidor para criar um novo recurso. O servidor decide o ID e a localização do novo recurso. Não é idempotente — enviar duas vezes pode criar dois registros." },
        { t: "code", c: String.raw`POST /api/usuarios HTTP/1.1
Content-Type: application/json

{ "nome": "Carlos", "email": "carlos@ex.com" }

HTTP/1.1 201 Created
Location: /api/usuarios/3
{ "id": 3, "nome": "Carlos" }`, lang: "http" },
        { t: "h", h: "PUT — Substituição completa" },
        { t: "p", p: "Substitui o recurso inteiro pelo body da requisição. É idempotente: enviar a mesma requisição N vezes produz o mesmo resultado. Se o recurso não existe, pode criá-lo." },
        { t: "code", c: String.raw`PUT /api/usuarios/3 HTTP/1.1
Content-Type: application/json

{ "nome": "Carlos Silva", "email": "silva@ex.com" }

HTTP/1.1 200 OK
{ "id": 3, "nome": "Carlos Silva" }`, lang: "http" },
        { t: "h", h: "PATCH — Atualização parcial" },
        { t: "p", p: "Atualiza apenas os campos enviados no body, sem substituir o recurso inteiro. Útil quando você quer mudar só o email, por exemplo." },
        { t: "code", c: String.raw`PATCH /api/usuarios/3 HTTP/1.1
Content-Type: application/json

{ "email": "novo@ex.com" }

HTTP/1.1 200 OK`, lang: "http" },
        { t: "h", h: "DELETE — Remoção" },
        { t: "p", p: "Remove o recurso especificado. É idempotente — deletar algo que já foi deletado não deveria causar erro (o estado final é o mesmo)." },
        { t: "h", h: "HEAD e OPTIONS" },
        { t: "lst", items: [
          "HEAD: idêntico ao GET, mas retorna apenas os headers (sem body). Útil para verificar se um recurso existe ou conferir o Content-Type sem baixar o conteúdo.",
          "OPTIONS: retorna quais métodos e headers o servidor aceita para uma URI. Fundamental para o CORS (Cross-Origin Resource Sharing)."
        ]},
        { t: "h", h: "Idempotência" },
        { t: "p", p: "Um método é idempotente se enviar a mesma requisição N vezes produzir o mesmo efeito que enviar uma vez. GET, PUT, DELETE e HEAD são idempotentes. POST e PATCH (parcialmente) não são." },
        { t: "note", p: "PATCH é parcialmente idempotente: se você envia { \"email\": \"x\" } cinco vezes, o resultado é o mesmo — mas patches diferentes produzem resultados diferentes. Por isso, PATCH é considerado idempotente na prática quando os dados são sempre os mesmos." },
        { t: "warn", p: "GET não deve ter efeito colateral: não use GET para deletar ou alterar dados, pois caches e proxies podem chamá-lo repetidamente, causando efeitos indesejados." }
      ],
      quiz: [
        { q: "Qual método HTTP deve ser usado para criar um novo recurso?", opts: ["GET", "POST", "PUT", "DELETE"], ans: 1, expl: "POST é o método para criação de recursos — o servidor decide o ID e retorna a localização do novo recurso." },
        { q: "O método PATCH:", opts: ["Substitui o recurso inteiro.", "Atualiza apenas os campos enviados no body.", "Remove o recurso.", "Retorna apenas headers."], ans: 1, expl: "PATCH atualiza parcialmente: envia apenas os campos que devem mudar, sem tocar no restante do recurso." },
        { q: "Qual dos métodos abaixo é idempotente?", opts: ["POST", "PATCH", "DELETE", "Nenhum dos anteriores."], ans: 2, expl: "DELETE é idempotente: deletar o mesmo recurso várias vezes tem o mesmo efeito de deletar uma vez." },
        { q: "O que o método HEAD retorna?", opts: ["O body completo do recurso.", "Apenas os headers da resposta, sem body.", "Todos os recursos do servidor.", "Um erro se o recurso não existir."], ans: 1, expl: "HEAD retorna apenas os headers (Content-Type, Content-Length, etc.) sem o body, útil para verificar existência ou tamanho." },
        { q: "Quando você envia GET /api/produtos/5 duas vezes, o resultado é:", opts: ["Dois produtos criados.", "O mesmo produto retornado duas vezes (idempotente).", "Um erro na segunda chamada.", "O produto é deletado na segunda chamada."], ans: 1, expl: "GET é idempotente e seguro: não altera dados, então múltiplas chamadas retornam o mesmo resultado." },
        { q: "O método OPTIONS é usado principalmente para:", opts: ["Deletar recursos.", "Verificar quais métodos e headers o servidor aceita (CORS).", "Criar novos registros.", "Atualizar dados parcialmente."], ans: 1, expl: "OPTIONS retorna os métodos aceitos para uma URI e é essencial para o handshake CORS entre navegador e servidor." },
        { q: "PUT e PATCH se diferenciam porque:", opts: ["PATCH substitui o recurso inteiro.", "PUT substitui o recurso inteiro; PATCH atualiza parcialmente.", "Não há diferença entre eles.", "PUT é idempotente e PATCH não é."], ans: 1, expl: "PUT substitui o recurso inteiro com o body enviado. PATCH atualiza apenas os campos presentes no body, preservando o restante." },
        { q: "Usar GET para deletar dados viola o REST porque:", opts: ["GET não aceita body.", "GET é idempotente e seguro — não deve causar efeitos colaterais.", "DELETE é a única forma aceita.", "GET não suporta URIs longas."], ans: 1, expl: "GET não deve causar side-effects: caches e proxies podem reenviar GETs automaticamente, causando exclusões acidentais." },
        { q: "O resultado de POST para o mesmo recurso duas vezes pode ser:", opts: ["Sempre o mesmo resultado (idempotente).", "A criação de dois recursos distintos.", "Um erro na segunda chamada.", "Nenhum efeito."], ans: 1, expl: "POST não é idempotente — duas chamadas podem criar dois recursos, pois o servidor decide o estado final." },
        { q: "Quando o recurso não existe e você usa PUT nele:", opts: ["Sempre retorna 404.", "Pode criar o recurso (dependendo da implementação).", "Sempre retorna erro 405.", "PUT não aceita recursos novos."], ans: 1, expl: "PUT pode criar o recurso se a URI for específica e a implementação permitir, pois PUT define o estado completo do recurso naquela URI." }
      ]
    },
    {
      id: "rest-status",
      title: "Status Codes HTTP",
      subtitle: "Entendendo os códigos de resposta: 2xx, 3xx, 4xx e 5xx.",
      blocks: [
        { t: "h", h: "O que são Status Codes?" },
        { t: "p", p: "Todo resposta HTTP vem com um código de status de três dígitos que comunica ao cliente o resultado da requisição. Os códigos são divididos em cinco categorias por faixa numérica." },
        { t: "h", h: "2xx — Sucesso" },
        { t: "lst", items: [
          "200 OK: a requisição foi bem-sucedida. Usado em GET (retorno de dados), PUT (atualização) e PATCH.",
          "201 Created: o recurso foi criado com sucesso. Retornado após POST, geralmente com header Location apontando para o novo recurso.",
          "204 No Content: sucesso, mas sem conteúdo no body. Comum em DELETE ou em PUT quando não há retorno."
        ]},
        { t: "code", c: String.raw`// Resposta típica de POST com criação
HTTP/1.1 201 Created
Location: /api/usuarios/5
Content-Type: application/json

{ "id": 5, "nome": "Maria" }`, lang: "http" },
        { t: "h", h: "3xx — Redirecionamento" },
        { t: "lst", items: [
          "301 Moved Permanently: o recurso mudou de endereço permanentemente. O cliente deve usar a nova URI nas próximas chamadas.",
          "304 Not Modified: o conteúdo não mudou desde a última requisição (cache). O body pode ser vazio — o cliente usa sua versão em cache."
        ]},
        { t: "h", h: "4xx — Erro do Cliente" },
        { t: "p", p: "Indica que o cliente enviou algo errado. É responsabilidade do cliente corrigir a requisição." },
        { t: "ol", items: [
          "400 Bad Request: a requisição é inválida (JSON malformado, campos obrigatórios ausentes).",
          "401 Unauthorized: o cliente não está autenticado (falta token ou credenciais inválidas).",
          "403 Forbidden: o cliente está autenticado, mas não tem permissão para acessar o recurso.",
          "404 Not Found: o recurso não foi encontrado na URI informada.",
          "422 Unprocessable Entity: a requisição está sintaticamente correta, mas os dados têm erros de validação."
        ]},
        { t: "note", p: "401 e 403 são frequentemente confundidos: 401 significa \"quem é você?\" (não autenticado), enquanto 403 significa \"eu sei quem você é, mas você não pode acessar isto\" (não autorizado)." },
        { t: "h", h: "5xx — Erro do Servidor" },
        { t: "lst", items: [
          "500 Internal Server Error: erro inesperado no servidor. Pode ser um bug, exceção não tratada ou falha de configuração.",
          "502 Bad Gateway: um servidor intermediário (proxy, gateway) recebeu uma resposta inválida do servidor upstream.",
          "503 Service Unavailable: o serviço está temporariamente indisponível (manutenção, sobrecarga). O cliente pode tentar novamente depois."
        ]},
        { t: "warn", p: "Evite retornar 200 para tudo e colocar o erro no body da resposta. Use os status codes corretamente — eles são o contrato entre o cliente e o servidor." }
      ],
      quiz: [
        { q: "O status 201 Created é retornado quando:", opts: ["A requisição é inválida.", "Um novo recurso é criado com sucesso.", "O servidor tem um erro interno.", "O recurso não foi encontrado."], ans: 1, expl: "201 Created indica que o POST criou um novo recurso, geralmente acompanhado do header Location com a URI do novo objeto." },
        { q: "O status 404 indica que:", opts: ["O cliente não está autenticado.", "O servidor está sobrecarregado.", "O recurso não foi encontrado na URI informada.", "A requisição é inválida."], ans: 2, expl: "404 Not Found significa que não existe recurso naquela URI, ou ele foi removido." },
        { q: "A diferença entre 401 e 403 é:", opts: ["Não há diferença.", "401: não autenticado; 403: autenticado mas sem permissão.", "401: erro do cliente; 403: erro do servidor.", "401: o recurso não existe; 403: o recurso existe."], ans: 1, expl: "401 (Unauthorized) significa \"quem é você?\" — faltam credenciais. 403 (Forbidden) significa \"eu sei quem você é, mas não pode acessar\"." },
        { q: "O status 204 No Content é usado quando:", opts: ["A requisição falhou.", "A requisição teve sucesso, mas não há conteúdo no body.", "O servidor está em manutenção.", "O recurso foi encontrado parcialmente."], ans: 1, expl: "204 indica sucesso sem conteúdo, comum em DELETE ou PUT quando não há dados a retornar." },
        { q: "O status 500 significa:", opts: ["A requisição é inválida.", "O cliente não tem permissão.", "O servidor encontrou um erro inesperado.", "O serviço está em manutenção."], ans: 2, expl: "500 Internal Server Error indica um erro inesperado no lado do servidor — pode ser bug, exceção ou configuração errada." },
        { q: "422 Unprocessable Entity é usado quando:", opts: ["O recurso não existe.", "A requisição é sintaticamente correta, mas os dados têm erros de validação.", "O servidor não suporta o método.", "O token expirou."], ans: 1, expl: "422 indica que o JSON é válido, mas os campos não passam na validação (ex.: email inválido, nome vazio)." },
        { q: "O status 304 Not Modified é útil para:", opts: ["Redirecionar o cliente para outro servidor.", "Indicar que o conteúdo não mudou e o cache pode ser usado.", "Sinalizar erro de autenticação.", "Deletar um recurso obsoleto."], ans: 1, expl: "304 diz ao cliente que o conteúdo não mudou desde a última requisição, evitando retransmitir dados desnecessários." },
        { q: "O status 503 Service Unavailable indica:", opts: ["O cliente enviou dados inválidos.", "O servidor está temporariamente indisponível (manutenção ou sobrecarga).", "O recurso foi movido permanentemente.", "O método HTTP não é permitido."], ans: 1, expl: "503 significa que o serviço está fora por motivo temporário — manutenção programada ou sobrecarga de tráfego." },
        { q: "Retornar 200 OK quando há erro de validação é:", opts: ["A prática recomendada em REST.", "Correto, desde que o body descreva o erro.", "Uma violação das boas práticas — o correto é 422 ou 400.", "Necessário para o cliente funcionar."], ans: 2, expl: "Usar 200 para erros confunde o cliente. O correto é retornar o status adequado (400, 422, etc.) e descrever o erro no body." },
        { q: "O status 301 Moved Permanently diz ao cliente que:", opts: ["A requisição foi processada com sucesso.", "O recurso foi deletado.", "A URI do recurso mudou permanentemente — use a nova.", "O servidor está redirecionando temporariamente."], ans: 2, expl: "301 indica mudança permanente: o cliente deve atualizar suas referências para a nova URI a partir de agora." }
      ]
    },
    {
      id: "rest-json",
      title: "Formatos de Dados",
      subtitle: "JSON, XML e como o cliente e o servidor trocam representações.",
      blocks: [
        { t: "h", h: "O que é JSON?" },
        { t: "p", p: "JSON (JavaScript Object Notation) é o formato mais usado em APIs REST. É leve, legível por humanos e fácil de parsear por máquinas. Ele representa dados como pares chave-valor, arrays e tipos primitivos." },
        { t: "code", c: String.raw`{
  "id": 42,
  "nome": "Ana Maria",
  "email": "ana@exemplo.com",
  "ativo": true,
  "enderecos": [
    { "rua": "Rua A", "numero": 100 },
    { "rua": "Rua B", "numero": 200 }
  ],
  "metadata": null
}`, lang: "json" },
        { t: "h", h: "Sintaxe do JSON" },
        { t: "lst", items: [
          "Objetos: entre chaves { }, com pares \"chave\": valor separados por vírgula.",
          "Arrays: entre colchetes [ ], com valores separados por vírgula.",
          "Strings: sempre entre aspas duplas \"...\".",
          "Números: inteiros (42) ou decimais (3.14), sem aspas.",
          "Booleans: true ou false (minúsculos).",
          "Null: null (para valores ausentes)."
        ]},
        { t: "h", h: "Content-Type" },
        { t: "p", p: "O header Content-Type informa o formato dos dados. Para JSON, o tipo correto é application/json." },
        { t: "code", c: String.raw`// Requisição com JSON
POST /api/usuarios HTTP/1.1
Content-Type: application/json
Accept: application/json

{ "nome": "Bia" }`, lang: "http" },
        { t: "h", h: "Serialização e Deserialização" },
        { t: "p", p: "Serialização é converter um objeto em texto (JSON string). Deserialização é o contrário: pegar um JSON e transformar em objeto. Em JavaScript, usamos JSON.stringify() e JSON.parse()." },
        { t: "code", c: String.raw`// Serialização (objeto → JSON string)
const usuario = { nome: "Ana", idade: 25 };
const json = JSON.stringify(usuario);
// '{"nome":"Ana","idade":25}'

// Deserialização (JSON string → objeto)
const texto = '{"nome":"Bia","idade":30}';
const obj = JSON.parse(texto);
console.log(obj.nome);  // "Bia"`, lang: "json" },
        { t: "h", h: "XML: a alternativa" },
        { t: "p", p: "XML (eXtensible Markup Language) é mais verboso que JSON, mas ainda usado em sistemas legados e APIs SOAP. Suporta namespaces e validação com XSD." },
        { t: "code", c: String.raw`<usuario>
  <id>42</id>
  <nome>Ana Maria</nome>
  <email>ana@exemplo.com</email>
  <ativo>true</ativo>
</usuario>`, lang: "xml" },
        { t: "h", h: "JSON vs XML" },
        { t: "ol", items: [
          "JSON é mais leve e legível — ideal para APIs modernas.",
          "XML suporta schemas (XSD) e validação estrita de tipos.",
          "JSON é nativo do JavaScript; XML exige parsers específicos.",
          "XML tem suporte nativo a comentários; JSON não permite.",
          "A maioria das APIs REST usa JSON como formato padrão."
        ]},
        { t: "note", p: "Para enviar dados, o cliente usa Content-Type. Para dizer qual formato quer receber, usa Accept. Ambos os headers podem ser application/json ou application/xml." }
      ],
      quiz: [
        { q: "Em JSON, como se representa um array?", opts: ["{ }", "[ ]", "( )", "< >"], ans: 1, expl: "Arrays em JSON usam colchetes [ ]. Ex.: [1, 2, 3] ou [{ \"a\": 1 }]." },
        { q: "O Content-Type correto para JSON é:", opts: ["text/json", "application/json", "json/data", "application/javascript"], ans: 1, expl: "application/json é o MIME type padrão para dados JSON. text/json existe, mas não é oficial." },
        { q: "A serialização em JavaScript é feita com:", opts: ["JSON.parse()", "JSON.stringify()", "JSON.serialize()", "JSON.convert()"], ans: 1, expl: "JSON.stringify() converte um objeto JavaScript em uma string JSON. JSON.parse() faz o contrário." },
        { q: "Em JSON, strings são delimitadas por:", opts: ["Aspas simples ''", "Aspas duplas \"\"", "Sem delimitador", "Colchetes [ ]"], ans: 1, expl: "Strings em JSON obrigatoriamente usam aspas duplas: \"texto\". Aspas simples causam erro de parsing." },
        { q: "O que o header Accept indica?", opts: ["O formato dos dados enviados.", "O formato que o cliente quer receber na resposta.", "A autenticação usada.", "O tipo de conexão."], ans: 1, expl: "Accept diz ao servidor qual formato o cliente prefere: application/json, application/xml, etc." },
        { q: "Qual a principal vantagem de JSON sobre XML?",opts: ["JSON suporta schemas.", "JSON é mais leve e legível.", "XML é mais rápido para parsear.", "JSON suporta namespaces."], ans: 1, expl: "JSON é mais leve, legível e natural para JavaScript — razões pelas quais se tornou o padrão de APIs REST modernas." },
        { q: "JSON.parse('{\"x\": 1}') devolve:", opts: ["Uma string.", "Um objeto JavaScript { x: 1 }.", "Um array.", "Um erro."], ans: 1, expl: "JSON.parse() deserializa a string JSON em um objeto JavaScript acessível por propriedades." },
        { q: "Em XML, a estrutura é definida por:", opts: ["Chaves { }.", "Tags delimitadas por < >.", "Colchetes [ ].", "Parênteses ( )."], ans: 1, expl: "XML organiza dados em tags hierárquicas: <pai><filho>valor</filho></pai>." },
        { q: "Qual header diz ao servidor o formato que o cliente quer receber?", opts: ["Content-Type", "Accept", "Authorization", "Host"], ans: 1, expl: "Accept é enviado pelo cliente indicando o formato preferido de resposta (ex.: application/json)." },
        { q: "Em JSON, qual é a representação correta de um valor nulo?", opts: ["\"null\"", "null", "0", "\"undefined\""], ans: 1, expl: "null (sem aspas) é o valor que representa ausência de dado em JSON." }
      ]
    },
    {
      id: "rest-params",
      title: "Query Params, Path Params e Headers",
      subtitle: "Os mecanismos para passar dados em uma requisição HTTP.",
      blocks: [
        { t: "h", h: "Path Parameters" },
        { t: "p", p: "Path params são parte da URI e identificam um recurso específico. São obrigatórios e definidos com dois-pontos na rota." },
        { t: "code", c: String.raw`GET /api/usuarios/42 HTTP/1.1

// Rota definida como: /api/usuarios/:id
// O valor 42 é o path parameter "id"`, lang: "http" },
        { t: "code", c: String.raw`// Exemplo em Express.js (Node)
app.get("/api/usuarios/:id", (req, res) => {
  const id = req.params.id;
  res.json({ id, nome: "Ana" });
});`, lang: "json" },
        { t: "h", h: "Query Parameters" },
        { t: "p", p: "Query params ficam após o ? na URI e são usados para filtrar, ordenar ou paginar resultados. São opcionais e chave=valor." },
        { t: "code", c: String.raw`GET /api/usuarios?page=2&limit=10&ordenar=nome HTTP/1.1

// page, limit e ordenar são query parameters
// O ? separa a URI dos parâmetros
// O & separa cada par chave=valor`, lang: "http" },
        { t: "h", h: "Quando usar cada um?" },
        { t: "ol", items: [
          "Path params: para identificar um recurso (obrigatório). Ex.: /usuarios/{id}, /produtos/{id}.",
          "Query params: para filtros, ordenação e paginação (opcional). Ex.: ?status=ativo&page=2.",
          "Headers: para metadados (autenticação, content-type, accept)."
        ]},
        { t: "h", h: "Request Headers" },
        { t: "p", p: "Headers levam metadados da requisição. Alguns são padronizados, outros são customizados." },
        { t: "code", c: String.raw`GET /api/usuarios HTTP/1.1
Host: api.exemplo.com
Authorization: Bearer eyJhbGciOiJIUzI1NiIs...
Accept: application/json
Content-Type: application/json
X-Request-Id: abc-123`, lang: "http" },
        { t: "h", h: "Response Headers" },
        { t: "p", p: "O servidor também envia headers na resposta, com informações como cache, CORS e metadados." },
        { t: "code", c: String.raw`HTTP/1.1 200 OK
Content-Type: application/json
Cache-Control: max-age=3600
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 95
X-Total-Count: 50`, lang: "http" },
        { t: "note", p: "Headers customizados são precedidos com X- (ex.: X-Request-Id, X-Total-Count). Essa convenção evita conflito com headers padronizados pelo HTTP." },
        { t: "warn", p: "Nunca coloque dados sensíveis (senhas, tokens) em query params — eles ficam visíveis no histórico do navegador e em logs de servidor. Use sempre headers para autenticação." }
      ],
      quiz: [
        { q: "Em GET /api/usuarios/42, o valor \"42\" é:", opts: ["Um query parameter.", "Um path parameter.", "Um header.", "Um body parameter."], ans: 1, expl: "42 faz parte da URI e identifica um recurso — é um path parameter definido como :id na rota." },
        { q: "Query parameters começam após:", opts: ["# (hash)", "? (interrogação)", "& (e commercial)", ": (dois-pontos)"], ans: 1, expl: "Query params ficam após o ? na URI: /rota?chave=valor. Cada par adicional é separado por &." },
        { q: "Qual header indica o formato dos dados enviados no body?", opts: ["Accept", "Authorization", "Content-Type", "Host"], ans: 2, expl: "Content-Type informa o formato do body da requisição: application/json, application/xml, etc." },
        { q: "O header Authorization é usado para:", opts: ["Definir o formato da resposta.", "Enviar credenciais de autenticação.", "Controlar cache.", "Limitar taxa de requisições."], ans: 1, expl: "Authorization leva o token ou credencial de autenticação, como Bearer token ou Basic auth." },
        { q: "Por que dados sensíveis NÃO devem ficar em query params?", opts: ["Query params têm limite de tamanho.", "Ficam visíveis no histórico do navegador e em logs.", "Não são suportados por todos os navegadores.", "Query params só aceitam números."], ans: 1, expl: "Query params ficam expostos na barra de endereço, no histórico e em logs de proxies — são inadequados para tokens e senhas." },
        { q: "O que o header Accept faz?", opts: ["Envia dados no body.", "Diz ao servidor qual formato o cliente quer receber.", "Define a autenticação.", "Altera a URI da requisição."], ans: 1, expl: "Accept é enviado pelo cliente para indicar o formato preferido de resposta (ex.: application/json)." },
        { q: "Qual a diferença entre path params e query params?", opts: ["Não há diferença.", "Path params identificam o recurso (obrigatório); query params filtram ou paginam (opcional).", "Path params ficam no body; query params na URI.", "Query params são sempre obrigatórios."], ans: 1, expl: "Path params são parte da URI e obrigatórios (identificam o recurso). Query params são opcionais e usados para filtros e paginação." },
        { q: "Em GET /api/produtos?categoria=livros&ordenar=preco, quantos query params existem?", opts: ["1", "2", "3", "4"], ans: 1, expl: "Há dois query params: categoria=livros e ordenar=preco, separados por &." },
        { q: "Headers customizados em APIs devem ser precedidos por:", opts: ["api-", "X-", "HTTP-", "REST-"], ans: 1, expl: "A convenção é usar o prefixo X- para headers customizados (ex.: X-Request-Id), evitando conflito com headers padrão." },
        { q: "Onde ficam os dados de autenticação Bearer Token?", opts: ["No body da requisição.", "Em um query parameter.", "No header Authorization.", "Na URI como path parameter."], ans: 2, expl: "O Bearer token vai no header: Authorization: Bearer <token>. Nunca em query params ou body para autenticação." }
      ]
    },
    {
      id: "rest-auth",
      title: "Autenticação em APIs",
      subtitle: "API Keys, Basic Auth, JWT e OAuth 2.0 — protegendo seus endpoints.",
      blocks: [
        { t: "h", h: "Por que autenticar?" },
        { t: "p", p: "Autenticação é o processo de identificar quem está fazendo a requisição. Sem ela, qualquer pessoa poderia acessar, modificar ou deletar dados. Existem vários mecanismos, cada um com seu caso de uso." },
        { t: "h", h: "API Keys" },
        { t: "p", p: "A forma mais simples: o cliente envia uma chave (string longa) que identifica a aplicação. É comum em APIs públicas (Google Maps, OpenWeatherMap). Não identifica o usuário final — apenas a aplicação." },
        { t: "code", c: String.raw`// Requisição com API Key (via query param)
GET /api/clima?city=Sao Paulo&key=abc123 HTTP/1.1

// Ou via header (melhor prática)
GET /api/clima?city=Sao Paulo HTTP/1.1
X-API-Key: abc123`, lang: "http" },
        { t: "h", h: "Basic Authentication" },
        { t: "p", p: "Envia usuario:senha codificado em Base64. É simples, mas inseguro sem HTTPS, pois as credenciais ficam em texto quase plano." },
        { t: "code", c: String.raw`// Credenciais: admin:senha123
// Base64 de "admin:senha123" = "YWRtaW46c2VuaGExMjM="

GET /api/admin HTTP/1.1
Authorization: Basic YWRtaW46c2VuaGExMjM=`, lang: "http" },
        { t: "h", h: "JWT (JSON Web Token)" },
        { t: "p", p: "O padrão mais usado em APIs modernas. O token é dividido em três partes: header, payload e assinatura, separadas por ponto. O servidor valida a assinatura sem consultar um banco de dados." },
        { t: "code", c: String.raw`// Estrutura de um JWT: header.payload.signature
eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjQyLCJleHAiOjE3MDAwMDAwMDB9.abc123

// Header (Base64): { "alg": "HS256" }
// Payload (Base64): { "userId": 42, "exp": 1700000000 }
// Assinatura: HMAC-SHA256(header + payload, secretKey)`, lang: "json" },
        { t: "h", h: "Tokens de Acesso e Refresh" },
        { t: "lst", items: [
          "Access Token: vida curta (15-60 min), usado em cada requisição. Contém as permissões do usuário.",
          "Refresh Token: vida longa (dias/semanas), usado apenas para obter um novo access token quando este expira."
        ]},
        { t: "code", c: String.raw`// Fluxo JWT típico
POST /api/auth/login
{ "email": "ana@ex.com", "senha": "123456" }

// Resposta:
{
  "accessToken": "eyJhbGci...",
  "refreshToken": "eyJhbGci..."
}

// Requisições autenticadas:
GET /api/usuarios HTTP/1.1
Authorization: Bearer eyJhbGci...`, lang: "json" },
        { t: "h", h: "OAuth 2.0 (visão geral)" },
        { t: "p", p: "OAuth 2.0 é um framework de autorização (não autenticação) que permite que um应用 acesse recursos em nome do usuário, sem expor a senha. É o que permite \"Fazer login com o Google\"." },
        { t: "lst", items: [
          "Authorization Code: fluxo mais seguro, com redirecionamento e troca de código por token.",
          "Client Credentials: para server-to-server, sem interação do usuário.",
          "Implicit: fluxo legado para SPAs, substituído pelo PKCE.",
          "PKCE: versão segura do Authorization Code para aplicações frontend."
        ]},
        { t: "note", p: "OAuth 2.0 é um framework de autorização, não de autenticação. Para autenticar o usuário (saber quem ele é), combine com OpenID Connect (OIDC), que adiciona um endpoint /userinfo e um id_token." },
        { t: "warn", p: "Nunca armazene JWT em localStorage sem proteção (XSS pode roubar o token). Prefira httpOnly cookies para apps web, ou secure storage em apps mobile." }
      ],
      quiz: [
        { q: "API Keys identificam:", opts: ["O usuário final.", "A aplicação (cliente) que está fazendo a requisição.", "O servidor.", "O banco de dados."], ans: 1, expl: "API Keys identificam a aplicação, não o usuário. São comuns em APIs públicas e não devem ser usadas para autorização de usuários." },
        { q: "Basic Auth envia as credenciais:", opts: ["Em texto puro no header.", "Codificadas em Base64 no header Authorization.", "No body da requisição.", "Em um query parameter."], ans: 1, expl: "Basic Auth codifica usuario:senha em Base64 e envia no header Authorization. É inseguro sem HTTPS." },
        { q: "Um JWT é composto por:", opts: ["Uma única string criptografada.", "Três partes separadas por ponto: header, payload e assinatura.", "Apenas um payload com os dados do usuário.", "Um par chave-valor simples."], ans: 1, expl: "JWT = header (algoritmo) + payload (dados) + assinatura (integridade), separados por ponto." },
        { q: "O Refresh Token é usado para:", opts: ["Autenticar cada requisição.", "Obter um novo Access Token quando este expira.", "Criar novos usuários.", "Limitar a taxa de requisições."], ans: 1, expl: "Refresh Token tem vida longa e é trocado por um novo Access Token, evitando que o usuário precise fazer login novamente." },
        { q: "O fluxo OAuth 2.0 \"Authorization Code\" é recomendado para:", opts: ["Aplicações mobile e web com backend.", "Apenas server-to-server.", "Apenas aplicações desktop.", "APIs públicas sem autenticação."], ans: 0, expl: "Authorization Code (com PKCE) é o fluxo mais seguro para aplicações que têm frontend e backend." },
        { q: "O header de autenticação com JWT é:", opts: ["Authorization: Basic <token>", "Authorization: Bearer <token>", "X-Auth-Token: <token>", "Auth: JWT <token>"], ans: 1, expl: "O padrão é Authorization: Bearer <jwt>, onde Bearer é o tipo de credencial." },
        { q: "O problema de usar Basic Auth sem HTTPS é:", opts: ["O Base64 é fácil de descriptografar.", "As credenciais ficam expostas em texto legível na rede.", "O servidor não suporta.", "O navegador bloqueia."], ans: 1, expl: "Base64 não é criptografia — é apenas encoding. Sem HTTPS, qualquer um na rede lê as credenciais em texto plano." },
        { q: "OAuth 2.0 é considerado:", opts: ["Um mecanismo de autenticação completo.", "Um framework de autorização (define permissões, não identidade).", "Um substituto para JWT.", "Um protocolo de criptografia."], ans: 1, expl: "OAuth 2.0 é autorização: permite que apps acessem recursos em nome do usuário. Para autenticação, combine com OpenID Connect." },
        { q: "Qual a principal vantagem de JWT sobre sessões tradicionais?", opts: ["JWT é mais curto que uma sessão.", "JWT é stateless — o servidor não precisa armazenar estado.", "JWT é mais seguro que HTTPS.", "JWT não pode ser roubado."], ans: 1, expl: "JWT é stateless: o servidor valida a assinatura sem consultar banco, o que facilita escalabilidade horizontal." },
        { q: "O que acontece quando um Access Token expira?", opts: ["O usuário precisa fazer login novamente.", "O servidor retorna 401; o cliente pode usar o Refresh Token para obter um novo.", "A requisição é processada normalmente.", "O servidor deleta o usuário."], ans: 1, expl: "Com Access Token expirado, o servidor retorna 401. O cliente então usa o Refresh Token para obter um novo Access Token sem login." }
      ]
    },
    {
      id: "rest-versioning",
      title: "Versionamento de APIs",
      subtitle: "Como evoluir sua API sem quebrar clientes existentes.",
      blocks: [
        { t: "h", h: "Por que versionar?" },
        { t: "p", p: "APIs evoluem: campos são adicionados, estruturas mudam, endpoints são removidos. Sem versionamento, uma mudança pode quebrar todos os clientes. Versões garantem que clientes antigos continuem funcionando enquanto novos recebem as melhorias." },
        { t: "h", h: "Versionamento por URL" },
        { t: "p", p: "A forma mais visível: a versão faz parte da URI. É a abordagem mais comum e fácil de entender." },
        { t: "code", c: String.raw`GET /api/v1/usuarios HTTP/1.1
GET /api/v2/usuarios HTTP/1.1

// v1 e v2 são versões distintas da API
// v2 pode ter estrutura diferente de v1`, lang: "http" },
        { t: "h", h: "Versionamento por Query Parameter" },
        { t: "p", p: "A versão é passada como query param. Menos invasivo na URI, mas menos semântico." },
        { t: "code", c: String.raw`GET /api/usuarios?version=2 HTTP/1.1`, lang: "http" },
        { t: "h", h: "Versionamento por Header" },
        { t: "p", p: "A versão fica em um header customizado, mantendo a URI limpa. É a abordagem mais \"RESTful\" segundo alguns especialistas." },
        { t: "code", c: String.raw`GET /api/usuarios HTTP/1.1
Accept: application/vnd.minhaapi.v2+json`, lang: "http" },
        { t: "h", h: "Quando quebrar compatibilidade?" },
        { t: "lst", items: [
          "Adicionar campo opcional: NÃO requer nova versão (é retrocompatível).",
          "Remover ou renomear campo: REQUER nova versão (quebra clientes).",
          "Mudar tipo de dado de um campo: REQUER nova versão.",
          "Adicionar novo endpoint: NÃO requer nova versão.",
          "Mudar comportamento existente: REQUER nova versão."
        ]},
        { t: "note", p: "A regra de ouro: se a mudança quebra clientes existentes, é uma nova versão. Se é aditiva e opcional, pode ser feita na versão atual." },
        { t: "warn", p: "Manter muitas versões ao mesmo tempo aumenta a complexidade de manutenção. O ideal é suportar no máximo 2-3 versões e depreciar antigas com aviso prévio." }
      ],
      quiz: [
        { q: "O versionamento por URL é:", opts: ["Invisível ao cliente.", "A versão faz parte da URI (ex.: /api/v1/usuarios).", "Feito apenas por headers.", "Não é aceito por browsers."], ans: 1, expl: "Versionamento por URL coloca a versão diretamente na rota — é a abordagem mais comum e fácil de entender." },
        { q: "Adicionar um campo opcional a uma resposta:", opts: ["Requer nova versão da API.", "NÃO requer nova versão (é retrocompatível).", "Quebra clientes existentes.", "Deve ser feito apenas em v2."], ans: 1, expl: "Campos opcionais são retrocompatíveis: clientes antigos simplesmente ignoram o campo novo." },
        { q: "Remover um campo de uma resposta:", opts: ["Pode ser feito sem nova versão.", "Requer nova versão — clientes existentes dependem dele.", "Não afeta clientes.", "Causa apenas um warning."], ans: 1, expl: "Remover campo quebra clientes que usam aquele dado — é uma mudança incompatível e requer nova versão." },
        { q: "O versionamento por header usa:", opts: ["Authorization: v2", "Accept: application/vnd.minhaapi.v2+json", "Content-Type: version=2", "X-Version: 2.0"], ans: 1, expl: "O versionamento por header mais comum é via Accept com o media type customizado: application/vnd.[api].v[version]+json." },
        { q: "Manter muitas versões ao mesmo tempo:", opts: ["É sempre recomendado.", "Aumenta complexidade de manutenção — ideal é suportar 2-3 no máximo.", "Não tem impacto.", "É obrigatório para APIs públicas."], ans: 1, expl: "Muitas versões = mais código duplicado, mais testes, mais bugfixes. O ideal é depreciar versões antigas." },
        { q: "Versionamento por query parameter é:", opts: ["O mais recomendado.", "Menos comum, menos semântico, mas funcional.", "Proibido em REST.", "Idêntico ao versionamento por URL."], ans: 1, expl: "Versionamento por query param (?version=2) é possível, mas menos semântico e menos usado na prática." },
        { q: "Mudar o comportamento de um endpoint existente:", opts: ["Não afeta clientes.", "Requer nova versão — o comportamento antigo é esperado.", "Pode ser feito silenciosamente.", "Apenas se for documentado."], ans: 1, expl: "Mudar comportamento (mesmo que pareça pequeno) pode quebrar suposições dos clientes — requer nova versão." },
        { q: "O que é \"depreciação\" de uma versão?", opts: ["Criar uma nova versão.", "Avisar que uma versão será descontinuada em uma data futura.", "Deletar uma versão imediatamente.", "Ignorar clientes antigos."], ans: 1, expl: "Depreciação é o aviso de que uma versão será desligada, dando tempo para clientes migrarem." },
        { q: "Adicionar um novo endpoint na versão atual:", opts: ["Quebra clientes existentes.", "NÃO requer nova versão — é uma adição.", "Deve ser feito em v3.", "Requer autorização do cliente."], ans: 1, expl: "Novos endpoints são adições: clientes existentes não os usam, então não há quebra." },
        { q: "A abordagem mais \"RESTful\" de versionamento, segundo muitos especialistas, é:", opts: ["Por URL.", "Por query parameter.", "Por header (Accept).", "Não versionar."], ans: 2, expl: "Versionamento por header (Accept com media type) mantém a URI limpa e usa o mecanismo semântico do HTTP, alinhado com REST." }
      ]
    },
    {
      id: "rest-paginacao",
      title: "Paginação e Filtros",
      subtitle: "Retornando listas grandes de dados de forma eficiente e navegável.",
      blocks: [
        { t: "h", h: "Por que paginar?" },
        { t: "p", p: "Uma tabela com 100.000 registros não pode ser retornada inteira em uma resposta — seria lento para o servidor, pesado para a rede e impossível de consumir no cliente. Paginação divide os dados em páginas gerenciáveis." },
        { t: "h", h: "Offset/Limit (paginação clássica)" },
        { t: "p", p: "O cliente informa quantos registros pular (offset) e quantos retornar (limit). É simples, mas pode ter problemas de performance com offsets grandes e dados que mudam entre requisições." },
        { t: "code", c: String.raw`GET /api/usuarios?offset=20&limit=10 HTTP/1.1

// Resposta (página 3 de 10 em 10)
{
  "data": [ /* 10 usuários */ ],
  "pagination": {
    "offset": 20,
    "limit": 10,
    "total": 547,
    "hasMore": true
  }
}`, lang: "json" },
        { t: "h", h: "Cursor-Based (paginação por cursor)" },
        { t: "p", p: "Em vez de offset, usa um \"cursor\" (geralmente o ID ou timestamp do último registro). Mais eficiente para conjuntos de dados grandes e que mudam frequentemente." },
        { t: "code", c: String.raw`GET /api/usuarios?limit=10&cursor=eyJpZCI6MTB9 HTTP/1.1

// Resposta:
{
  "data": [ /* 10 usuários */ ],
  "pagination": {
    "nextCursor": "eyJpZCI6MjB9",
    "hasMore": true
  }
}`, lang: "json" },
        { t: "h", h: "Paginação nos Headers" },
        { t: "p", p: "Algumas APIs colocam metadados de paginação nos headers, mantendo o body apenas com os dados." },
        { t: "code", c: String.raw`HTTP/1.1 200 OK
X-Total-Count: 547
X-Page-Size: 10
X-Current-Page: 3
Link: </api/usuarios?offset=30&limit=10>; rel="next"`, lang: "http" },
        { t: "h", h: "Filtros e Sorting" },
        { t: "p", p: "Filtros refinam a consulta, sorting ordena os resultados. Ambos usam query params." },
        { t: "code", c: String.raw`GET /api/usuarios?status=ativo&ordenar=-criadoEm&limite=5 HTTP/1.1

// Filtro: status=ativo
// Ordenação: -criadoEm (menos = decrescente)
// Limite: 5 registros`, lang: "http" },
        { t: "h", h: "Busca por texto (search)" },
        { t: "p", p: "Muitas APIs oferecem um parâmetro de busca que filtra por texto em campos relevantes." },

        { t: "note", p: "A convenção mais aceita é: campos com prefixo - ordenam de forma decrescente (ex.: -preco), e campos sem prefixo ordenam de forma crescente (ex.: nome)." },
        { t: "warn", p: "Offset/limit pode retornar resultados duplicados ou pular registros se dados forem inseridos ou removidos entre requisições. Para dados que mudam muito, prefira cursor-based." }
      ],
      quiz: [
        { q: "A paginação offset/limit funciona:", opts: ["Retornando todos os registros de uma vez.", "Pulando X registros e retornando Y.", "Usando um token de sessão.", "Apenas com POST."], ans: 1, expl: "Offset diz quantos pular, limit diz quantos retornar. Ex.: offset=20&limit=10 pula 20 e retorna os 10 seguintes." },
        { q: "A vantagem da paginação cursor-based sobre offset é:", opts: ["É mais simples de implementar.", "Evita duplicatas e pulos quando dados mudam entre requisições.", "Suporta mais de 1000 registros.", "Não precisa de query params."], ans: 1, expl: "Cursor usa o último registro como referência, não um número fixo — dados que mudam entre páginas não causam duplicatas ou pulos." },
        { q: "Em ?ordenar=-preco, o prefixo - significa:", opts: ["Remover a ordenação.", "Ordenação decrescente (maior primeiro).", "Campo obrigatório.", "Filtro negativo."], ans: 1, expl: "O - antes do nome do campo indica ordenação decrescente. Sem o -, é crescente (menor primeiro)." },
        { q: "O header Link: </api/usuarios?offset=30>; rel=\"next\" serve para:", opts: ["Bloquear a requisição.", "Indicar a URI da próxima página para o cliente navegar.", "Autenticar o usuário.", "Limitar a taxa de requisições."], ans: 1, expl: "O header Link com rel=\"next\" diz ao cliente qual é a URI da próxima página — padrão HAL e JSON:API." },
        { q: "Retornar 100.000 registros em uma única resposta:", opts: ["É a prática recomendada.", "É ruim para performance — prefira paginação.", "Só funciona com XML.", "É obrigatório em APIs REST."], ans: 1, expl: "Listas grandes sem paginação sobrecarregam rede e servidor. Paginação é essencial para escalabilidade." },
        { q: "O parâmetro total na paginação indica:", opts: ["O total de páginas disponíveis.", "O total de registros que correspondem à consulta.", "O limite máximo de requisições.", "O tamanho máximo do body."], ans: 1, expl: "total é o número total de registros que satisfazem os filtros, sem a paginação — usado para calcular páginas." },
        { q: "Uma desvantagem do offset/limit é:", opts: ["Não funciona com poucos dados.", "Se dados mudarem entre páginas, registros podem ser duplicados ou perdidos.", "É muito difícil de implementar.", "Só funciona com JSON."], ans: 1, expl: "Se um registro for inserido enquanto o cliente navega, o offset pode pular ou duplicar um registro." },
        { q: "O que o campo hasMore indica?", opts: ["Se o servidor está sobrecarregado.", "Se existem mais registros além desta página.", "Se a busca retornou resultados.", "Se a autenticação é obrigatória."], ans: 1, expl: "hasMore (ou has_next) é booleano: true se há mais registros para carregar, false se esta é a última página." },
        { q: "Busca por texto em APIs é normalmente feita via:", opts: ["POST /search", "Query param como ?q=termo", "Header customizado.", "Path parameter."], ans: 1, expl: "A busca por texto usa query params: ?q=termo, ?search=termo ou ?q=termo&campos=nome,email." },
        { q: "Quando usar cursor-based ao invés de offset/limit?", opts: ["Sempre, em toda API.", "Quando o conjunto de dados é grande e muda frequentemente.", "Apenas com bancos SQL.", "Nunca — offset é sempre melhor."], ans: 1, expl: "Cursor-based é ideal para feeds, timelines e conjuntos voláteis — evita inconsistências de offset quando dados mudam." }
      ]
    },
    {
      id: "rest-seguranca",
      title: "Rate Limiting e Segurança",
      subtitle: "Protegendo sua API de abusos, ataques e acessos indevidos.",
      blocks: [
        { t: "h", h: "Rate Limiting" },
        { t: "p", p: "Rate limiting controla quantas requisições um cliente pode fazer em um período de tempo. Protege contra abusos, DDoS e garante justiça no uso dos recursos do servidor." },
        { t: "code", c: String.raw`// Headers de rate limiting na resposta
HTTP/1.1 200 OK
X-RateLimit-Limit: 100         // máximo de reqs por janela
X-RateLimit-Remaining: 23      // reqs restantes
X-RateLimit-Reset: 1700000060  // timestamp quando a janela reseta

// Quando excedido:
HTTP/1.1 429 Too Many Requests
Retry-After: 30                // segundos para tentar novamente`, lang: "http" },
        { t: "h", h: "CORS (Cross-Origin Resource Sharing)" },
        { t: "p", p: "CORS é um mecanismo de segurança do navegador que controla quais domínios externos podem acessar sua API. Sem CORS, um site malicioso não poderia roubar dados de outra API usando o navegador do usuário." },
        { t: "code", c: String.raw`// Headers CORS na resposta
Access-Control-Allow-Origin: https://meusite.com
Access-Control-Allow-Methods: GET, POST, PUT, DELETE
Access-Control-Allow-Headers: Content-Type, Authorization
Access-Control-Max-Age: 86400    // cache do preflight (segundos)`, lang: "http" },
        { t: "h", h: "HTTPS" },
        { t: "p", p: "HTTPS criptografa toda a comunicação entre cliente e servidor, evitando que dados sejam interceptados (man-in-the-middle). É obrigatório em APIs que tratam dados sensíveis." },
        { t: "lst", items: [
          "HTTPS protege contra interceptação de dados na rede.",
          "Evita que tokens e credenciais sejam expostos em texto plano.",
          "O navegador bloqueia requisições HTTP em páginas HTTPS (mixed content).",
          "Certificados SSL/TLS podem ser obtidos grátis (Let's Encrypt)."
        ]},
        { t: "h", h: "Sanitização de Entrada" },
        { t: "p", p: "Todos os dados que chegam do cliente devem ser validados e sanitizados. Nunca confie na entrada do usuário — mesmo que o frontend valide, o atacante pode ignorar o frontend e enviar dados diretamente." },
        { t: "code", c: String.raw`// Validação no servidor (Node/Express)
app.post("/api/usuarios", (req, res) => {
  const { nome, email } = req.body;

  // Validação de tipos e formato
  if (typeof nome !== "string" || nome.length < 2) {
    return res.status(422).json({ erro: "Nome inválido" });
  }

  if (!email || !email.includes("@")) {
    return res.status(422).json({ erro: "Email inválido" });
  }

  // Sanitizar: remover espaços extras
  const nomeLimpo = nome.trim();
  // ... salvar no banco
});`, lang: "json" },
        { t: "h", h: "Proteção contra Injeção" },
        { t: "lst", items: [
          "SQL Injection: usar queries parametrizadas (nunca concatenar strings SQL).",
          "NoSQL Injection: validar e sanitizar campos que vão para consultas MongoDB.",
          "XSS: escapar output e usar Content-Security-Policy.",
          "SSRF: restringir URLs que o servidor pode buscar internamente."
        ]},
        { t: "code", c: String.raw`// ❌ SQL Injection (perigoso!)
const query = "SELECT * FROM usuarios WHERE id = " + userId;

// ✅ Query parametrizada (seguro)
const query = "SELECT * FROM usuarios WHERE id = ?";
db.query(query, [userId]);`, lang: "json" },
        { t: "note", p: "Princípio da defesa em profundidade: não dependa de uma única camada de segurança. Valide no frontend, no backend, no banco e nos proxies. Cada camada é uma barreira a mais." },
        { t: "warn", p: "Nunca logue dados sensíveis (senhas, tokens, dados de cartão). Logs podem ser acessados por pessoas não autorizadas e viram alvo de ataques." }
      ],
      quiz: [
        { q: "Rate limiting serve para:", opts: ["Aumentar a velocidade da API.", "Controlar quantas requisições um cliente pode fazer por período.", "Criptografar as respostas.", "Autenticar o usuário."], ans: 1, expl: "Rate limiting protege contra abusos e DDoS ao limitar a taxa de requisições por cliente em uma janela de tempo." },
        { q: "O header que informa quantas requisições restam é:", opts: ["X-Remaining-Requests", "X-RateLimit-Remaining", "X-Quota-Left", "Rate-Limit: left"], ans: 1, expl: "X-RateLimit-Remaining indica quantas requisições o cliente ainda pode fazer na janela atual." },
        { q: "CORS controla:", opts: ["A velocidade de conexão.", "Quais domínios externos podem acessar a API pelo navegador.", "A autenticação do usuário.", "A taxa de requisições."], ans: 1, expl: "CORS (Cross-Origin Resource Sharing) é um mecanismo do navegador que restringe quais origens podem acessar recursos." },
        { q: "Quando o cliente excede o rate limit, o servidor retorna:", opts: ["200 OK", "401 Unauthorized", "429 Too Many Requests", "503 Service Unavailable"], ans: 2, expl: "429 Too Many Requests indica que o limite foi atingido; o header Retry-After diz quando tentar novamente." },
        { q: "A principais razão para usar HTTPS é:", opts: ["Performance.", "Criptografar a comunicação e evitar interceptação de dados.", "Compatibilidade com navegadores antigos.", "Evitar ataques DDoS."], ans: 1, expl: "HTTPS criptografa toda a comunicação, evitando que atacantes leiam tokens, senhas e dados sensíveis na rede." },
        { q: "Sanitização de entrada significa:", opts: ["Criptografar a senha no banco.", "Validar e limpar todos os dados recebidos do cliente antes de processar.", "Usar HTTPS em todas as rotas.", "Limitar a taxa de requisições."], ans: 1, expl: "Nunca confie em dados do cliente — valide tipos, formatos, tamanhos e remova caracteres perigosos." },
        { q: "SQL Injection pode ser prevenida com:", opts: ["HTTPS.", "Queries parametrizadas (nunca concatenar strings SQL).", "CORS.", "Rate limiting."], ans: 1, expl: "Queries parametrizadas separam os dados da consulta SQL, tornando impossível injetar código malicioso." },
        { q: "O que o header Access-Control-Allow-Origin faz?", opts: ["Define a origem do servidor.", "Lista os domínios que podem acessar a API via navegador.", "Autentica o cliente.", "Define o formato da resposta."], ans: 1, expl: "Access-Control-Allow-Origin lista os domínios autorizados a fazer requisições cross-origin à API." },
        { q: "Nunca logar dados sensíveis é importante porque:", opts: ["Logs ocupam espaço.", "Logs podem ser acessados por pessoas não autorizadas, expondo senhas e tokens.", "Logs não são suportados em produção.", "Logs causam lentidão."], ans: 1, expl: "Logs ficam em servidores e podem ser acessados por admins, sistemas de monitoramento ou atacantes que invadirem o servidor." },
        { q: "O princípio de \"defesa em profundidade\" significa:",opts: ["Usar apenas HTTPS.", "Usar uma única camada de segurança muito forte.", "Combinar múltiplas camadas de segurança em diferentes níveis.", "Deixar toda a segurança para o frontend."], ans: 2, expl: "Defesa em profundidade combina validação no frontend, backend, banco e proxies — cada camada é uma barreira adicional." }
      ]
    },
    {
      id: "rest-docs",
      title: "Documentação (OpenAPI/Swagger)",
      subtitle: "Documentando sua API para que outros possam integrar com facilidade.",
      blocks: [
        { t: "h", h: "Por que documentar?" },
        { t: "p", p: "Uma API sem documentação é uma caixa-preta: o desenvolvedor precisa ler o código-fonte para entender como usar. Documentação clara reduz tempo de integração, diminui suporte e torna a API profissional." },
        { t: "h", h: "OpenAPI (Swagger)" },
        { t: "p", p: "OpenAPI é o padrão mais usado para documentar APIs REST. Define a estrutura, endpoints, parâmetros, responses e schemas em formato YAML ou JSON. O Swagger UI gera uma interface interativa a partir desse arquivo." },
        { t: "code", c: String.raw`openapi: 3.0.3
info:
  title: API de Usuários
  version: 1.0.0
paths:
  /api/usuarios:
    get:
      summary: Lista todos os usuários
      parameters:
        - name: status
          in: query
          schema:
            type: string
            enum: [ativo, inativo]
      responses:
        "200":
          description: Lista de usuários
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: "#/components/schemas/Usuario"
    post:
      summary: Cria um novo usuário
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              required: [nome, email]
              properties:
                nome:
                  type: string
                email:
                  type: string
                  format: email
      responses:
        "201":
          description: Usuário criado
components:
  schemas:
    Usuario:
      type: object
      properties:
        id:
          type: integer
        nome:
          type: string
        email:
          type: string`, lang: "json" },
        { t: "h", h: "Postman e Collections" },
        { t: "p", p: "Postman é uma ferramenta para testar APIs que também gera documentação. Uma Collection do Postman é um conjunto de requisições organizadas por recurso, com exemplos de request/response." },
        { t: "lst", items: [
          "Crie uma Collection no Postman com todas as rotas.",
          "Adicione exemplos de request body, headers e parâmetros.",
          "Documente cada endpoint com descrição e exemplos de resposta.",
          "Publique a collection como documentação online."
        ]},
        { t: "h", h: "Documentação Automática" },
        { t: "p", p: "Ferramentas como Swagger UI, Redoc e Scalar geram documentação interativa automaticamente a partir do arquivo OpenAPI. O desenvolvedor pode testar as rotas direto na página." },
        { t: "lst", items: [
          "Swagger UI: interface interativa clássica, permite testar endpoints ao vivo.",
          "Redoc: layout limpo e profissional, ideal para documentação pública.",
          "Scalar: interface moderna e rápida, com suporte a múltiplas versões do OpenAPI."
        ]},
        { t: "h", h: "Exemplos de Request/Response" },
        { t: "p", p: "A documentação ideal sempre inclui exemplos reais — tanto do request quanto da resposta. Isso evita ambiguidades e acelera a integração." },
        { t: "code", c: String.raw`// POST /api/usuarios - Exemplo de Request
{
  "nome": "Ana Maria",
  "email": "ana@exemplo.com",
  "senha": "senhaSegura123"
}

// Resposta 201 Created
{
  "id": 42,
  "nome": "Ana Maria",
  "email": "ana@exemplo.com",
  "criadoEm": "2026-01-15T10:30:00Z"
}

// Resposta 422 Unprocessable Entity
{
  "erro": "Validação falhou",
  "campos": {
    "email": "Email inválido",
    "senha": "Mínimo 8 caracteres"
  }
}`, lang: "json" },
        { t: "note", p: "Ferramentas como Swagger UI e Redoc leem o arquivo OpenAPI e geram a documentação automaticamente — não é necessário escrever HTML manualmente." },
        { t: "warn", p: "Documentação desatualizada é pior que nenhuma documentação. Ao mudar a API, atualize o OpenAPI sempre — considere usar uma spec-first approach (definir a spec antes de codificar)." }
      ],
      quiz: [
        { q: "OpenAPI (Swagger) é:", opts: ["Uma biblioteca JavaScript.", "Um padrão de especificação para documentar APIs REST.", "Um framework de backend.", "Um banco de dados."], ans: 1, expl: "OpenAPI define a estrutura da documentação em YAML/JSON, permitindo que ferramentas gerem UIs interativas." },
        { q: "A principal ferramenta para testar APIs durante o desenvolvimento é:", opts: ["Git", "Postman", "Webpack", "Docker"], ans: 1, expl: "Postman é amplamente usado para criar, testar e documentar requisições HTTP de forma visual e organizada." },
        { q: "Qual ferramenta gera documentação interativa a partir de um arquivo OpenAPI?", opts: ["Swagger UI (ou Redoc).", "VS Code.", "GitHub Actions.", "Docker Compose."], ans: 0, expl: "Swagger UI e Redoc leem o spec OpenAPI e geram uma página interativa onde o desenvolvedor pode testar os endpoints." },
        { q: "No OpenAPI, o campo summary em um endpoint serve para:", opts: ["Definir o schema de resposta.", "Dar uma descrição curta do que o endpoint faz.", "Configurar autenticação.", "Limitar a taxa de requisições."], ans: 1, expl: "summary é uma descrição curta e objetiva do endpoint, exibida como título na documentação." },
        { q: "Uma Collection no Postman contém:",opts: ["Apenas configurações de autenticação.", "Um conjunto organizado de requisições com exemplos e documentação.", "O código-fonte do servidor.", "Apenas testes automatizados."], ans: 1, expl: "Uma Collection agrupa requisições por recurso, com headers, bodies, exemplos e documentação de cada rota." },
        { q: "A abordagem \"spec-first\" significa:", opts: ["Codificar primeiro e documentar depois.", "Definir a especificação OpenAPI antes de implementar a API.", "Não documentar a API.", "Usar apenas Postman para documentar."], ans: 1, expl: "Spec-first define o contrato da API antes do código, garantindo que a documentação esteja sempre atualizada." },
        { q: "Exemplos de request/response na documentação servem para:", opts: ["Ocupar espaço.", "Evitar ambiguidades e acelerar a integração do desenvolvedor.", "Aumentar o tamanho da especificação.", "Apenas para fins decorativos."], ans: 1, expl: "Exemplos reais mostram exatamente o que enviar e esperar receber, reduzindo dúvidas e erros de integração." },
        { q: "No OpenAPI, o campo $ref serve para:", opts: ["Definir a URL do servidor.", "Referenciar um schema definido em outra parte do arquivo.", "Fazer uma requisição HTTP.", "Configurar CORS."], ans: 1, expl: "$ref é uma referência JSON Schema que reutiliza definições, evitando duplicação de schemas no arquivo." },
        { q: "Documentação desatualizada é:", opts: ["Melhor que nenhuma documentação.", "Pior que nenhuma documentação — gera confusão e erros.", "Irrelevante.", "Sempre funcional."], ans: 1, expl: "Documentação desatualizada engana o desenvolvedor, que confia nela e recebe erros inesperados." },
        { q: "O formato YAML é frequentemente usado no OpenAPI porque:", opts: ["É mais rápido que JSON.", "É mais legível por humanos que JSON (indentação em vez de chaves).", "JSON não é suportado pelo OpenAPI.", "YAML é obrigatório no Swagger."], ans: 1, expl: "YAML usa indentação e é mais legível para humanos que o JSON com muitas chaves e colchetes." }
      ]
    }
  ]
};
