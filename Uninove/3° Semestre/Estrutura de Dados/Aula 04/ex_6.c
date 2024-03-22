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

    system("cls");

    printf("[JOGADOR 1]:\nDigite a palavra secreta: ");
    scanf(" %[^\n]", &palavraSecreta);

    int tamanhoPalavraSecreta = strlen(palavraSecreta);

    system("cls");
    
    // MOSTRA CADA LETRA DA PALAVRA SECRETA
    // for (int i = 0; i <= tamanhoPalavraSecreta; i++) {
    //     printf("\n%c", palavraSecreta[i]);
    // }

    while (chutePalavra != palavraSecreta && tentativas > 0) {
        printf("\n[JOGADOR 2]:\nChute uma LETRA ou a PALAVRA INTEIRA\n*OBS: chutar a palavra inteira consome todas as chances\n\nChute: ");
        scanf(" %s", &chutePalavra);

        for (int i = 0; i < tamanhoPalavraSecreta; i++) {
            if (palavraSecreta[i] == chutePalavra[0]) {
                printf("\nA posicao %d esta correta! A letra eh: %c\n", i, palavraSecreta[i]);
            }
        }
        
        //printf("\nPALAVRA SECRETA: %s\nCHUTE PALAVRA: %s\n", palavraSecreta, chutePalavra);
        tentativas--;
    }
}

// Inicializa a lista vazia
    //struct Node* head = NULL;

    // Adiciona elementos à lista usando a função append
    //append(&head, 1);
    //append(&head, 2);
    //append(&head, 3);

    // Agora a lista contém os elementos 1, 2 e 3
