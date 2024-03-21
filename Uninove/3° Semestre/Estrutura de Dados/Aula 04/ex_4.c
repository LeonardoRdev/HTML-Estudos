/*
Faça um programa que peça para o usuário digitar um número
de acordo com o número digitado, o programa deve exibir a
frase bom dia "n" vezes, conforme o número digitado pelo usuário.
*/

#include <stdio.h>
#include <stdlib.h>
#include <locale.h>

int main()
{

    setlocale(LC_ALL, "Portuguese");

    int num, i;

    printf("Digite um número: ");

    scanf("%d", &num);

    for (i; i < num; i++)
    {

        printf("\n [%d] Bom dia!!", i + 1);
    }
}