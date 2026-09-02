/* Curso: Git */
window.COURSES = window.COURSES || {};
window.COURSES.git = {
  name: "Git",
  topics: [
    {
      id: "git-intro",
      title: "Introdução ao Git",
      subtitle: "O que é Git e por que ele é essencial para desenvolvedores.",
      blocks: [
        { t: "h", h: "O que é Git?" },
        { t: "p", p: "Git é um sistema de controle de versão distribuído, criado por Linus Torvalds em 2005 para desenvolver o Linux. Ele rastreia mudanças em arquivos ao longo do tempo, permitindo voltar a versões anteriores, comparar alterações e trabalhar em equipe sem conflitos." },
        { t: "h", h: "Versionamento centralizado vs distribuído" },
        { t: "p", p: "Em sistemas centralizados (como SVN), existe um único servidor com o histórico completo — se ele cair, o histórico pode se perder. No Git, cada desenvolvedor tem uma cópia completa do repositório, incluindo todo o histórico. Isso torna o Git mais rápido, flexível e resistente a falhas." },
        { t: "h", h: "Snapshot vs Diff" },
        { t: "p", p: "Diferente de ferramentas que salvam diffs (diferenças entre versões), o Git armazena snapshots — instantâneos completos do estado dos arquivos a cada commit. Para economizar espaço, ele usa compressão inteligente e guarda referências aos arquivos que não mudaram." },
        { t: "h", h: "Um pouco de história" },
        { t: "lst", items: [
          "2005: Linus Torvalds cria o Git em menos de duas semanas.",
          "2008: O GitHub é lançado, popularizando o uso colaborativo.",
          "2010–2020: Git se torna o padrão absoluto da indústria.",
          "Hoje: usado por mais de 90% dos desenvolvedores no mundo."
        ]},
        { t: "h", h: "Por que usar Git?" },
        { t: "lst", items: [
          "Voltar a qualquer versão do projeto com facilidade.",
          "Trabalhar em paralelo sem destruir o trabalho alheio.",
          "Testar ideias em branches sem afetar o código principal.",
          "Reverter erros rapidamente com um único comando.",
          "Integração nativa com GitHub, GitLab e Bitbucket."
        ]},
        { t: "note", p: "Git não deve ser confundido com GitHub. Git é a ferramenta de linha de comando; GitHub é uma plataforma online que usa Git para hospedar repositórios e colaborar." }
      ],
      quiz: [
        { q: "Quem criou o Git?", opts: ["Dennis Ritchie", "Linus Torvalds", "Guido van Rossum", "Bjarne Stroustrup"], ans: 1, expl: "Linus Torvalds criou o Git em 2005 para gerenciar o desenvolvimento do kernel Linux." },
        { q: "O Git é um sistema de versionamento:", opts: ["Centralizado", "Distribuído", "Local apenas", "Baseado em nuvem apenas"], ans: 1, expl: "Git é distribuído: cada desenvolvedor possui uma cópia completa do repositório e de seu histórico." },
        { q: "O que o Git armazena a cada commit?", opts: ["Apenas as diferenças (diffs) dos arquivos.", "Um snapshot completo do estado dos arquivos.", "Apenas os nomes dos arquivos alterados.", "Um backup comprimido do projeto inteiro."], ans: 1, expl: "Git guarda snapshots — instantâneos do estado dos arquivos — não apenas diffs, embora use compressão inteligente." },
        { q: "Qual a principal diferença entre Git e SVN?", opts: ["Git é mais lento.", "SVN é distribuído, Git é centralizado.", "Git é distribuído, SVN é centralizado.", "Não existe diferença."], ans: 2, expl: "SVN é centralizado (servidor único); Git é distribuído (cada pessoa tem uma cópia completa do histórico)." },
        { q: "Git e GitHub são a mesma coisa?", opts: ["Sim, são sinônimos.", "Não, Git é uma ferramenta e GitHub é uma plataforma web.", "GitHub criou o Git.", "Git só funciona com GitHub."], ans: 1, expl: "Git é o sistema de versionamento local; GitHub é um serviço online que hospeda repositórios Git." },
        { q: "Em que ano o Git foi criado?", opts: ["2000", "2005", "2010", "2015"], ans: 1, expl: "O Git foi criado em 2005 por Linus Torvalds para gerenciar o kernel Linux." },
        { q: "Qual é uma vantagem do Git sobre sistemas centralizados?", opts: ["Usa menos espaço em disco.", "Cada desenvolvedor tem o histórico completo localmente.", "Não precisa de internet para commits.", "Não permite branches."], ans: 1, expl: "No Git, cada cópia local contém o histórico completo, o que o torna mais resistente a falhas de servidor." },
        { q: "O que significa 'snapshots' no contexto do Git?", opts: ["Cópias comprimidas de diffs.", "Instantâneos completos do estado dos arquivos.", "Backups automáticos na nuvem.", "Patches aplicados aos arquivos."], ans: 1, expl: "Snapshots são instantâneos completos: o Git guarda o estado de todos os arquivos naquele momento." },
        { q: "Uma desvantagem de sistemas centralizados é:", opts: ["São rápidos demais.", "Se o servidor cair, o acesso ao histórico é perdido.", "Não permitem trabalho em equipe.", "Só funcionam no Linux."], ans: 1, expl: "Em sistemas centralizados, se o servidor único ficar indisponível, ninguém acessa o histórico ou consegue commitar." },
        { q: "O Git se tornou o padrão em qual área?", opts: ["Apenas no desenvolvimento de jogos.", "Em praticamente toda a indústria de software.", "Apenas em projetos open source.", "Apenas em empresas grandes."], ans: 1, expl: "Hoje o Git é usado pela esmagadora maioria dos desenvolvedores, em projetos de todos os tamanhos e tipos." }
      ]
    },
    {
      id: "git-config",
      title: "Configuração Inicial",
      subtitle: "Preparando o ambiente: nome, email, editor e aliases.",
      blocks: [
        { t: "h", h: "Configurando sua identidade" },
        { t: "p", p: "Antes de começar a usar Git, é obrigatório configurar seu nome e email. Essas informações ficam gravadas em cada commit, identificando quem fez cada alteração." },
        { t: "code", c: String.raw`git config --global user.name "Seu Nome"
git config --global user.email "seu@email.com"`, lang: "bash" },
        { t: "h", h: "Níveis de configuração" },
        { t: "lst", items: [
          "--local: válido apenas para o repositório atual (padrão).",
          "--global: válido para todos os repositórios do seu usuário.",
          "--system: válido para todos os usuários da máquina."
        ]},
        { t: "h", h: "Configurando o editor padrão" },
        { t: "p", p: "O Git usa um editor de texto para mensagens de commit, merges e outras situações. Configure o editor que preferir:" },
        { t: "code", c: String.raw`git config --global core.editor "code --wait"    # VS Code
git config --global core.editor "nano"          # Nano
git config --global core.editor "vim"           # Vim`, lang: "bash" },
        { t: "h", h: "Criando aliases (atalhos)" },
        { t: "p", p: "Aliases são atalhos para comandos longos. Economizam tempo e evitam digitação repetitiva:" },
        { t: "code", c: String.raw`git config --global alias.st status
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.cm "commit -m"
git config --global alias.lg "log --oneline --graph --all"`, lang: "bash" },
        { t: "h", h: "Visualizando configurações" },
        { t: "code", c: String.raw`git config --list              # todas as configurações
git config user.name          # valor de uma chave específica`, lang: "bash" },
        { t: "note", p: "O arquivo de configuração global fica em ~/.gitconfig (Linux/Mac) ou C:\\Users\\Usuário\\.gitconfig (Windows). É um arquivo de texto que pode ser editado diretamente." }
      ],
      quiz: [
        { q: "O comando para definir o nome global do Git é:", opts: ["git set user.name", "git config --global user.name", "git name --set", "git user --global name"], ans: 1, expl: "git config --global user.name \"Seu Nome\" define o nome que aparecerá em todos os commits do seu usuário." },
        { q: "O nível --global afeta:", opts: ["Apenas o repositório atual.", "Todos os repositórios do seu usuário na máquina.", "Todos os usuários da máquina.", "Apenas repositórios remotos."], ans: 1, expl: "A configuração --global se aplica a todos os repositórios do seu usuário no computador." },
        { q: "Para configurar o editor VS Code no Git, usamos:", opts: ["git config core.editor \"code\"", "git config --global core.editor \"code --wait\"", "git editor set vscode", "git config editor vscode"], ans: 1, expl: "O flag --wait faz o Git esperar o VS Code fechar antes de continuar, essencial para mensagens de commit." },
        { q: "Um alias é:", opts: ["Um tipo de branch.", "Um atalho para um comando do Git.", "Um arquivo de configuração.", "Um repositório remoto."], ans: 1, expl: "Aliases são atalhos que simplificam comandos longos, como git st para git status." },
        { q: "Onde ficam armazenadas as configurações globais do Git?", opts: [".git/config", "~/.gitconfig", "/etc/gitconfig", "~/.bashrc"], ans: 1, expl: "O arquivo ~/.gitconfig (ou C:\\Users\\Usuário\\.gitconfig no Windows) guarda as configurações globais." },
        { q: "O comando git config --list mostra:", opts: ["Todos os repositórios.", "Todas as configurações do Git.", "O histórico de commits.", "Os arquivos rastreados."], ans: 1, expl: "git config --list exibe todas as configurações ativas, incluindo locais, globais e do sistema." },
        { q: "Qual configuração é obrigatória antes de fazer o primeiro commit?", opts: ["core.editor", "user.name e user.email", "alias", "core.autocrlf"], ans: 1, expl: "Git exige pelo menos user.name e user.email para identificar quem fez cada commit." },
        { q: "O arquivo .gitignore serve para:", opts: ["Ignorar configurações do Git.", "Dizer ao Git quais arquivos ou pastas não devem ser rastreados.", "Apagar arquivos do repositório.", "Configurar o editor padrão."], ans: 1, expl: "O .gitignore lista padrões de arquivos e pastas que o Git deve ignorar (como node_modules ou .env)." },
        { q: "Qual alternativa lista arquivos ignorados corretamente no .gitignore?", opts: ["ignore: node_modules", "node_modules/", "# node_modules", "*.node_modules"], ans: 1, expl: "Basta escrever o nome da pasta ou padrão. node_modules/ diz ao Git para ignorar toda a pasta node_modules." },
        { q: "Para ver a configuração de uma chave específica, usamos:", opts: ["git config get user.name", "git config user.name", "git show config user.name", "git config --show user.name"], ans: 1, expl: "git config <chave> exibe o valor atual daquela configuração sem necessidade de flags adicionais." }
      ]
    },
    {
      id: "git-repos",
      title: "Repositórios e Commits",
      subtitle: "Criando repositórios, adicionando arquivos e registrando mudanças.",
      blocks: [
        { t: "h", h: "Criando um repositório" },
        { t: "p", p: "Um repositório Git é uma pasta rastreada pelo Git. Para iniciar um novo repositório, use git init. Para copiar um repositório existente, use git clone:" },
        { t: "code", c: String.raw`git init                  # cria um novo repositório na pasta atual
git clone https://github.com/usuario/repo.git   # clona um repositório remoto`, lang: "bash" },
        { t: "h", h: "As três áreas do Git" },
        { t: "p", p: "Entender as três áreas é fundamental para usar Git corretamente:" },
        { t: "ol", items: [
          "Working Directory (área de trabalho): onde você edita os arquivos normalmente.",
          "Staging Area (área de preparação): onde você seleciona quais mudanças serão incluídas no próximo commit.",
          "Repositório (.git): onde o Git armazena o histórico completo de commits."
        ]},
        { t: "h", h: "Adicionando e commitando" },
        { t: "code", c: String.raw`git add arquivo.txt        # adiciona um arquivo ao staging
git add .                  # adiciona todos os arquivos modificados
git commit -m "mensagem"   # registra as mudanças no repositório`, lang: "bash" },
        { t: "h", h: "Verificando o estado" },
        { t: "code", c: String.raw`git status                 # mostra o estado dos arquivos
git diff                   # mostra diferenças não adicionadas
git diff --staged          # mostra diferenças já no staging`, lang: "bash" },
        { t: "h", h: "Consultando o histórico" },
        { t: "code", c: String.raw`git log                    # histórico completo
git log --oneline          # histórico compacto (uma linha por commit)
git log --oneline -5       # últimas 5 linhas
git log --graph --all      # gráfico com branches`, lang: "bash" },
        { t: "note", p: "Uma boa mensagem de commit é curta (50–72 caracteres), descritiva e escrita no imperativo. Exemplo: \"Adiciona validação de email\" em vez de \"mudanças\"." },
        { t: "warn", p: "Nunca faça commit de senhas, tokens, .env ou dados sensíveis. Se acontecer, remova do histórico com git filter-branch ou BFG Repo-Cleaner antes de fazer push." }
      ],
      quiz: [
        { q: "O comando para inicializar um novo repositório Git é:", opts: ["git start", "git new", "git init", "git create"], ans: 2, expl: "git init cria uma pasta .git na diretória atual, transformando-a em repositório Git." },
        { q: "A staging area é:", opts: ["Onde o código é executado.", "Uma área intermediária onde você seleciona mudanças para o próximo commit.", "O repositório remoto.", "A pasta .git."], ans: 1, expl: "A staging área (git add) permite escolher exatamente quais mudanças entrarão no próximo commit." },
        { q: "O comando git add . faz:", opts: ["Commita todos os arquivos.", "Adiciona todos os arquivos modificados ao staging area.", "Apaga todos os arquivos.", "Remove arquivos do repositório."], ans: 1, expl: "git add . adiciona todos os arquivos novos e modificados à staging area, preparando-os para o commit." },
        { q: "O que git status exibe?", opts: ["O histórico de commits.", "Os arquivos modificados, staging e não rastreados.", "O conteúdo de um commit.", "Os repositórios remotos."], ans: 1, expl: "git status mostra quais arquivos foram modificados, quais estão no staging e quais ainda não são rastreados." },
        { q: "Para clonar um repositório remoto, usamos:", opts: ["git pull", "git clone <url>", "git fetch", "git copy"], ans: 1, expl: "git clone copia o repositório remoto inteiro, incluindo histórico, branches e arquivos, para sua máquina." },
        { q: "git log --oneline mostra:", opts: ["Cada commit com mensagem, autor e data completos.", "Uma linha compacta por commit com hash e mensagem.", "Apenas commits da última semana.", "O diff de cada commit."], ans: 1, expl: "O flag --oneline condensa cada commit em uma única linha, mostrando o hash curto e a mensagem." },
        { q: "O comando git diff mostra:", opts: ["O histórico de commits.", "As diferenças entre a área de trabalho e o último commit.", "Os arquivos ignorados.", "Os branches disponíveis."], ans: 1, expl: "git diff exibe as mudanças no working directory que ainda não foram adicionadas ao staging." },
        { q: "Uma boa mensagem de commit deve ser:", opts: ["Vaga, como 'mudanças'.", "Curta, descritiva e no imperativo.", "Sempre em inglês obrigatoriamente.", "Mais de 200 caracteres."], ans: 1, expl: "Mensagens como \"Adiciona validação de email\" são claras, concisas e seguem a convenção da comunidade." },
        { q: "git diff --staged mostra:", opts: ["Diferenças entre working directory e staging.", "Diferenças entre staging e último commit.", "O histórico de commits.", "Arquivos ignorados."], ans: 1, expl: "O --staged (ou --cached) mostra o que está preparado para entrar no próximo commit." },
        { q: "Commitar dados sensíveis (senhas, tokens) é:", opts: ["Normal e aceitável.", "Perigoso, pois ficam no histórico mesmo após deletar.", "Permitido apenas em repositórios privados.", "Algo que o Git impede automaticamente."], ans: 1, expl: "Mesmo deletando o arquivo, o conteúdo fica no histórico do Git. É necessário limpar o histórico ou nunca commitar dados sensíveis." }
      ]
    },
    {
      id: "git-branches",
      title: "Branches",
      subtitle: "Linhas de desenvolvimento paralelas: criar, alternar e gerenciar.",
      blocks: [
        { t: "h", h: "O que são branches?" },
        { t: "p", p: "Uma branch é uma linha de desenvolvimento independente. O Git inicia com a branch main (ou master). Branches permitem desenvolver funcionalidades, corrigir bugs ou experimentar ideias sem afetar o código principal." },
        { t: "code", c: String.raw`git branch                  # lista branches locais
git branch nova-funcional   # cria uma nova branch
git branch -a               # lista todas (locais + remotas)`, lang: "bash" },
        { t: "h", h: "Alternando entre branches" },
        { t: "p", p: "Para mudar de branch, use git switch (recomendado) ou git checkout (clássico):"},
        { t: "code", c: String.raw`git switch nova-funcional     # muda para a branch (recomendado)
git switch -c outra-branch   # cria e muda para a nova branch
git checkout -b hotfix       # cria e muda (forma clássica)`, lang: "bash" },
        { t: "h", h: "Branches locais vs remotas" },
        { t: "p", p: "Branches locais existem apenas na sua máquina. Branches remotas são cópias no servidor (origin/main, origin/dev). Para ver todas:" },
        { t: "code", c: String.raw`git branch -a                 # locais e remotas
git branch -r                 # apenas remotas
git branch -vv                # com informações de tracking`, lang: "bash" },
        { t: "h", h: "Deletando branches" },
        { t: "code", c: String.raw`git branch -d branch-antiga   # deleta (seguro, só se já foi mergeada)
git branch -D branch-teste    # deleta forçadamente`, lang: "bash" },
        { t: "h", h: "Convenções de nomenclatura" },
        { t: "lst", items: [
          "feature/nome-da-funcionalidade: para novas funcionalidades.",
          "bugfix/corrigir-login: para correções de bugs.",
          "hotfix/urgente: para correções urgentes em produção.",
          "release/1.0: para preparar uma nova versão."
        ]},
        { t: "note", p: "O merge é o processo de incorporar mudanças de uma branch em outra. É ele que integra o trabalho de volta à main depois de testado e revisado." }
      ],
      quiz: [
        { q: "A branch padrão ao criar um repositório Git é:", opts: ["master", "main", "dev", " trunk"], ans: 1, expl: "A branch padrão moderna é main (anteriormente master). O Git atual usa main por padrão." },
        { q: "Qual comando cria uma nova branch?", opts: ["git branch nova-funcional", "git create branch", "git new-branch", "git add branch"], ans: 0, expl: "git branch <nome> cria uma nova branch a partir do commit atual, sem mudar para ela." },
        { q: "git switch -c nova-branch faz:", opts: ["Deleta a branch atual e cria uma nova.", "Cria e muda imediatamente para a nova branch.", "Apenas lista branches remotas.", "Faz merge da branch atual."], ans: 1, expl: "O flag -c cria a branch e já muda para ela em um único comando, economizando passos." },
        { q: "git branch -a mostra:", opts: ["Apenas branches locais.", "Apenas branches remotas.", "Todas as branches, locais e remotas.", "Apenas branches mescladas."], ans: 2, expl: "O flag -a lista branches locais e remotas (origin/main, origin/dev, etc.)." },
        { q: "Uma branch remota é:", opts: ["Uma branch que só existe localmente.", "Uma cópia da branch hospedada no servidor remoto.", "Uma branch deletada.", "Uma branch de merge."], ans: 1, expl: "Branches remotas são representações das branches no servidor (como origin/main), acessíveis com git fetch." },
        { q: "git branch -D força a deleção de uma branch que:", opts: ["Já foi mergeada.", "Não foi mergeada ainda.", "É a branch main.", "Não tem commits."], ans: 1, expl: "O -D deleta mesmo sem merge. O -d (minúsculo) é seguro e só deleta branches já integradas." },
        { q: "A convenção feature/ indica:", opts: ["Uma correção urgente.", "Uma nova funcionalidade em desenvolvimento.", "Uma versão estável.", "Uma branch de teste removida."], ans: 1, expl: "O prefixo feature/ é amplamente usado para branches de novas funcionalidades." },
        { q: "Para verificar em que branch você está, usamos:", opts: ["git status", "git branch", "git log", "git show"], ans: 1, expl: "git branch marca a branch atual com um asterisco (*), mostrando claramente onde você está." },
        { q: "O que acontece ao fazer git checkout -b minha-branch?", opts: ["Cria a branch sem mudar para ela.", "Deleta a branch atual.", "Cria e muda para a nova branch.", "Faz merge com main."], ans: 2, expl: "git checkout -b é a forma clássica de criar e mudar para uma nova branch em um passo." },
        { q: "Trabalhar em branches é importante porque:", opts: ["É mais lento e organizado.", "Permite desenvolver funcionalidades sem afetar o código principal.", "Evita a necessidade de commits.", "Torna o Git mais rápido."], ans: 1, expl: "Branches islam mudanças experimentais do código principal, evitando regressões e permitindo revisão." }
      ]
    },
    {
      id: "git-merge",
      title: "Merge e Resolução de Conflitos",
      subtitle: "Integrando branches e resolvendo quando o Git não consegue sozinho.",
      blocks: [
        { t: "h", h: "Fast-forward merge" },
        { t: "p", p: "Quando a branch de destino não teve novos commits desde que a branch de origem foi criada, o Git simplemente move o ponteiro para frente — sem criar um commit de merge. Isso se chama fast-forward." },
        { t: "code", c: String.raw`git switch main
git merge feature-login      # fast-forward se main não avançou`, lang: "bash" },
        { t: "h", h: "Three-way merge" },
        { t: "p", p: "Quando ambas as branches tiveram novos commits, o Git cria um commit de merge especial (um commit com dois pais) que combina as duas linhas de desenvolvimento:" },
        { t: "code", c: String.raw`git switch main
git merge feature-api         # cria um merge commit`, lang: "bash" },
        { t: "h", h: "Conflitos de merge" },
        { t: "p", p: "Quando o mesmo trecho de um arquivo foi alterado em ambas as branches, o Git não sabe qual versão manter. Ele marca os conflitos no arquivo e pausa o merge:" },
        { t: "code", c: String.raw`<<<<<<< HEAD
código da branch principal
=======
código da branch que está sendo mergeada
>>>>>>> feature-nova`, lang: "bash" },
        { t: "h", h: "Como resolver conflitos" },
        { t: "ol", items: [
          "Abra o arquivo e localize os marcadores <<<<<<<, ======= e >>>>>>>.",
          "Escolha qual versão manter (ou combine as duas).",
          "Remova os marcadores de conflito.",
          "Adicione o arquivo com git add.",
          "Complete o merge com git commit."
        ]},
        { t: "code", c: String.raw`git add arquivo-conflitante
git commit                    # finaliza o merge`, lang: "bash" },
        { t: "warn", p: "Nunca ignore conflitos fazendo push sem resolver. Conflitos não resolvidos podem corromper o histórico ou causar bugs difíceis de rastrear." }
      ],
      quiz: [
        { q: "O que é um fast-forward merge?", opts: ["Um merge que cria um commit especial.", "Um merge onde o Git apenas move o ponteiro da branch para frente.", "Um merge que sempre gera conflitos.", "Um merge que deleta a branch origem."], ans: 1, expl: "No fast-forward, a branch destino não avançou, então o Git move o ponteiro sem criar commit de merge." },
        { q: "Um merge commit tem quantos pais?", opts: ["Um", "Dois", "Três", "Nenhum"], ans: 1, expl: "O commit de merge combina duas branches, tendo dois pais: o último commit de cada branch." },
        { q: "Conflitos de merge acontecem quando:", opts: ["Uma branch é deletada.", "Ambas as branches alteraram o mesmo trecho de um arquivo.", "Não há commits em uma branch.", "O repositório está vazio."], ans: 1, expl: "O Git não sabe qual versão manter quando o mesmo código foi modificado em ambas as branches." },
        { q: "Após resolver os conflitos no editor, qual é o próximo passo?", opts: ["git commit", "git add no arquivo e depois git commit", "git push", "git merge --abort"], ans: 1, expl: "Primeiro git add para marcar o conflito como resolvido, depois git commit para finalizar o merge." },
        { q: "O que os marcadores ======= separam?", opts: ["O começo e o fim do arquivo.", "A versão da branch HEAD e a versão da branch mergeada.", "Comentários e código.", "Arquivos ignorados."], ans: 1, expl: "======= divide: acima está o código da branch atual (HEAD), abaixo o da branch que está sendo mergeada." },
        { q: "git merge --abort faz:", opts: ["Deleta a branch atual.", "Cancela o merge em andamento e volta ao estado anterior.", "Força o merge mesmo com conflitos.", "Deleta o commit de merge."], ans: 1, expl: "O --abort desfaz o merge completamente, restaurando o repositório ao estado antes do merge." },
        { q: "Quando um fast-forward NÃO é possível?", opts: ["Quando a branch destino também teve novos commits.", "Quando a branch origem não existe.", "Quando não há conflitos.", "Quando o repositório está vazio."], ans: 0, expl: "Se a branch destino avançou desde a criação da origem, não é possível fast-forward — é necessário um three-way merge." },
        { q: "Para iniciar um merge, qual comando usamos?", opts: ["git combine", "git merge <branch>", "git integrate", "git join"], ans: 1, expl: "git merge <branch> integra os commits da branch especificada na branch atual." },
        { q: "O que indicam os marcadores <<<<<<< e >>>>>>>?", opts: ["Início e fim do arquivo.", "Início e fim de um conflito de merge.", "Um comentário do Git.", "Um arquivo ignorado."], ans: 1, expl: "<<<<<< marca o início do conflito (HEAD), ======= separa as versões, e >>>>>>> marca o fim (branch mergeada)." },
        { q: "A branch principal padrão moderna do Git é:", opts: ["master", "main", "develop", "trunk"], ans: 1, expl: "A convenção moderna é usar main como branch principal (master era usada anteriormente)." }
      ]
    },
    {
      id: "git-remote",
      title: "Remote (Push, Pull, Fetch)",
      subtitle: "Sincronizando seu trabalho local com repositórios remotos.",
      blocks: [
        { t: "h", h: "O que são remotos?" },
        { t: "p", p: "Um remote é uma versão do seu repositório hospedada em um servidor (GitHub, GitLab, Bitbucket). O remote padrão se chama origin e é definido no momento do git clone." },
        { t: "code", c: String.raw`git remote -v                 # lista remotos configurados
git remote add origin https://github.com/user/repo.git   # adiciona um remote
git remote rename origin upstream   # renomeia um remote`, lang: "bash" },
        { t: "h", h: "Push: enviando commits" },
        { t: "p", p: "git push envia seus commits locais para o repositório remoto. O -u faz tracking, para que futuros pushes não precisem de argumentos:" },
        { t: "code", c: String.raw`git push -u origin main       # envia a branch main e faz tracking
git push origin feature-login  # envia uma branch específica
git push --force               # força o push (cuidado!)`, lang: "bash" },
        { t: "h", h: "Pull: baixando e integrando" },
        { t: "p", p: "git pull é equivalente a git fetch + git merge. Ele baixa as mudanças do remoto e já integra na sua branch atual:" },
        { t: "code", c: String.raw`git pull origin main           # baixa e integra mudanças
git pull --rebase origin main  # baixa e reapply em cima (limpo)`, lang: "bash" },
        { t: "h", h: "Fetch: baixando sem integrar" },
        { t: "p", p: "git fetch apenas baixa as informações do remoto sem alterar seu código local. É mais seguro que pull porque você pode revisar antes de integrar:" },
        { t: "code", c: String.raw`git fetch origin               # baixa dados do remoto
git log origin/main            # vê o histórico remoto
git merge origin/main          # integra quando estiver pronto`, lang: "bash" },
        { t: "h", h: "Tracking branches" },
        { t: "p", p: "Uma branch de tracking é uma branch local que sabe qual branch remota está associada. Isso permite usar git push e git pull sem especificar origem e destino:" },
        { t: "code", c: String.raw`git branch -vv                 # vê branches e seus remotos
git branch -u origin/main      # configura tracking manualmente`, lang: "bash" },
        { t: "note", p: "git pull faz fetch + merge automaticamente. Se preferir mais controle, use fetch primeiro, analise as mudanças com git log e depois faça merge ou rebase manualmente." }
      ],
      quiz: [
        { q: "O remote padrão criado ao clonar um repositório é:", opts: ["upstream", "origin", "remote", "main"], ans: 1, expl: "O remote padrão se chama origin e aponta para a URL de onde o repositório foi clonado." },
        { q: "git push -u origin main faz:", opts: ["Apenas envia commits.", "Envia commits e configura tracking para a branch.", "Baixa commits do remoto.", "Deleta a branch remota."], ans: 1, expl: "O -u configura tracking, permitindo que git push e git pull funcionem sem argumentos以后." },
        { q: "A diferença entre git pull e git fetch é:", opts: ["Não existe diferença.", "fetch baixa sem integrar, pull baixa e integra automaticamente.", "pull é mais rápido.", "fetch deleta arquivos locais."], ans: 1, expl: "fetch apenas atualiza as referências remotas; pull faz fetch + merge, integrando imediatamente." },
        { q: "git remote -v mostra:", opts: ["O histórico de commits.", "Os remotos configurados e suas URLs.", "As branches disponíveis.", "Os arquivos ignorados."], ans: 1, expl: "git remote -v lista os nomes dos remotos e as URLs associadas a fetch e push." },
        { q: "git push --force é perigoso porque:", opts: ["É lento.", "Pode sobrescrever commits de outros no repositório remoto.", "Deleta o repositório local.", "Não funciona no GitHub."], ans: 1, expl: "O force push sobrescreve o histórico remoto, podendo apagar commits de colegas — use com extrema cautela." },
        { q: "Uma tracking branch é:", opts: ["Uma branch remota deletada.", "Uma branch local associada a uma branch remota.", "Uma branch de merge.", "Uma branch de teste."], ans: 1, expl: "Tracking permite que git push/pull saibam automaticamente qual branch remota sincronizar." },
        { q: "Para adicionar um novo remote, usamos:", opts: ["git add remote", "git remote add <nome> <url>", "git remote new", "git clone --add"], ans: 1, expl: "git remote add <nome> <url> registra um novo ponto de sincronização remoto." },
        { q: "git fetch é mais seguro que git pull porque:", opts: ["É mais rápido.", "Não altera seu código local, apenas baixa dados.", "Não precisa de internet.", "Deleta arquivos automaticamente."], ans: 1, expl: "fetch mantém seu código intacto; você revisa as mudanças antes de decidir integrar com merge ou rebase." },
        { q: "git branch -vv mostra:", opts: ["Apenas branches locais.", "Branches com informações de tracking e último commit remoto.", "O histórico de merges.", "Os arquivos ignorados."], ans: 1, expl: "O -vv mostra cada branch local, sua branch de tracking e o último commit sincronizado." },
        { q: "git pull --rebase faz:", opts: ["Apenas fetch.", "Baixa mudanças e reaplica seus commits em cima (histórico limpo).", "Força o push.", "Deleta a branch remota."], ans: 1, expl: "pull --rebase faz fetch e depois rebase em vez de merge, mantendo um histórico linear e limpo." }
      ]
    },
    {
      id: "git-github",
      title: "GitHub e Pull Requests",
      subtitle: "Colaboração em equipe: forks, PRs, code review e issues.",
      blocks: [
        { t: "h", h: "O que é GitHub?" },
        { t: "p", p: "GitHub é a maior plataforma de hospedagem de repositórios Git. Além de armazenar código, oferece ferramentas para colaboração: Pull Requests, Issues, Actions (CI/CD), Projects (kanban) e Pages (sites estáticos)." },
        { t: "h", h: "Fork: contribuindo em projetos de outros" },
        { t: "p", p: "Um fork é uma cópia do repositório de outra pessoa na sua conta do GitHub. Isso permite que você faça alterações sem permissão direta do autor original:" },
        { t: "code", c: String.raw`git clone https://github.com/SEU-USER/repo-forked.git
cd repo-forked
git remote add upstream https://github.com/AUTOR-ORIGINAL/repo.git
git fetch upstream
git merge upstream/main        # mantém seu fork atualizado`, lang: "bash" },
        { t: "h", h: "Pull Requests: o fluxo de trabalho" },
        { t: "p", p: "Um Pull Request (PR) é uma proposta de alteração enviada para revisão. O fluxo típico é:" },
        { t: "ol", items: [
          "Crie uma branch para a funcionalidade.",
          "Faça seus commits nessa branch.",
          "Push para o repositório remoto.",
          "Abra um Pull Request no GitHub.",
          "Receba feedback, faça alterações se necessário.",
          "O mantenedor faz merge após aprovação."
        ]},
        { t: "h", h: "Code Review" },
        { t: "p", p: "Durante o PR, outros desenvolvedores revisam seu código, comentam linhas específicas, sugerem melhorias e verificam se não há bugs ou violação de padrões. É uma das prnicas mais valiosas do desenvolvimento em equipe." },
        { t: "h", h: "Merge, Squash e Rebase no PR" },
        { t: "p", p: "O GitHub oferece três opções ao fazer merge de um PR:" },
        { t: "lst", items: [
          "Merge commit: cria um commit de merge tradicional (preserva histórico completo).",
          "Squash and merge: comprime todos os commits do PR em um único commit limpo.",
          "Rebase and merge: reaplica os commits do PR em cima da branch destino (histórico linear)."
        ]},
        { t: "h", h: "Issues: organizando tarefas" },
        { t: "p", p: "Issues são pedidos de funcionalidade, relatórios de bugs ou discussões. Elas podem ser vinculadas a PRs, atribuídas a pessoas, labels e milestones para organização:" },
        { t: "note", p: "Boas práticas de PR: mantenha PRs pequenos e focados, escreva descrições claras, vincule a Issues relevantes e responda aos reviews rapidamente." }
      ],
      quiz: [
        { q: "Um fork no GitHub é:", opts: ["Uma branch remota.", "Uma cópia do repositório de outra pessoa na sua conta.", "Um tipo de merge.", "Um arquivo de configuração."], ans: 1, expl: "Fork cria uma cópia independente do repositório original na sua conta, permitindo alterações sem afetar o original." },
        { q: "Um Pull Request serve para:", opts: ["Baixar código do repositório.", "Propor e revisar mudanças antes de integrá-las à branch principal.", "Deletar branches.", "Configurar o Git."], ans: 1, expl: "PR é uma proposta de alteração: abre-se para que outros revisem, comentem e aprovm antes do merge." },
        { q: "O que o squash and merge faz?", opts: ["Cria um commit de merge tradicional.", "Comprime todos os commits do PR em um único commit.", "Deleta a branch do PR.", "Aplica rebase automático."], ans: 1, expl: "Squash combina todos os commits em um só, mantendo o histórico da branch principal limpo." },
        { q: "Code review é importante porque:", opts: ["Aumenta o número de commits.", "Permite que outros revisores encontrem bugs e sugiram melhorias.", "Substitui testes automatizados.", "É obrigatório apenas em projetos open source."], ans: 1, expl: "Revisão cruza olhares diferentes sobre o código, encontra problemas e compartilha conhecimento do time." },
        { q: "O comando git remote add upstream serve para:", opts: ["Criar um fork.", "Apontar para o repositório original ao contribuir via fork.", "Fazer push.", "Deletar um remote."], ans: 1, expl: "upstream aponta para o repositório original, permitindo sincronizar seu fork com as últimas mudanças." },
        { q: "Uma Issue no GitHub representa:", opts: ["Um pull request.", "Um pedido de funcionalidade, bug ou discussão.", "Um commit.", "Uma branch."], ans: 1, expl: "Issues são registros de tarefas, bugs ou discussões que organizam o desenvolvimento do projeto." },
        { q: "No fluxo de fork e PR, para manter seu fork atualizado, você:", opts: ["Faz pull do upstream.", "Clona novamente o repositório.", "Deleta o fork e refaz.", "Ignora as atualizações."], ans: 0, expl: "git fetch upstream + git merge upstream/main sincroniza seu fork com as mudanças do repositório original." },
        { q: "Rebase and merge no PR:", opts: ["Cria um commit de merge.", "Reaplica os commits em cima da branch destino, mantendo histórico linear.", "Comprime todos os commits.", "Deleta a branch do PR."], ans: 1, expl: "Rebase and merge reaplica cada commit do PR sequencialmente em cima da branch destino, sem merge commits." },
        { q: "PRs grandes e com muitas alterações simultâneas são:", opts: ["A melhor prática.", "Difíceis de revisar e devem ser evitados.", "Obrigatórios em projetos grandes.", "Mais rápidos de aprovar."], ans: 1, expl: "PRs pequenos e focados são mais fáceis de revisar, testar e aprovar, reduzindo bugs e atrito na equipe." },
        { q: "Para vincular um PR a uma Issue, basta:", opts: ["Não é possível.", "Mencionar a Issue na descrição do PR com #numero.", "Criar um commit especial.", "Usar git link."], ans: 1, expl: "Mencionar #123 na descrição ou comentários vincula automaticamente o PR à Issue correspondente." }
      ]
    },
    {
      id: "git-stash",
      title: "Stash e Arquivamento",
      subtitle: "Salvando mudanças temporárias e mantendo o repositório limpo.",
      blocks: [
        { t: "h", h: "O que é git stash?" },
        { t: "p", p: "git stash guarda temporariamente suas mudanças não commitadas, permitindo limpar a área de trabalho. É útil quando você precisa mudar de branch rapidamente sem commitar alterações incompletas." },
        { t: "code", c: String.raw`git stash                      # salva as mudanças e limpa o working directory
git stash save "descrição"    # salva com uma mensagem descritiva`, lang: "bash" },
        { t: "h", h: "Recuperando stash" },
        { t: "code", c: String.raw`git stash list                 # lista todos os stashes salvos
git stash pop                 # aplica e remove o stash mais recente
git stash apply               # aplica sem remover (mantém no stash)
git stash apply stash@{2}     # aplica um stash específico`, lang: "bash" },
        { t: "h", h: "Gerenciando stashes" },
        { t: "code", c: String.raw`git stash show                 # mostra arquivos alterados no stash
git stash show -p             # mostra o diff completo
git stash drop stash@{0}      # deleta um stash específico
git stash clear               # deleta todos os stashes`, lang: "bash" },
        { t: "h", h: "O que é .gitignore?" },
        { t: "p", p: "O arquivo .gitignore lista padrões de arquivos e pastas que o Git deve ignorar completamente — nem git add os rastreia. É essencial para não commitar dependências, variáveis de ambiente ou arquivos temporários." },
        { t: "code", c: String.raw`# Exemplo de .gitignore
node_modules/
.env
*.log
dist/
.DS_Store`, lang: "bash" },
        { t: "h", h: "git clean: removendo arquivos não rastreados" },
        { t: "p", p: "git clean remove arquivos e pastas que não são rastreados pelo Git e que não estão no staging. É útil para limpar o projeto:" },
        { t: "code", c: String.raw`git clean -n                   # mostra o que seria deletado (dry run)
git clean -f                   # força a deleção de arquivos não rastreados
git clean -fd                  # deleta arquivos e pastas não rastreados`, lang: "bash" },
        { t: "warn", p: "git clean é irreversível: arquivos deletados não vão para a lixeira. Sempre use -n primeiro para verificar o que será removido." }
      ],
      quiz: [
        { q: "git stash faz:", opts: ["Deleta as mudanças não commitadas.", "Salva as mudanças temporariamente e limpa a área de trabalho.", "Commita as mudanças automaticamente.", "Faz push das mudanças."], ans: 1, expl: "stash guarda suas alterações em uma pilha temporária, restaurando a área de trabalho ao último commit." },
        { q: "git stash pop faz:", opts: ["Apenas lista os stashes.", "Aplica o stash mais recente e o remove da pilha.", "Deleta todos os stashes.", "Cria um commit com o stash."], ans: 1, expl: "pop aplica as mudanças salvas e remove o stash da lista, mantendo a pilha organizada." },
        { q: "A diferença entre git stash pop e git stash apply é:", opts: ["Não existe diferença.", "pop remove o stash da pilha; apply mantém.", "apply é mais rápido.", "pop só funciona uma vez."], ans: 1, expl: "pop aplica e remove; apply aplica mas mantém o stash na pilha para reutilização." },
        { q: "Um arquivo .gitignore faz:", opts: ["Ignorar commits no Git.", "Dizer ao Git quais arquivos não devem ser rastreados.", "Apagar arquivos do repositório.", "Configurar o editor padrão."], ans: 1, expl: "O .gitignore lista padrões (pastas, extensões) que o Git deve ignorar completamente." },
        { q: "git clean -n é recomendado porque:", opts: ["É mais rápido.", "Mostra o que seria deletado sem apagar nada (dry run).", "Limpa o stash.", "Faz backup automático."], ans: 1, expl: "O -n é seguro: mostra quais arquivos seriam removidos sem executar a deleção, evitando acidentes." },
        { q: "O que NÃO deve ir no .gitignore?", opts: ["node_modules/", ".env", "src/", "*.log"], ans: 2, expl: "src/ contém código-fonte do projeto e NUNCA deve ser ignorado — é o coração do repositório." },
        { q: "git stash list mostra:", opts: ["Todos os commits.", "Uma pilha de stashes salvos com identificadores.", "Os arquivos ignorados.", "As branches remotas."], ans: 1, expl: "stash list exibe todos os stashes guardados, numerados de stash@{0} (mais recente) para cima." },
        { q: "git stash clear:", opts: ["Limpa a área de trabalho.", "Deleta todos os stashes salvos.", "Remove o último commit.", "Limpa o cache do Git."], ans: 1, expl: "clear apaga todos os stashes de uma vez —操作不可逆, então use com cuidado." },
        { q: "git clean -fd deleta:", opts: ["Apenas arquivos não rastreados.", "Arquivos e pastas não rastreados.", "Todos os commits.", "A branch atual."], ans: 1, expl: "O -f força deleção; o -d inclui pastas, removendo tudo que não é rastreado pelo Git." },
        { q: "Quando usar git stash?", opts: ["Para commits permanentes.", "Quando precisa mudar de branch com alterações incompletas.", "Para fazer push.", "Para deletar branches."], ans: 1, expl: "stash é ideal para situações onde você precisa trocar de branch sem commitar trabalho incompleto." }
      ]
    },
    {
      id: "git-rebase",
      title: "Rebase e Cherry-pick",
      subtitle: "Reescrevendo histórico e transplantando commits específicos.",
      blocks: [
        { t: "h", h: "O que é rebase?" },
        { t: "p", p: "git rebase reaplica seus commits em cima de outro ponto de partida (geralmente a branch main atualizada). O resultado é um histórico linear e limpo, sem commits de merge desnecessários." },
        { t: "code", c: String.raw`git switch feature
git rebase main               # reaplica os commits da feature em cima da main`, lang: "bash" },
        { t: "h", h: "Rebase interativo" },
        { t: "p", p: "O rebase interativo (-i) permite reescrever, reordenar, combinar ou apagar commits anteriores. É uma das ferramentas mais poderosas do Git:" },
        { t: "code", c: String.raw`git rebase -i HEAD~5          # edita os últimos 5 commits`, lang: "bash" },
        { t: "p", p: "O editor abre com uma lista de commits e comandos:" },
        { t: "code", c: String.raw`pick abc1234 Primeiro commit
pick def5678 Segundo commit
pick ghi9012 Terceiro commit

# Comandos disponíveis:
# pick   = manter o commit como está
# squash = combinar com o commit anterior
# fixup  = combinar e descartar a mensagem
# reword = manter o commit, editar a mensagem
# drop   = apagar o commit`, lang: "bash" },
        { t: "h", h: "Cherry-pick: transplantando commits" },
        { t: "p", p: "git cherry-pick transplanta commits específicos de outra branch para a branch atual. É útil quando você precisa de um fix pontual sem mergear a branch inteira:" },
        { t: "code", c: String.raw`git cherry-pick abc1234              # transplanta um commit
git cherry-pick abc1234 def5678     # transplanta vários commits
git cherry-pick --no-commit abc1234 # aplica sem criar commit`, lang: "bash" },
        { t: "h", h: "Rebase vs Merge: quando usar?" },
        { t: "lst", items: [
          "Merge: preserva o histórico exato de como as branches se conectaram. Ideal para branches longas e trabalho em equipe.",
          "Rebase: cria um histórico linear e limpo. Ideal para manter branches pessoais organizadas.",
          "NUNCA faça rebase em branches públicas (main, develop) — isso reescreve o histórico e causa conflitos para outros."
        ]},
        { t: "warn", p: "Regra de ouro: nunca faça rebase em commits que já foram pushados e compartilhados. Rebase reescreve histórico — quem já tem os commits antigos terá sérios problemas." },
        { t: "note", p: "Cherry-pick é ideal para corrigir bugs pontuais: você pega apenas o commit de fix de uma branch e aplica na main, sem trazer todo o desenvolvimento experimental." }
      ],
      quiz: [
        { q: "git rebase faz:", opts: ["Mescla duas branches com um merge commit.", "Reaplica seus commits em cima de outra base, criando histórico linear.", "Deleta a branch atual.", "Cria um novo remote."], ans: 1, expl: "Rebase transplantar os commits para uma nova base, mantendo o histórico limpo e linear." },
        { q: "Rebase interativo (git rebase -i) permite:", opts: ["Apenas visualizar commits.", "Reescrever, reordenar, combinar ou apagar commits.", "Deletar branches remotas.", "Fazer push forçado."], ans: 1, expl: "O -i abre um editor onde você decide o destino de cada commit: pick, squash, fixup, reword ou drop." },
        { q: "O comando squash no rebase interativo:", opts: ["Deleta o commit.", "Combina o commit com o anterior, mantendo as duas mensagens.", "Move o commit para outra branch.", "Faz push automático."], ans: 1, expl: "Squash funde dois commits em um só, preservando as mensagens (editadas) dos dois." },
        { q: "git cherry-pick abc1234 faz:", opts: ["Cria uma branch a partir do commit.", "Transplanta o commit abc1234 para a branch atual.", "Deleta o commit abc1234.", "Faz rebase do commit."], ans: 1, expl: "Cherry-pick copia um commit específico de qualquer branch e o aplica na branch onde você está." },
        { q: "NUNCA se deve fazer rebase em:", opts: ["Branches pessoais locais.", "Branches públicas que já foram pushadas.", "Branches que ainda não existem.", "Branches deletadas."], ans: 1, expl: "Rebase reescreve histórico: se outros já têm os commits antigos, eles terão conflitos sérios ao sincronizar." },
        { q: "Rebase é preferível a merge quando:", opts: ["A branch tem muitos colaboradores.", "Você quer um histórico linear e limpo em branches pessoais.", "Precisa de um commit de merge documentado.", "A branch já foi pushada publicamente."], ans: 1, expl: "Rebase limpa o histórico, removendo merge commits desnecessários — ideal para branches individuais." },
        { q: "git cherry-pick --no-commit abc1234:", opts: ["Aplica as mudanças sem criar um novo commit.", "Deleta o commit abc1234.", "Faz rebase automático.", "Cria uma branch nova."], ans: 0, expl: "O --no-commit aplica as alterações ao working directory sem registrar um commit, útil para agrupar mudanças." },
        { q: "No rebase interativo, reword:", opts: ["Deleta o commit.", "Mantém o commit e permite editar a mensagem.", "Move o commit para o final.", "Faz squash com o próximo."], ans: 1, expl: "reword preserva o commit mas abre o editor para modificar a mensagem de commit." },
        { q: "Um histórico com muitos commits de merge pode ser:", opts: ["Mais organizado.", "Difícil de navegar e entender.", "Sempre melhor que rebase.", "Obrigatório em projetos grandes."], ans: 1, expl: "Muitos merge commits poluem o histórico, tornando difícil rastrear quando e por que mudanças ocorreram." },
        { q: "Cherry-pick é útil quando:", opts: ["Você quer mesclar branches inteiras.", "Precisa de um commit pontual de outra branch sem mergear tudo.", "Quer deletar uma branch.", "Precisa fazer push."], ans: 1, expl: "Cherry-pick é perfeito para trazer apenas o fix necessário sem todo o histórico da branch de origem." }
      ]
    },
    {
      id: "git-avancado",
      title: "Git Hooks e Automação",
      subtitle: "Automatizando qualidade com hooks, bisect e ferramentas avançadas.",
      blocks: [
        { t: "h", h: "O que são Git Hooks?" },
        { t: "p", p: "Git hooks são scripts que o Git executa automaticamente em momentos específicos (antes de commit, após push, etc.). Eles ficam na pasta .git/hooks/ e permitem validar código, rodar testes ou impedir commits com erros." },
        { t: "h", h: "Hooks mais importantes" },
        { t: "lst", items: [
          "pre-commit: roda antes do commit. Ideal para lint, formatação e testes rápidos.",
          "commit-msg: valida a mensagem do commit (ex.: verificar formato Conventional Commits).",
          "pre-push: roda antes do push. Útil para rodar testes completos.",
          "post-merge: roda após um merge. Ideal para instalar dependências automaticamente."
        ]},
        { t: "code", c: String.raw`#!/bin/bash
# Exemplo: .git/hooks/pre-commit
echo "Rodando linter..."
npx eslint --quiet .
if [ $? -ne 0 ]; then
  echo "❌ Linter encontrou erros. Corrija antes de commitar."
  exit 1
fi`, lang: "bash" },
        { t: "h", h: "Husky: gerenciando hooks facilmente" },
        { t: "p", p: "Husky é uma ferramenta que simplifica a criação e distribuição de Git hooks em projetos Node.js. Em vez de configurar hooks manualmente, o Husky os gerencia via package.json:" },
        { t: "code", c: String.raw`# Instalação
npm install husky --save-dev
npx husky init

# Criando um hook pre-commit
echo "npx lint-staged" > .husky/pre-commit`, lang: "bash" },
        { t: "h", h: "Lint-staged: executando lint apenas em arquivos alterados" },
        { t: "p", p: "Lint-staged roda ferramentas de lint apenas nos arquivos que estão no staging, não no projeto inteiro. Combinado com Husky, garante que todo commit passe pelos padrões de qualidade:" },
        { t: "code", c: String.raw`# package.json
{
  "lint-staged": {
    "*.js": ["eslint --fix", "prettier --write"],
    "*.{json,md}": ["prettier --write"]
  }
}`, lang: "bash" },
        { t: "h", h: "Git Bisect: encontrando o commit que quebrou algo" },
        { t: "p", p: "git bisect faz uma busca binária no histórico para encontrar o commit que introduziu um bug. É incrivelmente eficiente para projetos com milhares de commits:" },
        { t: "code", c: String.raw`git bisect start
git bisect bad                  # marca o commit atual como ruim
git bisect good v1.0            # marca um commit antigo como bom
# O Git testa commits intermediários
# Você testa e marca como good/bad
# Até encontrar o commit exato
git bisect reset                # volta à branch original`, lang: "bash" },
        { t: "h", h: "Outras ferramentas úteis" },
        { t: "lst", items: [
          "git shortlog: resumo de commits por autor (útil para relatórios).",
          "git worktree: trabalhar em várias branches simultaneamente sem trocar.",
          "git archive: criar um arquivo zip/tar do estado atual do repositório.",
          "git reflog: histórico de todas as movimentações do HEAD (desfaz erros)."
        ]},
        { t: "code", c: String.raw`git shortlog -sn                 # quantos commits cada pessoa fez
git worktree add ../hotfix main  # cria uma cópia da branch em outra pasta
git reflog                       # mostra onde o HEAD esteve
git reflog show HEAD@{2}         # mostra o estado do HEAD 2 movimentos atrás`, lang: "bash" },
        { t: "note", p: "Git hooks são a base da automação de qualidade. Husky + lint-staged é a combinação mais popular em projetos Node.js para garantir que todo commit siga os padrões do time." },
        { t: "warn", p: "Bisect requer que você saiba testar manualmente se o código funciona ou não. Se o projeto tiver testes automatizados, use git bisect run <comando> para automatizar a bisseção." }
      ],
      quiz: [
        { q: "Um Git hook pre-commit:", opts: ["Roda após o push.", "Roda antes do commit, ideal para lint e testes.", "Roda apenas no GitHub.", "É um arquivo de configuração."], ans: 1, expl: "O pre-commit executa scripts antes de finalizar o commit, permitindo validar código automaticamente." },
        { q: "Husky é uma ferramenta para:", opts: ["Gerenciar repositórios remotos.", "Simplificar a criação e distribuição de Git hooks.", "Substituir o Git.", "Criar branches automáticas."], ans: 1, expl: "Husky torna fácil configurar Git hooks em projetos, especialmente com Node.js." },
        { q: "Lint-staged roda lint:", opts: ["Em todos os arquivos do projeto.", "Apenas nos arquivos que estão no staging area.", "Apenas em arquivos .js.", "No momento do push."], ans: 1, expl: "Lint-staged é eficiente: só processa arquivos modificados, economizando tempo em projetos grandes." },
        { q: "git bisect é usado para:", opts: ["Criar branches.", "Encontrar o commit que introduziu um bug via busca binária.", "Fazer merge automático.", "Limpar o histórico."], ans: 1, expl: "Bisect faz busca binária no histórico, testando commits intermediários até encontrar o culpado." },
        { q: "git shortlog -sn mostra:", opts: ["O tamanho dos arquivos.", "Uma contagem de commits por autor.", "Os branches disponíveis.", "Os arquivos ignorados."], ans: 1, expl: "shortlog -sn ordena autores pelo número de commits, útil para relatórios de contribuição." },
        { q: "git worktree permite:", opts: ["Deletar branches antigas.", "Trabalhar em múltiplas branches simultaneamente sem trocar.", "Criar repositórios remotos.", "Comprimir o histórico."], ans: 1, expl: "Worktree cria cópias da branch em pastas separadas, permitindo trabalhar em várias branches ao mesmo tempo." },
        { q: "O hook commit-msg:", opts: ["Roda após o commit.", "Valida a mensagem de commit (ex.: formato Conventional Commits).", "Deleta commits antigos.", "Faz push automático."], ans: 1, expl: "commit-msg valida se a mensagem segue o padrão definido, garantindo consistência no histórico." },
        { q: "git reflog é útil para:", opts: ["Criar branches.", "Desfazer erros vendo onde o HEAD esteve anteriormente.", "Limpar arquivos ignorados.", "Fazer merge."], ans: 1, expl: "Reflog guarda todas as movimentações do HEAD, permitindo recuperar commits perdidos ou reset acidental." },
        { q: "O comando git bisect run:", opts: ["Roda testes manuais.", "Automatiza a bisseção com um comando de teste.", "Cria um novo commit.", "Deleta branches."], ans: 1, expl: "bisect run automatiza a busca: você passa um comando que retorna 0 (bom) ou não-zero (ruim)." },
        { q: "O hook pre-push é ideal para:", opts: ["Rodar linter no commit.", "Rodar testes completos antes de enviar ao remoto.", "Mensagem de commit.", "Limpar stash."], ans: 1, expl: "O pre-push é a última barreira antes do push, ideal para testes que demoram e não devem rodar no commit." }
      ]
    }
  ]
};
