/*
Faça um programa que receba um número digitado pelo
usuário e informe se o número é primo ou não.
*/

#include <stdio.h>
#include <stdlib.h>
#include <locale.h>

int main()
{

    setlocale(LC_ALL, "Portuguese");

    int num, i;

    int condicao = 0;

    printf("Digite um número: ");

    scanf("%d", &num);

    for (i = 1; i <= num; i++)
    {

        if (num % i == 0)
        {

            condicao++;

            printf("\n%d é divisivel por %d", num, i);
        }
    }

    printf("\n\nCondição = %d divisores", condicao);

    if (condicao <= 2)
    {

        printf("\n\nO número %d é primo!", num);
    }

    else
    {

        printf("\n\nO número %d não é primo!", num);
    }
}