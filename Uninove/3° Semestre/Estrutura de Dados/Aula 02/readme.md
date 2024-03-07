# Aula 2

### IMPORTANTE

O SCANF precisa de um espaço antes do "%" para funcionar, não tem motivo.
 scanf(" %[^\n]", &senha);

### O que faremos hoje:
3 exercícios para praticarmos a sintaxe e a lógica do if na linguagem C

---

Na linguagem C não existe String, apenas char

Para criarmos uma variável do tipo "string" (char) precisaremos definir o que ela ocupará, utilizando os colchetes [20];
char nome[20];

Utilize o seguinte método se a variável possuir espaços: 
printf("Digite o nome: ");
scanf("%[^\n]", &nome);

Caso não possua espaço pode usar desse método mais simples (não vai ler após o espaço):
// scanf("%s", &nome);
// Se utilizar %s, &nome
// ele vai ler somente até o espaço

Para limpar a tela:
system("cls");

Faz a variável "double" só mostrar 2 números após a vírgula:
printf("Peso..; %.2lf\n", peso);

---

Para os caracteres aparecerem de forma correta:
.#include<locale.h>
main ( ) {
    setlocale(LC_ALL, "Portuguese");
}

Para verificar se uma string está escrita de maneira correta:
// Como funciona: strcmp (string compare), resultando em 0 se igual;
if (strcmp (senha, "senhalegal123")  == 0 ) {
  Se a senha for "senhalegal123", o programa irá mostrar essa mensagem.
}






---

## Desafio 1

O usuário cadastra suas informações para que o programa "cadastre" elas no sistema:

.#include<stdio.h>
.#include<stdlib.h>

void main() {

// 

char nome[20];
int idade;
double peso;

printf("Digite o nome: ");
scanf("%[^\n]", &nome);

// scanf("%s", &nome);
// Se utilizar %s, &nome
// ele vai ler somente até o espaço

printf("Digite sua idade: ");
scanf("%d", &idade);

printf("Digite seu peso: ");
scanf("%lf", &peso);

system("cls"); // Limpar a tela;
printf("Dados Cadastrados!\n\n");
printf("Nome..: %s\n", nome);
printf("Idade.: %d\n", idade);
printf("Peso..; %.2lf\n", peso); // Só vai mostrar 2 números após a vírgula;
}

---

## Desafio 2

O usuário digita a idade para saber se pode ser preso ou não:

.#include<stdio.h>
.#include<stdlib.h>
.#include <locale.h>

main () {
setlocale(LC_ALL, "Portuguese");

int idade;

printf("Digite sua idade: ");
scanf("%d", &idade);

if (idade >= 18) {
if (idade == 18) {
printf("\nFica esperto que a partir de agora suas ações terão consequências");
}
else {
printf("\nCuidado que você pode ser preso a qualquer momento!");
}
}
else if (idade < 18 && idade > 0) {
printf("\nVocê não pode ser preso ainda!");
}
else {
printf("\nDigite uma idade válida!");
}
}

---

## Desafio 3

O usuário digita RA e senha e o programa tem q ver se tá certo o login:

.#include<stdio.h>
.#include<stdlib.h>
.#include<string.h> // Serve para tratar de strings
.#include<locale.h>

main () {
setlocale(LC_ALL, "Portuguese");
// usuario digita RA e senha e o programa tem q ver se tá certo o login
double ra;
char senha[20];

printf("Digite o seu RA: ");
scanf("%lf", &ra);

printf("Digite a sua senha: ");
scanf(" %[^\n]", &senha);




// string compare (variavel, texto a comparar), resultando em 0 se igual;
if (ra == 923103468 && strcmp(senha, "senhalegal123") == 0 ) {
printf("\nLogin efetuado com sucesso!");
}
else {
if (ra == 923103468 || strcmp(senha, "senhalegal123") == 0 ) {
printf("\nAcertou alguma coisa pelo menos");
}
else {
printf("\nAcesso Negado");
}
}
//
}


---

## Desafio 4

O usuário vai digitar um número e o programa vai dizer se o número é ÍMPAR ou PAR:

.#include<stdio.h>
.#include<stdlib.h>
.#include<locale.h>

main () {
setlocale(LC_ALL, "Portuguese");

int numero;

printf("Digite um número e direi se ele é par ou impar :");
scanf("%d", &numero);

if (numero % 2 == 0) {

printf("\nO número %d é PAR", numero);
}
else {

printf("\nO número %d é ÍMPAR", numero);
}
}
