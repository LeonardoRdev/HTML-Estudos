package controller;

import java.io.IOException;
import java.sql.*;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@WebServlet("/PessoaServlet")
public class PessoaServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       

    public PessoaServlet() {
        super();
    }


	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		// Variável nome = nome da pessoa:
		String nome = request.getParameter("nome");
		String acao = request.getParameter("acao");
		
		if (acao.equals("inserir")) {
			try {
				Class.forName("org.sqlite.JDBC");
				
				try {
					String diretorio = System.getProperty("wtp.deploy").toString().split(".metadata")[0];
					String dataBase = diretorio + "\\banco.db";
					
					Connection conn = DriverManager.getConnection("jdbc:sqlite:" + dataBase);
				
					Statement stm = conn.createStatement();
					stm.executeUpdate(
								"CREATE TABLE IF NOT EXISTS 'pessoa' ('ra' INTEGER, 'nome' TEXT, 'curso' TEXT, 'senha' TEXT, PRIMARY KEY ('ra' AUTOINCREMENT))"
							);
					
				
					String comandoSQL = "insert into pessoa (nome) values (?)";
					
					PreparedStatement stm2 = conn.prepareStatement(comandoSQL);
					stm2.setString(1,  nome);
					stm2.executeUpdate();
					conn.close();
				
					
					// Mensagem caso sucesso:
					response.getWriter().append("Dados Salvos com Sucesso!!");
				
				} catch (SQLException e) {
					e.printStackTrace();
					response.getWriter().append("ERRO AO SALVAR (1)");
				}
				
				
			} catch (ClassNotFoundException e) {
				e.printStackTrace();
				response.getWriter().append("ERRO AO SALVAR (2)");
			}
			
		}
		
		
		
		
		
	}


	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}

}
