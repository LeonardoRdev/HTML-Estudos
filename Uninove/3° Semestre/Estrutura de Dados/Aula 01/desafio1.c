// # Lição de casa:
// Fazer um programa que pergunte o número inicial e o final do for.
// e dentro desse intervalo você deverá mostrar todos os números primos existentes.
// Exemplo:
// inicio = 0
// fim = 10
// resultado:
// 2,3,5, 7;

#include <stdio.h>
#include <stdlib.h>

main()
{
    int i, fim;

    fim = 50;

    for (i = 1; i <= 50; i++)
    {
        int numeroAtual = i;
        int j;
        int divisivelPorTantasVezes = 0;
        for (j = 1; j <= numeroAtual; j++)
        {
            if (numeroAtual % j == 0)
            {
                divisivelPorTantasVezes++;
            }
        }
        if (divisivelPorTantasVezes <= 2 && numeroAtual != 1)
        {
            printf("%d\n", numeroAtual);
        }
    }
}
