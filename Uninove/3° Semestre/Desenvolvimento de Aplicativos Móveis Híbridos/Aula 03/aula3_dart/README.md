# Aula 3
## Edição de listas com Dart
**O que aprendemos até agora:**
Listas: inserir -> add(), addAll(), insert(), insertAll()

E hoje aprenderemos a **remover elementos** da lista:
  **Lista:**
  List<String> lista = ["Celular", "Copo", "Prato", "Microfone"];

  #### lista.remove("item");
  Remoção do item ("Copo"), da lista:
  lista.remove("Copo");

  #### lista.removeAt.("index);
  Remoção do item ("Celular"), da lista:
  lista.removeAt(0);

  #### lista.removeRange(index ínicio, index fim);
  Remove os itens "Copo" e "Prato" da lista:
  lista.removeRange(1, 3)

  ### Para remover o último elemento de uma lista:
  lista.removeAt(lista.length - 1);
  ou
  **lista.removeLast();**
  
  #### Se quiser deletar a lista toda:
  lista.clear();

  ---

  ## Remoção por lambda (função anônima / arrow function)
  #### Remoção de itens repetidos
  var nomes = ["Léo", "João", "Rafael", "Samuel", "Edson", "João"];
  nomes.removeWhere((String nome) => nome == "João");

  **Isso irá remover todos os itens com o mesmo nome de uma lista**

  É possível adicionar quantas condições você quiser:
  nomes.removeWhere((String nome) => nome == "João" || nome == "Samuel");

  ### Remover / pesquisar elementos com o "contains"
  **Para pesquisar:**
  print(nome.contains("Rafael"));
  resultado: **true**

  **Para remover:**
  nomes.removeWhere((String nome) => ["Léo", "Samuel", "Rafael"].contains(nome));
  Se algum nome da lista ["Léo", "Samuel", "Rafael"] conter o mesmo item na lista "nomes", ele removerá o item:
  resultado: [João, Edson, João]

  ---

  ## Alterar valores das listas
  #### pelo índice
  nomes[0] = "Leonardo Rocha";
  nomes[5] = "JVNS";

  ### Ordenação de lista

  #### Ordenação sem parâmetros (default)
  Crescente:
  print(nomes..sort());
  resultado: [Edson, JVNS, João, Léo, Rafael, Samuel]

  Decrescente:
  Primeiro temos que deixar em ordem crescente, e então invertemos ela
  nomes..sort();
  E então invertemos:
  print(nomes.reversed)

  **OBS:** dessa maneira, a lista se transformará em uma TUPLA, fazendo com que ela não possa mais ser alterada. 

  #### Ordenação com parâmetro
  Utilizando **LAMBDA**
  Crescente:
  nomes.sort((x,y) => x.compareTo(y));
  Decrescente:
  nomes.sorte((x, y) => y.compareTo(x));
  **OBS:** a lista não se transformará em TUPLA utilizando este método.

  ---

  ## Mesclagem de Listas
  var x = ["Casa", "Tapete"];
  var y = ["Martelo", "Prego"];

  #### Forma 1 - Método Imperativo (altera o estado da lista)
  x.addAll(y);
  print(x);
  resultado: [Casa, Tapete, Martelo, Prego]
  print(y);
  resultado: ["Martelo", "Prego"]
  A variável **x** está alterada permanentemente. 

  #### Forma 2 - Método Funcional (não altera o estado das listas)
  var saida = [x, y].expand( (fusao) => fusao.toList());
  print(saida);
  resultado: (Casa, Tapete, Martelo, Prego)
  Ele **cria outra lista**, mantendo as originais intáctas.

  ---

  ## Exercício
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