# Aula 15

## Várias linguagens
Nunca misture várias linguagens no mesmo código, isso deixa o código muito feio e difícil de ler, a comunidade de programadores não gosta nem um pouco dessa ideia.

Vamos baixar o JSTL:
Pesquisar no Google:
JSTL download:
https://mvnrepository.com/artifact/javax.servlet/jstl/1.2
Baixar o arquivo **jar**

JSTL -> Jakarta Server Tag Library
È uma biblioteca de tag's para deixar o código com a aparência do HTML, mas na verdade é Java | JSP.
```JAVA
<%@ uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
```

Fazendo isso, o nosso código vai sair disso:
```JAVA
 <table border="1" style="width: 90%">
<thead>
<tr style="background-color: black;color: white;">
<th>Código</th>
<th>Nome</th>
<th>Login</th>
<th>Senha</th>
<th colspan="2">Ação</th>
</tr>
</thead>
<tbody>
<%for(Usuario usuario:usuarios){ %>
<tr>
<td><%=usuario.getCodigo() %></td>
<td><%=usuario.getNome() %></td>
<td><%=usuario.getLogin() %></td>
<td><%=usuario.getSenha() %></td>
<td><a href="#">Alterar</a></td>
<td><a href="#">Excluir</a></td>
</tr>
<%} %>
</tbody>
</table>
```

Para isso:
```HTML
 <table border="1" style="width: 90%">
<thead>
<tr style="background-color: black;color: white;">
<th>Código</th>
<th>Nome</th>
<th>Login</th>
<th>Senha</th>
<th colspan="2">Ação</th>
</tr>
</thead>
<tbody>
<c:forEach var="usuario" items="${usuarios}" >
<tr>
<td>${usuario.codigo}</td>
<td>${usuario.nome}</td>
<td>${usuario.login}</td>
<td>${usuario.senha}</td>
<td><a href="#">Alterar</a></td>
<td><a href="#">Excluir</a></td>
</tr>
</c:forEach>
</tbody>
</table>
```
---

## Requisição e Sessão
A requisição funciona assim:
1-Envia a requisição
2-Devolve uma respostas.
Após a requisição devolver uma resposta, a informação enviada para a requisição é **PERDIDA**.

Já a sessão é um objeto que guarda as informações em um ID (variável) que sempre será definido pelo navegador quando for a primeira vez um navegador estiver recebendo informações de X usuário. Se o mesmo usuário for conversar posteriormente utilizando o MESMO NAVEGADOR, a sessão reconhecerá o navegador mas ainda manterá a sessão com o mesmo ID.

A sessão é acessada pela chave (ID) que a primeira requisição vai gerar e enquanto o mesmo usuário estiver acessando a página pelo mesmo navegador, ele continuará a utilizar a mesma sessão. Ainda precisamos definir quando terminar a sessão, mas isso fica para lição de casa.

Exemplo:
O mestre fez o nosso carrinho funcionar utilizando a sessão para que o carrinho continuasse ali a todo momento.

---

## Códigos:

main.html
```HTML
<h1>Login</h1>


<form action="entrada" method="post">
Login: <input type="text" name="txtlogin" autocomplete="off" required><br><br>
Senha: <input type="password" name="txtsenha" autocomplete="off" required><br><br>
<input type="hidden" name="acao" value="login">
<input type="submit" value="Login">
</form>
```

UsuarioDao.java
```java
 public Usuario autentica(String login, String senha) {

Connection con = Conexao.obterConexao();
Usuario usuario = null;
String sql = "SELECT * From Usuario WHERE login=? AND senha=?";

try {
PreparedStatement preparador = con.prepareStatement(sql);
preparador.setString(1, login);
preparador.setString(2, senha);

ResultSet resultado = preparador.executeQuery();

if(resultado.next()) {
usuario = new Usuario();
usuario.setCodigo(resultado.getInt("codigo"));
usuario.setNome(resultado.getString("nome"));
usuario.setLogin(resultado.getString("login"));
usuario.setSenha(resultado.getString("senha"));
}

} catch (SQLException e) {
e.printStackTrace();
}

return usuario;

}
```

EntradaServlet.jsp
```java
if(acao.equals("mostratelalogin")) {
RequestDispatcher rd = request.getRequestDispatcher("/WEB-INF/visao/login.jsp");
rd.forward(request, response);
}else if(acao.equals("efetuarlogin")) {
String login = request.getParameter("txtlogin");
String senha = request.getParameter("txtsenha");

UsuarioDao usuarioDao = new UsuarioDao();
Usuario usuario = usuarioDao.autentica(login, senha);

if(usuario != null) {
response.sendRedirect("http://localhost:8080/sistemausuarios/entrada?acao=mostratelatodosusuarios");
}else {
RequestDispatcher rd = request.getRequestDispatcher("/WEB-INF/visao/login.jsp");
rd.forward(request, response);
}

}
```