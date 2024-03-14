// REFAZER O JOGO DE ADIVINHAÇÃO, SEM COPIAR DE NENHUM LUGAR
#include<stdio.h>
#include<stdlib.h>

int main() {
    system("cls");
    int numeroSecreto, numeroChute, dificuldadeEscolhida, tentativasRestantes, tentativasTOTAIS;

    do {
        printf("SELECIONE A DIFICULDADE DO JOGO:\n[1] FACIL\n[2] NORMAL\n[3] DIFICIL\n[4] EXTREMO\n\nDIGITE A DIFICULDADE DESEJADA: ");
        scanf("%d", &dificuldadeEscolhida);
        if (dificuldadeEscolhida == 1) {
            tentativasRestantes = 15;
            printf("| DIFICULDADE 'FACIL' SELECIONADA |\n\n");
        }
        else if (dificuldadeEscolhida == 2) {
            tentativasRestantes = 8;
            printf("|DIFICULDADE 'NORMAL' SELECIONADA |\n\n");
        }
        else if (dificuldadeEscolhida == 3) {
            tentativasRestantes = 5;
            printf("| DIFICULDADE 'DIFICIL' SELECIONADA |\n\n");
        }
        else if (dificuldadeEscolhida == 4) {
            tentativasRestantes = 2;
            printf("| DIFICULDADE 'EXTREMO' SELECIONADA |\n\n");
        }
        else {
            system("cls");
            printf("POR FAVOR, ESCOLHA UMA OPCAO DE DIFICULDADE VALIDA!\n\n");
        }
    } while (dificuldadeEscolhida > 4 || dificuldadeEscolhida < 1);
    
    tentativasTOTAIS = tentativasRestantes;

    do
    {
        printf("Jogador 1 | Digite o numero que devera ser adivinhado (1 a 100): ");
        scanf("%d", &numeroSecreto);
    } while (numeroSecreto > 100 || numeroSecreto < 1);
    
    system("cls");

    while(tentativasRestantes >= 1) {
        do
        {
            printf("Jogador 2 | Adivinhe qual o numero secreto (1 a 100): ");
            scanf("%d", &numeroChute);
        } while (numeroChute > 100 || numeroChute < 1);
        
        if(numeroChute == numeroSecreto) {
            printf("\nPARABENS, voce acertou!!\n\n");
            break;
        }
        else {
            tentativasRestantes--;
            if (numeroChute > numeroSecreto) {
                printf("%d e MAIOR que o numero secreto!", numeroChute);
            }
            else {
                printf("%d e MENOR que o numero secreto!", numeroChute);
            }
            printf("\nTENTATIVAS RESTANTES: %d/%d\n\n", tentativasRestantes, tentativasTOTAIS);
            if (tentativasRestantes == 0) {
                printf("\nTentativas esgotadas! Mais sorte na proxima vez!\n");
            }
        }
    }
}