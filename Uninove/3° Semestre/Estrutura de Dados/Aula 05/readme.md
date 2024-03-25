# Aula 5 | Sérgio 
Primeira aula com o professor Sérgio, ele nos ensinou o método de ordenação em bolha, que basicamente faz o seguinte:

## Organização em ordem crescente 
Em uma array com 5 números, por exemplo, para saber qual o maior, você vai criar um laço de repetição "for" que irá percorrer o tamanho da lista inteira -1.Então dentro desse for, você vai criar outro "for", percorrendo a lista inteira -1 novamente, para comparar se o número atual é maior que o próximo número do array, e ele vai fazendo isso até o penúltimo número, já que não tem como comparar o último com um após ele.E para ele alterar de fato o valor do conteúdo da lista na posição [X], você precisará de uma variável auxiliar para passa o valor de um para o outro, por exemplo:
numero1 = 1;
numero2 = 2;
auxiliar = numero1;
numero1 = numero2;
numero2 = auxiliar;

E assim vai sucessivamente até terminar toda a lista (array)
