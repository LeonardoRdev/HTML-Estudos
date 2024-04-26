# Aula 9

### Banco de Dados

Conceitos de como funciona a web:

A Máquina faz a request (requisição) para o Servidor
O Servidor retorna uma response (resposta)

A máquina é o Cliente*

O termo REQUEST e RESPONSE é técnico, não são palavras variadas do inglês, e sim termos técnicos.

Programas que recebem REQUEST:
- IIS
- WEBLOGIC
- WEBSPHERE
- JBOSS / WILDFLY

Todos têm a mesma finalidade, a única diferença é que são de empresas diferentes. No nosso caso, utilizaremos o seguinte programa para receber as REQUEST:
- TOMCAT
https://apache.org/
https://tomcat.apache.org/

### TOMCAT

Ele é um programa no servidor que recebe a REQUEST do usuário e processa as informações e devolve a RESPONSE.

O nosso projeto JAVA vai ficar dentro do TOMCAT.

---

Window -> Preferences -> Runtime Environments -> Remover todos os TOMCAT -> apply and close

Na parte de baixo -> Servers -> Remover TOMCAT

Open Perspective ->
Perspective = Conjunto de janelas que ele abre por padrão;
Vamos trabalhar com Java EE (fica na parte superior direita também);

Agora vamos Iniciar o projeto:
File -> News -> Dynamic Web Project
Nome -> "sistemausuarios"
E vamos colocar o TOMCAT 9

Agora com o projeto criado:
botão direito no projeto -> Project Facets -> Java versão 14

---

A pasta Web Content é aonde vão ficar as informações para o usuário (Front ?)
Vamos criar um documento HTML chamado "cadastro.html";

O TOMCAT está localizado na localhost:8080
O nome do projeto é sistemausuarios
E o nome do arquivo é cadastro.html

Se juntarmos tudo junto, nós formamos um URL:
http://localhost:8080/sistemausuarios/cadastro.html

Esse URL é o caminho pro nosso projeto.

### Portas

Todo computador precisa de portas para enviar e receber informações, no total existem um pouco mais de 65000 Portas;

Portas Baixas
As portas Baixas são portas padrões para certos comportamentos, como envio de emails, pesquisas e etc;

Portas Altas
Já as portas altas são livres para você escolher qual quer usar, mas o que significa isso:
Toda vez que uma informação chegar ela vai vir por uma porta, e essa porta já vai falar pro Sistema Operacional que o conteúdo que chegar é do aplicativo que está utilizando ela.

A porta padrão é a 80 (HTTP), e se você colocar a porta do seu TOMCAT de 80, você não precisa especificar ela no URL:
localhost/sistemausuarios/cadastro.html

---

### Código
cadastro.html
```HTML
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8 ">
<title>Cadastro com Banco</title>
</head>
<style>
h1 {
text-align: center;
}

form {
margin: 0 auto;
display: flex;
flex-direction: column;
width: 40vw;
gap: 0.4em;
align-items: center;
}

#botao-cadastrar {
margin-top: 1em;
width: 10em;
}

</style>
<body>

<h1>Cadastro de Usuário</h1>

<form>
<label for="nome">Nome:</label>
<input type="text" name="txtname" id="input-nome">
<label for="input-login">Login:</label>
<input type="text" name="txtlogin" id="input-login">
<label for="input-senha">Senha:</label>
<input type="password" name="txtpassword" id="input-senha">

<input id="botao-cadastrar" type="submit" value="Cadastrar Usuário">


</form>

</body>
</html>
```
