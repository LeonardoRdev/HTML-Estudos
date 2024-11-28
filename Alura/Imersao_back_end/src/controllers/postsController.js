// # Arquivo responsável pelas requisições e respostas ao servidor

import fs from "fs"; // Biblioteca nativa do node, faz com que a API conversar com os arquivos do novo computador
import {getTodosPosts, criarPost, atualizarPost, deletarPost} from "../models/postsModel.js";
import gerarDescricaoComGemini from "../services/geminiService.js";

export async function listarPosts(req, res) {
    const posts = await getTodosPosts();
    res.status(200).json(posts);
}

export async function postarNovoPost(req, res) {
    // req.body -> é o conteúdo da requisição
    const novoPost = req.body;

    try {
        const postCriado = await criarPost(novoPost);
        res.status(200).json(postCriado);
    } catch(erro) {
        // Qualquer erro que venha a acontecer, será automaticamente passado no parâmetro "erro"
        console.error(`Deu o seguinte erro: ${erro.message}`);
        // Todo objeto ERRO tem uma propriedade ".message, que msotra exatamente o que causou o erro"

        // Retorna pra API a mensagem de erro HTTP 500
        res.status(500).json({"Erro":"Falha na requisição"});
    }
}

export async function uploadImagem(req, res) {
    // req.body -> é o conteúdo da requisição
    const novoPost = {
        descricao: "",
        imgUrl: req.file.originalname,
        alt: ""
    };

    try {
        const postCriado = await criarPost(novoPost);

        // Vamos passar o endereço da imagem dentro da minha própria MÁQUINA (que só aceita .PNG por enquanto)
        const imagemAtualizada = `uploads/${postCriado.insertedId}.png`;
        fs.renameSync(req.file.path, imagemAtualizada);

        res.status(200).json(postCriado);
    } catch(erro) {
        console.error(`Deu o seguinte erro: ${erro.message}`);
        res.status(500).json({"Erro":"Falha na requisição"});
    }
}

export async function atualizarNovoPost(req, res) {
    const id = req.params.id;
    const urlImagem = `http://localhost:3000/${id}.png`;

    try {
        const imgBuffer = fs.readFileSync(`uploads/${id}.png`);
        const descricao = await gerarDescricaoComGemini(imgBuffer);

        const post = {
            imgUrl: urlImagem,
            descricao: descricao,
            alt: req.body.alt
        };

        // Vamos atulizar o post X, que possui o ID X
        const postCriado = await atualizarPost(id, post);
        res.status(200).json(postCriado);
    } catch(erro) {
        console.error(`Deu o seguinte erro: ${erro.message}`);
        res.status(500).json({"Erro":"Falha na requisição"});
    }
}

export async function deletarNovoPost(req, res) {
    // req.body -> é o conteúdo da requisição
    const idPost = req.params.id;

    try {
        const postDeletado = await deletarPost(idPost);
        res.status(200).json(postDeletado);
    } catch(erro) {
        console.error(`Deu o seguinte erro: ${erro.message}`);
        res.status(500).json({"Erro":"Falha na requisição"});
    }
}
