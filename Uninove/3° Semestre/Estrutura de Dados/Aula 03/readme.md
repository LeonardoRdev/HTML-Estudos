# Aula 3

## Para Deixar em os Caracteres Português
#include<locale.h>
main() {
setlocale(LC_ALL, "Portuguese");
}

---

### Para casa:
- Refazer o desafio do "Adivinhe o Número", sem copiar de nenhum lugar.

## Exercício de repetição (FOR, WHILE, DO WHILE);
Hoje iremos fazer alguns exercícios com FOR e DO WHILE, para praticarmos o loop.
Sendo os exercícios:
- Números Ímpares em um Intervalo;
- Adivinhe o Número.

---

## Código para mostrar números ímpares em um intervalo
---
#include<stdio.h>
#include<stdlib.h>
#include<locale.h>
main() {
setlocale(LC_ALL, "Portuguese");
int inicio, fim, i, substituto;

printf("Digite o ínicio: ");
scanf("%d", &inicio);

printf("Digite o fim: ");
scanf("%d", &fim);

if (fim <= inicio) {
substituto = inicio;
inicio = fim;
fim = substituto;
}

for (i = inicio; i <= fim; i++) {
if (i % 2 == 1) {
printf("%d\n", i);
}
}
}

---

## Código Jogo Adivinhação de Número 

#include<stdio.h>
#include<stdlib.h>
#include<locale.h>
main() {
setlocale(LC_ALL, "Portuguese");
int num_secreto, num_palpite, tentativas;
do {
printf("Jogador 1 - Cadastre o número secreto entre 0 e 100: ");
scanf("%d" ,&num_secreto);
} while (num_secreto < 0 || num_secreto > 100);
system("cls");
for (tentativas = 1; tentativas <=7; tentativas++){
printf("Jogador 2 - Digite seu palpite para o número secreto: ");
scanf("%d" ,&num_palpite);
if (num_secreto == num_palpite){
printf("\nAcertou miseravi!!");
printf("\nEm apenas %d tentativas!\n\n", tentativas);
break;
} else{
printf("\n\nTente novamente!\n%d/7 tentativas restantes!\n", 7 - tentativas);
if (num_palpite > num_secreto) {
printf("O número secreto é MENOR que %d\n", num_palpite);
}
else {
printf("O número secreto é MAIOR que %d\n", num_palpite);
}
 }
}
if (tentativas == 8) {
printf("\nCHANCES ESGOTADAS, O NÚMERO ERA > %d <\nBOA SORTE NA PRÓXIMA VEZ!\n\n", num_secreto);
}
system("pause");
}