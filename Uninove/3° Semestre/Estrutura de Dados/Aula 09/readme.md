# Aula 9

O Sérgio teve a ideia de usar mouse e teclado sem bluetooth, para ele não precisar ficar indo até a mesa toda hora.

## Filas
As listas funcionam assim: o primeiro a entrar na lista sempre vai ser o primeiro a sair dela.

Aqui está um código que soma o primeiro e o último da lista, depois o segundo e o penúltimo, e assim por diante:

```
// fazer um programa que mostre 10 números
// o programa vai somar o primeiro com o último
// o segundo com o penúltimo, e assim vai

#include <stdio.h>
#include <stdlib.h>
#define MAX 10

int main() {
int lista[MAX], i;

// Loop para digitar os números da lista:
for(i=0; i < MAX; i++) {
printf("\nDigite o %d* numero da lista: ", i);
scanf("%d", &lista[i]);
}

system("cls");

// Loop para fazer as somas:
for(i=0; i<(MAX-5); i++) {
printf("===========================\n");
printf("= ELEMENTO %d* da Lista: =\n", i);
printf("Primeira Metade da Lista: %d\n", lista[i]);
printf("Segunda Metade da Lista.: %d\n", lista[(MAX-1) - i]);
printf("RESULTADO: %d\n\n", lista[i] + lista[(MAX-1) - i]);
}

}
```

### Listas Cíclicas (looping na própria lista)

A lista cíclica é quase que um loop na própria lista, por exemplo:

Se uma lista tem 10 elementos, lista[10], e você começa pelo elemento [4], ela vai até o [10] e depois continua até o [3], para completar o ciclo de 10.

---

## AAPA

Fizemos a leitura de 2 páginas do AAPA, Filas I e Filas II.