# Aula 4
## Dicas
O SCANF precisa de um espaço antes do "%" para funcionar, não tem motivo.
 scanf(" %[^\n]", &senha);

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

Faz a variável "double" só mostrar 2 números após a vírgula:
printf("Peso..; %.2lf\n", peso);

---

Para os caracteres aparecerem de forma correta:
#include<locale.h>
main ( ) {
    setlocale(LC_ALL, "Portuguese");
}

## Exercícios de decisão (IF/ELSE)

https://drive.google.com/drive/folders/1mwsVekYwrm0K_8t16lonXK20PDfHua3r

### Exercício de repetição (FOR, WHILE, DO/WHILE)

1) Fazer um programa no qual o usuário digite o início e o fim de um intervalo e o programa deve exibir todos os números ímpares no intervalo.

2) Fazer um programa que force o usuário a digitar um número par para finalizar o programa. Enquanto o usuário estiver digitando um número ímpar o programa fica repetindo a mensagem "Digite um número par para finalizar".

3) Faça um programa que exiba a tabuada até 10 de um número digitado pelo usuário.

4) Faça um programa que peça para o usuário digitar um número de acordo com o número digitado, o programa deve exibir a frase bom dia "n" vezes, conforme o número digitado pelo usuário.

5) Faça um programa que receba um número digitado pelo usuário e informe se o número é primo ou não.

6) Faça um jogo da forca. O jogador 1 deve cadastrar uma palavra e o jogador 2 deve tentar adivinhar. O jogador 2 deve informar uma letra de cada vez. Se acertar, a letra é revelada nas posições que contém a letra. Se errar, a letra deve ser salva num vetor que armazenará os erros. O jogador 2 pode errar 5 vezes. Caso saiba, a palavra secreta, ele pode digitar a palavra de uma só vez, porém se errar perde o jogo.
