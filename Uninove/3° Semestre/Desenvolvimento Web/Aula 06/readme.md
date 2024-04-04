# Aula 7

## O que realizaremos hoje
- Fazer o CRUD em Java
- Inserir   ( Create )
- Select   ( Read )
- Update ( Update )
- Deletar ( Delete )

#### Hoje vamos salvar e alterar informações via JAVA, utilizando a IDE eclipse.

---

### Dicas

Arquivos executáveis em Java terminam com .jar e não .exe

Exceção na programação significa ERRO na programação

---

### Configurações para conectar o Java com MySQL

Se quando abrir o projeto, estiver aparecendo um erro: ❌
- Botão direito no projeto;
- Properties;
- Projects Facets;
- Java -> 14 (muda para versão 14);
- Apply Changes.


E precisamos também baixar o connector, pelo seguinte link:
https://dev.mysql.com/downloads/connector/j/
> Platform Independent
> Baixar o arquivo de BAIXO (ZIP)

Colocar o arquivo executável na pasta lib do projeto ("mysql-connector-j-8.3.0")
e também:
- Botão direito no projeto (projetoBackEnd)
- Java build Path
- Libraries
- ClassPath
- Add JARs
- Colocar o caminho pro connector, na pasta lib ("mysql-connector-j-8.3.0")


### Começando Projetos
- Botão direito no projeto (projetoBackEnd)
- New
- Class
- Nome ("Principal")

image.png
Ctrl + Espaço -> java.sql
Isso adiciona a seguinte linha de código:
```import java.sql.Connection;```
Porém nós precisamos de TODOS os pacotes dessa biblioteca, então utilizaremos o ' * '
Então o resultado final é:
```import java.sql.*```

```
public static void main(String[] args) throws SQLException {
```
Isso fará com que o erro seja postergado para ser resolvido depois.

---

## Código da Aula

[Principal.java]
```
package projetoBackEnd;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;
 
import org.apache.tomcat.dbcp.dbcp2.ConnectionFactory;
import com.mysql.cj.jdbc.Driver;
 
public class Principal {
 

public static void main(String[] args) throws SQLException {

Connection con = DriverManager.getConnection("jdbc:mysql://localhost/uninove","root","");
String sql = "insert into aluno values(null,'Marcelo','TADS','5983')";
PreparedStatement psm = con.prepareStatement(sql);
psm.execute();



}

}