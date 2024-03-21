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

int main()
{
    setlocale(LC_ALL, "Portuguese");

    char palavraSecreta[20], chutePalavra[20];

    printf("[JOGADOR 1]:\nDigite a palavra secreta: ");
    scanf("%[^\n]", &palavraSecreta);

    printf("\nA palavra secreta é: %s", palavraSecreta);

    // FAZER EM CASA:
    //  [https://pt.stackoverflow.com/questions/95977/jogo-da-forca-com-funções-em-c](https://pt.stackoverflow.com/questions/95977/jogo-da-forca-com-fun%C3%A7%C3%B5es-em-c)
}