# Aula 8

## Métodos de pesquisa
Método de pesquisa sequencial:
Pergunta para cada elemento se ele é o que você está procurando.

Método de pesquisa binária:
O método de pesquisa binária divide o tanto de informação que o programa irá procurar por 2
(x / 2)

Para realizar a pesquisa binária, devem-se seguir os passos:

- Determinar o elemento que está no meio do vetor e compará-lo com o valor procurado (K). O elemento do meio está na posição meio=(comeco+fim)/2.
- Se o elemento central for igual a K a pesquisa termina.

- Se o elemento central for menor que K, a pesquisa continuará na metade superior (a inferior será descartada), ou seja, o fim será mantido e o começo ajustado para a posição meio +1.

- Se o elemento central for maior que K, continua-se a pesquisa somente na metade inferior do vetor, ou seja, o começo será mantido e o fim ajustado para a posição meio -1.

- Se o começo ficar maior que o fim, isso significa que o elemento K não pertence ao vetor e a pesquisa termina. Caso contrário, volta-se ao passo 1 e o processo é repetido.

---

**Código de pesquisa binária**

```
/* pesqbinaria.c: implementa pesquisa binaria num vetor ordenado */
       
#include <stdio.h>
#include <conio.h>
#define N 10
       
       
      void  OrdenaInsercao (int vet[N], int max);
       
        int vet[N+1];
      int comeco, meio, fim, i, k;
 
       
      int main()
      {  
printf ("\n\nMetodo de pesquisa binaria \n");
       
      printf("\nForneca os elementos do vetor a ser pesquisado \n");
     
      for (i=1; i<=N; i++)
      { printf("vet[%d]= ",i);
      scanf("%d",&vet[i]);
      }
       
      OrdenaInsercao(vet,N);
      printf("\n Vetor ordenado pelo metodo de Insercao: \n");
      for (i=1; i<=N; i++)
      printf("\nvet[%d]= %d \n",i,vet[i]);
       
      for ( ; ; )
      { printf("\nChave a ser procurada (digite -1 para terminar):");
      scanf("%d",&k);
       
      if (k <= 0)
      break;
       
      comeco = 1;
      fim = N;
      meio = (comeco+fim)/2;
      while (vet[meio] != k &&comeco< fim)
      { if  (k <vet[meio])
            fim = meio -1;
        else comeco = meio +1;
        meio =  (comeco+fim)/2;
    }
    if (vet[meio] == k)
    printf("\nA chave %d encontra-se na posicao %d do vetor \n",
k, meio);
    else printf("\nA chave %d nao se encontra no vetor\n",k);
    }
printf ("\n\nFim do metodo de busca binaria ");
getch();
return 0;
 }
 
void OrdenaInsercao(int vet[N], int max)
{      int aux, j, i;
     
for (j=2; j<=max; j++)
     {    aux  = vet[j];
        vet[0] = aux;
         i = j-1;
        while (aux < vet[i])
        {  vet[i+1] = vet[i];
            --i;
        }
        vet[i+1] = aux;
    }
}
```