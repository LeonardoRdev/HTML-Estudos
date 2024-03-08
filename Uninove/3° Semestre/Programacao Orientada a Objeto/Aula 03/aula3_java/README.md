# Aula 3

### Eclipse 

Caso ele abra sem perguntar a pasta:
Window -> preferences -> workspace -> marcar [ x ] Prompt for workspace on startup.

Para rodar no Google Chrome:
Window -> Web Browser -> Select Chrome.

Para deixar o eclipse "ZERADO":
Fechar a guia "Welcome" e clicar na direita no papelzinho amarelo com o botão direito e clicar em "close".
Então clique em "Open Perspective" (fica quase no mesmo lugar do outro botão), e selecione "Java" e abra.

Deixando apenas o que utilizaremos:
* Caso feche alguma janela por acidente, Window -> Show View -> Procura o Nome.

NÃO utilizaremos o "packet explorer", a [ÁREA DA DIREITA] e nem a [PARTE DE BAIXO], então podemos minimizar tudo isso;

Abriremos o CONSOLE, para isso: Window -> Show View -> Console,

Então abriremos o projeto:
File -> New -> Java Project.
Desmarcar a opção de "create java bagulhos" [ x ] -> [   ].

Clicar com botão direito na pasta "src" -> New -> Package.

E para criar uma classe nesse Package:
Botão direito (em Package) -> New -> Class.
(A classe precisa ter a primeira letra maiúscula, eu acho).

---

### Conteúdos da aula:
- for (int i = 0; i <= 10; i++) {} // 0,1,2,3,4,5,6,7,8,9,10;
- if (var % 2 == 0) {} // var é par;
- while // Repetir enquanto for verdadeiro;
- do while // Faz o loop uma vez, se a comparação for verdadeira ele continua fazendo;

Sintaxe do do while {}
    do {
          System.out.println("Valor: " + valor);
          valor++;
     } while(valor == 999);

- Objetos

---

## Objetos e Classes | Banco de Dados!

Classe
carro {
marca
modelo
cor
}

Objeto
marca: "VW";
modelo: "FOX";
cor: "ROSA";

ou

marca: "FIAT";
modelo: PALIO;
cor = "VERMELHO";

E essa informação pode ser enviada para o banco de dados.

CLASSE EM JAVA
package veiculos;

class Carro {

// Propriedades ou atributo;
String marca;
String modelo;
String cor;
}

---

## Código Tabuada

Mostra número ímpares de uma tabuada

public class Main
{
  public static void main (String[]args)
  {
      int tabuada = 7;
      System.out.println("Números ímpares da tabuada do " + tabuada + ":\n");
for(int i = 0; i <= 10; i++) {
   if ((i * tabuada) % 2 == 1) {
       System.out.println(i + " x " + tabuada + " = " + i * tabuada);
   }
}
  }
}

---

## Código removedor de vírus

Não é vírus de verdade, e nem remove nada de verdade

public class Main {
    public static void main(String[] args) {
        int valor = 0;
        while(valor <= 10000) {
            System.out.println("vírus detectados = " + valor + "\n");
            valor++;
        }
        System.out.println("Vírus removidos! :D ");
    }
}
