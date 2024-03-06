# Aula 2 | DART

### Uma lista trabalha com índices (sempre iniciando em 0):
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

