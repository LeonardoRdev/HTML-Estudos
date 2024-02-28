void main() {
  // Variáveis e Concatenação:
  String curso = "ADS";
  int qtdAlunos = 53;
  print(curso);
  print("o curso de " + curso + " tem 82 alunos");

  print("O curso de " + curso + " tem " + qtdAlunos.toString() + " alunos");

  print("O curso de $curso tem $qtdAlunos alunos\n\n");

// Exercício 1
// Crie duas variáveis "x" e "y" e atribua valores e:
// Mostre a soma e divisão entre elas
  int x = 2;
  int y = 5;

  int soma = x + y;
  double divisao = x / y;
  print("X = $x");
  print("Y = $y \n");

  print("Soma: $x + $y = $soma");

  print("Divisão: $x / $y = $divisao");

// Exercicio 2:
  String data = "24/09/2004";

  print("\n\nData de Nascimento: ${data}\n");

  print("Dia: ${data.substring(0, 2)}");
  print("Mês: ${data.substring(3, 5)}");
  print("Ano: ${data.substring(6, 10)}");
}
