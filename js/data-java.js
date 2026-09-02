/* Curso: Java */
window.COURSES = window.COURSES || {};
window.COURSES.java = {
  name: "Java",
  topics: [
    {
      id: "java-intro",
      title: "Introdução ao Java",
      subtitle: "Uma linguagem compilada, orientada a objetos e multiplataforma.",
      blocks: [
        { t: "h", h: "O que é Java?" },
        { t: "p", p: "Java é uma linguagem de alto nível, orientada a objetos e fortemente tipada, criada pela Sun Microsystems em 1995 (hoje mantida pela Oracle). Seu lema «write once, run anywhere» se tornou realidade graças à JVM (Java Virtual Machine), que permite executar o mesmo bytecode em qualquer plataforma que possua uma JVM instalada." },
        { t: "h", h: "Compilado e interpretado: o melhor dos dois mundos" },
        { t: "p", p: "Java não é puramente compilada nem puramente interpretada. O compilador (javac) traduz o código-fonte (.java) para bytecode (.class), que por sua vez é executado pela JVM. Assim, o código é verificado em tempo de compilação e, ao mesmo tempo, ganha portabilidade porque o bytecode é o mesmo em qualquer sistema operacional." },
        { t: "h", h: "O primeiro programa: HelloWorld" },
        { t: "code", c: String.raw`public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Olá, mundo!");
    }
}`, lang: "java" },
        { t: "h", h: "Desmontando o HelloWorld" },
        { t: "lst", items: [
          "public class HelloWorld: declara uma classe pública com o mesmo nome do arquivo.",
          "public static void main(String[] args): o ponto de entrada do programa — a JVM procura este método para iniciar a execução.",
          "public: o método pode ser chamado de qualquer lugar.",
          "static: pode ser chamado sem criar um objeto da classe.",
          "void: o método não retorna valor.",
          "String[] args: argumentos passados pela linha de comando."
        ]},
        { t: "h", h: "Compilando e executando" },
        { t: "p", p: "No terminal, use javac para compilar e java para executar:" },
        { t: "code", c: String.raw`javac HelloWorld.java    # compila, gerando HelloWorld.class
java HelloWorld           # executa via JVM`, lang: "java" },
        { t: "note", p: "O nome da classe deve ser idêntico ao nome do arquivo (incluindo maiúsculas/minúsculas). O arquivo HelloWorld.java só pode conter a classe HelloWorld." },
        { t: "warn", p: "Java diferencia maiúsculas de minúsculas. HelloWorld, helloworld e HELLOWORLD são três coisas completamente diferentes. O nome da classe e do arquivo deve ser idêntico." }
      ],
      quiz: [
        { q: "Java é considerado:", opts: ["Uma linguagem compilada exclusivamente.", "Uma linguagem interpretada exclusivamente.", "Compilado para bytecode e executado pela JVM.", "Uma linguagem de script para navegador."], ans: 2, expl: "O código Java é compilado para bytecode, que depois é interpretado/ejecutado pela JVM — uma combinação de ambos os mundos." },
        { q: "Qual o papel da JVM?", opts: ["Compilar o código-fonte em binário nativo.", "Executar o bytecode em qualquer plataforma.", "Substituir o compilador javac.", "Gerenciar o sistema operacional."], ans: 1, expl: "A JVM (Java Virtual Machine) executa o bytecode gerado pelo javac, permitindo que o mesmo arquivo .class rode em qualquer SO que tenha uma JVM." },
        { q: "O método main em Java tem a assinatura correta:", opts: ["public static void main(String[] args)", "private static void main(String args)", "public void main(String[] args)", "static void main(String args)"], ans: 0, expl: "A JVM exige public static void main(String[] args) para encontrar o ponto de entrada do programa." },
        { q: "A palavra-chave static em main significa:", opts: ["O método é privado.", "O método pode ser chamado sem criar um objeto.", "O método retorna um valor estático.", "O método é abstrato."], ans: 1, expl: "Static permite que a JVM invoque main sem precisar instanciar a classe — o programa ainda não tem objetos quando começa." },
        { q: "Para compilar um arquivo HelloWorld.java, usamos:", opts: ["run HelloWorld.java", "javac HelloWorld.java", "java HelloWorld.java", "compile HelloWorld.java"], ans: 1, expl: "javac é o compilador Java; ele transforma HelloWorld.java em HelloWorld.class (bytecode)." },
        { q: "O que javac HelloWorld.java gera?", opts: ["Um arquivo HelloWorld.exe.", "Um arquivo HelloWorld.class com bytecode.", "Um código-fonte otimizado.", "Um relatório de erros."], ans: 1, expl: "O compilador Java gera um arquivo .class contendo bytecode que a JVM pode executar." },
        { q: "Em Java, o nome do arquivo .java deve:", opts: ["Ser diferente do nome da classe pública.", "Ser idêntico ao nome da classe pública.", "Ser qualquer coisa, desde que termine em .java.", "Ser todo em minúsculas."], ans: 1, expl: "A JVM espera que a classe pública tenha o mesmo nome que o arquivo (incluindo caixa). HelloWorld.java só pode conter a classe HelloWorld." },
        { q: "O que o System.out.println faz?", opts: ["Lê dados do usuário.", "Imprime texto na tela seguido de quebra de linha.", "Compila o programa.", "Fecha o programa."], ans: 1, expl: "System.out.println imprime o argumento no terminal e adiciona uma quebra de linha ao final." },
        { q: "Java diferencia maiúsculas de minúsculas?", opts: ["Não, é flexível quanto a caixa.", "Sim, HelloWorld e helloworld são diferentes.", "Apenas nos nomes de métodos.", "Apenas nas strings."], ans: 1, expl: "Java é case-sensitive: o nome da classe, métodos e variáveis são todos sensíveis a maiúsculas e minúsculas." },
        { q: "A JVM significa:", opts: ["Java Virtual Processor.", "Java Verified Module.", "Java Virtual Machine.", "Java Vendor Manager."], ans: 2, expl: "JVM é a Java Virtual Machine, a máquina virtual que executa o bytecode Java em qualquer plataforma." }
      ]
    },
    {
      id: "java-variaveis",
      title: "Variáveis e Tipos de Dados",
      subtitle: "Declarando variáveis, tipos primitivos e referências.",
      blocks: [
        { t: "h", h: "Declarando variáveis" },
        { t: "p", p: "Em Java, toda variável tem um tipo. A declaração segue o padrão tipo nome = valor;. Java possui oito tipos primitivos para números, caracteres e valores lógicos." },
        { t: "code", c: String.raw`int idade = 25;
double salario = 4500.50;
float pi = 3.14f;
char letra = 'A';
boolean aprovado = true;
String nome = "Gabriel";  // String NÃO é primitivo — é uma classe`, lang: "java" },
        { t: "h", h: "Tipos numéricos inteiros" },
        { t: "lst", items: [
          "byte: 8 bits, de -128 a 127.",
          "short: 16 bits, de -32 768 a 32 767.",
          "int: 32 bits, de -2 147 483 648 a 2 147 483 647 (o mais usado).",
          "long: 64 bits, para números muito grandes (sufixo L)."
        ]},
        { t: "h", h: "Tipos numéricos de ponto flutuante" },
        { t: "lst", items: [
          "float: 32 bits, precisão simples (sufixo f).",
          "double: 64 bits, precisão dupla (o padrão para decimais)."
        ]},
        { t: "h", h: "Constantes com final" },
        { t: "p", p: "O modificador final torna uma variável imutável após a inicialização. Por convenção, constantes são escritas em CAIXA ALTA." },
        { t: "code", c: String.raw`final double PI = 3.14159265358979;
final String PAIS = "Brasil";
// PI = 3.0;  // ERRO de compilação — constante não pode ser alterada`, lang: "java" },
        { t: "h", h: "Escape characters" },
        { t: "p", p: "Dentro de strings e chars, alguns caracteres especiais usam a barra invertida (\\) para serem representados:" },
        { t: "lst", items: [
          "\\n: quebra de linha.",
          "\\t: tabulação.",
          "\\\\: barra invertida literal.",
          "\\\": aspas duplas literais.",
          "\\r: retorno de carro."
        ]},
        { t: "code", c: String.raw`System.out.println("Linha1\\nLinha2");
System.out.println("Caminho: C:\\\\Users\\\\Documents");
System.out.println("Ele disse: \\"Olá!\\"");`, lang: "java" },
        { t: "note", p: "String não é um tipo primitivo — é uma classe da biblioteca padrão. Por isso, variáveis String são referências, não valores diretamente armazenados na variável." },
        { t: "warn", p: "Não confunda = (atribuição) com == (comparação). Para comparar strings em Java, use .equals(), pois == compara referências, não conteúdo." }
      ],
      quiz: [
        { q: "Qual é o tipo primitivo para números decimais com maior precisão?", opts: ["float", "double", "BigDecimal", "long"], ans: 1, expl: "double tem 64 bits de precisão dupla e é o tipo padrão para decimais em Java." },
        { q: "Para declarar uma constante em Java, usamos:", opts: ["const", "final", "static", "readonly"], ans: 1, expl: "A palavra-chave final torna a variável imutável: depois de atribuída, não pode ser alterada." },
        { q: "Qual das opções NÃO é um tipo primitivo em Java?", opts: ["int", "boolean", "char", "String"], ans: 3, expl: "String é uma classe da biblioteca padrão, não um tipo primitivo. Os oito primitivos são byte, short, int, long, float, double, char e boolean." },
        { q: "O que imprime System.out.println(\"A\\\\B\")?", opts: ["A\\B", "A\\B", "AB", "Erro de compilação."], ans: 1, expl: "A barra invertida dupla \\\\ representa uma única barra invertida literal na string." },
        { q: "Qual é o tamanho de um int em Java?", opts: ["16 bits", "32 bits", "64 bits", "8 bits"], ans: 1, expl: "O tipo int ocupa 32 bits e é o tipo inteiro mais usado em Java." },
        { q: "A variável float exige o sufixo:", opts: ["d", "f", "L", "Nenhum."], ans: 1, expl: "Valores literais de ponto flutuante são double por padrão. Para float, adicione f ao final: 3.14f." },
        { q: "O que acontece ao escrever: final int x = 10; x = 20;?", opts: ["Funciona normalmente.", "Erro de compilação — x é constante.", "Executa e altera o valor.", "Lança exceção em runtime."], ans: 1, expl: "final torna a variável imutável; tentar alterá-la depois de inicializada gera erro de compilação." },
        { q: "Qual escape character imprime uma quebra de linha?", opts: ["\\t", "\\r", "\\n", "\\\\"], ans: 2, expl: "\\n é o caractere de quebra de linha dentro de strings em Java." },
        { q: "Um byte armazena valores de:", opts: ["0 a 255", "-128 a 127", "-256 a 255", "0 a 128"], ans: 1, expl: "byte é um inteiro com sinal de 8 bits, com faixa de -128 a 127." },
        { q: "O que imprime System.out.println(2 + 3.0)?", opts: ["5", "5.0", "23.0", "Erro."], ans: 1, expl: "A soma de int com double promove o resultado para double; o resultado é 5.0, não 5." }
      ]
    },
    {
      id: "java-operadores",
      title: "Operadores",
      subtitle: "Aritméticos, relacionais, lógicos e mais.",
      blocks: [
        { t: "h", h: "Operadores aritméticos" },
        { t: "lst", items: [
          "+   soma            ex.: 5 + 3 = 8",
          "-   subtração      ex.: 5 - 3 = 2",
          "*   multiplicação  ex.: 5 * 3 = 15",
          "/   divisão        ex.: 10 / 3 = 3 (divisão inteira entre ints)",
          "%   módulo (resto) ex.: 10 % 3 = 1",
          "++  incremento     ex.: x++ (adiciona 1)",
          "--  decremento     ex.: x-- (subtrai 1)"
        ]},
        { t: "code", c: String.raw`int a = 10;
System.out.println(a / 3);    // 3 (divisão inteira)
System.out.println(a % 3);    // 1 (resto)
System.out.println(10.0 / 3); // 3.333... (com double)`, lang: "java" },
        { t: "h", h: "Operadores relacionais" },
        { t: "p", p: "Comparam dois valores. O resultado é sempre boolean (true ou false): >, <, >=, <=, == (igual), != (diferente)." },
        { t: "code", c: String.raw`int x = 5;
boolean resultado = x > 3;  // true
boolean igual = x == 5;      // true`, lang: "java" },
        { t: "h", h: "Operadores lógicos" },
        { t: "lst", items: [
          "&&  E lógico: verdadeiro somente se as duas condições forem verdadeiras.",
          "||  OU lógico: verdadeiro se pelo menos uma condição for verdadeira.",
          "!   NÃO lógico: inverte o valor booleano."
        ]},
        { t: "code", c: String.raw`int idade = 20;
boolean temCarteira = true;

if (idade >= 18 && temCarteira) {
    System.out.println("Pode dirigir.");
} else {
    System.out.println("Não pode dirigir.");
}`, lang: "java" },
        { t: "h", h: "Operador ternário" },
        { t: "p", p: "Uma forma compacta de if/else: condição ? valorVerdadeiro : valorFalso." },
        { t: "code", c: String.raw`int nota = 7;
String resultado = (nota >= 5) ? "Aprovado" : "Reprovado";
System.out.println(resultado);  // Aprovado`, lang: "java" },
        { t: "h", h: "Operador instanceof" },
        { t: "p", p: "Verifica se um objeto é instância de uma classe ou subclasse. Retorna boolean." },
        { t: "code", c: String.raw`String texto = "Olá";
if (texto instanceof String) {
    System.out.println("É uma String!");
}`, lang: "java" },
        { t: "note", p: "Cuidado com a precedência: ! tem a maior precedência lógica, depois && e por último ||. Use parênteses quando tiver dúvidas." },
        { t: "warn", p: "O operador == compara referências em objetos (incluindo String), não o conteúdo. Use .equals() para comparar o conteúdo de strings e objetos." }
      ],
      quiz: [
        { q: "Qual é o resultado de 10 / 3 em Java (com int)?", opts: ["3.333", "3", "3.0", "Erro"], ans: 1, expl: "A divisão de dois ints em Java produz outro int, descartando as casas decimais. 10 / 3 = 3." },
        { q: "O operador % retorna:", opts: ["O quociente da divisão.", "O resto da divisão.", "A divisão real.", "A potência."], ans: 1, expl: "% é o operador de módulo: retorna o resto da divisão inteira. 10 % 3 = 1." },
        { q: "O que && significa em Java?", opts: ["OU lógico.", "E lógico.", "NÃO lógico.", "Igualdade."], ans: 1, expl: "&& é o E lógico (AND): retorna true somente se ambas as expressões forem verdadeiras." },
        { q: "O operador ternário tem a forma:", opts: ["cond ? v1 : v2", "cond => v1 else v2", "if cond v1 else v2", "cond : v1 ? v2"], ans: 0, expl: "O ternário segue o padrão condição ? valorVerdadeiro : valorFalso, sendo uma forma compacta de if/else." },
        { q: "Para comparar o conteúdo de duas strings em Java, usamos:", opts: ["==", ".equals()", ".compare()", ".same()"], ans: 1, expl: "== compara referências (endereço de memória); .equals() compara o conteúdo das strings." },
        { q: "Qual operador incrementa uma variável em 1?", opts: ["--", "+=", "++", "**"], ans: 2, expl: "++ incrementa o valor da variável em 1 (x++ ou ++x). -- faz o oposto, decrementando." },
        { q: "O resultado de !true é:", opts: ["true", "false", "null", "Erro"], ans: 1, expl: "! é o operador NOT; inverte o valor booleano. !true = false." },
        { q: "O operador instanceof retorna:", opts: ["O tipo do objeto.", "Um número inteiro.", "true ou false.", "Uma nova instância."], ans: 2, expl: "instanceof verifica se um objeto é instância de uma classe e retorna um boolean." },
        { q: "O que retorna 7 != 5?", opts: ["true", "false", "12", "2"], ans: 0, expl: "7 != 5 é true, pois os valores são de fato diferentes." },
        { q: "Qual precedência é correta (do maior para menor)?", opts: ["||  >  &&  >  !", "!  >  &&  >  ||", "&&  >  ||  >  !", "!  >  ||  >  &&"], ans: 1, expl: "! tem maior precedência, depois && e por último ||. Use parênteses para evitar ambiguidades." }
      ]
    },
    {
      id: "java-condicionais",
      title: "Condicionais e Laços",
      subtitle: "if/else, switch, for, while e do-while.",
      blocks: [
        { t: "h", h: "if / else if / else" },
        { t: "p", p: "As estruturas condicionais executam blocos de código com base em condições booleanas." },
        { t: "code", c: String.raw`int nota = 7;

if (nota >= 7) {
    System.out.println("Aprovado");
} else if (nota >= 5) {
    System.out.println("Recuperação");
} else {
    System.out.println("Reprovado");
}`, lang: "java" },
        { t: "h", h: "switch e enhanced switch" },
        { t: "p", p: "O switch compara um valor com múltiplas constantes. O enhanced switch (Java 14+) simplifica com setas (->). O switch antigo usa break para evitar fall-through." },
        { t: "code", c: String.raw`// switch clássico
String dia = "SEG";
switch (dia) {
    case "SEG":
    case "TER":
    case "QUA":
    case "QUI":
    case "SEX":
        System.out.println("Dia útil");
        break;
    case "SAB":
    case "DOM":
        System.out.println("Fim de semana");
        break;
}

// enhanced switch (Java 14+)
switch (dia) {
    case "SEG", "TER", "QUA", "QUI", "SEX" -> System.out.println("Dia útil");
    case "SAB", "DOM" -> System.out.println("Fim de semana");
    default -> System.out.println("Inválido");
}`, lang: "java" },
        { t: "h", h: "Laço for" },
        { t: "p", p: "O laço for é ideal quando se sabe o número de repetições: for (inicialização; condição; incremento)." },
        { t: "code", c: String.raw`for (int i = 0; i < 5; i++) {
    System.out.println(i);  // 0 1 2 3 4
}`, lang: "java" },
        { t: "h", h: "Laço while e do-while" },
        { t: "p", p: "O while repete enquanto a condição for true. O do-while garante pelo menos uma execução antes de testar." },
        { t: "code", c: String.raw`// while
int contador = 0;
while (contador < 5) {
    System.out.println(contador);
    contador++;
}

// do-while — executa pelo menos uma vez
int x = 10;
do {
    System.out.println(x);  // imprime 10
} while (x < 5);  // falso, mas já executou uma vez`, lang: "java" },
        { t: "h", h: "for-each" },
        { t: "p", p: "O for-each percorre arrays e coleções de forma simplificada, sem usar índices." },
        { t: "code", c: String.raw`int[] numeros = {10, 20, 30};
for (int n : numeros) {
    System.out.println(n);
}`, lang: "java" },
        { t: "h", h: "break e continue" },
        { t: "lst", items: [
          "break: encerra o laço imediatamente.",
          "continue: pula para a próxima iteração, ignorando o resto do bloco."
        ]},
        { t: "note", p: "O enhanced switch não precisa de break porque cada caso é independente. No switch clássico, esquecer o break gera fall-through (execução do caso seguinte)." },
        { t: "warn", p: "Um laço infinito pode travar o programa. Sempre certifique-se de que a condição eventualmente se torna falsa dentro do laço." }
      ],
      quiz: [
        { q: "Qual estrutura garante pelo menos uma execução antes de testar a condição?", opts: ["for", "while", "do-while", "for-each"], ans: 2, expl: "do-while executa o bloco uma vez e depois testa a condição; se for false, o laço termina." },
        { q: "No enhanced switch (Java 14+), usamos:", opts: ["case →", "case :", "case =>", "case ->"], ans: 3, expl: "O enhanced switch usa a seta -> para associar cada caso a uma ação, sem precisar de break." },
        { q: "O que o break faz em um laço?", opts: ["Pula para a próxima iteração.", "Encerra o laço imediatamente.", "Reinicia o laço do zero.", "Inverte a condição."], ans: 1, expl: "break sai do laço na hora; continue é quem pula para a próxima iteração." },
        { q: "O for-each é útil para:", opts: ["Percorrer arrays e coleções sem usar índices.", "Criar laços infinitos.", "Substituir o switch.", "Declarar variáveis."], ans: 0, expl: "for-each simplifica a iteração sobre arrays e coleções: para (tipo var : coleção)." },
        { q: "Com nota = 5, o primeiro exemplo imprime:", opts: ["Aprovado", "Recuperação", "Reprovado", "Nada."], ans: 1, expl: "5 não é >= 7, mas é >= 5, então cai no else if: Recuperação." },
        { q: "O que acontece sem break no switch clássico?", opts: ["O programa para.", "O próximo caso é executado (fall-through).", "Gera erro de compilação.", "O switch é ignorado."], ans: 1, expl: "Sem break, o fluxo continua para o próximo case até encontrar break ou o fim do switch." },
        { q: "for (int i = 0; i < 3; i++) executa quantas vezes?", opts: ["2", "3", "4", "Infinito"], ans: 1, expl: "i começa em 0 e vai até i < 3 (0, 1, 2) — três iterações." },
        { q: "A diferença entre while e do-while é:", opts: ["Não há diferença.", "while testa antes; do-while testa depois.", "while é mais rápido.", "do-while só funciona com inteiros."], ans: 1, expl: "while pode nunca executar se a condição for false logo de início; do-while executa pelo menos uma vez." },
        { q: "O que continue faz dentro de um laço?", opts: ["Encerra o laço.", "Pula o resto da iteração atual e vai para a próxima volta.", "Reinicia o programa.", "Incrementa a variável duas vezes."], ans: 1, expl: "continue pula para a próxima iteração do laço, ignorando o código restante na iteração atual." },
        { q: "for (int i = 10; i > 0; i -= 3) imprime:", opts: ["10 9 8 7 6 5 4 3 2 1", "10 7 4 1", "10 7 4 1 0", "10 7 4"], ans: 1, expl: "i começa em 10, decrementa 3 a cada volta: 10, 7, 4 e 1. Quando i = -2, a condição i > 0 é false." }
      ]
    },
    {
      id: "java-metodos",
      title: "Métodos",
      subtitle: "Criando e chamando métodos com parâmetros e retorno.",
      blocks: [
        { t: "h", h: "Declaração de métodos" },
        { t: "p", p: "Métodos são blocos de código reutilizáveis com nome, parâmetros e tipo de retorno. A assinatura completa inclui modificadores de acesso, tipo de retorno, nome e lista de parâmetros." },
        { t: "code", c: String.raw`public class Calculadora {
    // método com retorno
    public static int somar(int a, int b) {
        return a + b;
    }

    // método sem retorno (void)
    public static void saudar(String nome) {
        System.out.println("Olá, " + nome + "!");
    }

    public static void main(String[] args) {
        int resultado = somar(5, 3);
        System.out.println("Soma: " + resultado);  // 8

        saudar("Gabriel");  // Olá, Gabriel!
    }
}`, lang: "java" },
        { t: "h", h: "Parâmetros e passagem por valor" },
        { t: "p", p: "Em Java, todos os argumentos são passados por valor. Para tipos primitivos, uma cópia é feita — alterar o parâmetro dentro do método não afeta a variável original. Para objetos, a cópia é da referência, não do objeto." },
        { t: "code", c: String.raw`public static void tentarMudar(int x) {
    x = 100;  // altera apenas a cópia local
}

public static void main(String[] args) {
    int valor = 5;
    tentarMudar(valor);
    System.out.println(valor);  // continua 5
}`, lang: "java" },
        { t: "h", h: "Sobrecarga (Overloading)" },
        { t: "p", p: "Sobrecarga permite ter múltiplos métodos com o mesmo nome, desde que os parâmetros difiram em tipo, quantidade ou ordem. O compilador decide qual versão chamar com base nos argumentos." },
        { t: "code", c: String.raw`public static int somar(int a, int b) {
    return a + b;
}

public static double somar(double a, double b) {
    return a + b;
}

public static int somar(int a, int b, int c) {
    return a + b + c;
}

// chamadas
somar(2, 3);        // usa somar(int, int)
somar(2.0, 3.0);    // usa somar(double, double)
somar(1, 2, 3);     // usa somar(int, int, int)`, lang: "java" },
        { t: "h", h: "static vs instance" },
        { t: "lst", items: [
          "Métodos estáticos (static) pertencem à classe e podem ser chamados sem criar um objeto.",
          "Métodos de instância pertencem ao objeto e precisam de uma instância para serem chamados."
        ]},
        { t: "code", c: String.raw`public class Exemplo {
    // static — chamado pela classe
    public static void mensagem() {
        System.out.println("Olá!");
    }

    // instance — chamado pelo objeto
    public void dizer(String texto) {
        System.out.println(texto);
    }

    public static void main(String[] args) {
        Exemplo.mensagem();     // static: pela classe
        Exemplo obj = new Exemplo();
        obj.dizer("Oi!");      // instance: pelo objeto
    }
}`, lang: "java" },
        { t: "note", p: "Retorno void significa que o método não devolve valor. Você pode usar return vazio para sair do método antecipadamente, mas não pode armazenar o resultado em uma variável." },
        { t: "warn", p: "Dois métodos com a mesma assinatura (mesmo nome, mesmo tipo e mesma quantidade de parâmetros) geram erro de compilação — a sobrecarga exige ao menos uma diferença na lista de parâmetros." }
      ],
      quiz: [
        { q: "Em Java, os argumentos são passados por:", opts: ["Referência sempre.", "Valor sempre.", "Depende do tipo.", "Por global."], ans: 1, expl: "Java sempre passa por valor. Para primitivos, uma cópia do valor é feita. Para objetos, a cópia é da referência (não do objeto inteiro)." },
        { q: "Sobrecarga (overloading) significa:", opts: ["Métodos com o mesmo nome e mesma assinatura.", "Métodos com o mesmo nome mas diferentes parâmetros.", "Métodos abstratos.", "Métodos estáticos."], ans: 1, expl: "Overloading permite múltiplos métodos com o mesmo nome, desde que a lista de parâmetros (tipo, quantidade ou ordem) seja diferente." },
        { q: "Um método static pode acessar:", opts: ["Apenas variáveis de instância.", "Apenas membros static da mesma classe.", "Tanto static quanto instância diretamente.", "Nada, é apenas uma função."], ans: 1, expl: "Métodos static pertencem à classe e não têm referência a um objeto; só podem acessar membros static diretamente." },
        { q: "O que retorna um método void?", opts: ["null.", "0.", "Nada — void significa ausência de retorno.", "O tipo Object."], ans: 2, expl: "void indica que o método não retorna valor. Pode ter um return vazio para sair, mas não devolve dado." },
        { q: "Ao alterar um parâmetro int dentro de um método:", opts: ["A variável original é alterada.", "Apenas a cópia local é alterada.", "O programa dá erro.", "O valor vira double."], ans: 1, expl: "int é passado por valor: o método recebe uma cópia; alterá-la não afeta a variável original." },
        { q: "Qual é a assinatura correta para sobrecarga?", opts: ["mesmo nome + mesmos parâmetros", "mesmo nome + parâmetros diferentes", "mesmo retorno + diferente nome", "mesma classe + diferente retorno"], ans: 1, expl: "Overloading exige ao menos uma diferença na lista de parâmetros; o retorno sozinho não é suficiente para diferenciar." },
        { q: "Para chamar um método static de outra classe, usamos:", opts: ["obj.metodo()", "Classe.metodo()", "new Classe().metodo()", "this.metodo()"], ans: 1, expl: "Métodos estáticos são chamados pela classe: Classe.metodo(). Não é preciso criar um objeto." },
        { q: "public static void main(String[] args) é:", opts: ["Um método de instância.", "Um construtor.", "O ponto de entrada estático do programa.", "Um método privado."], ans: 2, expl: "main é o método estático que a JVM procura para iniciar a execução do programa." },
        { q: "O que acontece ao tentar sobrecarregar com apenas o retorno diferente?", opts: ["Funciona.", "Erro de compilação.", "Compila mas não roda.", "Usa o método com void."], ans: 1, expl: "Dois métodos só com retorno diferente não são sobrecargas válidas — a assinatura é o nome + parâmetros, não o retorno." },
        { q: "Um método void pode usar return para sair antecipadamente?", opts: ["Não, void não admite return.", "Sim, return vazio (sem valor) sai do método.", "Apenas com break.", "Apenas com throw."], ans: 1, expl: "return vazio é permitido em métodos void para encerrar o fluxo antes do fim do bloco." }
      ]
    },
    {
      id: "java-poo",
      title: "Orientação a Objetos",
      subtitle: "Classes, objetos, construtor, encapsulamento e toString.",
      blocks: [
        { t: "h", h: "Classes e objetos" },
        { t: "p", p: "Uma classe é um molde que define atributos (dados) e métodos (comportamento). Um objeto é uma instância concreta criada a partir dessa classe." },
        { t: "code", c: String.raw`public class Conta {
    // atributos
    private String titular;
    private double saldo;

    // construtor
    public Conta(String titular, double saldoInicial) {
        this.titular = titular;
        this.saldo = saldoInicial;
    }

    // métodos
    public void depositar(double valor) {
        if (valor > 0) {
            saldo += valor;
        }
    }

    public void sacar(double valor) {
        if (valor > 0 && valor <= saldo) {
            saldo -= valor;
        }
    }

    public double getSaldo() {
        return saldo;
    }

    public String getTitular() {
        return titular;
    }

    @Override
    public String toString() {
        return titular + " - Saldo: R$ " + saldo;
    }
}`, lang: "java" },
        { t: "h", h: "Construtor" },
        { t: "p", p: "O construtor é chamado automaticamente ao criar um objeto (new). Ele inicializa os atributos. Em Java, o nome do construtor é sempre o nome da classe." },
        { t: "code", c: String.raw`Conta c1 = new Conta("Ana", 1000.0);
c1.depositar(500.0);
System.out.println(c1);  // Ana - Saldo: R$ 1500.0`, lang: "java" },
        { t: "h", h: "Encapsulamento: private + getter/setter" },
        { t: "p", p: "Atributos private não podem ser acessados diretamente de fora da classe. Para ler e escrever, usamos getters e setters — métodos públicos que controlam o acesso." },
        { t: "code", c: String.raw`public class Pessoa {
    private String nome;
    private int idade;

    public Pessoa(String nome, int idade) {
        this.nome = nome;
        this.idade = idade;
    }

    // getter
    public String getNome() {
        return nome;
    }

    // setter com validação
    public void setIdade(int idade) {
        if (idade >= 0 && idade <= 150) {
            this.idade = idade;
        }
    }

    public int getIdade() {
        return idade;
    }
}`, lang: "java" },
        { t: "h", h: "this e toString" },
        { t: "lst", items: [
          "this se refere ao objeto atual — resolve ambiguidade entre parâmetro e atributo.",
          "toString() retorna a representação textual do objeto; é chamado automaticamente por System.out.println()."
        ]},
        { t: "note", p: "Sem sobrescrever toString(), o println mostra algo como Conta@1a2b3c (referência hexadecimal). Sempre que fizer sentido, sobrescreva toString()." },
        { t: "warn", p: "Um construtor não tem tipo de retorno — nem mesmo void. Se você escrever void Conta(), não será um construtor e sim um método comum." }
      ],
      quiz: [
        { q: "O que é um objeto em Java?", opts: ["Uma classe estática.", "Uma instância concreta de uma classe.", "Um tipo primitivo.", "Um método."], ans: 1, expl: "Objeto é uma instância de uma classe: você cria com new e ele tem seus próprios valores de atributos." },
        { q: "A palavra-chave new faz:", opts: ["Declara uma variável.", "Cria um novo objeto na memória (chama o construtor).", "Deleta um objeto.", "Importa uma biblioteca."], ans: 1, expl: "new aloca memória para o objeto e chama o construtor para inicializá-lo." },
        { q: "O que o construtor faz?", opts: ["Retorna um valor ao programa.", "Inicializa os atributos do objeto recém-criado.", "Destroi o objeto.", "Cria uma classe."], ans: 1, expl: "O construtor roda no momento da instanciação e inicializa os atributos do novo objeto." },
        { q: "O modificador private significa:", opts: ["O atributo pode ser acessado por qualquer classe.", "Só pode ser acessado dentro da própria classe.", "O atributo é constante.", "O atributo é estático."], ans: 1, expl: "private restringe o acesso ao escopo da classe; de fora, só é acessível via getters e setters." },
        { q: "Para acessar o atributo titular de uma Conta de fora da classe, usamos:", opts: ["conta.titular", "conta.getTitular()", "conta.titular()", "Titular(conta)"], ans: 1, expl: "titular é private; getTitular() é o método público (getter) que expõe o valor com controle." },
        { q: "O que o @Override faz?", instrucao: "Indica que o método sobrescreve um método da superclasse.", opts: ["Cria um novo método.", "Indica que o método sobrescreve um da superclasse.", "Torna o método estático.", "Remove o método."], ans: 1, expl: "@Override informa ao compilador que o método substitui um da superclasse; ajuda a evitar erros de digitação." },
        { q: "O que System.out.println(objeto) imprime por padrão (sem toString)?", opts: ["Todos os atributos formatados.", "A referência memória (ex.: Conta@1a2b3c).", "Nada, gera erro.", "O nome da classe apenas."], ans: 1, expl: "Sem toString() sobrescrito, o padrão mostra a classe seguida do hash code em hexadecimal." },
        { q: "O parâmetro this representa:", opts: ["A classe-mãe.", "O objeto atual que está executando o método.", "A JVM.", "Uma constante."], ans: 1, expl: "this é uma referência ao próprio objeto; resolve ambiguidade e dá acesso aos membros da instância." },
        { q: "Um construtor pode ter modificadores de acesso?", opts: ["Não, nunca.", "Sim, como public, private, protected.", "Apenas public.", "Apenas private."], ans: 1, expl: "Construtores podem ser public, private, protected ou default; private é usado para padrões como Singleton." },
        { q: "Getter e setter servem para:", opts: ["Criar objetos.", "Controlar o acesso e a validação dos atributos privados.", "Aumentar a velocidade do programa.", "Substituir o construtor."], ans: 1, expl: "Getters retornam valores e setters permitem alterar atributos com validação, mantendo o encapsulamento." }
      ]
    },
    {
      id: "java-heranca",
      title: "Herança e Polimorfismo",
      subtitle: "Extending classes, override, classes abstratas e casting.",
      blocks: [
        { t: "h", h: "Herança com extends" },
        { t: "p", p: "A herança permite que uma classe (filha) herde atributos e métodos de outra (mãe). Isso promove reutilização e estabelece uma relação «é um tipo de»." },
        { t: "code", c: String.raw`public class Animal {
    protected String nome;

    public Animal(String nome) {
        this.nome = nome;
    }

    public void falar() {
        System.out.println(nome + " faz um som.");
    }
}

public class Cachorro extends Animal {
    public Cachorro(String nome) {
        super(nome);  // chama o construtor da superclasse
    }

    @Override
    public void falar() {
        System.out.println(nome + " faz: Au au!");
    }
}`, lang: "java" },
        { t: "h", h: "super e override" },
        { t: "lst", items: [
          "super: chama o construtor ou método da superclasse.",
          "@Override: indica que o método substitui o da superclasse. O compilador verifica se a assinatura está correta."
        ]},
        { t: "h", h: "Polimorfismo de subtipo" },
        { t: "p", p: "Uma variável do tipo da superclasse pode referenciar um objeto de qualquer subclasse. O método chamado é decidido em tempo de execução (late binding)." },
        { t: "code", c: String.raw`Animal a1 = new Animal("Gato");
Animal a2 = new Cachorro("Rex");

a1.falar();  // Gato faz um som.
a2.falar();  // Rex faz: Au au!  (polimorfismo!)`, lang: "java" },
        { t: "h", h: "Casting e instanceof" },
        { t: "p", p: "Para acessar membros exclusivos da subclasse, é preciso fazer downcast. Sempre verifique com instanceof antes de casting para evitar ClassCastException." },
        { t: "code", c: String.raw`Animal a = new Cachorro("Rex");

if (a instanceof Cachorro) {
    Cachorro c = (Cachorro) a;  // downcast seguro
    // agora pode acessar métodos exclusivos de Cachorro
}`, lang: "java" },
        { t: "h", h: "Classes abstratas" },
        { t: "p", p: "Uma classe abstrata não pode ser instanciada diretamente. Ela define métodos abstratos (sem corpo) que as subclasses são obrigadas a implementar." },
        { t: "code", c: String.raw`public abstract class Forma {
    public abstract double area();

    public void descrever() {
        System.out.println("Área: " + area());
    }
}

public class Circulo extends Forma {
    private double raio;

    public Circulo(double raio) {
        this.raio = raio;
    }

    @Override
    public double area() {
        return Math.PI * raio * raio;
    }
}

// Forma f = new Forma();  // ERRO — não pode instanciar abstrata
Forma f = new Circulo(5);
f.descrever();  // Área: 78.539...`, lang: "java" },
        { t: "note", p: "Herança em Java é simples: uma classe só pode estender uma única superclasse. Para herança múltipla de comportamento, Java usa interfaces." },
        { t: "warn", p: "Casting sem instanceof pode lançar ClassCastException em runtime. Sempre verifique o tipo antes de fazer downcast." }
      ],
      quiz: [
        { q: "extends serve para:", opts: ["Criar interfaces.", "Estender (herdar de) uma classe.", "Deletar uma classe.", "Importar pacotes."], ans: 1, expl: "extends estabelece herança: a classe filha herda atributos e métodos da classe mãezinha." },
        { q: "super no construtor da subclasse:", opts: ["Cria um novo objeto.", "Chama o construtor da superclasse.", "Deleta a superclasse.", "É proibido em Java."], ans: 1, expl: "super() invoca o construtor da superclasse e deve ser a primeira instrução do construtor." },
        { q: "Polimorfismo em Java permite:", opts: ["Uma variável da superclasse referenciar um objeto da subclasse.", "Criar múltiplos construtores.", "Herdar de várias classes.", "Deletar métodos."], ans: 0, expl: "Polimorfismo de subtipo: Animal a = new Cachorro(); — o tipo estático é Animal, mas o método chamado é o de Cachorro." },
        { q: "Classes abstratas NÃO:", opts: ["Podem ter métodos concretos.", "Podem ser estendidas.", "Podem ser instanciadas diretamente com new.", "Podem ter construtores."], ans: 2, expl: "Uma classe abstrata não pode ser instanciada diretamente; ela existe para ser estendida." },
        { q: "Para sobrescrever um método da superclasse, usamos:", opts: ["@Override", "@Super", "@Override", "@Replace"], ans: 0, expl: "@Override informa ao compilador que o método substitui um da superclasse — evita erros de assinatura." },
        { q: "Downcast (casting para subclasse) é seguro quando:", opts: ["Sempre.", "O objeto realmente é da subclasse (verificar com instanceof).", "O objeto é da superclasse.", "Nunca."], ans: 1, expl: "Casting só é seguro se o objeto for da subclasse-alvo; instanceof evita ClassCastException." },
        { q: "Uma classe pode estender quantas superclasses?", opts: ["Duas.", "Quantas quiser.", "Uma apenas.", "Nenhuma."], ans: 2, expl: "Herança simples: Java permite estender apenas uma classe. Para múltiplos comportamentos, use interfaces." },
        { q: "protected permite acesso:", opts: ["Apenas dentro da classe.", "Dentro do pacote e por subclasses.", "Para qualquer classe.", "Apenas por métodos estáticos."], ans: 1, expl: "protected dá acesso dentro do mesmo pacote e por subclasses de outros pacotes." },
        { q: "O que acontece ao chamar um método sobreposto via referência da superclasse?", opts: ["O método da superclasse é executado.", "O método da subclasse é executado (late binding).", "Erro de compilação.", "Nenhum é executado."], ans: 1, expl: "Polimorfismo: em runtime, Java executa o método da classe real do objeto, não da referência estática." },
        { q: "Uma classe abstrata pode ter:", opts: ["Apenas métodos abstratos.", "Métodos abstratos e concretos misturados.", "Apenas métodos concretos.", "Nenhum método."], ans: 1, expl: "Classes abstratas podem ter ambos: métodos abstratos (sem corpo) e métodos concretos (com implementação)." }
      ]
    },
    {
      id: "java-interfaces",
      title: "Interfaces e Abstract Classes",
      subtitle: "Contratos, implements, default methods e herança múltipla.",
      blocks: [
        { t: "h", h: "O que é uma interface?" },
        { t: "p", p: "Uma interface define um contrato — um conjunto de métodos que uma classe promete implementar. Em Java, interfaces usam a palavra-chave interface e são implementadas com implements." },
        { t: "code", c: String.raw`public interface Veiculo {
    void acelerar();
    void frear();
    default String descricao() {
        return "Veículo genérico";
    }
}

public class Carro implements Veiculo {
    @Override
    public void acelerar() {
        System.out.println("Carro acelerando...");
    }

    @Override
    public void frear() {
        System.out.println("Carro freando...");
    }

    @Override
    public String descricao() {
        return "Carro popular";
    }
}`, lang: "java" },
        { t: "h", h: "Default methods (Java 8+)" },
        { t: "p", p: "A partir do Java 8, interfaces podem ter métodos default com implementação. Uma classe implementadora pode optar por não sobrescrevê-los — a implementação da interface é usada automaticamente." },
        { t: "code", c: String.raw`public interface Voltagem {
    int getVoltagem();

    default void mostrarVoltagem() {
        System.out.println("Voltagem: " + getVoltagem() + "V");
    }
}

public class Bateria implements Voltagem {
    @Override
    public int getVoltagem() {
        return 12;
    }
    // mostrarVoltagem() usa a implementação padrão da interface
}`, lang: "java" },
        { t: "h", h: "Interface vs classe abstrata" },
        { t: "lst", items: [
          "Interface define um comportamento (o que um objeto faz); abstrata modela uma entidade (o que um objeto é).",
          "Uma classe pode implementar várias interfaces — herança múltipla de contrato.",
          "Interfaces antigas só tinham métodos abstratos; desde Java 8, aceitam default e static methods."
        ]},
        { t: "h", h: "Herança múltipla com interfaces" },
        { t: "p", p: "Java não permite herança múltipla de classes, mas permite implementar múltiplas interfaces — uma forma segura de combinar comportamentos." },
        { t: "code", c: String.raw`public interface Navegavel {
    void navegar(String destino);
}

public interface Localizavel {
    void obterPosicao();
}

public class Drone implements Navegavel, Localizavel {
    @Override
    public void navegar(String destino) {
        System.out.println("Indo para " + destino);
    }

    @Override
    public void obterPosicao() {
        System.out.println("Posição: 23.5S, 46.6W");
    }
}`, lang: "java" },
        { t: "note", p: "Quando uma classe implementa múltiplas interfaces e há conflito de default methods, a classe DEVE sobrescrever o método para resolver a ambiguidade." },
        { t: "warn", p: "Interfaces não podem ter construtores nem campos de instância (somente constantes public static final). Elas definem comportamento, não estado." }
      ],
      quiz: [
        { q: "Uma interface define:", opts: ["Estado e comportamento.", "Apenas comportamento (contrato).", "Construtores e destrutores.", "Variáveis privadas."], ans: 1, expl: "Interface define um contrato de comportamento: métodos que a classe implementadora deve cumprir." },
        { q: "Para implementar uma interface, usamos:", opts: ["extends", "implements", "interface", "abstract"], ans: 1, expl: "implements é a palavra-chave para adotar uma interface: public class X implements Y." },
        { q: "Métodos default em interfaces:", opts: ["São obrigatoriamente sobrescritos.", "Têm implementação; a classe pode não sobrescrevê-los.", "Não existem em Java.", "Só podem ser void."], ans: 1, expl: "Default methods trazem uma implementação padrão; a classe pode optar por não sobrescrevê-los." },
        { q: "Uma classe pode implementar quantas interfaces?", opts: ["Uma apenas.", "Duas.", "Quantas quiser.", "Nenhuma."], ans: 2, expl: "Java permite implementar múltiplas interfaces: class X implements A, B, C." },
        { q: "A diferença entre interface e classe abstrata é que:", opts: ["São a mesma coisa.", "Interface define contrato; abstrata modela entidade com estado.", "Interface pode ter atributos de instância.", "Abstrata não pode ter métodos."], ans: 1, expl: "Interface define comportamento puro; classe abstrata pode ter estado (atributos) e métodos concretos." },
        { q: "Uma interface pode ter campos:", opts: ["Privados de instância.", "Somente public static final (constantes).", "Qualquer modificador.", "Nenhum."], ans: 1, expl: "Campos em interfaces são implicitamente public static final — constantes." },
        { q: "Uma classe pode estender uma classe E implementar interfaces?", opts: ["Não, apenas um ou outro.", "Sim, extends vem antes de implements.", "Apenas se a classe for abstrata.", "Somente com Java 17."], ans: 1, expl: "Sintaxe: public class X extends Y implements Z, W. Herança de classe vem primeiro." },
        { q: "Se duas interfaces conflitam em default methods, a classe:", opts: ["Herdar automaticamente a primeira.", "Deve sobrescrever o método para resolver o conflito.", "Erro de compilação sem sobrescrever.", "Usa o método da superclasse."], ans: 1, expl: "Com conflito de default methods, a classe é obrigada a sobrescrever o método, definindo sua própria implementação." },
        { q: "Interfaces existem desde o Java:", opts: ["1.0", "5", "8", "11"], ans: 0, expl: "Interfaces fazem parte do Java desde sua primeira versão (1.0, 1996); default methods vieram no Java 8." },
        { q: "Uma interface pode estender outra?", opts: ["Não, nunca.", "Sim, com extends (uma ou múltiplas).", "Apenas se for abstrata.", "Apenas classes estendem."], ans: 1, expl: "Interface pode estender outra(s): public interface X extends Y, Z. Uma interface pode estender múltiplas interfaces." }
      ]
    },
    {
      id: "java-collections",
      title: "Collections",
      subtitle: "ArrayList, HashSet, HashMap e Iterator.",
      blocks: [
        { t: "h", h: "A Framework Collections" },
        { t: "p", p: "O Java Collections Framework fornece estruturas de dados padronizadas para armazenar e manipular grupos de objetos. As principais interfaces são Collection (listas e conjuntos) e Map (mapeamentos chave-valor)." },
        { t: "h", h: "ArrayList" },
        { t: "p", p: "ArrayList é uma lista dinâmica (array redimensionável). Permite acesso rápido por índice e é ideal quando a ordem importa." },
        { t: "code", c: String.raw`import java.util.ArrayList;

ArrayList<String> nomes = new ArrayList<>();
nomes.add("Ana");
nomes.add("Bia");
nomes.add("Carlos");

System.out.println(nomes.get(0));  // Ana
System.out.println(nomes.size());  // 3

nomes.remove("Bia");
for (String n : nomes) {
    System.out.println(n);
}`, lang: "java" },
        { t: "h", h: "HashSet e TreeSet" },
        { t: "p", p: "Conjuntos (Set) não permitem duplicatas. HashSet é mais rápido (sem ordenação); TreeSet mantém os elementos ordenados." },
        { t: "code", c: String.raw`import java.util.HashSet;
import java.util.TreeSet;

HashSet<Integer> conjunto = new HashSet<>();
conjunto.add(3);
conjunto.add(1);
conjunto.add(3);  // duplicata ignorada
System.out.println(conjunto);  // [1, 3] (ordem não garantida)

TreeSet<Integer> ordenado = new TreeSet<>();
ordenado.add(5);
ordenado.add(1);
ordenado.add(3);
System.out.println(ordenado);  // [1, 3, 5] (ordenado)`, lang: "java" },
        { t: "h", h: "HashMap" },
        { t: "p", p: "HashMap armazena pares chave-valor. Cada chave é única. A Complexidade média de acesso é O(1)." },
        { t: "code", c: String.raw`import java.util.HashMap;

HashMap<String, Double> notas = new HashMap<>();
notas.put("Ana", 8.5);
notas.put("Bia", 7.0);
notas.put("Ivo", 9.0);

System.out.println(notas.get("Ana"));  // 8.5
System.out.println(notas.containsKey("Bia"));  // true

for (String nome : notas.keySet()) {
    System.out.println(nome + ": " + notas.get(nome));
}`, lang: "java" },
        { t: "h", h: "Iterator" },
        { t: "p", p: "Iterator percorre uma coleção de forma controlada, permitindo remover elementos durante a iteração sem ConcurrentModificationException." },
        { t: "code", c: String.raw`import java.util.ArrayList;
import java.util.Iterator;

ArrayList<String> lista = new ArrayList<>();
lista.add("A");
lista.add("B");
lista.add("C");

Iterator<String> it = lista.iterator();
while (it.hasNext()) {
    String elem = it.next();
    if (elem.equals("B")) {
        it.remove();  // remove B com segurança
    }
}
System.out.println(lista);  // [A, C]`, lang: "java" },
        { t: "note", p: "Generics (o <String> entre colchetes) garantem type safety: você não pode adicionar um Integer em uma ArrayList<String>. Isso evita ClassCastException em runtime." },
        { t: "warn", p: "Iterar com for-each e remover elementos diretamente lança ConcurrentModificationException. Use Iterator.remove() para remover com segurança durante a iteração." }
      ],
      quiz: [
        { q: "ArrayList é:", opts: ["Um array de tamanho fixo.", "Uma lista dinâmica com tamanho redimensionável.", "Um conjunto sem duplicatas.", "Um mapeamento chave-valor."], ans: 1, expl: "ArrayList é uma lista (array redimensionável) que mantém a ordem e permite duplicatas." },
        { q: "HashSet não permite:", opts: ["Elementos nulos.", "Duplicatas.", "Apenas inteiros.", "Mais de 10 elementos."], ans: 1, expl: "Set (incluindo HashSet) não permite duplicatas: se você add o mesmo elemento duas vezes, a segunda é ignorada." },
        { q: "TreeSet mantém os elementos:", opts: ["Na ordem de inserção.", "Em ordem natural (ordenados).", "Em ordem aleatória.", "Na ordem reversa."], ans: 1, expl: "TreeSet mantém os elementos em ordenação natural (ordenação ascendente usando Comparable)." },
        { q: "HashMap acessa valores:", opts: ["Por índice numérico.", "Pela chave.", "Na ordem de inserção apenas.", "Por posição."], ans: 1, expl: "HashMap armazena pares chave-valor; o acesso é feito pela chave: map.get(chave)." },
        { q: "Para evitar ConcurrentModificationException ao remover durante iteração, use:", opts: ["for-each", "Iterator.remove()", "remove() direto", "break"], ans: 1, expl: "Iterator.remove() remove o elemento atual sem corromper a estrutura da coleção." },
        { q: "O que size() retorna em ArrayList?", opts: ["O último índice.", "O número de elementos.", "A capacidade máxima.", "O primeiro elemento."], ans: 1, expl: "size() retorna a quantidade de elementos na lista, não a capacidade do array interno." },
        { q: "Generics (<String>) em ArrayList<String> servem para:", opts: ["Aumentar a velocidade.", "Garantir type safety — só aceitar Strings.", "Permitir tipos primitivos.", "Desativar o compilador."], ans: 1, expl: "Generics limitam o tipo de elementos, evitando erros de tipo em tempo de compilação." },
        { q: "Qual interface define um mapeamento chave-valor?", opts: ["List", "Set", "Map", "Collection"], ans: 2, expl: "Map é a interface que define estruturas de mapeamento (pares chave-valor), como HashMap." },
        { q: "Iterator.hasNext() retorna:", opts: ["O próximo elemento.", "true se houver mais elementos.", "O tamanho da coleção.", "O elemento atual."], ans: 1, expl: "hasNext() retorna true se a iteração tiver mais elementos; next() avança e retorna o próximo." },
        { q: "Qual a diferença principal entre ArrayList e LinkedList?", opts: ["Não há diferença.", "ArrayList é melhor para acesso por índice; LinkedList para inserções/remoções no início/fim.", "LinkedList é mais rápido para busca binária.", "ArrayList só aceita Strings."], ans: 1, expl: "ArrayList usa array interno (acesso O(1) por índice); LinkedList usa nós encadeados (inserção/remoção O(1) nas pontas)." }
      ]
    },
    {
      id: "java-excecoes",
      title: "Tratamento de Exceções",
      subtitle: "try/catch/finally, throw, throws e a hierarquia de exceções.",
      blocks: [
        { t: "h", h: "Por que tratar exceções?" },
        { t: "p", p: "Exceções interrompem o fluxo normal quando algo dá errado: arquivo não encontrado, divisão por zero, index out of bounds. O tratamento com try/catch permite que o programa se recupere em vez de travar." },
        { t: "code", c: String.raw`try {
    int[] nums = {1, 2, 3};
    System.out.println(nums[10]);  // ArrayIndexOutOfBoundsException
} catch (ArrayIndexOutOfBoundsException e) {
    System.out.println("Índice fora do intervalo: " + e.getMessage());
} finally {
    System.out.println("Bloco finally — sempre executa.");
}`, lang: "java" },
        { t: "h", h: "Checked vs Unchecked Exceptions" },
        { t: "lst", items: [
          "Checked (checadas): o compilador obriga o tratamento — ex.: IOException, SQLException. São erros externos ao programa.",
          "Unchecked (não checadas): erros de programação — ex.: NullPointerException, ArithmeticException. Não precisam ser declaradas."
        ]},
        { t: "h", h: "throw e throws" },
        { t: "lst", items: [
          "throw: lança uma exceção de propósito dentro de um método.",
          "throws: declara que o método pode lançar exceções que ele não trata internamente."
        ]},
        { t: "code", c: String.raw`public static int dividir(int a, int b) throws ArithmeticException {
    if (b == 0) {
        throw new ArithmeticException("Divisão por zero!");
    }
    return a / b;
}

public static void main(String[] args) {
    try {
        int resultado = dividir(10, 0);
    } catch (ArithmeticException e) {
        System.out.println("Erro: " + e.getMessage());
    }
}`, lang: "java" },
        { t: "h", h: "Hierarquia de exceções" },
        { t: "code", c: String.raw`// Throwable (raiz de tudo)
//   └── Exception (exceções recuperáveis)
//         ├── IOException (checada)
//         ├── SQLException (checada)
//         ├── RuntimeException (unchecked)
//         │     ├── NullPointerException
//         │     ├── ArithmeticException
//         │     └── ArrayIndexOutOfBoundsException
//   └── Error (erros graves, não tratáveis)
//         ├── OutOfMemoryError
//         └── StackOverflowError`, lang: "java" },
        { t: "h", h: "try-with-resources (Java 7+)" },
        { t: "p", p: "Recursos que implementam AutoCloseable são fechados automaticamente ao final do bloco try — sem precisar de finally." },
        { t: "code", c: String.raw`import java.io.*;

try (BufferedReader br = new BufferedReader(new FileReader("arquivo.txt"))) {
    String linha = br.readLine();
    System.out.println(linha);
} catch (IOException e) {
    System.out.println("Erro ao ler: " + e.getMessage());
}
// br é fechado automaticamente`, lang: "java" },
        { t: "note", p: "O bloco finally é útil para liberar recursos manualmente, mas try-with-resources é preferível para I/O — o código fica mais limpo e seguro." },
        { t: "warn", p: "Capture exceções específicas antes de Exception genérica. Um catch(Exception e) amplo esconde bugs e dificulta o diagnóstico." }
      ],
      quiz: [
        { q: "O bloco finally:", opts: ["Executa apenas com erro.", "Executa apenas sem erro.", "Executa sempre, com ou sem exceção.", "É opcional e nunca é necessário."], ans: 2, expl: "finally roda incondicionalmente: mesmo que haja return ou exceção não capturada, ele sempre executa." },
        { q: "throw serve para:", opts: ["Capturar uma exceção.", "Lançar uma exceção de propósito.", "Declarar um método.", "Fechar um recurso."], ans: 1, expl: "throw lança (gera) uma exceção deliberadamente, obrigando o chamador a tratá-la." },
        { q: "throws na assinatura de um método significa:", opts: ["O método lança exceções que não trata internamente.", "O método captura todas as exceções.", "O método é estático.", "O método não retorna valor."], ans: 0, expl: "throws declara que o método pode lançar exceções específicas — o chamador deve tratá-las ou propagá-las." },
        { q: "Exceções unchecked são:", opts: ["Obrigatoriamente tratadas pelo compilador.", "Erros de programação; o compilador não exige tratamento.", "Apenas IOExceptions.", "Erros de hardware."], ans: 1, expl: "Unchecked (RuntimeException e subclasses) são erros de programação — o compilador não força o try/catch." },
        { q: "try-with-resources fecha automaticamente recursos que:", opts: ["Não implementam nada.", "Implementam AutoCloseable.", "São strings.", "São primitivos."], ans: 1, expl: "AutoCloseable é a interface que o try-with-resources requer para fechar o recurso automaticamente." },
        { q: "A exceção mais grave em Java é:", opts: ["Exception", "RuntimeException", "Error", "IOException"], ans: 2, expl: "Error (como OutOfMemoryError, StackOverflowError) representa falhas graves que o programa normalmente não pode recuperar." },
        { q: "Qual é a exceção lançada por 10 / 0 com int?", opts: ["NullPointerException", "ArithmeticException", "IOException", "ArrayIndexOutOfBoundsException"], ans: 1, expl: "Divisão por zero inteira lança ArithmeticException, uma unchecked exception." },
        { q: "catch(Exception e) após catch(IOException e) causa:", opts: ["Erro de compilação.", "O catch(Exception) nunca será reached (erro).", "Funciona normalmente.", "Executa ambos."], ans: 1, expl: "Exception é superclass de IOException; se catch(Exception) vem antes, o compilador marca como unreachable code." },
        { q: "Um método que abre um arquivo e não trata IOException deve:", opts: ["Ignorar o erro.", "Declarar throws IOException na assinatura.", "Usar try sem catch.", "Usar finally apenas."], ans: 1, expl: "IOException é checked; o método deve tratá-la com try/catch ou propagá-la com throws IOException." },
        { q: "O que e.getMessage() retorna?", opts: ["O tipo da exceção.", "A mensagem descritiva do erro.", "A pilha de chamadas.", "O objeto inteiro."], ans: 1, expl: "getMessage() retorna a string descritiva do erro, definida no construtor da exceção." }
      ]
    },
    {
      id: "java-generics",
      title: "Generics",
      subtitle: "Classes e métodos genéricos, wildcards e type erasure.",
      blocks: [
        { t: "h", h: "O que são Generics?" },
        { t: "p", p: "Generics permitem criar classes, interfaces e métodos que trabalham com tipos parametrizados. Em vez de usar Object (que perde type safety), você define um tipo que será substituído em tempo de compilação." },
        { t: "code", c: String.raw`public class Caixa<T> {
    private T conteudo;

    public void guardar(T item) {
        this.conteudo = item;
    }

    public T pegar() {
        return conteudo;
    }
}

// uso
Caixa<String> caixaTexto = new Caixa<>();
caixaTexto.guardar("Olá");
String texto = caixaTexto.pegar();  // sem casting

Caixa<Integer> caixaNumero = new Caixa<>();
caixaNumero.guardar(42);
int num = caixaNumero.pegar();  // sem casting, autoboxing automático`, lang: "java" },
        { t: "h", h: "Múltiplos tipos genéricos" },
        { t: "code", c: String.raw`public class Par<A, B> {
    private A primeiro;
    private B segundo;

    public Par(A primeiro, B segundo) {
        this.primeiro = primeiro;
        this.segundo = segundo;
    }

    public A getPrimeiro() { return primeiro; }
    public B getSegundo() { return segundo; }
}

Par<String, Integer> par = new Par<>("Idade", 25);
System.out.println(par.getPrimeiro() + ": " + par.getSegundo());`, lang: "java" },
        { t: "h", h: "Métodos genéricos" },
        { t: "p", p: "O tipo genérico pode ser definido no método, não apenas na classe. O compilador infere o tipo a partir dos argumentos." },
        { t: "code", c: String.raw`public static <T> void imprimirArray(T[] array) {
    for (T elem : array) {
        System.out.print(elem + " ");
    }
    System.out.println();
}

// o tipo T é inferido a partir do argumento
String[] nomes = {"Ana", "Bia", "Ivo"};
Integer[] nums = {1, 2, 3};
imprimirArray(nomes);  // Ana Bia Ivo
imprimirArray(nums);   // 1 2 3`, lang: "java" },
        { t: "h", h: "Wildcards: ? extends e ? super" },
        { t: "p", p: "Wildcards definem limites nos tipos que um parâmetro genérico aceita. São fundamentais para Flexibilidade e segurança em APIs." },
        { t: "lst", items: [
          "? extends T: aceita T ou qualquer subclasse (leitura/upper bound).",
          "? super T: aceita T ou qualquer superclasse (escrita/lower bound).",
          "? (unbounded): aceita qualquer tipo."
        ]},
        { t: "code", c: String.raw`import java.util.ArrayList;
import java.util.List;

// ? extends Number — aceita Number ou subclasses (Integer, Double...)
public static double soma(List<? extends Number> numeros) {
    double total = 0;
    for (Number n : numeros) {
        total += n.doubleValue();
    }
    return total;
}

// ? super Integer — aceita Integer ou superclasses (Number, Object)
public static void adicionar(List<? super Integer> lista, int valor) {
    lista.add(valor);
}

List<Integer> inteiros = List.of(1, 2, 3);
System.out.println(soma(inteiros));  // 6.0

List<Number> numeros = new ArrayList<>();
adicionar(numeros, 10);`, lang: "java" },
        { t: "h", h: "Type Erasure" },
        { t: "p", p: "Em runtime, o Java remove todas as informações de tipo genérico — é a type erasure. Caixa<String> e Caixa<Integer> viram Caixa na memória. Isso significa que não é possível fazer new T() ou instance checks com T." },
        { t: "code", c: String.raw`// Em runtime, isto NÃO funciona:
// if (obj instanceof T)  // ERRO de compilação
// T instancia = new T(); // ERRO de compilação

// Type erasure significa que isto compila:
List<String> lista = new ArrayList<>();
List<Integer> lista2 = new ArrayList<>();
// Ambos são o mesmo tipo em runtime: List (raw type)`, lang: "java" },
        { t: "note", p: "O PECS原则: Producer Extends, Consumer Super. Se uma coleção é produzida (lida) pelo método, use ? extends. Se é consumida (escrita), use ? super." },
        { t: "warn", p: "Não é possível usar tipos primitivos em generics: List<int> é inválido. Use Integer, Double, etc. (autoboxing cuida da conversão)." }
      ],
      quiz: [
        { q: "Generics em Java servem para:", opts: ["Aumentar a velocidade do programa.", "Garantir type safety com tipos parametrizados.", "Substituir herança.", "Definir constantes."], ans: 1, expl: "Generics permitem criar código reutilizável que mantém type safety: o compilador verifica os tipos em tempo de compilação." },
        { q: "Caixa<T> significa que T é:", opts: ["Um tipo real em runtime.", "Um parâmetro de tipo substituído em compilação.", "Uma classe abstrata.", "Um método estático."], ans: 1, expl: "T é um placeholder de tipo; em compilação, ele é substituído pelo tipo real (String, Integer, etc.)." },
        { q: "Métodos genéricos declaram o tipo com:", opts: ["public T metodo()", "public <T> T metodo()", "public T<> metodo()", "public <T> metodo()"], ans: 1, expl: "O <T> antes do tipo de retorno declara o parâmetro de tipo do método." },
        { q: "? extends Number significa:", opts: ["Apenas Number.", "Number ou qualquer subclasse de Number.", "Qualquer tipo.", "Apenas primitivos."], ans: 1, expl: "? extends T aceita T e qualquer classe que herde de T (upper bound)." },
        { q: "? super Integer significa:", opts: ["Apenas Integer.", "Integer ou qualquer superclasse de Integer.", "Qualquer tipo.", "Apenas Number."], ans: 1, expl: "? super T aceita T e qualquer classe-mãe de T (lower bound). Útil para métodos que escrevem na coleção." },
        { q: "Type erasure significa:", opts: ["O tipo é removido em runtime.", "O compilador remove todos os generics.", "Os tipos são verificados em runtime.", "Generics não existem em Java."], ans: 0, expl: "Em runtime, a JVM não sabe se uma lista é List<String> ou List<Integer>; a informação do tipo é apagada." },
        { q: "Por que não se pode fazer new T()?", opts: ["T não existe em runtime por causa da type erasure.", "É permitido.", "T é sempre Object.", "O compilador permite mas a JVM não."], ans: 0, expl: "Type erasure remove T em runtime; a JVM não tem como saber qual construtor chamar." },
        { q: "List<int> em Java:", opts: ["Funciona com autoboxing.", "Não é válido — use List<Integer>.", "Cria uma lista de primitivos.", "Compila mas gera erro em runtime."], ans: 1, expl: "Generics não aceitam tipos primitivos; o correto é List<Integer>, que usa autoboxing entre int e Integer." },
        { q: "O que PECS significa?", opts: ["Producer Extends, Consumer Super.", "Primitive Extends, Class Super.", "Public Extends, Constructor Super.", "Parameter Erasure, Class Safety."], ans: 0, expl: "PECS: Producer Extends, Consumer Super — se você lê da coleção, use extends; se escreve, use super." },
        { q: "Sem generics, qual problema pode ocorrer?", opts: ["O programa é mais lento.", "ClassCastException em runtime por casting incorreto.", "Erro de compilação imediato.", "O compilador rejeita o código."], ans: 1, expl: "Sem generics, você precisa de casting manual e pode receber ClassCastException se o tipo estiver errado." }
      ]
    }
  ]
};