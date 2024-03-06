# Aula 2

## Java | Eclipse

Window -> preferences -> workspace -> marcar [ x ] Prompt for workspace on startup

Para rodar no chrome: window -> web browser -> select Chrome

---

Para escrever em JAVA dentro do HTML, deve se utilizar a tag <% %> e escrever o código dentro da tag.

### Para enviar dados

<a target="blank" href="salvar.jsp?ra=923103468&

nome=ToddyComMococa">    Clique Aqui para Enviar!

</a>

**ou por formulários:**

<form action="dadosrecebidos.jsp" method="post">

// "dadosrecebidos" é o nome do outro arquivo.jsp    <label for="nome">Nome:</label>    <input id="nome" type="text" name="nome"></input>    <br>    <button type="submit">Enviar</button></form>

Method post = Não aparece as informações enviadas

Method get   = Aparecem todas as informações enviadas

---

Para o seu formulário ir para o google, você precisa definir o nome do input de "q",

por exemplo: **<input id="q" type="text" name="q"></input>**

---

Na próxima aula, utilizaremos o AJAX (biblioteca)

https://cdnjs.com/libraries/jquery

escolher o SEGUNDO e copiar o "Script Tag"

E colar o script no HEAD do documento "index.jsp"

No dia 04/03/2024, o texto copiado é o seguinte:<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.js" integrity="sha512-+k1pnlgt4F1H8L7t3z95o3/KO+o78INEcXTbnoJQ/F2VqDVhWoaiVml/OEHv9HsVgxUaVW+IbiZPUJQfF/YxZw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

### E PARA FAZER EM CASA:

Descobrir **como enviar os dados via ajax**

---

## Código da aula

**[index.jsp]**

<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Página Inicial</title>
</head>
<body>
<a target="blank" href="salvar.jsp?ra=923103468&nome=ToddyComMococa">
<button>Clique agora para ganhar muito DInheiro R$999,99!!!</button>
</a>
</body>
</html>

**[salvar.jsp]**

<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Salvar | Recebedor</title>
</head>
<body>
<h1>Os Seguintes Dados Foram Salvos</h1>
RA...: <% out.print(request.getParameter("ra")); %> <br>
Nome..:<% out.print(request.getParameter("nome")); %>
</body>
</html>

---

## Segundo Código

**[index.jsp]**

<%@ page language="java" contentType="text/html; charset=ISO-8859-1"

pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Site seguro e confiável 2024</title>
</head>
<body>
<h1>Por favor, preencha as informações abaixo:</h1>
<!-- <a target="blank" href="dadosrecebidos.jsp?nome=Vitor+Dorminhoco&senha=Chicago123&profissao=Dorminhoco"><button>CLICA SEM MEDO!</button></a> -->
<form action="dadosrecebidos.jsp" method="post">
<label for="nome">Nome:</label>
<input id="nome" type="text" name="nome"></input><br>
<label for="senha">Senha:</label>
<input id="senha" name="senha" type="password"></input><br>
<label for="profissao">Profissão:</label>
<input type="list" name="profissao" id="profissao" ></input><br>
<button type="submit">Enviar</button>
</form>
</body>
</html>

**[dadosrecebidos.jsp]**

<%@ page language="java" contentType="text/html; charset=ISO-8859-1"

pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>SE FERROU <% out.print(request.getParameter("nome")); %></title>
</head>
<body>
<h1>Informações ROUBADAS com sucesso!!</h1>
<p>Nome......: <% out.print(request.getParameter("nome")); %> </p>
<p>Senha.....: <% out.print(request.getParameter("senha")); %></p>
<p>Profissão.: <% out.print(request.getParameter("profissao")); %> </p>
</body>
</html>

---

## Exercício: Pesquisar no google pelo site

**[index.jsp]**

<%@ page language="java" contentType="text/html; charset=ISO-8859-1"

pageEncoding="ISO-8859-1"%>

<!DOCTYPE html>

<html>

<head>

<meta charset="ISO-8859-1">

<title>Site seguro e confiável 2024</title>

</head>

<body>

<h1>Pesquise e vá direto para o Google!</h1>

<form action="

https://www.google.com.br/search

?" method="get">

<label for="q">Pesquisar:</label>

<input id="q" type="text" name="q"></input>

<br>

<button type="submit">Enviar</button>

</form>

</body>

</html>