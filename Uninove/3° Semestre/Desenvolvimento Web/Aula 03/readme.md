# Aula 4

## AJAX e JSON e API

Criar uma tela de cadastro onde o usuário preenche as informações e o site vai preencher os dados do cep automaticamente,
para fazer isso iremos aprender AJAX e JSON aplicados em um cenário REAL

Iremos consumir uma API (Application Programming Interface), que permite comunicar com o sistema via código (programação)

### Formas de usar:

2 formas de usar:
- como usuário
- como programador

Exemplo de consulta de CEP:
viacep.com.br/ws/01001000/json/

Vamos criar uma tela de cadastro de endereço, e quando o usuário preencher e clicar em buscar iremos realizar uma ajax onde os dados serão preenchidos AUTOMATICAMENTE.

---

## O que faremos

Iremos criar uma interface e bootstrap com os seguintes campos:
- CEP (input de texto)
- Rua (input de texto)
- Número (input de texto)
- Bairro (input de texto)
- Cidade (input de texto)

Colocar um botão para buscar o CEP

Para realizar uma requisição AJAX, iremos utilizar esse site como referência:
https://blog.matheuscastiglioni.com.br/realizando-requisicoes-ajax-com-fetch-api/

---

A função fetch devolve uma Promise e por padrão faz uma requisição do tipo get (pode ser mudado para qualquer verbo), assim precisamos tratá-la para sucesso e possíveis erros, para tratar o sucesso (success) podemos utilizar o .then e passar a resposta (response) como parâmetro para ele.

.then
Será utilizado quando formos tratar os sucessos do fetch();

.catch
Será utilizado caso o fetch() encontre algum erro.









---

## Códigos da Aula

### JSP / HTML

<%@ page language="java" contentType="text/html; charset=ISO-8859-1" %>
<!doctype html>
<html lang="pt-br">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Cadastro de Clientes</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
<style>
body {
background-color: #bebebe;
}

</style>  
  </head>
  <body>

<div class="container text-center">
 <div class="row">
   <div class="col-4">
   </div>
   <div class="col">
     <br><br>
     <h1>Cadastro de Usuário</h1>
     <br>
<form class="form" onsubmit="buscarCep(event, this)">
 <div class="mb-3">
   <label for="exampleInputEmail1" class="form-label">CEP</label>
   <input type="text" class="form-control" id="cep" autofocus autocomplete="off" aria-describedby="emailHelp" placeholder="Digite seu CEP">
 </div>
 
 <button type="submit" class="btn btn-primary">Checar</button>
 <br><br>
 <div class="mb-3">
   <label for="exampleInputEmail1" class="form-label">RUA</label>
   <input type="text" class="form-control" id="rua" aria-describedby="emailHelp" readonly>
 </div>
 <div class="mb-3">
   <label for="exampleInputEmail1" class="form-label">BAIRRO</label>
   <input type="text" class="form-control" id="bairro" aria-describedby="emailHelp" readonly>
 </div>
 <div class="mb-3">
   <label for="exampleInputEmail1" class="form-label">CIDADE</label>
   <input type="text" class="form-control" id="cidade" aria-describedby="emailHelp" readonly>
 </div>
 <div class="mb-3">
   <label for="exampleInputEmail1" class="form-label">NÚMERO</label>
   <input type="text" class="form-control" id="numero" aria-describedby="emailHelp" placeholder="Digite seu número">
 </div>
</form>
   </div>
   <div class="col-4">
     
   </div>
 </div>
</div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
  <script src="script.js"></script>
  </body>
</html>

### Javascript

rua = document.querySelector("#rua");
bairro = document.querySelector("#bairro");
cidade = document.querySelector("#cidade");

function buscarCep(event, form) {
event.preventDefault();

const inputCep = document.querySelector("#cep");
if (inputCep.value) {
const cep = inputCep.value;

if (cep.length === 8) {
const url = `https://viacep.com.br/ws/${cep}/json/`;
fetch(url)
.then(resposta => resposta.json())
.then(data => mostrarResposta(data))
.catch(erro => console.error(erro));
}

}

}

function mostrarResposta(cep) {
const mensagem = `
CEP: ${cep.cep}
RUA: ${cep.logradouro}
BAIRRO: ${cep.bairro}
CIDADE: ${cep.localidade}`;

// alert(mensagem);

rua.value = cep.logradouro;
bairro.value = cep.bairro;
cidade.value = cep.localidade;

}