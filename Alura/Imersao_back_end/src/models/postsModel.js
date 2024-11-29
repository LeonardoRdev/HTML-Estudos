// # Arquivo responsável por fazer a conexão com o Banco de Dados

import { ObjectId } from "mongodb"; // Importa a função ObjectId para manipular IDs no formato MongoDB
import conectarAoBanco from "../config/dbConfig.js"; // Função para conectar ao banco de dados

// Conectando-se ao Banco de Dados usando uma string de conexão definida nas variáveis de ambiente
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

// Função para buscar todos os posts no banco de dados
export async function getTodosPosts() {
    const db = conexao.db("imersao-back-end"); // Seleciona o banco de dados "imersao-back-end"
    const colecao = db.collection("posts"); // Seleciona a coleção "posts" dentro do banco
    return colecao.find().toArray(); // Busca todos os documentos na coleção e os retorna como um array
}

// Função para criar um novo post no banco de dados
export async function criarPost(novoPost) {
    const db = conexao.db("imersao-back-end"); // Seleciona o banco de dados "imersao-back-end"
    const colecao = db.collection("posts"); // Seleciona a coleção "posts" dentro do banco
    return colecao.insertOne(novoPost); // Insere um novo documento na coleção e retorna o resultado da operação
}

// Função para atualizar um post existente no banco de dados
export async function atualizarPost(id, novoPost) {
    const db = conexao.db("imersao-back-end"); // Seleciona o banco de dados "imersao-back-end"
    const colecao = db.collection("posts"); // Seleciona a coleção "posts" dentro do banco

    const objetoID = ObjectId.createFromHexString(id); // Converte o ID em string para o formato ObjectId
    // Atualiza o documento que corresponde ao ID fornecido, substituindo os campos especificados no novoPost
    return colecao.updateOne({ _id: new ObjectId(objetoID) }, { $set: novoPost });
}

// Função para deletar um post no banco de dados
export async function deletarPost(post) {
    const db = conexao.db("imersao-back-end"); // Seleciona o banco de dados "imersao-back-end"
    const colecao = db.collection("posts"); // Seleciona a coleção "posts" dentro do banco

    // Deleta o documento cujo _id corresponde ao ID fornecido
    return colecao.deleteOne({
        _id: new ObjectId(post)
    });
}
