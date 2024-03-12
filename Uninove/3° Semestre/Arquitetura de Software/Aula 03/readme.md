# Aula 3
## O que veremos hoje
JSON mais teórico, ler Metadados para Troca de Dados (XML e JSON) do AAPA. Depois faremos alguns testes práticos com o JSON.

---

#### Objetivo da aula de hoje: Entender os formatos de texto (XML e  JSON)

API - Application Program Interface

Meu Sistema -> Sistema dos Correios <- Eu (usuário)

Utilizando a API, você consegue ligar seu sistema com o sistemas de correios.

---

#### Diferenças entre XML e JSON
Simplicidade e quantidade de bytes necessários.

Criaremos uma tela para salvar dados usando bootstrap, utilizando o "RA", "Nome" e "Curso" do usuário.


Utilizaremos o seguinte JQUERY
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.js" integrity="sha512-+k1pnlgt4F1H8L7t3z95o3/KO+o78INEcXTbnoJQ/F2VqDVhWoaiVml/OEHv9HsVgxUaVW+IbiZPUJQfF/YxZw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>



---

## Códigos da aula

### HTML / JSP

<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!doctype html>
<html lang="pt-br">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Exemplo JSON</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.js" integrity="sha512-+k1pnlgt4F1H8L7t3z95o3/KO+o78INEcXTbnoJQ/F2VqDVhWoaiVml/OEHv9HsVgxUaVW+IbiZPUJQfF/YxZw==" crossorigin="anonymous" referrerpolicy="no-referrer">
    </script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <script src="script.js" defer></script>
  </head>
  <body>
  <br><br>
    <div class="container text-center">
  <div class="row align-items-start">
    <div class="col-2">
     
    </div>
    <div class="col">
     
      <br><br>
      <h1>Login na UNINOVE</h1>
      <br><br>
<form class="row gy-2 gx-3 align-items-center" >
 <div class="col-auto">
   <label for="ra">RA</label>
   <input autofocus type="text" class="form-control" id="ra" placeholder="RA">
 </div>
 <div class="col-auto">
   <label for="nome">Nome</label>
   <div class="input-group">
     <input type="text" class="form-control" id="nome" placeholder="Nome">
   </div>
 </div>
 <div class="col-auto">
   <label for="curso">Curso</label>
   <select class="form-select" id="curso">
     <option selected>Curso</option>
     <option value="TADS">TADS</option>
     <option value="Ciência da Computação">Ciência da Computação</option>
     <option value="Artes">Artes</option>
   </select>
 </div>
</form>
<br><br>
 <button id="salvar_dados" type="button" class="btn btn-primary btn-lg">Salvar</button>
      <br><br><br>
    </div>
    <div class="col-2">
     
    </div>
  </div>
</div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
  </body>
</html>

### Javascript

function salvar(){
var ra = document.querySelector("#ra").value;
var nome = document.querySelector("#nome").value;
var curso = document.querySelector("#curso").value;

var json = {};
json.ra = ra;
    json.nome = nome;
json.curso = curso;

$.ajax({
url: "salvar.jsp",
data: json,
type: "get",
success: function (resp) {
alert(resp);
}
});

}

botaoSalvar = document.querySelector("#salvar_dados");
botaoSalvar.addEventListener("click", function() {
salvar();
});

### JSP

<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="utf-8"%>

<%
String ra = request.getParameter("ra");
String nome = request.getParameter("nome");
String curso = request.getParameter("curso");

out.write(nome + ", seus dados foram cadastrados com sucesso!\nRA= " + ra + "\nCurso = " + curso);

%>
