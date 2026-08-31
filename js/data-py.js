/* Curso: Python */
window.COURSES = window.COURSES || {};
window.COURSES.py = {
  name: "Python",
  topics: [
    {
      id: "py-intro",
      title: "Introdução ao Python",
      subtitle: "Uma linguagem simples, legível e superversátil.",
      blocks: [
        { t: "h", h: "O que é Python?" },
        { t: "p", p: "Python é uma linguagem de alto nível, interpretada e famosa pela sintaxe simples e legível. É usada em desenvolvimento web, análise de dados, inteligência artificial, automação e scripts — uma das melhores opções para quem está começando." },
        { t: "h", h: "Instalando e rodando" },
        { t: "p", p: "Baixe do site oficial (python.org), instale e, no terminal (ou no IDLE), digite python para abrir o prompt. O primeiro programa clássico:" },
        { t: "code", c: String.raw`print("Olá, mundo!")`, lang: "python" },
        { t: "h", h: "Comentários" },
        { t: "p", p: "Comentários são ignorados pelo Python e servem para documentar o código. Eles começam com #:" },
        { t: "code", c: String.raw`# isso é um comentário
print("Olá, mundo!")   # comentário no fim da linha`, lang: "python" },
        { t: "h", h: "Por que gostar do Python?" },
        { t: "lst", items: [
          "Sintaxe próxima do português, fácil de ler.",
          "Comunidade enorme e documentação excelente.",
          "Bibliotecas para tudo: web, dados, IA, jogos.",
          "Ótima primeira linguagem para quem está começando."
        ]},
        { t: "note", p: "Python é interpretado: o código é executado linha a linha, sem um passo de compilação separado (por trás dos panos há um compilador, mas você não precisa se preocupar com isso)." }
      ],
      quiz: [
        { q: "O comando que exibe texto na tela em Python é:", opts: ["println()", "echo()", "print()", "put()"], ans: 2, expl: "A função print() exibe valores no terminal, o equivalente ao printf do C." },
        { q: "Como escrevemos um comentário em Python?", opts: ["// texto", "/* texto */", "# texto", "<!-- texto -->"], ans: 2, expl: "Em Python, o # marca comentário até o fim da linha." },
        { q: "Python é famoso principalmente por:", opts: ["Ser a linguagem mais antiga do mundo.", "Ter sintaxe simples e legível.", "Não poder rodar no navegador.", "Exigir declaração de tipos em toda variável."], ans: 1, expl: "A leitura simples e amigável é uma das maiores marcas do Python." },
        { q: "Python é uma linguagem:", opts: ["Compilada com passos manuais de build.", "Interpretada, executada linha a linha.", "Exclusiva para criação de jogos.", "Que só roda em navegadores."], ans: 1, expl: "Python é interpretado: o código é executado linha a linha, sem um passo de compilação separado." },
        { q: "Qual comando escreve um comentário no fim da linha?", opts: ["print(# texto)", "// texto", "# texto", "/* texto */"], ans: 2, expl: "O # marca um comentário até o fim da linha, podendo ser usado no fim dela também." }
      ]
    },
    {
      id: "py-variaveis",
      title: "Variáveis e Entrada de Dados",
      subtitle: "Criando variáveis sem declarar tipo e lendo valores do usuário.",
      blocks: [
        { t: "h", h: "Variáveis em Python" },
        { t: "p", p: "Em Python, não é preciso declarar o tipo da variável: basta atribuir um valor com o sinal de igual. O tipo é definido automaticamente." },
        { t: "code", c: String.raw`idade = 18
nome = "Gabriel"
altura = 1.75
aprovado = True

print(idade)
print(nome)
print(altura)
print(aprovado)`, lang: "python" },
        { t: "h", h: "Tipos básicos" },
        { t: "lst", items: [
          "int: inteiros (18, -3, 1000).",
          "float: decimais (1.75, 3.14).",
          "str: textos (\"Gabriel\", \"a\").",
          "bool: lógicos (True ou False).",
          "None: representa a ausência de valor."
        ]},
        { t: "h", h: "Lendo dados com input()" },
        { t: "p", p: "A função input() lê o que o usuário digitou. Importante: ela SEMPRE devolve texto (str). Para números, converta com int() ou float()." },
        { t: "code", c: String.raw`nome = input("Como você se chama? ")
idade = int(input("Qual a sua idade? "))

print("Olá,", nome)
print("Você já viveu", idade * 12, "meses.")`, lang: "python" },
        { t: "h", h: "F-strings (Python 3.6+)" },
        { t: "p", p: "As f-strings permitem inserir variáveis dentro do texto de forma bem legível:" },
        { t: "code", c: String.raw`nome = "Ana"
idade = 20

print(f"{nome} tem {idade} anos.")` , lang: "python" },
        { t: "note", p: "input() sempre retorna texto. Para fazer contas, é obrigatório converter com int() ou float(), senão o Python tenta juntar strings e gera erro." },
        { t: "warn", p: "Nunca compare um texto com um número sem converter. \"18\" == 18 é False, e idade criada por input() é texto, não número." }
      ],
      quiz: [
        { q: "Em Python, para criar uma variável fazemos:", opts: ["int idade = 18;", "basta escrever idade = 18", "$idade = 18", "var idade = 18"], ans: 1, expl: "Em Python a atribuição nome = valor já define a variável sem declarar tipo." },
        { q: "A função input() sempre retorna um dado do tipo:", opts: ["int", "float", "str", "bool"], ans: 2, expl: "input() devolve texto; para números é preciso converter com int() ou float()." },
        { q: "True e False, em Python, são valores do tipo:", opts: ["str", "int", "bool", "none"], ans: 2, expl: "True e False pertencem ao tipo bool (booleano), usados em condições." },
        { q: "O que imprime f\"{nome} tem {idade} anos.\" com nome=\"Ana\" e idade=20?", opts: ["nome tem idade anos.", "{nome} tem {idade} anos.", "Ana tem 20 anos.", "Erro de compilação."], ans: 2, expl: "As f-strings substituem as {variáveis} pelos seus valores, com grande legibilidade." },
        { q: "Qual destes é um valor do tipo float?", opts: ["18", "True", "3.14", "\"Gabriel\""], ans: 2, expl: "3.14 tem casas decimais, caracterizando o tipo float. 18 é int, True é bool e o texto é str." },
        { q: "O que acontece se fizermos idade = int(input(\"...\"))?", opts: ["idade vira texto sempre.", "idade vira um número inteiro, após a conversão.", "O programa sempre dá erro.", "input() para de funcionar."], ans: 1, expl: "input() devolve str, mas int() a converte em número inteiro, permitindo fazer contas com idade." }
      ]
    },
    {
      id: "py-operadores",
      title: "Operadores",
      subtitle: "Aritméticos, relacionais e lógicos em Python.",
      blocks: [
        { t: "h", h: "Operadores aritméticos" },
        { t: "lst", items: [
          "+ soma         ex.: 5 + 3 = 8",
          "- subtração    ex.: 5 - 3 = 2",
          "* multiplicação  ex.: 5 * 3 = 15",
          "/ divisão real  ex.: 10 / 3 = 3.3333",
          "// divisão inteira  ex.: 10 // 3 = 3",
          "% resto (módulo)  ex.: 10 % 3 = 1",
          "** potência    ex.: 2 ** 3 = 8"
        ]},
        { t: "code", c: String.raw`print(10 / 3)    # 3.3333...
print(10 // 3)   # 3
print(10 % 3)    # 1
print(2 ** 3)    # 8`, lang: "python" },
        { t: "h", h: "Operadores relacionais" },
        { t: "p", p: "Comparam dois valores e o resultado é sempre bool: >, <, >=, <=, == (igual), != (diferente)." },
        { t: "h", h: "Operadores lógicos" },
        { t: "lst", items: [
          "and: verdadeiro somente se as duas condições forem verdadeiras.",
          "or: verdadeiro se pelo menos uma for verdadeira.",
          "not: inverte (True vira False e vice-versa)."
        ]},
        { t: "code", c: String.raw`idade = 20
tem_carteira = True

if idade >= 18 and tem_carteira:
    print("Pode dirigir.")
else:
    print("Não pode dirigir.")`, lang: "python" },
        { t: "note", p: "Precedência: primeiro (), depois **, depois * / // %, depois + -, depois relacionais e por fim and / or / not." }
      ],
      quiz: [
        { q: "Qual é o resultado de 10 // 3?", opts: ["3.3333", "3", "1", "Erro"], ans: 1, expl: "// é a divisão inteira: descarta as casas decimais e devolve 3." },
        { q: "Qual é o resultado de 2 ** 3?", opts: ["6", "8", "9", "5"], ans: 1, expl: "** é potência: 2 elevado a 3 = 8." },
        { q: "O operador lógico and retorna True quando:", opts: ["Qualquer condição for verdadeira.", "As duas condições forem verdadeiras.", "Nenhuma condição for verdadeira.", "As duas forem falsas."], ans: 1, expl: "No and, basta uma condição falsa para o resultado total ser False." },
        { q: "Qual é o resultado de 10 % 3?", opts: ["3", "1", "0.333", "10"], ans: 1, expl: "% é o resto da divisão: 10 dividido por 3 deixa resto 1." },
        { q: "O operador relacional que compara igualdade é:", opts: ["=", "!=", "==", ":="], ans: 2, expl: "== testa igualdade; = é atribuição e != testa diferença." }
      ]
    },
    {
      id: "py-condicionais",
      title: "Condicionais em Python",
      subtitle: "if, elif e else — decisões com indentação.",
      blocks: [
        { t: "h", h: "if / elif / else" },
        { t: "code", c: String.raw`nota = float(input("Digite a nota: "))

if nota >= 6:
    print("Aprovado!")
elif nota >= 4:
    print("Recuperação.")
else:
    print("Reprovado.")`, lang: "python" },
        { t: "h", h: "A indentação é obrigatória" },
        { t: "p", p: "Em Python, os blocos são definidos pelos espaços no início da linha (por convenção, 4 espaços). Não existe { } como no C: indentar é parte da sintaxe!" },
        { t: "code", c: String.raw`idade = int(input("Idade: "))

if idade >= 18:
    print("Maior de idade.")
else:
    print("Menor de idade.")`, lang: "python" },
        { t: "note", p: "elif é a combinação de \"else if\": testa uma nova condição quando a anterior falhou. Você pode encadear quantos elif quiser." },
        { t: "warn", p: "Misturar espaços e TAB no mesmo bloco gera erro de identação (IndentationError). Use sempre o mesmo tipo de indentação." }
      ],
      quiz: [
        { q: "Como o Python identifica os blocos?", opts: ["Com chaves { }", "Com indentação (espaços)", "Com a palavra inicio", "Com ponto e vírgula"], ans: 1, expl: "Em Python, a indentação é obrigatória e define os blocos de código." },
        { q: "O elif serve para:", opts: ["Encerrar o programa.", "Testar uma nova condição quando o if for falso.", "Definir uma função.", "Imprimir na tela."], ans: 1, expl: "elif é o \"senão se\": uma nova condição testada só quando as anteriores falharam." },
        { q: "Com nota = 5, o primeiro exemplo imprime:", opts: ["Aprovado!", "Recuperação.", "Reprovado.", "Nada."], ans: 1, expl: "5 não é >= 6, mas é >= 4, então cai no elif: Recuperação." },
        { q: "Qual desvio acontece ao misturar espaços e TAB no mesmo bloco?", opts: ["O Python usa o primeiro caractere.", "Gera IndentationError.", "O bloco é ignorado.", "O programa vira maiúsculas."], ans: 1, expl: "Misturar espaços e TAB no mesmo bloco lança IndentationError; use um único tipo de indentação." },
        { q: "Quantas condições o elif permite encadear após um if?", opts: ["Nenhuma.", "Apenas uma.", "Quantas forem necessárias.", "No máximo duas."], ans: 2, expl: "O elif é o \"senão se\" e você pode encadear quantos quiser após o if inicial." }
      ]
    },
    {
      id: "py-lacos",
      title: "Laços em Python",
      subtitle: "for, range, while, break e continue.",
      blocks: [
        { t: "h", h: "for com range" },
        { t: "p", p: "O for percorre uma sequência. range(1, 6) gera os valores de 1 até 5 (o último não é incluído):" },
        { t: "code", c: String.raw`for i in range(1, 6):
    print(i)   # 1 2 3 4 5`, lang: "python" },
        { t: "h", h: "for em uma lista" },
        { t: "code", c: String.raw`alunos = ["Ana", "Bia", "Ivo"]
for aluno in alunos:
    print(aluno)`, lang: "python" },
        { t: "h", h: "while" },
        { t: "p", p: "Repete enquanto a condição for verdadeira. Cuidado: algo dentro do laço precisa mudar a condição." },
        { t: "code", c: String.raw`senha = ""
while senha != "1234":
    senha = input("Digite a senha: ")

print("Acesso liberado!")`, lang: "python" },
        { t: "h", h: "break e continue" },
        { t: "lst", items: [
          "break: encerra o laço imediatamente.",
          "continue: pula para a próxima repetição, ignorando o resto do bloco."
        ]},
        { t: "code", c: String.raw`for i in range(1, 10):
    if i == 5:
        break      # para no 5
    print(i)`, lang: "python" },
        { t: "warn", p: "Loop infinito: se a condição do while nunca ficar falsa, o programa nunca termina. Sempre garanta que a condição muda dentro do laço." }
      ],
      quiz: [
        { q: "Quantos números imprime range(1, 6)?", opts: ["5 (1, 2, 3, 4, 5)", "6 (1 ... 6)", "4 (1, 2, 3, 4)", "Erro"], ans: 0, expl: "range(1, 6) vai de 1 até 5, pois o valor final não é incluído." },
        { q: "Qual palavra encerra o laço imediatamente?", opts: ["continue", "pass", "break", "end"], ans: 2, expl: "break sai do laço na hora; continue apenas pula para a próxima volta." },
        { q: "O while repete:", opts: ["Um número fixo de vezes.", "Enquanto a condição for verdadeira.", "Sempre uma vez.", "Até o usuário fechar o programa."], ans: 1, expl: "O while testa a condição antes de cada repetição e continua enquanto ela for verdadeira." },
        { q: "O que faz a palavra continue em um laço?", opts: ["Encerra o laço imediatamente.", "Pula para a próxima repetição.", "Reinicia o programa.", "Cria uma variável."], ans: 1, expl: "continue interrompe a volta atual e salta para a próxima iteração do laço." },
        { q: "O que ocorre se a condição de um while nunca ficar falsa?", opts: ["O programa termina normalmente.", "Gera um loop infinito.", "O laço é pulado.", "Começa outra vez do zero."], ans: 1, expl: "Sem algo dentro do corpo para mudar a condição, o while repete para sempre — um loop infinito." }
      ]
    },
    {
      id: "py-listas",
      title: "Listas e Strings",
      subtitle: "Agrupando valores e manipulando textos.",
      blocks: [
        { t: "h", h: "Listas" },
        { t: "p", p: "Listas guardam vários valores. A indexação começa em 0, e podemos adicionar itens com append e medir o tamanho com len." },
        { t: "code", c: String.raw`notas = [7, 8, 6]
notas.append(9)

print(notas[0])     # 7
print(len(notas))   # 4

soma = 0
for n in notas:
    soma += n

media = soma / len(notas)
print(f"Média: {media:.2f}")`, lang: "python" },
        { t: "h", h: "Strings também são indexadas" },
        { t: "p", p: "Um texto é uma sequência de caracteres: podemos acessar posições, fatiar e medir o tamanho." },
        { t: "code", c: String.raw`nome = "Gabriel"
print(nome[0])      # G
print(nome[2])      # b
print(nome[2:5])    # bri  (do índice 2 até o 4)
print(len(nome))    # 7`, lang: "python" },
        { t: "h", h: "Métodos úteis de string" },
        { t: "lst", items: [
          "upper() / lower(): texto em maiúsculas / minúsculas.",
          "strip(): remove espaços das pontas.",
          "split(): separa o texto em uma lista.",
          "replace(a, b): troca partes do texto."
        ]},
        { t: "note", p: "Cuidado com o fatiamento [inicio:fim]: o caractere do fim não é incluído. nome[2:5] pega os índices 2, 3 e 4." }
      ],
      quiz: [
        { q: "A primeira posição de uma lista é o índice:", opts: ["0", "1", "-1", "inicio"], ans: 0, expl: "Em Python (como em C), a indexação começa em 0." },
        { q: "O método append serve para:", opts: ["Remover o último item.", "Adicionar um item no final da lista.", "Ordenar a lista.", "Medir o tamanho."], ans: 1, expl: "append() acrescenta um elemento ao final da lista." },
        { q: "len(nome) retorna:", opts: ["A última letra.", "O tamanho (quantidade de caracteres).", "A primeira letra.", "Um erro."], ans: 1, expl: "len() devolve quantos elementos há na lista ou quantos caracteres há no texto." },
        { q: "Dado nome = \"Gabriel\", o que retorna nome[2:5]?", opts: ["\"Gabr\"", "\"bri\"", "\"riel\"", "\"abri\""], ans: 1, expl: "O fatiamento [2:5] pega os índices 2, 3 e 4 — as letras b, r e i, formando \"bri\"." },
        { q: "Qual método remove espaços das pontas de uma string?", opts: ["upper()", "strip()", "split()", "append()"], ans: 1, expl: "strip() remove os espaços (ou quebras de linha) das extremidades do texto." }
      ]
    },
    {
      id: "py-funcoes",
      title: "Funções (def)",
      subtitle: "Criando blocos reutilizáveis com def e return.",
      blocks: [
        { t: "h", h: "Criando funções" },
        { t: "p", p: "Funções agrupam lógica com nome, parâmetros e retorno. Declaramos com def e devolvemos valores com return." },
        { t: "code", c: String.raw`def quadrado(x):
    return x * x

def saudacao(nome):
    print(f"Olá, {nome}!")

saudacao("Ana")
print(quadrado(4))   # 16`, lang: "python" },
        { t: "h", h: "Parâmetros com valor padrão" },
        { t: "code", c: String.raw`def area(base, altura=1):
    return base * altura

print(area(5))      # 5   (altura usa o padrão 1)
print(area(5, 3))   # 15`, lang: "python" },
        { t: "h", h: "Por que usar funções?" },
        { t: "lst", items: [
          "Reutilizar código sem duplicar.",
          "Quebrar problemas grandes em pedaços pequenos.",
          "Facilitar testes e correções (função por função)."
        ]},
        { t: "note", p: "return encerra imediatamente a função e devolve o valor para quem chamou. Se não houver return, a função devolve None." }
      ],
      quiz: [
        { q: "Como declaramos uma função em Python?", opts: ["function nome()", "def nome():", "funcao nome()", "public nome()"], ans: 1, expl: "A palavra-chave é def, seguida do nome, parênteses e dois pontos." },
        { q: "O que acontece se chamar area(5) sem passar altura?", opts: ["Erro", "Use 0", "Usa o valor padrão altura=1", "Usa None"], ans: 2, expl: "Quando o parâmetro tem valor padrão, ele é usado caso nada seja passado." },
        { q: "Em uma função, o comando return:", opts: ["Imprime um valor.", "Devolve um valor a quem chamou e encerra a função.", "Reinicia o programa.", "Declara uma variável."], ans: 1, expl: "return envia o resultado de volta e encerra a execução da função." },
        { q: "Qual o resultado da chamada quadrado(4) com def quadrado(x): return x * x?", opts: ["4", "8", "16", "None"], ans: 2, expl: "quadrado(4) devolve 4 * 4 = 16, o valor retornado pela função." },
        { q: "O que uma função devolve quando termina sem return?", opts: ["0", "True", "None", "Um erro"], ans: 2, expl: "Sem return, a função devolve None, indicando ausência de valor de retorno." }
      ]
    },
    {
      id: "py-dicionarios",
      title: "Dicionários e Tuplas",
      subtitle: "Pares chave: valor com acesso seguro e estruturas imutáveis.",
      blocks: [
        { t: "h", h: "Dicionários: pares chave: valor" },
        { t: "p", p: "Um dicionário guarda pares chave: valor. Diferente da lista (que usa índices numéricos), a localização é feita pela chave. O literal é escrito entre chaves { } com pares separados por vírgula. Chaves são imutáveis (geralmente strings); valores podem ser qualquer objeto." },
        { t: "code", c: String.raw`notas = {"Ana": 8.5, "Bia": 7.0, "Ivo": 9.0}

print(notas["Ana"])      # 8.5
notas["Ivo"] = 9.5       # altera o valor de uma chave existente
notas["Lia"] = 6.0       # chave nova: adiciona o par
print(notas)`, lang: "python" },
        { t: "h", h: "Acesso seguro, inspeção e iteração" },
        { t: "p", p: "notas[\"chave\"] funciona para chave existente, mas chave inexistente lança KeyError e derruba o programa. Para casos em que a ausência é plausível, use .get(chave) ou .get(chave, default)." },
        { t: "code", c: String.raw`aluno = {"nome": "Ana", "nota": 8.5}

print(aluno.get("cidade", "não informada"))  # default: valor passado
print(list(aluno.keys()))     # ["nome", "nota"]
print(list(aluno.values()))   # ["Ana", 8.5]
print(list(aluno.items()))    # [("nome", "Ana"), ("nota", 8.5)]

for chave, valor in aluno.items():
    print(f"{chave} = {valor}")`, lang: "python" },
        { t: "h", h: "Dicionários aninhados e tuplas" },
        { t: "p", p: "Valores podem ser outros dicionários, como notas por aluno. Já as tuplas são coleções imutáveis: criadas, não permitem alterar, adicionar ou remover elementos — uma garantia para dados que não queremos ver mudados por acidente." },
        { t: "code", c: String.raw`turma = {
    "Ana": {"nota1": 8.0, "nota2": 7.5},
    "Ivo": {"nota1": 6.0, "nota2": 9.0},
}

for nome, notas in turma.items():
    media = sum(notas.values()) / len(notas)
    print(f"{nome}: media {media:.1f}")

ponto = (3, 4)
x, y = ponto          # desempacotamento
print(x, y, x + y)    # 3 4 7

coordenadas = (10, 20, 30)
a, b, c = coordenadas
print(a + b + c)      # 60`, lang: "python" },
        { t: "note", p: "Desde o Python 3.7, a ordem de inserção das chaves é preservada. Antes disso a ordem dos dicionários não era garantida — não programe dependendo dela se a compatibilidade antiga importar." },
        { t: "warn", p: "Chave inexistente com colchetes lança KeyError e encerra o programa. Prefira .get(chave, default) quando a ausência for plausível, e lembre: em dict aninhado, turma[\"Ana\"][\"nota1\"] altera uma nota, mas turma[\"Ana\"] = {} substitui o dicionário inteiro da Ana." }
      ],
      quiz: [
        { q: "Dado d = {\"a\": 1, \"b\": 2}, o que acontece ao avaliar d[\"c\"]?", opts: ["Devolve None.", "Devolve 0.", "Lança KeyError.", "Devolve a string \"c\"."], ans: 2, expl: "Acessar chave inexistente com colchetes lança KeyError. Para evitar o erro, use d.get(\"c\") ou d.get(\"c\", valor_padrao)." },
        { q: "Ainda com d = {\"a\": 1, \"b\": 2}, qual é o resultado de d.get(\"b\", 99)?", opts: ["99", "2", "None", "KeyError"], ans: 1, expl: "get devolve o valor da chave quando ela existe; o segundo argumento é o padrão usado somente quando a chave NÃO existe. Com a chave \"b\" presente, o resultado é 2." },
        { q: "Em `for chave, valor in d.items():`, a variável chave recebe, a cada iteração:", opts: ["Um índice numérico.", "Uma tupla (chave, valor).", "O valor associado à chave.", "A chave (o nome) do par."], ans: 3, expl: "items() devolve tuplas (chave, valor); percorrer com duas variáveis faz o desempacotamento automático a cada volta: chave recebe o primeiro elemento, valor o segundo." },
        { q: "Sobre tuplas, qual afirmação está correta?", opts: ["São mutáveis, como listas.", "Não podem ser desempacotadas.", "Após t = (1, 2), a expressão t[0] = 9 lança TypeError.", "Precisam de pelo menos três elementos."], ans: 2, expl: "Tuplas são imutáveis: tentar atribuir a um índice lança TypeError. Desempacotamento como a, b = t funciona normalmente, e o uso cai bem para dados que não podem mudar." },
        { q: "Com notas = {\"Ana\": 8.5}, como adicionaríamos o par para \"Ivo\" com 9.0?", opts: ["notas.append(\"Ivo\": 9.0)", "notas[\"Ivo\"] = 9.0", "notas.add(\"Ivo\", 9.0)", "notas[0] = \"Ivo\""], ans: 1, expl: "Atribuir a uma chave nova com colchetes adiciona o par ao dicionário: notas[\"Ivo\"] = 9.0." },
        { q: "Qual método devolve as chaves de um dicionário?", opts: ["keys()", "values()", "items()", "append()"], ans: 0, expl: "keys() retorna as chaves; values() os valores e items() os pares como tuplas." }
      ]
    },
    {
      id: "py-excecoes",
      title: "Tratamento de Erros (try/except)",
      subtitle: "Erros não derrubam mais o programa: captura, lançar e finalizar.",
      blocks: [
        { t: "h", h: "Por que tratar erros?" },
        { t: "p", p: "Um programa robusto não termina no primeiro problema. Exceções interrompem o fluxo quando algo dá errado — e o try/except decide o que fazer nesses casos. As mais comuns: ValueError (valor incompatível), ZeroDivisionError (divisão por zero), KeyError (chave de dict inexistente) e IndexError (índice de lista fora do intervalo)." },
        { t: "code", c: String.raw`texto = "abc"

try:
    numero = int(texto)      # aqui acontece ValueError
    print(numero * 2)
except ValueError:
    print("Erro: 'abc' não vira número inteiro.")`, lang: "python" },
        { t: "h", h: "else, finally e capturar a mensagem" },
        { t: "p", p: "O else roda somente quando nenhum erro ocorreu; o finally roda sempre — mesmo que o except lance outro erro ou exista um return. Com `as e`, guardamos o objeto da exceção e acessamos sua mensagem." },
        { t: "code", c: String.raw`valores = ["10", "abc", "0"]

for item in valores:
    try:
        num = int(item)
        resultado = 10 / num
    except ValueError as e:
        print(f"Valor inválido: {e}")
    except ZeroDivisionError:
        print("Divisão por zero!")
    else:
        print("Resultado:", resultado)
    finally:
        print("--- (finally sempre roda)")`, lang: "python" },
        { t: "h", h: "raise: lançar exceções de propósito" },
        { t: "p", p: "Nem sempre o erro vem de fora. Quem escreve uma função pode exigi-lo com raise, impedindo que um valor inválido circule pelo programa e obrigando o chamador a decidir como tratar." },
        { t: "code", c: String.raw`def validar_nota(valor):
    if valor < 0 or valor > 10:
        raise ValueError("Nota fora do intervalo 0-10")
    return valor

try:
    validar_nota(12)
except ValueError as e:
    print("Capturado:", e)

print(validar_nota(7))   # 7`, lang: "python" },
        { t: "note", p: "A ordem dos except importa: o Python usa o primeiro bloco cujo tipo de exceção corresponde. Por isso, exceções específicas antes das gerais (Exceção no fim). O finally é o lugar certo para fechar arquivos, conexões ou liberar recursos." },
        { t: "warn", p: "Evite `except:` puro (sem nomear a exceção): ele captura tudo, inclusive KeyboardInterrupt e erros de programação, escondendo bugs reais. Capture exceções específicas e mantenha o try no menor escopo possível." }
      ],
      quiz: [
        { q: "Qual exceção é lançada pela chamada int(\"12.5\")?", opts: ["ZeroDivisionError", "ValueError", "IndexError", "TypeError"], ans: 1, expl: "int() não converte texto com separador decimal nesse formato; o argumento tem conteúdo inválido para a conversão, gerando ValueError." },
        { q: "Em um try/except, o bloco else é executado quando:", opts: ["Sempre, antes do finally.", "Somente quando nenhuma exceção foi lançada.", "Somente quando uma exceção foi capturada.", "Nunca."], ans: 1, expl: "else roda apenas no fluxo sem erro; o finally, por sua vez, roda incondicionalmente, com ou sem exceção." },
        { q: "O que `except ValueError as e` vincula à variável e?", opts: ["O número da linha do erro.", "A pilha de chamadas inteira.", "O objeto da exceção, de onde vem a mensagem.", "O programa inteiro, para reiniciá-lo."], ans: 2, expl: "`as e` captura o objeto da exceção; imprimir e (ou str(e)) mostra a mensagem que detalha o problema — no exemplo, o literal inválido na conversão." },
        { q: "Por que evitar `except:` sem especificar a exceção?", opts: ["Porque a sintaxe não existe no Python.", "Porque captura qualquer erro, incluindo erros de programação e KeyboardInterrupt.", "Porque só consegue capturar SyntaxError.", "Porque é cerca de três vezes mais lento."], ans: 1, expl: "except puro engole qualquer exceção, transformando bugs reais em comportamento silencioso. Prefira exceções específicas, cada bloco responsável por um cenário." },
        { q: "Qual exceção é lançada ao dividir um número por zero?", opts: ["ValueError", "KeyError", "ZeroDivisionError", "IndexError"], ans: 2, expl: "Divisão por zero em Python lança ZeroDivisionError, que pode ser capturada com try/except." },
        { q: "O que o comando raise faz?", opts: ["Captura uma exceção.", "Lança uma exceção de propósito.", "Ignora todos os erros.", "Termina o programa silenciosamente."], ans: 1, expl: "raise lança (gera) uma exceção deliberadamente, obrigando o chamador a decidir como tratá-la." }
      ]
    },
    {
      id: "py-compreensoes",
      title: "List Comprehensions e Lambda",
      subtitle: "Construir listas em uma linha e funções anônimas.",
      blocks: [
        { t: "h", h: "List comprehensions" },
        { t: "p", p: "Uma list comprehension cria uma nova lista aplicando uma expressão a cada elemento — e, se quiser, filtrando com if. A sintaxe é [expressão for item in sequência if condição]. O que ela faz é o mesmo de um for; a diferença é a concisão e a velocidade em Python puro." },
        { t: "code", c: String.raw`numeros = [1, 2, 3, 4, 5, 6]

quadrados = [n * n for n in numeros]
pares = [n for n in numeros if n % 2 == 0]
textos = [f"{n}!" for n in range(3)]  # ["0!", "1!", "2!"]

print(quadrados)   # [1, 4, 9, 16, 25, 36]
print(pares)       # [2, 4, 6]
print(textos)      # ["0!", "1!", "2!"]`, lang: "python" },
        { t: "h", h: "Transformações e filtros" },
        { t: "p", p: "O if na comprehension é um filtro: o item só entra no resultado se a condição for verdadeira. Não confunda com if/else — para escolher entre dois valores por elemento, usa-se a forma [x if cond else y for x in itens]." },
        { t: "code", c: String.raw`nomes = ["ana", "bia", "carlos", "de"]

titulos = [nome.capitalize() for nome in nomes]
print(titulos)   # ["Ana", "Bia", "Carlos", "De"]

curtos = [nome for nome in titulos if len(nome) <= 3]
print(curtos)    # ["Ana", "Bia", "De"]`, lang: "python" },
        { t: "h", h: "lambda, map e filter" },
        { t: "p", p: "lambda cria funções anônimas com corpo de uma única expressão. map aplica uma função a cada elemento; filter mantém os elementos que passam no teste. Funções também circulam como valores: é o caso do key em sorted(pairs, key=...)." },
        { t: "code", c: String.raw`numeros = [1, 2, 3, 4]

dobro = list(map(lambda x: x * 2, numeros))
pares = list(filter(lambda x: x % 2 == 0, numeros))

print(dobro)   # [2, 4, 6, 8]
print(pares)   # [2, 4]

ordenar = lambda item: item[1]
pairs = [(1, "z"), (2, "a")]
print(sorted(pairs, key=ordenar))   # [(2, "a"), (1, "z")]`, lang: "python" },
        { t: "note", p: "Sempre que der, prefira a comprehension: ela costuma ser mais legível e rápida que map/filter com lambda. Reserve map/filter para quando a função já existir (ex.: list(map(str.upper, nomes))), sem criar lambda só por criar." },
        { t: "warn", p: "Não exagere na complexidade: uma comprehension com dois for e um if embutidos vira um enigma. Se a lógica apertar, use um for comum — clareza vale mais que uma linha elegante." }
      ],
      quiz: [
        { q: "Qual é o resultado de [n * n for n in range(4)]?", opts: ["[1, 4, 9, 16]", "[0, 1, 4, 9]", "[1, 4, 9]", "[0, 1, 2, 3]"], ans: 1, expl: "range(4) gera 0, 1, 2 e 3; elevando ao quadrado obtemos 0, 1, 4 e 9. Erro clássico: esquecer que range começa em 0." },
        { q: "O que devolve [n for n in range(10) if n % 2 == 0]?", opts: ["[2, 4, 6, 8]", "[0, 2, 4, 6, 8]", "[1, 3, 5, 7, 9]", "[0, 1, 2, 3, 4]"], ans: 1, expl: "O filtro mantém apenas os pares — inclusive o 0, que costuma ser esquecido. São cinco elementos: 0, 2, 4, 6 e 8." },
        { q: "Qual é o resultado de list(map(lambda x: x + 1, [1, 2, 3]))?", opts: ["[1, 2, 3]", "[2, 3, 4]", "[1, 4, 9]", "[0, 1, 2]"], ans: 1, expl: "map aplica a função a cada item, em ordem; somar 1 a [1, 2, 3] produz [2, 3, 4]. [1, 4, 9] seria o resultado de um quadrado." },
        { q: "Sobre funções lambda, qual afirmação é correta?", opts: ["Podem ter várias linhas com return.", "O corpo é uma única expressão, sem return explícito.", "Não aceitam argumentos.", "São obrigatórias em list comprehensions."], ans: 1, expl: "lambda é uma função anônima limitada a uma expressão — o resultado da expressão é o retorno. Para lógica maior, use def, que aceita corpo completo." },
        { q: "Qual é o resultado de [nome.upper() for nome in [\"ana\", \"bia\"]]?", opts: ["[\"ana\", \"bia\"]", "[\"ANA\", \"BIA\"]", "[\"Ana\", \"Bia\"]", "[\"a\", \"b\"]"], ans: 1, expl: "A comprehension aplica upper() a cada elemento, transformando os textos em maiúsculas." },
        { q: "O que devolve list(filter(lambda x: x % 2 == 0, [1, 2, 3, 4]))?", opts: ["[1, 3]", "[2, 4]", "[1, 2, 3, 4]", "[2]"], ans: 1, expl: "filter mantém apenas os elementos para os quais a função devolve True — os pares 2 e 4." }
      ]
    },
    {
      id: "py-classes",
      title: "Classes e Objetos",
      subtitle: "Objetos com estado: moldes que definem dados e comportamento.",
      blocks: [
        { t: "h", h: "Classes como molde" },
        { t: "p", p: "Uma classe define atributos (dados) e métodos (comportamentos); um objeto é uma instância criada a partir dela. A diferença central para uma função pura: a função apenas calcula e devolve um resultado, enquanto o objeto mantém estado, que muda ao longo da vida do programa (por exemplo, o saldo de uma conta)." },
        { t: "code", c: String.raw`class Retangulo:
    def __init__(self, base, altura):
        self.base = base
        self.altura = altura

    def area(self):
        return self.base * self.altura

    def perimetro(self):
        return 2 * (self.base + self.altura)

r = Retangulo(4, 3)
print(r.area())        # 12
print(r.perimetro())   # 14
print(r.base)          # 4 (acesso direto ao atributo)`, lang: "python" },
        { t: "h", h: "__init__, self e métodos" },
        { t: "p", p: "__init__ é o construtor: roda na criação e costuma inicializar os atributos. self é a referência ao próprio objeto — todo método o recebe como primeiro parâmetro, dando acesso aos atributos e a outros métodos." },
        { t: "code", c: String.raw`class Conta:
    def __init__(self, titular, saldo=0.0):
        self.titular = titular
        self.saldo = saldo

    def depositar(self, valor):
        if valor <= 0:
            raise ValueError("Depósito precisa ser maior que zero")
        self.saldo += valor

    def sacar(self, valor):
        if valor > self.saldo:
            raise ValueError("Saldo insuficiente")
        self.saldo -= valor

    def __str__(self):
        return f"{self.titular}: R$ {self.saldo:.2f}"

conta = Conta("Ana", 100.0)
conta.depositar(50.0)
conta.sacar(30.0)
print(conta)   # Ana: R$ 120.00`, lang: "python" },
        { t: "h", h: "Estado que muda e valor de retorno" },
        { t: "p", p: "Métodos que alteram o estado (como incrementar) podem não retornar nada — devolvem None. Métodos que descrevem o objeto sem mudá-lo, como __str__, devolvem o resultado calculado. Separe mentalmente \"ações\" de \"consultas\"." },
        { t: "code", c: String.raw`class Contador:
    def __init__(self):
        self.valor = 0

    def incrementar(self):
        self.valor += 1
        return self.valor

c = Contador()
print(c.incrementar())   # 1
print(c.incrementar())   # 2
print(c.incrementar())   # 3`, lang: "python" },
        { t: "note", p: "__str__ decide como o objeto vira texto em print() e em f-strings. Sem ele, o Python mostra algo como <__main__.Conta object at 0x...>, nada útil ao usuário. Sempre que fizer sentido, defina __str__." },
        { t: "warn", p: "Atributo só existe depois da primeira atribuição: acessá-lo antes gera AttributeError. Por isso, inicialize todos os atributos no __init__, para o objeto nascer completo — evita surpresas e erros difíceis de rastrear." }
      ],
      quiz: [
        { q: "O que é self dentro de um método?", opts: ["A classe à qual o método pertence.", "O objeto (instância) pelo qual o método foi chamado.", "Uma variável global obrigatória.", "O construtor da classe."], ans: 1, expl: "self referencia a instância atual: primeiro parâmetro de todo método, dá acesso a atributos (self.atributo) e a outros métodos (self.metodo())." },
        { q: "Qual método é executado automaticamente ao criar um objeto?", opts: ["__init__", "init()", "__start__", "constructor()"], ans: 0, expl: "__init__ roda no momento em que escrevemos Classe(...): é nele que inicializamos os atributos do novo objeto." },
        { q: "O que uma função ou método retorna quando termina sem return?", opts: ["self", "0", "None", "Um erro de execução"], ans: 2, expl: "Sem return, o Python devolve None — inclusive em métodos que apenas alteram o estado. Se precisar do valor novo, coloque return explícito." },
        { q: "Qual é a diferença prática entre função pura e classe?", opts: ["Nenhuma; são sinônimos.", "Função pura calcula a partir dos argumentos sem manter estado; classe guarda estado que evolui com as chamadas.", "Função pura é sempre mais lenta.", "Classe não pode ter métodos nem atributos."], ans: 1, expl: "Para as mesmas entradas, uma função pura devolve sempre o mesmo resultado e não altera nada; um objeto conserva estado (como o saldo) que muda a cada método chamado." },
        { q: "O método __str__ tem a função de:", opts: ["Criar uma nova instância.", "Definir como o objeto vira texto em print() e f-strings.", "Deletar o objeto.", "Incrementar um contador interno."], ans: 1, expl: "__str__ devolve a representação textual do objeto, usada por print() e f-strings para exibi-lo de forma legível." },
        { q: "Criar um objeto a partir de uma classe é chamado de:", opts: ["Compilação.", "Instanciação.", "Importação.", "Iteração."], ans: 1, expl: "Escrever Classe(...) cria (instancia) um objeto — uma instância — a partir do molde definido pela classe." }
      ]
    }
  ]
};