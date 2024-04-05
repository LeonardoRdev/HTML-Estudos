# Aula 5

## O que faremos
Na aula de hoje iremos criar um pacote e uma classe, sendo essa classe chamada "Carro".

### Atalhos

Atalho para alterar o nome de todas as variáveis (iguais) de uma só vez:
ALT + SHIFT + R

SOURCE -> GENERATE GETTERS AND SETTERS (para gerar os GETTERS e SETTERS)

---

## Encapsulamento | Getters e Setters

Encapsulamento -> é mandar um valor e o método retornar um resultado.

Encapsulamento é quando queremos "esconder" o processo por trás de como um programa funciona, para deixar mais seguro e prático para o usuário.

private -> só conversa com quem estiver na mesma classe que ele

No Encapsulamento também podemos colocar validadores para ver se o usuário colocou a informação esperada corretamente:

```
 // PEGAR | PEGAR INFORMAÇÕES DO OBJETO -> "GET"
// Sem void -> Está retornando "marca"
public String getMarca() {
return marca;
}

// INSERIR | SALVA AS INFORMAÇÕES DO OBJETO -> "SET"
// Void -> Não retorna nada
public void setMarca(String marca) {
//this.marca = marca;  // this.marca -> referência a propriedade "marca" da classe
// variável global "marca" = variável local "marcaQueDesejaSerInserida"
if(marca.equals("Tesla") || marca.equals("Chevrolet") || marca.equals("Volkswagen")) {
this.marca = marca;
} else {
System.err.println("ERRO -> Carro da Concorrência!!");
System.exit(0);
}
}
```


---

## Código da Aula
[ProgramaPrincipal.java]
```
package veiculos;

public class ProgramaPrincipal {

public static void main(String[] args) {

// CARRO 1
Carro novoCarro1 = new Carro();
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
Carro novoCarro2 = new Carro();
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
Carro novoCarro3 = new Carro();
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

}
}
```

[Carro.java]
```

package veiculos;

public class Carro {

// Propriedades e/ou Atributos:
private String marca;
private String modelo;
private String cor;
private int km;
private int capacidadeTanque;
private int kmPorLitro;
private double preco;
private double valorDesconto;


// MÉTODO:



// PEGAR | PEGAR INFORMAÇÕES DO OBJETO -> "GET"
// Sem void -> Está retornando "marca"
public String getMarca() {
return marca;
}

// INSERIR | SALVA AS INFORMAÇÕES DO OBJETO -> "SET"
// Void -> Não retorna nada
public void setMarca(String marca) {
//this.marca = marca;  // this.marca -> referência a propriedade "marca" da classe
// variável global "marca" = variável local "marcaQueDesejaSerInserida"
if(marca.equals("Tesla") || marca.equals("Chevrolet") || marca.equals("Volkswagen")) {
this.marca = marca;
} else {
System.err.println("ERRO -> Carro da Concorrência!!");
System.exit(0);
}
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

public double getValorDesconto() {
return valorDesconto;
}

public void setValorDesconto(double valorDesconto) {
this.valorDesconto = valorDesconto;
}

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