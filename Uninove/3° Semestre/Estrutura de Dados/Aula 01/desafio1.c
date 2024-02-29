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
    int i, inicio, fim;
    int numerosPrimosEncontrados = 0;

    printf("Mostrador de Numeros Primos\n\n");
    
    printf("Digite o valor inicial do intervalo desejado: ");
    scanf("%d", &inicio);

    printf("Digite o valor maximo que eu devo buscar pelos numeros primos: ");
    scanf("%d", &fim);

    printf("\nTodos os numeros primos encontrados entre 1 a %d:\n", fim);

    for (i = inicio; i <= fim; i++)
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
        if (divisivelPorTantasVezes <= 2 && numeroAtual > 1)
        {
            printf("-> %d\n", numeroAtual);
            numerosPrimosEncontrados++;
        }
    }
    printf("\nForam encontados %d numeros primos!", numerosPrimosEncontrados);
}
