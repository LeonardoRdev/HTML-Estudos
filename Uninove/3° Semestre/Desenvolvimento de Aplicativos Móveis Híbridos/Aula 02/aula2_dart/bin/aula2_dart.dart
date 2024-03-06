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

  print('\n\nATIVIDADE 1:');

  // Atividade 1: Criar uma array com 10 números,
  // e mostrar a soma entre eles:

  var listaDeNumeros = <int>[1, 2, 3, 4, 5, 6 , 7, 8, 9, 10];
  int soma = 0;
  for (var numero in listaDeNumeros) {
    soma += numero;
  }
  print("A soma de todos os números do array é: $soma");

  print("\n\nATIVIDADE 2:");

  // Atividade 2: Com base nan lista lista "listaDeNumeros",
  // mostre apenas os números contidos nos índices "pares" 
  print("Números contidos nos índices pares:\n");
 for (var i = 0; i < listaDeNumeros.length; i++) {
  if (i % 2 == 0) {
    print("Número contido no índice $i: ${listaDeNumeros[i]}");
  }
 }

 // Ainda sobre a mesma lista, mostre apenas os números pares
print("\nNúmeros pares encontrados no array:");
for (var i = 0; i < listaDeNumeros.length; i++) {
  if (listaDeNumeros[i] % 2 == 0) {
    print(listaDeNumeros[i]);
  }
}

}
