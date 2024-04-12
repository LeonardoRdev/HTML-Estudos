# Aula 7
Apache tomcat -> faz o site funcionar; 

Biblioteca Gson -> que vai gerar um código lá no servidor com formato json;

DB Browser for SQLite -> ferramenta visual para alterar o banco de dados;

Drive SQLite -> programa que precisa ser instalado para o eclipse poder falar com o banco de dados | Driver;

Servlet API -> Necessário para fazer o back-end funcionar, o backend vai ser uma classe que vai receber os dados, essa classe vai ser uma servlets.

A servlets é uma classe que vai pegar os dados lá do front end e colocar lá no backend, é pra isso que serve
quando você monta um projeto java web você vai ter varias classe. 

Model: bean factory, DAO.
Controller -> SERVLETS

Para cada dado que você quer salvar no banco de dados, você vai criar na Servlets

---

Fazer o programa funcionar corretamente, os arquivos completos estão no classroom.

**[cadastroCurso_incompleto.jsp]**

```
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
pageEncoding="ISO-8859-1"%>
<!doctype html>
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

<script>
function editar(codigo,nome,diretoria){
document.getElementById("codigo").value = codigo;
document.getElementById("nome").value = nome;
document.getElementById("diretoria").value = diretoria;
}


</script>
</head>
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
<label for="codigo" class="col-form-label">Código....................:</label>
</div>
<div class="col w-100">
<input type="text" id="codigo" class="form-control"
style="width: 100%" disabled>
</div>
</div>
<div class="row g-2 align-items-center mt-2">
<div class="col-auto">
<label for="nome" class="col-form-label">Nome......................:</label>
</div>
<div class="col w-100">
<input type="text" id="nome" class="form-control">
</div>
</div>
<div class="row g-2 align-items-center mt-2">
<div class="col-auto">
<label for="diretoria" class="col-form-label">Diretoria.................:</label>
</div>
<div class="col w-100">
<input type="text" id="diretoria" class="form-control">
</div>
</div>
<div class="row g-2 align-items-center mt-2">
<div class="col-auto">
<label for="data_autorizacao" class="col-form-label">Data Autorização:</label>
</div>
<div class="col w-100">
<input type="text" id="data_autorizacao" class="form-control">
</div>
</div>
<div class="row g-2 align-items-center mt-2">
<div class="col-auto">
<label for="nota_mec" class="col-form-label">Nota MEC..............:</label>
</div>
<div class="col w-100">
<input type="text" id="nota_mec" class="form-control">
</div>
</div>

<div class="row g-2 align-items-center mt-3">
<div class="col-auto">
<button type="button" class="btn btn-primary mb-3">Buscar</button>
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
<th scope="col" class="text-start">Código</th>
<th scope="col" class="text-start">Nome</th>
<th scope="col" class="text-start">Diretoria</th>
<th scope="col" class="text-start">Data Autorização</th>
<th scope="col" class="text-start">Nota MEC</th>
</tr>
</thead>
<tbody>
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