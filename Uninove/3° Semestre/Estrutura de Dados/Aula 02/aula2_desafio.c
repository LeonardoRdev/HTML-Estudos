// o usuario vai digitar o intervalo e o programa vai mostrar
// os números impares nesse intervalo

# include<stdio.h>
# include<stdlib.h>
# include<locale.h>

int main () {
setlocale(LC_ALL, "Portuguese");

int inicio, fim, i;

printf("Digite o ínicio do intervalo desejado: ");
scanf("%d", &inicio);

printf("Digite o fim do intervalo desejado: ");
scanf("%d", &fim);

printf("\nNúmeros primos encontrados no intervalo de %d até %d", inicio, fim);
for (i = inicio; i < fim; i++) {
if (i % 2 == 1) {
printf("\n> %d", i);
}
}
}
