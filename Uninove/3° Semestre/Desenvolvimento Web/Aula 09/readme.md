# Aula 9
Hoje vamos fazer o buscar, vamos escrever o buscar do projeto "_CadastroAluno"

Quando clicar em buscar, ele vai pegar os dados salvos no banco de dados e nos mostrar.

Vetor = conjunto
Vetor de Json = conjunto de Json, no nosso caso, conjunto de alunos.

Basicamente estamos pegando o mesmo código e adicionando algumas funções:

```HTML
<script>

function buscar() {
var json = {}
json.acao = "buscar";
$.ajax({
// Para quem?
url: "AlunoServlet",
// Quais dados
data: json,
// Qual o tipo
type: "get",

// Caso sucesso
success: (resposta) => {
var jsonAlunos = JSON.parse(resposta);
montarTabela(jsonAlunos);
}
});
}

function editar(ra,nome,curso){
document.getElementById("ra").value = ra;
document.getElementById("nome").value = nome;
document.getElementById("curso").value = curso;
}

function montarTabela(vetorJson) {

var linhas = "";

for(let i=0; i<vetorJson.length; i++) {

// Aqui vai chegar um pacote
var ra = vetorJson[i].ra;
var nome = vetorJson[i].nome;
var curso = vetorJson[i].curso;

var linha = `<tr>
<td><img src="imagens/edit.png" alt="Ícone Editar"></>
<td><img src="imagens/delete.png" alt="Ícone Excluir"></td>
<td>`+ra+`</td>
<td>`+nome+`</td>
<td>`+curso+`</td>
</tr>`;

linhas += linha;
}

var corpoTabela = document.querySelector("#corpo_tabela");
corpoTabela.innerHTML = linhas;

}
</script>
```

E também vamos criar um sevlet
package: controller
Class name: AlunoServlet


E também uma classe "Beans"

toda classe que for beans é uma classe que seta valores em java.




### Códigos
index.jsp
```
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
pageEncoding="ISO-8859-1"%>
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Aula 9</title>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.js" integrity="sha512-+k1pnlgt4F1H8L7t3z95o3/KO+o78INEcXTbnoJQ/F2VqDVhWoaiVml/OEHv9HsVgxUaVW+IbiZPUJQfF/YxZw==" crossorigin="anonymous" referrerpolicy="no-referrer" defer></script>
<link
href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
rel="stylesheet"
integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
crossorigin="anonymous">

<script>

function buscar() {
var json = {}
json.acao = "buscar";
$.ajax({
// Para quem?
url: "AlunoServlet",
// Quais dados
data: json,
// Qual o tipo
type: "get",

// Caso sucesso
success: function(resposta) {
var jsonAlunos = JSON.parse(resposta);
montarTabela(jsonAlunos);
}
});
}

function editar(ra,nome,curso){
document.getElementById("ra").value = ra;
document.getElementById("nome").value = nome;
document.getElementById("curso").value = curso;
}

function montarTabela(vetorJson) {

var linhas = "";

for(let i=0; i<vetorJson.length; i++) {

// Aqui vai chegar um pacote
var ra = vetorJson[i].ra;
var nome = vetorJson[i].nome;
var curso = vetorJson[i].curso;

var linha = `<tr>
<td><img src="imagens/edit.png" alt="Ícone Editar"></>
<td><img src="imagens/delete.png" alt="Ícone Excluir"></td>
<td>`+ra+`</td>
<td>`+nome+`</td>
<td>`+curso+`</td>
</tr>`;

linhas += linha;
}

var corpoTabela = document.querySelector("#corpo_tabela");
corpoTabela.innerHTML = linhas;

}
</script>
<body>
<div class="container text-center">
<div class="row mt-3 p-0">

<div class="col-6 offset-3 p-0">
<img src="imagens/uninove.png" style="width: 60%; height: 110px">
</div>

</div>
<div class="row mt-1">
<div class="col"></div>
<div class="col-8">

<div class="row mt-3 p-0">
<div class="col-8 offset-2">
<form>
<div class="row g-2 align-items-center">
<div class="col-auto">
<label for="ra" class="col-form-label">RA.......:</label>
</div>
<div class="col w-100">
<input type="text" id="ra" class="form-control"
style="width: 100%" disabled>
</div>
</div>
<div class="row g-2 align-items-center">
<div class="col-auto">
<label for="nome" class="col-form-label">Nome:</label>
</div>
<div class="col w-100">
<input type="text" id="nome" class="form-control">
</div>
</div>
<div class="row g-2 align-items-center">
<div class="col-auto">
<label for="curso" class="col-form-label">Curso.:</label>
</div>
<div class="col w-100">
<input type="text" id="curso" class="form-control">
</div>
</div>
<div class="row g-2 align-items-center">
<div class="col-auto">
<label for="senha" class="col-form-label">Senha:</label>
</div>
<div class="col w-100">
<input type="password" id="senha" class="form-control">
</div>
</div>

<div class="row g-2 align-items-center mt-3">
<div class="col-auto">
<button type="button" class="btn btn-primary mb-3" onClick="buscar()">Buscar</button>
<button type="button" class="btn btn-primary mb-3">Salvar</button>
<button type="reset" class="btn btn-primary mb-3">Limpar</button>
</div>
</div>
</form>
</div>
</div>


<div class="row align-items-center mt-2">
<div class="col w-100">

<table class="table caption-top">
<thead>
<tr>
<th scope="col">Editar</th>
<th scope="col">Excluir</th>
<th scope="col" class="text-start">RA</th>
<th scope="col" class="text-start">Nome</th>
<th scope="col" class="text-start">Curso</th>
</tr>
</thead>
<tbody id="corpo_tabela">
<tr>
<th><img src="imagens/edit.png" onClick="editar('1','Leandro','tads')"/></th>
<th><img src="imagens/delete.png" /></th>
<td class="text-start">1</td>
<td class="text-start">Leandro</td>
<td class="text-start">TADS</td>
</tr>
<tr>
<th><img src="imagens/edit.png" onClick="editar('2','João','Engenharia')"/></th>
<th><img src="imagens/delete.png" /></th>
<td class="text-start">2</td>
<td class="text-start">João</td>
<td class="text-start">Engenharia</td>
</tr>
<tr>
<th><img src="imagens/edit.png" onClick="editar('3','Pedro','Matemática')"/></th>
<th><img src="imagens/delete.png" /></th>
<td class="text-start">3</td>
<td class="text-start">Pedro</td>
<td class="text-start">Matemática</td>
</tr>
</tbody>
</table>
</div>
</div>

</div>
<div class="col"></div>
</div>
</div>
<script
src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
crossorigin="anonymous"></script>
</body>
</html>
```

---

AlunoServlet.java
```
package controller;
 
import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;
 
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
 
import com.google.gson.Gson;
 
import model.AlunoBean;
 
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
* @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
*      response)
*/
protected void doGet(HttpServletRequest request, HttpServletResponse response)
throws ServletException, IOException {
// TODO Auto-generated method stub
 
String acao = request.getParameter("acao");
 
try {
Class.forName("org.sqlite.JDBC");

String diretorio = System.getProperty("wtp.deploy").toString().split(".metadata")[0];
String dataBase = diretorio + "\\uninove.db";

Connection conn;

conn = DriverManager.getConnection("jdbc:sqlite:" + dataBase);

Statement stm = conn.createStatement();
// wstm.executeUpdate("DROP TABLE IF EXISTS aluno");
stm.executeUpdate(
"CREATE TABLE IF NOT EXISTS 'aluno'('ra' INTEGER, 'nome' TEXT, 'curso' TEXT, 'senha' TEXT, PRIMARY KEY('ra' AUTOINCREMENT))");

if (acao.equals("buscar")) {

PreparedStatement pstm = conn.prepareStatement("select * from aluno");
ResultSet rs = pstm.executeQuery();
List<AlunoBean> listAluno = new ArrayList<AlunoBean>();
while (rs.next()) {
AlunoBean aluno = new AlunoBean();
aluno.setRa(rs.getInt("ra"));
aluno.setNome(rs.getString("nome"));
aluno.setCurso(rs.getString("curso"));
listAluno.add(aluno);
}
pstm.close();

Gson gson = new Gson();
response.getWriter().append(gson.toJson(listAluno));

}

} catch (ClassNotFoundException | SQLException e) {
// TODO Auto-generated catch block
e.printStackTrace();
}

}
 
/**
* @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
*      response)
*/
protected void doPost(HttpServletRequest request, HttpServletResponse response)
throws ServletException, IOException {
// TODO Auto-generated method stub
doGet(request, response);
}
 
}
```

---

AlunoBean.java
```
package model;

public class AlunoBean {

private int ra;
private String nome;
private String curso;

public int getRa() {
return ra;
}
public void setRa(int ra) {
this.ra = ra;
}
public String getNome() {
return nome;
}
public void setNome(String nome) {
this.nome = nome;
}
public String getCurso() {
return curso;
}
public void setCurso(String curso) {
this.curso = curso;
}




}
```