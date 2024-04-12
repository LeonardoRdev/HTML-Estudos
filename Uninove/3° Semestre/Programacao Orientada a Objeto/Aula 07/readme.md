# Aula 7

Veremos as propriedades privadas e utilização dos getters e setters, além de utilizarmos;

## Construtores

Um método construtor é implícito no código:
```
package veículos;

public class Carro { }

// O construtor não está explícito
```

Mas podemos deixá-lo explícito da seguinte maneira:
```
package veículos;

public class Carro {

// Construtor:
public Carro ( ) {
    System.out.println("Podemos inclusive colocar uma mensagem");
    }
}
```

---

### Exemplo de código dentro do construtor

O código só permite que um carro entre 0 a 20.000 km seja cadastrado no sistema como um objeto da classe Carro:

```
 // Construtor recebe a KM
public Carro(int km) {
if (km >= 0 && km <= 20000) {
this.km = km;
} else {
System.err.println("KM acima de 20.000"); // Mensagem de erro
System.exit(0); // Para o sistema / aplicação;
}

}
```

---

## Atalhos:

Como criar construtores / GETTERS e SETTERS de forma prática:

CTRL + 3

Para gerar os GETTERS e SETTERS:
GGAS // Generate Getters And Setters

Para gerar os CONSTRUTORES:
GCUF // Generate Constructor Using Fields

---

Atributo que não vai para o objeto
```
 // Propriedades / Atributos:
private String marca;
private String modelo;
private String cor;
private int km;
private int capacidadeTanque;
private int kmPorLitro;
private double preco;

// Atributo que não vai para o objeto:
private static int qtdCarros;


```











---

## Código da aula

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
// Este é o OBJETO

package veiculos;

public class ProgramaPrincipal {

public static void main(String[] args) {

// CARRO 1
Carro novoCarro1 = new Carro("Tesla", "Cyber-Truck-2077", "Preto Froxo", 0, 200, 100, 840000);
novoCarro1.setMarca("Tesla"); // set marca = "Tesla"
novoCarro1.setModelo("Cyber-Truck 2077");
novoCarro1.setCor("Preto Froxo");
novoCarro1.setKm(0);
novoCarro1.setCapacidadeTanque(200);
novoCarro1.setKmPorLitro(100);
novoCarro1.setPreco(840000);

System.out.println("\n>CARRO 1");
System.out.println("Marca...: " + novoCarro1.getMarca()); // get marca = "Tesla";
System.out.println("Modelo..: " + novoCarro1.getModelo());
System.out.println("Cor.....: " + novoCarro1.getCor());
System.out.println("KM......: " + novoCarro1.getKm());
System.out.println("Rodagem.: " + novoCarro1.calcularKm());
System.out.println("Preço...: " + novoCarro1.getPreco());
System.out.println("Desconto: " + novoCarro1.calcularDesconto(2.5));

System.out.println("\n===============================\n");

// CARRO 2
Carro novoCarro2 = new Carro("Chevrolet", "Onix", "Azul", 220, 25, 8, 86150);
novoCarro2.setMarca("Chevrolet");
novoCarro2.setModelo("Onix");
novoCarro2.setCor("Azul");
novoCarro2.setKm(220);
novoCarro2.setCapacidadeTanque(25);
novoCarro2.setKmPorLitro(8);
novoCarro2.setPreco(86150);

System.out.println(">CARRO 2");
System.out.println("Marca...: " + novoCarro2.getMarca());
System.out.println("Modelo..: " + novoCarro2.getModelo());
System.out.println("Cor.....: " + novoCarro2.getCor());
System.out.println("KM......: " + novoCarro2.getKm());
System.out.println("Rodagem.: " + novoCarro2.calcularKm());
System.out.println("Preço...: " + novoCarro2.getPreco());
System.out.println("Desconto: " + novoCarro2.calcularDesconto(2.4));

System.out.println("\n===============================\n");

// CARRO 3
Carro novoCarro3 = new Carro("Volkswagen", "Fuscão", "Preto", 150000, 40, 11, 25000);
novoCarro3.setMarca("Volkswagen");
novoCarro3.setModelo("Fuscão");
novoCarro3.setCor("Preto");
novoCarro3.setKm(150000);
novoCarro3.setCapacidadeTanque(40);
novoCarro3.setKmPorLitro(11);
novoCarro3.setPreco(25000);

System.out.println(">Carro 3");
System.out.println("Marca...: " + novoCarro3.getMarca());
System.out.println("Modelo..: " + novoCarro3.getModelo());
System.out.println("Cor.....: " + novoCarro3.getCor());
System.out.println("KM......: " + novoCarro3.getKm());
System.out.println("Rodagem.: " + novoCarro3.calcularKm());
System.out.println("Preço...: " + novoCarro3.getPreco());
System.out.println("Desconto: " + novoCarro3.calcularDesconto(4, 2));

Carro novoCarro4 = new Carro("Marca", "Modelo", "Cor", 10000, 20, 6, 20000);
Carro novoCarro5 = new Carro("ToddyComMococa", "SUV", "Preto Fosco", 0, 0, 0, 0);

System.out.println("\n==============================\n");
System.out.println("RESULTADOS FINAIS:");
System.out.println("Quantidade de Carros: " + Carro.getQtdCarros());
System.out.print("Soma total Preços: R$" + Carro.getPrecoTotalCarros());
System.out.println(".00");
}
}
```