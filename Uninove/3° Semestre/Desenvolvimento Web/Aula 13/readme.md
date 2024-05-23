# Aula 13
- Data final do projeto final:  **06/junho**

## Revisão do conteúdo do semestre

### Backend e Frontend
**- JSP**
Arquivo que permite utilizar código java no HTML, CSS, JS;

**- Json**
Forma de encapsular os dados para transmitir;

**- Ajax**
Tecnología para enviar e receber dados;

**- API**
API de consulta de CEP dos correios;

**- Servlet**
Classe controller que recebe e envia os dados;

**- MVC (Model, View, Controller);**
Forma de arquitetura do sistema, para organizá-lo melhor;

**- Framework** (Bootstrap);
**- Biblioteca** (JQuery);
**- Banco de Dados** (SQLite) - Linguagem SQL.

### Dependências:
**- gson-2.2.2.jar**
A comunicação do front com o back vai ser feita em gson, ele transforma uma **classe** em **java**, em um objeto **JSON.**

**- sqlite-jdbc-3.7.2.jar** (Pesquisar por JDBC SQLite)
Plugin para o sistema conectar com o banco de dados SQLite

**- ApacheTomcat9** (Pegar no site do Apache Tomcat)
O Tomcat é quem roda o código java no nosso sistema.

**- servlet-api.jar**
**- Bootstrap@5.3.3** (Pagar links no site do Bootstrap)
**- jquery 3.7.1** (Pegar link no site CND JS)

---

## Criando Projeto do Zero
Baixaremos os arquivos pelo seguinte link:
https://drive.google.com/drive/folders/1ApBW3Vq15wtqx-cyD4gWzpnnw8_sgZyz

Vamos primeiro adicionar as **dependências** para o projeto:
- gson-2.2.2.jar
- servlet-api.jar
- sqlite-jdbc-3.7.2.jar
E também o arquivo **"DB Browser for SQLite"**

E vamos colocar todas as dependências baixadas na pasta "lib"
Depois vamos em "propriedades" -> "java build path" -> "libraries" e adicionar as 3 mesmas dependências da pasta lib, selecionando elas pela própria pasta lib.


### Control C + Control V em todo o outro projeto que tínhamos criados:
Dentro de **Web Content:**
- index.jsp
- pasta "imagens"

E vamos adicionar a servlet:
New -> Servlet.
Java Package: controller
Class name: AlunoServlet

Para trazer os dados do front-end para o back-end:
```java
String nome  = request.getParameter("nome");
String curso = request.getParameter("curso");
String senha = request.getParameter("senha");
```

E utilizamos o response para enviar uma resposta:
```java
response.getWriter().append("Mensagem para o front-end");
response.getWriter().append("Deu tudo certo!");
response.getWriter().append("Deu tudo errado D: ");
```

**Vamos criar a classe "AlunoBean", no package "model":**
Para cada coluna que você tiver no seu banco de dados você vai criar um atributo na classe **AlunoBean**.

E pronto, projeto funcionando.