# Aula 11

Na aula de hoje iremos ver Introdução ao Banco de Dados MySQL, usando o programa MySQL Workbench, e também entenderemos um pouco sobre JDBC.

---

## O que é SQL?

SQL é sigla inglesa de “Structured Query Language” que significa, em Português, Linguagem de Consulta Estruturada, uma linguagem padrão de gerenciamento de dados que interage com os principais bancos de dados baseados no modelo relacional. E geralmente são representados por discos.

Alguns dos principais sistemas que utilizam a linguagem SQL, conhecido como SGBD (Sistema de Gerenciamento de Banco de Dados) ou DBMS (Data Base Management System), são: MySQL, Oracle, Firebird, Microsoft Access, SQL Server, PostgreSQL, DB2, MariaDB e etc.

Os principais comandos SQL para manipulação de dados são: INSERT
(inserção), SELECT (consulta), UPDATE (atualização), DELETE (exclusão).

Bancos de Dados que não trabalham com SQL são chamados de NoSQL.

---

## O que é CRUD?

CRUD é  um acrônimo de Create, Read, Update e Delete na língua Inglesa, para as quatro operações básicas utilizadas em bases de dados relacionais (SGBD em Português / RDBMS em Inglês), ou em interface para utilizadores para criação, consulta, atualização e destruição de dados.

 *Para usar uma tabela/database do Banco de Dados você pode dar dois cliques ou usar o código USE + nome da tabela/database.

---
## SQL

**int primary key** -> Serve para com que a coluna do código só vai receber num inteiros e não vai receber dados repetidos.
**auto_increment** -> Serve para fazer com que o banco de dados gere o código.
**varchar** -> Vai aceitar letras/nomes até determinados caracteres.

---

*Para executar o código, é preciso selecionar o comando e clicar apenas 1 vez no raio, para não ficar repetindo e aparecer muitas vezes a mesma resposta do código.

Para selecionar de onde o banco vai pegar para mostrar os dados, usar o SELECT * FROM.
Ou se quiser ser mais específico: SELECT * FROM ... WHERE ...;
Para procurar/filtrar os nomes que começam com uma determinada letra, usar o LIKE.
Exemplo: SELECT * FROM ... WHERE ... LIKE ...;

### ALTERANDO O REGISTRO DA BASE DE DADOS

UPDATE ... SET ... WHERE ...;

SET é usado para configurar a nova informação enquanto o WHERE serve para não alterar todos os dados da tabela.

---

## JDBC 

Java Database Connectivity ou JDBC é um conjunto de classes e interfaces escritas em Java que fazem o envio de instruções SQL para qualquer banco de dados relacional.

Ao criar um projeto JAVA, as API’s que fazem parte da biblioteca do JAVA são inseridas no projeto em virtude da instalação anterior do JDK (Java
Development Kit). Na organização destas biblioteca podemos encontrar API’s responsáveis por: leitura e gravação em arquivos, conexão com banco de dados, manipulação de arquivos XML e etc.

---

## Códigos da aula

Criando a database e a tabela usuario:

```SQL
CREATE DATABASE usuarios;

USE usuarios;

CREATE TABLE usuario(
codigo int primary key auto_increment,
nome varchar(50) not null,
login varchar(20) not null,
senha varchar(20) not null
);
```

Inserindo informações na tabela:

```SQL
-- INSERÇÃO DE INFORMAÇÕES DENTRO DO BANCO DE DADOS
INSERT INTO usuario(nome, login, senha) VALUES('Leonardo Rocha', 'lrocha', '123');
INSERT INTO usuario(nome, login, senha) VALUES('Marcos Fernandes', 'mfernandes', '123');
INSERT INTO usuario(nome, login, senha) VALUES('Vitor Henrique', 'henrique', '123');
INSERT INTO usuario(nome, login, senha) VALUES('Gustavo Eric', 'geric', '123');
INSERT INTO usuario(nome, login, senha) VALUES('Leonardo Constantino', 'lconstantino', '123');
INSERT INTO usuario(nome, login, senha) VALUES('Gustavo Basilio', 'gbasilio', '123');

-- MOSTRA OS REGISTROS QUE ESTÃO NA TABELA DA BASE DE DADOS

SELECT * FROM usuario;
SELECT nome,login FROM usuario;
SELECT * FROM usuario WHERE nome='Leonardo Rocha';
SELECT * FROM usuario WHERE codigo>3;

-- Mostra somente os usuarios que começam com a letra M
SELECT * FROM usuario WHERE nome LIKE 'M&';

-- Mostra somente o usuario que tem o código 6
SELECT * FROM usuario WHERE codigo>6;

-- ALTERA O REGISTRO DA BASE DE DADOS

UPDATE usuario SET nome='Toddy com Mococa', login='tcm' WHERE codigo=6;
UPDATE usuario SET nome='Gustavo Eric', login='mestre' WHERE codigo=5;

-- EXCLUIR O REGISTRO DA BASE DE DADOS
DELETE FROM usuario WHERE codigo=4;
```

"/* */" é comentário para todas as linhas
enquanto: "-- " é comentário para apenas uma linha.