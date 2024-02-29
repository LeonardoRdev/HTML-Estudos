# Aula 1

## **Variáveis**

### **Char**

char letra1;

char letra2;

char letra3;

...

é a mesma coisa que:

char letras[3];

a char "variável" só aceita 1 letra, então precisamos de várias para por utilizá-las de maneira útil

### Int

Para números inteiros (int) funciona no mesmo jeito:

int idade1;

int idade2;

int idade3;

int idade4;

int idade5;

idade3 = 35;

pode ser feito do seguinte modo:

idades[5];

idades[2] = 35; // A terceira variável de "idades" recebe o valor de 35;

idades[0]; // Posição 0.

idades[1]; // Posição 1.

idades[2]; // Posição 2.

idades[3]; // Posição 3.

idades[4]; // Posição 4.

Resumindo:

idades -  idades[3];

vetor  -    indice

array  -    index

---

### **Como ler a variável "char" digitada pelo usuário**

scanf(" %[^\n]",&nome);

// % -> escaneia

// [^\n] -> fazer até \n (pular linha)

fflush(stdin); //limpa o buffer do teclado

Tudo que você digita fica na memória do buffer, o comando "gets( )"; não funciona se o buffer estiver conteúdo.

aí você consegue utilizar o:

gets(nome); // Gera um nome / pega um nome;

---

### Por que usar **Double** em vez de **Float**

double; // É mais preciso que o "float", pois na biblioteca Math, por exemplo, as funções normalmente só aceitam "double" em vez de "float", então se for pra dar bom que dê de uma vez. O problema é que por o "double" ser mais preciso, ele precisa de mais espaço na memória, fazendo com que ele seja mais pesado que o "float".

float; // O float ocupa menos espaço de memória, fazendo com que ele seja mais leve do que o "double", porém ele não é tão preciso quanto o "double".

---

**Char** *nome* é uma string, coletor de nomes - %s sempre usado para string.

**int** é número inteiro - %d ou %i sempre usado para números inteiros.

**double** é número quebrado - %lf sempre usada para números quebrados.

---

## **Código da Aula**


    
    #include<stdio.h> // printf(), scanf();
    #include<stdlib.h> // system();

    main() {
        // Cria uma string com até 20 letras.
    char nomeGustavo[20];

    // %s para a variável Vetorint idadeGustavo;
    // %d ou %i;
    double pesoGustavo; // %lf;

    printf("Digite seu nome: ");
    scanf(" %[^\n]", &nomeGustavo);

    printf("Digite sua idade: ");
    scanf("%d", &idadeGustavo);

    printf("Digite seu peso: ");
    scanf("%lf", &pesoGustavo);

    printf("\n\nDados Cadastrados:\n");

    printf("Nome : %s\n", nomeGustavo);
    printf("Idade: %d\n", idadeGustavo);
    printf("Peso : %.2lf\n\n", pesoGustavo);

    prinf("\n\n\n\n\n\n");
    System("pause");
    }