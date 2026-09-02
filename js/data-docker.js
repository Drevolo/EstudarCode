/* Curso: Docker */
window.COURSES = window.COURSES || {};
window.COURSES.docker = {
  name: "Docker",
  topics: [
    {
      id: "docker-intro",
      title: "Introdução ao Docker",
      subtitle: "O que é Docker e por que revolucionou o desenvolvimento de software.",
      blocks: [
        { t: "h", h: "O que é Docker?" },
        { t: "p", p: "Docker é uma plataforma de código aberto que permite empacotar aplicações e todas as suas dependências em um artefato padronizado chamado container. O objetivo principal é garantir que o software rode de forma idêntica em qualquer ambiente — do notebook do desenvolvedor ao servidor de produção." },
        { t: "code", c: String.raw`docker --version
# Docker version 24.0.7, build afdd53b

docker run hello-world`, lang: "bash" },
        { t: "h", h: "Container vs Máquina Virtual" },
        { t: "p", p: "Uma máquina virtual (VM) virtualiza o hardware inteiro e roda um sistema operacional completo. Um container compartilha o kernel do host e isola apenas o que a aplicação precisa — tornando-o leve, rápido e eficiente." },
        { t: "lst", items: [
          "Containers iniciam em segundos; VMs podem levar minutos.",
          "Containers usam menos memória, pois não carregam um SO completo.",
          "Containers compartilham o kernel do host; VMs有自己的 kernel via hypervisor.",
          "Containers são mais leves para orquestrar em larga escala."
        ]},
        { t: "h", h: "Arquitetura do Docker" },
        { t: "p", p: "A arquitetura é composta por três pilares principais: o Docker Daemon (servidor que gerencia containers), o Docker CLI (interface de linha de comando) e o Docker Registry (repositório de imagens como o Docker Hub)." },
        { t: "code", c: String.raw`# Verificar se o daemon está rodando
docker info

# Listar os comandos disponíveis
docker help`, lang: "bash" },
        { t: "note", p: "O Docker funciona em Linux, macOS e Windows. No macOS e Windows, ele roda uma VM Linux leve (via WSL2 ou HyperKit) para compartilhar o kernel do Linux." },
        { t: "warn", p: "Não confunda Docker com virtualização tradicional. Containers não substituem VMs em todos os cenários — quando você precisa de isolamento completo de kernel ou rodar diferentes SOs, VMs ainda são a escolha certa." }
      ],
      quiz: [
        { q: "O Docker é uma ferramenta para:", opts: ["Criar páginas web.", "Empacotar e rodar aplicações em containers.", "Gerenciar bancos de dados relacionais.", "Compilar linguagens de programação."], ans: 1, expl: "Docker empacota aplicações com dependências em containers, garantindo execução consistente em qualquer ambiente." },
        { q: "Um container se diferencia de uma VM porque:", opts: ["Roda um sistema operacional completo isolado.", "Compartilha o kernel do host e é mais leve.", "Não tem isolamento de recursos.", "Só funciona em servidores físicos."], ans: 1, expl: "Containers compartilham o kernel do host e isolem apenas a aplicação, sendo mais leves e rápidos que VMs." },
        { q: "O Docker Daemon é responsável por:", opts: ["Renderizar páginas HTML.", "Gerenciar imagens, containers e redes do Docker.", "Compilar código-fonte.", "Armazenar dados em banco relacional."], ans: 1, expl: "O daemon (dockerd) é o serviço que gerencia todo o ciclo de vida de imagens, containers e redes." },
        { q: "O Docker CLI permite ao desenvolvedor:", opts: ["Acessar o servidor de forma visual.", "Interagir com o Docker via comandos no terminal.", "Escrever código Python.", "Criar máquinas virtuais VMware."], ans: 1, expl: "O Docker CLI é a interface de linha de comando usada para dar comandos ao Docker Daemon." },
        { q: "Um dos principais benefícios do Docker é:", opts: ["Eliminar completamente a necessidade de testes.", "Garantir que o software rode igual em qualquer ambiente.", "Substituir completamente servidores físicos.", "Evitar o uso de Linux no desenvolvimento."], ans: 1, expl: "Containers empacotam a aplicação com todas as dependências, garantindo que funcione igual do desenvolvimento à produção." },
        { q: "O Docker Hub é:", opts: ["Uma ferramenta de compilação.", "Um repositório público de imagens Docker.", "Um editor de código.", "Um sistema de controle de versão."], ans: 1, expl: "Docker Hub é o maior registry público de imagens Docker, onde você pode baixar e publicar imagens." },
        { q: "Qual é a unidade básica de trabalho do Docker?", opts: ["A máquina virtual.", "A imagem Docker.", "O container.", "O Dockerfile."], ans: 2, expl: "O container é a instância executável criada a partir de uma imagem Docker." },
        { q: "Containers são mais rápidos que VMs porque:", opts: ["Usam processadores dedicados.", "Não precisam carregar um sistema operacional completo.", "Têm mais memória RAM disponível.", "Rodem apenas em hardware físico."], ans: 1, expl: "Containers compartilham o kernel do host e não carregam um SO completo, iniciando em segundos." },
        { q: "O comando docker run faz:", opts: ["Baixa uma imagem e cria um container.", "Remove todos os containers.", "Mostra logs do container.", "Para todos os containers."], ans: 0, expl: "docker run cria e inicia um container a partir de uma imagem, baixando-a do registry se necessário." },
        { q: "Em qual cenário VMs ainda são preferíveis a containers?", opts: ["Microserviços leves na nuvem.", "Quando é preciso rodar diferentes sistemas operacionais no mesmo host.", "Aplicações web simples.", "CI/CD pipelines rápidos."], ans: 1, expl: "VMs oferecem isolamento completo de kernel, permitindo rodar diferentes SOs — algo que containers não fazem." }
      ]
    },
    {
      id: "docker-containers",
      title: "Containers vs Máquinas Virtuais",
      subtitle: "Isolamento, performance e uso ideal de cada abordagem.",
      blocks: [
        { t: "h", h: "Como VMs funcionam" },
        { t: "p", p: "Uma máquina virtual roda sobre um hypervisor (como VMware ou VirtualBox) que virtualiza o hardware. Cada VM carrega seu próprio sistema operacional completo (guest OS), bibliotecas e dependências — o que consome muitos recursos de CPU, disco e memória." },
        { t: "code", c: String.raw`# VM tradicional: SO completo + app + deps
# ┌─────────────────────────┐
# │  App A  │  App B  │ App C│
# │  Libs   │  Libs   │ Libs │
# │ GuestOS │ GuestOS │GuestOS│
# ├─────────────────────────┤
# │       Hypervisor        │
# ├─────────────────────────┤
# │       Host OS           │
# └─────────────────────────┘`, lang: "bash" },
        { t: "h", h: "Como Containers funcionam" },
        { t: "p", p: "Containers encapsulam apenas a aplicação e suas dependências, compartilhando o kernel do host. O Docker Engine fornece o isolamento usando features do Linux como namespaces e cgroups." },
        { t: "code", c: String.raw`# Container: app + deps apenas
# ┌─────────────────────────┐
# │  App A  │  App B  │ App C│
# │  Libs   │  Libs   │ Libs │
# ├─────────────────────────┤
# │    Docker Engine        │
# ├─────────────────────────┤
# │  Kernel do Host (único) │
# └─────────────────────────┘`, lang: "bash" },
        { t: "h", h: "Comparação direta" },
        { t: "lst", items: [
          "Inicialização: VMs levam minutos, containers em segundos.",
          "Tamanho: VMs ocupam gigabytes, containers megabytes.",
          "Isolamento: VMs isolam completamente; containers isolam por namespace.",
          "Portabilidade: containers são mais portáveis por serem mais leves.",
          "Densidade: é possível rodar dezenas de containers no hardware que roda poucas VMs."
        ]},
        { t: "h", h: "Isolamento de containers" },
        { t: "p", p: "Containers usam namespaces para isolar processos, rede, sistema de arquivos e usuários. Cgroups limitam recursos como CPU e memória. Isso garante que um container não afete os outros, mantendo leveza e segurança." },
        { t: "code", c: String.raw`# Rodar dois containers isolados na mesma porta
docker run -d -p 8080:80 --name web1 nginx
docker run -d -p 8081:80 --name web2 nginx

# Listar containers em execução
docker ps`, lang: "bash" },
        { t: "h", h: "Quando usar VMs?" },
        { t: "lst", items: [
          "Quando é necessário rodar diferentes sistemas operacionais.",
          "Quando o isolamento de segurança é crítico (compliance, regulamentações).",
          "Para workloads que exigem kernel isolado (como drivers específicos)."
        ]},
        { t: "note", p: "VMs e containers não são mutuamente exclusivos. Na prática, muitas empresas rodam containers DENTRO de VMs na nuvem, aproveitando o isolamento de ambas as abordagens." },
        { t: "warn", p: "Containers compartilham o kernel do host — se houver uma vulnerabilidade no kernel, todos os containers podem ser afetados. Para cenários de alta segurança, VMs oferecem uma camada extra de proteção." }
      ],
      quiz: [
        { q: "Em um container, o que é compartilhado com o host?", opts: ["O sistema operacional completo.", "O kernel do sistema operacional.", "A aplicação e todas as dependências.", "O hypervisor."], ans: 1, expl: "Containers compartilham o kernel do host, diferente de VMs que têm seu próprio guest OS." },
        { q: "Qual estrutura do Linux é usada para isolar processos em containers?", opts: ["VMs", "Namespaces e cgroups", "Hypervisor", "Dockerfile"], ans: 1, expl: "Namespaces isolam recursos (rede, PID, filesystem) e cgroups limitam uso de CPU/memória." },
        { q: "Uma VM consome mais recursos que um container porque:", opts: ["Tem mais opções de rede.", "Carrega um sistema operacional completo.", "Usa mais portas de rede.", "Tem mais camadas de backup."], ans: 1, expl: "VMs precisam de um guest OS completo, o que consome gigabytes de disco e muita memória RAM." },
        { q: "Containers iniciam mais rápido que VMs pois:", opts: ["Usam Internet mais rápida.", "Não precisam inicializar um sistema operacional completo.", "Têm processadores dedicados.", "Usam memória virtual do hypervisor."], ans: 1, expl: "Containers compartilham o kernel do host e só precisam iniciar a aplicação e dependências." },
        { q: "É possível rodar VMs e containers no mesmo servidor?", opts: ["Não, são tecnologias incompatíveis.", "Sim, containers podem rodar dentro de VMs.", "Sim, mas apenas em hardware específico.", "Apenas no Linux."], ans: 1, expl: "Na prática, muitas empresas rodam containers dentro de VMs, combinando o isolamento de ambas." },
        { q: "Um container ocupa tipicamente:", opts: ["Gigabytes de disco.", "Megabytes a poucos gigabytes.", "Apenas bytes.", "Exatamente o mesmo que uma VM."], ans: 1, expl: "Containers são leves porque não incluem um SO completo — apenas a aplicação e suas dependências." },
        { q: "O isolamento de um container é menos completo que o de uma VM porque:", opts: ["Containers não têm isolamento.", "Containers compartilham o kernel do host.", "VMs não têm hypervisor.", "Containers usam mais memória."], ans: 1, expl: "Compartilhar o kernel torna containers mais leves, mas significa que uma falha no kernel afeta todos." },
        { q: "Quando é recomendável usar VMs em vez de containers?", opts: ["Para microserviços.", "Quando é necessário rodar diferentes SOs ou exigir isolamento total de kernel.", "Para deploy rápido no CI/CD.", "Quando o app é uma API REST simples."], ans: 1, expl: "VMs são preferíveis quando é necessário rodar diferentes SOs ou garantir isolamento completo de kernel." },
        { q: "Qual é a principal vantagem de containers em ambientes de produção?", opts: ["Eliminam a necessidade de testes.", "Permitir alta densidade e orquestração eficiente de muitas aplicações.", "Só funcionam com hardware proprietário.", "Não precisam de rede para se comunicar."], ans: 1, expl: "Containers são leves e escaláveis, permitindo rodar dezenas de aplicações no mesmo hardware." },
        { q: "Cgroups, usados no isolamento de containers, servem para:", opts: ["Gerenciar versões de imagens.", "Limitar e monitorar recursos como CPU e memória.", "Criar interfaces gráficas.", "Gerenciar DNS e rede."], ans: 1, expl: "Cgroups (control groups) do Linux limitam e contabilizam o uso de recursos por container." }
      ]
    },
    {
      id: "dockerfile",
      title: "Dockerfile",
      subtitle: "O blueprint que define como uma imagem Docker é construída.",
      blocks: [
        { t: "h", h: "O que é um Dockerfile?" },
        { t: "p", p: "Um Dockerfile é um arquivo de texto com instruções que o Docker usa para montar uma imagem automaticamente. Cada instrução cria uma camada (layer) na imagem, e essas camadas são cacheadas para acelerar builds futuros." },
        { t: "code", c: String.raw`# Dockerfile básico para uma app Node.js
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .

EXPOSE 3000

CMD ["node", "server.js"]`, lang: "bash" },
        { t: "h", h: "Instruções essenciais" },
        { t: "lst", items: [
          "FROM: define a imagem base (ex.: node:20-alpine, python:3.11-slim).",
          "RUN: executa comandos durante o build (instalar pacotes, compilar).",
          "COPY: copia arquivos do host para dentro da imagem.",
          "ADD: como COPY, mas额外 suporta URLs e extração automática de tarballs.",
          "WORKDIR: define o diretório de trabalho dentro do container.",
          "CMD: comando padrão executado ao iniciar o container.",
          "ENTRYPOINT: como CMD, mas não pode ser sobrescrito facilmente.",
          "EXPOSE: documenta quais portas o container usa (não publica portas)."
        ]},
        { t: "h", h: "CMD vs ENTRYPOINT" },
        { t: "p", p: "CMD define o comando padrão que roda quando o container inicia. ENTRYPOINT define o executável principal. A diferença prática: CMD pode ser sobrescrito no docker run, enquanto ENTRYPOINT não — a menos que use --entrypoint." },
        { t: "code", c: String.raw`# Só CMD: rodar é sobrescrever
CMD ["python", "app.py"]
# docker run minha-imagem outro-comando  → roda outro-comando

# ENTRYPOINT fixo + CMD como argumento
ENTRYPOINT ["python"]
CMD ["app.py"]
# docker run minha-imagem             → python app.py
# docker run minha-imagem teste.py    → python teste.py`, lang: "bash" },
        { t: "h", h: "Multi-stage builds" },
        { t: "p", p: "Multi-stage builds permitem usar múltiplas instruções FROM. A primeira etapa compila o código, e apenas a segunda copia os artefatos finais para a imagem final — reduzindo drasticamente o tamanho da imagem." },
        { t: "code", c: String.raw`# Etapa de build
FROM node:20 AS builder
WORKDIR /app
COPY . .
RUN npm ci && npm run build

# Etapa final (apenas os artefatos)
FROM node:20-alpine
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
EXPOSE 3000
CMD ["node", "dist/server.js"]`, lang: "bash" },
        { t: "h", h: ".dockerignore" },
        { t: "p", p: "O arquivo .dockerignore evita copiar arquivos desnecessários para a imagem (node_modules, .git, testes). Isso reduz o tempo de build e o tamanho da imagem." },
        { t: "code", c: String.raw`# Exemplo de .dockerignore
node_modules
.git
.env
*.md
dist
__pycache__`, lang: "bash" },
        { t: "note", p: "Cada instrução FROM cria uma nova etapa no build. Use --target em docker build --target=<etapa> para parar em uma etapa específica — útil para depurar o build." },
        { t: "warn", p: "Não coloque dados sensíveis (senhas, chaves de API) diretamente no Dockerfile. Use variáveis de ambientes ou secrets em runtime, nunca hardcoded no código da imagem." }
      ],
      quiz: [
        { q: "A instrução FROM em um Dockerfile serve para:", opts: ["Definir o diretório de trabalho.", "Copiar arquivos do host.", "Definir a imagem base do build.", "Expor portas do container."], ans: 2, expl: "FROM define a imagem base a partir da qual todas as outras instruções são executadas." },
        { q: "CMD e ENTRYPOINT diferem porque:", opts: ["CMD é para Windows e ENTRYPOINT para Linux.", "CMD pode ser sobrescrito no docker run; ENTRYPOINT define o executável principal.", "São sinônimos, ambos definem o comando padrão.", "ENTRYPOINT só funciona com imagens Python."], ans: 1, expl: "CMD define o comando padrão que pode ser substituído; ENTRYPOINT fixa o executável principal." },
        { q: "O que o arquivo .dockerignore faz?", opts: ["Ignora erros durante o build.", "Impede cópia de arquivos desnecessários para a imagem.", "Remove containers duplicados.", "Ignora variáveis de ambiente."], ans: 1, expl: "Evita copiar node_modules, .git e outros arquivos irrelevantes, reduzindo tamanho e tempo de build." },
        { q: "Multi-stage builds reduzem o tamanho da imagem porque:", opts: ["Usam compressão automática.", "Separam etapa de build da imagem final, copiando apenas artefatos necessários.", "Removem automaticamente o sistema operacional.", "Combinam múltiplas imagens em uma."], ans: 1, expl: "A etapa final contém apenas os artefatos compilados, sem ferramentas de build ou código-fonte." },
        { q: "O que a instrução COPY faz?", opts: ["Baixa imagens de um registry.", "Copia arquivos do host para dentro da imagem.", "Move containers entre servidores.", "Instala pacotes do sistema."], ans: 1, expl: "COPY transfere arquivos do sistema de arquivos do host para o interior da imagem Docker." },
        { q: "WORKDIR define:", opts: ["O comando que o container executa ao iniciar.", "O diretório de trabalho dentro da imagem/container.", "O diretório onde fica o Dockerfile.", "A porta de exposição padrão."], ans: 1, expl: "WORKDIR muda o diretório atual dentro da imagem; todos os comandos seguintes rodam nele." },
        { q: "A instrução EXPOSE:", opts: ["Publica a porta na rede do host.", "Documenta quais portas o container pretende usar.", "Fecha portas no container.", "Configura o firewall do host."], ans: 1, expl: "EXPOSE é apenas documentação; para realmente mapear portas, use -p no docker run." },
        { q: "Por que não se deve colocar senhas no Dockerfile?", opts: ["O Dockerfile não aceita texto.", "Senhas ficam salvas nas camadas da imagem, acessíveis por qualquer pessoa.", "Dockerfile só aceita números.", "O build falha automaticamente."], ans: 1, expl: "Camadas do Dockerfile são visíveis via docker history; senhas ficam expostas. Use secrets em runtime." },
        { q: "Um multi-stage build com FROM ... AS builder permite:", opts: ["Nomear uma etapa para copiar arquivos entre etapas.", "Evitar o uso de COPY.", "Remover o ENTRYPOINT.", "Rodar o container em background."], ans: 0, expl: "Nomear uma etapa com AS permite usar COPY --from=<nome> para copiar artefatos entre etapas." },
        { q: "O comando npm ci --only=production em um RUN:", opts: ["Instala apenas dependências de produção, reduzindo o tamanho final.", "Instala todas as dependências automaticamente.", "Remove o node_modules existente.", "Não tem efeito no tamanho da imagem."], ans: 0, expl: "Instalar apenas production dependencies reduz o node_modules e, consequentemente, o tamanho da imagem." }
      ]
    },
    {
      id: "docker-imagens",
      title: "Imagens Docker",
      subtitle: "Camadas, construção, versionamento e limpeza.",
      blocks: [
        { t: "h", h: "O que são imagens Docker?" },
        { t: "p", p: "Uma imagem Docker é um modelo somente leitura que contém tudo necessário para rodar uma aplicação: código, runtime, bibliotecas e configurações. Imagens são compostas por camadas (layers) empilhadas — cada instrução do Dockerfile gera uma nova camada." },
        { t: "code", c: String.raw`# Listar imagens locais
docker images

# Saída exemplo:
# REPOSITORY   TAG       IMAGE ID       CREATED      SIZE
# nginx        latest    a8758716bb6a   2 weeks ago  187MB
# node         20-alpine 123abc456def   1 month ago  170MB`, lang: "bash" },
        { t: "h", h: "Construindo uma imagem" },
        { t: "p", p: "O comando docker build constrói uma imagem a partir de um Dockerfile. O contexto do build é o diretório enviado ao daemon — geralmente o diretório atual." },
        { t: "code", c: String.raw`# Build básico
docker build -t minha-app:1.0 .

# Build com outro Dockerfile
docker build -f Dockerfile.prod -t minha-app:prod .

# Build sem cache
docker build --no-cache -t minha-app:1.0 .`, lang: "bash" },
        { t: "h", h: "Sistema de camadas (layers)" },
        { t: "p", p: "Cada instrução FROM, RUN, COPY gera uma camada. Camadas são cacheadas: se você mudar apenas o COPY do código-fonte, as camadas anteriores (instalação de dependências) ficam no cache, acelerando o build." },
        { t: "code", c: String.raw`# Ver as camadas de uma imagem
docker history nginx

# Otimizar cache: dependências primeiro, código depois
COPY package*.json ./
RUN npm ci
COPY . .`, lang: "bash" },
        { t: "h", h: "Tagging e versionamento" },
        { t: "p", p: "Tags identificam versões de imagens. A tag latest é implícita mas perigosa — pode mudar sem aviso. Sempre use tags específicas (v1.0, v2.1) para controle de versão." },
        { t: "code", c: String.raw`# Tagar uma imagem existente
docker tag minha-app:1.0 registry.io/meu-projeto/minha-app:1.0

# Listar imagens dangling (sem tag)
docker images --filter "dangling=true"

# Remover imagens dangling
docker image prune`, lang: "bash" },
        { t: "h", h: "Limpeza de imagens" },
        { t: "p", p: "Imagens não utilizadas ocupam espaço. O docker system prune remove containers parados, redes não usadas e imagens dangling — uma limpeza geral do sistema Docker." },
        { t: "code", c: String.raw`# Remover imagem específica
docker rmi nginx:latest

# Limpeza geral (remove tudo não utilizado)
docker system prune -a

# Limpar apenas imagens não usadas
docker image prune -a`, lang: "bash" },
        { t: "note", p: "Camadas são compartilhadas entre imagens. Se nginx e node usam Alpine como base, a camada do Alpine é armazenada apenas uma vez — economizando espaço em disco." },
        { t: "warn", p: "Nunca faça docker rmi de uma imagem que está sendo usada por containers em execução. Primeiro pare e remova os containers, depois a imagem." }
      ],
      quiz: [
        { q: "Uma imagem Docker é composta por:", opts: ["Um único arquivo executável.", "Camadas (layers) empilhadas.", "Apenas variáveis de ambiente.", "Um banco de dados interno."], ans: 1, expl: "Cada instrução do Dockerfile gera uma camada; imagens são o resultado empilhado dessas camadas." },
        { q: "O que docker build -t minha-app:1.0 . faz?", opts: ["Executa o container com a tag 1.0.", "Constrói uma imagem do Dockerfile no diretório atual com tag minha-app:1.0.", "Baixa a imagem do Docker Hub.", "Remove a imagem com tag 1.0."], ans: 1, expl: "docker build constrói uma imagem a partir do Dockerfile no contexto (.) e a marca com a tag informada." },
        { q: "A tag latest em imagens Docker:", opts: ["É sempre a versão mais estável.", "Pode mudar sem aviso ao puxar, não é recomendada para produção.", "Só funciona no Docker Hub.", "Indica que a imagem é oficial."], ans: 1, expl: "latest é mutável e pode apontar para versões diferentes a qualquer momento; use tags específicas." },
        { q: "O cache de camadas do Docker melhora o build porque:", opts: ["Baixa imagens mais rápido da Internet.", "Camadas não modificadas são reutilizadas entre builds.", "Comprime automaticamente os arquivos.", "Remove camadas antigas automaticamente."], ans: 1, expl: "Se instruções anteriores não mudaram, o Docker reutiliza as camadas em cache, acelerando builds." },
        { q: "O comando docker image prune remove:", opts: ["Todos os containers.", "Apenas imagens sem tag (dangling).", "Todas as imagens locais.", "Apenas containers parados."], ans: 1, expl: "docker image prune remove imagens que não têm tag e não estão sendo usadas por nenhum container." },
        { q: "Docker history mostra:", opts: ["O histórico de execução de containers.", "As camadas que compõem uma imagem e quando foram criadas.", "O log de erros durante o build.", "As portas expostas de um container."], ans: 1, expl: "docker history lista as camadas de uma imagem, mostrando cada instrução que a criou e seu tamanho." },
        { q: "Para otimizar o cache de builds, qual ordem é recomendada?", opts: ["Copiar código primeiro, depois instalar dependências.", "Instalar dependências primeiro, depois copiar código.", "Não existe ordem recomendada.", "Fazer tudo em uma única instrução."], ans: 1, expl: "Dependências mudam menos que código; instalar primeiro permite que essa camada fique em cache." },
        { q: "O que docker system prune -a faz?", opts: ["Remove apenas containers parados.", "Remove containers, redes, imagens e build cache não utilizados.", "Remove apenas imagens do Docker Hub.", "Remove o Docker do sistema."], ans: 1, expl: "Faz uma limpeza geral: containers parados, redes não usadas, imagens e cache de build." },
        { q: "Camadas são compartilhadas entre imagens porque:", opts: ["O Docker copia arquivos automaticamente.", "O mesmo conteúdo não é armazenado duas vezes em disco.", "Imagens são sempre idênticas.", "Não existe camadas em containers."], ans: 1, expl: "O Docker usa deduplicação: camadas idênticas (como Alpine base) são armazenadas apenas uma vez." },
        { q: "Para marcar uma imagem com um novo nome/tag, usa-se:", opts: ["docker rename", "docker tag", "docker mv", "docker label"], ans: 1, expl: "docker tag cria uma nova referência (tag) para uma imagem existente, sem copiar os dados." }
      ]
    },
    {
      id: "docker-compose",
      title: "Docker Compose",
      subtitle: "Gerenciando múltiplos containers com um único arquivo YAML.",
      blocks: [
        { t: "h", h: "O que é Docker Compose?" },
        { t: "p", p: "Docker Compose é uma ferramenta para definir e rodar múltiplos containers com um único arquivo de configuração YAML. É ideal para ambientes de desenvolvimento, testes e pipelines onde uma aplicação depende de vários serviços (banco, cache, fila, etc.)." },
        { t: "code", c: String.raw`# Verificar versão do Compose
docker compose version

# Comando antigo (docker-compose v1)
docker-compose --version`, lang: "bash" },
        { t: "h", h: "Estrutura de um docker-compose.yml" },
        { t: "code", c: String.raw`# docker-compose.yml
version: "3.9"

services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - DATABASE_URL=postgres://postgres:secret@db:5432/mydb
    depends_on:
      - db

  db:
    image: postgres:16-alpine
    environment:
      POSTGRES_PASSWORD: secret
      POSTGRES_DB: mydb
    volumes:
      - pgdata:/var/lib/postgresql/data

volumes:
  pgdata:`, lang: "yaml" },
        { t: "h", h: "Comandos essenciais" },
        { t: "code", c: String.raw`# Subir todos os services definidos
docker compose up -d

# Ver status dos containers
docker compose ps

# Parar e remover containers, redes e volumes
docker compose down

# Ver logs em tempo real
docker compose logs -f app

# Rebuild e reiniciar um serviço específico
docker compose up -d --build app`, lang: "bash" },
        { t: "h", h: "Services, networks e volumes" },
        { t: "p", p: "No Compose, cada container é chamado de service. Networks e volumes são declarados na raiz e compartilhados entre services — permitindo comunicação e persistência de dados." },
        { t: "code", c: String.raw`services:
  web:
    image: nginx
    networks:
      - frontend
  api:
    build: ./api
    networks:
      - frontend
      - backend

networks:
  frontend:
  backend:

volumes:
  pgdata:`, lang: "yaml" },
        { t: "h", h: "Escalar serviços" },
        { t: "p", p: "Docker Compose permite escalar serviços replicando containers. Isso é útil para load balancing e testes de carga — basta usar --scale." },
        { t: "code", c: String.raw`# Rodar 3 réplicas do serviço worker
docker compose up -d --scale worker=3

# Ver quantos workers estão rodando
docker compose ps worker`, lang: "bash" },
        { t: "note", p: "Na versão 3 do Compose, depends_on garante que os serviços dependentes iniciem antes — mas não espera o serviço estar pronto, apenas que o container tenha iniciado. Para garantir pronto, use health checks." },
        { t: "warn", p: "O docker-compose.yml do desenvolvimento geralmente difere do de produção. Nunca use volumes de desenvolvimento em produção, e evite expor portas desnecessárias." }
      ],
      quiz: [
        { q: "Docker Compose é usado para:", opts: ["Criar uma única imagem Docker.", "Definir e gerenciar múltiplos containers com um arquivo YAML.", "Compilar código em containers.", "Substituir o Dockerfile."], ans: 1, expl: "Compose define múltiplos services, networks e volumes em um único arquivo de configuração." },
        { q: "O arquivo de configuração do Compose se chama:", opts: ["Dockerfile.yml", "docker-compose.yml", "config.yaml", "containers.json"], ans: 1, expl: "docker-compose.yml é o padrão para definir serviços, redes e volumes no Compose." },
        { q: "O comando docker compose up -d:", opts: ["Para todos os containers.", "Cria e inicia os containers em background.", "Remove todos os containers.", "Exibe logs de todos os containers."], ans: 1, expl: "up -d cria e inicia os containers definidos, rodando em background (detached mode)." },
        { q: "A chave depends_on em Compose garante que:", opts: ["O serviço dependente espere o serviço ser totalmente pronto.", "O serviço dependente seja iniciado antes do serviço do qual depende.", "Os serviços sejam removidos juntos.", "Os serviços compartilhem a mesma imagem."], ans: 1, expl: "depends_on garante que o container dependente inicie antes, mas não espera o serviço estar pronto." },
        { q: "Volumes declarados na raiz do Compose servem para:", opts: ["Expor portas dos containers.", "Persistir dados entre execuções do container.", "Definir variáveis de ambiente.", "Compilar o código-fonte."], ans: 1, expl: "Volumes permitem que dados (como bancos de dados) sobrevivam à remoção e recriação de containers." },
        { q: "Como escalar um serviço no Compose?", opts: ["docker compose scale service=3", "docker compose up -d --scale service=3", "docker compose replicas 3 service", "Não é possível escalar no Compose."], ans: 1, expl: "Use --scale service=N no docker compose up para criar N réplicas de um serviço." },
        { q: "docker compose down faz:", opts: ["Apenas para os containers.", "Para, remove containers e redes criados pelo Compose.", "Remove apenas o arquivo de configuração.", "Limpa imagens Docker do sistema."], ans: 1, expl: "down para e remove containers, redes e volumes padrão criados pelo docker compose up." },
        { q: "No Compose, networks definidas na raiz são:", opts: ["Usadas apenas para containers externos.", "Compartilhadas entre todos os services que as referenciam.", "Criadas automaticamente pelo Docker Hub.", "Apenas para acesso à Internet."], ans: 1, expl: "Redes declaradas no Compose são criadas e compartilhadas entre services que as referenciam." },
        { q: "O que docker compose logs -f app faz?", opts: ["Remove os logs do serviço app.", "Exibe logs em tempo real do serviço app.", "Salva os logs em arquivo.", "Inicia o serviço app."], ans: 1, expl: "logs -f segui (follow) os logs do serviço especificado em tempo real, como tail -f." },
        { q: "Por que não se deve usar --build em produção?", opts: ["--build não funciona em produção.", "Produção deve usar imagens pré-construídas, não buildar no deploy.", "É proibido pela licença do Docker.", "--build destrói volumes existentes."], ans: 1, expl: "Em produção, builds devem ser feitos no CI/CD; o deploy deve apenas rodar imagens já construídas e testadas." }
      ]
    },
    {
      id: "docker-volumes",
      title: "Volumes e Persistência",
      subtitle: "Como manter dados vivos mesmo quando containers são removidos.",
      blocks: [
        { t: "h", h: "Por que volumes são necessários?" },
        { t: "p", p: "Por padrão, containers são efêmeros: quando um container é removido, todos os dados dentro dele são perdidos. Volumes são o mecanismo do Docker para persistir dados independentemente do ciclo de vida dos containers — essenciais para bancos de dados, uploads de usuário e logs." },
        { t: "h", h: "Tipos de armazenamento" },
        { t: "lst", items: [
          "Named volumes: gerenciados pelo Docker, dados persistentes em diretório do host.",
          "Bind mounts: mapeiam diretório do host diretamente para dentro do container.",
          "tmpfs mounts: dados em memória, não persistem após reinicialização."
        ]},
        { t: "h", h: "Named Volumes" },
        { t: "p", p: "Named volumes são criados e gerenciados pelo Docker. Os dados ficam em um diretório do Docker no host, isolados da aplicação — a melhor opção para persistir dados de bancos de dados." },
        { t: "code", c: String.raw`# Criar um volume nomeado
docker volume create meubanco

# Listar volumes
docker volume ls

# Rodar container com volume
docker run -d \
  --name pgdb \
  -v meubanco:/var/lib/postgresql/data \
  -e POSTGRES_PASSWORD=secret \
  postgres:16-alpine

# Verificar detalhes do volume
docker volume inspect meubanco`, lang: "bash" },
        { t: "h", h: "Bind mounts" },
        { t: "p", p: "Bind mounts mapeiam um diretório específico do host para o container. São úteis em desenvolvimento para sincronizar código em tempo real, mas devem ser evitados em produção por depender da estrutura do host." },
        { t: "code", c: String.raw`# Mapear diretório do host para o container
docker run -d \
  --name webdev \
  -v $(pwd)/src:/app/src \
  -p 3000:3000 \
  node:20-alpine npm run dev`, lang: "bash" },
        { t: "h", h: "Gerenciando volumes" },
        { t: "code", c: String.raw`# Listar volumes
docker volume ls

# Remover volume específico
docker volume rm meubanco

# Remover volumes órfãos (não usados por nenhum container)
docker volume prune

# Remover container e seus volumes
docker rm -v meucontainer`, lang: "bash" },
        { t: "note", p: "Named volumes persistem mesmo após docker compose down. Para removê-los, use docker compose down -v — mas isso apaga todos os dados!" },
        { t: "warn", p: "Bind mounts podem expor o sistema de arquivos do host ao container. Em produção, sempre use named volumes para dados sensíveis — nunca bind mounts de diretórios do sistema." }
      ],
      quiz: [
        { q: "Por que containers precisam de volumes?", opts: ["Para rodar scripts de build.", "Para persistir dados mesmo quando o container é removido.", "Para expor portas na rede.", "Para acelerar o build de imagens."], ans: 1, expl: "Containers são efêmeros; volumes mantêm dados vivos independentemente do ciclo de vida dos containers." },
        { q: "A diferença principal entre named volume e bind mount é:", opts: ["Named volumes são mais lentos.", "Named volumes são gerenciados pelo Docker; bind mounts mapeiam diretório específico do host.", "Bind mounts só funcionam no Linux.", "Named volumes não persistem dados."], ans: 1, expl: "Named volumes gerenciam dados em diretório do Docker; bind mounts mapeiam caminhos específicos do host." },
        { q: "O que docker volume ls mostra?", opts: ["Containers em execução.", "Todos os volumes criados no Docker.", "Imagens baixadas.", "Redes configuradas."], ans: 1, expl: "Lista todos os volumes nomeados criados e gerenciados pelo Docker." },
        { q: "O comando docker volume prune remove:", opts: ["Todos os volumes, incluindo os em uso.", "Apenas volumes não utilizados por nenhum container.", "Apenas bind mounts.", "Containers com volumes."], ans: 1, expl: "Remove apenas volumes que não estão associados a nenhum container ativo." },
        { q: "Em desenvolvimento, bind mounts são úteis porque:", opts: ["Criam backups automáticos.", "Permitem sincronizar código do host com o container em tempo real.", "Eliminam a necessidade de volumes.", "Tornam containers mais seguros."], ans: 1, expl: "Permitem editar código no host e ver mudanças refletidas imediatamente dentro do container." },
        { q: "Um tmpfs mount:", opts: ["Persiste dados em disco.", "Armazena dados em memória, que são perdidos ao parar o container.", "Funciona apenas no Windows.", "Substitui named volumes em produção."], ans: 1, expl: "tmpfs guarda dados na memória RAM; são ideais para dados temporários sensíveis que não devem persistir." },
        { q: "Para remover um container e seus volumes, usa-se:", opts: ["docker rm container", "docker rm -v container", "docker volume rm container", "docker rmi container"], ans: 1, expl: "A flag -v no docker rm remove também os volumes anônimos associados ao container." },
        { q: "docker compose down -v faz:", opts: ["Remove apenas containers.", "Remove containers e volumes declarados no Compose.", "Remove apenas a rede padrão.", "Remove imagens usadas."], ans: 1, expl: "A flag -v remove os volumes declarados no docker-compose.yml junto com os containers." },
        { q: "O diretório /var/lib/postgresql/data em um container PostgreSQL é:", opts: ["O diretório de configuração de rede.", "O caminho onde o PostgreSQL armazena os dados do banco.", "O diretório de logs do container.", "O diretório temporário de build."], ans: 1, expl: "É o diretório de dados do PostgreSQL; mapeá-lo para um volume garante persistência dos dados." },
        { q: "Em produção, é recomendável usar bind mounts porque:", opts: ["São mais rápidos que named volumes.", "Facilitam deploys com CI/CD.", "NÃO — bind mounts expõem o sistema do host; prefira named volumes.", "São obrigatórios para bancos de dados."], ans: 2, expl: "Bind mounts expõem o filesystem do host; em produção, use named volumes para isolamento e portabilidade." }
      ]
    },
    {
      id: "docker-redes",
      title: "Redes Docker",
      subtitle: "Como containers se comunicam entre si e com o mundo exterior.",
      blocks: [
        { t: "h", h: "Por que redes importam?" },
        { t: "p", p: "Por padrão, containers Docker não conseguem se comunicar entre si por IP ou nome. Redes Docker criam abstrações de rede que permitem containers descobrirem e se comunicarem entre si de forma segura e configurável." },
        { t: "h", h: "Tipos de redes" },
        { t: "lst", items: [
          "bridge: rede padrão do Docker; containers se comunicam via IP dentro do bridge.",
          "host: remove o isolamento de rede; container usa a rede diretamente do host.",
          "overlay: conecta containers em hosts diferentes (Swarm/cluster).",
          "none: desativa completamente a rede do container."
        ]},
        { t: "h", h: "Bridge network" },
        { t: "p", p: "A bridge é a rede padrão. Containers na mesma bridge se comunicam pelo nome do serviço (DNS interno do Docker). É o tipo mais usado em desenvolvimento e na maioria dos cenários." },
        { t: "code", c: String.raw`# Criar rede bridge
docker network create minha-rede

# Listar redes
docker network ls

# Rodar containers na mesma rede
docker run -d --name db --network minha-rede \
  -e POSTGRES_PASSWORD=secret postgres:16-alpine

docker run -d --name app --network minha-rede \
  -e DATABASE_URL=postgres://postgres:secret@db:5432/app \
  myapp:1.0`, lang: "bash" },
        { t: "h", h: "Conectando containers a redes" },
        { t: "code", c: String.raw`# Conectar container existente a uma rede
docker network connect minha-rede meu-container

# Desconectar
docker network disconnect minha-rede meu-container

# Ver detalhes de uma rede (IPs dos containers)
docker network inspect minha-rede`, lang: "bash" },
        { t: "h", h: "Host e None networks" },
        { t: "code", c: String.raw`# Host network: container usa a rede do host diretamente
docker run --network host nginx

# None network: sem rede
docker run --network none alpine ping -c 3 google.com
# falha, pois não há rede configurada`, lang: "bash" },
        { t: "note", p: "Na rede bridge, o Docker roda um DNS interno que resolve nomes de containers para IPs. Isso permite que app acesse db pelo nome 'db' em vez de IP — muito mais prático." },
        { t: "warn", p: "Não exponha serviços internos (bancos, filas) com -p para o host. Mantenha-os em redes internas e exponha apenas o necessário — a regra do menor privilégio." }
      ],
      quiz: [
        { q: "A rede bridge padrão do Docker permite que:", opts: ["Containers se comuniquem por IP sem precisar de configuração.", "Containers acessem a Internet automaticamente.", "Containers se comuniquem por nome do container.", "Todas as anteriores."], ans: 3, expl: "A bridge fornece IP, Internet via NAT e DNS interno para comunicação por nome entre containers." },
        { q: "Para que dois containers se comuniquem pelo nome do serviço, eles precisam:", opts: ["Estar na mesma máquina.", "Estar na mesma rede Docker.", "Usar a mesma imagem base.", "Ter o mesmo IP."], ans: 1, expl: "Containers só resolvem nomes via DNS interno do Docker se estiverem na mesma rede." },
        { q: "O tipo de rede host faz:", opts: ["Isola completamente o container da rede.", "Remove o isolamento de rede; container usa a rede do host.", "Cria uma rede privada entre containers.", "Conecta containers em máquinas diferentes."], ans: 1, expl: "Host remove o namespace de rede; o container acessa a rede diretamente como se estivesse no host." },
        { q: "A rede none:", opts: ["Conecta todos os containers.", "Remove qualquer rede do container.", "Cria uma rede pública.", "É a mesma que bridge."], ans: 1, expl: "None desativa completamente a rede do container — útil para containers que não precisam de rede." },
        { q: "O comando docker network create faz:", opts: ["Cria um container.", "Cria uma nova rede Docker para comunicação entre containers.", "Remove todas as redes existentes.", "Conecta dois containers."], ans: 1, expl: "Cria uma rede onde containers podem ser conectados e se comunicar entre si." },
        { q: "A rede overlay é usada para:", opts: ["Comunicação entre containers no mesmo host.", "Comunicação entre containers em hosts diferentes (cluster/Swarm).", "Apenas para containers Windows.", "Conectar containers à Internet."], ans: 1, expl: "Overlay conecta containers distribuídos em múltiplos hosts físicos ou virtuais." },
        { q: "O que docker network inspect mostra?", opts: ["O IP de todos os containers.", "Detalhes da rede incluindo containers conectados e configurações.", "O histórico de uso da rede.", "As portas expostas de cada container."], ans: 1, expl: "Mostra configurações detalhadas da rede, incluindo subnet, gateway e todos os containers conectados." },
        { q: "Por que não se deve expor bancos de dados com -p?", opts: ["Portas não funcionam com bancos de dados.", "Expor portas torna o banco acessível externamente, risco de segurança.", "Bancos de dados não suportam portas.", "-p é apenas para imagens oficiais."], ans: 1, expl: "Bancos devem ficar em rede interna; apenas o app deve acessá-lo — exposição pública é risco de segurança." },
        { q: "Um container pode pertencer a quantas redes simultaneamente?", opts: ["Apenas uma.", "Duas, no máximo.", "Quantas forem necessárias.", "Nenhuma, é um ou outro."], ans: 2, expl: "Um container pode ser conectado a múltiplas redes simultaneamente via docker network connect." },
        { q: "Na bridge network, o DNS interno do Docker resolve:", opts: ["Endereços IP externos.", "Nomes de containers para seus IPs internos.", "Nomes de domínio externos.", "Portas mapeadas no host."], ans: 1, expl: "O DNS interno do Docker permite que containers acessem outros pelo nome do container/serviço." }
      ]
    },
    {
      id: "docker-env",
      title: "Variáveis de Ambiente e Secrets",
      subtitle: "Configurando containers sem colar dados sensíveis na imagem.",
      blocks: [
        { t: "h", h: "Por que variáveis de ambiente?" },
        { t: "p", p: "Variáveis de ambiente permitem configurar comportamento de containers sem alterar a imagem. É o mecanismo padrão para passar configurações como portas, senhas, URLs de banco e flags de modo — mantendo a imagem reutilizável e segura." },
        { t: "h", h: "Definindo variáveis em Dockerfiles" },
        { t: "p", p: "A instrução ENV no Dockerfile define variáveis que estarão disponíveis tanto no build quanto no runtime do container." },
        { t: "code", c: String.raw`# No Dockerfile
FROM node:20-alpine
ENV NODE_ENV=production
ENV PORT=3000

EXPOSE $PORT
CMD ["node", "server.js"]`, lang: "bash" },
        { t: "h", h: "Passando variáveis no docker run" },
        { t: "code", c: String.raw`# Usar --env (ou -e)
docker run -d \
  -e DATABASE_URL=postgres://user:pass@db:5432/mydb \
  -e NODE_ENV=production \
  -e SECRET_KEY=abc123 \
  myapp:1.0

# Passar variável de um arquivo .env
docker run --env-file .env myapp:1.0`, lang: "bash" },
        { t: "h", h: "Arquivo .env" },
        { t: "p", p: "Um arquivo .env lista todas as variáveis em pares chave=valor. O Docker Compose carrega automaticamente o .env do diretório atual, ou você pode especificar outro com --env-file." },
        { t: "code", c: String.raw`# .env (na raiz do projeto)
DATABASE_URL=postgres://user:secret@db:5432/mydb
REDIS_URL=redis://cache:6379
SECRET_KEY=minha-chave-super-secreta
NODE_ENV=production`, lang: "bash" },
        { t: "h", h: "ARG no Dockerfile" },
        { t: "p", p: "ARG define variáveis disponíveis apenas durante o build (não no runtime). É útil para parametrizar versões de dependências sem deixar na imagem final." },
        { t: "code", c: String.raw`# ARG: só existe durante o build
ARG NODE_VERSION=20
FROM node:\${NODE_VERSION}-alpine

ARG BUILD_ENV=production
RUN echo "Building for $BUILD_ENV"`, lang: "bash" },
        { t: "h", h: "Docker Secrets" },
        { t: "p", p: "Docker Secrets é o mecanismo seguro para dados sensíveis (senhas, chaves, tokens). Disponível no Docker Swarm ou via Compose, secrets são montados como arquivos em /run/secrets dentro do container — nunca ficam na imagem nem em variáveis de ambiente em texto plano." },
        { t: "code", c: String.raw`# docker-compose.yml com secrets
services:
  db:
    image: postgres:16-alpine
    secrets:
      - db_password
    environment:
      POSTGRES_PASSWORD_FILE: /run/secrets/db_password

secrets:
  db_password:
    file: ./secrets/db_password.txt`, lang: "yaml" },
        { t: "note", p: "Variáveis de ambiente ficam visíveis em docker inspect e docker history. Para dados realmente sensíveis, prefira Docker Secrets — que usam arquivos montados em runtime, nunca expostos na imagem." },
        { t: "warn", p: "Nunca faça commit de arquivos .env com senhas reais no repositório. Adicione .env ao .gitignore e use .env.example como template para a equipe." }
      ],
      quiz: [
        { q: "A instrução ENV no Dockerfile define:", opts: ["Variáveis que só existem durante o build.", "Variáveis disponíveis tanto no build quanto no runtime.", "Secrets criptografados.", "Argumentos de linha de comando."], ans: 1, expl: "ENV define variáveis acessíveis tanto durante o build (RUN) quanto quando o container executa." },
        { q: "A instrução ARG no Dockerfile:", opts: ["Fica disponível no runtime do container.", "Só existe durante o build, não no container final.", "Define variáveis de rede.", "Cria volumes automaticamente."], ans: 1, expl: "ARG é usado apenas durante o build; não persiste na imagem final nem no container em execução." },
        { q: "O comando docker run -e VAR=valor:", opts: ["Remove a variável VAR do container.", "Passa a variável VAR com o valor indicado para o container.", "Cria um novo container com variável VAR no host.", "Modifica o Dockerfile."], ans: 1, expl: "A flag -e (--env) injeta a variável de ambiente diretamente no container em execução." },
        { q: "Um arquivo .env no diretório do projeto:", opts: ["É lido automaticamente pelo Docker Compose.", "Precisa ser convertido para binário.", "Só funciona no Windows.", "Substitui o Dockerfile."], ans: 0, expl: "Docker Compose carrega automaticamente o .env do diretório atual, aplicando as variáveis aos services." },
        { q: "Docker Secrets são mais seguros que variáveis de ambiente porque:", opts: ["São codificados em Base64.", "São montados como arquivos em runtime, não ficam na imagem nem em docker inspect.", "São compartilhados publicamente.", "São criptografados em disco."], ans: 1, expl: "Secrets aparecem como arquivos em /run/secrets/, nunca ficam expostos em variáveis de ambiente da imagem." },
        { q: "Onde secrets ficam disponíveis dentro do container?", opts: ["Em variáveis de ambiente exportadas.", "Como arquivos montados em /run/secrets/.", "No diretório /app/config/.", "No Dockerfile."], ans: 1, expl: "Secrets são montados em /run/secrets/ como arquivos, lidos pela aplicação conforme necessário." },
        { q: "Por que ARG não deve ser usada para senhas?", opts: ["ARG não aceita texto.", "ARG fica armazenada nas camadas da imagem e pode ser vista via docker history.", "ARG só funciona com números.", "ARG é removida automaticamente."], ans: 1, expl: "ARGs ficam em camadas visíveis via docker history; use secrets ou variáveis de runtime para dados sensíveis." },
        { q: "No docker-compose.yml, a chave secrets:", opts: ["Define variáveis de ambiente para todos os services.", "Declara quais secrets devem ser montados nos containers.", "Cria chaves de criptografia.", "Remove dados sensíveis dos containers."], ans: 1, expl: "Declara os secrets (de arquivos ou externos) e quais services recebem acesso a eles." },
        { q: "Um erro comum é colocar senhas em:", opts: ["docker-compose.yml", "Dockerfile via ENV ou RUN", "Arquivo .env commitado no repositório", "Todas as anteriores — todas são práticas a evitar"], ans: 3, expl: "Senhas no Dockerfile, em docker-compose.yml ou em .env commitado são todas práticas inseguras. Use secrets." },
        { q: "A flag --env-file no docker run:", opts: ["Remove todas as variáveis de ambiente.", "Carrega variáveis de um arquivo externo para o container.", "Cria um arquivo .env automaticamente.", "Exporta variáveis do container para o host."], ans: 1, expl: "Permite passar múltiplas variáveis de um arquivo, evitando digitar cada uma no comando docker run." }
      ]
    },
    {
      id: "docker-registry",
      title: "Docker Hub e Registries",
      subtitle: "Armazenando, compartilhando e distribuindo imagens Docker.",
      blocks: [
        { t: "h", h: "O que é um Registry?" },
        { t: "p", p: "Um registry é um repositório de imagens Docker. O Docker Hub é o registry público padrão, mas existem opções privadas como GitHub Container Registry (GHCR), Amazon ECR, Google Artifact Registry e registries auto-hospedados como Harbor." },
        { t: "h", h: "Docker Hub" },
        { t: "p", p: "Docker Hub é o maior repositório público de imagens Docker. Imagens oficiais (nginx, node, python, postgres) são mantidas pela comunidade Docker e são o ponto de partida para a maioria dos Dockerfiles." },
        { t: "code", c: String.raw`# Buscar imagem do Docker Hub
docker pull nginx:latest

# Listar imagens locais
docker images

# Puxar imagem de um registry específico
docker pull ghcr.io/usuario/projeto:v1.0
docker pull 123456789012.dkr.ecr.us-east-1.amazonaws.com/minha-app:1.0`, lang: "bash" },
        { t: "h", h: "Login, push e tags" },
        { t: "p", p: "Para enviar imagens a um registry, é necessário autenticar com docker login e marcar a imagem com a tag correta do registry." },
        { t: "code", c: String.raw`# Login no Docker Hub
docker login
# (insira username e senha)

# Login no GitHub Container Registry
echo $GHCR_TOKEN | docker login ghcr.io -u $USERNAME --password-stdin

# Tagar imagem para envio
docker tag minha-app:1.0 usuario/minha-app:1.0

# Enviar para o registry
docker push usuario/minha-app:1.0

# Enviar multiplas tags
docker push usuario/minha-app:1.0
docker push usuario/minha-app:latest`, lang: "bash" },
        { t: "h", h: "Registries privados" },
        { t: "code", c: String.raw`# GitHub Container Registry (GHCR)
docker tag minha-app:1.0 ghcr.io/meu-usuario/minha-app:1.0
docker push ghcr.io/meu-usuario/minha-app:1.0

# Amazon ECR
aws ecr get-login-password --region us-east-1 | \
  docker login --username AWS --password-stdin 123456789012.dkr.ecr.us-east-1.amazonaws.com
docker tag minha-app:1.0 123456789012.dkr.ecr.us-east-1.amazonaws.com/minha-app:1.0
docker push 123456789012.dkr.ecr.us-east-1.amazonaws.com/minha-app:1.0`, lang: "bash" },
        { t: "h", h: "Manifests e plataformas" },
        { t: "p", p: "Uma imagem pode ter múltiplas versões para diferentes plataformas (linux/amd64, linux/arm64). O manifest list agrupa todas as variantes, e o Docker automaticamente baixa a plataforma correta." },
        { t: "code", c: String.raw`# Ver manifest de uma imagem multi-plataforma
docker manifest inspect nginx:latest

# Build multi-plataforma
docker buildx build --platform linux/amd64,linux/arm64 \
  -t usuario/minha-app:1.0 --push .`, lang: "bash" },
        { t: "note", p: "Docker Hub oferece builds automáticos (autobuild) conectados a repositórios Git — toda vez que você faz push, a imagem é reconstruída automaticamente." },
        { t: "warn", p: "Imagens públicas no Docker Hub podem ter vulnerabilidades. Sempre verifique a origem e, se possível, use imagens oficiais ou escaneie com ferramentas como Trivy." }
      ],
      quiz: [
        { q: "O Docker Hub é:", opts: ["Uma ferramenta de build.", "O maior registry público de imagens Docker.", "Um editor de Dockerfiles.", "Um sistema de versionamento."], ans: 1, expl: "Docker Hub é o repositório público padrão onde imagens oficiais e da comunidade são armazenadas." },
        { q: "Antes de enviar uma imagem para um registry, é necessário:", opts: ["Criar um Dockerfile.", "Fazer login com docker login.", "Remover todos os containers.", "Pagar uma assinatura."], ans: 1, expl: "docker login autentica no registry antes de permitir push de imagens." },
        { q: "O comando docker tag serve para:", opts: ["Criar uma nova imagem.", "Criar uma referência (tag) para uma imagem existente.", "Remover tags antigas.", "Listar tags disponíveis."], ans: 1, expl: "docker tag cria uma nova referência apontando para a mesma imagem, sem duplicar dados." },
        { q: "Um manifest list contém:", opts: ["Apenas a versão linux/amd64 da imagem.", "Variantes da imagem para múltiplas plataformas (amd64, arm64, etc).", "O código-fonte da imagem.", "Logs de build da imagem."], ans: 1, expl: "Manifests agrupam variantes multi-plataforma; o Docker baixa automaticamente a correta para o host." },
        { q: "GitHub Container Registry (GHCR) é:", opts: ["Uma ferramenta de CI/CD.", "Um registry privado/público integrado ao GitHub.", "Um substitute do Docker Hub apenas para empresas.", "Um plugin do VS Code."], ans: 1, expl: "GHCR é o registry oficial do GitHub, integrado ao ecossistema de pacotes e repositórios da plataforma." },
        { q: "docker push usuario/app:1.0 envia:", opts: ["O container em execução.", "A imagem local com a tag especificada para o registry.", "Apenas as variáveis de ambiente.", "O Dockerfile para o GitHub."], ans: 1, expl: "docker push envia a imagem (todas as camadas) com a tag indicada para o registry remoto." },
        { q: "O que docker manifest inspect mostra?", opts: ["O histórico de builds da imagem.", "As variantes da imagem para diferentes plataformas.", "As portas expostas da imagem.", "O tamanho em disco da imagem."], ans: 1, expl: "Mostra o manifest list com todas as plataformas suportadas pela imagem no registry." },
        { q: "Por que é importante usar imagens oficiais ou verificadas?", opts: ["Porque são menores em tamanho.", "Porque são mantidas pela comunidade, revisadas e com vulnerabilidades corrigidas.", "Porque são gratuitas.", "Porque só funcionam em produção."], ans: 1, expl: "Imagens oficiais são mantidas, revisadas e atualizadas com correções de segurança pela comunidade Docker." },
        { q: "O login com docker login:", opts: ["Salva credenciais permanentemente no sistema.", "Salva token de autenticação no Docker config local.", "Envia senha para o Docker Hub em texto plano.", "Cria conta automaticamente."], ans: 1, expl: "docker login armazena o token de autenticação no arquivo ~/.docker/config.json local." },
        { q: "Para enviar imagem multi-plataforma, qual comando é usado?", opts: ["docker build --all-platforms", "docker buildx build --platform linux/amd64,linux/arm64 --push", "docker push --multi-platform", "docker tag --platform all"], ans: 1, expl: "docker buildx build com --platform define múltiplas arquiteturas e --push envia direto para o registry." }
      ]
    },
    {
      id: "docker-deploy",
      title: "Boas Práticas e Deploy",
      subtitle: "Imagens leves, segurança, health checks e CI/CD com Docker.",
      blocks: [
        { t: "h", h: "Imagens leves e seguras" },
        { t: "p", p: "O tamanho da imagem直接影响 tempo de download, consumo de disco e superfície de ataque. Imagens baseadas em Alpine ou distroless são muito menores que imagens baseadas em Debian/Ubuntu, reduzindo riscos." },
        { t: "code", c: String.raw`# Comparação de tamanhos
# node:20          → ~1GB
# node:20-slim     → ~200MB
# node:20-alpine   → ~170MB
# gcr.io/distroless/nodejs20-debian12 → ~130MB

# Usar slim ou Alpine sempre que possível
FROM node:20-alpine`, lang: "bash" },
        { t: "h", h: "Health checks" },
        { t: "p", p: "Health checks permitem que o Docker e orquestradores (Swarm, Kubernetes) monitorem se o container está saudável. Containers com health check falhando podem ser reiniciados automaticamente." },
        { t: "code", c: String.raw`# No Dockerfile
HEALTHCHECK --interval=30s --timeout=5s --retries=3 \
  CMD curl -f http://localhost:3000/health || exit 1

# No docker-compose.yml
services:
  app:
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:3000/health"]
      interval: 30s
      timeout: 5s
      retries: 3
      start_period: 10s`, lang: "yaml" },
        { t: "h", h: "Logging" },
        { t: "p", p: "Containers devem enviar logs para stdout/stderr em vez de arquivos. O Docker coleta logs desses streams automaticamente, facilitando centralização com ferramentas como ELK, Fluentd ou Loki." },
        { t: "code", c: String.raw`# Ver logs de um container
docker logs meu-container

# Seguir logs em tempo real
docker logs -f meu-container

# Limitar tamanho dos logs (daemon.json)
# { "log-driver": "json-file", "log-opts": { "max-size": "10m", "max-file": "3" } }`, lang: "bash" },
        { t: "h", h: "Security scanning" },
        { t: "p", p: "Ferramentas como Trivy, Snyk e Docker Scout escaneiam imagens em busca de vulnerabilidades conhecidas. Integrar scan ao pipeline de CI/CD previne imagens vulneráveis em produção." },
        { t: "code", c: String.raw`# Escanear imagem com Trivy
trivy image nginx:latest

# Escanear no Docker Desktop (Docker Scout)
docker scout cves myapp:1.0

# Rodar container como usuário não-root
FROM node:20-alpine
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser`, lang: "bash" },
        { t: "h", h: "CI/CD com Docker" },
        { t: "p", p: "Docker se integra nativamente com pipelines de CI/CD. O padrão é: build da imagem → scan de segurança → push para registry → deploy no ambiente de destino." },
        { t: "code", c: String.raw`# Exemplo: GitHub Actions
# .github/workflows/deploy.yml
name: Build and Deploy
on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Build image
        run: docker build -t myapp:\${{ github.sha }} .
      - name: Scan
        run: trivy image myapp:\${{ github.sha }}
      - name: Push to registry
        run: |
          echo \${{ secrets.GHCR_TOKEN }} | docker login ghcr.io -u \${{ github.actor }} --password-stdin
          docker tag myapp:\${{ github.sha }} ghcr.io/\${{ github.repository }}:\${{ github.sha }}
          docker push ghcr.io/\${{ github.repository }}:\${{ github.sha }}`, lang: "bash" },
        { t: "h", h: "Rodar como não-root" },
        { t: "p", p: "Imagens que rodam como root são um risco de segurança. Crie um usuário não-root no Dockerfile e use USER para garantir que o container execute com privilégios mínimos." },
        { t: "code", c: String.raw`# Dockerfile seguro
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN chown -R appuser:appgroup /app
USER appuser
EXPOSE 3000
CMD ["node", "server.js"]`, lang: "bash" },
        { t: "note", p: "Sempre combine multi-stage builds com imagens base leves (Alpine/slim) para máxima eficiência. A imagem final não deve conter ferramentas de build nem código-fonte — apenas artefatos e runtime." },
        { t: "warn", p: "Não ignore vulnerabilidades em imagens Docker. Mesmo vulnerabilities de baixo risco podem ser combinados em ataques. Escaneie sempre e atualize imagens base regularmente." }
      ],
      quiz: [
        { q: "Por que imagens baseadas em Alpine são recomendadas?", opts: ["São mais bonitas visualmente.", "São significativamente menores, reduzindo superfície de ataque e tempo de download.", "Não precisam de Dockerfile.", "Só funcionam em produção."], ans: 1, expl: "Alpine tem apenas ~5MB, resultando em imagens finais muito menores e com menos vulnerabilidades potenciais." },
        { q: "Um health check no Dockerfile:", opts: ["Aumenta o tamanho da imagem.", "Permite que o Docker monitore se o container está saudável e o reinicie se necessário.", "Elimina a necessidade de testes.", "Só funciona com containers Node.js."], ans: 1, expl: "Health checks permitem que o Docker e orquestradores detectem containers com problemas e os reiniciem." },
        { q: "Containers devem enviar logs para:", opts: ["Arquivos no diretório /logs do container.", "stdout/stderr, coletados pelo Docker automaticamente.", "Banco de dados externo.", "Um daemon de logs proprietary."], ans: 1, expl: "stdout/stderr são coletados pelo driver de logs do Docker, facilitando centralização e monitoramento." },
        { q: "Rodar container como não-root é importante porque:", opts: ["Aumenta a performance.", "Reduz riscos de segurança caso o container seja comprometido.", "É obrigatório pela licença Docker.", "Containers root não funcionam no Linux."], ans: 1, expl: "Se um container root for comprometido, o atacante ganha privilégios de root no host — usuário não-root mitiga isso." },
        { q: "O que a instrução USER no Dockerfile faz?", opts: ["Cria um novo usuário no host.", "Define qual usuário executa os comandos subsequentes e o container final.", "Remove o usuário root.", "Faz login em um registry."], ans: 1, expl: "USER muda o usuário de execução; a partir dele, todos os comandos rodam com esses privilégios." },
        { q: "Ferramentas como Trivy são usadas para:", opts: ["Criar Dockerfiles.", "Escaneiar imagens em busca de vulnerabilidades conhecidas.", "Gerenciar volumes Docker.", "Compilar código-fonte."], ans: 1, expl: "Trivy e semelhantes escaneiam camadas da imagem em busca de CVEs e dependências vulneráveis." },
        { q: "Em um pipeline de CI/CD com Docker, a ordem recomendada é:", opts: ["Deploy → Build → Scan → Push.", "Build → Scan → Push → Deploy.", "Scan → Deploy → Build → Push.", "Push → Build → Scan → Deploy."], ans: 1, expl: "Build a imagem primeiro, depois escaneie, envie ao registry e só então faça deploy." },
        { q: "Multi-stage builds em conjunto com Alpine resultam em:", opts: ["Imagens maiores por ter mais etapas.", "Imagens menores e mais seguras, com apenas artefatos finais.", "Containers mais lentos.", "Mais vulnerabilidades de segurança."], ans: 1, expl: "Multi-stage remove ferramentas de build; Alpine reduz a base — resultado final é mínimo e seguro." },
        { q: "O parâmetro start_period no health check:", opts: ["Define intervalo entre checks.", "Define tempo de espera antes do primeiro check, dando tempo ao container para inicializar.", "Define timeout máximo.", "Define quantas vezes o check pode falhar."], ans: 1, expl: "start_period dá tempo ao container para se preparar antes de começar a verificar saúde." },
        { q: "Por que não se deve armazenar logs em arquivos dentro do container?", opts: ["Arquivos são mais lentos que stdout.", "Ocupam espaço no container, que é efêmero, e dificultam centralização de logs.", "Docker não suporta arquivos de log.", "Logs em arquivo são inseguros."], ans: 1, expl: "Containers são efêmeros — logs em arquivos são perdidos; stdout/stderr são coletados pelo Docker e podem ser centralizados." }
      ]
    }
  ]
};