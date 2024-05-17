# Aula 12

### Atalhos

**Ctrl + Espaço** -> atalho para importar bibliotecas automaticamente.;

**Ctrl + Shift + O** -> atalho para escolher as bibliotecas para importar;

Ctrl + 3 -> GGAS | Generate Getters and Setters;

Ctrl + 3 -> GCUF | Generate Constructor Using Fields.

### Como importar um projeto
Para importar um projeto, você precisa primeiro baixar o arquivo ZIP e NÃO DESCOMPACTAR ELE.

File -> import -> Existing Projects into Workspace -> Select archive file (2° bolinha)
ESCOLHER O ARQUIVO ZIP BAIXADO.

**PARA ABRIR O SQL**
senha: admin

---

## Baixando Driver do MySQL

Para utilizarmos um banco de dados específico no Java, precisamos baixar o Driver deste banco de dados no JDBC. No nosso caso vamos baixar os driver do MySQL

Para fazer isso, basta pesquisar: jdbc mysql
e entrar no link: https://dev.mysql.com/downloads/connector/j/


No site, vamos escolher a plataforma em que iremos trabalhar, no caso "Platform independent" (windows)

E vamos baixar a segunda opção. Depois de baixado, vamos extrair o arquivo e procurar por um arquivo .JAR (Java Archive)
Arquivo: mysql-connector-j-8.4.0

 C:\Users\lab-mmd\Documents\Gustavo\programacao_orientada_a_objeto\aula12_17_05\sistemausuarios\WebContent\WEB-INF\lib

No nosso projeto, vamos inserir esse arquivo .JAR:
WebContent - META-INF - lib - Colocar o arquivo .JAR na lib

Fazendo isso o programa vai saber qual driver ele deverá utilizar para trabalhar com o BD.
Ele que vai conversar com o nosso Banco de Dados.

*OBS: todo arquivo externo baixado tem que ser colocado na pasta "LIB".

---

## Criando Classes
Na pasta SRC, vamos criar uma classe com o nome "Conexao", e seu package vai ser "modelo".

Vamos criar um método que pede permissão ao banco de dados, para o JDBC poder conversar com ele.

**Ctrl + Espaço** -> atalho para importar bibliotecas automaticamente

**Conexao.java**
```java
package modelo;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class Conexao {

public static Connection obterConexao() {

Connection con = null;

// jdbc: -> Envia as intruções de conexão para o Banco
// mysql -> Banco de Dados que utilizaremos;
// :// -> Caminho para o banco de dados;
// localhost -> O banco está na MINHA máquina;
// /usuarios -> Base de dados que queremos acessar;
// "root" -> Usuário que estamos utilizando no bd;
// "admin" -> Senha do usuário do root.

try {
con = DriverManager.getConnection("jdbc:mysql://localhost/usuarios","root","admin");
System.out.println("\nConexão com Banco de Dados bem sucedida!!");
}

catch (SQLException e) {
System.err.println("\nERRO ao conectar com Banco de Dados!!");
e.printStackTrace();
}

// Se return != null: permissão para falar com banco de dados concedida!
return con;
}
}
```

### Pacote "Teste"

Vamos criar um pacote "Teste", para realizarmos testes para verificar se o nosso programa está funcionando corretamente:

Nome: TesteConexaoMySql
Package: teste
[ x ] public static void main(String[] args)

Nele vamos rodar o método "Conexao.obterConexao( )" e verificar se o nosso programa está conseguindo realizar a conexão com o Banco de Dados ou não.

**TesteConexaoMySql.java**
```java
package teste;

import modelo.Conexao;

public class TesteConexaoMySql {

public static void main(String[] args) {

Conexao.obterConexao();

}

}
```

Caso a conexão falhe, sempre procure o erro no console, procurar no código quase sempre vai demorar mais, isso se você sequer encontrar o erro.

---

## Cria o usuário
Nome: Usuario.java
Package: model
[ x ] public static void main(String[] args)
Vamos criar uma nova classe "Usuario", nela vamos criar um usuário no BD pelo JAVA.

**Usuario.java**
```java
package modelo;

public class Usuario {

// # Construtores:
// Sem o "codigo":
public Usuario(String nome, String login, String senha) {
this.nome = nome;
this.login = login;
this.senha = senha;
}

// Construtor Padrão:
public Usuario() {}

// Com todos:
public Usuario(int codigo, String nome, String login, String senha) {
super();
this.codigo = codigo;
this.nome = nome;
this.login = login;
this.senha = senha;
}



// ---
private int codigo;
private String nome;
private String login;
private String senha;


// Getters and Setters:
public int getCodigo() {
return codigo;
}
public void setCodigo(int codigo) {
this.codigo = codigo;
}
public String getNome() {
return nome;
}
public void setNome(String nome) {
this.nome = nome;
}
public String getLogin() {
return login;
}
public void setLogin(String login) {
this.login = login;
}
public String getSenha() {
return senha;
}
public void setSenha(String senha) {
this.senha = senha;
}

}
```
---

## Cadastrar usuário no Banco de Dados
Nome: UsuarioDAO.java
Package: model
[ x ] public static void main(String[] args)

A classe DAO vai: ....
Cadastrar, mostrar, atualizar, deletar

**UsuarioDAO.java**
```java
package modelo;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class UsuarioDAO {

public void cadastra(Usuario usuario) {

Connection con = Conexao.obterConexao();

String sql = "INSERT INTO Usuarios(nome,login,senha) VALUES(?,?,?)";

PreparedStatement preparador;
try {
preparador = con.prepareStatement(sql);

preparador.setString(1, usuario.getNome());
preparador.setString(2, usuario.getLogin());
preparador.setString(3, usuario.getSenha());

System.out.println("\nUsuário criado com sucesso! ");
}
catch (SQLException e) {
System.err.println("\nErro ao criar usuário no BD! ");
e.printStackTrace();
}
}
}
```

### Novo Teste
Nome: UsuarioDAO.java
Package: model


**TesteCadastraUsuario.java**

```java
package teste;

import modelo.Usuario;
import modelo.UsuarioDAO;

public class TesteCadastraUsuario {

public static void main(String[] args) {

Usuario usuario = new Usuario("Gustavo", "Gustavo_Gamer", "BarrinhaDeCereal123");

UsuarioDAO usuarioDAO = new UsuarioDAO();
usuarioDAO.cadastra(usuario);

}

}
```