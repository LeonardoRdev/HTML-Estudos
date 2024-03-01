/*
Crie uma variável double salário e atribua o valor 5000;
Aplique o comando "if" da seguinte forma:
Se salário for maior ou igual a 7000, desconto de 18%;
Se o salário for maior ou igual a 5000 e menor que 7000, desconto de 13%;
Se o salário for maior ou igual a 2000 e menor 5000, desconto de 9%;
Se o salário for maior ou igual a 1500 e menor que 2000, não aplicar desconto;

No final mostrar o salário, o valor do desconto, e o salário com desconto;
*/

public class aula2 {
  public static void main (String[]args) {
double salario = 1979;
double desconto = 0;
double salarioComDesconto = 0;

if (salario >= 7000) {
   // Desconto de 18%;
   desconto = salario * 0.18;
}

else if (salario >= 5000 && salario < 7000) {
   // Desconto de 13%;
   desconto = salario * 0.13;
}

else if (salario >= 2000 && salario < 5000) {
   // Desconto de 9%;
   desconto = salario * 0.09;
}

else if (salario >= 1500 && salario < 2000) {
   // Não fazer nada;
  // desconto = 0;
}

salarioComDesconto = salario - desconto;
System.out.println("Salário.: R$" + salario + "\nDesconto: R$" + desconto +
"\nFicou...: R$" + salarioComDesconto);
  }
}