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

    printf("[JOGADOR 1]:\nDigite a palavra secreta: ");
    scanf(" %[^\n]", &palavraSecreta);

    system("cls");
    
    printf("[JOGADOR 2]:\nChute uma LETRA ou a PALAVRA INTEIRA\n*OBS: chutar a palavra inteira consome todas as chances\n\nChute: ");
    scanf(" %s", &chutePalavra);

    printf("\nPALAVRA SECRETA: %s\nCHUTE PALAVRA: %s", palavraSecreta, chutePalavra);

    if(strstr(palavraSecreta, chutePalavra) != NULL) {
        printf("\nTEM ISSO NA PALAVRA!");
        // O problema atual é que cada caractere do char "palavraSecreta" precisa ser um item de uma lista,
        // e isso vai dar um trabalho.
        printf(strstr(palavraSecreta, chutePalavra));
    }

    // FAZER EM CASA:
    //  [https://pt.stackoverflow.com/questions/95977/jogo-da-forca-com-funções-em-c](https://pt.stackoverflow.com/questions/95977/jogo-da-forca-com-fun%C3%A7%C3%B5es-em-c)
}