/* Curso: PHP */
window.COURSES = window.COURSES || {};
window.COURSES.php = {
  name: "PHP",
  topics: [
    {
      id: "php-intro",
      title: "Introdução ao PHP",
      subtitle: "Uma linguagem server-side que domina a web.",
      blocks: [
        { t: "h", h: "O que é PHP?" },
        { t: "p", p: "PHP (PHP: Hypertext Preprocessor) é uma linguagem de script de uso geral, especialmente voltada para o desenvolvimento web. O código PHP é executado no servidor, que gera o HTML enviado ao navegador — por isso é dita \"server-side\". Segundo a W3Techs, mais de 75% dos sites com back-end conhecido usam PHP." },
        { t: "h", h: "Como o PHP funciona" },
        { t: "lst", items: [
          "O navegador envia uma requisição HTTP ao servidor.",
          "O servidor encontra o arquivo .php e o executa com o interpretador PHP.",
          "O PHP processa o código (consultas a banco, lógica, etc.).",
          "O resultado HTML é devolvido ao navegador, que só recebe o HTML pronto."
        ]},
        { t: "note", p: "O navegador NUNCA vê o código PHP — ele só recebe HTML, CSS e JavaScript. Toda a lógica acontece no servidor." },
        { t: "h", h: "Onde rodar o PHP?" },
        { t: "lst", items: [
          "XAMPP / Laragon / WAMP: pacotes que incluem Apache + PHP + MySQL.",
          "PHP nativo: php -S localhost:8000 (servidor de desenvolvimento integrado).",
          "Docker: imagens oficiais do PHP para ambientes isolados.",
          "Produção: provedores como DigitalOcean, AWS ou shared hosting."
        ]},
        { t: "h", h: "Sintaxe básica" },
        { t: "p", p: "Todo código PHP fica entre as tags <?php e ?>. Pode ser misturado com HTML. O arquivo deve ter a extensão .php." },
        { t: "code", c: String.raw`<?php
echo "Olá, mundo!";
?>`, lang: "php" },
        { t: "h", h: "echo e print" },
        { t: "p", p: "echo é a forma mais usada para enviar texto ao navegador. Aceita múltiplos argumentos e não retorna valor. print aceita apenas um argumento e retorna 1." },
        { t: "code", c: String.raw`<?php
echo "Olá, ";
echo "mundo!";
echo "<br>";

print "Isso também imprime";
?>`, lang: "php" },
        { t: "h", h: "Comentários" },
        { t: "p", p: "Comentários são ignorados pelo interpretador. São úteis para documentar o código." },
        { t: "code", c: String.raw`<?php
// Isso é um comentário de uma linha

# Outra forma de comentário de uma linha

/*
   Isso é um
   comentário de
   múltiplas linhas
*/

echo "Comentários não aparecem na saída";
?>`, lang: "php" },
        { t: "warn", p: "Se você esquecer a tag de fechamento ?> em um arquivo que contém apenas código PHP, o interpretador funciona normalmente. Na verdade, omitir a tag final é considerado boa prática para evitar espaços em branco acidentais." }
      ],
      quiz: [
        { q: "PHP significa:", opts: ["Personal Home Page", "PHP: Hypertext Preprocessor", "Programa Hipotético de Programação", "Pre Hyper Page"], ans: 1, expl: "PHP é uma sigla recursiva que significa PHP: Hypertext Preprocessor, refletindo sua evolução de uma ferramenta pessoal para uma linguagem completa." },
        { q: "Onde o código PHP é executado?", opts: ["No navegador do usuário.", "No servidor web.", "No compilador local.", "No sistema operacional diretamente."], ans: 1, expl: "O PHP é interpretado no servidor; o navegador só recebe o HTML resultante, nunca o código-fonte PHP." },
        { q: "A tag que inicia um bloco PHP é:", opts: ["<?php", "<php>", "<script php>", "<?"], ans: 0, expl: "A tag padrão é <?php. A tag curta <? é alternativa e pode não estar habilitada em todas as configurações." },
        { q: "Qual instrução envia texto ao navegador?", opts: ["echo", "return", "print_r", "var_dump"], ans: 0, expl: "echo é a forma mais comum e eficiente de enviar texto ao navegador. print também funciona, mas aceita apenas um argumento." },
        { q: "Um comentário de linha em PHP começa com:", opts: ["#", "//", "/*", " Ambas // e #"], ans: 3, expl: "Tanto // quanto # são válidos para comentários de uma linha em PHP. /**/ serve para múltiplas linhas." },
        { q: "A extensão correta para um arquivo PHP é:", opts: [".html", ".php", ".php3", ".phtml"], ans: 1, ext: "A extensão padrão é .php. .phtml é usada para misturar PHP e HTML em algum frameworks antigos." },
        { q: "O que acontece se o navegador receber código PHP cru?", opts: ["O navegador interpreta PHP normalmente.", "O PHP não foi processado pelo servidor — possível erro de configuração.", "O navegador baixa o arquivo.", "Nada acontece."], ans: 1, expl: "Se o navegador recebe código PHP, significa que o servidor não o processou. Verifique se o Apache/Nginx está configurado com PHP." },
        { q: "Qual é a vantagem de omitir a tag de fechamento ?>?", opts: ["O código roda mais rápido.", "Evita espaços ou quebras de linha acidentais no final do arquivo.", "É obrigatório desde o PHP 8.", "Melhora a legibilidade apenas."], ans: 1, expl: "Espaços ou quebras após ?> podem causar headers já enviados. Omitir a tag evita esse problema silencioso." },
        { q: "echo e print são semelhantes, mas a diferença principal é:", opts: ["echo não existe, apenas print.", "echo aceita múltiplos argumentos; print aceita apenas um.", "print é mais rápido que echo.", "echo retorna 1; print não retorna nada."], ans: 1, expl: "echo aceita múltiplos argumentos sem parênteses (echo 'a', 'b'), enquanto print aceita apenas um e retorna 1." },
        { q: "PHP é classificada como linguagem:", opts: ["Compilada.", "Server-side (executada no servidor).", "Client-side (executada no navegador).", "De baixo nível."], ans: 1, expl: "PHP é uma linguagem server-side: o código é executado no servidor, e o resultado (geralmente HTML) é enviado ao navegador." }
      ]
    },
    {
      id: "php-variaveis",
      title: "Variáveis e Tipos de Dados",
      subtitle: "Criando variáveis com $ e entendendo os tipos do PHP.",
      blocks: [
        { t: "h", h: "Variáveis em PHP" },
        { t: "p", p: "Variáveis em PHP começam sempre com o cifrão $. O nome deve começar com uma letra ou sublinhado, e pode conter letras, números e sublinhados. PHP é fracamente tipado — o tipo é definido automaticamente pelo valor atribuído." },
        { t: "code", c: String.raw`<?php
$nome = "Gabriel";
$idade = 25;
$altura = 1.78;
$aprovado = true;

echo "$nome tem $idade anos.";
?>`, lang: "php" },
        { t: "h", h: "Tipos de dados" },
        { t: "lst", items: [
          "int: números inteiros (25, -3, 1000)",
          "float: números decimais (3.14, -0.5)",
          "string: textos (\"Olá\", 'Mundo')",
          "bool: verdadeiro ou falso (true, false)",
          "array: coleção de valores",
          "null: ausência de valor"
        ]},
        { t: "code", c: String.raw`<?php
$inteiro = 42;
$decimal = 3.14;
$texto = "Olá";
$booleano = true;
$vazio = null;
$lista = [1, 2, 3];

echo gettype($inteiro);    // integer
echo gettype($decimal);    // double
echo gettype($texto);      // string
echo gettype($booleano);   // boolean
echo gettype($vazio);      // NULL
echo gettype($lista);      // array
?>`, lang: "php" },
        { t: "h", h: "var_dump: inspecionando valores" },
        { t: "p", p: "var_dump() exibe o tipo e o valor de uma variável. É essencial para depuração. print_r() é mais amigável para arrays." },
        { t: "code", c: String.raw`<?php
$idade = 25;
$nome = "Ana";
$valores = [1, 2, 3];

var_dump($idade);     // int(25)
var_dump($nome);      // string(3) "Ana"

echo "<pre>";
print_r($valores);
// Array
// (
//     [0] => 1
//     [1] => 2
//     [2] => 3
// )
echo "</pre>";
?>`, lang: "php" },
        { t: "h", h: "Type Juggling (conversão automática)" },
        { t: "p", p: "PHP converte tipos automaticamente conforme a operação. Isso se chama type juggling. Pode ser útil, mas também causar surpresas." },
        { t: "code", c: String.raw`<?php
$a = "5" + 3;      // $a é int(8) — a string "5" virou número
$b = "olá" + 0;    // $b é int(0) — conversão falhou silenciosamente
$c = true + 1;     // $c é int(2) — true vale 1 em aritmética
$d = false + 5;    // $d é int(5) — false vale 0

var_dump($a, $b, $c, $d);
?>`, lang: "php" },
        { t: "h", h: "Casting explícito" },
        { t: "p", p: "Para evitar surpresas com type juggling, faça a conversão manualmente com casting:" },
        { t: "code", c: String.raw`<?php
$valor = "42";

$inteiro = (int) $valor;    // 42
$float = (float) $valor;   // 42.0
$booleano = (bool) $valor; // true (string não-vazia)
$bytes = strlen((string) 12345); // 5

var_dump($inteiro, $float, $booleano);
?>`, lang: "php" },
        { t: "note", p: "Use empty() para verificar se uma variável está vazia (null, 0, \"\", false, array vazio). Use isset() para verificar se foi definida (diferente de null). is_null() testa especificamente null." }
      ],
      quiz: [
        { q: "Como declaramos uma variável em PHP?", opts: ["var nome;", "$nome;", "nome;", "#nome"], ans: 1, expl: "Todas as variáveis em PHP começam com o cifrão $. É a marca registrada da linguagem." },
        { q: "O que retorna gettype(true)?", opts: ["\"boolean\"", "\"bool\"", "\"true\"", "\"integer\""], ans: 0, expl: "gettype() retorna uma string com o nome do tipo: \"boolean\" para true/false." },
        { q: "\"5\" + 3 em PHP resulta em:", opts: ["8 (int)", "\"53\" (string)", "\"8\" (string)", "Erro de tipo"], ans: 0, expl: "PHP converte automaticamente \"5\" para 5 (type juggling), e o resultado é int(8)." },
        { q: "var_dump() é usado para:", opts: ["Imprimir texto bonito.", "Exibir o tipo e o valor de uma variária (depuração).", "Declarar variáveis.", "Importar módulos."], ans: 1, expl: "var_dump() mostra o tipo e o valor detalhadamente — essencial para depurar código PHP." },
        { q: "Qual valorbooleano é considerado \"falso\" em PHP?", opts: ["Apenas false.", "false, 0, \"\", null, array vazio.", "Apenas 0.", "Apenas \"\"."], ans: 1, expl: "Em PHP, false, 0, 0.0, \"\", null e array vazio são todos falsy — evaluates to false em contexto booleano." },
        { q: "Qual a diferença entre isset() e empty()?", opts: ["São idênticos.", "isset() verifica se a variável foi definida; empty() verifica se está vazia.", "empty() é mais rápido.", "isset() só funciona com strings."], ans: 1, expl: "isset() retorna true se a variável existe e não é null. empty() retorna true para null, 0, \"\", false e array vazio." },
        { q: "O que resulta (int) \"3.14\" em PHP?", opts: ["3.14", "3", "\"3\"", "Erro"], ans: 1, expl: "O cast (int) trunca o decimal: \"3.14\" vira 3. Não arredonda — apenas remove a parte fracionária." },
        { q: "O tipo de null em PHP é:", opts: ["\"null\"", "\"NULL\"", "\"void\"", "\"empty\""], ans: 0, expl: "gettype(null) retorna \"NULL\" e is_null() retorna true. null representa ausência de valor." },
        { q: "true + true em PHP resulta em:", opts: ["2 (int)", "\"truetrue\" (string)", "true (bool)", "Erro"], ans: 0, expl: "true é convertido para 1 em aritmética; true + true = 2." },
        { q: "Para forçar a conversão de tipo, usamos:", opts: ["type()", "cast como (int), (float), (string), etc.", "convert()", "auto()"], ans: 1, expl: "O casting explícito como (int) $valor converte para o tipo desejado, evitando surpresas do type juggling." }
      ]
    },
    {
      id: "php-operadores",
      title: "Operadores",
      subtitle: "Aritméticos, relacionais, lógicos e especiais do PHP.",
      blocks: [
        { t: "h", h: "Operadores aritméticos" },
        { t: "lst", items: [
          "+   soma             5 + 3 = 8",
          "-   subtração        5 - 3 = 2",
          "*   multiplicação    5 * 3 = 15",
          "/   divisão          10 / 3 = 3.3333",
          "%   módulo (resto)   10 % 3 = 1",
          "**  potência          2 ** 3 = 8"
        ]},
        { t: "code", c: String.raw`<?php
echo 10 / 3;    // 3.3333...
echo PHP_EOL;
echo 10 % 3;    // 1
echo PHP_EOL;
echo 2 ** 3;    // 8
?>`, lang: "php" },
        { t: "h", h: "Operadores de atribuição" },
        { t: "lst", items: [
          "=   atribuição simples",
          "+=  soma e atribui     $x += 3 é $x = $x + 3",
          "-=  subtrai e atribui  $x -= 3 é $x = $x - 3",
          "*=  multiplica e atribui",
          "/=  divide e atribui",
          ".=  concatena e atribui"
        ]},
        { t: "h", h: "Operador de concatenação" },
        { t: "p", p: "Em PHP, o ponto (.) concatena strings. Não use + para juntar textos — isso é comum em outras linguagens!" },
        { t: "code", c: String.raw`<?php
$nome = "Gabriel";
$saudacao = "Olá, " . $nome . "!";
echo $saudacao;  // Olá, Gabriel!

// .= concatena e atribui
$lista = "Maçã";
$lista .= ", Banana";
$lista .= ", Laranja";
echo $lista;  // Maçã, Banana, Laranja
?>`, lang: "php" },
        { t: "h", h: "Operadores relacionais" },
        { t: "p", p: "Comparam dois valores e retornam true ou false." },
        { t: "lst", items: [
          "==   igual (compara valor)",
          "===  idêntico (compara valor E tipo)",
          "!=   diferente",
          "!==  não idêntico",
          ">    maior que",
          "<    menor que",
          ">=   maior ou igual",
          "<=   menor ou igual"
        ]},
        { t: "code", c: String.raw`<?php
var_dump(1 == "1");    // true  (compara valor)
var_dump(1 === "1");   // false (int !== string)
var_dump(0 == false);  // true
var_dump(0 === false); // false (int !== bool)
var_dump(null == "");  // true
var_dump(null === ""); // false
?>`, lang: "php" },
        { t: "h", h: "Operadores lógicos" },
        { t: "lst", items: [
          "&& ou and: verdadeiro se AMBOS forem verdadeiros",
          "|| ou or:  verdadeiro se PELO MENOS UM for verdadeiro",
          "! ou not: inverte o valor booleano"
        ]},
        { t: "code", c: String.raw`<?php
$idade = 20;
$tem_cnh = true;

if ($idade >= 18 && $tem_cnh) {
    echo "Pode dirigir!";
}

if ($idade < 16 || !$tem_cnh) {
    echo "Não pode dirigir.";
}
?>`, lang: "php" },
        { t: "h", h: "Operadores especiais" },
        { t: "lst", items: [
          "??  null coalescing: retorna o valor da esquerda se não for null",
          "<=> spaceship: compara dois valores (-1, 0 ou 1)",
          "?:  ternário: $x ? $a : $b"
        ]},
        { t: "code", c: String.raw`<?php
// Null coalescing
$nome = $_GET['nome'] ?? "Anônimo";
echo $nome;

// Spaceship
echo 1 <=> 2;   // -1 (menor)
echo 5 <=> 5;   // 0  (igual)
echo 9 <=> 3;   // 1  (maior)

// Ternário
$idade = 20;
$mensagem = ($idade >= 18) ? "Maior" : "Menor";
echo $mensagem;
?>`, lang: "php" },
        { t: "warn", p: "Cuidado com == (igual) em PHP: 0 == \"\" retorna true, null == false retorna true. Para comparações seguras, sempre prefira === (idêntico), que compara valor e tipo simultaneamente." }
      ],
      quiz: [
        { q: "Qual operador concatena strings em PHP?", opts: ["+", "&", ".", "&&"], ans: 2, expl: "O ponto (.) é o operador de concatenação. Não confunda com + que faz soma em PHP." },
        { q: "Qual é a diferença entre == e ===?", opts: ["Não há diferença.", "== compara valor; === compara valor e tipo.", "== é mais rápido.", "=== só funciona com strings."], ans: 1, expl: "=== (idêntico) verifica se o valor e o tipo são iguais, evitando coerções indesejadas." },
        { q: "10 % 3 retorna:", opts: ["3.333", "3", "1", "0"], ans: 2, expl: "O operador % retorna o resto da divisão inteira: 10 / 3 = 3 resto 1." },
        { q: "\"Hello\" . \" World\" retorna:", opts: ["Hello World", "HelloWorld", "\"Hello World\"", "Erro"], ans: 0, expl: "O . concatena com um espaço implícito apenas se houver um na string. O resultado é \"Hello World\"." },
        { q: "O operador ?? (null coalescing) retorna:", opts: ["O valor da esquerda se for null.", "Sempre o valor da direita.", "Um erro.", "O tipo da variável."], ans: 0, expl: "?? retorna o valor da esquerda se não for null; caso contrário, usa o da direita. Útil para valores padrão." },
        { q: "O operador <=> (spaceship) retorna 1 quando:", opts: ["Os valores são iguais.", "O da esquerda é menor.", "O da esquerda é maior.", "Sempre retorna 0."], ans: 2, expl: "<=> retorna -1 (menor), 0 (igual) ou 1 (maior), comparando os dois operandos." },
        { q: "O que retorna 2 ** 3 em PHP?", opts: ["6", "8", "5", "23"], ans: 1, expl: "** é o operador de potência: 2 elevado a 3 = 8." },
        { q: "Qual operador equivale a $x = $x + 1?", opts: ["$x++", "$x +=", "$x + 1", "Todos anteriores"], ans: 3, expl: "$x++ (pós-incremento), $x++ e $x += 1 todas somam 1 a $x. $x + 1 não atribui de volta, então depende do contexto." },
        { q: "0 == \"\" em PHP retorna:", opts: ["true", "false", "null", "Erro"], ans: 0, expl: "Com ==, PHP faz coerção: 0 e \"\" são considerados iguais. Use === para evitar isso: 0 === \"\" retorna false." },
        { q: "Qual é a precedência: && ou ||?", opts: ["|| tem maior precedência.", "São avaliados da esquerda para direita na mesma precedência.", "&& tem menor precedência.", "Depende da versão do PHP."], ans: 1, expl: "&& e || têm a mesma precedência e são avaliados da esquerda para a direita. Use parênteses para clareza." }
      ]
    },
    {
      id: "php-condicionais",
      title: "Condicionais",
      subtitle: "if, else, switch e match — tomando decisões no PHP.",
      blocks: [
        { t: "h", h: "if / elseif / else" },
        { t: "p", p: "Estrutura básica para tomar decisões. Testa uma condição e executa o bloco correspondente." },
        { t: "code", c: String.raw`<?php
$nota = 7.5;

if ($nota >= 7) {
    echo "Aprovado!";
} elseif ($nota >= 5) {
    echo "Recuperação.";
} else {
    echo "Reprovado.";
}
?>`, lang: "php" },
        { t: "h", h: "switch" },
        { t: "p", p: "O switch compara um valor com múltiplos casos. É útil quando há muitas condições possíveis para a mesma variável. Não esqueça o break!" },
        { t: "code", c: String.raw`<?php
$dia = date("N"); // 1=segunda, 7=domingo

switch ($dia) {
    case 1:
        echo "Segunda-feira";
        break;
    case 2:
        echo "Terça-feira";
        break;
    case 6:
    case 7:
        echo "Fim de semana!";
        break;
    default:
        echo "Dia útil";
        break;
}
?>`, lang: "php" },
        { t: "h", h: "match (PHP 8+)" },
        { t: "p", p: "O match é uma versão mais robusta do switch: compara com === (idêntico), exige que todos os caminhos retornem valor e não precisa de break. Muito mais seguro!" },
        { t: "code", c: String.raw`<?php
$statusCode = 404;

$mensagem = match ($statusCode) {
    200 => "Sucesso",
    301 => "Redirecionamento permanente",
    404 => "Não encontrado",
    500 => "Erro interno do servidor",
    default => "Código desconhecido",
};

echo $mensagem; // Não encontrado

// match com múltiplos valores
$diasUteis = match (date("N")) {
    "1", "2", "3", "4", "5" => "Dia útil",
    "6", "7" => "Fim de semana",
};
?>`, lang: "php" },
        { t: "h", h: "Operador ternário" },
        { t: "p", p: "Uma forma compacta de if/else em uma linha. Estrutura: condição ? valor_verdadeiro : valor_falso." },
        { t: "code", c: String.raw`<?php
$idade = 20;
$status = ($idade >= 18) ? "Maior" : "Menor";
echo $status; // Maior

// Aninhado (cuidado com legibilidade)
$nota = 7;
$situacao = ($nota >= 7) ? "Aprovado"
           : (($nota >= 5) ? "Recuperação" : "Reprovado");
?>`, lang: "php" },
        { t: "h", h: "Null coalescing em condicionais" },
        { t: "p", p: "O ?? é perfeito para definir valores padrão de forma limpa e segura." },
        { t: "code", c: String.raw`<?php
$nome = $_GET['nome'] ?? "Anônimo";
$tema = $_COOKIE['tema'] ?? "light";

echo "Bem-vindo, $nome! Tema: $tema";
?>`, lang: "php" },
        { t: "note", p: "O match (PHP 8+) é estritamente mais seguro que o switch porque: (1) compara com === evitando surpresas de type juggling, (2) obriga que todos os caminhos sejam cobertos (ou tenham default), e (3) retorna valor, permitindo atribuição direta." },
        { t: "warn", p: "No switch, esquecer o break faz o código \"cair\" para os próximos cases (fallthrough). Isso pode ser intencional (casos 6 e 7 no exemplo) mas geralmente é um bug. O match não tem esse problema." }
      ],
      quiz: [
        { q: "Qual a estrutura correta de um if em PHP?", opts: ["if (condição) { código }", "if condição: código", "if [condição] código", "if {condição} código"], ans: 0, expl: "PHP usa a sintaxe if (condição) { bloco }, similar ao C/Java/JavaScript." },
        { q: "O que o match faz de diferente do switch?", opts: ["Nada, são idênticos.", "Usa === (idêntico), não precisa de break e retorna valor.", "Só funciona com strings.", "É mais lento que o switch."], ans: 1, expl: "match compara com ===, não precisa de break, todos os caminhos devem retornar valor e gera erro se faltar um case." },
        { q: "Esquecer o break no switch causa:", opts: ["Um erro fatal.", "Fallthrough — executa os cases seguintes sem testar.", "O switch ser ignorado.", "A variável ser resetada."], ans: 1, expl: "Sem break, o PHP executa todos os cases subsequentes até encontrar um break ou o final do switch." },
        { q: "O operador ternário em PHP tem a forma:", opts: ["condição ? v1 : v2", "condição -> v1 : v2", "condição => v1 : v2", "condição if v1 else v2"], ans: 0, expl: "O ternário segue o padrão: condição ? valor_se_true : valor_se_false." },
        { q: "O que $_GET['nome'] ?? \"Anônimo\" faz?", opts: ["Sempre retorna \"Anônimo\".", "Retorna $_GET['nome'] se existir e não for null; senão, \"Anônimo\".", "Gera um erro se 'nome' não existir.", "Atribui \"Anônimo\" a $_GET."], ans: 1, expl: "O ?? (null coalescing) retorna o valor da esquerda se não for null; o da direita é o fallback seguro." },
        { q: "A vantagem do match sobre o switch é:", opts: ["Trabalha com mais tipos.", "É mais seguro: comparação idêntica, retorno de valor e exige cobertura completa.", "Não precisa de parênteses.", "Aceita mais de 256 cases."], ans: 1, expl: "match evita bugs de fallthrough, compara corretamente com === e garante que todos os caminhos retornam algo." },
        { q: "No ternário aninhado, o operador é avaliado:", opts: ["Da esquerda para a direita.", "Da direita para a esquerda.", "Em paralelo.", "Aleatoriamente."], ans: 1, expl: "O ternário em PHP é associativo à direita: (a ? b : c ? d : e) é interpretado como (a ? b : (c ? d : e))." },
        { q: "Um switch sem default:", opts: ["Gera erro de sintaxe.", "Não executa nada se nenhum case combinar.", "Retorna null automaticamente.", "É obrigatório ter default."], ans: 1, expl: "Default é opcional. Se nenhum case combinar e não houver default, o switch simplesmente não faz nada." },
        { q: "Qual valor switch NÃO compara corretamente?", opts: ["\"0\" == 0", "\"1\" == 1", "\"0\" == false", "Todas acima são iguais com =="], ans: 3, expl: "O switch usa == (igual), que faz coerção: \"0\" == 0 é true, \"0\" == false é true. O match evita isso com ===." },
        { q: "O elseif é escrito em PHP como:", opts: ["else if (duas palavras)", "elseif (uma palavra)", "elif", "both elseif e else if"], ans: 3, expl: "PHP aceita tanto elseif quanto else if. elseif (uma palavra) é mais comum na convenção PHP." }
      ]
    },
    {
      id: "php-lacos",
      title: "Laços",
      subtitle: "for, while, do-while e foreach — repetindo código em PHP.",
      blocks: [
        { t: "h", h: "Laço for" },
        { t: "p", p: "O for é usado quando se sabe quantas repetições serão necessárias. Tem três partes: inicialização, condição e incremento." },
        { t: "code", c: String.raw`<?php
for ($i = 1; $i <= 5; $i++) {
    echo "$i ";
}
// Saída: 1 2 3 4 5
?>`, lang: "php" },
        { t: "h", h: "Laço while" },
        { t: "p", p: "O while repete enquanto a condição for verdadeira. Cuidado para não criar loop infinito — algo dentro do laço precisa alterar a condição." },
        { t: "code", c: String.raw`<?php
$contador = 1;
while ($contador <= 5) {
    echo "$contador ";
    $contador++;
}
// Saída: 1 2 3 4 5
?>`, lang: "php" },
        { t: "h", h: "Laço do-while" },
        { t: "p", p: "Diferente do while, o do-while executa o bloco pelo menos uma vez antes de testar a condição." },
        { t: "code", c: String.raw`<?php
$senha = "";
do {
    $senha = readline("Digite a senha: ");
} while ($senha !== "1234");

echo "Acesso liberado!";
?>`, lang: "php" },
        { t: "h", h: "Laço foreach" },
        { t: "p", p: "O foreach percorre automaticamente os elementos de um array. É o laço mais usado para trabalhar com listas em PHP." },
        { t: "code", c: String.raw`<?php
$frutas = ["Maçã", "Banana", "Laranja"];

// Percorrendo os valores
foreach ($frutas as $fruta) {
    echo "$fruta<br>";
}

// Percorrendo chave e valor
$notas = ["Ana" => 9, "Bia" => 7, "Ivo" => 8];
foreach ($notas as $aluno => $nota) {
    echo "$aluno: $nota<br>";
}
?>`, lang: "php" },
        { t: "h", h: "break e continue" },
        { t: "lst", items: [
          "break: encerra o laço imediatamente.",
          "continue: pula para a próxima iteração, ignorando o resto do bloco."
        ]},
        { t: "code", c: String.raw`<?php
// break: para no 3
for ($i = 1; $i <= 10; $i++) {
    if ($i === 4) break;
    echo "$i ";  // 1 2 3
}

echo "<br>";

// continue: pula o 3
for ($i = 1; $i <= 5; $i++) {
    if ($i === 3) continue;
    echo "$i ";  // 1 2 4 5
}
?>`, lang: "php" },
        { t: "h", h: "Laços aninhados" },
        { t: "p", p: "Laços dentro de laços são comuns, especialmente com matrizes bidimensionais." },
        { t: "code", c: String.raw`<?php
$matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

foreach ($matriz as $linha) {
    foreach ($linha as $valor) {
        echo "$valor ";
    }
    echo "<br>";
}
// 1 2 3
// 4 5 6
// 7 8 9
?>`, lang: "php" },
        { t: "warn", p: "Um loop while ou for sem uma condição de saída clara gera loop infinito, travando o servidor. Sempre garanta que a condição eventualmente será false, ou que há um break dentro do laço." }
      ],
      quiz: [
        { q: "Quantas partes tem a inicialização do for?", opts: ["1", "2", "3", "4"], ans: 2, expl: "O for tem três partes: inicialização (i = 0), condição (i < 5) e incremento (i++)." },
        { q: "A principal diferença entre while e do-while é:", opts: ["do-while é mais rápido.", "do-while executa pelo menos uma vez antes de testar.", "while não testa condições.", "do-while só funciona com números."], ans: 1, expl: "do-while sempre executa o bloco uma vez antes de verificar a condição, garantindo pelo menos uma iteração." },
        { q: "O foreach é usado para percorrer:", opts: ["Apenas strings.", "Apenas números.", "Elementos de um array.", "Arquivos."], ans: 2, expl: "foreach foi projetado para iterar sobre arrays, acessando cada chave e valor automaticamente." },
        { q: "O que o continue faz em um laço?", opts: ["Encerra o laço.", "Pula para a próxima iteração.", "Reinicia o programa.", "Imprime o valor atual."], ans: 1, expl: "continue pula o resto do bloco atual e vai direto para a próxima iteração do laço." },
        { q: "foreach ($arr as $key => $val) acessa:", opts: ["Apenas os valores.", "Apenas as chaves.", "Chave e valor de cada elemento.", "O índice numérico."], ans: 2, expl: "A sintaxe foreach ($arr as $key => $val) desempacota tanto a chave quanto o valor em cada iteração." },
        { q: "Para iterar sobre os elementos de um array associativo, o melhor laço é:", opts: ["for", "while", "foreach", "do-while"], ans: 2, expl: "foreach é ideal para arrays associativos porque acessa automaticamente chave e valor, sem precisar de índices numéricos." },
        { q: "Um loop infinito é causado por:", opts: ["Um break dentro do laço.", "Uma condição que nunca se torna falsa.", "Usar while ao invés de for.", "Usar foreach com array vazio."], ans: 1, expl: "Se a condição do laço nunca é atingida (ou falta alterá-la), o laço roda para sempre — isso é um loop infinito." },
        { q: "for ($i = 0; $i < 3; $i++) executa quantas vezes?", opts: ["2", "3", "4", "Infinito"], ans: 1, expl: "i = 0, 1, 2 — são 3 iterações. Quando i chega a 3, a condição é false e o laço termina." },
        { q: "Qual é a forma correta de usar foreach com chave e valor?", opts: ["foreach ($arr as $k, $v)", "foreach ($arr as $k => $v)", "foreach ($arr as $k: $v)", "foreach ($k => $v in $arr)"], ans: 1, expl: "A sintaxe correta é foreach ($arr as $chave => $valor), usando => para associar chave e valor." },
        { q: "O que acontece se usar break dentro de um foreach?", opts: ["O laço continua normalmente.", "O foreach para completamente, saindo do laço.", "Apenas a iteração atual é pulada.", "O array original é modificado."], ans: 1, expl: "break interrompe o foreach imediatamente, não executando mais nenhuma iteração restante." }
      ]
    },
    {
      id: "php-funcoes",
      title: "Funções",
      subtitle: "Criando blocos reutilizáveis com function, parâmetros e closures.",
      blocks: [
        { t: "h", h: "Declarando funções" },
        { t: "p", p: "Funções em PHP são declaradas com a palavra-chave function. Podem ter parâmetros, retorno e são hoisted (podem ser chamadas antes da declaração no código)." },
        { t: "code", c: String.raw`<?php
function somar($a, $b) {
    return $a + $b;
}

echo somar(3, 5);  // 8

function saudacao($nome) {
    echo "Olá, $nome!";
}

saudacao("Ana");  // Olá, Ana!
?>`, lang: "php" },
        { t: "h", h: "Parâmetros com valor padrão" },
        { t: "p", p: "Parâmetros opcionais recebem um valor padrão. Eles devem ficar após os obrigatórios." },
        { t: "code", c: String.raw`<?php
function saudacao($nome, $saudacao = "Olá") {
    echo "$saudacao, $nome!";
}

saudacao("Ana");           // Olá, Ana!
saudacao("Gabriel", "Bom dia");  // Bom dia, Gabriel!
?>`, lang: "php" },
        { t: "h", h: "Tipagem de parâmetros e retorno" },
        { t: "p", p: "Desde o PHP 7, é possível declarar tipos nos parâmetros e no retorno, aumentando a segurança e legibilidade." },
        { t: "code", c: String.raw`<?php
function multiplicar(int $a, int $b): int {
    return $a * $b;
}

function division(float $a, float $b): float {
    if ($b === 0.0) {
        throw new InvalidArgumentException("Divisão por zero");
    }
    return $a / $b;
}

echo multiplicar(3, 4);    // 12
echo division(10.0, 3.0);  // 3.333...
?>`, lang: "php" },
        { t: "h", h: "Pass by reference (&)" },
        { t: "p", p: "Por padrão, PHP passa valores por cópia. Para modificar a variável original, use & (pass by reference)." },
        { t: "code", c: String.raw`<?php
function dobrar(&$valor) {
    $valor *= 2;
}

$x = 5;
dobrar($x);
echo $x;  // 10 (a variável original foi alterada)
?>`, lang: "php" },
        { t: "h", h: "Funções anônimas (closures)" },
        { t: "p", p: "Funções sem nome, atribuídas a variáveis. Úteis como callbacks." },
        { t: "code", c: String.raw`<?php
$quadrado = function($x) {
    return $x * $x;
};

echo $quadrado(5);  // 25

// Closure capturando variável externa
$mult = 3;
$multiplicar = function($x) use ($mult) {
    return $x * $mult;
};

echo $multiplicar(4);  // 12
?>`, lang: "php" },
        { t: "h", h: "Arrow functions (PHP 7.4+)" },
        { t: "p", p: "Uma forma compacta de closures. Capturam variáveis externas automaticamente e o corpo é uma única expressão." },
        { t: "code", c: String.raw`<?php
$quadrado = fn($x) => $x * $x;
$dobro = fn($x) => $x * 2;
$soma = fn($a, $b) => $a + $b;

echo $quadrado(4);  // 16
echo $dobro(5);     // 10
echo $soma(3, 7);   // 10

// Arrow function captura $mult automaticamente
$mult = 3;
$triplo = fn($x) => $x * $mult;
echo $triplo(4);    // 12
?>`, lang: "php" },
        { t: "note", p: "Arrow functions (fn) são ideais para callbacks curtas como array_map e array_filter. Para funções com múltiplas linhas ou lógica complexa, use function normal." }
      ],
      quiz: [
        { q: "Como declarar uma função em PHP?", opts: ["def nome()", "function nome()", "func nome()", "fun nome()"], ans: 1, expl: "PHP usa a palavra-chave function para declarar funções, seguida do nome e parênteses." },
        { q: "Funções em PHP são hoisted?", opts: ["Não, só podem ser chamadas após a declaração.", "Sim, podem ser chamadas antes da declaração no código.", "Depende da versão.", "Apenas funções anônimas."], ans: 1, expl: "Funções nomeadas em PHP são hoisted — podem ser chamadas antes de serem declaradas no arquivo." },
        { q: "O que o & faz nos parâmetros de uma função?", opts: ["Define parâmetro obrigatório.", "Passa por referência, permitindo modificar a variável original.", "Torna o parâmetro opcional.", "Define o tipo do parâmetro."], ans: 1, expl: "Com &, a função recebe uma referência à variável original e pode alterá-la diretamente." },
        { q: "Arrow functions (fn) em PHP:", opts: ["São idênticas a function normal.", "Capturam variáveis externas automaticamente e retornam uma expressão.", "Não existem no PHP.", "Só funcionam com strings."], ans: 1, expl: "fn($x) => $x * $x cria uma closure que captura variáveis externas automaticamente e retorna a expressão." },
        { q: "Para que serve o use() em funções anônimas?", opts: ["Importar arquivos.", "Capturar variáveis do escopo externo.", "Definir o tipo de retorno.", "Criar múltiplos parâmetros."], ans: 1, expl: "use($var) permite que a closure acesse variáveis do escopo externo; arrow functions fazem isso automaticamente." },
        { q: "Uma função que não tem return:", opts: ["Retorna 0.", "Retorna null.", "Retorna a string vazia.", "Gera erro."], ans: 1, expl: "Funções sem return retornam null por padrão em PHP." },
        { q: "Parâmetros com valor padrão devem estar:", opts: ["No início da lista.", "No final da lista.", "Em qualquer posição.", "Antes do nome da função."], ans: 1, expl: "Parâmetros opcionais ficam no final; os obrigatórios vêm primeiro, da esquerda para a direita." },
        { q: "O que retorna function() { return 42; }();?", opts: ["null", "42", "\"42\"", "Erro"], ans: 1, expl: "Uma função anônima pode ser declarada e chamada imediatamente (IIFE), retornando 42." },
        { q: "Para definir o tipo de retorno de uma função, usamos:", opts: ["function nome(): tipo {}", "function nome() -> tipo {}", "function tipo nome() {}", "function nome() : tipo {}"], ans: 3, expl: "A sintaxe é function nome(parametros): TipoRetorno { ... }, com os-pontos-vírgula após os parênteses." },
        { q: "fn($x) => $x * 2 é:", opts: ["Uma function normal.", "Uma arrow function (PHP 7.4+).", "Um operador.", "Uma constante."], ans: 1, expl: "fn é a sintaxe de arrow functions introduzida no PHP 7.4, forma compacta para closures de uma expressão." }
      ]
    },
    {
      id: "php-arrays",
      title: "Arrays",
      subtitle: "Listas indexadas, associativas e funções poderosas para manipulá-las.",
      blocks: [
        { t: "h", h: "Array indexado" },
        { t: "p", p: "Um array indexado usa números inteiros como chaves (começando em 0). Pode ser criado com [] ou array()." },
        { t: "code", c: String.raw`<?php
$frutas = ["Maçã", "Banana", "Laranja"];

echo $frutas[0];  // Maçã
echo $frutas[2];  // Laranja

$frutas[] = "Uva";  // Adiciona no final
count($frutas);      // 4

// Percorrendo
foreach ($frutas as $indice => $fruta) {
    echo "$indice: $fruta<br>";
}
?>`, lang: "php" },
        { t: "h", h: "Array associativo" },
        { t: "p", p: "Chaves personalizadas (strings ou inteiros) associadas a valores. Funciona como um dicionário em Python ou objeto em JavaScript." },
        { t: "code", c: String.raw`<?php
$notas = [
    "Ana" => 9.5,
    "Bia" => 7.0,
    "Ivo" => 8.0,
];

echo $notas["Ana"];  // 9.5

foreach ($notas as $aluno => $nota) {
    echo "$aluno: $nota<br>";
}

// Verificar se chave existe
if (array_key_exists("Bia", $notas)) {
    echo "Bia existe!";
}
?>`, lang: "php" },
        { t: "h", h: "Array multidimensional" },
        { t: "p", p: "Arrays que contêm outros arrays, criando estruturas como matrizes ou registros." },
        { t: "code", c: String.raw`<?php
$turma = [
    ["nome" => "Ana", "nota" => 9.0],
    ["nome" => "Bia", "nota" => 7.5],
    ["nome" => "Ivo", "nota" => 8.0],
];

foreach ($turma as $aluno) {
    echo "{$aluno['nome']}: {$aluno['nota']}<br>";
}

// Matriz numérica
$matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

echo $matriz[1][2]; // 6
?>`, lang: "php" },
        { t: "h", h: "Funções essenciais de array" },
        { t: "code", c: String.raw`<?php
$nums = [3, 1, 4, 1, 5, 9];

// Tamanho
count($nums);             // 6

// Adicionar/remover
array_push($nums, 2);     // adiciona 2 no final
array_pop($nums);         // remove e retorna o último
array_shift($nums);       // remove e retorna o primeiro
array_unshift($nums, 0);  // adiciona 0 no início

// Busca
in_array(4, $nums);       // true
array_search(4, $nums);   // índice do elemento

// Ordenar
sort($nums);              // ordena crescente
rsort($nums);             // ordena decrescente

// Merge e splitting
$a = [1, 2];
$b = [3, 4];
$merged = array_merge($a, $b);  // [1, 2, 3, 4]
?>`, lang: "php" },
        { t: "h", h: "array_map, array_filter, array_reduce" },
        { t: "p", p: "Funções de alta ordem que recebem callbacks e transformam arrays de forma funcional." },
        { t: "code", c: String.raw`<?php
$numeros = [1, 2, 3, 4, 5];

// array_map: transforma cada elemento
$dobros = array_map(fn($n) => $n * 2, $ numeros);
// [2, 4, 6, 8, 10]

// array_filter: filtra elementos
$pares = array_filter($numeros, fn($n) => $n % 2 === 0);
// [2, 4]

// array_reduce: acumula em um único valor
$soma = array_reduce($numeros, fn($acc, $n) => $acc + $n, 0);
// 15

// Array destructuring (list)
[$primeiro, $segundo, ...$resto] = [1, 2, 3, 4, 5];
echo $primeiro;  // 1
echo $segundo;   // 2
print_r($resto); // [3, 4, 5]
?>`, lang: "php" },
        { t: "note", p: "array_map, array_filter e array_reduce são imutáveis: não alteram o array original, retornam um novo array. Prefira essas funções quando a transformação for clara e funcional." },
        { t: "warn", p: "array_push() é desnecessário para adicionar um elemento no final — use $arr[] = $valor, que é mais rápido e idiomático. reserve array_push para adicionar múltiplos elementos de uma vez." }
      ],
      quiz: [
        { q: "Como criar um array associativo em PHP?", opts: ["$arr = [\"chave\" => \"valor\"]", "$arr = {\"chave\": \"valor\"}", "$arr = new Array()", "$arr = (\"chave\" => \"valor\")"], ans: 0, expl: "Arrays associativos usam a sintaxe [\"chave\" => \"valor\"], usando => para associar chaves e valores." },
        { q: "O que count($arr) retorna?", opts: ["O primeiro elemento.", "A quantidade de elementos do array.", "O último índice.", "O tamanho em bytes."], ans: 1, expl: "count() retorna o número de elementos no array, equivalente a len() em Python." },
        { q: "array_map() serve para:", opts: ["Remover elementos.", "Transformar cada elemento com um callback.", "Ordenar o array.", "Mesclar dois arrays."], ans: 1, expl: "array_map() aplica uma função callback a cada elemento e retorna um novo array com os resultados." },
        { q: "Para adicionar um elemento no final de $arr:", opts: ["$arr[] = $valor;", "$arr.add($valor);", "array_add($arr, $valor);", "$arr[$valor] = true;"], ans: 0, expl: "A sintaxe $arr[] = $valor adiciona no final do array, é idiomática e mais rápida que array_push()." },
        { q: "in_array(5, $arr) retorna:", opts: ["O índice do 5.", "true se 5 estiver no array.", "O valor de 5.", "null se não encontrar."], ans: 1, expl: "in_array() retorna true se o valor existe no array, false caso contrário." },
        { q: "array_filter():", opts: ["Remove todos os elementos.", "Retorna um novo array apenas com elementos que passam no teste do callback.", "Adiciona elementos.", "Mescla arrays."], ans: 1, expl: "array_filter() filtra: mantém apenas os elementos para os quais o callback retorna true." },
        { q: "sort() ordena o array:", opts: ["Em ordem alfabética sempre.", "Em ordem crescente (para números) ou alfabética (para strings).", "Em ordem decrescente.", "De forma aleatória."], ans: 1, expl: "sort() ordena in-place em ordem crescente. Para decrescente, use rsort()." },
        { q: "array_merge() faz:", opts: ["Remove duplicatas.", "Combina dois ou mais arrays em um.", "Filtra elementos.", "Inverte a ordem."], ans: 1, expl: "array_merge() combina arrays em um novo array. Para arrays associativos, chaves repetidas são sobrescritas." },
        { q: "[$a, $b, ...$resto] = [1, 2, 3, 4] atribui:", opts: ["$a=1, $b=2, $resto=[3, 4]", "$a=1, $b=2, $resto=3", "$a=1, $b=2, $resto=4", "Erro de sintaxe"], ans: 0, expl: "O spread operator (...) coleta os elementos restantes em um array: $resto recebe [3, 4]." },
        { q: "array_reduce() retorna:", opts: ["Um array.", "Um único valor acumulado pelo callback.", "true ou false.", "O tamanho do array."], ans: 1, expl: "array_reduce() itera o array e acumula um único valor usando a callback, como um somador geral." }
      ]
    },
    {
      id: "php-formularios",
      title: "Formulários e Superglobais",
      subtitle: "Recebendo dados do usuário com $_GET, $_POST e mais.",
      blocks: [
        { t: "h", h: "Formulários HTML e PHP" },
        { t: "p", p: "Formulários HTML enviam dados ao servidor via GET ou POST. O PHP recebe esses dados automaticamente através das superglobais $_GET e $_POST." },
        { t: "code", c: String.raw`<!-- formulario.html -->
<form method="POST" action="receber.php">
    <label>Nome: <input type="text" name="nome"></label><br>
    <label>Email: <input type="email" name="email"></label><br>
    <button type="submit">Enviar</button>
</form>`, lang: "html" },
        { t: "code", c: String.raw`<?php
// receber.php
$nome = $_POST['nome'] ?? '';
$email = $_POST['email'] ?? '';

if (empty($nome) || empty($email)) {
    echo "Preencha todos os campos.";
} else {
    echo "Olá, $nome! Email: $email";
}
?>`, lang: "php" },
        { t: "h", h: "GET vs POST" },
        { t: "lst", items: [
          "GET: dados na URL (?chave=valor). Visível, limitado, bom para buscas/filtros.",
          "POST: dados no corpo da requisição. Não visível na URL, para envios maiores (formulários, uploads)."
        ]},
        { t: "h", h: "$_REQUEST" },
        { t: "p", p: "$_REQUEST contém os dados de $_GET, $_POST e $_COOKIE. É mais ampla, mas menos específica — prefira $_GET ou $_POST explicitamente." },
        { t: "h", h: "$_SERVER" },
        { t: "p", p: "$_SERVER contém informações sobre o ambiente de execução: IP do cliente, método da requisição, URL, headers, etc." },
        { t: "code", c: String.raw`<?php
echo "Método: " . $_SERVER['REQUEST_METHOD']; // GET ou POST
echo "IP: " . $_SERVER['REMOTE_ADDR'];
echo "User-Agent: " . $_SERVER['HTTP_USER_AGENT'];
echo "URL: " . $_SERVER['REQUEST_URI'];
?>`, lang: "php" },
        { t: "h", h: "Sessões ($_SESSION)" },
        { t: "p", p: "Sessões guardam dados do usuário entre páginas. Inicie com session_start() antes de qualquer saída HTML." },
        { t: "code", c: String.raw`<?php
session_start();

// Definir dados da sessão
$_SESSION['usuario'] = "Gabriel";
$_SESSION['logado'] = true;

// Ler dados
if ($_SESSION['logado'] ?? false) {
    echo "Bem-vindo, " . $_SESSION['usuario'];
}

// Destruir sessão
session_destroy();
?>`, lang: "php" },
        { t: "h", h: "Cookies ($_COOKIE)" },
        { t: "p", p: "Cookies são pequenos dados armazenados no navegador. São definidos com set_cookie() ANTES de qualquer saída." },
        { t: "code", c: String.raw`<?php
// Definir cookie (expira em 30 dias)
setcookie("tema", "dark", time() + (30 * 24 * 60 * 60), "/");

// Ler cookie
$tema = $_COOKIE['tema'] ?? "light";
echo "Tema atual: $tema";
?>`, lang: "php" },
        { t: "h", h: "Sanitização de entrada" },
        { t: "p", p: "NUNCA confie em dados do usuário. Sempre sanitize e valide antes de usar em banco de dados ou exibir na tela." },
        { t: "code", c: String.raw`<?php
// Remover espaços extras
$nome = trim($_POST['nome'] ?? '');

// Converter para minúsculas
$email = strtolower(trim($_POST['email'] ?? ''));

// Validar email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo "Email inválido!";
}

// Proteger contra XSS ao exibir
echo htmlspecialchars($nome, ENT_QUOTES, 'UTF-8');

// Remover tags HTML
$comentario = strip_tags($_POST['comentario'] ?? '');
?>`, lang: "php" },
        { t: "warn", p: "Dados vindos de $_GET, $_POST ou $_COOKIE NUNCA devem ser exibidos diretamente na tela sem htmlspecialchars(). Isso previne ataques de Cross-Site Scripting (XSS). Sempre sanitize!" }
      ],
      quiz: [
        { q: "$_POST recebe dados de formulários com method:", opts: ["GET", "POST", "REQUEST", "ENV"], ans: 1, expl: "$_POST recebe dados de formulários que usam method=\"POST\" no atributo do <form>." },
        { q: "$_GET recebe dados pela:", opts: ["URL (query string).", "Requisição AJAX apenas.", "Cookie do navegador.", "Sessão do servidor."], ans: 0, expl: "$_GET captura os parâmetros da URL (?chave=valor&outra=coisa)." },
        { q: "session_start() deve ser chamado:", opts: ["Após o primeiro echo.", "Antes de qualquer saída HTML.", "Depois de session_destroy().", "Dentro do HTML."], ans: 1, expl: "session_start() precisa ser chamada antes de qualquer saída (HTML, echo, espaços) para funcionar corretamente." },
        { q: "Qual função protege contra XSS ao exibir dados do usuário?", opts: ["strip_tags()", "htmlspecialchars()", "addslashes()", "md5()"], ans: 1, expl: "htmlspecialchars() converte < > \" ' & em entidades HTML, prevenindo que scripts maliciosos sejam executados." },
        { q: "filter_var($email, FILTER_VALIDATE_EMAIL) retorna:", opts: ["O email sanitizado.", "true se válido, false caso contrário.", "O email em minúsculas.", "null sempre."], ans: 1, expl: "FILTER_VALIDATE_EMAIL valida se o email tem formato correto, retornando true ou false." },
        { q: "$_COOKIE é preenchido automaticamente pelo PHP com:", opts: ["Dados do servidor.", "Dados que o navegador envia nos cookies.", "Dados da sessão.", "Dados da URL."], ans: 1, expl: "Cookies definidos pelo navegador são enviados a cada requisição e capturados em $_COOKIE." },
        { q: "Onde setcookie() deve ser chamada?", opts: ["Em qualquer lugar do script.", "Antes de qualquer saída de conteúdo.", "Após session_start().", "Dentro do <html>."], ans: 1, expl: "setcookie() envia headers HTTP e deve ser chamada antes de qualquer saída, assim como session_start()." },
        { q: "trim() serve para:", opts: ["Converter para maiúsculas.", "Remover espaços em branco das pontas.", "Remover acentos.", "Converter para número."], ans: 1, expl: "trim() remove espaços, tabs e quebras de linha das extremidades de uma string." },
        { q: "O perigo de exibir $_GET['nome'] diretamente na tela:", opts: ["Só funciona no Chrome.", "Pode causar ataques XSS (Cross-Site Scripting).", "Sempre retorna erro.", "É lento para o servidor."], ans: 1, expl: "Um atacante pode injetar <script>...|</script> no parâmetro da URL, que será executado no navegador da vítima." },
        { q: "strip_tags() faz:", opts: ["Valida emails.", "Remove todas as tags HTML e PHP de uma string.", "Converte caracteres especiais.", "Criptografa o texto."], ans: 1, expl: "strip_tags() remove tags HTML e PHP de uma string, mantendo apenas o texto puro." }
      ]
    },
    {
      id: "php-pdo",
      title: "Conexão com Banco (PDO)",
      subtitle: "Acessando bancos de dados com PDO e prepared statements.",
      blocks: [
        { t: "h", h: "O que é PDO?" },
        { t: "p", p: "PDO (PHP Data Objects) é a camada de acesso a banco de dados do PHP. Funciona com MySQL, PostgreSQL, SQLite, SQL Server e outros. É a forma recomendada — mais segura e flexível que mysql_* (descontinuado) e mysqli." },
        { t: "h", h: "Conectando com MySQL" },
        { t: "code", c: String.raw`<?php
$host = "localhost";
$db   = "minha_base";
$user = "root";
$pass = "";

try {
    $pdo = new PDO(
        "mysql:host=$host;dbname=$db;charset=utf8mb4",
        $user,
        $pass,
        [
            PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            PDO::ATTR_EMULATE_PREPARES   => false,
        ]
    );
    echo "Conexão bem-sucedida!";
} catch (PDOException $e) {
    die("Erro ao conectar: " . $e->getMessage());
}
?>`, lang: "php" },
        { t: "h", h: "Prepared Statements (proteção contra SQL Injection)" },
        { t: "p", p: "Prepared statements separam o SQL dos dados, impedindo que o usuário injete código SQL malicioso. SEMPRE use prepare()!" },
        { t: "code", c: String.raw`<?php
// PERIGOSO - NUNCA FAÇA ISSO:
$usuario = $_POST['usuario'];
// $sql = "SELECT * FROM usuarios WHERE nome = '$usuario'";
// ^ SQL Injection possível!

// SEGURO - Use prepared statements:
$stmt = $pdo->prepare("SELECT * FROM usuarios WHERE nome = :nome");
$stmt->execute(['nome' => $usuario]);
$usuarios = $stmt->fetchAll();
?>`, lang: "php" },
        { t: "h", h: "CRUD completo" },
        { t: "p", p: "CRUD = Create, Read, Update, Delete — as quatro operações básicas de banco de dados." },
        { t: "code", c: String.raw`<?php
// CREATE - Inserir registro
$stmt = $pdo->prepare("INSERT INTO usuarios (nome, email) VALUES (:nome, :email)");
$stmt->execute(['nome' => 'Ana', 'email' => 'ana@email.com']);
echo "ID inserido: " . $pdo->lastInsertId();

// READ - Consultar registros
$stmt = $pdo->query("SELECT * FROM usuarios WHERE id > :id");
$stmt->execute(['id' => 0]);
$usuarios = $stmt->fetchAll();

foreach ($usuarios as $u) {
    echo "{$u['nome']} - {$u['email']}<br>";
}

// READ - Um único registro
$stmt = $pdo->prepare("SELECT * FROM usuarios WHERE id = :id");
$stmt->execute(['id' => 1]);
$usuario = $stmt->fetch();

if ($usuario) {
    echo $usuario['nome'];
}

// UPDATE - Atualizar registro
$stmt = $pdo->prepare("UPDATE usuarios SET email = :email WHERE id = :id");
$stmt->execute(['email' => 'novo@email.com', 'id' => 1]);

// DELETE - Remover registro
$stmt = $pdo->prepare("DELETE FROM usuarios WHERE id = :id");
$stmt->execute(['id' => 1]);
?>`, lang: "php" },
        { t: "h", h: "Tratamento de erros PDO" },
        { t: "p", p: "Configure o PDO para lançar exceções com ERRMODE_EXCEPTION. Assim, erros são capturados com try/catch." },
        { t: "code", c: String.raw`<?php
try {
    $stmt = $pdo->prepare("SELECT * FROM tabela_inexistente");
    $stmt->execute();
} catch (PDOException $e) {
    echo "Erro SQL: " . $e->getMessage();
    // Em produção, log o erro, NUNCA exiba ao usuário
}
?>`, lang: "php" },
        { t: "note", p: "fetch() retorna um único registro. fetchAll() retorna todos como array. fetchColumn() retorna apenas o primeiro valor da primeira coluna." },
        { t: "warn", p: "NUNCA construa consultas SQL concatenando variáveis do usuário ($sql = \"... WHERE id = $id\"). Isso abre vulnerabilidades de SQL Injection. Use SEMPRE prepared statements com parâmetros nomeados (:parametro) ou posicionais (?)." }
      ],
      quiz: [
        { q: "PDO significa:", opts: ["PHP Database Object", "PHP Data Objects", "PHP Data Optimization", "Personal Database Operator"], ans: 1, expl: "PDO significa PHP Data Objects, a interface de acesso a bancos de dados do PHP." },
        { q: "Por que usar prepared statements?", opts: ["São mais rápidos.", "Previnem SQL Injection separando dados da consulta.", "Funcionam apenas com MySQL.", "São obrigatórios no PHP 8."], ans: 1, expl: "Prepared statements separam o SQL dos dados, impedindo que um atacante injete código SQL malicioso." },
        { q: "O método fetch() retorna:", opts: ["Todos os registros.", "Um único registro como array.", "O número de registros afetados.", "Um booleano."], ans: 1, expl: "fetch() retorna a próxima linha do resultado como array associativo (com FETCH_ASSOC)." },
        { q: "PDO::ERRMODE_EXCEPTION faz:", opts: ["Ignora erros.", "Lança exceções PDOException quando há erro SQL.", "Desliga o banco.", "Modo silencioso."], ans: 1, expl: "ERRMODE_EXCEPTION faz o PDO lançar PDOException em vez de retornar false silenciosamente." },
        { q: "fetchAll() retorna:", opts: ["Apenas o primeiro registro.", "Todos os registros do resultado.", "O último registro.", "Apenas uma coluna."], ans: 1, expl: "fetchAll() retorna um array com todos os registros do resultado da consulta." },
        { q: "lastInsertId() retorna:", opts: ["O último erro.", "O ID gerado na última inserção.", "O total de registros.", "O nome da tabela."], ans: 1, expl: "lastInsertId() retorna o ID gerado automaticamente na última operação INSERT com AUTO_INCREMENT." },
        { q: "O parâmetro PDO::ATTR_EMULATE_PREPARES => false:", opts: ["Ativa SQL Injection.", "Usa prepared statements reais do banco de dados.", "Desativa todos os erros.", "É apenas cosmético."], ans: 1, expl: "Desabilitar a emulação faz o banco preparar as consultas de verdade, aumentando a segurança e corretismo." },
        { q: "$stmt->execute(['nome' => 'Ana']) passa:", opts: ["Uma query bruta.", "Parâmetros seguros para a consulta preparada.", "Um array de tabelas.", "Configurações de conexão."], ans: 1, expl: "execute() recebe um array associativo com os valores dos parâmetros nomeados (:nome) da consulta." },
        { q: "Qual é o perigo de $sql = \"SELECT * FROM users WHERE id = '$id'\"?", opts: ["Nenhum, é a forma correta.", "SQL Injection: o valor de $id pode conter código SQL.", "É muito lento.", "Não funciona no PHP."], ans: 1, expl: "Concatenar variáveis diretamente na SQL abre vulnerabilidade de SQL Injection — sempre use prepared statements." },
        { q: "O construtor do PDO recebe:", opts: ["Apenas o nome do banco.", "String de conexão (DSN), usuário e senha.", "Um array de configurações JSON.", "Apenas o host."], ans: 1, expl: "O PDO recebe a DSN (ex: mysql:host=localhost;dbname=test), usuário e senha como parâmetros." }
      ]
    },
    {
      id: "php-erros",
      title: "Tratamento de Erros",
      subtitle: "try/catch/finally, exceptions e tratamento robusto de erros.",
      blocks: [
        { t: "h", h: "Por que tratar erros?" },
        { t: "p", p: "Um programa robusto não pode simplesmente parar quando algo dá errado. O PHP oferece um sistema de exceções (try/catch) para capturar e tratar erros de forma controlada." },
        { t: "h", h: "try / catch / finally" },
        { t: "code", c: String.raw`<?php
try {
    $resultado = 10 / 0;
    echo $resultado;
} catch (DivisionByZeroError $e) {
    echo "Erro: " . $e->getMessage();
} catch (Error $e) {
    echo "Erro geral: " . $e->getMessage();
} finally {
    echo "Isso sempre executa, mesmo se não houver erro.";
}
?>`, lang: "php" },
        { t: "h", h: "Lançando exceções (throw)" },
        { t: "p", p: "Você pode lançar suas próprias exceções com throw. É útil para validar dados e regras de negócio." },
        { t: "code", c: String.raw`<?php
function calcular_idade($ano_nascimento) {
    if ($ano_nascimento < 1900 || $ano_nascimento > date("Y")) {
        throw new InvalidArgumentException(
            "Ano de nascimento inválido: $ano_nascimento"
        );
    }
    return date("Y") - $ano_nascimento;
}

try {
    $idade = calcular_idade(2005);
    echo "Idade: $idade";
} catch (InvalidArgumentException $e) {
    echo "Dado inválido: " . $e->getMessage();
}
?>`, lang: "php" },
        { t: "h", h: "Tipos de exceções" },
        { t: "lst", items: [
          "Exception: exceção base para erros gerais.",
          "ErrorException: converter erros PHP em exceções.",
          "RuntimeException: erros em tempo de execução.",
          "InvalidArgumentException: argumento inválido.",
          "PDOException: erros de banco de dados.",
          "Throwable: interface base para todas as exceções e erros."
        ]},
        { t: "h", h: "Error vs Exception" },
        { t: "p", p: "Desde o PHP 7, erros fatais (como acessar propriedade inexistente) lançam Error ao invés de morrer silenciosamente. Ambos implementam Throwable, então catch(Throwable) captura tudo." },
        { t: "code", c: String.raw`<?php
try {
    // Erro fatal agora é capturável
    $arr = [1, 2, 3];
    echo $arr[10]; // Acessa índice inexistente
} catch (Error $e) {
    echo "Erro capturado: " . $e->getMessage();
} catch (Throwable $e) {
    echo "Qualquer erro: " . $e->getMessage();
}
?>`, lang: "php" },
        { t: "h", h: "ErrorException: convertendo erros em exceções" },
        { t: "p", p: "Com set_error_handler(), erros PHP (warnings, notices) podem ser convertidos em exceções,统一 o tratamento." },
        { t: "code", c: String.raw`<?php
set_error_handler(function ($errno, $errstr) {
    throw new ErrorException($errstr, 0, $errno);
});

try {
    $resultado = 10 / 0;
} catch (ErrorException $e) {
    echo "Erro convertido: " . $e->getMessage();
}
?>`, lang: "php" },
        { t: "h", h: "error_reporting e set_exception_handler" },
        { t: "code", c: String.raw`<?php
// Mostrar todos os erros (desenvolvimento)
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Desabilitar erros (produção)
// error_reporting(0);
// ini_set('display_errors', 0);

// Handler global para exceções não capturadas
set_exception_handler(function (Throwable $e) {
    error_log($e->getMessage());
    http_response_code(500);
    echo "Erro interno do servidor.";
});
?>`, lang: "php" },
        { t: "note", p: "Em produção, NUNCA exiba erros ao usuário (display_errors = 0). Log os erros com error_log() ou um sistema como Monolog, e mostre uma mensagem genérica." },
        { t: "warn", p: "catch(Throwable $e) é o catch-all que captura tanto Error quanto Exception. Use-o quando quiser tratar qualquer tipo de erro, mas prefira catches específicos para tratamento mais preciso." }
      ],
      quiz: [
        { q: "O bloco finally em try/catch é executado:", opts: ["Apenas se houver erro.", "Apenas se não houver erro.", "Sempre, com ou sem erro.", "Nunca, é apenas decorativo."], ans: 2, expl: "finally executa sempre — mesmo que ocorra uma exceção, ou que o catch lance outra exceção." },
        { q: "throw é usado para:", opts: ["Capturar erros.", "Lançar uma exceção manualmente.", "Fechar o programa.", "Definir variáveis."], ans: 1, expl: "throw lança uma exceção que pode ser capturada por um catch correspondente." },
        { q: "Qual interface base é implementada por todas as exceções e erros desde o PHP 7?", opts: ["Exception", "Error", "Throwable", "ErrorBase"], ans: 2, expl: "Throwable é a interface raiz: tanto Error quanto Exception a implementam, permitindo catch(Throwable) como catch-all." },
        { q: "set_error_handler() permite:", opts: ["Desabilitar todos os erros.", "Converter erros PHP em exceções ErrorException.", "Apenas registrar erros.", "Ignorar warnings."], ans: 1, expl: "set_error_handler() intercepta erros PHP e pode convertê-los em exceções para tratamento unificado." },
        { q: "Em produção, display_errors deve estar:", opts: ["Ligado (1).", "Desligado (0).", "Em modo verbose.", "Em modo warning apenas."], ans: 1, expl: "Exibir erros ao usuário expõe informações sensíveis. Em produção, desligue display_errors e use error_log()." },
        { q: "O que error_reporting(E_ALL) faz?", opts: ["Desabilita todos os erros.", "Mostra todos os tipos de erro e warning.", "Mostra apenas erros fatais.", "Reporta ao servidor."], ans: 1, expl: "E_ALL ativa o relatório de todos os erros, warnings e notices — ideal para desenvolvimento." },
        { q: "catch (PDOException $e) captura erros de:", opts: ["Conexão HTTP.", "Banco de dados via PDO.", "Sintaxe PHP.", "Arquivos."], ans: 1, expl: "PDOException é lançada quando ocorre uma falha em operações PDO, como queries ou conexões." },
        { q: "O que happen quando throw new Exception() é chamado sem try/catch?", opts: ["O erro é ignorado.", "O PHP exibe um erro fatal e interrompe a execução.", "A exceção é descartada.", "O programa continua."], ans: 1, expl: "Exceções não capturadas causam um erro fatal que interrompe a execução do script." },
        { q: "Uma Exception pode ser relançada com:", opts: ["throw $e;", "throw catch;", "reraise $e;", "throw novamente;"], ans: 0, expl: "Dentro de um catch, throw $e relança a mesma exceção, permitindo que um catch superior a trate." },
        { q: "A exceção para erros de banco de dados PDO é:", opts: ["PDOException", "DatabaseException", "PDOError", "SQLException"], ans: 0, expl: "PDOException é a exceção específica lançada pelo PDO quando uma operação de banco falha." }
      ]
    },
    {
      id: "php-poo",
      title: "Programação Orientada a Objetos",
      subtitle: "Classes, herança, interfaces e traits no PHP.",
      blocks: [
        { t: "h", h: "Classes e objetos" },
        { t: "p", p: "Uma classe é um molde; um objeto é uma instância. Classes definem propriedades (atributos) e comportamentos (métodos)." },
        { t: "code", c: String.raw`<?php
class Conta {
    public string $titular;
    public float $saldo;

    public function __construct(string $titular, float $saldo = 0.0) {
        $this->titular = $titular;
        $this->saldo = $saldo;
    }

    public function depositar(float $valor): void {
        $this->saldo += $valor;
    }

    public function sacar(float $valor): void {
        if ($valor > $this->saldo) {
            throw new \RuntimeException("Saldo insuficiente");
        }
        $this->saldo -= $valor;
    }

    public function __toString(): string {
        return "{$this->titular}: R$ " . number_format($this->saldo, 2);
    }
}

$conta = new Conta("Ana", 1000.0);
$conta->depositar(500.0);
$conta->sacar(200.0);
echo $conta; // Ana: R$ 1,300.00
?>`, lang: "php" },
        { t: "h", h: "Visibilidade (public, private, protected)" },
        { t: "lst", items: [
          "public: acessível de qualquer lugar.",
          "protected: acessível pela classe e suas subclasses.",
          "private: acessível apenas pela própria classe."
        ]},
        { t: "code", c: String.raw`<?php
class Pessoa {
    public string $nome;
    private int $senha;
    protected string $email;

    public function __construct(string $nome, string $email, int $senha) {
        $this->nome = $nome;
        $this->email = $email;
        $this->senha = $senha;
    }

    public function verificarSenha(int $tentativa): bool {
        return $tentativa === $this->senha;
    }
}

$p = new Pessoa("Ana", "ana@email.com", 1234);
echo $p->nome;          // Ana (public OK)
// echo $p->senha;      // ERRO: private
// echo $p->email;      // ERRO: protected
?>`, lang: "php" },
        { t: "h", h: "Herança (extends)" },
        { t: "p", p: "Uma classe filha herda propriedades e métodos da classe pai. Pode sobrescrever métodos e adicionar novos." },
        { t: "code", c: String.raw`<?php
class Animal {
    public string $nome;

    public function __construct(string $nome) {
        $this->nome = $nome;
    }

    public function falar(): string {
        return "...";
    }
}

class Cachorro extends Animal {
    public function falar(): string {
        return "Au au!";
    }
}

class Gato extends Animal {
    public function falar(): string {
        return "Miau!";
    }
}

$rex = new Cachorro("Rex");
$mia = new Gato("Mia");

echo $rex->falar();  // Au au!
echo $mia->falar();  // Miau!
?>`, lang: "php" },
        { t: "h", h: "Interfaces" },
        { t: "p", p: "Uma interface define um contrato: quais métodos uma classe DEVE implementar. Não tem implementação — apenas assinaturas." },
        { t: "code", c: String.raw`<?php
interface Renderizavel {
    public function renderizar(): string;
}

class PaginaHTML implements Renderizavel {
    public function renderizar(): string {
        return "<html>...</html>";
    }
}

class PaginaJSON implements Renderizavel {
    public function renderizar(): string {
        return '{"status": "ok"}';
    }
}

function exibir(Renderizavel $item) {
    echo $item->renderizar();
}

exibir(new PaginaHTML());  // <html>...</html>
exibir(new PaginaJSON()); // {"status": "ok"}
?>`, lang: "php" },
        { t: "h", h: "Traits" },
        { t: "p", p: "Traits permitem compartilhar código entre classes que não estão em uma relação de herança. É como \"colar\" comportamento em qualquer classe." },
        { t: "code", c: String.raw`<?php
trait Logavel {
    public function log(string $mensagem): void {
        echo "[" . date('H:i:s') . "] $mensagem<br>";
    }
}

trait Serializavel {
    public function toArray(): array {
        return get_object_vars($this);
    }
}

class Servico {
    use Logavel, Serializavel;

    public function executar(): void {
        $this->log("Serviço iniciado");
        // ... lógica
        $this->log("Serviço finalizado");
    }
}

$s = new Servico();
$s->executar();
print_r($s->toArray());
?>`, lang: "php" },
        { t: "h", h: "Namespaces" },
        { t: "p", p: "Namespaces evitam conflitos de nomes entre classes, funções e constantes de bibliotecas diferentes." },
        { t: "code", c: String.raw`<?php
// Em src/Models/Usuario.php
namespace App\Models;

class Usuario {
    public string $nome;
}

// Em src/Controllers/HomeController.php
namespace App\Controllers;

use App\Models\Usuario;

class HomeController {
    public function index(): void {
        $user = new Usuario();
        $user->nome = "Gabriel";
    }
}

// Ou usando o nome completo
$user = new \App\Models\Usuario();
?>`, lang: "php" },
        { t: "note", p: "PHP suporta apenas herança simples (uma classe pai). Para compartilhar comportamento entre classes sem hierarquia, use traits. Uma classe pode usar múltiplos traits." },
        { t: "warn", p: "Evite tornar tudo public por conveniência. Use private para dados sensíveis e protected para algo que subclasses precisem. Isso segue o princípio de menor privilégio." }
      ],
      quiz: [
        { q: "A palavra-chave para criar um objeto em PHP é:", opts: ["create", "new", "instance", "object"], ans: 1, expl: "new instancia uma classe: $obj = new MinhaClasse()." },
        { q: "private significa que o membro:", opts: ["É acessível de qualquer lugar.", "Só pode ser acessado pela própria classe.", "É acessível por subclasses.", "Não pode ter métodos."], ans: 1, expl: "private restringe o acesso à própria classe; nem subclasses nem código externo podem acessar." },
        { q: "__construct é o:", opts: ["Destruidor da classe.", "Construtor — roda ao criar um novo objeto.", "Método mágico destrutivo.", "Um tipo de variável."], ans: 1, expl: "__construct é o construtor: executa automaticamente quando new ClassName() é chamado." },
        { q: "Interfaces definem:", opts: ["A implementação completa dos métodos.", "Apenas as assinaturas dos métodos (contrato).", "Variáveis globais.", "Constantes apenas."], ans: 1, expl: "Interfaces declaram quais métodos uma classe deve ter, sem implementar — é um contrato." },
        { q: "Traits resolvem o problema de:", opts: ["Herança múltipla.", "Compartilhar código entre classes sem hierarquia.", "Criar construtores.", "Definir interfaces."], ans: 1, expl: "Traits permitem reutilizar código em classes que não compartilham herança, como uma forma de mixin." },
        { q: "extends é usado para:", opts: ["Implementar interfaces.", "Herança de classe.", "Usar um trait.", "Importar um namespace."], ans: 1, expl: "extends cria uma classe filha que herda propriedades e métodos da classe pai." },
        { q: "protected é acessível por:", opts: ["Qualquer código.", "Apenas a própria classe.", "A classe e suas subclasses.", "Apenas funções globais."], ans: 2, expl: "protected é visível tanto pela classe que o define quanto por qualquer classe que herde dela." },
        { q: "Uma classe pode usar múltiplos traits?", opts: ["Não, apenas um.", "Sim, com use Trait1, Trait2.", "Sim, com extends.", "Depende da versão."], ans: 1, expl: "Uma classe pode incorporar múltiplos traits: use Trait1, Trait2; . Cada trait adiciona seu comportamento." },
        { q: "Namespaces servem para:", opts: ["Definir o idioma do código.", "Evitar conflitos de nomes entre classes.", "Aumentar a performance.", "Organizar comentários."], ans: 1, expl: "Namespaces separam classes, funções e constantes em \"espaços\" lógicos, evitando colisões de nomes." },
        { q: "O que faz public string $nome no PHP 8+?", opts: ["Cria uma constante.", "Declara a propriedade tipada publicamente (typed properties).", "Define um método.", "Importa uma classe."], ans: 1, expl: "Typed properties (PHP 7.4+) declaram o tipo da propriedade diretamente, aumentando segurança e legibilidade." }
      ]
    }
  ]
};
