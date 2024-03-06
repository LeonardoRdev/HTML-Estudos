void main() {

  var produtos = <String>['Cenoura', 'Batata', 'Melão'];

// for e lenght
  for (int i = 0; i < produtos.length; i++) {
    print("Índice: $i => ${produtos[i]}");
  }

  print("\n");

// for in
  for (var produto in produtos) {
    print("Protudo: $produto");
  }

  print('\n\nATIVIDADE:');

  // ATIVIDADE: Criar uma array com 10 números,
  // e mostrar a soma entre eles:

  var listaDeNumeros = <int>[1, 2, 3, 4, 5, 6 , 7, 8, 9, 10];
  int soma = 0;
  for (var numero in listaDeNumeros) {
    soma += numero;
  }
  print("A soma de todos os números do array é: $soma");

}
