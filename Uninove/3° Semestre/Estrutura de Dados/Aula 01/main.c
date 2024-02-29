// faça um programa no qual o usuario digite
//  um intervalo e o programa informe todos os
//   numeros impares no intervalo informado;

// exemplo:
//  numeros impares entre: 5 e 17;
//  programa responde: 5, 7 , 9, 11 , 13, 15, 17;
//
//  Tem que usar:
// if
// for

#include <stdio.h>
#include <stdlib.h>

main()
{
    int i, inicio, fim;
    printf("Mostrador de Números Ímpares\n\n\n");

    printf("Digite o inicio: ");
    scanf("%d", &inicio);

    printf("Digite o fim: ");
    scanf("%d", &fim);

    printf("\nTodos os numeros ímpares encontrados entre %d ate %d:", inicio, fim);
    printf("\n");

    for (i = inicio; i <= fim; i++)
    {
        if (i % 2 == 1)
        {
            printf("%d - ", i);
        }
    }

    printf("\n\n");
    system("pause");
}