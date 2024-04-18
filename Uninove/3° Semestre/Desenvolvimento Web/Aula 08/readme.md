# Aula 8
Se for abrir o projeto em casa:

1 - Deletar pasta "Servers" [ x ] delete project content;
2 - Em baixo no 'console' (Servers) -> Deletar + marcar as duas caixinhas;
3 - Windows Preferences -> Runtime Environments -> APAGAR TOMCAT.
4 - Colocar apache Tomcat de novo.

---

### Servlet
O Servlet em java vai servir como Controller no padrão MVC, mas só é utilizado em Java
* O Controller normalmente manda os dados para o Model para aí sim salvar as informações no banco de dados, porém hoje não iremos criar a Model.


Vamos precisar dessas 3 bibliotecas para fazer o programa :
- Gson-2.2.2.jar
- servlet-api.jar
- sqlite-jdbc-3.7.2.jar

---

Vamos criar só o back-end do projeto:

Colar o seguinte código no HEADER do programa:
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.js" integrity="sha512-+k1pnlgt4F1H8L7t3z95o3/KO+o78INEcXTbnoJQ/F2VqDVhWoaiVml/OEHv9HsVgxUaVW+IbiZPUJQfF/YxZw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
```

botão direito no projeto -> new -> servlet

Os dados são recebidos na request e são devolvidos na response:

Lá no começo do programa:
import java.sql.*;

adicionar ajax
adicionar json
adicionar servlets


Quando rodar, se estiver dando problema MESMO ASSIM:
duplo clique no botão "tomcat" no "console" (servers) e mudar a porta para:
8006
8081

---

**cad_aluno.jsp**
```java
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Cadastro de Nomes</title>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.js" integrity="sha512-+k1pnlgt4F1H8L7t3z95o3/KO+o78INEcXTbnoJQ/F2VqDVhWoaiVml/OEHv9HsVgxUaVW+IbiZPUJQfF/YxZw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script>
function salvar() {

// Vamos preprar o Json via Ajax (VIEW)

// Objeto "json" com o atributo nome = valor do input "nome";
var json = {};
json.nome = document.getElementById("nome").value;

// Define ação como = "inserir"
json.acao = "inserir";
   

// Ajax (meio de enviar):
// É preciso informar 3 coisas:
// Pra onde vão os dados do json?
   // Quais são os dados?
   // Qual o método de envio?
$.ajax({
url: "AlunoServlet",
data: json,
type: "get",

// Quando tiver sucesso:
   success: function(resposta) {
    alert(resposta);
   }
});


// Agora precisamos criar o servlet (CONTROLLER)

}
</script>

</head>
<body>

<h1>Cadastro de Nomes</h1>
<label for=nome>nome:</label>
<input type="text" id="nome"/>

<input type="button" value="salvar" onClick="salvar()"/>

</body>
</html>
```

**AlunoServlet.java**
```java
package controller;

import java.io.IOException;
import java.sql.*;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class AlunoServlet
 */
@WebServlet("/AlunoServlet")
public class AlunoServlet extends HttpServlet {
private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public AlunoServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

/**
* @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
*/
protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
// TODO Auto-generated method stub

// variável nome = parâmetro "nome" do json (valor do input)
String nome = request.getParameter("nome");
String acao = request.getParameter("acao");
// a ação pode ser inserir, deletar, pode fazer várias coisas, então vamos especificar:

// if (ação == "inserir") escrito em java:
if (acao.equals("inserir")) {

// digitar: Class.forName("org.sqlite.JDBC");
// vai falar que tem erro, clicar em cima e clicar em "surround with try/catch"
try {
// Driver que vou utilizar para fazer a conexão com o banco
Class.forName("org.sqlite.JDBC");

// fazer o "surround with try/catch"
try {
String diretorio = System.getProperty("wtp.deploy").toString().split(".metadata")[0];
// Define aonde o banco será salvo:
String dataBase = diretorio + "\\uninove.db";

// faz a conexão com o banco de dados (pelo caminho previamente definido):
Connection conn = DriverManager.getConnection("jdbc:sqlite:" + dataBase);

// Cria o statement
Statement stm = conn.createStatement();

// wstm.executeUpdate("DROP TABLE IF EXISTS aluno");
stm.executeUpdate(
"CREATE TABLE IF NOT EXISTS 'aluno'('ra' INTEGER, 'nome' TEXT, 'curso' TEXT, 'senha' TEXT, PRIMARY KEY('ra' AUTOINCREMENT))");





// Variável que vai pro banco, preparada para dar o insert:
String sql = "insert into aluno(nome) values(?)";

// Prepare o comando para ser executado:
PreparedStatement stm2 = conn.prepareStatement(sql);

// Define o valor nome dentro do banco:
stm2.setString(1, nome);

// Comando para salvar no banco de dados
stm2.executeUpdate();


// Fecha a conexão com o banco
conn.close();


// Agora precisamos falar pro front-end que a conexão foi feita com sucesso:
response.getWriter().append("Dados Salvos com sucesso!");

} catch (SQLException e) {
// TODO Auto-generated catch block
e.printStackTrace();
response.getWriter().append("Não foi possível salvar os dados (catch 1)");
}
} catch (ClassNotFoundException e) {
// TODO Auto-generated catch block
e.printStackTrace();
response.getWriter().append("Não foi possível savor os dados (catch 2)");
}

}

}

/**
* @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
*/
protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
// TODO Auto-generated method stub
doGet(request, response);
}

}
```