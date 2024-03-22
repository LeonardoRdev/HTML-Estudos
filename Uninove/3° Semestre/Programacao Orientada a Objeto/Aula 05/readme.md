# Aula 5
## Configurar o ECLIPSE
Caso ele abra sem perguntar a pasta:
Window -> preferences -> workspace -> marcar [ x ] Prompt for workspace on startup.

Para deixar o eclipse "ZERADO":
Fechar a guia "Welcome" e clicar na direita no papelzinho amarelo com o botão direito e clicar em "close".
Então clique em "Open Perspective" (fica quase no mesmo lugar do outro botão), e selecione "Java" e abra.

Abriremos o CONSOLE, para isso: Window -> Show View -> Console,

Então abriremos o projeto:
File -> New -> Java Project.
Desmarcar a opção de "create module-info.java file" [ x ] -> [   ].

Clicar com botão direito na pasta "src" -> New -> Package.

E para criar uma classe nesse Package:
Botão direito (em Package) -> New -> Class.
(A classe precisa ter a primeira letra maiúscula, eu acho).

E então precisaremos criar a classe Principal. e ativaremos a opção [ x ] create public void main

---

## Métodos

Métodos são verbos.
Métodos definem o comportamento a ser obtido pelas instâncias das classes, podendo calcular, substituir, entre outras funções.

Exemplo de método:
int calcularKm( ) {
   return 50 * 12;
   // O método é do tipo "int" porque ele retorna um valor inteiro
}

## Escopo Global e Local

As variáveis com escopo GLOBAL podem utilizar a propriedade "this", que aprenderemos na próxima aula o do porque utilizar o "this".

Já as variáveis com escopo LOCAL ficam somente em métodos ou dentro de operações, não vazando para fora.

---

## Código da Aula

[Carro.java]

package veiculos;

public class Carro {

// Propriedades / Atributos:
String marca;
String modelo;
String cor;
int km;
int capacidadeTanque;
int kmPorLitro;
double preco;

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

[ProgramaPrincipal.java]

package veiculos;

public class ProgramaPrincipal {

public static void main(String[] args) {

// CARRO 1
Carro novoCarro1 = new Carro();
novoCarro1.marca = "Tesla";
novoCarro1.modelo = "Cyber-Truck 2077";
novoCarro1.cor = "Preto Froxo";
novoCarro1.km = 0;
novoCarro1.capacidadeTanque = 200;
novoCarro1.kmPorLitro = 100;
novoCarro1.preco = 840000;

System.out.println("\n>CARRO 1");
System.out.println("Marca...: " + novoCarro1.marca);
System.out.println("Modelo..: " + novoCarro1.modelo);
System.out.println("Cor.....: " + novoCarro1.cor);
System.out.println("KM......: " + novoCarro1.km);
System.out.println("Rodagem.: " + novoCarro1.calcularKm());
System.out.println("Preço...: " + novoCarro1.preco);
System.out.println("Desconto: " + novoCarro1.calcularDesconto(2.5));

System.out.println("\n===============================\n");

// CARRO 2
Carro novoCarro2 = new Carro();
novoCarro2.marca = "Chevrolet";
novoCarro2.modelo = "Onix";
novoCarro2.cor = "Azul";
novoCarro2.km = 220;
novoCarro2.capacidadeTanque = 25;
novoCarro2.kmPorLitro = 8;
novoCarro2.preco = 86150;

System.out.println(">CARRO 2");
System.out.println("Marca...: " + novoCarro2.marca);
System.out.println("Modelo..: " + novoCarro2.modelo);
System.out.println("Cor.....: " + novoCarro2.cor);
System.out.println("KM......: " + novoCarro2.km);
System.out.println("Rodagem.: " + novoCarro2.calcularKm());
System.out.println("Preço...: " + novoCarro2.preco);
System.out.println("Desconto: " + novoCarro2.calcularDesconto(2.4));

System.out.println("\n===============================\n");

// CARRO 3
Carro novoCarro3 = new Carro();
novoCarro3.marca = "Volkswagen";
novoCarro3.modelo = "Fuscão";
novoCarro3.cor = "Preto";
novoCarro3.km = 150000;
novoCarro3.capacidadeTanque = 40;
novoCarro3.kmPorLitro = 11;
novoCarro3.preco = 25000;

System.out.println(">Carro 3");
System.out.println("Marca...: " + novoCarro3.marca);
System.out.println("Modelo..: " + novoCarro3.modelo);
System.out.println("Cor.....: " + novoCarro3.cor);
System.out.println("KM......: " + novoCarro3.km);
System.out.println("Rodagem.: " + novoCarro3.calcularKm());
System.out.println("Preço...: " + novoCarro3.preco);
System.out.println("Desconto: " + novoCarro3.calcularDesconto(4, 2));
}

}
