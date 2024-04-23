# Aula 10
## Filas e Pilhas

Pilhas são filas ao contrário, você sempre vai retirar o último elemento adicionado.

Um exemplo pode ser pensado com uma pilha de cartas, normalmente você pega a carta que está mais em cima, por questões de praticidade.

O mais conveniente é retirar a carta de cima, ou melhor, a última carta adicionada.

O programa abaixo faz a verificação de fechamento de parênteses, colchetes e chaves. 
Ele faz com que você não possa fazer algo assim:
( [ ) ]
o certo seria:
( [ ] )

```C
#include <stdio.h>
#include <stdlib.h>
#define MAX 50
 
int n;
char vet[MAX];
 
void cria ()
{
    n = 0; /* inicializa com zero elementos */
}
 
void push ( char v )
{
    if (n == MAX)
    { /* capacidade esgotada */
        printf("Capacidade da pilha estourou.\n");
        exit(1); /* aborta programa */
    }
    /* insere elemento na próxima posição livre */
    vet[n] = v;
    n++;
}

int vazia()
{
    return (n == 0);
}

char pop ()
{
    char v;
    if (vazia())
    {
        printf("Pilha vazia.\n");
        exit(1); /* aborta programa */
    }
    /* retira elemento do topo */
    v = vet[n-1];
    n--;
    return v;
}
 

 
void libera ()
{
    int a =0;
    n = 0;
    for( a = 0; a < MAX; a++) //Limpa a pilha
    {
        pop();
    }
}
 
main()
{
    int a = 0;
    char exp[50], car, tcar;
    system("cls");
    scanf("%s", &exp);
    while( 1 ) {
        if(exp[a] == '\0') break; // Se apertar "enter", sair do loop
        car = exp[a];
        if( car == '(' || car == '[' || car == '{') push( car );
        if( car == ')' || car == ']' || car == '}')
        {
           tcar = pop();
           if( !(car == ')' && tcar == '(' || \
                 car == ']' && tcar == '[' || \
                 car == '}' && tcar == '{' ))
              push( car );
        }
        a++;
    }
    if( vazia() ) printf("\nExpressao valida !!!");
    else printf("\nExpressao invalida !!!");
    system("pause");
}
```

---

Exemplo de programa que cálcula em pilha:
como ele funciona:
você digirta o primeiro número
então digita a operação
aí digita o segundo número

e o programa vai só juntar todas as informações:
número_1 (operação) número_2;

```C
#include <stdio.h>
#include <stdlib.h>
#include <conio.h>
#define MAX 2
 
int n;
float vet[MAX];
 
void cria (void)
{
    n = 0; /* inicializa com zero elementos */
}
 
void push ( float v)
{
    if (n == MAX)
    { /* capacidade esgotada */
        printf("Capacidade da pilha estourou.\n");
        exit(1); /* aborta programa */
    }
    /* insere elemento na próxima posição livre */
    vet[n] = v;
    n++;
}

int vazia ()
{
    return (n == 0);
}

float pop ()
{
    float v;
    if (vazia())
    {
        printf("Pilha vazia.\n");
        exit(1); /* aborta programa */
    }
    /* retira elemento do topo */
    v = vet[n-1];
    n--;
    return v;
}
 
void ptpilha()
{
    int a;
    system("cls");
    for( a = n; a >= 0; a-- )
        printf("item %3.2f\n", vet[a]);
    getch();
}

 
void libera ()
{
    n = 0;
}
 
main()
{
    int a;
    char op;
    float n1=0, n2=0, tt;
    cria();
    printf("Digite a expressao a ser calculada \nno formato (numero) (operador) (numero): ");
    scanf("%f %c %f", &n1, &op, &n2);
     
    push( n1 );
    push( n2 );
     
    n1 = pop();
    n2 = pop();
 
    if( op == '+') tt = n2 + n1;
    if( op == '-') tt = n2 - n1;
    if( op == '*') tt = n2 + n1;
    if( op == '/') tt = n2 / n1;
     
    printf("\n%f\n", tt);
     
    system("pause");
}
```