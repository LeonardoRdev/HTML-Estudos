# Aula 14
### Atalhos

**Ctrl + Espaço** -> atalho para importar bibliotecas automaticamente.;

**Ctrl + Shift + O** -> atalho para escolher as bibliotecas para importar;

Ctrl + 3 -> GGAS | Generate Getters and Setters;

Ctrl + 3 -> GCUF | Generate Constructor Using Fields.

---

### O que faremos hoje:
Vamos buscar informações do banco de dados, no nosso caso os usuários cadastrados, e mostrar a informação de todo na tela (SELECT).

No arquivo **"UsuarioDAO.java"** vamos criar uma nova função para pegar as informações do banco de dados (SELECT).

```JAVA
 public List<Usuario> mostraTodos() {
// Quem chamar esse método, vai receber uma lista de usuários do BD
List<Usuario> usuarios = new ArrayList<>();
Connection con = Conexao.obterConexao();
String sql = "SELECT * FROM Usuario";

try {
// preparador, essa linha vai ser a que você vai executar lá no BD
PreparedStatement preparador = con.prepareStatement(sql);

// preparador, execute esse comando "sql" no BD e me devolva o resultado:
ResultSet resultado = preparador.executeQuery(sql);


// Agora precisamos passar o "resultado" do banco de dados
// que no nosso caso é o array "SELECT" com todos os usuários
// Para uma lista em JAVA

// Enquanto tiver uma próxima linha do SELECT *:
while (resultado.next()) {
// Vamos criar o objeto usuário:
Usuario usuario = new Usuario();
usuario.setCodigo(resultado.getInt("codigo"));
usuario.setNome(resultado.getString("nome"));
usuario.setLogin(resultado.getString("login"));
usuario.setSenha(resultado.getString("senha"));

// e adicione o objeto "usuario" à lista:
usuarios.add(usuario);

// Ou seja, cada linha do SELECT vira um objeto num array.
// Cada indice do array é um objeto usuário.
}


}

catch (SQLException e) {
// Imprima toda a pilha de erro:
e.printStackTrace();
}


return usuarios;
}
```

---
### Segurança do Programa
O URL a seguir está **errado** seguindo o padrão MVC, já que ele **não passa pelo Controller**:
**localhost:8080/sistemausuarios/cadastro.html**
------ tomcat ----- Projeto Java -------- View

**O correto seria:**
**localhost:8080/sistemausuarios/entrada?acao=xxxxx**
------ tomcat ----- Projeto Java --- Controlador -- chave = valor

A pasta **WEB-INF não pode ser acessada de JEITO NENHUM** pelo navegador, então é o local perfeito para colocarmos as nossas views.

Então você precisa entrar na controler e redirecionar o URL para a pasta WEB-INF com o arquivo que você deseja mostrar. Fazendo isso o usuário vai ser direcionado para a página sem ter acesso ao nome dela.