# Aula 1

### Variáveis em Dart

Tipos:

- int
- List
- Map
- String
- bool
- double
- var
- dynamic

**Dart é FORTEMENTE tipado** (exige a declaração de variável)

Alguns exemplos de como se declarar as variáveis:

String curso = “ADS”;

int qtdAlunos = 82;

bool temVaga = true;

double mensalidade = 389.00;

Método é uma ação de um **objeto, e um objeto é definido por uma classe**.

para apresentar dados usamos o print();

Que irá sair como mensagem no console (Consol)

### Tipos especiais de variáveis: var e dynamic

**dynamic: permite definir um tipo de dado (variável) no momento de atribuição.**

Desta forma, a variável recebe o tipo através do TIPO do dado informado.

A cada atribuição, de acordo com o TIPO, a variável sofre alteração.

Sempre que você define uma variável, ela aloca algum espaço da memória dependendo do tipo, porém a variável “dynamic” sempre alocará 8 bits, já que ela pode ser todas as variáveis.

void main() {
dynamic variavel = "eita";
print("O tipo é: ${variavel.runtimeType}");
print("E o valor: ${variavel}");
}

**var: permite definir um tipo de dados (variável) no momento da atribuição.**

ATENÇÃO: uma vez atribuído um valor, a variável SEMPRE será daquele tipo.

Resumindo: Depois de iniciada com um tipo de valor , ela será esse valor para sempre.

---

### Arredondamento: toStringAsFixed(casas decimais)

dynamic valor = 123.123456789101112131415

print(valor.toStringAsFixed(1)); // Resultado = 123.1

print(valor.toStringAsFixed(4)); // Resultado = 123.1234

---

### Concatenação (juntar valores)

Temos 2 tipos de concatenação:

- Junção
- Interpolação

**Junção: para isso, utilizaremos o símbolo “+” (soma)**

print(”O curso de “ + curso);

print(”O curso de “ + curso + “ tem “ qtdAlunos + “alunos.”);

O código acima resultará em ERRO, pois em Dart não é possível concatenar String com int,

para resolver isso temos que fazer com que a variável qtdAlunos se transforme em TEXTO, e com isso utilizaremos o método .toString()

Isso é conhecido como “parser” (conversão):

print(”O curso de “ + curso + “ tem “ + qtdAlunos.**toString** + “ alunos.”);

**Interpolação: ($variável)**

print(”O curso de $curso tem $qtdAlunos alunos”);

Com { } podemos calcular dentro de uma String:

print(”Soma = ${1 + 5}”);

resultado : Soma = 6

---

### Laço de repetição: for

for (var i = 1; i < 11; i++) {

print(i); // vai printar de 1 até 10

}
