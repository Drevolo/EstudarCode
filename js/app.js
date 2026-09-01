/***************************************************************
 *  EstudarCode - plataforma para aprender a programar
 *  Cursos: Lógica de Programação, C, Python, JavaScript, HTML e CSS
 *  Os cursos extras (data-*.js) são mesclados a este DATA.
 ***************************************************************/

const DATA = {
  lp: {
    name: "Lógica",
    topics: [
      {
        id: "lp-algoritmo",
        title: "O que é um Algoritmo",
        subtitle: "A base de tudo: sequência de passos para resolver problemas.",
        blocks: [
          { t: "h", h: "O que é um algoritmo?" },
          { t: "p", p: "Um algoritmo é uma sequência finita e ordenada de passos que leva de um problema até a sua solução. Ele funciona como uma receita de bolo: se você seguir os passos na ordem certa, o resultado sai como o esperado. Todo programa de computador começa com um algoritmo." },
          { t: "h", h: "Características de um bom algoritmo" },
          { t: "lst", items: [
            "Finito: termina depois de um número de passos.",
            "Bem definido: cada passo é claro e sem ambiguidade.",
            "Eficaz: resolve realmente o problema proposto.",
            "Entrada e saída definidas: recebe dados e produz um resultado."
          ]},
          { t: "h", h: "Exemplo: trocar um pneu" },
          { t: "ol", items: [
            "Pegue o estepe, o macaco e a chave de roda.",
            "Afrouxe os parafusos do pneu furado.",
            "Eleve o carro com o macaco.",
            "Retire os parafusos e o pneu.",
            "Encaixe o pneu novo e aperte os parafusos.",
            "Abaixe o carro.",
            "Aperte os parafusos novamente."
          ]},
          { t: "h", h: "Formas de representar um algoritmo" },
          { t: "lst", items: [
            "Descrição narrativa: passar o passo a passo em linguagem comum (como o exemplo do pneu).",
            "Fluxograma: representar os passos com formas geométricas e setas.",
            "Pseudocódigo (Portugol): escrever em um texto estruturado, próximo do português. É o que usaremos."
          ]},
          { t: "code", c: String.raw`ALGORITMO soma_de_dois_numeros
VAR
    n1, n2, soma : INTEIRO
INICIO
    ESCREVER("Digite o primeiro número: ")
    LER(n1)
    ESCREVER("Digite o segundo número: ")
    LER(n2)
    soma <- n1 + n2
    ESCREVER("A soma é: ", soma)
FIM` },
          { t: "note", p: "O pseudocódigo não executa direto no computador. Primeiro você resolve a lógica nele e depois traduz para uma linguagem como o C." , msg: "Atenção" },
          { t: "h", h: "Lógica de Programação" },
          { t: "p", p: "Lógica de programação é a habilidade de organizar o raciocínio para transformar um problema em uma sequência lógica de comandos. Ela independe da linguagem: quem domina a lógica aprende qualquer linguagem com muito mais facilidade." }
        ],
        quiz: [
          { q: "O que é um algoritmo?", opts: ["Um programa pronto para ser executado.", "Uma sequência finita e ordenada de passos para resolver um problema.", "Um tipo de dado numérico.", "Uma linguagem de programação."], ans: 1, expl: "O algoritmo é o passo a passo da solução e serve de base para qualquer programa." },
          { q: "Qual das opções NÃO é característica de um bom algoritmo?", opts: ["Terminar em algum momento (ser finito).", "Ter passos claros e sem ambiguidade.", "Não receber nem produzir dados, para rodar sem erro.", "Resolver um problema de forma estruturada."], ans: 2, expl: "Um bom algoritmo pode até dispensar entrada, mas normalmente produz uma saída — e sempre resolve um problema de forma clara e finita." },
          { q: "O pseudocódigo (Portugol) é usado para:", opts: ["Rodar direto no processador.", "Descrever a lógica do algoritmo de forma estruturada, próxima do português.", "Substituir o fluxograma em todos os casos.", "Compilar programas em C."], ans: 1, expl: "O Portugol representa a lógica em texto estruturado, servindo de ponte entre o raciocínio e a linguagem de programação." },
          { q: "Qual das opções abaixo melhor descreve um fluxograma?", opts: ["Um programa executável.", "Uma representação gráfica de um algoritmo usando formas geométricas e setas.", "Um tipo de variável.", "Uma linguagem de programação."], ans: 1, expl: "O fluxograma usa figuras geométricas conectadas por setas para representar visualmente os passos de um algoritmo." },
          { q: "Para que serve a pseudocódigo em relação a uma linguagem de programação como o C?", opts: ["Substitui o compilador.", "Permite planejar a lógica antes de escrever o código na linguagem real.", "É mais rápido que C.", "Não tem relação com programação."], ans: 1, expl: "O pseudocódigo é uma ferramenta de planejamento: você resolve a lógica nele e depois traduz para a linguagem de programação." },
          { q: "Qual das opções abaixo é uma característica obrigatória de todo algoritmo?", opts: ["Ter pelo menos 10 passos.", "Ser escrito em pseudocódigo.", "Ser finito, ou seja, terminar em algum momento.", "Usar variáveis."], ans: 2, expl: "Todo algoritmo deve ser finito: precisa terminar após um número limitado de passos." },
          { q: "Um algoritmo para calcular a média de 3 notas deve, obrigatoriamente:", opts: ["Ler 3 valores, somá-los, dividir por 3 e mostrar o resultado.", " Ler apenas um valor e multiplicar por 3.", "Usar pelo menos duas variáveis.", "Ter uma estrutura de repetição."], ans: 0, expl: "O algoritmo de média precisa ler os dados, processar (somar e dividir) e exibir o resultado final." },
          { q: "A diferença entre um algoritmo e um programa de computador é:", opts: ["Não existe diferença.", "O algoritmo é a lógica abstrata; o programa é a implementação em uma linguagem de programação.", "O programa é mais curto que o algoritmo.", "O algoritmo só funciona em C."], ans: 1, expl: "O algoritmo descreve a lógica da solução de forma abstrata; o programa é essa lógica traduzida para uma linguagem que o computador entende." },
          { q: "Qual forma de representação de algoritmo usa formas geométricas ligadas por setas?", opts: ["Pseudocódigo.", "Descrição narrativa.", "Fluxograma.", "Tabela-verdade."], ans: 2, expl: "O fluxograma representa passos com formas geométricas (retângulos, losangos, elipses) conectadas por setas." },
          { q: "Em um fluxograma, qual forma geométrica é usada para decisões (condições)?", opts: ["Retângulo.", "Elipse.", "Losango.", "Paralelogramo."], ans: 2, expl: "O losango representa uma decisão: o fluxo se divide em dois caminhos conforme a condição (verdadeira ou falsa)." }
        ]
      },
      {
        id: "lp-variaveis",
        title: "Variáveis e Tipos de Dados",
        subtitle: "As 'caixinhas' da memória que guardam os valores do programa.",
        blocks: [
          { t: "h", h: "O que é uma variável?" },
          { t: "p", p: "Uma variável é um espaço reservado na memória do computador para armazenar um valor. Chama-se variável porque o valor pode mudar durante a execução. Pense nela como uma caixinha etiquetada: a etiqueta é o nome e o conteúdo é o valor." },
          { t: "lst", items: [
            "Nome (identificador): como vamos nos referir à variável.",
            "Tipo: o tipo de dado que ela pode guardar.",
            "Valor: o conteúdo atual (que pode ser alterado)."
          ]},
          { t: "h", h: "Regras para nomes (identificadores)" },
          { t: "lst", items: [
            "Não pode começar com número (1nome é inválido).",
            "Não pode ter espaços (use idadeAluno ou idade_aluno).",
            "Não pode ser palavra reservada (ex.: SE, INICIO, FIM).",
            "Evite acentos e caracteres especiais.",
            "Use nomes significativos: nomeDoCliente é melhor que xyz."
          ]},
          { t: "h", h: "Tipos de dados mais comuns" },
          { t: "lst", items: [
            "INTEIRO: números sem casa decimal (ex.: 5, -3, 1000).",
            "REAL: números com casa decimal (ex.: 3.14, 19.90).",
            "CARACTERE: letras, símbolos ou textos (ex.: \"Ana\", \"a\").",
            "LOGICO: somente VERDADEIRO ou FALSO (ex.: aprovado)."
          ]},
          { t: "h", h: "Constantes" },
          { t: "p", p: "Uma constante é um valor fixo que não muda durante o programa — por exemplo, PI = 3.14159. Usamos constantes para proteger valores de alterações acidentais." },
          { t: "code", c: String.raw`VAR
    idade     : INTEIRO
    preco     : REAL
    nome      : CARACTERE
    aprovado  : LOGICO

INICIO
    idade <- 18
    preco <- 19.90
    nome <- "Gabriel"
    aprovado <- VERDADEIRO

    ESCREVER(nome, " tem ", idade, " anos.")
    ESCREVER("Preço: ", preco)
    ESCREVER("Aprovado: ", aprovado)
FIM` },
          { t: "note", p: "O símbolo <- significa \"recebe\" (atribuição). Lemos idade <- 18 como \"a variável idade recebe o valor 18\"." },
          { t: "warn", p: "Uma variável só pode guardar valores do tipo com que foi declarada. Não tente colocar um texto em uma variável INTEIRA." }
        ],
        quiz: [
          { q: "Qual das opções é um nome válido para uma variável?", opts: ["2nota", "nota do aluno", "notaAluno", "Se"], ans: 2, expl: "Não pode começar com número, não pode ter espaço e \"Se\" é palavra reservada. notaAluno segue todas as regras." },
          { q: "O tipo de dado mais adequado para \"aprovado ou reprovado\" é:", opts: ["INTEIRO", "LOGICO", "REAL", "CARACTERE"], ans: 1, expl: "Lógico guarda apenas VERDADEIRO ou FALSO — perfeito para esse caso." },
          { q: "A atribuição \"idade <- 18\" significa:", opts: ["A variável idade é comparada com 18.", "A variável idade recebe o valor 18.", "18 é mudado para idade.", "O programa imprime \"idade 18\"."], ans: 1, expl: "O operador <- armazena (atribui) o valor 18 na variável idade." },
          { q: "Qual é o tipo de dado mais adequado para armazenar o preço de um produto como 19.90?", opts: ["INTEIRO", "LOGICO", "REAL", "CARACTERE"], ans: 2, expl: "REAL guarda números com casa decimal, como 19.90. INTEIRO só aceita números sem parte fracionária." },
          { q: "Qual das opções abaixo é um nome inválido para uma variável?", opts: ["totalGeral", "TOTAL", "_resultado", "2valor"], ans: 3, expl: "Nomes de variáveis não podem começar com número. \"2valor\" viola essa regra." },
          { q: "Ao fazer idade <- 18 e depois idade <- 25, qual é o valor final de idade?", opts: ["18", "25", "43", "Erro de compilação"], ans: 1, expl: "A segunda atribuição sobrescreve o valor anterior. idade passa a guardar 25." },
          { q: "Qual é a diferença entre uma variável e uma constante?", opts: ["Não há diferença.", "A constante não pode ter o valor alterado durante a execução do programa.", "A variável só guarda textos.", "A constante ocupa mais memória."], ans: 1, expl: "Uma constante tem valor fixo durante toda a execução; a variável pode mudar de valor a qualquer momento." },
          { q: "Qual tipo de dado deve ser usado para armazenar o texto \"Brasil\"?", opts: ["INTEIRO", "REAL", "LOGICO", "CARACTERE"], ans: 3, expl: "CARACTERE (ou cadeia de caracteres) é o tipo adequado para textos." },
          { q: "Uma variável declarada como INTEIRO pode armazenar o valor 3.75?", opts: ["Sim, sem problemas.", "Sim, mas arredonda automaticamente.", "Não, pois INTEIRO só aceita números sem parte decimal.", "Depende do computador."], ans: 2, expl: "O tipo INTEIRO guarda apenas números inteiros. Para valores fracionários, use REAL." },
          { q: "Em pseudocódigo, qual símbolo é usado para atribuição?", opts: ["=", "==", "<-", "+"], ans: 2, expl: "O operador <- significa \"recebe\" e é usado para atribuir valores a variáveis no pseudocódigo." }
        ]
      },
      {
        id: "lp-operadores",
        title: "Operadores",
        subtitle: "Aritméticos, relacionais e lógicos — as ferramentas dos cálculos e testes.",
        blocks: [
          { t: "h", h: "Operadores aritméticos" },
          { t: "lst", items: [
            "+ soma            ex.: 5 + 3 = 8",
            "- subtração       ex.: 5 - 3 = 2",
            "* multiplicação   ex.: 5 * 3 = 15",
            "/ divisão         ex.: 10 / 2 = 5",
            "mod resto da divisão inteira  ex.: 7 mod 3 = 1"
          ]},
          { t: "h", h: "Operadores relacionais" },
          { t: "p", p: "Compara dois valores e o resultado é sempre LOGICO (VERDADEIRO ou FALSO):" },
          { t: "lst", items: [
            ">  maior que",
            "<  menor que",
            ">= maior ou igual a",
            "<= menor ou igual a",
            "=  igual a",
            "<> diferente de"
          ]},
          { t: "h", h: "Operadores lógicos" },
          { t: "lst", items: [
            "E: verdadeiro somente quando as duas condições são verdadeiras.",
            "OU: verdadeiro quando pelo menos uma das condições é verdadeira.",
            "NAO: inverte o valor lógico (verdadeiro vira falso e vice-versa)."
          ]},
          { t: "h", h: "Tabela verdade (E e OU)" },
          { t: "code", c: String.raw`   A   |   B   | A E B | A OU B
 ------+-------+-------+--------
  V    |  V    |   V   |   V
  V    |  F    |   F   |   V
  F    |  V    |   F   |   V
  F    |  F    |   F   |   F` },
          { t: "h", h: "Exemplo no pseudocódigo" },
          { t: "code", c: String.raw`VAR
    media : REAL
INICIO
    ESCREVER("Digite a média: ")
    LER(media)

    SE (media >= 6) E (media <= 10) ENTAO
        ESCREVER("Média válida.")
    FIMSE
FIM` },
          { t: "note", p: "Precedência: primeiro (), depois * / mod, depois + -, depois os relacionais (>, <, =...), e por fim os lógicos E, OU, NAO." }
        ],
        quiz: [
          { q: "Qual é o resultado de 7 mod 3?", opts: ["3", "2", "1", "1.5"], ans: 2, expl: "7 dividido por 3 dá 2 e sobra resto 1. O operador mod retorna esse resto." },
          { q: "O resultado de (5 > 3) E (2 < 1) é:", opts: ["VERDADEIRO", "FALSO", "Erro de execução", "Depende do dia"], ans: 1, expl: "A segunda condição é falsa e, no operador E, basta uma condição falsa para o resultado ser falso." },
          { q: "Qual operador relacional retorna VERDADEIRO quando os dois valores são iguais?", opts: ["<>", "=", ">", ">="], ans: 1, expl: "O operador de igualdade no pseudocódigo é = . Já <> significa diferente." },
          { q: "Qual é o resultado de (3 > 5) OU (7 > 2)?", opts: ["VERDADEIRO", "FALSO", "Erro", "Depende"], ans: 0, expl: "Embora 3 > 5 seja FALSO, 7 > 2 é VERDADEIRO. No operador OU, basta uma condição verdadeira para o resultado ser verdadeiro." },
          { q: "Na expressão 2 + 3 * 4, qual operação é resolvida primeiro?", opts: ["2 + 3", "3 * 4", "Depende da ordem", "Todas ao mesmo tempo"], ans: 1, expl: "Multiplicação tem precedência sobre adição, então 3 * 4 é resolvido antes da soma." },
          { q: "Qual é o resultado de NAO (5 > 3)?", opts: ["VERDADEIRO", "FALSO", "Erro de sintaxe", "5"], ans: 1, expl: "5 > 3 é VERDADEIRO; NAO inverte para FALSO." },
          { q: "O resultado de 10 / 3 no pseudocódigo com variáveis INTEIRAS é:", opts: ["3,333...", "3", "4", "Depende da linguagem"], ans: 1, expl: "Na divisão inteira entre dois números INTEIROS, o resultado é o quociente sem resto: 3." },
          { q: "O operador <> significa:", opts: ["Maior ou igual.", "Igual a.", "Diferente de.", "Menor que."], ans: 2, expl: "O operador <> verifica se dois valores são diferentes (não é igual)." },
          { q: "Se A = 4 e B = 2, quanto vale A >= B E A <> B?", opts: ["VERDADEIRO", "FALSO", "Erro", "Depende"], ans: 0, expl: "A >= B (4 >= 2) é V; A <> B (4 <> 2) é V; V E V = VERDADEIRO." },
          { q: "Se X = 3 e Y = 5, quanto vale NAO (X + Y > 9)?", opts: ["VERDADEIRO", "FALSO", "Erro", "8"], ans: 0, expl: "X + Y = 8; 8 > 9 é FALSO; NAO (FALSO) = VERDADEIRO." }
        ]
      },
      {
        id: "lp-condicionais",
        title: "Estruturas Condicionais",
        subtitle: "Fazendo o programa tomar decisões (SE, SENAO).",
        blocks: [
          { t: "h", h: "Decisões com SE" },
          { t: "p", p: "As condicionais permitem que o programa siga caminhos diferentes conforme uma condição. A estrutura fundamental é o SE (if)." },
          { t: "code", c: String.raw`SE (condicao) ENTAO
    ...bloco se a condicao for verdadeira...
FIMSE

SE (condicao) ENTAO
    ...bloco se verdadeira...
SENAO
    ...bloco se falsa...
FIMSE` },
          { t: "h", h: "Exemplo 1 — Par ou ímpar" },
          { t: "code", c: String.raw`VAR
    n : INTEIRO
INICIO
    ESCREVER("Digite um número: ")
    LER(n)

    SE (n mod 2 = 0) ENTAO
        ESCREVER(n, " é par.")
    SENAO
        ESCREVER(n, " é ímpar.")
    FIMSE
FIM` },
          { t: "h", h: "Exemplo 2 — Nota do aluno" },
          { t: "code", c: String.raw`VAR
    nota : REAL
INICIO
    ESCREVER("Digite a nota: ")
    LER(nota)

    SE (nota >= 6) ENTAO
        ESCREVER("Aprovado!")
    SENAO SE (nota >= 4) ENTAO
        ESCREVER("Recuperação.")
    SENAO
        ESCREVER("Reprovado.")
    FIMSE
FIM` },
          { t: "note", p: "Condicionais podem ser aninhadas (um SE dentro de outro). Cuidado para fechar todos com o FIMSE correspondente." },
          { t: "warn", p: "Você pode combinar condições com os operadores E e OU, ex.: SE (n > 0) E (n < 100)." }
        ],
        quiz: [
          { q: "A estrutura SE...SENAO executa:", opts: ["O bloco do SENAO quando a condição é verdadeira.", "O bloco do SE e depois o do SENAO.", "O bloco do SE quando verdadeiro, senão o do SENAO.", "Nenhum dos blocos."], ans: 2, expl: "O SE é exclusivo: um dos caminhos é executado, nunca os dois ao mesmo tempo." },
          { q: "Com nota = 5, o que o Exemplo 2 imprime?", opts: ["Aprovado!", "Recuperação.", "Reprovado.", "Nada."], ans: 1, expl: "5 não é >= 6, mas é >= 4, então cai no meio: Recuperação." },
          { q: "Para testar uma condição sem executar nada quando ela for falsa, usamos:", opts: ["Apenas o SE", "O SE...SENAO", "Duas variáveis", "Um laço"], ans: 0, expl: "Sem o SENAO, quando a condição é falsa o programa simplesmente segue para a próxima linha." },
          { q: "Em uma estrutura SE...SENAO SE...SENAO, quantos blocos podem ser executados ao mesmo tempo?", opts: ["Todos.", "No máximo um.", "Dois.", "Depende do tamanho do código."], ans: 1, expl: "Apenas um bloco é executado: o primeiro cuja condição for verdadeira, ou o SENAO final." },
          { q: "Para testar se um número está entre 10 e 50 (inclusive), a condição correta é:", opts: ["SE (n > 10) E (n < 50)", "SE (n >= 10) E (n <= 50)", "SE (n >= 10) OU (n <= 50)", "SE (n > 10) OU (n < 50)"], ans: 1, expl: "\"Entre 10 e 50 inclusive\" significa n maior ou igual a 10 E menor ou igual a 50." },
          { q: "No exemplo 1 (par ou ímpar), se o usuário digita 7, o que é impresso?", opts: ["7 é par.", "7 é ímpar.", "Nada.", "Erro."], ans: 1, expl: "7 mod 2 = 1 (diferente de 0), então a condição é falsa e o SENAO executa: \"7 é ímpar\"." },
          { q: "Em uma estrutura SE aninhada (SE dentro de SE), quantas vezes o FIMSE deve aparecer?", opts: ["Uma vez só.", "Uma vez para cada SE aberto.", "Duas vezes no máximo.", "Não precisa de FIMSE."], ans: 1, expl: "Cada SE precisa do seu próprio FIMSE correspondente; se há 3 SE aninhados, há 3 FIMSE." },
          { q: "Qual é a diferença entre SE...SENAO e SE...SENAO SE...SENAO?", opts: ["Não há diferença.", "O primeiro testa uma condição; o segundo testa múltiplas condições em sequência.", "O segundo é sempre mais lento.", "O primeiro aceita mais condições."], ans: 1, expl: "O SE...SENAO SE permite testar múltiplas condições em sequência, executando apenas o bloco do primeiro caso verdadeiro." },
          { q: "Se nota = 3,99, o que o Exemplo 2 imprime?", opts: ["Aprovado!", "Recuperação.", "Reprovado.", "Erro."], ans: 2, expl: "3,99 não é >= 6 e também não é >= 4 (é menor que 4), então cai no SENAO final: Reprovado." },
          { q: "Em pseudocódigo, qual estrutura alternativa ao SE quando se quer executar algo só se a condição for verdadeira?", opts: ["Usar um PARA.", "Apenas o SE sem SENAO.", "Usar REPITA.", "Usar um vetor."], ans: 1, expl: "Sem o SENAO, o bloco do SE é executado apenas quando a condição é verdadeira; se falsa, nada acontece." }
        ]
      },
      {
        id: "lp-repeticoes",
        title: "Estruturas de Repetição",
        subtitle: "Laços: repetindo blocos sem escrever mil linhas.",
        blocks: [
          { t: "h", h: "Por que usar laços" },
          { t: "p", p: "Laços (repetições) executam um bloco várias vezes. São ideais para tarefas repetitivas, como somar as notas de 40 alunos sem escrever 40 linhas de código." },
          { t: "h", h: "PARA (repetição com contagem conhecida)" },
          { t: "code", c: String.raw`PARA i DE 1 ATE 10 FACA
    ESCREVER(i)
FIMPARA` },
          { t: "h", h: "ENQUANTO (repete enquanto a condição for verdadeira)" },
          { t: "code", c: String.raw`VAR
    cont : INTEIRO
INICIO
    cont <- 1
    ENQUANTO (cont <= 10) FACA
        ESCREVER(cont)
        cont <- cont + 1
    FIMENQUANTO
FIM` },
          { t: "h", h: "REPITA (executa ao menos uma vez)" },
          { t: "code", c: String.raw`VAR
    senha : INTEIRO
INICIO
    REPITA
        ESCREVER("Digite a senha: ")
        LER(senha)
    ATE (senha = 1234)
FIM` },
          { t: "h", h: "Exemplo: soma de 1 a 5" },
          { t: "code", c: String.raw`VAR
    i, soma : INTEIRO
INICIO
    soma <- 0
    PARA i DE 1 ATE 5 FACA
        soma <- soma + i
    FIMPARA
    ESCREVER("Soma: ", soma)   {imprime 15}
FIM` },
          { t: "note", p: "O padrão soma <- soma + i acumula valores. É a base de somatórios e médias." },
          { t: "warn", p: "Se a condição do ENQUANTO nunca ficar falsa, o programa vira um loop infinito. Sempre garanta que algo muda dentro do laço (como cont <- cont + 1)." }
        ],
        quiz: [
          { q: "Quantas vezes o corpo a seguir executa? PARA i DE 1 ATE 3 FACA ... FIMPARA", opts: ["1 vez", "2 vezes", "3 vezes", "4 vezes"], ans: 2, expl: "O laço roda para i = 1, 2 e 3 — ou seja, 3 repetições." },
          { q: "A diferença principal entre ENQUANTO e REPITA é:", opts: ["ENQUANTO testa antes de executar; REPITA testa depois (executa ao menos uma vez).", "Não há diferença.", "REPITA é sempre mais rápido.", "ENQUANTO não usa condição."], ans: 0, expl: "ENQUANTO verifica no início; REPITA verifica no final, por isso sempre executa pelo menos uma vez." },
          { q: "No trecho soma <- soma + i, a variável soma:", opts: ["Recebe o valor de i.", "Acumula o valor de i a cada repetição.", "É comparada com i.", "Sempre vale 1."], ans: 1, expl: "Esse padrão acumula: a cada iteração o total recebe o valor atual de i somado ao que já tinha." },
          { q: "No laço ENQUANTO, se a condição nunca se tornar falsa, o que acontece?", opts: ["O programa termina normalmente.", "O programa entra em loop infinito.", "O compilador avisa o erro.", "O laço executa apenas uma vez."], ans: 1, expl: "Se a condição nunca ficar falsa, o laço repete para sempre, causando um loop infinito." },
          { q: "Qual estrutura de repetição testa a condição no final, garantindo pelo menos uma execução?", opts: ["PARA", "ENQUANTO", "REPITA", "Nenhuma delas"], ans: 2, expl: "O REPITA testa a condição ao final do bloco, então o corpo é executado pelo menos uma vez." },
          { q: "Se um PARA vai de 1 ATE 5 FACA, quantas vezes o corpo é executado?", opts: ["4", "5", "6", "10"], ans: 1, expl: "O PARA executa para i = 1, 2, 3, 4 e 5 — exatamente 5 vezes." },
          { q: "Qual é a diferença prática entre ENQUANTO e PARA?", opts: ["Não existe diferença.", "O PARA usa variável de controle com limite definido; o ENQUANTO repete enquanto uma condição for verdadeira.", "O ENQUANTO é mais rápido.", "O PARA não pode ser aninhado."], ans: 1, expl: "O PARA é ideal quando sabemos quantas repetições serão; o ENQUANTO é melhor quando a condição depende de um teste lógico." },
          { q: "No trecho PARA i DE 1 ATE 4 FACA, se quisermos que i pule de 2 em 2, como ficaria?", opts: ["PARA i DE 1 ATE 4 PASSO 2", "PARA i DE 1 ATE 4 PASSO 1", "PARA i DE 2 ATE 4", "Não é possível"], ans: 0, expl: "O passo define o incremento de cada iteração. PASSO 2 faz i valer 1 e 3 (saltando de 2 em 2)." },
          { q: "Se o ENQUANTO tem condição (n > 0) e n começa com -1, o que acontece?", opts: ["O laço executa uma vez.", "O laço não executa nenhuma vez.", "O laço é infinito.", "Erro de compilação."], ans: 1, expl: "O ENQUANTO testa a condição antes de executar. Como -1 > 0 é falso, o corpo nunca é executado." },
          { q: "O que acontece se um REPITA tiver a condição sempre verdadeira desde o início?", opts: ["O laço não executa.", "O laço executa uma vez e para.", "O laço é infinito.", "Erro de sintaxe."], ans: 2, expl: "No REPITA, a condição \"ATE\" é de parada. Se ela é verdadeira logo no início, o laço continua repetindo para sempre (loop infinito)." }
        ]
      },
      {
        id: "lp-vetores",
        title: "Vetores e Matrizes",
        subtitle: "Agrupando vários valores do mesmo tipo.",
        blocks: [
          { t: "h", h: "Vetor" },
          { t: "p", p: "Um vetor (ou array) guarda vários valores do mesmo tipo acessados por um índice. No pseudocódigo, a contagem normalmente começa em 1 e vai até N." },
          { t: "code", c: String.raw`VAR
    notas : VETOR [1..5] DE INTEIRO
    i     : INTEIRO
INICIO
    PARA i DE 1 ATE 5 FACA
        ESCREVER("Digite a nota do aluno ", i, ": ")
        LER(notas[i])
    FIMPARA

    PARA i DE 1 ATE 5 FACA
        ESCREVER("Aluno ", i, ": ", notas[i])
    FIMPARA
FIM` },
          { t: "h", h: "Matriz" },
          { t: "p", p: "Uma matriz é um \"vetor de vetores\": uma tabela com linhas e colunas. Exemplo: notas de 3 alunos em 4 provas." },
          { t: "code", c: String.raw`VAR
    notas : MATRIZ [1..3, 1..4] DE REAL
    lin, col : INTEIRO
INICIO
    PARA lin DE 1 ATE 3 FACA
        PARA col DE 1 ATE 4 FACA
            ESCREVER("Nota do aluno ", lin, " na prova ", col, ": ")
            LER(notas[lin, col])
        FIMPARA
    FIMPARA
FIM` },
          { t: "h", h: "Por que usar vetores?" },
          { t: "lst", items: [
            "Evita criar mil variáveis (nota1, nota2, nota3...).",
            "Permite percorrer os dados com laços.",
            "Facilita cálculos como média, maior, menor e ordenação."
          ]},
          { t: "note", p: "Sempre respeite os limites do vetor. Acessar um índice fora do intervalo é um erro clássico de prova e de execução." }
        ],
        quiz: [
          { q: "No vetor notas[1..5], quantos valores cabem?", opts: ["4", "5", "6", "10"], ans: 1, expl: "São as posições 1, 2, 3, 4 e 5 — cinco valores." },
          { q: "Qual é a principal utilidade de um vetor?", opts: ["Guardar tipos diferentes na mesma posição.", "Armazenar vários valores do mesmo tipo para manipular com laços.", "Só enfeitar o código.", "Eliminar a necessidade de entrada de dados."], ans: 1, expl: "O vetor agrupa valores do mesmo tipo e permite processá-los em conjunto com laços." },
          { q: "Para guardar as notas de 30 alunos em 7 provas, o ideal é:", opts: ["30 variáveis.", "Um vetor simples.", "Uma matriz [1..30, 1..7].", "Uma constante."], ans: 2, expl: "Precisamos de duas dimensões: uma para o aluno e outra para a prova. Isso é uma matriz." },
          { q: "Para percorrer todas as posições de um vetor, o laço mais indicado é:", opts: ["Um SE", "Um PARA com variável de controle percorrendo os índices", "Um REPITA sem condição", "Não é possível percorrer um vetor"], ans: 1, expl: "O PARA com um contador que vai de 1 até o tamanho do vetor é a forma mais comum e clara de acessar todas as posições." },
          { q: "Acessar uma posição de vetor que não existe (por exemplo, notas[6] em um vetor de 5 posições) resulta em:", opts: ["Um erro de compilação garantido.", "Um valor zero automático.", "Um erro lógico: o programa acessa memória indevida.", "Nada acontece."], ans: 2, expl: "Vetores não verificam limites automaticamente; acessar além do intervalo causa comportamento imprevisível." },
          { q: "No pseudocódigo, como se declara um vetor de 10 posições inteiras?", opts: ["VETOR v[1..10] DE INTEIRO", "INTEIRO v[1..10]", "VETOR v DE 10", "v : 10 INTEIROS"], ans: 0, expl: "A forma correta de declarar é VETOR seguido do nome, intervalo de índices e o tipo dos dados." },
          { q: "Se um vetor tem índices de 1 a 8, quantos elementos ele contém?", opts: ["7", "8", "9", "16"], ans: 1, expl: "De 1 a 8 são exatamente 8 posições, logo 8 elementos." },
          { q: "Para alterar o valor da terceira posição de um vetor notas, qual instrução é correta?", opts: ["notas[3] <- 10", "notas(3) <- 10", "notas <- 10[3]", "SET notas[3] = 10"], ans: 0, expl: "No pseudocódigo, acessa-se a posição com colchetes e atribui com <-." },
          { q: "Se o vetor dados é declarado como VETOR dados[1..5] DE INTEIRO e você executa dados[1] <- 7 e dados[2] <- dados[1] + 3, qual é o valor de dados[2]?", opts: ["3", "7", "10", "Erro"], ans: 2, expl: "dados[1] vale 7; dados[2] recebe 7 + 3 = 10." },
          { q: "Qual é a vantagem de usar um vetor em vez de criar variáveis separadas (nota1, nota2, nota3)?", opts: ["Não há vantagem.", "Permite acessar qualquer posição com um laço e evitar repetição de código.", "Vetores são sempre mais rápidos.", "Variáveis separadas não existem no pseudocódigo."], ans: 1, expl: "Com um vetor, um único laço pode processar todas as posições; com variáveis separadas, seria necessário escrever código repetido para cada uma." }
        ]
      },
      {
        id: "lp-funcoes",
        title: "Funções e Modularização",
        subtitle: "Dividindo o problema em blocos menores e reutilizáveis.",
        blocks: [
          { t: "h", h: "Por que usar funções?" },
          { t: "p", p: "Funções separam o programa em blocos reutilizáveis. Cada função resolve uma parte do problema, recebendo dados (parâmetros) e devolvendo um resultado (retorno)." },
          { t: "h", h: "Estrutura de uma função" },
          { t: "code", c: String.raw`FUNCAO nome(parametros) : TIPO_DE_RETORNO
INICIO
    ...corpo da função...
    RETORNAR valor
FIM` },
          { t: "h", h: "Exemplo: maior entre dois números" },
          { t: "code", c: String.raw`FUNCAO maior(a, b : INTEIRO) : INTEIRO
INICIO
    SE (a > b) ENTAO
        RETORNAR a
    SENAO
        RETORNAR b
    FIMSE
FIM

{ Programa principal }
INICIO
    VAR
        x, y : INTEIRO
    ESCREVER("Digite dois números: ")
    LER(x)
    LER(y)
    ESCREVER("Maior: ", maior(x, y))
FIM` },
          { t: "h", h: "Vantagens" },
          { t: "lst", items: [
            "Dividir para conquistar: problemas complexos viram problemas menores.",
            "Reutilizar código: a função é chamada quantas vezes precisar.",
            "Facilitar correção e testes (dá para testar função por função)."
          ]}
        ],
        quiz: [
          { q: "O que o comando RETORNAR faz em uma função?", opts: ["Imprime um valor na tela.", "Devolve um valor a quem chamou a função e encerra a função.", "Reinicia o programa.", "Declara uma variável."], ans: 1, expl: "RETORNAR envia o resultado para a chamada e encerra imediatamente a execução da função." },
          { q: "Os parâmetros de uma função servem para:", opts: ["Melhorar a aparência do código.", "Receber os dados que a função precisa para trabalhar.", "Não servem para nada.", "Declarar o tipo de retorno."], ans: 1, expl: "Parâmetros são a porta de entrada da função: é por eles que passamos as informações necessárias." },
          { q: "Qual é a grande vantagem de modularizar o programa com funções?", opts: ["O programa fica obrigatoriamente mais rápido.", "É possível reutilizar e testar cada parte separadamente.", "Elimina a necessidade de variáveis.", "O programa nunca terá erros."], ans: 1, expl: "Modularizar organiza o raciocínio, facilita reuso e torna os testes muito mais fáceis." },
          { q: "Em uma função que calcula o dobro de um número, o parâmetro serve para:", opts: ["Receber o valor a ser dobrado.", "Armazenar o resultado.", "Controlar um laço.", "Não tem utilidade."], ans: 0, expl: "O parâmetro recebe o dado de entrada que a função precisa para realizar seu cálculo." },
          { q: "Se uma função retorna um valor, esse valor pode ser:", opts: ["Apenas impresso na tela.", "Usado em uma expressão ou atribuído a uma variável.", "Guardado em um vetor.", "Apenas comparado."], ans: 1, expl: "O retorno de uma função é um valor que pode ser usado diretamente em expressões ou armazenado em variáveis." },
          { q: "No exemplo da função maior(a, b), se chamarmos maior(8, 3), o retorno será:", opts: ["3", "8", "11", "Erro"], ans: 1, expl: "8 > 3 é verdadeiro, então a função retorna a, que vale 8." },
          { q: "Uma função pode chamar outra função?", opts: ["Não, é proibido.", "Sim, chamar uma função dentro de outra é permitido.", "Somente se tiver o mesmo nome.", "Apenas em C."], ans: 1, expl: "Funções podem chamar outras funções (mesmo a si mesmas, no caso da recursão); isso é perfeitamente válido." },
          { q: "Se não houver um comando RETORNAR em uma função, o que acontece?", opts: ["A função retorna 0 automaticamente.", "Erro de compilação em pseudocódigo.", "Depende da linguagem.", "A função nunca termina."], ans: 1, expl: "No pseudocódigo, toda função que promete um tipo de retorno precisa usar RETORNAR. Sem ele, há erro." },
          { q: "Qual é a importância do tipo de retorno declarado em uma função?", opts: ["Não tem importância.", "Indica qual tipo de dado a função vai devolver ao chamador.", "É apenas decorativo.", "Controla o número de parâmetros."], ans: 1, expl: "O tipo de retorno informa ao programador (e ao compilador) que tipo de dado esperar da função." },
          { q: "Se uma função soma(a, b) retorna a + b, o que soma(3, soma(1, 2)) retorna?", opts: ["3", "5", "6", "Erro"], ans: 2, expl: "soma(1, 2) retorna 3; depois soma(3, 3) retorna 6. Chamadas aninhadas são resolvidas de dentro para fora." }
        ]
      },
      {
        id: "lp-matrizes",
        title: "Matrizes (Vetores 2D)",
        subtitle: "Vetores de vetores: organizando dados em linhas e colunas.",
        blocks: [
          { t: "h", h: "O que é uma matriz" },
          { t: "p", p: "Uma matriz é um vetor de vetores, ou seja, uma estrutura bidimensional organizada em linhas e colunas. Enquanto um vetor usa um único índice, uma matriz usa dois: o primeiro para a linha e o segundo para a coluna. Pense em uma planilha ou em um quadro de tabuleiro." },
          { t: "h", h: "Declarando e acessando" },
          { t: "p", p: "Declaramos uma matriz indicando a quantidade de linhas e de colunas. Para acessar um elemento, usamos dois índices: m[linha][coluna]. O elemento da segunda linha e terceira coluna é m[2][3]." },
          { t: "lst", items: [
            "O primeiro índice seleciona a linha (que linha estamos).",
            "O segundo índice seleciona a coluna (qual posição daquela linha).",
            "Índices fora dos limites causam erros lógicos — o programa acessa memória errada."
          ]},
          { t: "h", h: "Preenchendo com PARA aninhados" },
          { t: "p", p: "Para percorrer todos os elementos de uma matriz usamos um PARA dentro de outro: o laço externo varre as linhas e o interno as colunas. No exemplo a seguir preenchemos uma matriz 3x3 com os números de 1 a 9 e somamos a primeira linha." },
          { t: "code", c: String.raw`VAR
    m : INTEIRO[3][3]
    linha, coluna, valor, soma : INTEIRO
INICIO
    valor <- 1

    { preenche a matriz linha a linha, coluna a coluna }
    PARA linha DE 1 ATE 3 FACA
        PARA coluna DE 1 ATE 3 FACA
            m[linha][coluna] <- valor
            valor <- valor + 1
        FIMPARA
    FIMPARA

    { soma os elementos da primeira linha }
    soma <- 0
    PARA coluna DE 1 ATE 3 FACA
        soma <- soma + m[1][coluna]
    FIMPARA
    ESCREVER("Soma da linha 1: ", soma)
FIM` },
          { t: "h", h: "Exemplo prático: uma grade de tabuleiro" },
          { t: "p", p: "O mesmo padrão serve para imprimir uma grade. Percorrendo cada linha, imprimimos os elementos da linha e depois quebramos a linha para começar a próxima. Sem o controle de \"quebra\" ao final de cada linha, todo o conteúdo sairia em uma única sequência." },
          { t: "note", p: "A ordem dos laços importa: se você trocar os laços (colunas por fora), a matriz é percorrida na vertical em vez de na horizontal." },
          { t: "warn", p: "Lembre-se de que índices começam em 1 no Portugol. Acessar m[0][...] ou m[4][...] em uma matriz 3x3 está fora dos limites e gera resultados imprevisíveis." }
        ],
        quiz: [
          { q: "Uma matriz 3x4 possui:", opts: ["3 linhas e 4 colunas.", "4 linhas e 3 colunas.", "7 elementos no total.", "34 elementos."], ans: 0, expl: "A primeira dimensão é a linha e a segunda a coluna, logo 3 linhas e 4 colunas." },
          { q: "Em uma matriz m[3][3], qual expressão acessa o elemento da segunda linha e terceira coluna?", opts: ["m[3][2]", "m[2][3]", "m[6]", "m[1][2]"], ans: 1, expl: "O primeiro índice é a linha (2) e o segundo a coluna (3): m[2][3]." },
          { q: "No exemplo, por que a \"quebra de linha\" no fim de cada linha é importante ao exibir a matriz?", opts: ["Para não estourar a memória.", "Sem ela, todas as linhas seriam impressas em sequência contínua, perdendo o formato de grade.", "Não é importante.", "Para acelerar o programa."], ans: 1, expl: "A quebra de linha separa as linhas visualmente, preservando a estrutura bidimensional na saída." },
          { q: "Qual é a consequência de acessar um índice fora dos limites da matriz?", opts: ["O programa sempre para com um erro claro.", "Não causa nenhum problema.", "Acessa memória indevida, gerando resultados imprevisíveis.", "O valor retornado é sempre zero."], ans: 2, expl: "Índices fora dos limites acessam regiões de memória que não pertencem à matriz, causando bugs difíceis de encontrar." },
          { q: "Se a matriz m é declarada como m[3][4], quantas linhas e colunas ela tem?", opts: ["3 linhas e 3 colunas.", "4 linhas e 3 colunas.", "3 linhas e 4 colunas.", "7 linhas."], ans: 2, expl: "A primeira dimensão é o número de linhas (3) e a segunda é o de colunas (4)." },
          { q: "Para somar todos os elementos de uma matriz, é necessário:", opts: ["Apenas um laço.", "Dois laços aninhados: um para linhas e outro para colunas.", "Não é possível somar uma matriz.", "Usar apenas a diagonal principal."], ans: 1, expl: "A matriz tem duas dimensões; são necessários dois laços para percorrer todas as linhas e colunas." },
          { q: "Em uma matriz m[3][3], como se acessa o elemento da primeira linha e segunda coluna?", opts: ["m[2][1]", "m[1][2]", "m[3][2]", "m[2][2]"], ans: 1, expl: "O primeiro índice é a linha (1) e o segundo a coluna (2): m[1][2]." },
          { q: "Uma matriz é essencialmente:", opts: ["Um vetor com um único índice.", "Um vetor de vetores, ou seja, um arranjo bidimensional.", "Um tipo de dado que guarda texto.", "Uma estrutura que só guarda números inteiros."], ans: 1, expl: "A matriz organiza dados em linhas e colunas, sendo internamente implementada como um vetor de vetores." },
          { q: "Ao trocar a ordem dos laços aninhados para percorrer uma matriz, o que acontece?", opts: ["Nada muda.", "A matriz é percorrida na vertical (coluna a coluna) em vez de na horizontal (linha a linha).", "O programa dá erro.", "A matriz é apagada."], ans: 1, expl: "Com o laço de colunas por fora, a primeira coluna é percorrida inteira antes de passar para a segunda." },
          { q: "Se uma matriz tem 5 linhas e 6 colunas, quantos elementos ela contém no total?", opts: ["11", "30", "56", "65"], ans: 1, expl: "O total de elementos é linhas × colunas: 5 × 6 = 30." }
        ]
      },
      {
        id: "lp-recursao",
        title: "Recursão",
        subtitle: "Quando uma função chama a si mesma para resolver um problema.",
        blocks: [
          { t: "h", h: "O que é recursão" },
          { t: "p", p: "Recursão é a técnica em que uma função resolve um problema chamando a si mesma com um caso menor. Todo algoritmo recursivo precisa de dois ingredientes: um caso-base (que interrompe a recursão) e um passo recursivo (que aproxima cada chamada do caso-base)." },
          { t: "lst", items: [
            "Caso-base: a condição que resolve o problema diretamente, sem nova chamada. Sem ele, a recursão nunca para.",
            "Passo recursivo: a chamada a si mesma com uma entrada menor, que reduz o problema a cada iteração."
          ]},
          { t: "h", h: "Fatorial passo a passo" },
          { t: "p", p: "A definição do fatorial é naturalmente recursiva: n! = n × (n-1)!, e 0! = 1! = 1. Quando fatorial(5) é chamado, ele pede fatorial(4), que pede fatorial(3), e assim por diante, até chegar ao caso-base fatorial(1), que retorna 1. Depois os retornos \"sobem\" multiplicando: 1×2=2, 2×3=6, 6×4=24, 24×5=120." },
          { t: "code", c: String.raw`FUNCAO fatorial(n : INTEIRO) : INTEIRO
INICIO
    SE (n <= 1) ENTAO
        RETORNAR 1    { caso-base }
    SENAO
        RETORNAR n * fatorial(n - 1)   { passo recursivo }
    FIMSE
FIM

{ Programa principal }
INICIO
    ESCREVER("5! = ", fatorial(5))
FIM` },
          { t: "h", h: "Fibonacci passo a passo" },
          { t: "p", p: "A sequência de Fibonacci começa com 0 e 1, e cada termo é a soma dos dois anteriores. A função recursiva espelha essa definição: cada chamada gera duas novas chamadas, formando uma árvore de execução." },
          { t: "code", c: String.raw`FUNCAO fibonacci(n : INTEIRO) : INTEIRO
INICIO
    SE (n <= 1) ENTAO
        RETORNAR n    { caso-base }
    SENAO
        RETORNAR fibonacci(n - 1) + fibonacci(n - 2)
    FIMSE
FIM

INICIO
    ESCREVER("fibonacci(6) = ", fibonacci(6))
FIM` },
          { t: "h", h: "Recursão vs. iteração" },
          { t: "lst", items: [
            "Recursão costuma ser mais elegante e próxima da definição matemática do problema.",
            "Iteração (com laços) costuma usar menos memória e ser mais rápida para casos simples.",
            "Toda recursão pode ser escrita como iteração, e vice-versa; a escolha depende da clareza."
          ]},
          { t: "warn", p: "Cuidado: sem um caso-base correto, a função nunca para de chamar a si mesma. Cada chamada ocupa um espaço na pilha de memória; uma recursão infinita (ou muito profunda) causa estouro de pilha e derruba o programa." }
        ],
        quiz: [
          { q: "No fatorial, qual é o caso-base que interrompe a recursão?", opts: ["n > 1", "n <= 1", "n = 10", "qualquer valor de n"], ans: 1, expl: "Quando n é 0 ou 1, a função retorna 1 diretamente, sem nova chamada." },
          { q: "Se a chamada fatorial(0) ocorrer na função acima, o resultado é:", opts: ["0", "Erro de estouro de pilha", "1", "-1"], ans: 2, expl: "A condição n <= 1 retorna 1 para n = 0, porque 0! é definido como 1." },
          { q: "O que acontece se removêssemos o caso-base do fatorial?", opts: ["O resultado fica maior.", "Nada muda.", "A função entraria em recursão infinita até estourar a pilha.", "O programa compila mais rápido."], ans: 2, expl: "Sem caso-base, cada chamada gera outra, sem fim, esgotando a memória da pilha." },
          { q: "A diferença conceitual central entre recursão e iteração é:", opts: ["Não há diferença.", "Recursão resolve chamando a si mesma com um caso menor; iteração repete com laços.", "Iteração sempre é mais lenta.", "Recursão nunca usa caso-base."], ans: 1, expl: "Recursão reduz o problema com autochamadas; iteração repete um bloco com laços." },
          { q: "Qual é o resultado de fatorial(4) usando a função recursiva do exemplo?", opts: ["4", "12", "24", "256"], ans: 2, expl: "4! = 4 x 3! = 4 x 3 x 2! = 4 x 3 x 2 x 1! = 24." },
          { q: "O que acontece na memória a cada chamada recursiva?", opts: ["Nada muda na memória.", "Uma nova cópia da função é empilhada (pilha de chamadas).", "A função original é apagada.", "A memória é liberada automaticamente."], ans: 1, expl: "Cada chamada recursiva ocupa espaço na pilha (stack); quando retorna, esse espaço é liberado." },
          { q: "Se fibonacci(6) é chamado, qual é o resultado?", opts: ["5", "6", "8", "13"], ans: 2, expl: "fibonacci(6) = fibonacci(5) + fibonacci(4) = 5 + 3 = 8." },
          { q: "Na recursão, o caso-base é importante porque:", opts: ["Torna o código mais curto.", "Interrompe a recursão, evitando chamadas infinitas.", "Aumenta a velocidade.", "É opcional."], ans: 1, expl: "Sem o caso-base, a função chamaria a si mesma para sempre, causando estouro de pilha." },
          { q: "Qual é a complexidade de espaço típica de uma recursão simples com chamadas encadeadas (uma chamada por nível)?", opts: ["O(1)", "O(n)", "O(n²)", "O(2^n)"], ans: 1, expl: "Cada chamada empilha um frame na pilha; no pior caso, há n frames, resultando em complexidade O(n) de espaço." },
          { q: "Uma função recursiva que calcula fibonacci(4) faz quantas chamadas no total (incluindo a inicial)?", opts: ["4", "7", "9", "15"], ans: 3, expl: "fibonacci(4) gera fibonacci(3) + fibonacci(2), que se expandem em 9 chamadas no total (contando com a chamada inicial)." }
        ]
      },
      {
        id: "lp-busca-ordenacao",
        title: "Busca e Ordenação",
        subtitle: "Encontrar dados rapidamente e colocar tudo em ordem.",
        blocks: [
          { t: "h", h: "Busca linear" },
          { t: "p", p: "A busca linear percorre o vetor do início ao fim comparando cada elemento com o valor procurado. Ela funciona em qualquer vetor, mesmo desordenado, mas no pior caso examina todos os elementos — o custo cresce com o tamanho dos dados." },
          { t: "h", h: "Busca binária: por que exige dados ordenados" },
          { t: "p", p: "A busca binária divide o vetor ao meio a cada passo, comparando o valor procurado com o elemento central. Se for menor, continua à esquerda; se maior, à direita. Isso só faz sentido se os dados estiverem ordenados — caso contrário, descartar metade do vetor a cada comparação não é seguro. Em um vetor ordenado, ela encontra o valor em pouquíssimos passos, mesmo em listas enormes." },
          { t: "code", c: String.raw`VAR
    v : INTEIRO[5]
    i, buscado, inicio, fim, meio, achou : INTEIRO
INICIO
    { dados já ordenados: pré-requisito da busca binária }
    v[1] <- 3
    v[2] <- 8
    v[3] <- 12
    v[4] <- 21
    v[5] <- 35

    ESCREVER("Digite o valor a buscar: ")
    LER(buscado)

    inicio <- 1
    fim <- 5
    achou <- 0

    ENQUANTO (inicio <= fim) E (achou = 0) FACA
        meio <- (inicio + fim) / 2
        SE (v[meio] = buscado) ENTAO
            achou <- 1
        SENAO
            SE (buscado < v[meio]) ENTAO
                fim <- meio - 1
            SENAO
                inicio <- meio + 1
            FIMSE
        FIMSE
    FIMENQUANTO

    SE (achou = 1) ENTAO
        ESCREVER("Encontrado na posição ", meio)
    SENAO
        ESCREVER("Não encontrado.")
    FIMSE
FIM` },
          { t: "h", h: "Ordenação por seleção" },
          { t: "p", p: "Na ordenação por seleção, percorremos o vetor procurando o menor elemento e o trocamos com a primeira posição. Depois repetimos para o restante. O algoritmo é simples, porém lento em vetores grandes porque compara repetidamente os mesmos trechos." },
          { t: "h", h: "Ordenação por bolha (bubble sort)" },
          { t: "p", p: "Na ordenação por bolha, comparamos elementos vizinhos e os trocamos quando estão fora de ordem, repetindo o processo até não haver mais trocas. Os maiores valores \"sobem\" como bolhas até o fim do vetor a cada passada." },
          { t: "code", c: String.raw`VAR
    v : INTEIRO[5]
    i, j, aux : INTEIRO
INICIO
    v[1] <- 5
    v[2] <- 2
    v[3] <- 9
    v[4] <- 1
    v[5] <- 7

    { ordenação por bolha: comparar vizinhos e trocar }
    PARA i DE 1 ATE 4 FACA
        PARA j DE 1 ATE (5 - i) FACA
            SE (v[j] > v[j + 1]) ENTAO
                aux <- v[j]
                v[j] <- v[j + 1]
                v[j + 1] <- aux
            FIMSE
        FIMPARA
    FIMPARA

    { exibe o vetor ordenado }
    PARA i DE 1 ATE 5 FACA
        ESCREVER(v[i], " ")
    FIMPARA
FIM` },
          { t: "note", p: "Busca binária e ordenação andam juntas: você ordena uma vez (demorando mais), mas depois encontra qualquer valor rapidamente com a busca binária." },
          { t: "warn", p: "Aplicar busca binária a um vetor desordenado é um bug silencioso: ela pode descartar a metade que contém o valor e responder \"não encontrado\" sem erro nenhum." }
        ],
        quiz: [
          { q: "Por que a busca binária exige dados ordenados?", opts: ["Por ser mais lenta em dados ordenados.", "Porque ela descarta metade do vetor a cada passo, o que só é seguro se os dados estão em ordem.", "Porque só funciona com números pares.", "Porque exige mais memória."], ans: 1, expl: "Assumir que o valor está à esquerda ou à direita do meio só é válido em dados ordenados." },
          { q: "Em um vetor ordenado, o que a busca binária faz a cada comparação?", opts: ["Examina todos os elementos.", "Descarta metade do vetor restante.", "Ordena novamente os dados.", "Para de procurar."], ans: 1, expl: "Comparando com o meio, ela elimina metade das possibilidades a cada passo." },
          { q: "Na busca linear, no pior caso, quantos elementos são examinados?", opts: ["Sempre somente um.", "Metade deles.", "Todos eles.", "Nenhum."], ans: 2, expl: "Se o valor estiver no final (ou ausente), a busca linear examina o vetor inteiro." },
          { q: "Na ordenação por bolha, o que \"sobe\" a cada passada pelo vetor?", opts: ["O menor valor.", "Nada se move.", "Os valores menores vão para o fim.", "Os maiores valores vão para o fim."], ans: 3, expl: "As comparações de vizinhos empurram os maiores valores para as últimas posições." },
          { q: "Qual é a complexidade da busca linear no melhor caso?", opts: ["O(1) — examina apenas um elemento.", "O(n) — examina todos.", "O(log n) — divide ao meio.", "O(n²) — compara tudo."], ans: 0, expl: "No melhor caso, o valor procurado está na primeira posição, e a busca linear o encontra imediatamente." },
          { q: "Na ordenação por seleção, o que se faz a cada passada?", opts: ["Compara elementos vizinhos e troca.", "Procura o menor elemento do trecho não ordenado e troca com a primeira posição.", "Divide o vetor ao meio.", "Inverte a ordem do vetor."], ans: 1, expl: "A ordenação por seleção busca o menor elemento restante e o coloca na posição correta." },
          { q: "Em um vetor de 8 elementos, a busca binária no pior caso faz no máximo quantas comparações?", opts: ["8", "4", "3", "64"], ans: 2, expl: "A busca binária divide o vetor ao meio; log2(8) = 3 comparações no máximo." },
          { q: "Se o valor procurado está na primeira posição do vetor, a busca linear encontra em:", opts: ["O(1) — primeira comparação.", "O(n) — percorre tudo.", "O(log n) — divide ao meio.", "Nunca encontra."], ans: 0, expl: "No melhor caso, o valor já está na primeira posição e a busca linear o encontra na primeira comparação." },
          { q: "Na ordenação por bolha, após a primeira passada completa pelo vetor [5, 2, 9, 1, 7], qual elemento está na última posição?", opts: ["5", "7", "9", "1"], ans: 2, expl: "A primeira passada da bolha empurra o maior valor (9) para a última posição." },
          { q: "Qual é a complexidade da busca binária?", opts: ["O(n)", "O(n²)", "O(log n)", "O(1)"], ans: 2, expl: "A busca binária divide o espaço de busca pela metade a cada passo: O(log n)." }
        ]
      },
      {
        id: "lp-teste-mesa",
        title: "Teste de mesa",
        subtitle: "Simular a execução do algoritmo no papel, passo a passo, para conferir o resultado.",
        blocks: [
          { t: "h", h: "O que é o teste de mesa" },
          { t: "p", p: "O teste de mesa é a execução manual de um algoritmo: você simula cada instrução na ordem em que o computador faria, anotando em uma tabela o valor de todas as variáveis a cada passo." },
          { t: "p", p: "É a ferramenta mais simples e poderosa para encontrar erros antes de digitar o código. Todo programador faz teste de mesa, mesmo sem saber o nome." },
          { t: "h", h: "Como montar a tabela" },
          { t: "ol", items: [
            "Crie uma coluna para cada variável do algoritmo.",
            "Crie uma coluna (ou linha) para anotar o que apareceu na tela.",
            "Execute as instruções uma a uma, na ordem, atualizando as células.",
            "Marque como \"?\" as variáveis que ainda não receberam valor."
          ]},
          { t: "h", h: "Exemplo 1: atribuições" },
          { t: "code", c: String.raw`algoritmo
  declare X, Y numérico
        COR literal
        TESTE lógico
  X <- 2
  Y <- 0,05
  X <- Y
  COR <- "VERDE"
  TESTE <- falso
fim algoritmo` },
          { t: "lst", items: [
            "Instrução X <- 2:  X = 2 | Y = ? | COR = ? | TESTE = ?",
            "Instrução Y <- 0,05:  X = 2 | Y = 0,05 | COR = ? | TESTE = ?",
            "Instrução X <- Y:  X = 0,05 | Y = 0,05 | COR = ? | TESTE = ?",
            "Instrução COR <- \"VERDE\":  X = 0,05 | Y = 0,05 | COR = \"VERDE\" | TESTE = ?",
            "Instrução TESTE <- falso:  X = 0,05 | Y = 0,05 | COR = \"VERDE\" | TESTE = falso"
          ]},
          { t: "note", p: "Repare que X <- Y copia o valor de Y para X, apagando o 2 anterior. Cada variável guarda apenas um valor por vez." },
          { t: "h", h: "Exemplo 2: um laço com vetor (preencher M[5])" },
          { t: "code", c: String.raw`algoritmo
  declare M[5], cont numérico
  para cont <- 1 até 5 faça
    início
      escreva "Digite um número: "
      leia M[cont]
    fim
fim algoritmo` },
          { t: "p", p: "Suponha que o usuário digitou 26, 15, -21, 45 e 0:" },
          { t: "lst", items: [
            "cont = 1:  M[1] = 26, demais = ?",
            "cont = 2:  M[1] = 26, M[2] = 15",
            "cont = 3:  M[3] = -21",
            "cont = 4:  M[4] = 45",
            "cont = 5:  M[5] = 0",
            "cont = 6:  a condição cont <= 5 falha e o laço termina."
          ]},
          { t: "warn", p: "Uma variável usada antes de receber valor, ou lida e nunca utilizada, aparece como \"?\" na tabela e quase sempre indica um erro de lógica." }
        ],
        quiz: [
          { q: "Quando é mais útil fazer o teste de mesa?", opts: ["Somente depois de entregar o programa.", "Para simular a execução passo a passo e encontrar erros de lógica.", "Nunca é útil.", "Somente em programas com funções."], ans: 1, expl: "O teste de mesa antecipa o comportamento do algoritmo, revelando erros antes de executar o programa." },
          { q: "Durante o teste de mesa, o que você anota quando a variável ainda não recebeu valor?", opts: ["Somente o valor zero.", "O símbolo \"?\" (indeterminado).", "O nome do algoritmo.", "A letra V."], ans: 1, expl: "Variáveis ainda não atribuídas ficam indeterminadas (\"?\") na tabela." },
          { q: "Após X <- 2 e depois X <- Y (com Y = 0,05), qual é o valor final de X?", opts: ["2", "0,05", "2,05", "Indefinido"], ans: 1, expl: "A segunda atribuição sobrescreve X: ele passa a guardar o valor de Y." },
          { q: "No teste de mesa do laço para cont <- 1 até 5, por que o laço termina?", opts: ["Porque o vetor tem 5 posições.", "Porque cont fica maior que 5 e o teste cont <= 5 falha.", "Porque o usuário digitou 0.", "Porque leia parou."], ans: 1, expl: "A condição de continuidade do PARA falha quando a variável de controle ultrapassa o limite." },
          { q: "Ao fazer teste de mesa de um vetor, você deve anotar:", opts: ["Apenas o valor final do vetor.", "Os valores de cada posição do vetor a cada instrução executada.", "Só os valores de entrada.", "Nada, basta executar o código."], ans: 1, expl: "O teste de mesa rastreia o estado de todas as variáveis, incluindo cada posição do vetor, a cada passo." },
          { q: "Se um algoritmo tem duas variáveis A e B e você troca seus valores com aux <- A; A <- B; B <- aux, qual é o valor final de A se A = 3 e B = 7?", opts: ["3", "7", "0", "Indefinido"], ans: 1, expl: "Após a troca, A recebe o valor que B tinha (7) e B recebe o que A tinha (3)." },
          { q: "Se um algoritmo faz X <- 5 e depois X <- X + 3, qual é o valor final de X?", opts: ["5", "3", "8", "13"], ans: 2, expl: "X começa em 5; depois X recebe 5 + 3 = 8. A variável sobrescreve o valor anterior." },
          { q: "Ao fazer teste de mesa de um PARA de 1 a 5, quantas linhas a tabela terá (uma por iteração)?", opts: ["4", "5", "6", "Depende do código."], ans: 1, expl: "O PARA executa 5 vezes (de 1 a 5), então a tabela registra 5 estados diferentes." },
          { q: "Se o algoritmo faz B <- 0 e depois B <- B + 2 três vezes, qual é o valor final de B?", opts: ["2", "4", "6", "8"], ans: 2, expl: "B começa em 0; após 3 incrementos de 2: 0+2=2, 2+2=4, 4+2=6." },
          { q: "Em um teste de mesa, se uma variável A recebe 10 e depois SE (A > 5) ENTAO A <- A - 3, qual é o valor final de A?", opts: ["10", "7", "5", "13"], ans: 1, expl: "10 > 5 é verdadeiro; A recebe 10 - 3 = 7." }
        ]
      },
      {
        id: "lp-funcoes-matematicas",
        title: "Funções matemáticas",
        subtitle: "Funções prontas nas expressões aritméticas: LOG, LN, ABS, TRUNCA, RESTO e outras.",
        blocks: [
          { t: "h", h: "Funções nas expressões aritméticas" },
          { t: "p", p: "Além das quatro operações, os algoritmos usam funções prontas, que recebem um ou mais valores (argumentos) e devolvem um resultado calculado." },
          { t: "lst", items: [
            "LOG(EA): logaritmo na base 10 de EA.",
            "LN(EA): logaritmo neperiano (natural) de EA.",
            "EXP(EA): o número de Euler elevado a EA.",
            "ABS(EA): valor absoluto (módulo) de EA.",
            "TRUNCA(EA): a parte inteira de um número fracionário.",
            "ARREDONDA(EA): transforma um número fracionário em inteiro, por arredondamento.",
            "SINAL(EA): devolve -1, +1 ou 0 conforme EA seja negativo, positivo ou zero.",
            "QUOCIENTE(EAx, EAy): quociente inteiro da divisão de EAx por EAy.",
            "RESTO(EAx, EAy): resto da divisão de EAx por EAy."
          ]},
          { t: "h", h: "Exemplos de expressões com funções" },
          { t: "p", p: "X + LN(Y) - ABS(A - B)  |  QUOCIENTE(NOTA, 2) * 100 + T  |  H*H - G * F * SINAL(C + D)" },
          { t: "note", p: "Potenciação (SOMA^2) e radiciação em alguns materiais aparecem com símbolos próprios; nas linguagens reais elas viram funções como pow e sqrt (tópico de C)." },
          { t: "h", h: "Exemplo pronto: par ou ímpar com RESTO" },
          { t: "code", c: String.raw`algoritmo
  declare N numérico
  escreva "Digite um número: "
  leia N
  se RESTO(N, 2) = 0
    então escreva N, " é par"
    senão escreva N, " é ímpar"
fim algoritmo` },
          { t: "p", p: "A função RESTO(N, 2) devolve o resto da divisão de N por 2. Se o resto for zero, o número é par — a mesma lógica usada nos exercícios de vetores." },
          { t: "h", h: "Prioridade das operações aritméticas" },
          { t: "lst", items: [
            "1º: potenciação e radiciação.",
            "2º: multiplicação e divisão.",
            "3º: adição e subtração.",
            "Parênteses alteram a ordem: A - B * (C + D / (E - 1) - F) + G."
          ]},
          { t: "warn", p: "Não é permitido omitir o operador de multiplicação: para multiplicar, escreva o * explicitamente (2 * NOTA, e não 2NOTA)." }
        ],
        quiz: [
          { q: "O que devolve ABS(-27)?", opts: ["-27", "27", "0", "Erro"], ans: 1, expl: "ABS calcula o valor absoluto, ou seja, remove o sinal negativo." },
          { q: "QUOCIENTE(13, 4) e RESTO(13, 4) devolvem, respectivamente:", opts: ["1 e 3", "3 e 1", "3 e 3", "4 e 1"], ans: 1, expl: "13 dividido por 4 dá quociente 3 e resto 1." },
          { q: "Com N = 7, o que RESTO(N, 2) devolve e o que isso significa?", opts: ["0; o número é par", "1; o número é ímpar", "2; o número é divisível", "3,5; resultado decimal"], ans: 1, expl: "7 não é divisível por 2: sobra 1, e por isso o número é ímpar." },
          { q: "Na expressão A - B * C + D, qual operação é resolvida primeiro?", opts: ["A - B", "B * C", "C + D", "A + D"], ans: 1, expl: "Multiplicação tem prioridade sobre adição e subtração, então B * C é resolvida antes." },
          { q: "O que devolve TRUNCA(7.9)?", opts: ["8", "7", "7.9", "0"], ans: 1, expl: "TRUNCA remove a parte fracionária, retornando apenas a parte inteira: 7." },
          { q: "O que devolve SINAL(-5)?", opts: ["5", "-1", "+1", "0"], ans: 1, expl: "SINAL devolve -1 para números negativos, +1 para positivos e 0 para zero." },
          { q: "O que devolve ARREDONDA(7,6)?", opts: ["7", "8", "7,6", "Erro"], ans: 1, expl: "ARREDONDA converte para o inteiro mais próximo; 7,6 arredonda para 8." },
          { q: "O que devolve LOG(100)?", opts: ["2", "10", "100", "50"], ans: 0, expl: "LOG retorna o logaritmo na base 10. log10(100) = 2, pois 10^2 = 100." },
          { q: "O que devolve EXP(0)?", opts: ["0", "1", "e", "Erro"], ans: 1, expl: "EXP(0) = e^0 = 1, qualquer que seja a base (qualquer número elevado a 0 é 1)." },
          { q: "Se N = 17, o que RESTO(N, 5) devolve?", opts: ["3", "2", "5", "17"], ans: 1, expl: "17 dividido por 5 dá quociente 3 e sobra resto 2. RESTO(17, 5) = 2." }
        ]
      },
      {
        id: "lp-expressoes-logicas",
        title: "Expressões lógicas",
        subtitle: "Relações, operadores lógicos (e, ou, não) e a ordem de prioridade entre eles.",
        blocks: [
          { t: "h", h: "Relações" },
          { t: "p", p: "Uma relação é uma comparação entre dois valores do MESMO tipo. O resultado de uma relação é sempre um valor lógico: verdadeiro ou falso." },
          { t: "lst", items: [
            "igual a (=):  NOME = \"JOÃO\"",
            "diferente de (≠):  A ≠ B",
            "maior que (>):  B*B - 4*A*C < 0",
            "menor que (<)",
            "maior ou igual a (>=)",
            "menor ou igual a (<=)"
          ]},
          { t: "h", h: "Operadores lógicos" },
          { t: "p", p: "A álgebra das proposições define três conectivos para combinar relações e variáveis lógicas: e (conjunção), ou (disjunção) e não (negação)." },
          { t: "lst", items: [
            "p e q = verdadeiro somente quando p e q são verdadeiros.",
            "p ou q = verdadeiro quando pelo menos um dos dois é verdadeiro.",
            "não p = inverte o valor de p."
          ]},
          { t: "h", h: "Tabela verdade" },
          { t: "lst", items: [
            "p | q | p e q | p ou q | não p",
            "V | V |   V  |   V  |   F",
            "V | F |   F  |   V  |   F",
            "F | V |   F  |   V  |   V",
            "F | F |   F  |   F  |   V"
          ]},
          { t: "h", h: "Prioridade na avaliação" },
          { t: "lst", items: [
            "1º: operadores aritméticos.",
            "2º: operadores relacionais.",
            "3º: não.",
            "4º: e.",
            "5º: ou."
          ]},
          { t: "note", p: "Essa ordem é igual à da matemática e de quase todas as linguagens: cálculo e relações primeiro; depois não (mais forte), e depois ou." },
          { t: "h", h: "Exercício de fixação" },
          { t: "p", p: "Considere A = 2, B = 7, C = 3,5 e a variável lógica L = falso. Avalie:" },
          { t: "lst", items: [
            "a) B = A * C e (L ou C > A):  7 = 7 (V) e (falso ou V)  =  V e V  =  verdadeiro.",
            "b) B > A ou B = A^2:  V ou F  =  verdadeiro.",
            "c) não L e A / B >= C:  V e F  =  falso.",
            "d) L e B / A <= C ou não A <= C:  F ou F  =  falso."
          ]},
          { t: "warn", p: "Confundir o = da RELAÇÃO com a atribuição é o erro clássico: em uma relação, o sinal = pergunta se dois valores são iguais." }
        ],
        quiz: [
          { q: "O resultado de uma relação (comparação) é sempre:", opts: ["um número", "um caractere", "um valor lógico (verdadeiro ou falso)", "um vetor"], ans: 2, expl: "Relação é comparação; o resultado é sempre verdadeiro ou falso." },
          { q: "Qual é o valor de V e F?", opts: ["V", "F", "Depende", "Erro"], ans: 1, expl: "A conjunção (e) só é verdadeira quando as duas proposições são verdadeiras." },
          { q: "Com L = falso, A = 2, B = 7 e C = 3,5, quanto vale \"não L e A / B >= C\"?", opts: ["verdadeiro", "falso", "depende do programa", "não dá para avaliar"], ans: 1, expl: "não L é V; A / B = 0,28... >= 3,5 é F; então V e F = F." },
          { q: "Qual é a ordem de prioridade entre os operadores lógicos?", opts: ["ou, e, não", "e, ou, não", "não, e, ou", "todos têm a mesma prioridade"], ans: 2, expl: "A prioridade é 1º não, 2º e, 3º ou." },
          { q: "Se p = verdadeiro e q = falso, quanto vale p ou q?", opts: ["verdadeiro", "falso", "Depende", "Erro"], ans: 0, expl: "No operador OU, basta um dos dois ser verdadeiro para o resultado ser verdadeiro." },
          { q: "Qual expressão resulta em falso quando A = 5 e B = 10?", opts: ["A > 3", "B < A", "A * 2 = B", "B - A > 0"], ans: 1, expl: "10 < 5 é falso; as demais expressões resultam em verdadeiro." },
          { q: "Se p = falso e q = falso, quanto vale p ou q?", opts: ["verdadeiro", "falso", "Depende", "não p"], ans: 1, expl: "No operador OU, se ambos são falsos, o resultado é falso." },
          { q: "A expressão não (A = 5) E (B = 10), com A = 5 e B = 7, resulta em:", opts: ["verdadeiro", "falso", "Depende", "Erro"], ans: 1, expl: "A = 5 é V; não V = F; B = 10 é F; F E F = F." },
          { q: "Qual é a prioridade entre os operadores aritméticos e os relacionais?", opts: ["Os relacionais primeiro.", "Os aritméticos primeiro.", "Todos têm a mesma prioridade.", "Depende da expressão."], ans: 1, expl: "A prioridade é: 1º aritméticos, 2º relacionais, 3º não, 4º e, 5º ou." },
          { q: "Se X = 10 e Y = 3, quanto vale X mod Y <> 0 E X > Y?", opts: ["verdadeiro", "falso", "Erro", "Depende"], ans: 0, expl: "X mod Y = 1; 1 <> 0 é V; X > Y é V; V E V = VERDADEIRO." }
        ]
      },
      {
        id: "lp-contadores-acumuladores",
        title: "Contadores, acumuladores, maior/menor e sentinela",
        subtitle: "Padrões clássicos com laços: contagem, soma, maior/menor e parada por valor especial.",
        blocks: [
          { t: "h", h: "Contador" },
          { t: "p", p: "O contador é uma variável numérica que registra QUANTAS VEZES algo aconteceu. Costuma começar em zero (elemento neutro da soma) e receber +1 a cada ocorrência." },
          { t: "code", c: String.raw`algoritmo
  declare CON numérico
  CON <- 0
  enquanto CON < 3 faça
    início
      escreva CON
      CON <- CON + 1
    fim
fim algoritmo` },
          { t: "p", p: "Saída: 0, 1, 2. Quando CON chega a 3, a condição CON < 3 é falsa e a repetição para." },
          { t: "h", h: "Acumulador" },
          { t: "p", p: "O acumulador soma (ou multiplica) valores lidos. Para soma começa em zero; para produto começa em um (elementos neutros)." },
          { t: "code", c: String.raw`algoritmo
  declare CON, X, ACM numérico
  CON <- 0
  ACM <- 0
  enquanto CON < 3 faça
    início
      CON <- CON + 1
      leia X
      ACM <- ACM + X
    fim
fim algoritmo` },
          { t: "p", p: "Digitando 5, 2 e 4, a tabela fica: X = 5, 2, 4 e ACM = 0 depois 5, 7, 11." },
          { t: "h", h: "Maior e menor valor" },
          { t: "lst", items: [
            "Use o PRIMEIRO valor lido como referência para o maior e o menor.",
            "A cada repetição, compare o novo valor com os atuais maior e menor.",
            "Se for maior que o maior, substitui; se for menor que o menor, substitui."
          ]},
          { t: "code", c: String.raw`algoritmo
  declare valor, maior, menor, i numérico
  leia valor
  maior <- valor
  menor <- valor
  para i <- 2 até 10 faça
    início
      leia valor
      se valor > maior
        então maior <- valor
      se valor < menor
        então menor <- valor
    fim
  escreva "Maior: ", maior, " | Menor: ", menor
fim algoritmo` },
          { t: "note", p: "Recomendação do material: iniciar maior e menor com o primeiro valor lido evita chutes como \"maior = 0\", que quebrariam quando todos os números fossem negativos." },
          { t: "h", h: "Controle por entrada (flag ou sentinela)" },
          { t: "p", p: "Quando a QUANTIDADE de valores não é conhecida antes, usa-se um valor especial (o flag) para encerrar a repetição." },
          { t: "code", c: String.raw`algoritmo
  declare NUM, CONT, SOMA, MEDIA numérico
  SOMA <- 0
  CONT <- 0
  escreva "Digite valores ou 0 para sair: "
  leia NUM
  enquanto NUM <> 0 faça
    início
      SOMA <- SOMA + NUM
      CONT <- CONT + 1
      escreva "Digite valores ou 0 para sair: "
      leia NUM
    fim
  MEDIA <- SOMA / CONT
  escreva "Média: ", MEDIA
fim algoritmo` },
          { t: "warn", p: "Se CONT for zero (o primeiro valor digitado já era o flag), a divisão SOMA / CONT divide por zero. Em algoritmos reais, é preciso tratar esse caso antes de calcular a média." }
        ],
        quiz: [
          { q: "Qual é o valor inicial mais comum para um acumulador de soma?", opts: ["1", "-1", "0", "Depende do laço"], ans: 2, expl: "A soma começa em 0, que é o elemento neutro da adição." },
          { q: "Para calcular o maior entre N números, o melhor é iniciar a variável maior com:", opts: ["0", "1000000", "o primeiro valor lido", "a média dos valores"], ans: 2, expl: "Iniciar pelo primeiro valor lido evita valores extremos pré-definidos errados." },
          { q: "O que faz o comando CON <- CON + 1?", opts: ["Soma o valor de CON à própria CON, contando uma ocorrência.", "Multiplica CON por 1.", "Apaga CON.", "Lê um valor para CON."], ans: 0, expl: "Incrementar CON em 1 é a forma clássica de contar quantas vezes o laço passou." },
          { q: "Um flag (ou sentinela) serve para:", opts: ["deixar o laço mais rápido", "indicar, por um valor especial, que a leitura deve parar", "trocar valores entre variáveis", "arredondar números"], ans: 1, expl: "Um valor especial (como 0) marca o fim das entradas quando a quantidade é desconhecida." },
          { q: "Se o acumulador ACM começa em 0 e os valores lidos são 3, 5 e 2, qual é o valor final de ACM?", opts: ["0", "5", "10", "3"], ans: 2, expl: "ACM acumula as somas: 0 + 3 = 3, 3 + 5 = 8, 8 + 2 = 10." },
          { q: "Para contar quantos números pares foram digitados, o contador deve ser incrementado quando:", opts: ["O número for maior que zero.", "O resto da divisão por 2 for igual a zero.", "O número for ímpar.", "O número for negativo."], ans: 1, expl: "Um número é par quando RESTO(n, 2) = 0. O contador incrementa apenas nesse caso." },
          { q: "Se um acumulador ACM começa em 0 e o laço soma os valores 10, 20 e 30, qual é o valor final de ACM?", opts: ["0", "30", "50", "60"], ans: 3, expl: "ACM acumula: 0 + 10 = 10, 10 + 20 = 30, 30 + 30 = 60." },
          { q: "Para contar quantas vezes um laço executa, a variável contador deve ser incrementada:", opts: ["Antes do laço.", "Dentro do laço, a cada iteração.", "Depois do laço.", "Nunca."], ans: 1, expl: "O contador precisa ser incrementado dentro do laço para registrar cada passada corretamente." },
          { q: "Se todos os valores lidos são negativos e o algoritmo inicia maior <- 0, qual problema ocorre?", opts: ["Nenhum problema.", "O maior será 0, que não é um dos valores lidos.", "O programa trava.", "O menor fica errado."], ans: 1, expl: "Iniciar maior com 0 faz o resultado ser 0, que não é nenhum dos valores digitados. Por isso é melhor iniciar com o primeiro valor lido." },
          { q: "Se o acumulador de produto (ACM) deve começar em qual valor?", opts: ["0", "1", "2", "-1"], ans: 1, expl: "Para produto, o acumulador começa em 1 (elemento neutro da multiplicação). Começar em 0 resultaria sempre em 0." }
        ]
      },
      {
        id: "lp-repeticoes-avancadas",
        title: "Repetição: passo, comparação e laços aninhados",
        subtitle: "passo no PARA, como escolher o laço e laço dentro de laço.",
        blocks: [
          { t: "h", h: "Comparação entre as estruturas de repetição" },
          { t: "lst", items: [
            "Enquanto: testa no início; executa zero ou muitas vezes; repete enquanto a condição for verdadeira.",
            "Repita (até): testa no fim; executa uma ou muitas vezes; repete até a condição ficar verdadeira.",
            "Para: usa variável de controle; executa ((vf - vi) div passo) + 1 vezes; para quando a variável passa do limite."
          ]},
          { t: "h", h: "O passo no PARA" },
          { t: "p", p: "O passo (padrão 1) pode ser outro valor para contar de 2 em 2, ou negativo para contar de trás para frente." },
          { t: "code", c: String.raw`para J <- 1 até 9 faça passo 2
  escreva J` },
          { t: "p", p: "Saída: 1 3 5 7 9." },
          { t: "code", c: String.raw`para J <- 10 até 1 faça passo -1
  escreva J` },
          { t: "p", p: "Saída: 10 9 8 7 6 5 4 3 2 1." },
          { t: "h", h: "Laços aninhados" },
          { t: "p", p: "Uma repetição aninhada é uma repetição dentro do bloco de outra. O laço interno é executado POR COMPLETO a cada iteração do externo. É o padrão usado para matrizes (linhas e colunas) e conjuntos agrupados." },
          { t: "code", c: String.raw`algoritmo
  declare somaNF, somaTotal, val numérico
  declare nfa, nnf, ia, ni numérico
  escreva "Número de notas fiscais: "
  leia nnf
  somaTotal <- 0
  para nfa <- 1 até nnf faça
    início
      escreva "Itens da NF ", nfa, ": "
      leia ni
      somaNF <- 0
      para ia <- 1 até ni faça
        início
          escreva "Valor do item ", ia, ": "
          leia val
          somaNF <- somaNF + val
        fim
      somaTotal <- somaTotal + somaNF
      escreva "Total da NF ", nfa, ": ", somaNF
    fim
  escreva "Total geral: ", somaTotal
fim algoritmo` },
          { t: "note", p: "No exemplo, o laço interno soma os itens de uma NF; o externo repete essa soma para cada NF. O acumulador somaNF precisa ser zerado logo antes do laço interno." },
          { t: "warn", p: "Esquecer de reiniciar somaNF dentro do laço externo faz o total da segunda NF em diante vir acumulado (incorreto)." }
        ],
        quiz: [
          { q: "para J <- 10 até 1 faça passo -1 imprime:", opts: ["1 2 3 ... 10", "10 9 8 ... 1", "10 8 6 4 2", "nada"], ans: 1, expl: "O passo negativo faz a contagem regressiva de 10 até 1." },
          { q: "Quantas vezes a instrução escreva \"X\" é executada?\npara i <- 1 até 3 faça\n  para j <- 1 até 2 faça\n    escreva \"X\"", opts: ["3", "2", "6", "5"], ans: 2, expl: "O laço interno roda 2 vezes para cada uma das 3 iterações do externo: 3 x 2 = 6." },
          { q: "Qual estrutura executa o corpo SEMPRE pelo menos uma vez?", opts: ["Enquanto", "Repita (até)", "Para com passo 1", "Todas"], ans: 1, expl: "O Repita testa a condição no final, garantindo no mínimo uma execução." },
          { q: "Se o passo não for informado em para A até B, ele vale:", opts: ["0", "1", "B", "depende de A"], ans: 1, expl: "O passo padrão do PARA é 1." },
          { q: "No exemplo das notas fiscais, para que o acumulador somaNF seja zerado antes do laço interno?", opts: ["Para não acumular o total das NFs anteriores no somatório da NF atual.", "Para tornar o programa mais rápido.", "Porque o compilador exige.", "Para contar o número de NFs."], ans: 0, expl: "Se somaNF não for zerado, o somatório da NF atual somaria ao da anterior, gerando um total incorreto." },
          { q: "Se um PARA tem passo 3 e vai de 1 até 10, quais valores a variável de controle assume?", opts: ["1, 2, 3, 4, 5, 6, 7, 8, 9, 10", "1, 4, 7, 10", "3, 6, 9", "1, 3, 6, 9"], ans: 1, expl: "Começa em 1 e soma 3 a cada iteração: 1, 4, 7, 10. O próximo valor (13) ultrapassa o limite." },
          { q: "Em dois laços aninhados, onde o externo roda 3 vezes e o interno 4, quantas vezes o laço interno roda no total?", opts: ["3", "4", "7", "12"], ans: 3, expl: "O laço interno roda 4 vezes para cada iteração do externo: 3 x 4 = 12." },
          { q: "Se um PARA vai de 10 até 1 com passo -2, quais valores são impressos?", opts: ["10 9 8 7 6 5 4 3 2 1", "10 8 6 4 2", "10 7 4 1", "10 8 6 4 2 0"], ans: 1, expl: "Começa em 10 e subtrai 2: 10, 8, 6, 4, 2. O próximo (-1) ultrapassa o limite inferior." },
          { q: "Quando a contagem é regressiva no PARA, o passo deve ser:", opts: ["Positivo.", "Zero.", "Negativo.", "Qualquer valor."], ans: 2, expl: "Para contar de trás para frente (decrescente), o passo precisa ser negativo." },
          { q: "Se o laço externo vai de 1 a 3 e o interno de 1 a 5, a última iteração do laço interno ocorre quando o externo vale:", opts: ["1", "2", "3", "5"], ans: 2, expl: "O laço interno completa suas 5 iterações para cada valor do externo. A última vez é quando o externo vale 3." }
        ]
      },
      {
        id: "lp-modularizacao",
        title: "Modularização: sub-rotinas e funções",
        subtitle: "Dividir o algoritmo em módulos, objetos globais/locais e passagem de parâmetros.",
        blocks: [
          { t: "h", h: "Programação modularizada" },
          { t: "p", p: "Problemas grandes são divididos em problemas menores e mais simples — os MÓDULOS. Um módulo é um trecho de algoritmo com uma função bem definida, o mais independente possível do restante." },
          { t: "lst", items: [
            "Módulo principal: por onde começa a execução; chama os demais módulos.",
            "Sub-rotina: trecho declarado uma vez e chamado várias vezes; NÃO devolve valor como retorno.",
            "Função: como uma função matemática; devolve OBRIGATORIAMENTE um valor a cada chamada (associado ao próprio nome)."
          ]},
          { t: "h", h: "Objetos globais e locais" },
          { t: "lst", items: [
            "Globais: podem ser usados em qualquer módulo do algoritmo.",
            "Locais: existem apenas dentro do módulo onde foram declarados; são criados quando o módulo é chamado e liberados quando ele termina.",
            "Usar objetos locais minimiza efeitos colaterais: o que você faz em um módulo não interfere nos outros."
          ]},
          { t: "h", h: "Parâmetros formais e atuais" },
          { t: "p", p: "Os parâmetros são canais de comunicação entre o chamador e o módulo. Os PARÂMETROS FORMAIS aparecem no cabeçalho do módulo; os PARÂMETROS ATUAIS (argumentos) são os valores passados na chamada." },
          { t: "p", p: "O argumento pode ser constante, variável ou expressão (5, v1, v1 + 5 - v2) e deve concordar em número, ordem e tipo com os parâmetros formais." },
          { t: "h", h: "Exemplo: sub-rotina que calcula o quadrado" },
          { t: "code", c: String.raw`sub-rotina QUADRADO(N numérico)
  declare Q numérico
  Q <- N * N
  escreva "O quadrado do número é: ", Q
fim sub-rotina

algoritmo
  declare X, Y numérico
  escreva "Digite o valor de X e Y: "
  leia X, Y
  QUADRADO(X)
  QUADRADO(Y)
fim algoritmo` },
          { t: "h", h: "Exemplo: função que verifica se um número é par" },
          { t: "code", c: String.raw`função numérico PAR(N numérico)
  se RESTO(N, 2) = 0
    então PAR <- 1
    senão PAR <- 0
fim função

algoritmo
  declare X, N, CONT, ACM numérico
  escreva "Digite o total de números: "
  leia N
  CONT <- 1
  ACM <- 0
  enquanto CONT <= N faça
    início
      escreva "Digite um número: "
      leia X
      ACM <- ACM + PAR(X)
      CONT <- CONT + 1
    fim
  escreva "Total de pares: ", ACM
fim algoritmo` },
          { t: "note", p: "A função devolve o valor pelo próprio nome (PAR <- 1). Por isso ela pode ser usada dentro de uma expressão, como em ACM <- ACM + PAR(X)." },
          { t: "warn", p: "Se a intenção é apenas imprimir (sem devolver valor), o ideal é uma sub-rotina. Uma função deve ser usada quando o chamador espera usar o valor retornado." }
        ],
        quiz: [
          { q: "Qual é a diferença essencial entre sub-rotina e função?", opts: ["Não há diferença.", "A função devolve um valor associado ao seu nome; a sub-rotina não.", "A sub-rotina é mais rápida.", "A função não aceita parâmetros."], ans: 1, expl: "As funções retornam um valor usável em expressões; sub-rotinas apenas executam comandos." },
          { q: "O que são parâmetros atuais?", opts: ["Os nomes que aparecem no cabeçalho do módulo.", "Os valores passados na chamada do módulo.", "As variáveis globais.", "Os comentários do módulo."], ans: 1, expl: "Os atuais (argumentos) substituem os formais no momento da chamada." },
          { q: "Um objeto local:", opts: ["pode ser usado em qualquer módulo", "existe somente dentro do módulo que o declarou", "é criado quando o programa inicia", "é sempre uma constante"], ans: 1, expl: "Locais só existem dentro do módulo que os define; são criados na chamada e liberados no fim." },
          { q: "Quantos valores uma função pode devolver?", opts: ["nenhum", "um valor, associado ao próprio nome", "dois", "quantos quiser"], ans: 1, expl: "A função devolve um único valor, ligado ao nome da função." },
          { q: "Quando você deve usar uma sub-rotina em vez de uma função?", opts: ["Quando precisa devolver um valor.", "Quando o objetivo é apenas executar comandos, sem devolver valor.", "Quando o algoritmo é curto.", "Nunca é necessário."], ans: 1, expl: "A sub-rotina executa ações sem retornar valor; a função é usada quando o chamador precisa do resultado." },
          { q: "Usar parâmetros locais em vez de variáveis globais:", opts: ["Deixa o programa mais lento.", "Minimiza efeitos colaterais entre módulos.", "É proibido em pseudocódigo.", "Não faz diferença."], ans: 1, expl: "Variáveis locais existem apenas dentro do módulo, evitando que alterações indevidas afetem outros módulos." },
          { q: "Na chamada QUADRADO(X), o que é X?", opts: ["Um parâmetro formal.", "Um parâmetro atual (argumento).", "Um módulo.", "Um comentário."], ans: 1, expl: "X é o valor real passado na chamada, ou seja, um parâmetro atual. Os formais seriam os nomes no cabeçalho da sub-rotina." },
          { q: "Qual é a função do módulo principal em um algoritmo modularizado?", opts: ["Não tem função.", "Iniciar a execução e coordenar as chamadas aos demais módulos.", "Só declarar variáveis globais.", "Ser o único módulo que imprime."], ans: 1, expl: "O módulo principal é o ponto de entrada: ele inicia a execução e chama os outros módulos conforme necessário." },
          { q: "Em uma função, o valor de retorno pode ser usado diretamente em:", opts: ["Apenas em ESCREVER.", "Uma expressão, como em ACM <- ACM + PAR(X).", "Somente em comparações.", "Nenhum lugar."], ans: 1, expl: "O retorno da função atua como um valor comum, podendo integrar expressões e atribuições." },
          { q: "Se uma sub-rotina não devolve valor, para que ela serve?", opts: ["Para nada.", "Para executar um conjunto de comandos repetidamente, sem retornar um resultado.", "Para ser mais lenta.", "Para substituir variáveis."], ans: 1, expl: "A sub-rotina executa ações (como calcular e imprimir) sem devolver valor ao chamador." }
        ]
      },
      {
        id: "lp-matrizes-especiais",
        title: "Matrizes especiais e produto de matrizes",
        subtitle: "Quadrada, diagonal, identidade, triangular, transposta, simétrica e o produto A x B = C.",
        blocks: [
          { t: "h", h: "Matriz quadrada e diagonais" },
          { t: "p", p: "Matriz quadrada tem o mesmo número de linhas e colunas. A DIAGONAL PRINCIPAL reúne os elementos com I = J; a DIAGONAL SECUNDÁRIA reúne os com I + J = N + 1 (N é a ordem)." },
          { t: "lst", items: [
            "Diagonal principal: I = J.",
            "Diagonal secundária: I + J = N + 1.",
            "Matriz diagonal: apenas uma das diagonais vale; o resto é zero.",
            "Matriz identidade: diagonal principal vale 1 e todo o resto vale 0.",
            "Triangular inferior: zeros acima da diagonal principal (I < J -> 0).",
            "Triangular superior: zeros abaixo (I + J > N + 1 -> 0)."
          ]},
          { t: "code", c: String.raw`algoritmo
  declare M[4, 4], i, j numérico
  para i <- 1 até 4 faça
    para j <- 1 até 4 faça
      se i = j
        então M[i, j] <- 1
        senão M[i, j] <- 0
fim algoritmo` },
          { t: "p", p: "Esse trecho monta a matriz IDENTIDADE 4x4: testa se o índice da linha é igual ao da coluna para colocar 1 na diagonal principal." },
          { t: "h", h: "Transposta, simétrica e antissimétrica" },
          { t: "lst", items: [
            "Transposta: AT[i, j] <- A[j, i] (linhas viram colunas).",
            "Simétrica: M[i, j] = M[j, i], ou seja, a matriz é igual à própria transposta.",
            "Antissimétrica: para i ≠ j, M[i, j] = -M[j, i] (a transposta tem o sinal trocado)."
          ]},
          { t: "h", h: "Produto de matrizes" },
          { t: "p", p: "Para multiplicar A (m x n) por B (n x p), o número de colunas de A precisa ser igual ao de linhas de B. O resultado C é m x p, com C[i, k] = SOMA de A[i, j] * B[j, k]." },
          { t: "code", c: String.raw`algoritmo
  declare A[3, 2], B[2, 3], C[3, 3] numérico
  declare i, j, k numérico
  para i <- 1 até 3 faça
    para j <- 1 até 2 faça
      leia A[i, j]
  para i <- 1 até 2 faça
    para j <- 1 até 3 faça
      leia B[i, j]
  para i <- 1 até 3 faça
    para k <- 1 até 3 faça
      início
        C[i, k] <- 0
        para j <- 1 até 2 faça
          C[i, k] <- C[i, k] + A[i, j] * B[j, k]
      fim
  para i <- 1 até 3 faça
    para j <- 1 até 3 faça
      escreva C[i, j]
fim algoritmo` },
          { t: "note", p: "Para somar ou multiplicar matrizes não se opera o conjunto inteiro: opera-se elemento a elemento, dentro de laços aninhados." },
          { t: "warn", p: "Matrizes precisam ser \"conformes\" para o produto: o número de colunas de A deve ser igual ao número de linhas de B, senão o produto não existe." }
        ],
        quiz: [
          { q: "Na diagonal principal de uma matriz quadrada de ordem N, quais elementos valem?", opts: ["os com I + J = N + 1", "os com I = J", "os da última linha", "todos os da primeira coluna"], ans: 1, expl: "Diagonal principal: I = J." },
          { q: "Em uma matriz de ordem 4, é da diagonal secundária o elemento M[2, 3]?", opts: ["sim, pois 2 + 3 = 5 = 4 + 1", "não, pois 2 ≠ 3", "sempre", "só se for quadrada"], ans: 0, expl: "Diagonal secundária: I + J = N + 1 = 5, e 2 + 3 = 5." },
          { q: "A matriz identidade de ordem N tem:", opts: ["todos os elementos 1", "diagonal principal 1 e o resto 0", "diagonal secundária 1", "todos os elementos 0"], ans: 1, expl: "Identidade: 1 na diagonal principal, 0 nos demais." },
          { q: "Multiplicando A (2x3) por B (3x4), a matriz C resultante é:", opts: ["de ordem 2x4", "de ordem 3x3", "de ordem 2x3", "impossível"], ans: 0, expl: "O produto tem as linhas de A (2) e as colunas de B (4): C é 2x4." },
          { q: "Uma matriz transposta AT de uma matriz A (m x n) tem dimensões:", opts: ["m x m", "n x m", "m x n", "n x n"], ans: 1, expl: "A transposta troca linhas por colunas: se A é m x n, AT é n x m." },
          { q: "Para que o produto de matrizes A (3x4) e B (4x2) resulte em C, as dimensões de C são:", opts: ["3x2", "4x4", "2x3", "3x4"], ans: 0, expl: "O resultado C tem as linhas de A (3) e as colunas de B (2): C é 3x2." },
          { q: "Uma matriz triangular inferior é caracterizada por:", opts: ["Zeros abaixo da diagonal principal.", "Zeros acima da diagonal principal.", "Todos os elementos iguais.", "Zeros na diagonal principal."], ans: 1, expl: "Na triangular inferior, os zeros estão acima da diagonal principal (I < J -> 0)." },
          { q: "O produto de matrizes A (2x3) por B (3x2) resulta em uma matriz de ordem:", opts: ["2x2", "3x3", "2x3", "3x2"], ans: 0, expl: "O resultado tem as linhas de A (2) e as colunas de B (2): 2x2." },
          { q: "Uma matriz é simétrica quando:", opts: ["É igual à sua transposta.", "Todos os elementos são iguais.", "Só tem zeros.", "É quadrada."], ans: 0, expl: "Simétrica significa M[i,j] = M[j,i], ou seja, a matriz é igual à própria transposta." },
          { q: "Na multiplicação de matrizes C[i,k] = SOMA de A[i,j] * B[j,k], o índice j percorre:", opts: ["As linhas de A.", "As colunas de B.", "As colunas de A (que coincidem com as linhas de B).", "As colunas de C."], ans: 2, expl: "Para o produto ser válido, o número de colunas de A é igual ao de linhas de B; o índice j percorre essa dimensão comum." }
        ]
      }
    ]
  },
  c: {
    name: "Algoritmos em C",
    topics: [
      {
        id: "c-intro",
        title: "Introdução ao C",
        subtitle: "Estrutura básica de um programa em C: includes, main, printf.",
        blocks: [
          { t: "h", h: "Estrutura básica de um programa em C" },
          { t: "p", p: "Todo programa em C começa incluindo bibliotecas (como stdio.h, de entrada e saída) e tem a função principal main(). A execução começa a partir do main." },
          { t: "code", c: String.raw`#include <stdio.h>

int main() {
    printf("Olá, mundo!\n");
    return 0;
}` },
          { t: "h", h: "O que cada parte significa" },
          { t: "lst", items: [
            "#include <stdio.h>: importa as funções de entrada e saída (printf, scanf).",
            "int main(): função principal; int indica que ela devolve um inteiro.",
            "{ }: delimitam o bloco de comandos.",
            "printf(\"...\"): imprime texto na tela.",
            "\\n: quebra de linha.",
            "return 0;: indica que o programa terminou com sucesso.",
            "; : todo comando em C termina com ponto e vírgula."
          ]},
          { t: "h", h: "Do algoritmo ao programa" },
          { t: "p", p: "Você escreve o algoritmo, traduz para C, compila (ex.: com o GCC) e só então executa. Dois tipos de erro podem aparecer: erros de sintaxe (você escreveu algo inválido) e erros de lógica (o programa roda, mas faz o que não deveria)." },
          { t: "note", p: "C é compilada: o código-fonte é transformado em um executável antes de rodar. Por isso, é uma das linguagens mais rápidas e usadas em sistemas." }
        ],
        quiz: [
          { q: "Todo programa em C precisa ter uma função chamada:", opts: ["inicio()", "main()", "principal()", "comeca()"], ans: 1, expl: "A função principal do C se chama main(). É por ela que a execução começa." },
          { q: "Para usar printf e scanf, precisamos incluir:", opts: ["#include <string.h>", "#include <stdio.h>", "#include <math.h>", "#include <windows.h>"], ans: 1, expl: "stdio.h (standard I/O) contém as funções de entrada e saída." },
          { q: "O que significa \\n dentro do printf?", opts: ["Um erro de sintaxe.", "Quebra de linha.", "Uma variável.", "Um comentário."], ans: 1, expl: "\\n é a sequência de escape que pula para a próxima linha." },
          { q: "Em C, cada comando termina com:", opts: ["Ponto final .", "Ponto e vírgula ;", "Dois pontos :", "Nada."], ans: 1, expl: "O ponto e vírgula finaliza cada instrução em C." },
          { q: "A função main() em C retorna um valor do tipo:", opts: ["void", "float", "int", "char"], ans: 2, expl: "No programa principal padrão, main() retorna int, geralmente 0 para indicar sucesso." },
          { q: "O que acontece quando um programa em C termina com return 0?", opts: ["Indica que houve erro.", "Indica que o programa terminou com sucesso.", "O programa reinicia.", "Nada acontece."], ans: 1, expl: "return 0 é o código de saída padrão que indica execução bem-sucedida." },
          { q: "Para compilar um programa em C, qual ferramenta é comumente utilizada?", opts: ["Python", "GCC (GNU Compiler Collection)", "Photoshop", "Excel"], ans: 1, expl: "O GCC é o compilador mais utilizado para programação em C no ambiente Linux e também disponível em outras plataformas." },
          { q: "O que são comentários em C e como são criados com //?", opts: ["Instruções que o compilador executa.", "Textos ignorados pelo compilador, usados para documentar o código.", "Variáveis especiais.", "Comandos de entrada de dados."], ans: 1, expl: "Comentários são anotações para o programador; o compilador os ignora completamente." },
          { q: "Qual é a função da diretiva #include no início de um programa C?", opts: ["Declarar variáveis.", "Incluir o conteúdo de um arquivo de cabeçalho (biblioteca).", "Definir uma constante.", "Iniciar a função main."], ans: 1, expl: "#include copia o conteúdo do arquivo especificado (como stdio.h) para o programa antes da compilação." },
          { q: "Se uma função em C declarada como int não tiver um return, o que pode acontecer?", opts: ["Nada, é opcional.", "Retorna automaticamente 0.", "O comportamento é indefinido e pode causar erros.", "O compilador adiciona um return 1."], ans: 2, expl: "O comportamento é indefinido se uma função int não retornar um valor explicitamente (fora do main no C99+)." }
        ]
      },
      {
        id: "c-variaveis",
        title: "Variáveis, printf e scanf",
        subtitle: "Tipos de dados, exibição e leitura de valores.",
        blocks: [
          { t: "h", h: "Tipos de dados em C" },
          { t: "lst", items: [
            "int: números inteiros (ex.: 42, -7).",
            "float: ponto flutuante de precisão simples (ex.: 3.14).",
            "double: ponto flutuante de precisão dupla (mais preciso).",
            "char: um único caractere (ex.: 'a', 'Z')."
          ]},
          { t: "h", h: "Declarando e exibindo valores" },
          { t: "code", c: String.raw`#include <stdio.h>

int main() {
    int idade = 18;
    float altura = 1.75;
    double pi = 3.14159;
    char inicial = 'G';

    printf("Idade: %d\n", idade);
    printf("Altura: %.2f\n", altura);
    printf("PI: %lf\n", pi);
    printf("Inicial: %c\n", inicial);
    return 0;
}` },
          { t: "h", h: "Principais códigos de formato" },
          { t: "lst", items: [
            "%d → int",
            "%f → float      | %.2f → float com 2 casas decimais",
            "%lf → double",
            "%c → char",
            "%s → string (texto)"
          ]},
          { t: "h", h: "Lendo valores com scanf" },
          { t: "code", c: String.raw`#include <stdio.h>

int main() {
    int n1, n2, soma;

    printf("Digite o primeiro número: ");
    scanf("%d", &n1);

    printf("Digite o segundo número: ");
    scanf("%d", &n2);

    soma = n1 + n2;
    printf("A soma é: %d\n", soma);
    return 0;
}` },
          { t: "note", p: "O & na frente da variável no scanf é obrigatório: ele entrega o endereço de memória da variável para o scanf guardar o valor lá." },
          { t: "warn", p: "Cuidado: scanf(\"%d\", n1) sem o & é um erro clássico que derruba muita prova!" }
        ],
        quiz: [
          { q: "O símbolo & em scanf(\"%d\", &n1) serve para:", opts: ["Multiplicar n1 por 8.", "Passar o endereço de memória da variável.", "Indicar que é um texto.", "Não serve para nada."], ans: 1, expl: "O & obtém o endereço de memória da variável, permitindo ao scanf gravar o valor nela." },
          { q: "Qual código imprime um float com 2 casas decimais?", opts: ["%f", "%.2f", "%d", "%2f"], ans: 1, expl: "%.2f limita a exibição a duas casas decimais." },
          { q: "Para ler um double com scanf, usamos:", opts: ["%d", "%c", "%lf", "%s"], ans: 2, expl: "double é lido com %lf. (float seria %f.)" },
          { q: "O tipo char armazena:", opts: ["Um número inteiro grande.", "Um único caractere, como 'a' ou 'Z'.", "Um texto inteiro.", "Números decimais."], ans: 1, expl: "char guarda um único caractere; textos usam vetores de char (strings)." },
          { q: "Para exibir um número inteiro com printf, usamos o código de formato:", opts: ["%f", "%c", "%d", "%s"], ans: 2, expl: "%d é o código de formato para inteiros decimais em C." },
          { q: "Qual é a diferença entre float e double em C?", opts: ["Não há diferença.", "float tem precisão simples; double tem precisão dupla (mais precisa).", "float é para inteiros; double para textos.", "double é mais lento e sempre preferível."], ans: 1, expl: "double ocupa mais memória, mas guarda números com mais casas decimais que float." },
          { q: "Qual é a diferença entre declarar e atribuir uma variável?", opts: ["São a mesma coisa.", "Declarar reserva o espaço na memória; atribui coloca um valor nesse espaço.", "Declarar é opcional em C.", "Atribuir cria a variável na memória."], ans: 1, expl: "Declarar define o tipo e nome; atribui (=) coloca um valor na variável já declarada." },
          { q: "Em C, o que acontece se você usar uma variável sem inicializá-la?", opts: ["Sempre vale 0.", "Sempre vale NULL.", "Tem um valor indeterminado (lixo de memória).", "O compilador gera erro."], ans: 2, expl: "Variáveis locais não inicializadas contêm lixo de memória; seu valor é imprevisível." },
          { q: "O código \"int a = 5, b = 10;\" declara:", opts: ["Uma variável com o valor 5 e 10.", "Duas variáveis int: a valendo 5 e b valendo 10.", "Uma única variável chamada a,b.", "Um erro de sintaxe."], ans: 1, expl: "É possível declarar e inicializar múltiplas variáveis do mesmo tipo em uma linha, separadas por vírgula." },
          { q: "Qual o tamanho (em memória) típico de um int em C em uma arquitetura de 32 bits?", opts: ["1 byte", "2 bytes", "4 bytes", "8 bytes"], ans: 2, expl: "Em sistemas de 32 bits, int normalmente ocupa 4 bytes (32 bits), armazenando valores de -2^31 a 2^31-1." }
        ]
      },
      {
        id: "c-condicionais",
        title: "Condicionais em C",
        subtitle: "if, else e switch: tomando decisões no código.",
        blocks: [
          { t: "h", h: "if e else" },
          { t: "code", c: String.raw`#include <stdio.h>

int main() {
    int n;
    printf("Digite um número: ");
    scanf("%d", &n);

    if (n % 2 == 0) {
        printf("%d é par.\n", n);
    } else {
        printf("%d é ímpar.\n", n);
    }
    return 0;
}` },
          { t: "h", h: "else if (cadeia de testes)" },
          { t: "code", c: String.raw`#include <stdio.h>

int main() {
    float nota;
    printf("Digite a nota: ");
    scanf("%f", &nota);

    if (nota >= 6) {
        printf("Aprovado!\n");
    } else if (nota >= 4) {
        printf("Recuperação.\n");
    } else {
        printf("Reprovado.\n");
    }
    return 0;
}` },
          { t: "h", h: "switch" },
          { t: "p", p: "O switch é útil quando você testa uma única variável contra vários valores constantes." },
          { t: "code", c: String.raw`#include <stdio.h>

int main() {
    int opcao = 2;

    switch (opcao) {
        case 1: printf("Opção 1\n"); break;
        case 2: printf("Opção 2\n"); break;
        default: printf("Inválida\n");
    }
    return 0;
}` },
          { t: "note", p: "Em C, igualdade é == e diferença é !=. Um \"=\" sozinho é atribuição!" },
          { t: "warn", p: "Não esqueça o break em cada case do switch, senão o programa \"cai\" no case seguinte." }
        ],
        quiz: [
          { q: "Em C, o operador de igualdade é:", opts: ["=", "==", ":=", "!="], ans: 1, expl: "== compara valores; = é apenas atribuição; != verifica diferença." },
          { q: "Com nota = 7.5, o segundo exemplo imprime:", opts: ["Recuperação.", "Aprovado!", "Reprovado.", "Nada."], ans: 1, expl: "7.5 >= 6, então cai no primeiro if: Aprovado!" },
          { q: "O \"default\" do switch executa quando:", opts: ["A condição é verdadeira.", "Nenhum case corresponde à variável.", "Sempre, antes do primeiro case.", "O programa encerra."], ans: 1, expl: "default é o \"senão\" do switch: roda se nenhum case der match." },
          { q: "Para testar vários valores constantes de uma única variável, a estrutura ideal é:", opts: ["while", "switch", "for", "vetor"], ans: 1, expl: "O switch foi feito exatamente para esse padrão de testes com valores constantes." },
          { q: "No switch em C, o que o comando break faz?", opts: ["Encerra o programa.", "Impede que a execução caia no case seguinte.", "Repete o case atual.", "Não tem função importante."], ans: 1, expl: "Sem break, o programa continua executando os cases seguintes (fall-through), o que geralmente é indesejado." },
          { q: "Qual expressão testa corretamente se x é igual a 5 em C?", opts: ["if (x = 5)", "if (x == 5)", "if (x eq 5)", "if (x := 5)"], ans: 1, expl: "Em C, == é o operador de igualdade; o = sozinho é de atribuição." },
          { q: "O que acontece se você escrever if (x = 5) em vez de if (x == 5)?", opts: ["Erro de compilação imediato.", "A condição sempre será verdadeira, pois atribui 5 a x.", "O programa para.", "A expressão é ignorada."], ans: 1, expl: "if (x = 5) atribui 5 a x e, como 5 é diferente de zero, a condição é sempre verdadeira — um erro lógico clássico." },
          { q: "Qual operador é usado para testar desigualdade (diferente de) em C?", opts: ["<>", "!=", "=/=", "!<"], ans: 1, expl: "O operador de desigualdade em C é != (diferente de)." },
          { q: "Em C, no switch, quais são os valores aceitos nos labels case?", opts: ["Expressões qualquer.", "Somente constantes inteiras (ou char).", "Strings.", "Variáveis e constantes sem restrição."], ans: 1, expl: "Os labels case aceitam apenas constantes inteiras (int ou char). Strings e expressões variáveis não são permitidos." },
          { q: "Qual é o resultado da expressão 5 > 3 && 2 < 4 em C?", opts: ["0", "1", "Erro", "8"], ans: 1, expl: "5 > 3 é 1 (verdadeiro) e 2 < 4 também é 1; 1 && 1 = 1 (verdadeiro)." }
        ]
      },
      {
        id: "c-lacos",
        title: "Laços em C",
        subtitle: "for, while e do-while: repetindo blocos.",
        blocks: [
          { t: "h", h: "for" },
          { t: "code", c: String.raw`#include <stdio.h>

int main() {
    int i;
    for (i = 1; i <= 10; i++) {
        printf("%d ", i);
    }
    printf("\n");
    return 0;
}` },
          { t: "h", h: "while" },
          { t: "code", c: String.raw`#include <stdio.h>

int main() {
    int i = 1;
    while (i <= 10) {
        printf("%d ", i);
        i++;
    }
    printf("\n");
    return 0;
}` },
          { t: "h", h: "do-while" },
          { t: "p", p: "Diferente do while, o do-while testa a condição no final: o bloco roda pelo menos uma vez." },
          { t: "code", c: String.raw`#include <stdio.h>

int main() {
    int senha;
    do {
        printf("Digite a senha (1234): ");
        scanf("%d", &senha);
    } while (senha != 1234);

    printf("Senha correta!\n");
    return 0;
}` },
          { t: "h", h: "Incremento e operadores compostos" },
          { t: "p", p: "i++ equivale a i = i + 1 e i-- equivale a i = i - 1. Também existem +=, -=, *= e /=: por exemplo, soma += i é o mesmo que soma = soma + i." },
          { t: "note", p: "O for tem três partes: inicialização; condição; incremento. O while testa antes de executar; o do-while testa depois." },
          { t: "warn", p: "Cuidado com loop infinito: se i++ ficar de fora do while, a condição nunca muda e o programa não termina." }
        ],
        quiz: [
          { q: "Quantas vezes executa o laço for (i = 1; i <= 3; i++)?", opts: ["2 vezes", "3 vezes", "4 vezes", "Infinitas vezes"], ans: 1, expl: "Roda para i = 1, 2 e 3 — três repetições." },
          { q: "Qual laço garante que o bloco seja executado pelo menos uma vez?", opts: ["for", "while", "do-while", "if"], ans: 2, expl: "No do-while a condição é testada no final, então o corpo sempre roda ao menos uma vez." },
          { q: "soma += i é o mesmo que:", opts: ["soma = i", "soma = soma + i", "i = i + soma", "soma = soma * i"], ans: 1, expl: "O operador composto += soma o valor da direita à variável da esquerda." },
          { q: "O que o comando i++ faz em C?", opts: ["Multiplica i por 2.", "Incrementa o valor de i em 1.", "Decrementa i.", "Imprime o valor de i."], ans: 1, expl: "i++ é equivalente a i = i + 1; aumenta o valor da variável em 1 unidade." },
          { q: "No laço while, se a condição for falsa desde o início, o corpo:", opts: ["Executa uma vez.", "Nunca é executado.", "Executa infinitamente.", "Causa erro de compilação."], ans: 1, expl: "O while testa antes de executar; se a condição já é falsa, o corpo não roda nenhuma vez." },
          { q: "O que acontece se você esquecer o comando i++ dentro de um laço while?", opts: ["O laço roda uma vez a mais.", "O laço vira um loop infinito.", "Erro de compilação.", "Nada muda."], ans: 1, expl: "Sem alterar a variável de controle, a condição nunca muda de valor e o laço nunca termina (loop infinito)." },
          { q: "No laço do-while, em que momento a condição é avaliada?", opts: ["Antes da primeira execução.", "No final de cada iteração.", "Somente no início do programa.", "Nunca."], ans: 1, expl: "No do-while, a condição é testada ao final de cada iteração, garantindo que o corpo execute ao menos uma vez." },
          { q: "Quantas vezes o bloco executa em: do { ... } while (0); ?", opts: ["Zero vezes.", "Uma vez.", "Infinitas vezes.", "Depende do conteúdo."], ans: 1, expl: "O do-while executa o corpo uma vez e só então testa a condição. Como 0 é falso, o laço termina após a primeira execução." },
          { q: "Qual seria o resultado de for (i = 10; i >= 1; i--) que imprime i?", opts: ["1 2 3 ... 10", "10 9 8 ... 1", "10 8 6 ... 2", "Nada"], ans: 1, expl: "Com i-- e condição i >= 1, o laço imprime de 10 até 1 em ordem decrescente." },
          { q: "Qual é a forma correta de um laço for que soma de 1 a 100?", opts: ["for (i = 1; i < 100; i++)", "for (i = 1; i <= 100; i++)", "for (i = 100; i >= 1; i++)", "for (i = 0; i < 100; i++)"], ans: 1, expl: "Para incluir o 100 na soma, a condição deve ser i <= 100 (ou i < 101)." }
        ]
      },
      {
        id: "c-vetores",
        title: "Vetores e Strings em C",
        subtitle: "Arrays, strings e matrizes — o coração dos dados.",
        blocks: [
          { t: "h", h: "Vetores em C" },
          { t: "p", p: "Vetores armazenam vários valores do mesmo tipo. A contagem começa em 0: um vetor int v[5] tem posições v[0] até v[4]." },
          { t: "code", c: String.raw`#include <stdio.h>

int main() {
    int notas[5], i;
    int soma = 0;
    float media;

    for (i = 0; i < 5; i++) {
        printf("Nota do aluno %d: ", i + 1);
        scanf("%d", &notas[i]);
        soma += notas[i];
    }

    media = (float) soma / 5;
    printf("Média: %.2f\n", media);
    return 0;
}` },
          { t: "h", h: "Strings (textos)" },
          { t: "p", p: "Em C não existe o tipo string nativo: um texto é um vetor de char terminado pelo caractere especial '\\0'." },
          { t: "code", c: String.raw`#include <stdio.h>

int main() {
    char nome[50];

    printf("Digite seu nome: ");
    scanf("%s", nome);

    printf("Olá, %s!\n", nome);
    return 0;
}` },
          { t: "h", h: "Matrizes (vetor de vetores)" },
          { t: "code", c: String.raw`#include <stdio.h>

int main() {
    int mat[2][3];   /* 2 linhas, 3 colunas */
    int L, C, v = 1;

    for (L = 0; L < 2; L++)
        for (C = 0; C < 3; C++) {
            mat[L][C] = v;
            v++;
        }

    for (L = 0; L < 2; L++) {
        for (C = 0; C < 3; C++)
            printf("%d ", mat[L][C]);
        printf("\n");
    }
    return 0;
}` },
          { t: "note", p: "No scanf de string NÃO usamos &: nome já é a posição do primeiro caractere. Já em int/float/char simples, o & é obrigatório." },
          { t: "warn", p: "Com %s o scanf lê apenas até o espaço. Para ler frases completas, use fgets(nome, 50, stdin)." }
        ],
        quiz: [
          { q: "int v[5] cria as posições:", opts: ["v[1] a v[5]", "v[0] a v[4]", "v[0] a v[5]", "v[1] a v[6]"], ans: 1, expl: "Em C, o índice começa em 0, então v[5] vai de v[0] até v[4]." },
          { q: "Em C, uma string é:", opts: ["Um tipo nativo chamado string.", "Um vetor de char que termina com '\\0'.", "Uma variável do tipo int.", "Um número em aspas."], ans: 1, expl: "C não tem string nativa: textos são vetores de char finalizados por '\\0'." },
          { q: "Para ler um inteiro na posição i do vetor, usamos:", opts: ["scanf(\"%d\", notas[i]);", "scanf(\"%d\", &notas[i]);", "scanf(\"%d\", &notas);", "scanf(\"%d\", notas);"], ans: 1, expl: "Cada elemento precisa do seu endereço: &notas[i]." },
          { q: "Em uma matriz, mat[1][2] significa:", opts: ["Linha 1, coluna 2.", "Linha 2, coluna 1.", "Expressão inválida.", "O valor 12."], ans: 0, expl: "O primeiro índice é a linha e o segundo a coluna." },
          { q: "Em C, o último índice válido de um vetor int v[10] é:", opts: ["v[10]", "v[9]", "v[11]", "v[1]"], ans: 1, expl: "A contagem começa em 0, então as posições vão de v[0] a v[9]." },
          { q: "Ao ler uma string com scanf(\"%s\", nome), o que acontece se o usuário digitar \"João Silva\"?", opts: ["A string inteira é lida.", "Apenas \"João\" é lida, parando no espaço.", "O programa trava.", "Dá erro de compilação."], ans: 1, expl: "scanf com %s lê até encontrar um espaço. Para ler a frase completa, seria necessário usar fgets." },
          { q: "O que acontece se você acessar uma posição além dos limites de um vetor em C?", opts: ["O compilador acusa erro.", "É um comportamento indefinido: acessa memória indevida.", "Retorna sempre 0.", "O programa não compila."], ans: 1, expl: "C não verifica limites de vetores; acessar além do tamanho lê memória de outra região, com resultado imprevisível." },
          { q: "Qual é a utilidade do operador (float) em soma / 5 no exemplo da média?", opts: ["Multiplicar a soma por 5.", "Fazer a divisão resultar em um número real (float) em vez de inteiro truncado.", "Nenhuma, é desnecessário.", "Converter para inteiro."], ans: 1, expl: "O cast (float) força a divisão a ser realizada em ponto flutuante, evitando a truncagem da divisão inteira." },
          { q: "Para percorrer todos os elementos de um vetor int v[5], o laço mais adequado é:", opts: ["for (i = 1; i <= 5; i++)", "for (i = 0; i < 5; i++)", "while (i > 5)", "Nenhum."], ans: 1, expl: "Como os índices vão de 0 a 4, o laço correto é de 0 até menor que 5." },
          { q: "Como se calcula a média de um vetor de inteiros corretamente em C?", opts: ["media = soma / n;", "media = (float) soma / n;", "media = soma % n;", "media = soma * n;"], ans: 1, expl: "Para que a média tenha casas decimais, é preciso converter o numerador para float antes de dividir." }
        ]
      },
      {
        id: "c-funcoes",
        title: "Funções em C",
        subtitle: "Dividindo o código em funções com retorno e parâmetros.",
        blocks: [
          { t: "h", h: "Declarando uma função" },
          { t: "code", c: String.raw`#include <stdio.h>

int quadrado(int x) {
    return x * x;
}

int main() {
    int n = 4;
    printf("O quadrado de %d é %d\n", n, quadrado(n));
    return 0;
}` },
          { t: "h", h: "Passagem por valor vs. por referência" },
          { t: "lst", items: [
            "Por valor: a função recebe uma cópia; alterações dentro dela NÃO afetam a variável original.",
            "Por referência (com ponteiro): a função recebe o endereço e pode alterar a variável original."
          ]},
          { t: "h", h: "Protótipos" },
          { t: "p", p: "Se quiser declarar a função depois do main, precisa primeiro avisar o compilador com um protótipo." },
          { t: "code", c: String.raw`#include <stdio.h>

int soma(int a, int b);   /* protótipo */

int main() {
    printf("%d\n", soma(2, 3));
    return 0;
}

int soma(int a, int b) {
    return a + b;
}` },
          { t: "h", h: "Função void (sem retorno)" },
          { t: "code", c: String.raw`#include <stdio.h>

void cumprimentar(char nome[]) {
    printf("Olá, %s!\n", nome);
}

int main() {
    cumprimentar("Ana");
    return 0;
}` },
          { t: "note", p: "return encerra a função e devolve um valor a quem a chamou. Uma função void não retorna nada." }
        ],
        quiz: [
          { q: "O que acontece se você alterar um parâmetro passado por valor?", opts: ["A variável original muda.", "Muda apenas a cópia dentro da função.", "O programa trava.", "Nada acontece."], ans: 1, expl: "Por valor, a função trabalha com uma cópia; a variável original fica inalterada." },
          { q: "Uma função declarada como void:", opts: ["Precisa retornar um int.", "Não retorna valor.", "Só pode imprimir números.", "Não pode ter parâmetros."], ans: 1, expl: "void indica que a função não devolve nenhum resultado." },
          { q: "O protótipo de uma função serve para:", opts: ["Imprimir o resultado antecipadamente.", "Avisar o compilador sobre a função antes de seu uso.", "Armazenar valores.", "Quebrar linha."], ans: 1, expl: "O protótipo declara a assinatura da função, permitindo chamá-la antes da definição." },
          { q: "Uma função void em C:", opts: ["Precisa retornar um int.", "Não retorna valor.", "Não pode ter parâmetros.", "Só pode ser chamada uma vez."], ans: 1, expl: "void indica que a função não devolve nenhum valor ao chamador." },
          { q: "Ao chamar uma função, os argumentos são:", opts: ["Sempre variáveis.", "Podem ser constantes, variáveis ou expressões.", "Sempre do tipo int.", "Ignorados pela função."], ans: 1, expl: "Argumentos podem ser valores literais (5), variáveis (x) ou expressões (x + 3) que correspondam aos tipos dos parâmetros." },
          { q: "O que o comando return valor faz em uma função?", opts: ["Imprime o valor na tela.", "Encerra a função devolvendo um valor ao chamador.", "Reinicia o programa.", "Declara uma variável local."], ans: 1, expl: "return devolve o resultado ao chamador e encerra imediatamente a execução da função." },
          { q: "Em C, uma função pode ser chamada de dentro de outra função?", opts: ["Não, é proibido.", "Sim, funções podem chamar outras funções livremente.", "Somente se for main.", "Apenas se não retornar valor."], ans: 1, expl: "Funções podem chamar outras funções, inclusive de bibliotecas ou definidas pelo programador (recursão inclusive)." },
          { q: "Qual é a complexidade de usar passagem por referência em vez de por valor?", opts: ["Torna o código sempre mais lento.", "Permite que a função modifique a variável original do chamador.", "Elimina a necessidade do main.", "Não tem função no C."], ans: 1, expl: "Com ponteiros (por referência), a função recebe o endereço e pode alterar o valor da variável original." },
          { q: "Uma variável declarada dentro de uma função é:", opts: ["Global.", "Local, e só existe durante a chamada à função.", "Estática por padrão.", "Compartilhada entre todas as funções."], ans: 1, expl: "Variáveis locais são criadas ao entrar na função e destruídas quando ela retorna." },
          { q: "Qual é o resultado do programa ao chamar quadrado(3)?", opts: ["6", "9", "12", "3"], ans: 1, expl: "quadrado(3) retorna 3 * 3 = 9." }
        ]
      },
      {
        id: "c-ponteiros",
        title: "Ponteiros (Fundamentos)",
        subtitle: "Endereços de memória com & e * — o tópico dos 'oi?'.",
        blocks: [
          { t: "h", h: "O que é um ponteiro" },
          { t: "p", p: "Um ponteiro guarda o endereço de memória de uma variável. É usado para passagem por referência, manipulação de vetores e alocação dinâmica." },
          { t: "h", h: "Operadores-chave" },
          { t: "lst", items: [
            "& → \"endereço de\" uma variável.",
            "* → na declaração, indica que é ponteiro; no uso, \"desreferencia\" (acessa o valor apontado)."
          ]},
          { t: "code", c: String.raw`#include <stdio.h>

int main() {
    int x = 10;
    int *ptr;          /* ptr é um ponteiro para int */
    ptr = &x;          /* ptr guarda o endereço de x */

    printf("Valor de x: %d\n", x);
    printf("Endereço de x: %p\n", &x);
    printf("Valor apontado por ptr: %d\n", *ptr);

    *ptr = 20;         /* muda o valor de x usando o ponteiro */
    printf("x agora vale: %d\n", x);
    return 0;
}` },
          { t: "h", h: "Por que usar ponteiros?" },
          { t: "lst", items: [
            "Alterar variáveis dentro de funções (passagem por referência).",
            "Trabalhar com vetores e strings com eficiência.",
            "Criar estruturas dinâmicas (listas, árvores) com malloc.",
            "É campeão de questões de prova!"
          ]},
          { t: "note", p: "Um vetor em C é, na prática, um ponteiro para o primeiro elemento: notas equivale a &notas[0]." }
        ],
        quiz: [
          { q: "O operador & aplicado a uma variável retorna:", opts: ["O valor armazenado.", "O endereço de memória da variável.", "Um erro.", "O tipo da variável."], ans: 1, expl: "& é o \"endereço de\": entrega a posição da variável na memória." },
          { q: "Dado int *ptr = &x, a expressão *ptr representa:", opts: ["O endereço de x.", "O valor armazenado em x.", "Um erro de sintaxe.", "Um texto."], ans: 1, expl: "Desreferenciar (*ptr) acessa o valor guardado no endereço apontado — ou seja, o valor de x." },
          { q: "Qual é a principal utilidade de passar um ponteiro para uma função?", opts: ["Tornar o programa menor.", "Permitir alterar a variável original dentro da função.", "Eliminar as variáveis.", "Acelerar o compilador."], ans: 1, expl: "Com ponteiros, a função muda o valor na própria variável original (passagem por referência)." },
          { q: "Se int x = 42; int *p = &x; o que *p + 1 resulta?", opts: ["O endereço de x somado a 1.", "O valor 43.", "Erro de compilação.", "O valor 42."], ans: 1, expl: "*p acessa o valor de x (42); somando 1, o resultado é 43." },
          { q: "Para declarar um ponteiro para o tipo float, usamos:", opts: ["float p;", "float *p;", "int *p;", "float &p;"], ans: 1, expl: "O * na declaração indica que p é um ponteiro. float *p significa 'ponteiro para float'." },
          { q: "Dado int x = 10; int *p = &x; qual é o efeito do comando *p = 20;?", opts: ["Nenhum, é inválido.", "Altera o valor de x para 20.", "Cria outro ponteiro.", "Imprime o endereço."], ans: 1, expl: "Desreferenciar com *p acessa a variável apontada (x); atribuir altera x para 20." },
          { q: "Qual é o operador que obtém o endereço de uma variável?", opts: ["*", "&", "#", "@"], ans: 1, expl: "O operador & retorna o endereço de memória da variável." },
          { q: "O que acontece se você desreferenciar um ponteiro sem ter atribuído um endereço válido?", opts: ["Retorna NULL automaticamente.", "É um comportamento indefinido, acessando memória inválida.", "Nunca causa erro.", "Retorna sempre 0."], ans: 1, expl: "Desreferenciar ponteiro não inicializado acessa endereço inválido e causa erro/segfault." },
          { q: "Como um vetor se relaciona com ponteiros em C?", opts: ["Não há relação.", "O nome de um vetor é um ponteiro constante para seu primeiro elemento.", "Vetores não podem ser usados com ponteiros.", "O vetor é sempre um int."], ans: 1, expl: "O identificador de um vetor equivale ao endereço do primeiro elemento (notas == &notas[0])." },
          { q: "Qual é a utilidade da função malloc() relacionada a ponteiros?", opts: ["Imprimir valores.", "Alocar memória dinamicamente, retornando um ponteiro.", "Comparar strings.", "Liberar o programa."], ans: 1, expl: "malloc reserva memória em tempo de execução e devolve um ponteiro para o início da região alocada." }
        ]
      },
      {
        id: "c-matrizes",
        title: "Matrizes (Vetores 2D)",
        subtitle: "Armazenando dados em linhas e colunas com dois índices.",
        blocks: [
          { t: "h", h: "O que é uma matriz" },
          { t: "p", p: "Uma matriz em C é um vetor de vetores: uma estrutura bidimensional com linhas e colunas. Acessamos cada elemento com dois índices, m[linha][coluna], onde o primeiro seleciona a linha e o segundo a coluna. É como uma tabela ou uma grade." },
          { t: "h", h: "Declarando e preenchendo" },
          { t: "p", p: "Declaramos int m[3][3]; — uma matriz de 3 linhas e 3 colunas. Como não podemos inicializar com chaves aninhadas aqui, preenchemos elemento a elemento, normalmente dentro de dois loops aninhados: o externo percorre as linhas e o interno as colunas." },
          { t: "h", h: "Preenchendo e somando a diagonal e uma linha" },
          { t: "code", c: String.raw`#include <stdio.h>

int main() {
    int m[3][3];
    int L, C, v = 1;

    /* preenche elemento a elemento, linha a linha */
    for (L = 0; L < 3; L++)
        for (C = 0; C < 3; C++) {
            m[L][C] = v;
            v++;
        }

    /* soma a diagonal principal: m[0][0] + m[1][1] + m[2][2] */
    int somaDiag = 0;
    for (L = 0; L < 3; L++) somaDiag += m[L][L];
    printf("Diagonal: %d\n", somaDiag);

    /* soma a linha 0 */
    int somaLinha0 = 0;
    for (C = 0; C < 3; C++) somaLinha0 += m[0][C];
    printf("Soma linha 0: %d\n", somaLinha0);

    return 0;
}` },
          { t: "h", h: "Somar uma coluna" },
          { t: "p", p: "Somar uma coluna é o inverso de somar uma linha: mantemos a coluna fixa e variamos a linha no loop externo. No exemplo a seguir somamos todos os elementos da coluna 2." },
          { t: "code", c: String.raw`#include <stdio.h>

int main() {
    int m[3][3];
    int L, C, v = 1;
    for (L = 0; L < 3; L++)
        for (C = 0; C < 3; C++) {
            m[L][C] = v;
            v++;
        }

    int somaCol2 = 0;
    for (L = 0; L < 3; L++) somaCol2 += m[L][2];
    printf("Soma coluna 2: %d\n", somaCol2);
    return 0;
}` },
          { t: "note", p: "A diagonal principal usa o mesmo valor para linha e coluna (m[0][0], m[1][1], m[2][2]). Somar a diagonal secundária exige relacionar a coluna com o tamanho da linha, por exemplo m[L][2-L] em uma matriz 3x3." },
          { t: "warn", p: "Índice fora dos limites é um problema clássico: acessar m[3][0] em uma matriz 3x3 compila, mas lê memória de outra região, gerando resultados inesperados. Em C, o programa não te avisa — você precisa cuidar das fronteiras." }
        ],
        quiz: [
          { q: "Dada uma matriz int m[4][5], quantos elementos ela possui?", opts: ["9", "20", "45", "4"], ans: 1, expl: "Multiplicamos linhas por colunas: 4 × 5 = 20 elementos." },
          { q: "Em uma matriz 3x3 preenchida com 1 a 9, a soma da diagonal principal (m[0][0]+m[1][1]+m[2][2]) é:", opts: ["6", "15", "45", "9"], ans: 1, expl: "A diagonal principal contém 1, 5 e 9, cuja soma é 15." },
          { q: "Para somar todos os elementos da coluna C, qual é o papel dos loops?", opts: ["Manter C fixo e variar L no loop externo.", "Variar C fixo e manter L.", "Usar apenas um loop sem índices.", "Não é possível somar colunas."], ans: 0, expl: "A coluna fica fixa (m[L][C] com C constante) enquanto a linha varia no loop." },
          { q: "O que acontece se você acessar m[3][1] em uma matriz int m[3][3]?", opts: ["Um erro de compilação garantido.", "Acessa memória fora da matriz, com resultado imprevisível.", "Retorna sempre zero.", "O programa trava na hora."], ans: 1, expl: "Os índices válidos vão de 0 a 2; acessar índice 3 lê memória indevida sem aviso." },
          { q: "Em uma matriz int m[3][3], como se acessa o elemento da linha 2, coluna 1?", opts: ["m[2][1]", "m[1][2]", "m[3][1]", "m[2,1]"], ans: 0, expl: "O primeiro índice é a linha (2) e o segundo a coluna (1): m[2][1]." },
          { q: "Para preencher uma matriz 3x3 com valores de 1 a 9, a melhor abordagem é:", opts: ["Um único laço percorrendo 9 posições.", "Dois laços aninhados, um para linhas e outro para colunas.", "Declarar cada elemento manualmente.", "Não é possível preencher uma matriz."], ans: 1, expl: "Dois laços aninhados (linhas x colunas) percorrem todos os elementos de forma organizada." },
          { q: "Na matriz int m[3][3], o elemento m[1][1] está localizado na:", opts: ["Linha 1, coluna 1 (segunda linha, segunda coluna).", "Linha 0, coluna 0.", "Linha 3, coluna 3.", "Linha 2, coluna 2."], ans: 0, expl: "Os índices em C começam em 0; m[1][1] é a segunda linha, segunda coluna." },
          { q: "Como somar todos os elementos de uma matriz int m[3][3]?", opts: ["Usar um único laço.", "Usar dois laços aninhados acumulando m[L][C].", "Não é possível.", "Somar apenas a diagonal."], ans: 1, expl: "Dois laços aninhados percorrem todas as linhas e colunas, acumulando cada m[L][C]." },
          { q: "Qual é o tipo de retorno do exemplo que soma a diagonal?", opts: ["void", "int", "float", "char"], ans: 1, expl: "A soma da diagonal envolve valores inteiros e a variável que acumula é do tipo int." },
          { q: "Em uma matriz int m[4][3], qual é o elemento da última linha e última coluna?", opts: ["m[4][3]", "m[3][2]", "m[0][0]", "m[2][3]"], ans: 1, expl: "Os índices vão de 0 a 3 (linhas) e de 0 a 2 (colunas): o último é m[3][2]." }
        ]
      },
      {
        id: "c-strings",
        title: "Strings (Vetores de char)",
        subtitle: "Textos como sequências de caracteres terminadas por '\\0'.",
        blocks: [
          { t: "h", h: "O que é uma string" },
          { t: "p", p: "C não tem um tipo string nativo. Um texto é um vetor de char, e o caractere especial '\\0' (nulo) marca o fim da string. Por isso \"Ana\" ocupa na verdade 4 posições: 'A', 'n', 'a' e o '\\0' final. O '\\0' não é impresso, mas é o que permite às funções saberem onde o texto termina." },
          { t: "h", h: "Contando o tamanho sem strlen" },
          { t: "p", p: "Um erro comum é tentar usar strlen, strcpy e funções de <string.h>, que não estão disponíveis aqui. Para contar o tamanho, percorremos o vetor com um loop até encontrar o '\\0', incrementando um contador." },
          { t: "code", c: String.raw`#include <stdio.h>

int main() {
    char n[20] = "Ana";
    int tam = 0;

    /* percorre até o '\0' final */
    while (n[tam] != '\0') tam++;

    printf("Tamanho: %d\n", tam);
    printf("%s\n", n);
    return 0;
}` },
          { t: "h", h: "Comparando strings char a char" },
          { t: "p", p: "Para comparar textos, percorremos os dois vetores comparando caractere a caractere. O loop continua enquanto houver caracteres em qualquer das strings ('\\0' ainda não encontrado). Se em algum ponto os caracteres diferirem, os textos são diferentes." },
          { t: "code", c: String.raw`#include <stdio.h>

int main() {
    char a[20] = "Ana";
    char b[20] = "Bia";
    int iguais = 1, i = 0;

    while (a[i] != '\0' || b[i] != '\0') {
        if (a[i] != b[i]) { iguais = 0; break; }
        i++;
    }

    if (iguais) printf("Iguais\n");
    else printf("Diferentes\n");
    return 0;
}` },
          { t: "note", p: "Devido ao '\\0', o vetor que guarda a string precisa ser maior que o próprio texto: declaremos char nome[20] para caber até 19 caracteres significativos mais o terminador." },
          { t: "warn", p: "Se o '\\0' não estiver presente (por exemplo, ao preencher o vetor caractere a caractere e esquecer de pôr o terminador), o loop ultrapassa o fim do vetor e conta caracteres de memória vizinha — um bug clássico de strings." }
        ],
        quiz: [
          { q: "Em C, a string \"Ana\" ocupa quantas posições de memória?", opts: ["3", "4", "2", "Depende do usuário"], ans: 1, expl: "São os caracteres 'A', 'n', 'a' mais o terminador '\\0': 4 posições." },
          { q: "Qual é a função do caractere '\\0'?", opts: ["Indicar o início da string.", "Fazer quebra de linha.", "Marcar o fim da string.", "Substituir espaços."], ans: 2, expl: "O '\\0' (nulo) sinaliza onde a string termina; sem ele, a leitura estouraria o vetor." },
          { q: "Para declarar uma string capaz de guardar até 19 caracteres significativos, usamos:", opts: ["char s[19];", "char s[20];", "char s;", "string s;"], ans: 1, expl: "Precisamos de espaço para os caracteres mais o '\\0': 19 + 1 = 20." },
          { q: "O que acontece na comparação se uma string não tiver o '\\0' final?", opts: ["A comparação para imediatamente.", "O loop lê além do vetor, comparando memória indevida.", "Resulta em erro de compilação.", "O programa imprime \"Iguais\" sempre."], ans: 1, expl: "Sem o terminador, o loop não encontra o fim e segue lendo memória além do vetor, com resultados imprevisíveis." },
          { q: "Ao declarar char s[5] = \"Hi\"; quantos caracteres significativos a string contém?", opts: ["5", "2", "3", "4"], ans: 1, expl: "\"Hi\" tem 2 caracteres significativos ('H' e 'i'), mas ocupa 3 posições (incluindo o '\\0')." },
          { q: "Como percorrer uma string caractere a caractere em C?", opts: ["Usar um laço while verificando se cada caractere é diferente de '\\0'.", "Usar um laço for com tamanho fixo.", "Não é possível percorrer strings em C.", "Usar a função strlen."], ans: 0, expl: "O loop percorre o vetor até encontrar o terminador '\\0', processando cada caractere." },
          { q: "Qual é o valor numérico do caractere nulo '\\0'?", opts: ["0", "1", "32 (espaço)", "10 (nova linha)"], ans: 0, expl: "O caractere nulo '\\0' tem valor numérico 0 e é usado para finalizar strings." },
          { q: "Quantas posições o vetor char precisa para guardar \"Vetor\" (5 letras)?", opts: ["5", "6", "7", "4"], ans: 1, expl: "São os 5 caracteres mais o '\\0' final: 6 posições ao todo." },
          { q: "Se declararmos char s[5] = {'A','B','C','D','\\0'}, o que printf(\"%s\", s) imprime?", opts: ["ABCD\\0", "ABCD", "ABC", "Erro de compilação"], ans: 1, expl: "O %s imprime os caracteres até o '\\0', que não é exibido: \"ABCD\"." },
          { q: "Por que não usamos & antes de nome ao ler com scanf(\"%s\", nome)?", opts: ["É obrigatório usar &.", "Porque nome já é o endereço do primeiro caractere do vetor.", "Para não compilar.", "Porque strings não podem ser lidas."], ans: 1, expl: "O nome de um vetor de char é um ponteiro para o primeiro elemento, então já é o endereço desejado." }
        ]
      },
      {
        id: "c-recursao",
        title: "Recursão em C",
        subtitle: "Funções que chamam a si mesmas, com caso-base e passo recursivo.",
        blocks: [
          { t: "h", h: "O que é recursão" },
          { t: "p", p: "Recursão ocorre quando uma função chama a si mesma para resolver um caso menor. Todo algoritmo recursivo precisa de um caso-base, que para a recursão, e de um passo recursivo, que aproxima cada chamada do caso-base. O caso-base é o que impede a função de rodar para sempre." },
          { t: "h", h: "Fatorial" },
          { t: "p", p: "Como n! = n × (n-1)! e 0! = 1! = 1, o fatorial se escreve de forma naturalmente recursiva. O caso-base é n <= 1. Observe o uso de if/else — o interpretador não aceita o operador ternário ?:." },
          { t: "code", c: String.raw`#include <stdio.h>

int fatorial(int n) {
    if (n <= 1) return 1;
    return n * fatorial(n - 1);
}

int main() {
    printf("%d\n", fatorial(5));
    return 0;
}` },
          { t: "h", h: "Fibonacci" },
          { t: "p", p: "A sequência de Fibonacci começa em 0 e 1, e cada termo seguinte é a soma dos dois anteriores. A versão recursiva espelha essa definição, mas cada chamada gera duas novas chamadas, formando uma árvore de execução que cresce muito rápido." },
          { t: "code", c: String.raw`#include <stdio.h>

int fib(int n) {
    if (n <= 1) return n;
    return fib(n - 1) + fib(n - 2);
}

int main() {
    printf("%d\n", fib(6));
    return 0;
}` },
          { t: "h", h: "Prós e contras vs. loop" },
          { t: "lst", items: [
            "Pró: o código fica elegante e próximo da definição matemática do problema.",
            "Pró: facilita problemas naturalmente recursivos, como árvores e divisão e conquista.",
            "Contra: cada chamada consome memória na pilha; recursões profundas ou sem caso-base causam estouro de pilha.",
            "Contra: Fibonacci recursivo recalcula os mesmos valores muitas vezes, sendo bem mais lento que a versão com loop."
          ]},
          { t: "note", p: "Fib(30) recursivo pode demorar muito por causa das recálculos repetidos. A solução iterativa (com um laço) resolve o mesmo problema em pouquíssimos passos e sem gastar pilha." },
          { t: "warn", p: "Esquecer o caso-base, ou escrever um que nunca é alcançado, produz uma recursão infinita. Cada chamada empilha memória até estourar a pilha e derrubar o programa." }
        ],
        quiz: [
          { q: "O que impede uma função recursiva de rodar para sempre?", opts: ["O tipo de retorno int.", "O caso-base.", "A ordem dos parâmetros.", "O comando printf."], ans: 1, expl: "O caso-base retorna sem nova chamada, interrompendo a recursão." },
          { q: "Qual é o resultado de fatorial(0) na função acima?", opts: ["0", "1", "Erro de estouro", "Imprevisível"], ans: 1, expl: "Como n <= 1, retorna 1 — e 0! é matematicamente 1." },
          { q: "Por que fib(30) recursivo é muito mais lento que um loop?", opts: ["Porque usa mais varáveis.", "Porque recalcula os mesmos valores muitas vezes, em árvore.", "Porque C não suporta recursão.", "Não é mais lento."], ans: 1, expl: "As chamadas sobrepostas repetem o cálculo de muitos termos, explodindo o número de operações." },
          { q: "No interpretador, por que o código recursivo não pode usar o operador ?:", opts: ["Porque ?: é mais lento.", "Porque o interpretador não suporta o ternário ?:. ", "Porque ?: não existe em C.", "Porque exige mais memória."], ans: 1, expl: "O interpretador deste projeto não dá suporte ao operador ternário; devemos usar if/else." },
          { q: "O que acontece se uma função recursiva em C não tiver caso-base?", opts: ["Retorna 0.", "Causa estouro de pilha (stack overflow) e o programa trava.", "Compila normalmente.", "Executa apenas uma vez."], ans: 1, expl: "Sem caso-base, cada chamada empilha uma nova cópia até esgotar a memória da pilha." },
          { q: "A chamada fatorial(3) expande para qual expressão?", opts: ["3 * fatorial(1)", "3 * 2 * 1", "3 * 2 * fatorial(1)", "3 * 2 * 3"], ans: 2, expl: "fatorial(3) = 3 * fatorial(2) = 3 * 2 * fatorial(1). O caso-base (n <= 1) retorna 1." },
          { q: "Qual é o resultado de fib(3) usando a função recursiva do exemplo?", opts: ["2", "3", "5", "1"], ans: 0, expl: "fib(3) = fib(2) + fib(1) = (fib(1)+fib(0)) + 1 = (1+0)+1 = 2." },
          { q: "Qual é a complexidade de tempo da versão recursiva de Fibonacci?", opts: ["O(n)", "O(n²)", "O(2^n)", "O(log n)"], ans: 2, expl: "Cada chamada gera duas novas chamadas, resultando em crescimento exponencial O(2^n)." },
          { q: "Em uma recursão de fatorial(5), quantas chamadas recursivas são feitas até o caso-base?", opts: ["4", "5", "6", "1"], ans: 1, expl: "São chamadas fatorial(5), fatorial(4), fatorial(3), fatorial(2) e fatorial(1) — 5 chamadas ao todo (4 além da inicial até o caso-base)." },
          { q: "Se você modificar o passo recursivo para fatorial(n) retornar fatorial(n-1) sem multiplicar, o que acontece?", opts: ["Retorna o valor correto.", "Todas as chamadas retornam o caso-base (1), pois o valor n é descartado.", "Erro de compilação.", "Loop infinito."], ans: 1, expl: "Sem multiplicar por n, cada chamada apenas propaga o resultado do caso-base, retornando 1 sempre." }
        ]
      },
      {
        id: "c-matematica",
        title: "Funções matemáticas (math.h)",
        subtitle: "sqrt, pow, fabs, floor, ceil, log, log10 e o resto da divisão com %.",
        blocks: [
          { t: "h", h: "A biblioteca math.h" },
          { t: "p", p: "A linguagem C traz funções matemáticas prontas. Em C ANSI, é preciso incluir a biblioteca <math.h>. No depurador deste site elas já estão disponíveis, sem precisar do include." },
          { t: "lst", items: [
            "sqrt(n): calcula a raiz quadrada positiva de n.",
            "pow(n, y): calcula n elevado a y.",
            "exp(x): o número de Euler elevado a x.",
            "log(n): logaritmo natural (neperiano) de n.",
            "log10(n): logaritmo de n na base 10.",
            "fabs(n): valor absoluto (módulo) de n.",
            "trunc(n): parte inteira de um número fracionário.",
            "ceil(n): arredonda para o inteiro de cima.",
            "floor(n): arredonda para o inteiro de baixo."
          ]},
          { t: "h", h: "Exemplo: hipotenusa" },
          { t: "code", c: String.raw`#include <stdio.h>
int main() {
    float a, b, h;
    printf("Digite os catetos: ");
    scanf("%f %f", &a, &b);
    h = sqrt(a * a + b * b);
    printf("Hipotenusa: %.2f\n", h);
}` },
          { t: "h", h: "Potência e arredondamentos" },
          { t: "code", c: String.raw`#include <stdio.h>
int main() {
    printf("2 elevado a 10 = %d\n", (int)pow(2, 10));
    printf("fabs(-5.2) = %.1f\n", fabs(-5.2));
    printf("trunc(3.7) = %d\n", trunc(3.7));
    printf("floor(3.7) = %.1f | ceil(3.7) = %.1f\n", floor(3.7), ceil(3.7));
}` },
          { t: "note", p: "Essas funções devolvem double. Ao exibir com %d é comum converter com (int), como em (int)pow(2, 10), para evitar avisos." },
          { t: "h", h: "Resto da divisão (%)" },
          { t: "p", p: "O operador % devolve o resto da divisão entre inteiros: 13 % 4 é 1. É o equivalente do RESTO dos pseudocódigos, muito usado para testar paridade (n % 2 == 0)." },
          { t: "warn", p: "O % em C só vale para inteiros. Para números reais seria preciso fmod ou uma lógica própria; este material deixa o % para inteiros." }
        ],
        quiz: [
          { q: "Qual função calcula a raiz quadrada em C?", opts: ["pow", "sqrt", "raiz", "exp"], ans: 1, expl: "sqrt(n) calcula a raiz quadrada positiva de n." },
          { q: "(int)pow(2, 3) vale:", opts: ["6", "8", "9", "23"], ans: 1, expl: "2 elevado a 3 = 8." },
          { q: "O que devolve fabs(-7.5)?", opts: ["-7.5", "7.5", "0", "erro em tempo de execução"], ans: 1, expl: "fabs devolve o valor absoluto, sem o sinal." },
          { q: "floor(2.9) e ceil(2.1) são, respectivamente:", opts: ["2 e 2", "3 e 3", "2 e 3", "3 e 2"], ans: 2, expl: "floor arredonda para baixo (2.9 -> 2); ceil arredonda para cima (2.1 -> 3)." },
          { q: "O que devolve trunc(3.9)?", opts: ["3", "4", "3.9", "0"], ans: 0, expl: "trunc remove a parte fracionária: 3.9 vira 3." },
          { q: "Qual é o valor de log10(100)?", opts: ["2, pois 10² = 100.", "100.", "10.", "Erro de compilação."], ans: 0, expl: "log10 calcula o logaritmo na base 10: log10(100) = 2." },
          { q: "O que devolve pow(3, 2)?", opts: ["6", "9", "12", "23"], ans: 1, expl: "pow(x, y) eleva x à potência y: pow(3, 2) = 3² = 9." },
          { q: "Qual função arredonda um número para o inteiro seguinte (para cima)?", opts: ["floor", "ceil", "trunc", "fabs"], ans: 1, expl: "ceil(n) arredonda para cima: ceil(2.1) = 3." },
          { q: "Qual é o resultado de 13 % 4 em C?", opts: ["3", "1", "4", "3.25"], ans: 1, expl: "O operador % devolve o resto da divisão inteira: 13 % 4 = 1." },
          { q: "Qual função calcula o logaritmo natural (na base e)?", opts: ["log10", "log", "exp", "sqrt"], ans: 1, expl: "log(n) calcula o logaritmo neperiano (natural), na base do número de Euler (e)." }
        ]
      },
      {
        id: "c-formatacao",
        title: "Formatação com printf e scanf",
        subtitle: "Códigos de formato, precisão e leitura de linhas completas.",
        blocks: [
          { t: "h", h: "Códigos de formatação" },
          { t: "lst", items: [
            "%c: caractere simples.",
            "%d e %i: inteiro decimal com sinal.",
            "%e e %E: notação científica (e minúsculo / E maiúsculo).",
            "%f: ponto flutuante decimal.",
            "%g e %G: usa %e ou %f, o que for mais curto.",
            "%o: octal sem sinal.",
            "%s: cadeia de caracteres (string).",
            "%u: inteiro decimal sem sinal.",
            "%x e %X: hexadecimal sem sinal (minúsculas / maiúsculas).",
            "%%: escreve o símbolo de porcentagem.",
            "%.2f: fixa a precisão (duas casas decimais).",
            "%lf: espera um double (variante com l)."
          ]},
          { t: "h", h: "Exemplo: tipos na prática" },
          { t: "code", c: String.raw`#include <stdio.h>
int main() {
    char letra = 'a';
    int num = 567;
    float real = 789.564332;
    double xx = 8912.7815533613;
    printf("%c\n", letra);
    printf("%d\n", num);
    printf("%.2f e %.2lf\n", real, xx);
}` },
          { t: "h", h: "Lendo inteiros, reais, caracteres e texto" },
          { t: "code", c: String.raw`#include <stdio.h>
int main() {
    char nome[50];
    int idade;
    float peso;
    printf("Digite o nome completo: ");
    scanf(" %[^\n]", nome);
    printf("Digite a idade e o peso: ");
    scanf("%d %f", &idade, &peso);
    printf("Nome: %s\nIdade: %d\nPeso: %.1f\n", nome, idade, peso);
}` },
          { t: "note", p: "No scanf, variáveis simples vão com & (endereço, ex.: &idade). Já as strings, por serem vetores de char, são passadas SEM &: scanf(\"%s\", nome)." },
          { t: "p", p: "O formato \" %[^\\n]\" lê uma linha inteira (até a quebra de linha). O espaço ANTES do % limpa o buffer do teclado, descartando a quebra de linha de um scanf anterior." },
          { t: "warn", p: "Em C, 5 / 2 divide inteiros e trunca: dá 2, e não 2.5. Para obter decimal, use 5.0 / 2 ou variáveis float/double — o depurador do site segue esse comportamento." }
        ],
        quiz: [
          { q: "Qual código de formato imprime um número real com duas casas decimais?", opts: ["%d", "%.2f", "%c", "%s"], ans: 1, expl: "%.2f aplica precisão de duas casas a um float." },
          { q: "No scanf, por que as variáveis simples vão acompanhadas de &?", opts: ["Porque é obrigatório para funções com retorno.", "Para passar o endereço de memória onde o valor será escrito.", "Porque sem & o programa não compila com printf.", "Não é obrigatório."], ans: 1, expl: "scanf escreve no endereço da variável; o & entrega esse endereço." },
          { q: "Como ler uma linha inteira de texto (com espaços) em C?", opts: ["scanf(\"%d\", &x)", "scanf(\" %[^\\n]\", nome)", "printf(\"%s\", x)", "Nenhuma das anteriores."], ans: 1, expl: "O scanset %[^\\n] lê todos os caracteres até a quebra de linha." },
          { q: "5 / 2 em C com tipos inteiros devolve:", opts: ["2.5", "2", "3", "erro de compilação"], ans: 1, expl: "A divisão entre inteiros trunca: 5 / 2 = 2." },
          { q: "Para imprimir uma string com printf, usamos o código:", opts: ["%d", "%f", "%s", "%c"], ans: 2, expl: "%s é o código de formato para strings (cadeias de caracteres) no printf." },
          { q: "O que acontece se você usar printf(\"%d\", 3.14)?", opts: ["Imprime 3.14 corretamente.", "Imprime um valor lixo, pois %d espera um inteiro.", "Erro de compilação.", "Imprime 3."], ans: 1, expl: "%d interpreta os bytes como inteiro; passar um float gera comportamento imprevisível." },
          { q: "Qual código de formato é usado para exibir um caractere?", opts: ["%d", "%c", "%f", "%s"], ans: 1, expl: "%c é o código de formato para caracteres simples em C." },
          { q: "O que significa o modificador l em %lf?", opts: ["Que o número é long.", "Que se trata de um double (variante com l).", "Que o número é pequeno.", "Que é um caractere."], ans: 1, expl: "%lf é usado para ler/exibir variáveis do tipo double (o l indica long)." },
          { q: "Como exibir o símbolo de percentual % usando printf?", opts: ["printf(\"%\")", "printf(\"%%\")", "printf(\"\\\\%\")", "printf(\"%p\")"], ans: 1, expl: "Para exibir um % textual, é preciso escrever %% no printf." },
          { q: "No comando scanf(\" %[^\\n]\", nome), para que serve o espaço antes de %[^\\n]?", opts: ["Para não ler nada.", "Para limpar o buffer do teclado, descartando a quebra de linha.", "Para imprimir um espaço.", "Não tem utilidade."], ans: 1, expl: "O espaço consome a quebra de linha residual de um scanf anterior, permitindo ler a linha completa." }
        ]
      },
      {
        id: "c-produto-matrizes",
        title: "Produto de matrizes",
        subtitle: "Multiplicar A (m x n) por B (n x p) com laços aninhados.",
        blocks: [
          { t: "h", h: "O problema" },
          { t: "p", p: "Dadas duas matrizes A (m x n) e B (n x p), o produto C = A x B é uma matriz m x p, onde cada elemento C[i][k] é a soma de A[i][j] * B[j][k] para todos os j." },
          { t: "p", p: "O número de colunas de A precisa ser igual ao número de linhas de B. Neste exemplo: A é 3x2, B é 2x3, e o resultado C é 3x3." },
          { t: "h", h: "Solução em C" },
          { t: "code", c: String.raw`#include <stdio.h>
int main() {
    int A[3][2], B[2][3], C[3][3];
    int i, j, k;
    printf("Digite A (3x2):\n");
    for (i = 0; i < 3; i++)
        for (j = 0; j < 2; j++)
            scanf("%d", &A[i][j]);
    printf("Digite B (2x3):\n");
    for (i = 0; i < 2; i++)
        for (j = 0; j < 3; j++)
            scanf("%d", &B[i][j]);
    for (i = 0; i < 3; i++)
        for (k = 0; k < 3; k++) {
            C[i][k] = 0;
            for (j = 0; j < 2; j++)
                C[i][k] += A[i][j] * B[j][k];
        }
    printf("Produto C:\n");
    for (i = 0; i < 3; i++) {
        for (j = 0; j < 3; j++)
            printf("%d ", C[i][j]);
        printf("\n");
    }
}` },
          { t: "note", p: "Cada C[i][k] começa em 0 e vai acumulando os produtos. O encadeamento (i, k, j) percorre linha de A, coluna de B e, no laço mais interno, a soma dos produtos." },
          { t: "warn", p: "No interpretador do site, declare a matriz e preencha elemento a elemento (como acima). Inicialização entre chaves, como int M[2][3] = {{1,2,3},{4,5,6}}, ainda não é suportada." },
          { t: "h", h: "Matrizes tridimensionais" },
          { t: "p", p: "C também permite mais dimensões: int LIVRO[4][3][3] cria 4 x 3 x 3 = 36 elementos, acessados por três índices (linha, coluna e página)." }
        ],
        quiz: [
          { q: "O que torna válido o produto A x B?", opts: ["as duas serem quadradas", "o número de colunas de A igualar o de linhas de B", "as duas terem o mesmo tamanho", "A ser uma matriz identidade"], ans: 1, expl: "A é m x n e B é n x p: o número de colunas de A deve igualar o de linhas de B." },
          { q: "Por que C[i][k] = 0 dentro do laço?", opts: ["para não carregar lixo do cálculo anterior", "para tornar o laço mais rápido", "para evitar soma dobrada", "para contar repetições"], ans: 0, expl: "Zera a célula antes de acumular os produtos sobre todos os j." },
          { q: "int LIVRO[4][3][3] armazena quantos elementos?", opts: ["9", "12", "36", "33"], ans: 2, expl: "4 x 3 x 3 = 36." },
          { q: "Para percorrer uma matriz 3x3 em C, quantos laços aninhados são necessários?", opts: ["um", "dois", "três", "nenhum"], ans: 1, expl: "Uma dimensão por laço: um para linhas e outro para colunas." },
          { q: "No produto de matrizes, por que precisamos de três laços aninhados?", opts: ["Um para cada dimensão: linhas de A, colunas de B e a soma dos produtos.", "Porque matrizes sempre precisam de 3 laços.", "Para ler os dados de entrada.", "Para imprimir o resultado."], ans: 0, expl: "O laço mais interno calcula a soma dos produtos A[i][j]*B[j][k] para cada par (i, k) da matriz resultado." },
          { q: "Se A é uma matriz 2x3 e B é uma matriz 3x4, qual é a dimensão de C = A x B?", opts: ["2x3", "3x4", "2x4", "3x3"], ans: 2, expl: "C herda as linhas de A (2) e as colunas de B (4), resultando em 2x4." },
          { q: "Na multiplicação C[i][k] += A[i][j] * B[j][k], o índice j percorre:", opts: ["As linhas de C.", "A dimensão comum: colunas de A e linhas de B.", "As colunas de C.", "As linhas de B."], ans: 1, expl: "j percorre o número de colunas de A, que deve ser igual ao número de linhas de B." },
          { q: "Por que não é possível multiplicar uma matriz 2x3 por outra 2x3?", opts: ["Porque são iguais.", "Porque o número de colunas de A (3) não é igual ao número de linhas de B (2).", "Porque são muito pequenas.", "É possível."], ans: 1, expl: "Para multiplicar, o número de colunas de A deve igualar o número de linhas de B. 3 ≠ 2, logo não é possível." },
          { q: "Em uma multiplicação de matrizes, quantos loops aninhados são necessários para A (m x n) por B (n x p)?", opts: ["1", "2", "3", "4"], ans: 2, expl: "São três loops: um para as linhas de A (i), um para as colunas de B (k) e um interno para os produtos (j)." },
          { q: "Qual é o elemento C[0][0] ao multiplicar A = [[1,2],[3,4]] por B = [[5,6],[7,8]]?", opts: ["5", "19", "11", "21"], ans: 1, expl: "C[0][0] = A[0][0]*B[0][0] + A[0][1]*B[1][0] = 1*5 + 2*7 = 5 + 14 = 19." }
        ]
      },
      {
        id: "c-ordenacao",
        title: "Ordenação de vetores",
        subtitle: "BubbleSort e InsertSort: colocando os dados em ordem.",
        blocks: [
          { t: "h", h: "Por que ordenar?" },
          { t: "p", p: "Ordenar é rearranjar os elementos de um vetor em ordem crescente (ou decrescente). Facilita muito a busca e a recuperação de itens. Entre os métodos estudados estão o BubbleSort (método da bolha) e o InsertSort (inserção direta)." },
          { t: "h", h: "BubbleSort (método da bolha)" },
          { t: "p", p: "A ideia é percorrer o vetor várias vezes, fazendo 'flutuar' o maior elemento até o fim a cada passagem (ou o menor para o início, conforme a ordem). É o método mais simples de implementar, porém o menos eficiente — não é recomendado para vetores grandes." },
          { t: "code", c: String.raw`#include <stdio.h>

void bubble_sort(int v[], int n) {
    int k, j, aux;
    for (k = n - 1; k > 0; k--) {
        for (j = 0; j < k; j++) {
            if (v[j] > v[j + 1]) {
                aux = v[j];
                v[j] = v[j + 1];
                v[j + 1] = aux;
            }
        }
    }
}

int main() {
    int v[5] = {5, 2, 4, 1, 3};
    int i;
    bubble_sort(v, 5);
    for (i = 0; i < 5; i++)
        printf("%d ", v[i]);
    printf("\n");
    return 0;
}` },
          { t: "h", h: "InsertSort (inserção direta)" },
          { t: "p", p: "A cada passo, a partir do segundo elemento, o elemento 'eleito' é apanhado e inserido na sua posição correta dentro da parte já ordenada do vetor, deslocando os maiores para a direita. Assemelha-se a como um jogador organiza as cartas na mão. É eficiente em vetores com poucos elementos." },
          { t: "code", c: String.raw`#include <stdio.h>

void insertion_sort(int v[], int n) {
    int i, j, eleito;
    for (i = 1; i < n; i++) {
        eleito = v[i];
        j = i - 1;
        while (j >= 0 && eleito < v[j]) {
            v[j + 1] = v[j];
            j = j - 1;
        }
        v[j + 1] = eleito;
    }
}

int main() {
    int v[5] = {5, 2, 4, 1, 3};
    int i;
    insertion_sort(v, 5);
    for (i = 0; i < 5; i++)
        printf("%d ", v[i]);
    printf("\n");
    return 0;
}` },
          { t: "note", p: "No interpretador do site, declare e preencha o vetor elemento a elemento (não use as chaves de inicialização usadas acima por clareza; o depurador exige preenchimento manual). A lógica de ordenação em si continua a mesma." },
          { t: "warn", p: "O BubbleSort faz muitas trocas e tem complexidade O(n²). Para vetores grandes, prefira métodos mais rápidos como o QuickSort — mas para a disciplina, o BubbleSort e o InsertSort são os estudados." }
        ],
        quiz: [
          { q: "No BubbleSort, o que acontece com o maior elemento a cada passagem?", opts: ["Permanece no início.", "Flutua até a sua posição correta (o fim, em ordem crescente).", "É removido do vetor.", "Nada muda."], ans: 1, expl: "A cada passagem o maior elemento 'sobe' até sua posição final, reduzindo a área ainda não ordenada." },
          { q: "Qual é a principal desvantagem do BubbleSort?", opts: ["É o mais lento e não indicado para vetores grandes.", "Não ordena vetores de inteiros.", "Exige muito mais memória.", "Não funciona em C."], ans: 0, expl: "O BubbleSort é simples, porém pouco eficiente (O(n²)), não sendo recomendado para muitos elementos." },
          { q: "No InsertSort, o elemento 'eleito' é:", opts: ["O primeiro elemento do vetor.", "O elemento atual sendo inserido na posição correta.", "O maior elemento sempre.", "O último elemento."], ans: 1, expl: "A cada iteração o elemento atual (eleito) é deslocado até sua posição correta na parte ordenada." },
          { q: "No InsertSort, os elementos maiores que o eleito são:", opts: ["Eliminados.", "Deslocados uma posição para a direita.", "Mantidos fixos.", "Movidos para outro vetor."], ans: 1, expl: "O laço interno desloca para a direita os elementos maiores que o eleito para abrir espaço." },
          { q: "Qual método lembra a forma como um jogador ordena cartas na mão?", opts: ["BubbleSort", "InsertSort", "QuickSort", "Busca binária"], ans: 1, expl: "O InsertSort insere cada nova carta (elemento) na posição correta, como quem organiza cartas na mão." },
          { q: "Depois de ordenar o vetor {5, 2, 4, 1, 3} em ordem crescente, obtemos:", opts: ["{5, 4, 3, 2, 1}", "{1, 2, 3, 4, 5}", "{2, 1, 5, 3, 4}", "{3, 1, 4, 2, 5}"], ans: 1, expl: "Em ordem crescente, os elementos ficam do menor para o maior: 1, 2, 3, 4, 5." },
          { q: "Qual é a complexidade de tempo no pior caso do BubbleSort?", opts: ["O(n)", "O(n²)", "O(log n)", "O(1)"], ans: 1, expl: "O BubbleSort tem complexidade O(n²), pois usa dois laços aninhados." },
          { q: "No InsertSort, o laço interno tem o objetivo de:", opts: ["Percorrer o vetor inteiro.", "Deslocar elementos maiores que o eleito para abrir espaço.", "Ordenar de forma binária.", "Contar elementos."], ans: 1, expl: "O eleito encontra seu lugar deslocando para a direita os elementos maiores que ele." },
          { q: "Para que serve a variável aux no BubbleSort?", opts: ["Para armazenar um valor temporariamente durante uma troca.", "Para contar iterações.", "Para armazenar o menor elemento.", "Para controlar o fim."], ans: 0, expl: "aux guarda temporariamente um valor para que a troca entre v[j] e v[j+1] seja feita sem perda de dados." },
          { q: "Qual desses métodos é o mais eficiente para vetores muito grandes?", opts: ["BubbleSort", "InsertSort", "Apenas QuickSort (métodos O(n²) não são recomendados)", "Qualquer um deles"], ans: 2, expl: "Para vetores grandes, métodos O(n²) como Bubble e Insert são lentos; QuickSort (divide e conquista) é preferível." }
        ]
      },
      {
        id: "c-busca",
        title: "Busca em vetores",
        subtitle: "Pesquisa sequencial e binária, e quando usar cada uma.",
        blocks: [
          { t: "h", h: "Pesquisa sequencial (linear)" },
          { t: "p", p: "A pesquisa sequencial percorre o vetor elemento a elemento até encontrar o valor procurado ou chegar ao fim. Não exige que o vetor esteja ordenado. É simples, porém lenta em vetores grandes." },
          { t: "code", c: String.raw`#include <stdio.h>

int busca_sequencial(int v[], int n, int num) {
    int i;
    for (i = 0; i < n; i++)
        if (v[i] == num) return 1;
    return 0;
}

int main() {
    int v[6] = {54, 12, 15, 48, 58, 17};
    printf("%d\n", busca_sequencial(v, 6, 48));
    return 0;
}` },
          { t: "h", h: "Pesquisa binária" },
          { t: "p", p: "A pesquisa binária exige um vetor PREVIAMENTE ORDENADO. A cada passo, comparamos o valor procurado com o elemento do meio: se for menor, procuramos na metade esquerda; se maior, na metade direita. Funciona como procurar em um dicionário." },
          { t: "code", c: String.raw`#include <stdio.h>

int busca_binaria(int v[], int n, int num) {
    int alto = n - 1, baixo = 0, meio;
    while (baixo <= alto) {
        meio = (baixo + alto) / 2;
        if (num == v[meio]) return 1;
        else if (num < v[meio]) alto = meio - 1;
        else baixo = meio + 1;
    }
    return 0;
}

int main() {
    int v[10] = {20, 35, 46, 48, 58, 68, 71, 74, 87, 98};
    printf("%d\n", busca_binaria(v, 10, 71));
    return 0;
}` },
          { t: "note", p: "Se o vetor não estiver ordenado, a busca binária falha ou dá resultado errado. Por isso ela é sempre usada junto com uma ordenação prévia." },
          { t: "warn", p: "A busca binária divide a busca ao meio a cada passo, o que a torna muito mais rápida que a sequencial em vetores grandes — desde que o vetor esteja ordenado." }
        ],
        quiz: [
          { q: "Qual é o pré-requisito para usar a pesquisa binária?", opts: ["O vetor estar ordenado.", "O vetor ter no máximo 10 elementos.", "O vetor ser de caracteres.", "Nenhum."], ans: 0, expl: "A pesquisa binária só funciona corretamente em vetores previamente ordenados." },
          { q: "A pesquisa sequencial é adequada quando:", opts: ["O vetor está ordenado e é grande.", "Não há garantia de ordenação ou o vetor é pequeno.", "O vetor é um número enorme.", "Somente com ponteiros."], ans: 1, expl: "A sequencial não exige ordenação, por isso serve para vetores desordenados ou pequenos." },
          { q: "Na busca binária, a cada passo você:", opts: ["Percorre o vetor inteiro.", "Descarta metade do intervalo.", "Retira dois elementos.", "Embaralha o vetor."], ans: 1, expl: "Comparando com o elemento do meio, descarta-se metade do intervalo a cada iteração." },
          { q: "No vetor {20, 35, 46, 48, 58}, qual é o primeiro elemento comparado ao procurar 35?", opts: ["20", "46", "35", "58"], ans: 1, expl: "O meio é 46 (índice 2). Como 35 < 46, a busca continua na metade esquerda {20, 35}." },
          { q: "A busca sequencial, no pior caso, percorre:", opts: ["Metade do vetor.", "O vetor inteiro.", "O primeiro elemento apenas.", "O último elemento apenas."], ans: 1, expl: "Se o valor está no fim (ou não existe), a sequencial precisa percorrer todos os elementos." },
          { q: "Por que a busca binária é mais rápida que a sequencial?", opts: ["Porque usa ponteiros.", "Porque elimina metade das opções a cada comparação.", "Porque o vetor é menor.", "Na verdade é mais lenta."], ans: 1, expl: "Ao comparar com o meio e descartar metade a cada passo, o número de comparações cresce muito mais devagar." },
          { q: "Qual é o passo inicial da busca binária?", opts: ["Comparar o valor com o primeiro elemento.", "Comparar o valor com o elemento do meio do vetor.", "Ordenar o vetor novamente.", "Comparar com o último elemento."], ans: 1, expl: "A busca binária começa comparando com o elemento central para decidir em qual metade continuar." },
          { q: "Qual é a complexidade de tempo da busca binária?", opts: ["O(n)", "O(n²)", "O(log n)", "O(1)"], ans: 2, expl: "A cada passo a busca binária descarta metade do intervalo, resultando em O(log n)." },
          { q: "No vetor {10, 20, 30, 40, 50}, ao buscar 45, qual é o primeiro meio?", opts: ["20", "30", "40", "50"], ans: 1, expl: "O meio (índice 2) é 30. Como 45 > 30, a busca continua na metade direita {40, 50}." },
          { q: "Qual é a principal desvantagem da busca sequencial?", opts: ["Não funciona em C.", "É muito lenta em vetores grandes, pois percorre todos os elementos no pior caso.", "Requer vetor ordenado.", "Não pode buscar valores negativos."], ans: 1, expl: "No pior caso, a busca sequencial examina todos os elementos, tornando-se lenta em vetores grandes." }
        ]
      },
      {
        id: "c-matrizes-especiais",
        title: "Matrizes especiais",
        subtitle: "Quadrada, diagonal, identidade, triangular, transposta, simétrica e antissimétrica.",
        blocks: [
          { t: "h", h: "Matriz quadrada" },
          { t: "p", p: "Uma matriz é quadrada quando o número de linhas é igual ao número de colunas. Ex.: uma matriz 4x4 é de ordem 4." },
          { t: "h", h: "Diagonal, identidade e triangular" },
          { t: "lst", items: [
            "Diagonal: apenas os elementos da diagonal principal (ou secundária) são diferentes de zero.",
            "Identidade: matriz diagonal em que os elementos da diagonal principal valem 1 e os demais, 0.",
            "Triangular: elementos de um lado da diagonal são todos zero (triangular superior ou inferior)."
          ]},
          { t: "code", c: String.raw`#include <stdio.h>

int main() {
    int m[3][3];
    int L, C;
    for (L = 0; L < 3; L++)
        for (C = 0; C < 3; C++) {
            if (L == C) m[L][C] = 1;
            else m[L][C] = 0;
        }

    for (L = 0; L < 3; L++) {
        for (C = 0; C < 3; C++)
            printf("%d ", m[L][C]);
        printf("\n");
    }
    return 0;
}` },
          { t: "h", h: "Transposta, simétrica e antissimétrica" },
          { t: "p", p: "A transposta de A é a matriz AT obtida trocando linhas por colunas: AT[i][j] = A[j][i]. Uma matriz é simétrica quando é igual à sua transposta (M[i][j] = M[j][i]). É antissimétrica quando é igual à transposta com o sinal invertido (M[i][j] = -M[j][i])." },
          { t: "h", h: "Diagonal principal e secundária em C" },
          { t: "p", p: "Em uma matriz n×n, a diagonal principal usa m[i][i] (linha == coluna). A diagonal secundária usa a condição i + j == n - 1 (pois os índices começam em 0)." },
          { t: "note", p: "No interpretador do site, construa as matrizes elemento a elemento com laços aninhados e use if/else em vez do operador ternário ?: (não suportado). Use um primeiro laço for zerar a matriz e depois preencha as diagonais conforme a regra." },
          { t: "warn", p: "Confunde-se facilmente: na diagonal principal m[i][i]; na secundária i + j = n - 1 (cuidado com a base 0!). Memorize as duas condições." }
        ],
        quiz: [
          { q: "Quando uma matriz é dita quadrada?", opts: ["Quando tem 4 linhas.", "Quando o número de linhas é igual ao de colunas.", "Quando todos os elementos são a soma.", "Quando é 3x3 apenas."], ans: 1, expl: "Quadrada: o número de linhas é igual ao número de colunas." },
          { q: "Na matriz identidade, os elementos da diagonal principal valem:", opts: ["0", "1", "O valor lido", "Sua coluna"], ans: 1, expl: "A identidade tem 1 na diagonal principal e 0 no restante." },
          { q: "Em C, a condição para um elemento estar na diagonal secundária de uma matriz n×n é:", opts: ["i == j", "i + j == n - 1", "i + j == n", "i - j == n"], ans: 1, expl: "Como os índices começam em 0, a diagonal secundária satisfaz i + j = n - 1." },
          { q: "A transposta de uma matriz é obtida:", opts: ["Invertendo os sinais.", "Trocando linhas por colunas (AT[i][j] = A[j][i]).", "Somando a diagonal.", "Zeroando a principal."], ans: 1, expl: "A transposta troca linhas por colunas: AT[i][j] = A[j][i]." },
          { q: "Uma matriz é simétrica quando:", opts: ["É igual à sua transposta.", "É igual ao negativo da transposta.", "Tem diagonal zero.", "É quadrada sempre."], ans: 0, expl: "Simétrica: M[i][j] = M[j][i], ou seja, é igual à própria transposta." },
          { q: "Uma matriz é antissimétrica quando:", opts: ["M[i][j] = M[j][i]", "M[i][j] = -M[j][i]", "Só possui zeros.", "É a matriz identidade."], ans: 1, expl: "Antissimétrica: é igual à transposta com o sinal invertido, ou seja, M[i][j] = -M[j][i]." },
          { q: "A matriz identidade 3x3 possui quantos elementos iguais a 1?", opts: ["9", "3", "6", "1"], ans: 1, expl: "A identidade tem 1 apenas na diagonal principal: m[0][0], m[1][1] e m[2][2] — 3 elementos." },
          { q: "Em uma matriz quadrada, quais elementos são iguais a m[i][i]?", opts: ["Os da diagonal secundária.", "Os da diagonal principal.", "Todos os elementos.", "Somente os zeros."], ans: 1, expl: "m[i][i], com linha igual à coluna, define a diagonal principal." },
          { q: "Uma matriz é triangular quando:", opts: ["Todos os elementos são iguais.", "Um dos lados da diagonal é todo zero.", "É necessariamente identidade.", "Tem 2 linhas."], ans: 1, expl: "Triangular: os elementos de um lado da diagonal principal (acima ou abaixo) são todos zero." },
          { q: "Qual é a relação entre a matriz identidade e a matriz diagonal?", opts: ["Não há relação.", "A identidade é um caso especial de matriz diagonal, com 1s na diagonal.", "A diagonal é um caso da identidade.", "São a mesma coisa."], ans: 1, expl: "A identidade é uma matriz diagonal cujos elementos da diagonal principal valem 1." }
        ]
      },
      {
        id: "c-modularizacao",
        title: "Modularização",
        subtitle: "Sub-rotinas e funções: dividindo o problema em módulos, parâmetros formais e atuais.",
        blocks: [
          { t: "h", h: "Programação modularizada" },
          { t: "p", p: "Problemas grandes podem ser divididos em problemas menores. Cada módulo é um grupo de comandos com uma função bem definida e o mais independente possível. O módulo principal é onde a execução começa e chama os demais módulos." },
          { t: "h", h: "Sub-rotina vs. função" },
          { t: "lst", items: [
            "Sub-rotina: trecho declarado uma única vez e chamado várias vezes; executa comandos (não devolve valor). Corresponde em C a uma função void.",
            "Função: retorna obrigatoriamente um valor a cada chamada; pode ser usada dentro de expressões, como se fosse uma variável."
          ]},
          { t: "h", h: "Parâmetros formais e atuais" },
          { t: "p", p: "Os parâmetros formais são os nomes declarados no cabeçalho do módulo (usados dentro dele). Os parâmetros atuais (argumentos) são os valores passados na chamada e podem ser constantes, variáveis ou expressões. Devem concordar em número, ordem e tipo." },
          { t: "code", c: String.raw`#include <stdio.h>

/* função com parâmetro formal N, devolve N*N */
int quadrado(int N) {
    return N * N;
}

int main() {
    int X = 4;
    printf("%d\n", quadrado(X)); /* X é o parâmetro atual */
    printf("%d\n", quadrado(7)); /* 7 é constante (parâmetro atual) */
    return 0;
}` },
          { t: "h", h: "Sub-rotina (função void)" },
          { t: "p", p: "Uma sub-rotina não devolve valor. Em C, usamos funções com retorno void para representá-la." },
          { t: "code", c: String.raw`#include <stdio.h>

/* sub-rotina: mostra o quadrado, sem retornar valor */
void mostra_quadrado(int N) {
    int Q = N * N;
    printf("O quadrado é: %d\n", Q);
}

int main() {
    mostra_quadrado(4);
    mostra_quadrado(9);
    return 0;
}` },
          { t: "h", h: "Objetos globais e locais" },
          { t: "p", p: "Objetos locais existem apenas dentro do módulo em que foram declarados e são criados/liberados na entrada/saída do módulo. Objetos globais podem ser usados em qualquer módulo. O uso de objetos locais reduz os 'efeitos colaterais' entre módulos." },
          { t: "note", p: "Em C, uma variável declarada fora de qualquer função é global; declarada dentro de uma função é local. As locais são criadas a cada chamada e destruídas ao retornar." },
          { t: "warn", p: "Os parâmetros atuais e formais devem concordar em número, ordem e tipo. Passar um número errado de argumentos é um erro clássico de modularização." }
        ],
        quiz: [
          { q: "A diferença principal entre sub-rotina e função é:", opts: ["A função retorna um valor; a sub-rotina não.", "A sub-rotina é mais rápida.", "A função não pode ter parâmetros.", "Não há diferença."], ans: 0, expl: "Uma função devolve um valor a cada chamada; uma sub-rotina apenas executa comandos (em C, função void)." },
          { q: "Na chamada QUADRADO(X), o termo X é:", opts: ["Parâmetro formal.", "Parâmetro atual (argumento).", "Uma constante.", "A função."], ans: 1, expl: "Os valores passados na chamada são os parâmetros atuais; X aqui é uma variável usada como argumento." },
          { q: "Os parâmetros formais são:", opts: ["Os valores passados na chamada.", "Os nomes declarados no cabeçalho do módulo.", "Variáveis globais.", "Constantes."], ans: 1, expl: "Parâmetros formais são os nomes simbólicos do cabeçalho do módulo, usados dentro dele." },
          { q: "Em C, uma sub-rotina corresponde a:", opts: ["Uma função com retorno int.", "Uma função com retorno void.", "Um ponteiro.", "Um vetor."], ans: 1, expl: "Como não devolve valor, a sub-rotina equivale a uma função void." },
          { q: "Uma variável declarada dentro de uma função em C é:", opts: ["Global.", "Local.", "Estática sempre.", "Um parâmetro formal."], ans: 1, expl: "Declarada dentro de uma função, a variável é local: existe apenas durante aquela chamada." },
          { q: "Por que usar objetos locais ajuda na programação modularizada?", opts: ["Deixam o programa maior.", "Reduzem efeitos colaterais entre módulos.", "São sempre globais.", "Eliminam as funções."], ans: 1, expl: "Objetos locais não interferem em outros módulos, minimizando efeitos colaterais." },
          { q: "Na função int quadrado(int N), o identificador N é:", opts: ["Um parâmetro atual.", "Um parâmetro formal.", "Uma variável global.", "Uma constante."], ans: 1, expl: "N aparece no cabeçalho da função, sendo um parâmetro formal usado dentro dela." },
          { q: "Quantos valores uma função em C pode retornar com um único return?", opts: ["Nenhum.", "Um único valor.", "Dois.", "Quantos quiser."], ans: 1, expl: "O comando return devolve um único valor; para múltiplos valores é preciso usar ponteiros ou estruturas." },
          { q: "Se a chamada da função quadrado(7), qual é o parâmetro atual?", opts: ["N", "7 (constante)", "quadrado", "int"], ans: 1, expl: "O valor 7 passado na chamada é um parâmetro atual (argumento constante)." },
          { q: "Uma variável global em C é declarada:", opts: ["Dentro de uma função.", "Fora de qualquer função.", "Apenas no main.", "No cabeçalho da função."], ans: 1, expl: "Declarada fora de toda função, a variável passa a ser global, acessível em qualquer módulo." }
        ]
      }
    ]
  },
  ...(window.COURSES || {})
};

/* ----------------------------------------------------------------
 * Estado e persistência (local + nuvem via Supabase)
 * ---------------------------------------------------------------- */
const PROGRESS_KEY = "estudarC_progress";
const S = window.supabaseSync;

const state = {
  course: "home",
  topic: null
};
let prevCourse = "home";

function loadProgress() {
  // Fonte de verdade: espelho em memória do supabaseSync (local quando sem conta)
  return S && S.getAnswers ? S.getAnswers() : (tryParseJSON(localStorage.getItem(PROGRESS_KEY)) || {});
}

function tryParseJSON(str) {
  try { return JSON.parse(str); } catch (e) { return null; }
}

function qkey(course, topicId, qi) {
  return course + "/" + topicId + "/q" + qi;
}

function saveAnswer(course, topicId, qi, picked, correct) {
  if (S && S.setAnswer) S.setAnswer(qkey(course, topicId, qi), { picked: picked, correct: correct });
  else {
    const p = tryParseJSON(localStorage.getItem(PROGRESS_KEY)) || {};
    p[qkey(course, topicId, qi)] = { picked: picked, correct: correct };
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(p));
  }
}

function removeAnswer(course, topicId, qi) {
  if (S && S.removeAnswer) S.removeAnswer(qkey(course, topicId, qi));
  else {
    const p = tryParseJSON(localStorage.getItem(PROGRESS_KEY)) || {};
    delete p[qkey(course, topicId, qi)];
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(p));
  }
}

function resetProgress() {
  // Com Supabase, o reset completo é feito por S.resetAll() (inclusive nuvem).
  // Aqui apenas o fallback local.
  localStorage.removeItem(PROGRESS_KEY);
}

function allDone(course, topicId) {
  const p = loadProgress();
  const topic = DATA[course].topics.find(function (t) { return t.id === topicId; });
  return topic.quiz.every(function (_, qi) {
    const s = p[qkey(course, topicId, qi)];
    return s && s.correct === true;
  });
}

function courseStats(course) {
  const p = loadProgress();
  let total = 0, correct = 0;
  DATA[course].topics.forEach(function (t) {
    t.quiz.forEach(function (_, qi) {
      total++;
      const s = p[qkey(course, t.id, qi)];
      if (s && s.correct === true) correct++;
    });
  });
  return { total: total, correct: correct, pct: total ? Math.round((correct / total) * 100) : 0 };
}

function findTopic(id) {
  for (const key in DATA) {
    const t = DATA[key].topics.find(function (x) { return x.id === id; });
    if (t) return t;
  }
  return null;
}

/* ----------------------------------------------------------------
 * Destaque de código (multi-linguagem)
 * ---------------------------------------------------------------- */
function escapeHtml(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

const K_DEFAULT = "if|else|for|while|do|return|break|continue|switch|case|default|int|float|double|char|void|long|short|unsigned|struct|typedef|enum|const|static|include|define|sizeof|ALGORITMO|FUNCAO|PROCEDIMENTO|VAR|INICIO|FIM|ESCREVER|LER|SE|ENTAO|SENAO|FIMSE|PARA|ATE|FACA|FIMPARA|ENQUANTO|FIMENQUANTO|REPITA|RETORNAR|VERDADEIRO|FALSO|NAO|MOD|mod|E|OU|DE|algoritmo|declare|leia|escreva|então|senão|não|faça|passo|caso|igual|função|sub-rotina|início|fim|numérico|lógico|literal|verdadeiro|falso|enquanto|repita|até|para|e|ou|módulo";

const HL_TOKENS = {
  default: [
    { src: "/\\*[\\s\\S]*?\\*\\/|\\/\\/[^\\n]*|\\{[^\\n}]*\\}", cls: "cmt" },
    { src: "\\\"(?:[^\\\"\\\\\\n]|\\\\.)*\\\"|'(?:[^'\\\\\\n]|\\\\.)*'", cls: "str" },
    { src: "\\b\\d+(?:\\.\\d+)?\\b", cls: "num" },
    { src: "\\b(?:" + K_DEFAULT + ")\\b", cls: "kw" },
    { src: "[A-Za-z_]\\w*(?=\\()", cls: "fn" }
  ],
  python: [
    { src: "#[^\\n]*", cls: "cmt" },
    { src: "\\\"\\\"\\\"[\\s\\S]*?\\\"\\\"\\\"|'''[\\s\\S]*?'''", cls: "str" },
    { src: "\\\"(?:[^\\\"\\\\\\n]|\\\\.)*\\\"|'(?:[^'\\\\\\n]|\\\\.)*'", cls: "str" },
    { src: "\\b\\d+(?:\\.\\d+)?\\b", cls: "num" },
    { src: "\\b(?:def|return|import|from|if|elif|else|for|while|in|not|and|or|is|break|continue|pass|print|len|range|input|int|float|str|bool|list|dict|set|tuple|True|False|None|class|global|lambda|try|except|finally|with|as|yield|self|assert|del)\\b", cls: "kw" },
    { src: "[A-Za-z_]\\w*(?=\\()", cls: "fn" }
  ],
  js: [
    { src: "/\\*[\\s\\S]*?\\*\\/|\\/\\/[^\\n]*", cls: "cmt" },
    { src: "\\\"(?:[^\\\"\\\\\\n]|\\\\.)*\\\"|'(?:[^'\\\\\\n]|\\\\.)*'", cls: "str" },
    { src: "\\b\\d+(?:\\.\\d+)?\\b", cls: "num" },
    { src: "\\b(?:const|let|var|function|return|if|else|for|while|do|switch|case|break|continue|console|document|window|typeof|new|this|class|try|catch|finally|import|export|default|async|await|null|undefined|true|false)\\b", cls: "kw" },
    { src: "[A-Za-z_]\\w*(?=\\()", cls: "fn" }
  ],
  html: [
    { src: "&lt;!--[\\s\\S]*?--&gt;", cls: "cmt" },
    { src: "&lt;\\/?[a-zA-Z][^&]*?&gt;", cls: "tag" },
    { src: "\\\"(?:[^\\\"\\\\\\n]|\\\\.)*\\\"", cls: "str" },
    { src: "\\b\\d+(?:\\.\\d+)?\\b", cls: "num" }
  ],
  css: [
    { src: "/\\*[\\s\\S]*?\\*\\/", cls: "cmt" },
    { src: "\\\"(?:[^\\\"\\\\\\n]|\\\\.)*\\\"", cls: "str" },
    { src: "#[\\da-fA-F]{3,8}|-?\\d+\\.?\\d*(?:px|rem|em|%|vh|vw|s|ms|fr|pt|deg)?", cls: "num" },
    { src: "[a-zA-Z-]+(?=\\s*:)", cls: "fn" }
  ]
};

function highlight(code, lang) {
  const tokens = HL_TOKENS[lang] || HL_TOKENS.default;
  const re = new RegExp(tokens.map(function (g) { return "(" + g.src + ")"; }).join("|"), "g");
  return escapeHtml(code).replace(re, function (m) {
    for (let i = 0; i < tokens.length; i++) {
      if (arguments[i + 1] !== undefined) {
        return '<span class="' + tokens[i].cls + '">' + m + "</span>";
      }
    }
    return m;
  });
}

/* ----------------------------------------------------------------
 * Renderização
 * ---------------------------------------------------------------- */
function renderAll() {
  const leavingHome = state.course !== "home" && prevCourse === "home";
  prevCourse = state.course;
  renderTabs();
  renderSidebar();
  renderContent();
  syncSidebar();
  if (state.course === "home" || leavingHome) setSidebarOpen(false);
}

function setSidebarOpen(open) {
  const s = document.getElementById("sidebar");
  const b = document.getElementById("sideBackdrop");
  const layout = document.getElementById("layout");
  if (s) s.classList.toggle("open", !!open);
  if (b) b.classList.toggle("show", !!open);
  if (layout) layout.classList.toggle("drawer-open", !!open);
}

function toggleSidebar() {
  const s = document.getElementById("sidebar");
  setSidebarOpen(s && !s.classList.contains("open"));
}

function syncSidebar() {
  const layout = document.getElementById("layout");
  const tab = document.getElementById("sideTab");
  const topbar = document.getElementById("topbar");
  const inCourse = state.course !== "home";
  if (layout) layout.classList.toggle("course-mode", inCourse);
  if (topbar) topbar.style.display = inCourse ? "none" : "";
  if (inCourse) tab.style.display = "flex";
  else tab.style.display = "none";
  placeHeader();
  updateMobileStreak();
}

let drawerHead = null;

function ensureDrawerHead() {
  if (drawerHead) return drawerHead;
  drawerHead = document.createElement("div");
  drawerHead.className = "drawer-head";
  drawerHead.innerHTML = '<button class="btn drawer-home" type="button">' + window.EstudarIcon("arrow-left") + ' Início</button>';
  drawerHead.querySelector(".drawer-home").addEventListener("click", function () {
    state.course = "home";
    state.topic = null;
    setSidebarOpen(false);
    renderAll();
  });
  return drawerHead;
}

function placeHeader() {
  const sidebar = document.getElementById("sidebar");
  if (!sidebar) return;
  const inCourse = state.course !== "home";
  sidebar.style.setProperty("--c", courseColor(state.course));
  if (!inCourse) {
    if (drawerHead && drawerHead.parentNode) drawerHead.remove();
    return;
  }
  const head = ensureDrawerHead();
  if (!sidebar.contains(head)) sidebar.insertBefore(head, sidebar.firstChild);
}

function renderTabs() {
  const el = document.getElementById("courseTabs");
  el.innerHTML = "";
  const home = document.createElement("button");
  home.className = "tab-btn" + (state.course === "home" ? " active" : "");
  home.textContent = "Início";
  home.onclick = function () {
    state.course = "home";
    state.topic = null;
    renderAll();
  };
  el.appendChild(home);
  for (const key in DATA) {
    const b = document.createElement("button");
    b.className = "tab-btn" + (state.course === key ? " active" : "");
    b.textContent = DATA[key].name;
    b.onclick = function () {
      if (state.course === key) {
        renderAll();
        return;
      }
      openCourseStart(key);
    };
    el.appendChild(b);
  }
}

function debugLangForCourse(course) {
  return ({ lp: "c", c: "c", py: "python", js: "js", html: "web", css: "web" })[course] || "c";
}

function currentDebugLang() {
  return debugLangForCourse(state.course);
}

function topicProgress(course) {
  let done = 0;
  DATA[course].topics.forEach(function (t) { if (allDone(course, t.id)) done++; });
  return { done: done, total: DATA[course].topics.length };
}

function overallProgress() {
  let correct = 0, total = 0, dt = 0, tt = 0;
  for (const key in DATA) {
    const qs = courseStats(key);
    correct += qs.correct; total += qs.total;
    const tp = topicProgress(key);
    dt += tp.done; tt += tp.total;
  }
  return { correct: correct, total: total, pct: total ? Math.round((correct / total) * 100) : 0, doneTopics: dt, totalTopics: tt };
}

function openCourse(course) {
  state.course = course;
  const next = DATA[course].topics.find(function (t) { return !allDone(course, t.id); });
  state.topic = next ? next.id : DATA[course].topics[0].id;
  lessonView = "text";
  renderAll();
  scrollTop();
}

function openCourseStart(course) {
  state.course = course;
  state.topic = DATA[course].topics[0].id;
  lessonView = "text";
  renderAll();
  scrollTop();
}

function scrollTop() {
  if (window.scrollTo) window.scrollTo({ top: 0, behavior: "smooth" });
}

function courseLogo(key) {
  const logos = {
    lp: null,
    c: "icons/logo-c.svg",
    py: "icons/logo-python.svg",
    js: "icons/logo-javascript.svg",
    html: "icons/logo-html5.svg",
    css: "icons/logo-css3.svg"
  };
  return logos[key] || null;
}

function courseColor(key) {
  const colors = {
    lp: "#ce82ff", c: "#1cb0f6", py: "#58cc02",
    js: "#ffc800", html: "#ff9600", css: "#00cd9c"
  };
  return colors[key] || "#58cc02";
}

function renderDashboard() {
  const li = levelInfo();
  const lvlPct = Math.min(100, Math.round((li.into / li.need) * 100));
  const ov = overallProgress();
  let cards = "";
  for (const key in DATA) {
    const c = DATA[key];
    const qs = courseStats(key);
    const tp = topicProgress(key);
    const done = tp.total > 0 && tp.done === tp.total;
    const color = courseColor(key);
    const logo = courseLogo(key);
    const emblemTxt = key === "js" ? "#4b4b4b" : "#ffffff";
    cards += '<div class="course-card' + (done ? " done" : "") + '" style="--c:' + color + '">' +
      '<div class="cc-rail" style="background:' + color + '"></div>' +
      '<div class="course-card-top">' +
      '<span class="course-emblem" style="background:linear-gradient(180deg,' + color + ',' + color + 'cc)' + (logo ? ';border-radius:12px' : ';color:' + emblemTxt) + '">' +
      (logo ? '<img src="' + logo + '" alt="" class="course-logo">' : escapeHtml(c.name.charAt(0))) +
      "</span>" +
      "<div><h3>" + escapeHtml(c.name) + "</h3>" +
      '<div class="course-pills">' +
      '<span class="mini-pill">' + qs.correct + "/" + qs.total + " questões</span>" +
      '<span class="mini-pill">' + tp.done + "/" + tp.total + " tópicos</span>" +
      "</div></div></div>" +
      '<div class="bar"><i style="width:' + qs.pct + '%"></i></div>' +
      '<div class="course-card-foot">' +
      '<span class="status">' + (done
        ? "Concluído " + window.EstudarIcon("check")
        : tp.done > 0 ? "Em andamento" : "Ainda não começou") +
      "</span>" +
      '<span class="course-pct">' + qs.pct + "%</span>" +
      "</div>" +
      '<button class="btn" onclick="openCourse(\'' + key + '\')">' +
      (done ? "Rever" : tp.done > 0 ? "Continuar" : "Começar") +
      "</button>" +
      "</div>";
  }
  return '<div class="home-hero">' +
    '<div class="hero-level">' +
    '<span class="hero-orb">' + li.lvl + "</span>" +
    '<div class="hero-xp">' +
    "<b>Nível " + li.lvl + "</b>" +
    '<span class="hero-bar"><i style="width:' + lvlPct + '%"></i></span>' +
    "<span>" + li.into + " / " + li.need + " XP para o nível " + (li.lvl + 1) + "</span>" +
    "</div></div>" +
    "<h2>Olá, estudante!</h2>" +
    "<p>Escolha o seu caminho de aprendizado. Seu progresso é salvo automaticamente neste navegador.</p>" +
    '<div class="home-overall">' +
    '<span class="hero-bar overall"><i style="width:' + ov.pct + '%"></i></span>' +
    "<span>Total no site: " + ov.correct + "/" + ov.total + " questões (" + ov.pct + "%)</span>" +
    "</div>" +
    "</div>" +
    '<div class="home-grid">' + cards + "</div>";
}

function renderSidebar() {
  const el = document.getElementById("topicList");
  let html = "";

  if (state.course === "home") {
    const ov = overallProgress();
    html += '<div class="progress-pill home-overall-pill">' +
      '<div class="progress-bar"><div class="progress-bar-fill" style="width:' + ov.pct + '%"></div></div>' +
      "Geral: <b>" + ov.correct + "/" + ov.total + "</b> questões (" + ov.pct + "%)" +
      "</div>";

    html += '<div class="side-conquistas">';
    const ids = Object.keys(BADGES);
    const unlocked = ids.filter(function (id) { return gam.badges[id]; });
    html += '<div class="side-title">Conquistas</div>';
    let mini = "";
    unlocked.forEach(function (id) {
      const b = BADGES[id];
      mini += '<div class="mini-badge" title="' + escapeHtml(b.desc) + '"><span class="badge-icon">' + window.EstudarIcon(b.icon) + "</span>" + escapeHtml(b.name) + "</div>";
    });
    html += '<div class="mini-badges">' +
      (mini || '<p class="muted-small">Nenhuma conquista ainda. Comece a estudar para desbloquear!</p>') +
      "</div>";
    html += '<button class="btn ghost" style="width:100%;margin-top:12px" onclick="openBadges()">Ver conquistas</button>';
    html += "</div>";
  } else {
    const stats = courseStats(state.course);
    html += '<div class="progress-pill">' +
      '<div class="progress-bar"><div class="progress-bar-fill" style="width:' + stats.pct + '%"></div></div>' +
      "Progresso: <b>" + stats.correct + "/" + stats.total + "</b> (" + stats.pct + "%)" +
      "</div>";

    html += '<div class="side-title">Trilha · ' + escapeHtml(DATA[state.course].name) + "</div>";
    html += '<div class="path">';
    DATA[state.course].topics.forEach(function (t, i) {
      const done = allDone(state.course, t.id);
      const active = state.topic === t.id;
      html += '<div class="path-item' + (done ? " done" : "") + (active ? " active" : "") + '">' +
        '<div class="path-marker"><span class="path-circle">' + (done ? window.EstudarIcon("check") : i + 1) + "</span></div>" +
        '<div class="path-side">' +
        '<button class="topic-link" onclick="selectTopic(\'' + t.id + '\')" title="' + escapeHtml(t.title) + '">' + escapeHtml(t.title) + "</button>" +
        (active ? '<span class="path-here">você está aqui</span>' : "") +
        "</div>" +
        "</div>";
    });
    html += "</div>";
  }

  el.innerHTML = html;
}

function selectTopic(id) {
  state.topic = id;
  lessonView = "text";
  renderSidebar();
  renderContent();
  if (window.matchMedia && window.matchMedia("(max-width: 860px)").matches) {
    setSidebarOpen(false);
  }
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/* ---------- visão da lição: texto | flashcard | depurador ---------- */
let lessonView = "text";

function setLessonView(v) {
  lessonView = (v === "flash" || v === "debug") ? v : "text";
  if (lessonView === "flash") initFlashSession();
  else if (lessonView === "debug") dbgState.lang = currentDebugLang();
  renderContent();
  if (window.matchMedia && window.matchMedia("(max-width: 860px)").matches) setSidebarOpen(false);
  if (window.scrollTo) window.scrollTo({ top: 0, behavior: "smooth" });
}

function lessonMenuHTML() {
  const opts = [["text", "Texto"], ["flash", "Flashcard"], ["debug", "Depurador"]];
  let h = '<div class="lesson-menu">';
  opts.forEach(function (o) {
    h += '<button class="lesson-menu-btn' + (lessonView === o[0] ? " active" : "") + '" onclick="setLessonView(\'' + o[0] + '\')">' + o[1] + "</button>";
  });
  return h + "</div>";
}

function renderContent() {
  const el = document.getElementById("contentArea");

  if (state.course === "home") {
    el.innerHTML = renderDashboard();
    return;
  }

  const course = DATA[state.course];
  const topic = course.topics.find(function (t) { return t.id === state.topic; });
  if (!topic) { el.innerHTML = "<p>Selecione um tópico.</p>"; return; }

  let html = '<div class="breadcrumb">' + escapeHtml(course.name) + "</div>";
  html += "<h2>" + escapeHtml(topic.title) + "</h2>";
  html += '<p class="topic-subtitle">' + escapeHtml(topic.subtitle) + "</p>";

  html += lessonMenuHTML();

  if (lessonView === "flash") {
    html += '<div id="lessonFlash">' + flashcardHTML() + "</div>";
  } else if (lessonView === "debug") {
    html += debuggerBody(currentDebugLang());
  } else {
    html += buildBlocks(topic.blocks);
    html += buildQuiz(topic, topic.id);
    html += buildLearnMore(course, topic);
    html += buildNav();
  }

  el.innerHTML = html;

  if (lessonView === "debug") {
    const ta = document.getElementById("dbgCode");
    if (ta) ta.value = firstSample(dbgState.lang);
    dbgClear();
  }
}

function buildBlocks(blocks) {
  let html = "";
  blocks.forEach(function (b) {
    switch (b.t) {
      case "h":
        html += '<div class="block"><h3>' + escapeHtml(b.h) + "</h3></div>";
        break;
      case "p":
        html += '<div class="block"><p>' + escapeHtml(b.p) + "</p></div>";
        break;
      case "lst":
      case "ol":
        html += '<div class="block"><' + (b.t === "ol" ? "ol" : "ul") + ">";
        b.items.forEach(function (it) {
          html += "<li>" + escapeHtml(it) + "</li>";
        });
        html += "</" + (b.t === "ol" ? "ol" : "ul") + "></div>";
        break;
      case "code":
        html += '<div class="block"><pre><code>' + highlight(b.c, b.lang) + "</code></pre></div>";
        break;
      case "note":
        html += '<div class="block"><div class="note">' + (b.msg ? "<b>" + escapeHtml(b.msg) + ": </b>" : "") + escapeHtml(b.p) + "</div></div>";
        break;
      case "warn":
        html += '<div class="block"><div class="note warn"><b>Atenção: </b>' + escapeHtml(b.p) + "</div></div>";
        break;
    }
  });
  return html;
}

function buildQuiz(topic, topicId) {
  const progress = loadProgress();
  const courseId = state.course;
  let html = '<div class="quiz"><h3>Teste seu conhecimento</h3>';

  topic.quiz.forEach(function (q, qi) {
    const key = qkey(courseId, topicId, qi);
    const saved = progress[key];
    let optHtml = "";

    q.opts.forEach(function (op, i) {
      let cls = "q-option";
      let checked = "";
      let disabled = "";

      if (saved) {
        disabled = "disabled";
        if (i === q.ans) cls += " correct";
        else if (i === saved.picked && !saved.correct) cls += " wrong";
        if (i === saved.picked) checked = "checked";
      }

      optHtml += '<label class="' + cls + '">' +
        '<input type="radio" name="opt-' + topicId + "-" + qi + '" value="' + i + '" ' + checked + " " + disabled + ">" +
        '<span>' + escapeHtml(op) + "</span></label>";
    });

    let feedback = "";
    let btnHtml = "";
    if (saved) {
      feedback = saved.correct
        ? '<div class="feedback correct-fb"><b>Correto! </b>' + escapeHtml(q.expl) + "</div>"
        : '<div class="feedback wrong-fb"><b>Incorreto. </b>' + escapeHtml(q.expl) + "</div>";

      btnHtml = saved.correct
        ? '<button class="btn" disabled>Acertou! ' + window.EstudarIcon("check") + "</button>"
        : '<button class="btn" onclick="retryAnswer(\'' + topicId + "', " + qi + ')">Responder novamente</button>';
    } else {
      btnHtml = '<button class="btn" onclick="checkAnswer(\'' + topicId + "', " + qi + ')">Verificar resposta</button>';
    }

    html += '<div class="question" id="q-' + topicId + "-" + qi + '">' +
      '<div class="question-text">' + (qi + 1) + ". " + escapeHtml(q.q) + "</div>" +
      '<div class="q-options">' + optHtml + "</div>" +
      feedback +
      '<div class="quiz-actions">' + btnHtml + "</div>" +
      "</div>";
  });

  html += "</div>";
  return html;
}

function buildNav() {
  const topics = DATA[state.course].topics;
  const idx = topics.findIndex(function (t) { return t.id === state.topic; });
  const prev = topics[idx - 1];
  const next = topics[idx + 1];

  let html = '<div class="quiz-actions nav" style="margin-top:8px">';
  html += prev
    ? '<button class="btn" onclick="selectTopic(\'' + prev.id + '\')">' + window.EstudarIcon("arrow-left") + " " + escapeHtml(prev.title) + "</button>"
    : '<button class="btn" disabled>' + window.EstudarIcon("arrow-left") + " Anterior</button>";
  html += next
    ? '<button class="btn" onclick="selectTopic(\'' + next.id + '\')">' + escapeHtml(next.title) + " " + window.EstudarIcon("arrow-right") + "</button>"
    : '<button class="btn" disabled>' + window.EstudarIcon("check") + " Concluído</button>";
  html += "</div>";
  return html;
}

/* ----------------------------------------------------------------
 * Ações do quiz
 * ---------------------------------------------------------------- */
function checkAnswer(topicId, qi) {
  const topic = findTopic(topicId);
  const q = topic.quiz[qi];
  const container = document.getElementById("q-" + topicId + "-" + qi);
  const checked = container.querySelector('input[name="opt-' + topicId + "-" + qi + '"]:checked');

  if (!checked) {
    alert("Escolha uma opção antes de verificar!");
    return;
  }

  const picked = parseInt(checked.value, 10);
  const correct = picked === q.ans;

  saveAnswer(state.course, topicId, qi, picked, correct);

  const key = qkey(state.course, topicId, qi);
  if (correct) {
    if (!gam.earned[key]) {
      gam.earned[key] = 1;
      gam.correctQ++;
      addXP(10);
    }
    const tkey = state.course + "/" + topicId;
    if (allDone(state.course, topicId) && !gam.doneTopics[tkey]) {
      gam.doneTopics[tkey] = 1;
      addXP(20);
      confetti();
      toast("Tópico completo! +20 XP");
    }
    toast("Correto! +10 XP");
  } else {
    loseHeart();
    toast("Resposta errada. -1 coração");
  }

  checkBadges();
  renderContent();
  renderSidebar();
}

function retryAnswer(topicId, qi) {
  removeAnswer(state.course, topicId, qi);
  renderContent();
  renderSidebar();
}

/* ----------------------------------------------------------------
 * Gamificação, cartões, links de pesquisa e depurador
 * ---------------------------------------------------------------- */
const GAM_KEY = "estudarCode_gam";

function freshGam() {
  return {
    xp: 0, hearts: 5, maxHearts: 5, streak: 0, bestStreak: 0, lastActive: null,
    correctQ: 0, earned: {}, doneTopics: {}, badges: {}, cardsSeen: 0, runs: 0
  };
}

function loadGam() {
  // Fonte de verdade: espelho em memória do supabaseSync (local quando sem conta)
  const src = (S && S.getGam) ? S.getGam() : (tryParseJSON(localStorage.getItem(GAM_KEY)) || {});
  if (src && typeof src === "object" && typeof src.hearts === "number") return Object.assign(freshGam(), src);
  return freshGam();
}

let gam = loadGam();

function saveGam() {
  if (S && S.setGam) S.setGam(gam);
  else localStorage.setItem(GAM_KEY, JSON.stringify(gam));
}

function todayStr(offsetDays) {
  const d = new Date(Date.now() + (offsetDays || 0) * 86400000);
  return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
}

function registerDay() {
  const t = todayStr(0);
  if (gam.lastActive === t) return;
  if (gam.lastActive === todayStr(-1)) gam.streak += 1;
  else gam.streak = 1;
  gam.lastActive = t;
  if (gam.streak > gam.bestStreak) gam.bestStreak = gam.streak;
  if (gam.hearts < gam.maxHearts) gam.hearts += 1;
  saveGam();
}

// Verifica o estado do "fogo" (streak) ao abrir a plataforma, mostrando
// um aviso quando o fogo está prestes a apagar ou já apagou.
function checkFireStatus() {
  const t = todayStr(0);
  const y = todayStr(-1);
  if (!gam.lastActive) return;              // nunca estudou: sem fogo para cuidar
  if (gam.lastActive === t) return;         // já estudou hoje: fogo aceso

  // Estuda hoje ainda pode manter a sequência → avisa antes de apagar.
  if (gam.lastActive === y && gam.streak > 1) {
    openOverlay(
      '<div class="fire-off-popup fire-warn">' +
        '<div class="fire-off-icon">' + window.EstudarIcon("fire") + '</div>' +
        '<h2 class="fire-off-title">Seu fogo vai apagar!</h2>' +
        '<p class="fire-off-text">Você está com <b>' + gam.streak + ' dias</b> seguidos, mas ainda não estudou <b>hoje</b>.</p>' +
        '<p class="fire-off-sub">Estude hoje para manter a chama acesa!</p>' +
        '<button class="btn fire-off-btn" onclick="closeOverlay(); openCourseStart(\'' + firstCourseKey() + '\')">Estudar agora</button>' +
      '</div>'
    );
    return;
  }

  // Pulou pelo menos um dia inteiro → o fogo apagou.
  if (gam.streak > 1) {
    const lost = gam.streak;
    gam.streak = 0;
    saveGam();
    openOverlay(
      '<div class="fire-off-popup">' +
        '<div class="fire-off-icon">' + window.EstudarIcon("fire-off") + '</div>' +
        '<h2 class="fire-off-title">Seu fogo apagou!</h2>' +
        '<p class="fire-off-text">Você estava com <b>' + lost + ' dias</b> seguidos, mas não estudou ontem. Sua sequência foi reiniciada.</p>' +
        '<p class="fire-off-sub">Estude hoje para acender o foguinho de novo!</p>' +
        '<button class="btn fire-off-btn" onclick="closeOverlay(); openCourseStart(\'' + firstCourseKey() + '\')">Voltar a estudar</button>' +
      '</div>'
    );
  } else {
    gam.streak = 0;
    saveGam();
  }
}

function levelInfo() {
  let lvl = 1, need = 100, rem = gam.xp;
  while (rem >= need) { rem -= need; lvl++; need += 50; }
  return { lvl: lvl, into: rem, need: need };
}

function addXP(n) {
  const before = levelInfo().lvl;
  gam.xp += n;
  const after = levelInfo().lvl;
  saveGam();
  if (after > before) { confetti(); toast("Nível " + after + " alcançado! +" + n + " XP"); }
}

function loseHeart() {
  if (gam.hearts > 0) gam.hearts--;
  saveGam();
  if (gam.hearts <= 0) toast("Corações esgotados! Responda certo para ganhar XP — você recupera 1 coração por dia de atividade.");
}

const BADGES = {
  first:    { name: "Primeiros Passos", desc: "Acertar a 1ª questão",          icon: "star" },
  q10:      { name: "10 Certas",         desc: "Acertar 10 questões",          icon: "check-circle" },
  q50:      { name: "50 Certas",         desc: "Acertar 50 questões",          icon: "check-badge" },
  xp100:    { name: "100 XP",            desc: "Acumular 100 XP",              icon: "sparkles" },
  xp500:    { name: "500 XP",            desc: "Acumular 500 XP",              icon: "bolt" },
  xp1000:   { name: "1.000 XP",          desc: "Acumular 1.000 XP",            icon: "trophy" },
  streak3:  { name: "3 Dias Seguidos",   desc: "Estudar 3 dias seguidos",      icon: "fire" },
  streak7:  { name: "7 Dias Seguidos",   desc: "Estudar 7 dias seguidos",      icon: "fire" },
  cards10:  { name: "10 Cartões",        desc: "Responder 10 cartões",         icon: "rectangle-stack" },
  cards50:  { name: "50 Cartões",        desc: "Responder 50 cartões",         icon: "square-2-stack" },
  code1:    { name: "Primeiro Run",      desc: "Executar um código",           icon: "code-bracket-square" },
  code10:   { name: "10 Execuções",      desc: "Executar 10 códigos",          icon: "code-bracket" },
  done_lp:  { name: "Lógica OK",         desc: "Concluir todos os tópicos de Lógica", icon: "check-circle" },
  done_c:   { name: "C OK",              desc: "Concluir todos os tópicos de C",      icon: "check-badge" },
  done_py:  { name: "Python OK",         desc: "Concluir todos os tópicos de Python", icon: "check-circle" },
  done_js:  { name: "JavaScript OK",     desc: "Concluir todos os tópicos de JavaScript", icon: "check-badge" },
  done_html:{ name: "HTML OK",           desc: "Concluir todos os tópicos de HTML",    icon: "code-bracket" },
  done_css: { name: "CSS OK",            desc: "Concluir todos os tópicos de CSS",     icon: "code-bracket-square" }
};

function unlockBadge(id) {
  if (gam.badges[id]) return false;
  const b = BADGES[id];
  if (!b) return false;
  gam.badges[id] = 1;
  saveGam();
  toast("Conquista desbloqueada: " + b.name);
  return true;
}

function checkBadges() {
  registerDay();
  const c = gam.correctQ;
  if (c >= 1) unlockBadge("first");
  if (c >= 10) unlockBadge("q10");
  if (c >= 50) unlockBadge("q50");
  if (gam.xp >= 100) unlockBadge("xp100");
  if (gam.xp >= 500) unlockBadge("xp500");
  if (gam.xp >= 1000) unlockBadge("xp1000");
  if (gam.streak >= 3) unlockBadge("streak3");
  if (gam.streak >= 7) unlockBadge("streak7");
  if (gam.cardsSeen >= 10) unlockBadge("cards10");
  if (gam.cardsSeen >= 50) unlockBadge("cards50");
  if (gam.runs >= 1) unlockBadge("code1");
  if (gam.runs >= 10) unlockBadge("code10");
  for (const key in DATA) {
    if (DATA[key].topics.every(function (t) { return allDone(key, t.id); })) unlockBadge("done_" + key);
  }
  renderStats();
}

function hasDoneAnyActivity() {
  const p = loadProgress();
  const hasAnswers = p && typeof p === "object" && Object.keys(p).length > 0;
  const hasGamActivity = (gam.correctQ || 0) > 0 ||
    (gam.cardsSeen || 0) > 0 ||
    (gam.runs || 0) > 0 ||
    (gam.xp || 0) > 0 ||
    (gam.earned && Object.keys(gam.earned).length > 0) ||
    (gam.doneTopics && Object.keys(gam.doneTopics).length > 0) ||
    (gam.badges && Object.keys(gam.badges).length > 0);
  return !!hasAnswers || hasGamActivity;
}

// Foguinho aceso apenas se houve atividade HOJE (independente do histórico).
function activeToday() {
  return !!gam.lastActive && gam.lastActive === todayStr(0);
}

function renderStats() {
  const el = document.getElementById("statsBar");
  if (!el) return;
  const li = levelInfo();
  const lvlPct = Math.min(100, Math.round((li.into / li.need) * 100));
  let heartsHtml = "";
  for (let i = 0; i < gam.maxHearts; i++) {
    const filled = i < gam.hearts;
    const svg = window.EstudarIcons && window.EstudarIcons[filled ? "heart" : "o-heart"];
    heartsHtml += '<span class="heart' + (filled ? "" : " lost") + '">' + svg + "</span>";
  }
  // Foguinho: acende (laranja) quando há atividade hoje; apagado (cinza) caso contrário.
  const active = activeToday();
  const fireIcon = (window.EstudarIcons && (active ? window.EstudarIcons.fire : window.EstudarIcons["fire-off"])) || "";
  el.innerHTML =
    '<span class="stat-chip chip-hearts" title="Corações: errou perde 1; recupera 1 por dia de atividade">' + heartsHtml + "</span>" +
    '<span class="stat-chip chip-xp" title="Pontos de experiência">' +
    '<span class="xp-level">Nível <b>' + li.lvl + '</b></span>' +
    '<span class="xp-mini"><i style="width:' + lvlPct + '%"></i></span>' +
    '<span class="chip-icon">' + (window.EstudarIcons && window.EstudarIcons.bolt) + "</span>" +
    '<b class="xp-val">' + gam.xp + '</b>' +
    '<span class="xp-unit">xp</span>' +
    "</span>" +
    '<span class="stat-chip chip-streak' + (active ? " on" : " off") + '" title="Dias seguidos fazendo atividade (se passar 1 dia sem atividade, zera)">' +
    '<span class="chip-icon">' + fireIcon + "</span>" +
    '<span class="chip-val">' + gam.streak + " dia" + (gam.streak === 1 ? "" : "s") + "</span>" +
    "</span>";
  updateMobileStreak();
}

// Indicador de streak "flutuante" exibido apenas em modo curso no celular,
// já que nesse modo a topbar (com as estatísticas) fica oculta.
function updateMobileStreak() {
  if (typeof window.matchMedia === "function" && !window.matchMedia("(max-width: 640px)").matches) return;
  const inCourse = state.course !== "home";
  let el = document.getElementById("mobileStreak");
  if (!inCourse) {
    if (el) el.style.display = "none";
    return;
  }
  if (!el) {
    el = document.createElement("button");
    el.id = "mobileStreak";
    el.setAttribute("type", "button");
    el.className = "mobile-streak";
    el.title = "Dias seguidos fazendo atividade (se passar 1 dia sem atividade, zera)";
    document.body.appendChild(el);
  }
  const active = activeToday();
  const fireIcon = (window.EstudarIcons && (active ? window.EstudarIcons.fire : window.EstudarIcons["fire-off"])) || "";
  el.className = "mobile-streak" + (active ? " on" : " off");
  el.innerHTML =
    '<span class="chip-icon">' + fireIcon + "</span>" +
    '<span class="chip-val">' + gam.streak + "</span>";
  el.style.display = "flex";
}

/* ---------- toast e confete ---------- */
let _toastTimer = null;
function toast(msg, ms) {
  let t = document.getElementById("toast");
  if (!t) { t = document.createElement("div"); t.id = "toast"; document.body.appendChild(t); }
  t.textContent = msg;
  t.className = "show";
  clearTimeout(_toastTimer);
  _toastTimer = setTimeout(function () { t.className = ""; }, ms || 2600);
}

function confetti() {
  const colors = ["#8fb0d9", "#7cc5a8", "#d9c38a", "#d9a899", "#b39bd6"];
  for (let i = 0; i < 36; i++) {
    const d = document.createElement("div");
    d.className = "confetti";
    d.style.left = (Math.random() * 100) + "vw";
    d.style.background = colors[i % colors.length];
    d.style.animationDelay = (Math.random() * 0.6) + "s";
    d.style.transform = "rotate(" + Math.random() * 360 + "deg)";
    document.body.appendChild(d);
    (function (el) { setTimeout(function () { el.remove(); }, 2000); })(d);
  }
}

/* ---------- overlays ---------- */
function openOverlay(bodyHtml, wide) {
  const root = document.getElementById("overlayRoot");
  root.innerHTML =
    '<div class="overlay-backdrop" onclick="closeOverlay()"></div>' +
    '<div class="overlay-card' + (wide ? " wide" : "") + '">' +
    '<button class="overlay-close" onclick="closeOverlay()" title="Fechar">' + window.EstudarIcon("x-mark") + "</button>" +
    '<div class="overlay-body">' + bodyHtml + "</div>" +
    "</div>";
  document.body.classList.add("no-scroll");
}

function closeOverlay() {
  document.getElementById("overlayRoot").innerHTML = "";
  document.body.classList.remove("no-scroll");
}

/* ---------- conquistas ---------- */
function openBadges() {
  const ids = Object.keys(BADGES);
  const got = ids.filter(function (id) { return gam.badges[id]; }).length;
  let grid = "";
  ids.forEach(function (id) {
    const b = BADGES[id];
    const has = !!gam.badges[id];
    grid += '<div class="badge' + (has ? " unlocked" : "") + '">' +
      '<div class="badge-icon">' + window.EstudarIcon(b.icon) + "</div>" +
      '<div class="badge-name">' + b.name + "</div>" +
      '<div class="badge-desc">' + b.desc + "</div>" +
      '<div class="badge-status">' + window.EstudarIcon(has ? "check" : "question-mark-circle") + "</div>" +
      "</div>";
  });
  openOverlay(
    '<h3 class="ov-title">Conquistas</h3>' +
    '<p class="ov-sub">' + got + " de " + ids.length + " desbloqueadas</p>" +
    '<div class="badge-grid">' + grid + "</div>"
  );
}

/* ---------- cartões de estudo (flashcards) ---------- */
const fcState = { course: "lp", topicId: null, idx: 0, order: [] };

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const t = a[i]; a[i] = a[j]; a[j] = t;
  }
  return a;
}

function buildFlashcards(course, topicId) {
  const topic = DATA[course].topics.find(function (t) { return t.id === topicId; });
  if (!topic) return [];
  return topic.quiz.map(function (q) {
    const order = shuffle([0, 1, 2, 3]);
    const opts = order.map(function (i) { return q.opts[i]; });
    return {
      front: q.q,
      opts: opts,
      correctIdx: order.indexOf(q.ans),
      expl: q.expl
    };
  });
}

function initFlashSession() {
  fcState.course = state.course;
  fcState.topicId = state.topic;
  fcState.order = shuffle(buildFlashcards(fcState.course, fcState.topicId).map(function (_, i) { return i; }));
  fcState.idx = 0;
}

function openFlashcards(course, topicId) {
  fcState.course = course;
  fcState.topicId = topicId;
  fcState.order = shuffle(buildFlashcards(course, topicId).map(function (_, i) { return i; }));
  fcState.idx = 0;
  openOverlay(flashcardHTML());
}

function reflash() {
  if (lessonView === "flash" && state.course === fcState.course && state.topic === fcState.topicId) {
    initFlashSession();
    const holder = document.getElementById("lessonFlash");
    if (holder) holder.innerHTML = flashcardHTML();
    return;
  }
  openFlashcards(fcState.course, fcState.topicId);
}

function flashcardHTML() {
  const cards = buildFlashcards(fcState.course, fcState.topicId);
  if (fcState.idx >= fcState.order.length) {
    return '<h3 class="ov-title">Revisão concluída!</h3>' +
      '<p class="ov-sub">Bons estudos. Você ganhou XP por cada resposta.</p>' +
      '<div class="flash-actions"><button class="btn" onclick="reflash()">Revisar de novo</button>' +
      (lessonView === "flash"
        ? '<button class="btn ghost" onclick="setLessonView(\'text\')">Voltar ao texto</button>'
        : '<button class="btn ghost" onclick="closeOverlay()">Fechar</button>') +
      "</div>";
  }
  const card = cards[fcState.order[fcState.idx]];
  let optList = "";
  card.opts.forEach(function (op, i) {
    const isCorrect = i === card.correctIdx;
    optList += '<li class="flash-opt' + (isCorrect ? " flash-opt-correct" : "") + '">' +
      (isCorrect ? window.EstudarIcon("check") : "") + escapeHtml(op) + "</li>";
  });
  return '<h3 class="ov-title">Cartões de estudo</h3>' +
    '<p class="ov-sub">Aperte no cartão para revelar a resposta. (' + (fcState.idx + 1) + " de " + fcState.order.length + ")</p>" +
    '<div class="flash-wrap"><div class="flash-card" id="flashCard" onclick="flashFlip()">' +
    '<div class="flash-face flash-front">' + escapeHtml(card.front) + "</div>" +
    '<div class="flash-face flash-back"><ul class="flash-opts">' + optList + "</ul>" +
    '<div class="flash-expl">' + escapeHtml(card.expl) + "</div>" +
    "</div></div>" +
    '<div class="flash-actions">' +
    '<button class="btn danger-ghost" onclick="flashAnswer(0)">' + window.EstudarIcon("x-circle") + " Não lembrava</button>" +
    '<button class="btn" onclick="flashAnswer(1)">' + window.EstudarIcon("check-circle") + " Acertei (Sei)</button>" +
    "</div>";
}

function flashFlip() {
  const card = document.getElementById("flashCard");
  if (card) card.classList.toggle("flipped");
}

function flashAnswer(ok) {
  gam.cardsSeen++;
  addXP(ok ? 3 : 1);
  checkBadges();
  fcState.idx++;
  if (lessonView === "flash") {
    const holder = document.getElementById("lessonFlash");
    if (holder) holder.innerHTML = flashcardHTML();
    return;
  }
  const bd = document.querySelector("#overlayRoot .overlay-body");
  if (bd) bd.innerHTML = flashcardHTML();
}

/* ---------- links "quero saber mais" ---------- */
const DOCS_LINKS = {
  c:     { url: "https://en.cppreference.com/w/c", name: "cppreference" },
  py:    { url: "https://docs.python.org/pt-br/3/", name: "docs.python.org" },
  js:    { url: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript", name: "MDN JavaScript" },
  html:  { url: "https://developer.mozilla.org/pt-BR/docs/Web/HTML", name: "MDN HTML" },
  css:   { url: "https://developer.mozilla.org/pt-BR/docs/Web/CSS", name: "MDN CSS" },
  lp:    null
};

function buildLearnMore(course, topic) {
  const cfg = DOCS_LINKS[course];
  const q = encodeURIComponent(course + " - " + topic.title);
  let links =
    '<a class="learn-link" target="_blank" rel="noopener" href="https://www.google.com/search?q=' + q + '">Google</a>' +
    '<a class="learn-link" target="_blank" rel="noopener" href="https://www.youtube.com/results?search_query=' + q + '">YouTube</a>';
  if (cfg) links += '<a class="learn-link" target="_blank" rel="noopener" href="' + cfg.url + '">' + cfg.name + "</a>";
  links += '<a class="learn-link" target="_blank" rel="noopener" href="https://www.perplexity.ai/search?q=' + q + '">Perplexity</a>';
  return '<div class="block learn-more">' +
    '<h3>Quero saber mais</h3>' +
    "<p>Pesquise sobre \"" + escapeHtml(topic.title) + "\" ou abra a documentação oficial:</p>" +
    '<div class="learn-links">' + links + "</div></div>";
}

/* ---------- depurador ---------- */
const DBG_LABELS = { c: "C", python: "Python", js: "JavaScript", web: "HTML/CSS" };
const dbgState = { lang: "c" };

const DEBUG_SAMPLES = {
  c: {
    "Olá mundo": "#include <stdio.h>\n\nint main() {\n  int n = 5;\n  printf(\"Olá, mundo!\\n\");\n  printf(\"Valor: %d\\n\", n);\n  printf(\"Nota: %.2f\\n\", 7.5);\n  return 0;\n}",
    "Soma de 1 a N": "#include <stdio.h>\n\nint main() {\n  int n, i, soma = 0;\n  printf(\"Digite n: \");\n  scanf(\"%d\", &n);\n  for (i = 1; i <= n; i++) soma += i;\n  printf(\"Soma: %d\\n\", soma);\n  return 0;\n}",
    "Fatorial": "#include <stdio.h>\n\nint main() {\n  int n;\n  long f = 1;\n  printf(\"Digite n: \");\n  scanf(\"%d\", &n);\n  for (int i = 2; i <= n; i++) f *= i;\n  printf(\"%d! = %d\\n\", n, f);\n  return 0;\n}",
    "Vetores": "#include <stdio.h>\n\nint main() {\n  int v[4];\n  int i, soma = 0;\n  for (i = 0; i < 4; i++) { v[i] = i * 10; soma += v[i]; }\n  printf(\"Soma: %d\\n\", soma);\n  return 0;\n}",
    "Função": "#include <stdio.h>\n\nint dobro(int x) {\n  return x * 2;\n}\n\nint main() {\n  printf(\"%d\\n\", dobro(21));\n  return 0;\n}",
    "Ponteiros": "#include <stdio.h>\n\nint main() {\n  int x = 10;\n  int *p = &x;\n  *p = 25;\n  printf(\"x = %d\\n\", x);\n  return 0;\n}"
  },
  python: {
    "Olá mundo": 'print("Olá, mundo!")\n\nn = 5\nprint("Valor:", n)\n',
    "Soma de 1 a N": 'n = int(input("Digite n: "))\nsoma = 0\nfor i in range(1, n + 1):\n    soma += i\nprint("Soma:", soma)\n',
    "Fatorial": 'n = int(input("Digite n: "))\nf = 1\nfor i in range(2, n + 1):\n    f *= i\nprint(f"{n}! = {f}")\n',
    "Laço while": 'i = 1\nwhile i <= 5:\n    print(i)\n    i += 1\n',
    "Função": 'def dobro(x):\n    return x * 2\n\nprint(dobro(21))\n',
    "Listas": 'nums = [2, 3, 5, 7]\ntotal = 0\nfor x in nums:\n    total += x\nprint("Soma:", total)\nprint("Média:", total / len(nums))\n'
  },
  js: {
    "Olá mundo": 'console.log("Olá, mundo!");\nlet n = 5;\nconsole.log("Valor:", n);\n',
    "Soma de 1 a N": 'let n = 5;\nlet soma = 0;\nfor (let i = 1; i <= n; i++) soma += i;\nconsole.log("Soma:", soma);\n',
    "Laço while": 'let i = 1;\nwhile (i <= 5) {\n  console.log(i);\n  i++;\n}\n',
    "Função": 'function dobro(x) { return x * 2; }\nconsole.log(dobro(21));\n',
    "Vetores": 'const v = [2, 3, 5, 7];\nlet total = 0;\nfor (const x of v) total += x;\nconsole.log("Soma:", total);\n'
  },
  web: {
    "Página simples": "<!DOCTYPE html>\n<html lang=\"pt-BR\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Minha página</title>\n</head>\n<body>\n  <h1>Olá, mundo!</h1>\n  <p>Meu primeiro texto em HTML.</p>\n  <a href=\"#\">Um link</a>\n</body>\n</html>",
    "Estilo CSS": "h1 {\n  color: #58a6ff;\n  font-family: sans-serif;\n}\n\np {\n  color: #333;\n  padding: 8px;\n  background: #eef;\n}",
    "Formulário": "<form>\n  <label>Nome\n    <input type=\"text\" placeholder=\"Digite seu nome\">\n  </label>\n  <button>Enviar</button>\n</form>",
    "Centralizar": "<div class=\"card\">\n  <h2>Centralizado</h2>\n  <p>Com flexbox fica fácil.</p>\n</div>\n\n<style>\n  body {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100vh;\n    margin: 0;\n    background: #f0f4ff;\n  }\n  .card {\n    background: #fff;\n    padding: 32px;\n    border-radius: 12px;\n    box-shadow: 0 8px 24px rgba(0,0,0,.15);\n    text-align: center;\n  }\n</style>"
  }
};

function dbgSampleOptions() {
  const samples = DEBUG_SAMPLES[dbgState.lang];
  let opts = "";
  for (const name in samples) opts += '<option value="' + escapeHtml(name) + '">' + escapeHtml(name) + "</option>";
  return opts;
}

function debuggerBody(lang) {
  dbgState.lang = lang && DEBUG_SAMPLES[lang] ? lang : "c";
  const tabs = Object.keys(DEBUG_SAMPLES).map(function (l) {
    return '<button class="dbg-tab' + (dbgState.lang === l ? " active" : "") + '" data-lang="' + l + '" onclick="dbgSetLang(\'' + l + '\')">' + DBG_LABELS[l] + "</button>";
  }).join("");
  return '<h3 class="ov-title">Depurador</h3>' +
    '<div class="dbg-tabs">' + tabs + "</div>" +
    '<div class="dbg-top">' +
    '<label class="dbg-label">Exemplo</label>' +
    '<select id="dbgSample" class="dbg-sample" onchange="dbgLoadSample()">' + dbgSampleOptions() + "</select>" +
    '<button class="btn" onclick="dbgRun()">Executar</button>' +
    '<button class="btn ghost" onclick="dbgClear()">Limpar</button>' +
    "</div>" +
    '<textarea id="dbgCode" class="edit-area dbg-code" spellcheck="false"></textarea>' +
    '<div class="dbg-io">' +
    '<label class="dbg-label">Entradas (uma por linha)</label>' +
    '<textarea id="dbgInput" class="dbg-input" rows="2" placeholder="Valores para scanf/input(), ex.:&#10;5"></textarea>' +
    "</div>" +
    '<pre id="dbgOutput" class="output-box"></pre>' +
    '<div id="dbgFrameWrap" class="dbg-frame" style="display:none"></div>';
}

function openDebugger(lang) {
  openOverlay(debuggerBody(lang), true);
  const ta = document.getElementById("dbgCode");
  if (ta) ta.value = firstSample(dbgState.lang);
  dbgClear();
}

function firstSample(lang) {
  const s = DEBUG_SAMPLES[lang];
  for (const k in s) return s[k];
  return "";
}

function dbgSetLang(lang) {
  dbgState.lang = lang;
  const sel = document.getElementById("dbgSample");
  if (sel) sel.innerHTML = dbgSampleOptions();
  const ta = document.getElementById("dbgCode");
  if (ta) ta.value = firstSample(lang);
  const btns = document.querySelectorAll(".dbg-tab");
  btns.forEach(function (b) { b.classList.toggle("active", b.getAttribute("data-lang") === lang ? true : false); });
  dbgClear();
}

function dbgLoadSample() {
  const sel = document.getElementById("dbgSample");
  const ta = document.getElementById("dbgCode");
  if (sel && ta) ta.value = DEBUG_SAMPLES[dbgState.lang][sel.value] || "";
}

function dbgClear() {
  const out = document.getElementById("dbgOutput");
  const inp = document.getElementById("dbgInput");
  const wrap = document.getElementById("dbgFrameWrap");
  if (out) { out.style.display = "none"; out.textContent = ""; }
  if (inp) inp.value = "";
  if (wrap) { wrap.style.display = "none"; wrap.innerHTML = ""; }
}

function dbgInputLines() {
  const inp = document.getElementById("dbgInput");
  if (!inp || !inp.value) return [];
  return inp.value.split(/\r?\n/).filter(function (l) { return l.trim() !== ""; });
}

function dbgMarkRun() {
  gam.runs++;
  saveGam();
  checkBadges();
}

function dbgRun() {
  const ta = document.getElementById("dbgCode");
  const outEl = document.getElementById("dbgOutput");
  if (!ta || !outEl) return;
  const lines = dbgInputLines();
  const io = {
    _s: "",
    out: function (s) { io._s += s; },
    inp: function () { return lines.length ? lines.shift() : ""; }
  };
  outEl.style.display = "block";
  try {
    if (dbgState.lang === "c") {
      if (typeof window.runC === "function") window.runC(ta.value, io);
      else io.out("\nERRO: interpreter.js ainda não carregou.\n");
    } else if (dbgState.lang === "python") {
      dbgRunPython(outEl, ta.value);
      return;
    } else if (dbgState.lang === "js") {
      io.out(dbgRunJS(ta.value));
    } else if (dbgState.lang === "web") {
      dbgRenderWeb();
      return;
    }
  } catch (e) {
    io.out("\nERRO: " + (e && e.message || e));
  }
  outEl.textContent = io._s === "" ? "(sem saída)" : io._s;
  dbgMarkRun();
}

function fmtAny(v) {
  if (typeof v === "object" && v !== null) {
    try { return JSON.stringify(v); } catch (e) { return String(v); }
  }
  return String(v);
}

function dbgRunJS(code) {
  const logs = [];
  const oLog = console.log, oWarn = console.warn, oErr = console.error;
  console.log = function () { logs.push(Array.prototype.map.call(arguments, fmtAny).join(" ")); };
  console.warn = function () { logs.push("[aviso] " + Array.prototype.map.call(arguments, fmtAny).join(" ")); };
  console.error = function () { logs.push("[erro] " + Array.prototype.map.call(arguments, fmtAny).join(" ")); };
  let msg = "";
  try {
    new Function(code)();
  } catch (e) {
    msg = "\nERRO: " + (e && e.message || e);
  } finally {
    console.log = oLog; console.warn = oWarn; console.error = oErr;
  }
  return (logs.length ? logs.join("\n") + "\n" : "(sem saída — use console.log(...) para ver resultados)") + msg;
}

const PY_URL = "https://cdn.jsdelivr.net/pyodide/v0.26.4/full/";
let _pyodidePromise = null;

function ensurePyodide() {
  if (typeof window.loadPyodide === "function" && _pyodidePromise) return _pyodidePromise;
  if (_pyodidePromise) return _pyodidePromise;
  _pyodidePromise = new Promise(function (resolve, reject) {
    const boot = function () {
      window.loadPyodide({ indexURL: PY_URL }).then(resolve, reject);
    };
    if (typeof window.loadPyodide === "function") { boot(); return; }
    const s = document.createElement("script");
    s.src = PY_URL + "pyodide.js";
    s.onload = boot;
    s.onerror = function () { reject(new Error("Falha ao baixar o Python (verifique sua internet).")); };
    document.head.appendChild(s);
  });
  _pyodidePromise.catch(function () { _pyodidePromise = null; });
  return _pyodidePromise;
}

function dbgRunPython(outEl, code) {
  outEl.textContent = "Carregando Python (primeira vez demora um pouco)...";
  const lines = dbgInputLines();
  ensurePyodide().then(function (py) {
    outEl.textContent = "";
    py.setStdout({ batched: function (s) { outEl.textContent += s; } });
    py.setStdin({ read: function () { return lines.length ? lines.shift() + "\n" : "\n"; } });
    try {
      py.runPython(code);
    } catch (e) {
      outEl.textContent += "\nERRO: " + (e && e.message || e);
    }
    if (outEl.textContent === "") outEl.textContent = "(sem saída)";
    dbgMarkRun();
  }).catch(function (e) {
    outEl.textContent = "ERRO: " + (e && e.message || e);
  });
}

function dbgRenderWeb() {
  const ta = document.getElementById("dbgCode");
  const wrap = document.getElementById("dbgFrameWrap");
  if (!ta || !wrap) return;
  wrap.style.display = "block";
  let frame = document.getElementById("dbgFrame");
  if (!frame) {
    frame = document.createElement("iframe");
    frame.id = "dbgFrame";
    frame.className = "dbg-frame-iframe";
    frame.setAttribute("sandbox", "allow-scripts");
    wrap.appendChild(frame);
  }
  const code = ta.value;
  let doc;
  if (/<\/html>/i.test(code)) {
    doc = code;
  } else if (/<style\b/i.test(code) || /<body\b/i.test(code) || /<\/?[a-z]+/i.test(code)) {
    const st = /<style\b[\s\S]*?<\/style>/i.exec(code) || "";
    const body = code.replace(/<style\b[\s\S]*?<\/style>/gi, "").trim();
    doc = '<!DOCTYPE html><html lang="pt-BR"><head><meta charset="UTF-8"><title>Visualização</title>' +
      (st) + "</head><body>" + body + "</body></html>";
  } else {
    doc = '<!DOCTYPE html><html lang="pt-BR"><head><meta charset="UTF-8"><title>Visualização</title><style>' +
      code + "</style></head><body></body></html>";
  }
  frame.srcdoc = doc;
  dbgMarkRun();
}

/* ----------------------------------------------------------------
 * Tema claro/escuro
 * ---------------------------------------------------------------- */
const THEME_KEY = "estudarCode_theme";

function applyTheme(t) {
  const dark = t === "dark";
  document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
  document.documentElement.classList.toggle("dark", dark);
  const b = document.getElementById("themeBtn");
  if (b) {
    const icon = b.querySelector(".theme-icon");
    const txt = b.querySelector(".theme-text");
    if (icon) {
      const name = t === "dark" ? "sun" : "moon";
      icon.innerHTML = (window.EstudarIcons && window.EstudarIcons[name]) || "";
    }
    if (txt) txt.textContent = t === "dark" ? "claro" : "escuro";
  }
}

function toggleTheme() {
  const cur = document.documentElement.getAttribute("data-theme") || "light";
  const next = cur === "dark" ? "light" : "dark";
  localStorage.setItem(THEME_KEY, next);
  applyTheme(next);
}

/* ----------------------------------------------------------------
 * Inicialização
 * ---------------------------------------------------------------- */
const themeBtn = document.getElementById("themeBtn");
if (themeBtn) themeBtn.addEventListener("click", toggleTheme);
applyTheme(localStorage.getItem(THEME_KEY) || "light");

const sideTab = document.getElementById("sideTab");
if (sideTab) sideTab.addEventListener("click", toggleSidebar);
const sideBackdrop = document.getElementById("sideBackdrop");
if (sideBackdrop) sideBackdrop.addEventListener("click", function () { setSidebarOpen(false); });
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") setSidebarOpen(false);
});

/* ----------------------------------------------------------------
 * Autenticação obrigatória + sincronização com a nuvem
 * ---------------------------------------------------------------- */
const authScreen = document.getElementById("authScreen");
const authForm = document.getElementById("authForm");
const authEmail = document.getElementById("authEmail");
const authPass = document.getElementById("authPass");
const authSubmit = document.getElementById("authSubmit");
const authToggle = document.getElementById("authToggle");
const authForgot = document.getElementById("authForgot");
const authMsg = document.getElementById("authMsg");
const authConfigError = document.getElementById("authConfigError");
const authConfigErrorText = document.getElementById("authConfigErrorText");

let authMode = "login"; // login | signup | forgot

function showAuthMsg(text, type) {
  if (!authMsg) return;
  authMsg.textContent = text;
  authMsg.className = "auth-msg " + (type || "info");
  authMsg.hidden = false;
}

function hideAuthMsg() { if (authMsg) authMsg.hidden = true; }

function renderAuthScreen() {
  const cfgErr = (S && S.configError) ? S.configError() : null;
  if (authConfigError) {
    authConfigError.hidden = !cfgErr;   // esconde quando NÃO há erro de config
    if (authConfigErrorText && cfgErr) authConfigErrorText.textContent = cfgErr;
  }
  if (authSubmit) authSubmit.disabled = !!cfgErr;
  if (authToggle) authToggle.hidden = !!cfgErr;
  if (authForgot) authForgot.hidden = !!cfgErr;
  hideAuthMsg();
}

function syncLocalToCloud() {
  // Re-sincroniza o gam e respostas após merge/auth (fonte de verdade é a nuvem agora)
  if (S) {
    const g = S.getGam ? S.getGam() : null;
    if (g && typeof g.hearts === "number") gam = Object.assign(freshGam(), g);
    // progresso em memória já é o espelho do S
  }
}

// Mostra o popup uma única vez após o login quando o usuário ainda não fez
// nenhuma atividade no site (nenhuma resposta, cartão, execução ou XP).
let _firstActivityPopupShown = false;
function maybeShowFirstActivityPopup() {
  if (_firstActivityPopupShown) return;
  // Aguarda o merge local→nuvem terminar para não exibir o aviso erradamente
  // antes de o progresso existente da conta ser carregado.
  if (S && S.getMergeStatus && S.getMergeStatus() === "merging") return;
  _firstActivityPopupShown = true;
  if (hasDoneAnyActivity()) return;
  openOverlay(
    '<h3 class="ov-title">Você ainda não fez nenhuma atividade</h3>' +
    '<p class="ov-sub">Para acender o foguinho (streak), responda a um quiz, revise com cartões ou use o depurador. Seu progresso fica salvo na sua conta.</p>' +
    '<div class="flash-actions"><button class="btn" onclick="closeOverlay(); openCourseStart(\'' + firstCourseKey() + '\')">Começar a estudar</button></div>'
  );
}

function firstCourseKey() {
  for (const key in DATA) return key;
  return "lp";
}

async function handleAuthChange(ev) {
  const logged = ev && ev.user;
  const tagline = document.getElementById("authTagline");
  if (logged) {
    syncLocalToCloud();
    if (authScreen) {
      authScreen.hidden = true;
      authScreen.setAttribute("data-logged", "true");
    }
    maybeShowFirstActivityPopup();
    checkFireStatus();
  } else {
    // Sem sessão confirmada: exige login (nunca "entra direto").
    if (authScreen) {
      authScreen.hidden = false;
      authScreen.removeAttribute("data-logged");
    }
    if (tagline) tagline.textContent = "Entre para manter seu progresso em qualquer máquina.";
    // Estado do formulário (habilita/desabilita conforme config)
    renderAuthScreen();
  }
  renderStats();
  renderAll();
}

if (authForm) {
  authForm.addEventListener("submit", async function (e) {
    e.preventDefault();
    const email = authEmail.value.trim();
    const pass = authPass.value;
    try {
      hideAuthMsg();
      if (authMode === "forgot") {
        authSubmit.disabled = true;
        authSubmit.textContent = "Enviando...";
        if (S && S.resetPassword) await S.resetPassword(email);
        showAuthMsg("Enviamos um link de redefinição de senha para o seu e-mail (se ele existir).", "info");
        setAuthMode("login");
      } else {
        authSubmit.disabled = true;
        authSubmit.textContent = authMode === "signup" ? "Criando..." : "Entrando...";
        const data = authMode === "signup"
          ? await S.signUp(email, pass)
          : await S.signIn(email, pass);
        if (authMode === "signup") {
          showAuthMsg("Conta criada! Confirme seu e-mail se necessário e entre.", "info");
          setAuthMode("login");
        }
        // login com sucesso fecha a tela via handleAuthChange
      }
    } catch (err) {
      showAuthMsg(err.message || "Não foi possível realizar a ação.", "error");
    } finally {
      authSubmit.disabled = false;
      authSubmit.textContent = authMode === "signup" ? "Criar conta" : "Entrar";
    }
  });
}

function setAuthMode(mode) {
  authMode = mode;
  const isLogin = mode === "login";
  const isForgot = mode === "forgot";
  if (authSubmit) {
    authSubmit.textContent = isForgot ? "Enviar link" : isLogin ? "Entrar" : "Criar conta";
  }
  if (authPass) {
    authPass.style.display = isForgot ? "none" : "";
    authPass.required = !isForgot;
    authPass.setAttribute("placeholder", !isLogin && !isForgot ? "Crie uma senha (mín. 6 caracteres)" : "Digite sua senha");
  }
  if (authToggle) authToggle.innerHTML = isForgot
    ? "Voltar para o login"
    : isLogin
      ? "Não tem conta? <b>Criar conta</b>"
      : "Já tem conta? <b>Entrar</b>";
  if (authForgot) authForgot.hidden = !isLogin;
  hideAuthMsg();
}

if (authToggle) authToggle.addEventListener("click", function () {
  setAuthMode(authMode === "login" ? "signup" : "login");
});
if (authForgot) authForgot.addEventListener("click", function () {
  setAuthMode("forgot");
});

const logoutBtn = document.getElementById("logoutBtn");
if (logoutBtn) logoutBtn.addEventListener("click", async function () {
  if (S) await S.signOut();
});

if (S && S.onAuthChange) {
  S.onAuthChange(handleAuthChange);
}

// Defesa em camadas: se o cliente estiver sem config (S.ready=false), o notify
// inicial pode ter sido perdido antes deste listener. Força o estado "sem sessão".
if (S && !S.ready) {
  handleAuthChange({ user: null });
}

renderAuthScreen();

renderStats();
renderAll();