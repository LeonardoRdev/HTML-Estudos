<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Cadastro de suários</title>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.js" integrity="sha512-+k1pnlgt4F1H8L7t3z95o3/KO+o78INEcXTbnoJQ/F2VqDVhWoaiVml/OEHv9HsVgxUaVW+IbiZPUJQfF/YxZw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
</head>
<body>

	<h1>Cadastro de Usuários</h1>

		<label for="nome">Nome:</label>
		<input id="nome" name="nome">
		<button id="enviar">Enviar</button>


<script>
	const botaoEnviar = document.querySelector("#enviar");
	botaoEnviar.addEventListener("click", () => {
		
		// Vamos preparar o Json para ser enviado via Ajax (View)
		var json = {};
		json.nome = document.querySelector("#nome").value;
		json.acao = "inserir";
		
		// Ajax (meio de enviar):
		// É preciso informar 3 coisas:
			// Pra onde vão os dados do json?
		   // Quais são os dados?
		   // Qual o método de envio?
		$.ajax({
		url: "PessoaServlet",
		data: json,
		type: "get",
		
		// Se houver sucesso:
		success: function(resposta) {
			alert(resposta);
			}
		})
	});
	
</script>

</body>
</html>