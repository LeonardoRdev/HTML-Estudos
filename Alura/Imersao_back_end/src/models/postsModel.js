// # Arquivo responsável por fazer a conexão com o Banco de Dados

import { ObjectId } from "mongodb";
import conectarAoBanco from "../config/dbConfig.js";

// Conectando-se ao Banco de Dados e passando isso para uma variável
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

// Pega informações diretamente do Banco de Dados
export async function getTodosPosts() {
 
    // Definindo um OBJETO que representa o BANCO de DADOS
    const db = conexao.db("imersao-back-end");

    // Abre uma "coleção" dentro do banco, chamada "posts"
    const colecao = db.collection("posts");

    // Retornamos o conteúdo que encontrarmos dentro da coleção de "posts"
    return colecao.find().toArray();
}

export async function criarPost(novoPost) {
    const db = conexao.db("imersao-back-end");
    const colecao = db.collection("posts");

    return colecao.insertOne(novoPost);
}

export async function atualizarPost(id, novoPost) {
    const db = conexao.db("imersao-back-end");
    const colecao = db.collection("posts");

    // Objeto para que o MONGO entenda o ID
    const objetoID = ObjectId.createFromHexString(id);

    // Avisamos para o MONGO que é esse post que estamos querendo fazer a atualização, e mandamos o quais vão ser os dados atualizados
    return colecao.updateOne({_id: new ObjectId(objetoID)}, {$set: novoPost});
}
