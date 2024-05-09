# Aula 11
### O que faremos

Hoje iremos terminar o CRUD do projeto.

Projeto CadastroAluno e o DB Browser for SQLite foram baixados;

Vamos remover e adicionar o TOMCAT no projeto, lembrando que esse processo deve ser feito em todo novo projeto adicionado.

* Para excluir o Tomcat nos servers e a pasta server, window > preferences > Runtime Environment e deletar tomcat antes de adicionar novamente

**No index.jsp:**
Função em Javascript para salvar no BD
```jsp
function salvar() {
var json = {};
json.ra = document.getElementById("ra").value;
json.nome = document.getElementById("nome").value;
json.curso = document.getElementById("curso").value;
json.senha = document.getElementById("senha").value;

if (json.ra == "") {
json.acao = "inserir";
}
else {
json.acao = "alterar";
}

$.ajax({
url: "AlunoServlet",
data: json,
type: "post",
success: function (resp) {
alert(resp);
if (resp=="") { // Se der ruim (vazio)
alert("Deu Ruim");
}
else { // Se der bom
alert("Deu Bom!");
}
}
})
}
```

**No Servlet:**
Vamos fazer a ação "inserir", "alterar" e "excluir"
```java
try {

String ra_texto = request.getParameter("ra");
int ra = 0;
if (!ra_texto.equals("")) {
ra = Integer.valueOf(ra_texto);
}

String acao = request.getParameter("acao");
String nome = request.getParameter("nome");
String curso = request.getParameter("curso");
String senha = request.getParameter("senha");

Class.forName("org.sqlite.JDBC");
String diretorio = System.getProperty("wtp.deploy").toString().split(".metadata")[0];
String dataBase = diretorio + "\\uninove.db";
Connection conn = DriverManager.getConnection("jdbc:sqlite:"+dataBase);


if(acao.equals("buscar")) {
// Buscar
String sql = "select * from aluno";
PreparedStatement pstm = conn.prepareStatement(sql);
ResultSet rs = pstm.executeQuery();

List<AlunoBean> listAluno = new ArrayList<AlunoBean>();
while(rs.next()) {
AlunoBean al = new AlunoBean();
al.setRa(rs.getInt("ra"));
al.setNome(rs.getString("nome"));
al.setCurso(rs.getString("curso"));
listAluno.add(al);
}

Gson j = new Gson();
String strJson = j.toJson(listAluno);

response.setCharacterEncoding("UTF8");

response.getWriter().append(strJson);

/*
 [
   {'ra':'123';'nome':'maria';'curso':'tads'},
   {'ra':'456';'nome':'carla';'curso':'tads'}
 ]
*/
}

else if (acao.equals("inserir")) {
// Inserir
String sql = "insert into aluno(nome, curso, senha) values(?,?,?)";
PreparedStatement pstm = conn.prepareStatement(sql);

pstm.setString(1, nome);
pstm.setString(2, curso);
pstm.setString(3, senha);

if (pstm.executeUpdate() == 1) {
// Se 1 -> deu certo e os dados foram salvos
String msg = "Dados Alterados com Sucesso!";
response.getWriter().append(msg);
}
else {
// Se 0 -> deu errada e os dados não foram salvos.
String msg = "Erro ao Alterar os Dados...";
response.getWriter().append(msg);
}


}
else if (acao.equals("alterar")) {
// Alterar:
String sql = "update into aluno set nome=?, curso=?, senha=? where ra=?";
PreparedStatement pstm = conn.prepareStatement(sql);

pstm.setString(1, nome);
pstm.setString(2, curso);
pstm.setString(3, senha);

if (pstm.executeUpdate() == 1) {
// Se 1 -> deu certo e os dados foram salvos
String msg = "Dados Alterados com Sucesso!";
response.getWriter().append(msg);
}
else {
// Se 0 -> deu errada e os dados não foram salvos.
String msg = "Erro ao ALterar Dados...";
}
}
else if (acao.equals("excluir")) {
// Excluir:
}

conn.close();

}catch(Exception e) {
e.printStackTrace();
}
```
---

## Códigos
**Index.jsp**
```jsp
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Bootstrap demo</title>
<link
href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
rel="stylesheet"
integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
crossorigin="anonymous">

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.js" integrity="sha512-+k1pnlgt4F1H8L7t3z95o3/KO+o78INEcXTbnoJQ/F2VqDVhWoaiVml/OEHv9HsVgxUaVW+IbiZPUJQfF/YxZw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

<script>
function salvar() {
var json = {};
json.ra = document.getElementById("ra").value;
json.nome = document.getElementById("nome").value;
json.curso = document.getElementById("curso").value;
json.senha = document.getElementById("senha").value;

if (json.ra == "") {
json.acao = "inserir";
}
else {
json.acao = "alterar";
}

$.ajax({
url: "AlunoServlet",
data: json,
type: "post",
success: function (resp) {
alert(resp);
if (resp=="") { // Se der ruim (vazio)
alert("Deu Ruim");
}
else { // Se der bom
alert("Deu Bom!");
}
}
})
}

function buscar() {
var json = {};
json.ra = document.getElementById("ra").value;
json.nome = document.getElementById("nome").value;
json.curso = document.getElementById("curso").value;
json.senha = document.getElementById("senha").value;
json.acao = "buscar";
$.ajax({
url: "AlunoServlet",
data: json,
type: "get",
success: function (resp) {

if (resp==""){
document.getElementById("corpo_tabela").innerHTML = "";

}else{
var jsonAlunos = JSON.parse(resp);
montar_tabela(jsonAlunos);
}
}
});
}


function editar(ra,nome,curso){
document.getElementById("ra").value = ra;
document.getElementById("nome").value = nome;
document.getElementById("curso").value = curso;
}

function montar_tabela(vetorJson){

var linhas = "";

for (var i=0; i<vetorJson.length; i++){

var ra = vetorJson[i].ra;
var nome = vetorJson[i].nome;
var curso = vetorJson[i].curso;
var linha = `<tr>
<td><img src='imagens/edit.png'/></td>
<td><img src='imagens/delete.png'/></td>
<td>` + ra + `</td>
<td>` + nome + `</td>
<td>` + curso + `</td>
</tr>`;
linhas += linha; //concatenação
}
document.getElementById("corpo_tabela").innerHTML = linhas;
}


</script>
</head>
<body>
<div class="container text-center">
<div class="row mt-3 p-0">
 
<div class="col-6 offset-3 p-0">
<img src="imagens/uninove.png" style="width: 60%; height: 80px">
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
<button type="button" class="btn btn-primary mb-3" onClick="salvar()">Salvar</button>
<button type="reset" class="btn btn-primary mb-3" onClick="alert('Dados da System 32 Limpados com Sucesso!')">Limpar</button>
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
**AlunoServlet.java**
```java
package controller;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
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
* @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
*/
protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
// TODO Auto-generated method stub

try {

String ra_texto = request.getParameter("ra");
int ra = 0;
if (!ra_texto.equals("")) {
ra = Integer.valueOf(ra_texto);
}

String acao = request.getParameter("acao");
String nome = request.getParameter("nome");
String curso = request.getParameter("curso");
String senha = request.getParameter("senha");

Class.forName("org.sqlite.JDBC");
String diretorio = System.getProperty("wtp.deploy").toString().split(".metadata")[0];
String dataBase = diretorio + "\\uninove.db";
Connection conn = DriverManager.getConnection("jdbc:sqlite:"+dataBase);


if(acao.equals("buscar")) {
// Buscar
String sql = "select * from aluno";
PreparedStatement pstm = conn.prepareStatement(sql);
ResultSet rs = pstm.executeQuery();

List<AlunoBean> listAluno = new ArrayList<AlunoBean>();
while(rs.next()) {
AlunoBean al = new AlunoBean();
al.setRa(rs.getInt("ra"));
al.setNome(rs.getString("nome"));
al.setCurso(rs.getString("curso"));
listAluno.add(al);
}

Gson j = new Gson();
String strJson = j.toJson(listAluno);

response.setCharacterEncoding("UTF8");

response.getWriter().append(strJson);

/*
 [
   {'ra':'123';'nome':'maria';'curso':'tads'},
   {'ra':'456';'nome':'carla';'curso':'tads'}
 ]
*/
}

else if (acao.equals("inserir")) {
// Inserir
String sql = "insert into aluno(nome, curso, senha) values(?,?,?)";
PreparedStatement pstm = conn.prepareStatement(sql);

pstm.setString(1, nome);
pstm.setString(2, curso);
pstm.setString(3, senha);

if (pstm.executeUpdate() == 1) {
// Se 1 -> deu certo e os dados foram salvos
String msg = "Dados Alterados com Sucesso!";
response.getWriter().append(msg);
}
else {
// Se 0 -> deu errado e os dados não foram salvos.
String msg = "Erro ao Alterar os Dados...";
response.getWriter().append(msg);
}


}
else if (acao.equals("alterar")) {
// Alterar:
String sql = "update into aluno set nome=?, curso=?, senha=? where ra=?";
PreparedStatement pstm = conn.prepareStatement(sql);

pstm.setString(1, nome);
pstm.setString(2, curso);
pstm.setString(3, senha);

if (pstm.executeUpdate() == 1) {
// Se 1 -> deu certo e os dados foram salvos
String msg = "Dados Alterados com Sucesso!";
response.getWriter().append(msg);
}
else {
// Se 0 -> deu errada e os dados não foram salvos.
String msg = "Erro ao ALterar Dados...";
}
}
else if (acao.equals("excluir")) {
// Excluir:
}

conn.close();

}catch(Exception e) {
e.printStackTrace();
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
**AlunoBean.java**
```java
package model;

public class AlunoBean {

private int ra;
private String nome;
private String curso;
private String senha;


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
public String getSenha() {
return senha;
}
public void setSenha(String senha) {
this.senha = senha;
}

}
```