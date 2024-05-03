# Aula 10
## Padrão MVC

**Controller** -> É o primeiro a pegar a requisição que vem da Internet;
**View** -> Tela que vai ser mostrada para o usuário.
**model** -> O Model é toda é classe que não for o "controller". Ele conversa com o banco.


Vamos criar o controller

Vamos criar um package chamado "controlador" na pasta "src",
e também um package chamado "modelo", também na pasta "src".

no package "controlador" vamos criar uma classe "MeuServlet".

A visão ficará no "Web Content / Web APP".

### Controller
No Java, um controlador é um Servlet.

Para que o Java reconheça o package "controlador" como um controlador de verdade, precisamos incluir no código "extends HttpServlet":
```Java
package controlador;

public class MeuServlet extends HttpServlet {

}
```
*Para importar os pacotes faltantes, basta pressionar Ctrl + Shift + O.

`@WebServlet("/chamadaservlet")` - Ctrl + Espaço
Isso criará o caminho URL até o Servlet.

Vamos então criar um método digitando "service" - Ctrl + Espaço (1° opção)
Isso criará um método 


O HTTP é o que transporta a informação para o servidor, e quando enviamos informações para um servidor, podemos fazê-lo de 2 maneiras:
- Método Get
- Método Post

Então no cadastro.html
<!-- action="chamadaservlet", envia todas as informações para "chamadaservlet" -->
<form action="chamadaservlet" method="post">

*post -> não mostra as informações no URL, é mais seguro.

E no controller, vamos definir o que deverá ser feito para cada método:
```Java
package controlador;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/chamadaservlet")
public class MeuServlet extends HttpServlet {

@Override
protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

// Comando para chamar o HTML
response.sendRedirect("http://localhost:8080/sistemausuarios/cadastro.html");



}


@Override
protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

String nome = request.getParameter("txtname");
String login = request.getParameter("txtlogin");
String senha = request.getParameter("txtpassword");

System.out.println("Nome: "+ nome);
System.out.println("Login:" + login);
System.out.println("Senha:" + senha);



}
}
```
O código acima está enviando as informações do formulário "cadastro.html" para o controller.

---

## Model
Vamos criar a classe "Usuario,java" em model.
Nela vamos ter o seguinte conteúdo:
`
private int código;
private String nome;
private String login;
private String senha;
`
e seus Getters & Setters (Ctrl + 3 -> GGAS);

E criar os construtores (Ctrl + 3 -> GCUF);

E então trocaremos:
```java
System.out.println("\n\nNome: "+ nome);
System.out.println("Login:" + login);
System.out.println("Senha:" + senha);
```
Por:
```java
Usuario usuario = new Usuario(nome,login,senha);

System.out.println("\nNome: "+ usuario.getNome());
System.out.println("Login:" + usuario.getLogin());
System.out.println("Senha:" + usuario.getSenha());
```

Utilizamos a versão de baixo, pois ela permite enviar as informações do objeto para o banco de dados.
