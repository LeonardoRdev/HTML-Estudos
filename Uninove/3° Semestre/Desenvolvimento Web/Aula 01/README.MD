# Primeira aula de Java!
Eclipse -> salvar em 'documentos'
File -> new -> dynamic web project

### O Eclipse é um IDE para desenvolver em Java.
=====================================================

Servlets se destroem quando terminam de fazer o que tem que fazer

Tem 2 tipos de servlets:
1° - Java dentro de HTML e CSS e JS.
2° - HTML, CSS e JS e Java dentro.

Java pro web precisa de: servidor de aplicação* (obrigatório)

Servidor de aplicação não tem aqui e a gente precisa dele, então baixaremos ele!
C:\Users\lab-mmd\Documents\tomcat 9\apache-tomcat-9.0.86 baixamos a versão 9

Next next -> Generate bagulho xml descriptor [ x ]

Tem que instalar o tomcat (de preferência o 9) para ele reconhecer os arquivos do lado do servidor*
Baixa aqui nesse link, pelo zip: https://tomcat.apache.org/download-90.cgi

O que aprenderemos hoje:
transferir uma informação de um local para o outro <

Existem 2 formas de enviar dados:
- GET (ruim):
Todo mundo fica sabendo que você está enviando, já que aparece na barra
de pesquisa tudinho que você enviou.
Exemplo de site que utiliza GET:
Google

- POST (bom):
Não aparece na barra de pesquisa as informações que você está enviando,
útil para quando você está enviando alguma informação totalmente secreta
Exemplo de site que utiliza POST:
Uninove

O sistema da uninove utiliza POST
aluno.uninove.br/login.php

Se a Uninove utilizasse GET
aluno.uninove.br/login.php/login,php?ra=123&senha=goo12