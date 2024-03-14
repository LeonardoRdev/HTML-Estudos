#include <stdio.h>
#include <stdlib.h>
#include <locale.h>

int main()
{

    setlocale(LC_ALL, "Portuguese");

    int num_secreto, num_palpite, tentativas;

    do
    {
        printf("Jogador 1 - Cadastre o número secreto entre 0 e 100: ");
        scanf("%d", &num_secreto);
    } while (num_secreto < 0 || num_secreto > 100);

    system("cls");

    for (tentativas = 1; tentativas <= 7; tentativas++)
    {
        printf("Jogador 2 - Digite seu palpite para o número secreto: ");
        scanf("%d", &num_palpite);

        if (num_secreto == num_palpite)
        {
            printf("\nAcertou miseravi!!");
            printf("\nEm apenas %d tentativas!\n\n", tentativas);
            break;
        }

        else
        {
            printf("\n\nTente novamente!\n%d/7 tentativas restantes!\n", 7 - tentativas);
            if (num_palpite > num_secreto)
            {
                printf("O número secreto é MENOR que %d\n", num_palpite);
            }
            else
            {
                printf("O número secreto é MAIOR que %d\n", num_palpite);
            }
        }
    }

    if (tentativas == 8)
    {
        printf("\nCHANCES ESGOTADAS, O NÚMERO ERA > %d <\nBOA SORTE NA PRÓXIMA VEZ!\n\n", num_secreto);
    }

    system("pause");
}