# Aula 8
## Atalhos
**Control + Shift + O:**
adiciona as bibliotecas automaticamente (import);

**Alt + Shift + R** ou **Ctrl+ F:**
Muda todos os nome ao mesmo tempo.
### For em JAVA

**for padrão**
```
// Cria e insere os valores dentro do vetor
int[] valores = {200, 10, 36, 20, 30, 51, 230, 67};

for(int i = 0; i <= 3; i++) {
    System.out.println("Posição " + (i+1) + " -> " + valores[i]);
}

*RESULTADO:*
Posição 1 -> 200
Posição 2 -> 10
Posição 3 -> 36
Posição 4 -> 20
```

**for each**
```
// Cria e insere os valores dentro do vetor
int[] valores = {200, 10, 36, 20, 30, 51, 230, 67};

int x = 0;
for(int valor:valores) {
    x++;
    System.out.println("Posição " + x + " -> " + valor);
}

*RESULTADO:*
Posição 1 -> 200
Posição 2 -> 10
Posição 3 -> 36
Posição 4 -> 20
Posição 5 -> 30
Posição 6 -> 51
Posição 7 -> 230
Posição 8 -> 67
```

---

**Teste array em java:**

```
package vetor;

import java.util.ArrayList;
import java.util.List;

public class TesteVetor3 {

public static void main(String[] args) {

// Lista em java:
// Criando um vetor chamado "nomes":
List<String> nomes = new ArrayList<>();

// Adicionando nomes:
nomes.add("Morales");
nomes.add("Mireles");
nomes.add("Michael");
nomes.add("Moana");
nomes.add("Marker");

nomes.remove("Mireles");


for(String nome:nomes) {
System.out.println(nome);
}

}

}

```

## Códigos da aula:
**Carro.java**
```
// Esta é a CLASSE

package veiculos;

public class Carro {

// Construtor recebe todos os atributos
public Carro(String marca, String modelo, String cor, int km,
int capacidadeTanque, int kmPorLitro, double preco) {
this.marca = marca;
this.modelo = modelo;
this.cor = cor;
this.km = km;
this.capacidadeTanque = capacidadeTanque;
this.kmPorLitro = kmPorLitro;
this.preco = preco;

this.qtdCarros++;
this.precoTotalCarros += preco;
}

// Propriedades / Atributos:
private String marca;
private String modelo;
private String cor;
private int km;
private int capacidadeTanque;
private int kmPorLitro;
private double preco;

// Atributos que não irão para o objeto:
private static int qtdCarros;
private static int precoTotalCarros;

public String getMarca() {
return marca;
}

public void setMarca(String marca) {
this.marca = marca;
}

public String getModelo() {
return modelo;
}

public void setModelo(String modelo) {
this.modelo = modelo;
}

public String getCor() {
return cor;
}

public void setCor(String cor) {
this.cor = cor;
}

public int getKm() {
return km;
}

public void setKm(int km) {
this.km = km;
}

public int getCapacidadeTanque() {
return capacidadeTanque;
}

public void setCapacidadeTanque(int capacidadeTanque) {
this.capacidadeTanque = capacidadeTanque;
}

public int getKmPorLitro() {
return kmPorLitro;
}

public void setKmPorLitro(int kmPorLitro) {
this.kmPorLitro = kmPorLitro;
}

public double getPreco() {
return preco;
}

public void setPreco(double preco) {
this.preco = preco;
}

public static int getQtdCarros() {
return qtdCarros;
}

public static void setQtdCarros(int qtdCarros) {
Carro.qtdCarros = qtdCarros;
}

public static int getPrecoTotalCarros() {
return precoTotalCarros;
}

public static void setPrecoTotalCarros(int precoTotalCarros) {
Carro.precoTotalCarros = precoTotalCarros;
}

// MÉTODO:
int calcularKm() {
// O método é do tipo "int" porque ele retorna um valor inteiro
return capacidadeTanque * kmPorLitro;
}

double calcularDesconto(double percentualDescontoVendedor) {

if (percentualDescontoVendedor >= 0 && percentualDescontoVendedor <= 4) {
return preco - (preco * (percentualDescontoVendedor/100));
}
else if (percentualDescontoVendedor < 0) {
return 0;
}
else {
return preco - (preco * 0.04);
}
}

double calcularDesconto(double percentualDescontoVendedor, double percentualDescontoGerente) {

// Altera o Percentual de Desconto do VENDEDOR
if(percentualDescontoVendedor < 0) {
percentualDescontoVendedor = 0;
}
else if (percentualDescontoVendedor > 4) {
percentualDescontoVendedor = 4;
}

// Altera o Percentual de Desconto do Gerente
if(percentualDescontoGerente < 0) {
percentualDescontoGerente = 0;
}
else if (percentualDescontoGerente > 2) {
percentualDescontoGerente = 2;
}

return this.preco - (this.preco * ((percentualDescontoVendedor/100) + (percentualDescontoGerente/100)));
}

}
```

**ProgramaPrincipal.java**
```
// Este arquivo é o OBJETO Carro

package veiculos;

import java.util.ArrayList;
import java.util.List;

public class ProgramaPrincipal {

public static void main(String[] args) {

List<Carro> carros = new ArrayList<>();

// ------------------- Marca, Modelo, Cor, KM, Rodagem, Preço.
carros.add(new Carro("Tesla", "Cyber-Truck-2077", "Preto Froxo", 0, 200, 100, 840000));
carros.add(new Carro("Chevrolet", "Onix", "Azul", 220, 25, 8, 86150));
carros.add(new Carro("Volkswagen", "Fuscão", "Preto", 150000, 40, 11, 25000));
carros.add(new Carro("TCM", "Mococa", "Marrom fosco", 0, 1000, 100, 150000));

// TODOS OS CARROS:
int i = 1;
for (Carro carro:carros) {
i++;
System.out.println(">CARRO " + i);
System.out.println("Marca...: " + carro.getMarca());
System.out.println("Modelo..: " + carro.getModelo());
System.out.println("Cor.....: " + carro.getCor());
System.out.println("KM......: " + carro.getKm());
System.out.println("Rodagem.: " + carro.calcularKm());
System.out.println("Preço...: " + carro.getPreco());
System.out.println("Desconto: " + carro.calcularDesconto(2.5));

System.out.println("\n===============================\n");
}

// Resultados finais:
System.out.println("RESULTADOS FINAIS:");
System.out.println("Quantidade de Carros: " + Carro.getQtdCarros());
System.out.print("Soma total Preços: R$" + Carro.getPrecoTotalCarros());
System.out.println(".00");
}
}
```