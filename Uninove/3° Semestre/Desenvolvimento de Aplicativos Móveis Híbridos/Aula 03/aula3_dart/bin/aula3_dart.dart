import 'dart:math';

void main() {
  // Criando uma lista:
  // List<String> lista = ["Celular", "Copo", "Prato", "Microfone"];
  // print(lista);

  // Remoção do item ("Copo"), da lista:
  // lista.remove("Copo");
  // print(lista);

  // Remove o "Celular"
  // lista.removeAt(0);
  // print(lista);

  // Remove os itens "Copo" e "Prato" da lista:
  // lista.removeRange(1, 3);
  // print(lista);

  // ## Para remover o último elemento de uma lista:
  // lista.removeAt(lista.length - 1);
  // print(lista);
  // // ou
  // lista.removeLast();
  // print(lista);

  // Se quiser deletar a lista toda:
  // lista.clear();
  // print(lista);



  // var nomes = ["Léo", "João", "Rafael", "Samuel", "Edson", "João"];
  // print(nomes);

  // nomes.removeWhere((String nome) => nome == "João" || nome == "Léo");
  // print(nomes);

  // Procurar na lista o item "João":
  // print(nomes.contains("João"));

  // Remover: "Léo", "Samuel", "Rafael" usando removeWhrere sem o "||";
  
  // nomes.removeWhere((String nome) => ["Léo", "Samuel", "Rafael"].contains(nome));
  // print(nomes);

  // nomes[0] = "Leonardo Rocha";
  // nomes[5] = "JVNS";
  // print(nomes);

  // print(nomes..sort());

  // ---

  // Mesclagem de Listas
  // var x = ["Casa", "Tapete"];
  // var y = ["Martelo", "Prego"];

  //forma 1 - Método Imperativo (altera o estado da lista)
  // x.addAll(y);
  // print(x);

  //Forma 2 - Método Funcional (não altera o estado das listas)
  // var saida = [x, y].expand( (fusao) => fusao.toList());
  // print(saida);



  // EXERCICIO
  // 1 - Excluir apenas os números que forem menores que 10
  // 2 - Verificar se o número 77 está na lista
  // 3 - Criar uma lista com 10 números negativos e incorporar a lista (1)
  // 4 - Mostrar o conteúdo da lista em ordem decrescente (usando LAMBDA / arrow function)
  var aleatorio = Random();
  var numeros = List.generate(50, (_) => aleatorio.nextInt(101));
  // Lista original
  print("Lista original:\n$numeros");

  print("\n1)");
  numeros.removeWhere((var numero) => numero < 10);
  print(numeros);

  print("\n2)");
  if (numeros.contains(77)) {
    print("A lista possui o número 77");
  }
  else {
    print("A lista não possui o número 77");
  }

  print("\n3)");
  // Lista de números negativos de 0 até -50;
  var numerosNegativos = List.generate(10, (_) => aleatorio.nextInt(51) * -1);
  print("Lista com números negativos:\n$numerosNegativos");
  numeros.addAll(numerosNegativos);
  print("\nLista mesclada:\n$numeros");

  print("\n4)");
  // Com LAMBDA (arrow function)
  numeros.sort((comeco, fim) => fim.compareTo(comeco));
  print(numeros);

  // Sem LAMBDA
  // print(numeros..sort());
}