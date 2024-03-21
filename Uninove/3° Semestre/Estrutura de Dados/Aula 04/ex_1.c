/*
Fazer um programa no qual o usuário digite o início
e o fim de um intervalo e o programa deve exibir todos
os números ímpares no intervalo.
*/

#include <stdio.h>
#include <stdlib.h>
#include <locale.h>

int main()
{

    setlocale(LC_ALL, "Portuguese");

    int inicio, fim;

    printf("Digite o início: ");

    scanf("%d", &inicio);

    printf("Digite o fim: ");

    scanf("%d", &fim);

    for (inicio; inicio <= fim; inicio++)
    {

        if (inicio % 2 == 1)
        {

            printf("\n%d", inicio);
        }
    }
}