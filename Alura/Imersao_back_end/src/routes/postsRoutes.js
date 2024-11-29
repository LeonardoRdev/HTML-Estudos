// # Arquivo responsável por todas as rotas da aplicação. 
// Aqui, definimos as rotas que o servidor irá responder,
// como as rotas para listar, criar e fazer upload de posts.

import express from "express"; // Framework para criar e gerenciar o servidor HTTP
import multer from "multer"; // Biblioteca para manipular uploads de arquivos
import {listarPosts, postarNovoPost, uploadImagem, atualizarNovoPost, deletarNovoPost} from "../controllers/postsController.js"; // Controladores para gerenciar as requisições
import cors from "cors"; // Middleware para permitir requisições entre diferentes origens

// Configurações para o CORS (Cross-Origin Resource Sharing)
const corsOptions = {
    origin: "http://localhost:8000", // Permite acesso apenas a partir desta origem
    optionsSuccessStatus: 200 // Define o código de status para respostas bem-sucedidas
};

// Configuração para armazenamento de arquivos no multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Define o diretório onde os arquivos serão salvos
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname); // Define o nome do arquivo como seu nome original
    }
});

// Cria uma instância do multer com as configurações definidas
const upload = multer({ dest: "uploads", storage });

// Define as rotas da aplicação
const routes = (app) => {
    // Middleware para converter o corpo das requisições em JSON
    app.use(express.json());

    // Rota para listar todos os posts
    // Método: GET, Endpoint: /posts
    app.get("/posts", listarPosts);

    // Rota para criar um novo post
    // Método: POST, Endpoint: /posts
    app.post("/posts", postarNovoPost);

    // Rota para fazer upload de uma imagem
    // Método: POST, Endpoint: /upload
    // O parâmetro 'imagem' é o nome do campo no formulário que contém o arquivo
    app.post("/upload", upload.single("imagem"), uploadImagem);

    // Rota para atualizar um post existente
    // Método: PUT, Endpoint: /upload/:id
    app.put("/upload/:id", atualizarNovoPost);

    // Rota para deletar um post existente
    // Método: PUT, Endpoint: /delete/:id
    app.put("/delete/:id", deletarNovoPost);

    // Middleware para habilitar CORS com as configurações definidas
    app.use(cors(corsOptions));
};

export default routes; // Exporta as rotas para serem utilizadas em outros arquivos
