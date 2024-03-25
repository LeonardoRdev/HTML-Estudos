#include <stdio.h>

int main() {
    int nums[] = {6, 3, 7, 2, 4};
    int n = 5; // tamanho da série de números

printf("Série de números original: ");
    for (int i = 0; i < n; i++) {
        printf("%d ", nums[i]);
    }
    printf("\n");

// Algoritmo de ordenação Bubble Sort
    for (int i = 0; i < n - 1; i++) {
        for (int j = 0; j < n - i - 1; j++) {
            if (nums[j] > nums[j + 1]) {
                // Troca os elementos se estiverem fora de ordem
                int temp = nums[j];
                nums[j] = nums[j + 1];
                nums[j + 1] = temp;

// Mostra o estado atual da série de números
                printf("Passo %d: ", i * (n - 1) + j + 1);
                for (int k = 0; k < n; k++) {
                    printf("%d ", nums[k]);
                }
                printf("\n");
            }
        }
    }

printf("Série de números ordenada: ");
    for (int i = 0; i < n; i++) {
        printf("%d ", nums[i]);
    }
    printf("\n");

return 0;
}