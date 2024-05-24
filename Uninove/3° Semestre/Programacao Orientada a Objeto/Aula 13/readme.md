# Aula 13

## Model
**Classe conexão**
É a que pede permissão para conversar com o banco.

**Classe Usuario**
Classe onde criamos o objeto "Usuario"

**Classe UsuarioDAO**
Pega a classe "Usuario" e leva as informações até o banco de dados.
 
---

## Controller
Precisamos fazer o controller, que tem o objetivo de receber as requisições que vem da web, e todas as requisições que fazemos no nosso programa, vão primeiro para o controlador.

No nosso formulário (em index.html), vamos definir uma ação para enviar as informações para "entrada":

```HTML
 <form action="entrada">
Nome: <input type="text" name="txtnome"><br><br>
Login: <input type="text" name="txtlogin"><br><br>
Senha: <input type="password" name="txtsenha"><br><br>
<input type="submit" value="Cadastrar Usuário">
</form>
```

O "name" é quem vai enviar as informações de cada input. 

Vamos então criar uma nova classe:
package: controlador
nome: EntradaServlet

"/entrada" chama "entrada Servlet":

```
@WebServlet("/entrada")
public class EntradaServlet extends HttpServlet { 
    // Informações da classe
}
```

**Atalho:** Escrever: service + control + espaço

```java
 @Override
protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

// Pega todas as informações vinda do Java:
// Requisições que estão vindo do front (form) no atributo "name":
String nome = request.getParameter("txtnome");
String login = request.getParameter("txtlogin");
String senha = request.getParameter("txtsenha");
}
```

---

## Controller
E depois conectamos com o package "modelo", enviando as informações do usuário do FRONT para o MODEL, que vai salvar as informações com o banco de dados:
Código completo de "EntradaServlet":

```java
package controller;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import modelo.Usuario;
import modelo.UsuarioDAO;

@WebServlet("/entrada")
public class EntradaServlet extends HttpServlet {

@Override
protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

// Pega todas as informações vinda do Java:
// Requisições que estão vindo do front (form) no atributo "name":
String nome = request.getParameter("txtnome");
String login = request.getParameter("txtlogin");
String senha = request.getParameter("txtsenha");


// Vamos pegar essas variáveis e colocar no model "Usuario":
// O problema é que eles estão em diferentes pacotes, então precisamos IMPORTAR

Usuario usuario = new Usuario(nome, login, senha);

// E também vamos importar o "UsuarioDAO",
// que vai mandar o usuário para o Banco de Dados:
UsuarioDAO usuarioDAO = new UsuarioDAO();
usuarioDAO.cadastra(usuario);

// Redireciona o URL para a tela de cadastrar usuário novamente, para cadastrar quantos usuários quiser:
response.sendRedirect("http://localhost:8080/sistemausuarios/cadastro.html");

// A página "/entrada" é uma página em branco que só serve para conectar com o Model.
// Essa página é o CONTROLLER
}

}
```

Para reconhecer os "name" do formulário, no código "conexao.java" precisamos adicionar a seguinte linha no try{ }:

```java
   Class.forName("com.mysql.cj.jdbc.Driver");
```

---

### Próxima Aula
Na aula que vem vamos pegar a tabela com todas as informações do banco de dados e mostrar na tela.