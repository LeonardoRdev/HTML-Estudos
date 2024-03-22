/*
Faça um jogo da forca. O jogador 1 deve cadastrar uma palavra e o
jogador 2 deve tentar adivinhar. O jogador 2 deve informar uma letra
de cada vez. Se acertar, a letra é revelada nas posições que contém a
letra. Se errar, a letra deve ser salva num vetor que armazenará os erros.
O jogador 2 pode errar 5 vezes. Caso saiba, a palavra secreta, ele pode
digitar a palavra de uma só vez, porém se errar perde o jogo.
*/

#include <stdio.h>
#include <stdlib.h>
#include <locale.h>
#include <string.h>

int main()
{
    setlocale(LC_ALL, "Portuguese");

    char palavraSecreta[20];
    char chutePalavra[20];
    int tentativas = 5;
    int existeNaPalavra = 0;
    char underlinePalavraSecreta[20];
    char letrasErradas[20] = "";
    int tamanhoPalavraChute;

    system("cls");

    printf("[JOGADOR 1]:\nDigite a palavra secreta: ");
    scanf(" %[^\n]", &palavraSecreta);

    int tamanhoPalavraSecreta = strlen(palavraSecreta);

    // Criando os _ _ _ _ _ _
    strcpy(underlinePalavraSecreta, palavraSecreta);
    
    for (int i = 0; i < tamanhoPalavraSecreta; i++) {
        underlinePalavraSecreta[i] = '_'; // Atribuindo o caractere '_' a cada posição
        printf("underlinesPalavraSecreta: %c\n", underlinePalavraSecreta[i]);
    }


    system("cls");
    while (strcmp(chutePalavra, palavraSecreta) != 0 && tentativas >= 0) {
        existeNaPalavra = 0;
        
        printf("[JOGADOR 2]:\nChute uma LETRA ou a PALAVRA INTEIRA\n*OBS: chutar a palavra inteira consome todas as chances! Tome cuidado.\n\nPALAVRA: %s\nLetras Erradas: %s\n\nTentativas restantes: %d/5\nChute: ",underlinePalavraSecreta, letrasErradas ,tentativas);
        scanf(" %s", &chutePalavra);

        tamanhoPalavraChute = strlen(chutePalavra);
        if (tamanhoPalavraChute == 1) {
            if (strcmp(chutePalavra, palavraSecreta) == 0) {
                break;
            }

            for (int i = 0; i < tamanhoPalavraSecreta; i++) {
                if (palavraSecreta[i] == chutePalavra[0]) {
                    printf("\nA posicao %d esta correta! A letra eh: %c\n", i, palavraSecreta[i]);
                    underlinePalavraSecreta[i] = palavraSecreta[i];

                    existeNaPalavra = 1;
                }
            }
            
            if (existeNaPalavra == 0) {
                // Lista com letras que não têm na "palavraSecreta"
                // exemplo: Letras erradas -> "E", "J", "L".
                strcat(letrasErradas, chutePalavra);
                tentativas--;
            }
        }
        else {
            tentativas = -1;
        }
        system("cls");
    }

    if (strcmp(palavraSecreta, chutePalavra) == 0) {
        printf("\nVOCE VENCEU!! ACERTOU A PALAVRA: %s", palavraSecreta);
    }
    else {
        printf("\nNAO FOI DESSA VEZ! A PALAVRA ERA: %s", palavraSecreta);
    }

    printf("\n\nFIM DE JOGO\n\n");
}
