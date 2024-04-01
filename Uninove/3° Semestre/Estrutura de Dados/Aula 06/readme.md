# Aula 6
## Ordenação com o método de seleção direta

Na aula de hoje aprenderemos outro método de ordenação, o método de seleção direta.
Este método é lento igual o método bolha e não é muito aconselhável escolher ele em seus programas.

++i = Soma à variável e então executa.

i++ = Executa e então soma a variável.

---
### Desafio Supremo
Com está tabela:
1  2  3  4  5  6  7  8  9
A  B  C  D E  F G H I
J  K  L  M  N O P Q R
S T  U  V  W X Y Z

Fazer cada caractere do nome digitado virar um número, e depois somar todos os algarismos separadamente até que o resultado seja **MENOR** que 10.

Exemplo:

#### Gustavo Basilio
Gustavo Basilio -> 7312146 2119396
24 + 33 = 57 -> 5 + 7 = 12 -> 1 + 2 = 3

## Código da aula

**[main.C]**

```
#include <stdio.h>
#include <stdlib.h>
#include <locale.h>

void select_sort(int x[], int n);

int main() {
    setlocale(LC_ALL, "Portuguese");

    int qtde = 0;

    printf("Digite a quantidade de números: ");
    scanf("%i", &qtde);

    int nums[qtde];

    for(int i = 0; i < qtde; i++) {
        printf("Digite o %i * número: ", i+1);
        scanf("%i", &nums[i]);
    }

    // Função
    select_sort(nums, qtde);

    for(int i = 0; i < qtde; i++) {
        printf("\nO %i* número é: %i", i+1, nums[i]);
    }

    return 0;
}

// Função
void select_sort(int x[], int n) {
    int i, indice, j, maior;
    for(i = n-1; i > 0; i--) {
        maior = x[0];
        indice = 0;
        for (j = 1; j <= i; j++) {
            if (x[j] > maior) {
            maior = x[j];
            indice = j;
            }
        }
        x[indice] = x[i];
        x[i] = maior;
    }
}
```