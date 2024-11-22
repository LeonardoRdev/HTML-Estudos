// # Arquivo responsável por fazer a conexão com o Banco de Dados

import conectarAoBanco from "../config/dbConfig.js";

// Conectando-se ao Banco de Dados e passando isso para uma variável
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

// Pega informações diretamente do Banco de Dados
export default async function getTodosPosts() {
 
    // Definindo um OBJETO que representa o BANCO de DADOS
    const db = conexao.db("imersao-back-end");

    // Abre uma "coleção" dentro do banco, chamada "posts"
    const colecao = db.collection("posts");

    // Retornamos o conteúdo que encontrarmos dentro da coleção de "posts"
    return colecao.find().toArray();
}
