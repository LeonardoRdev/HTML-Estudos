# Aula 4

## Configuar o ECLIPSE
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
Desmarcar a opção de "create module-info.java file" [ x ] -> [   ].

Clicar com botão direito na pasta "src" -> New -> Package.

E para criar uma classe nesse Package:
Botão direito (em Package) -> New -> Class.
(A classe precisa ter a primeira letra maiúscula, eu acho).

---

## Java

Em java você precisa criar um pacote e criar suas classes dentro dele.

Criaremos o pacote "Veículos" dentro da pasta "SRC", e dentro desse pacote iremos criar as classes e começar o nosso projeto de verdade!

Pacote "Veículos -> New Class -> nome: "Carro"

As classes têm que ser criadas com a inicial MAIÚSCULA.

### Importante
O programa vai sempre procurar pela classe que possui o void main( ), e somente essa classe rodará todas as outras.

O objeto é apontado pela Classe, cada classe só aponta para objetos do mesmo tipo.

É quase como criar uma variável do valor int.

---

## Desafio

Você é um desenvolvedor de sistemas e foi designado para criar um sistema de cadastro de funcionários. Os dados que precisam ser cadastrados são: nome, idade e salário.
O sistema pertencerá à empresa Uninove.

- Crie um novo projeto;
- Crie a classe deste projeto;
- Crie o objeto e coloque as informações no objeto;
- No final mostrar todas as informações inseridas;

### Código:

[cadastroFuncionario.java]

package sistemacadastrofuncionarios;

public class cadastroFuncionario {

String nome;
int idade;
double salario;
}

[ProjetoPrincipal.java]

package sistemacadastrofuncionarios;

public class ProjetoPrincipal {

public static void main(String[] args) {

cadastroFuncionario funcionario = new cadastroFuncionario();

funcionario.nome = "Gustavo Basílio";
funcionario.idade = 18;
funcionario.salario = 126.31;

System.out.println("DADOS DO FUNCIONÁRIO:");
System.out.println("\nNome....: " + funcionario.nome);
System.out.println("Idade...: " + funcionario.idade + " anos");
System.out.println("Salário.: €" + funcionario.salario);
}

}
