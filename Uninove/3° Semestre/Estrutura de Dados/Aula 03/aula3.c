#include <stdio.h>
#include <stdlib.h>
#include <locale.h>

int main()
{
    setlocale(LC_ALL, "Portuguese");
    int inicio, fim, i, substituto;

    printf("Digite o ínicio: ");
    scanf("%d", &inicio);

    printf("Digite o fim: ");
    scanf("%d", &fim);

    if (fim <= inicio)
    {
        substituto = inicio;
        inicio = fim;
        fim = substituto;
    }

    for (i = inicio; i <= fim; i++)
    {

        if (i % 2 == 1)
        {
            printf("%d\n", i);
        }
    }
}