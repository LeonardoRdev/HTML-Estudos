/*
Faça um programa que exiba a tabuada até 10
de um número digitado pelo usuário.
*/

#include <stdio.h>
#include <stdlib.h>
#include <locale.h>

int main()
{

    setlocale(LC_ALL, "Portuguese");

    int tabuada, numeroMaximo, i, resultado;

    printf("Você quer saber a tabuada de qual número: ");

    scanf("%d", &tabuada);

    printf("\nVocê quer que a tabuada vá de 1 até quanto:");

    scanf("%d", &numeroMaximo);

    for (i = 1; i <= numeroMaximo; i++)
    {

        resultado = tabuada * i;

        printf("\n%d x %d = %d", tabuada, i, resultado);
    }
}