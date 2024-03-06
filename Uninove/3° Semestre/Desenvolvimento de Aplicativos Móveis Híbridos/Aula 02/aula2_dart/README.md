# Aula 2 | DART

## Estruturas de Listas (arrays)

Listas são estruturas de dados que permitem armazenar dados de forma sequencial. São identificadas por colchetes [].

#### Declarando uma lista com String

O símbolo <> recebe o nome de **diamond**

var produtos = <String>["cenoura", "Batata", "Melão"];

--- 

### Uma lista trabalha com índices (sempre iniciando em 0)

......0 ............1...........2
["Edson", "Maria", "João"]

Para mostra elementos de forma individual:
var nomes = <String>["Edson", "Maria", "João"];
print(nomes[1]) // O resultado seria = "Maria"

---

### Maneiras de percorrer uma array:

Existem duas maneiras: "for()" ou "for in"

#### for e lenght
O índice "i", será responsável por iterar cada item da lista:
  for (int i = 0; i < produtos.length; i++) {
    print("Índice: $i => ${produtos[i]}");
  }
  
Resultado:
Índice: 0 => Cenoura
Índice: 1 => Batata
Índice: 2 => Melão

#### for in
Já o for in irá percorrer toda a array de forma mais "simples", criando outra variável que terá o valor do atual item percorrido:

  for (var produto in produtos) {
    print("Protudo: $produto");
  }

Resultado :
Protudo: Cenoura
Protudo: Batata
Protudo: Melão

---

### Atividade 1:
Criar uma array com 10 números, e mostrar a soma entre eles:

var listaDeNumeros = <int>[1, 2, 3, 4, 5, 6 , 7, 8, 9, 10];
  int soma = 0;
  for (var numero in listaDeNumeros) {
    soma += numero;
  }
  print("A soma de todos os números do array é: $soma");

Resultado: A soma de todos os números do array é: 55

---

### Atividade 2:

Atividade 2: Com base nan lista lista "listaDeNumeros", mostre apenas os números contidos nos índices "pares" 

print("Números contidos nos índices pares:\n");
 for (var i = 0; i < listaDeNumeros.length; i++) {
  if (i % 2 == 0) {
    print("Número contido no índice $i: ${listaDeNumeros[i]}");
  }
 }

Resultado: 
Números contidos nos índices pares:

Número contido no índice 0: 1
Número contido no índice 2: 3
Número contido no índice 4: 5
Número contido no índice 6: 7
Número contido no índice 8: 9

#### Ainda sobre a mesma lista, mostre apenas os números pares:
print("\nNúmeros pares encontrados no array:");
for (var i = 0; i < listaDeNumeros.length; i++) {
  if (listaDeNumeros[i] % 2 == 0) {
    print(listaDeNumeros[i]);
  }
}

Resultado:
Números pares encontrados no array:
2
4
6
8
10

---

### Adicionar item ao array:

#### .add( )
var produtos = <String>['Cenoura', 'Batata', 'Melão'];
produtos.add('maça');
Novo array: ['Cenoura', 'Batata', 'Melão', 'maça'];

#### .insert( )
Para adicionar algo, entre a 'Batata' e o 'Melão', teremos que utilizar o **INSERT** :
produtos.insert(1, 'Goiaba');
// Você define o ÍNDICE e depois o conteúdo a ser adicionado
Novo array: ['Cenoura', 'Goiaba','Batata', 'Melão', 'maça'];

#### Adicionado vários valores de uma só vez

produtos..add("Caqui")..add("Laranja");

**ou**

frutas.addAll(['Limão", "Abacaxi", "Uva"]);

#### Inserindo vários valores de uma só vez

// No índice 3, insira os seguintes itens:
produtos.insertAll(3, ["Tâmara", "Atemóia", "Seriguela"]);

---

