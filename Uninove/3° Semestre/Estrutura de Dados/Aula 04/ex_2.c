/*
Fazer um programa que force o usuário a digitar um número par
para finalizar o programa. Enquanto o usuário estiver digitando
um número ímpar o programa fica repetindo a mensagem "Digite um
número par para finalizar".
*/

#include <stdio.h>
#include <stdlib.h>
#include <locale.h>

int main()
{

    setlocale(LC_ALL, "Portuguese");

    int numeroDigitado;

    printf("Digite um número PAR: ");

    scanf("%d", &numeroDigitado);

    while (numeroDigitado % 2 == 1)
    {

        printf("\nEU PEDI UM NÚMERO PAR!!\nDigite novamente:");

        scanf("%d", &numeroDigitado);

        if (numeroDigitado < 0)
        {

            numeroDigitado = (numeroDigitado * -1);
        }
    }

    printf("\n\nMuito Obrigado! ^^");
}