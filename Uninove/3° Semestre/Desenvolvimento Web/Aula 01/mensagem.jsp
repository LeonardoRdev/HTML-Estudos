<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1" %>
    <!DOCTYPE html>
    <html>

    <head>
        <meta charset="UTF-8">
        <title>Essa página é JSP</title>
    </head>

    <body>
        <h1>Bom dia pessoal!! Se inscreve no canal, por apenas R$4,99!!</h1><img alt="vitor"
            src="https://protech-consulting.netlify.app/imagens/integrantes/Vitor_Henrique.png">
        <%String coisa=request.getParameter("msg");out.print(coisa);%>
    </body>

    </html>