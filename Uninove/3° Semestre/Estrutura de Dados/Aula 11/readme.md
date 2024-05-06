# Aula 11

#### Leitura das seguintes páginas

- Estruturas
- Listas encadeadas (2x)

Aprendemos que os ponteiros são usados para indicar o local onde uma informação/variável está alocada/armazenada.

Podemos fazer uma lista com os ponteiros, onde um aponta para o outro que aponta para o outro que aponta para o outro que aponta para o outro que aponta para o outro. E toda a informação é obtida ao procurar apenas o primeiro.

---

## Códigos
**lista com Ponteiros**
```C
#include <stdio.h>
#include <stdlib.h>
#include <conio.h>
#include <locale.h>

/******************************************************************************/
struct lista{
   int info;
               struct lista * prox;
             };
             
typedef struct lista * tipo_lista;
/******************************************************************************/
void insere_inicio (tipo_lista * primeiro, int elem)
{
   tipo_lista no = (tipo_lista) malloc (sizeof(lista));
   no->info=elem;
   no->prox= *primeiro;
   *primeiro = no;
}/******************************************************************************/
void imprime_lista (tipo_lista primeiro)
{
   tipo_lista aux;
 
   printf("\nA lista : \n");
   aux=primeiro;
   while (aux!=NULL)
   {
       
        printf("info=%d\t",aux->info);
        aux=aux->prox;
    }    
   printf("\n");
}
/******************************************************************************/
int busca_lista (tipo_lista primeiro, int elem)
{
   tipo_lista aux;
   aux=primeiro;
 
   while (aux!=NULL)
   {
      if (aux->info==elem)
         return 1;
      aux=aux->prox;
   }
   return 0;
}
/******************************************************************************/
int remove_lista (tipo_lista * primeiro, int elem)
{
   tipo_lista aux=*primeiro;
   tipo_lista ant=NULL;
 
   while (aux!=NULL && aux->info!=elem)
   {
    ant=aux;
                     aux=aux->prox;
   }
   
   if (aux==NULL) /* Nao encontrou o elemento */
        return 0;    
   else {
          if (ant==NULL)      /* O elemento está no inicio */
              *primeiro = aux->prox;
      else ant->prox=aux->prox;  /* O elemento está no meio */
          free(aux);
          return 1;
        }
}
/******************************************************************************
principal
******************************************************************************/
main()
{  
   setlocale(LC_ALL, "Portuguese");
   tipo_lista L=NULL;
   int nro=0, elem;
 
   insere_inicio(&L,5);
   insere_inicio(&L,7);
   insere_inicio(&L,3);
   insere_inicio(&L,8);
   insere_inicio(&L,15);
   imprime_lista (L);
   printf ("\n Digite o elemento a ser procurado na lista:");
   scanf ("%d", &elem);
   
   if (busca_lista (L, elem)==1)
       printf ("\n Elemento foi encontrado na lista");
   else
       printf ("\n Elemento não foi encontrado na lista");
 
   printf ("\n Digite o elemento a ser removida da lista:");
   scanf ("%d", &elem);
 
   remove_lista (&L, elem);
   imprime_lista (L);
   getch();
} 
```