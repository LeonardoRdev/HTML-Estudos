# Aula 10

### Sobre a aula

A aula vai ser sobre como mostrar os dados armazenados no banco de dados, mas para adicionar os dados precisamos fazer isso manualmente com comandos SQL. 

---

## Conteúdo
Sempre que pegar o projeto de uma outra pessoa, você precisa excluir o "Server", isso inclui o TOMCAT e a pasta "Servers", e adicionar o TOMCAT novamente.

Utilizamos o Try { } Catch { } quando não temos certeza se o resultado deu uma ação vai dar exceção.O Catch retorna uma mensagem explicando a onde ocorreu o erro.

**Conexção com Banco**
```
try {
Class.forName("org.sqlite.JDBC");

String diretorio = System.getProperty("wtp.deploy").toString().split(".metadata")[0];
String dataBase = diretorio + "\\uninove.db";

Connection conn;

conn = DriverManager.getConnection("jdbc:sqlite:" + dataBase);
} 
catch (ClassNotFoundException | SQLException e) {
// Mensagem s der erro:
// A variável "e" contém as informações do erro.
e.printStackTrace();
}
```

Uma classe Bean só possui get e set de cada dado.
Uma classe Beans é uma classe de TRANSPORTE.

**AlunoBean.java**
```
// OBJETO ALUNO:
package model;

public class AlunoBean {

private int ra;
private String nome;
private String curso;

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
}
```
*atalho para criar os Getters & Setters:
Ctrl + 3: ggas

Lembrando que os getters & setters só são necessários quando os atributos são PRIVADOS.

---
## Conclusão
O professor fez o que ele falou que faria, pegou e refez exatamente o mesmo código da semana passada, ele está mandando os arquivos pelo google classroom.