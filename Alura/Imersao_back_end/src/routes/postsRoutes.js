// # Arquivo responsável por todas as rotas da aplicação. 
// Aqui, definimos as rotas que o servidor irá responder,
// como as rotas para listar, criar e fazer upload de posts.

import express from "express";
import multer from "multer" // Multer -> Avisa o sistema que estamos enviando arquivos que não são somente caracteres
import {listarPosts, postarNovoPost, uploadImagem, atualizarNovoPost, deletarNovoPost} from "../controllers/postsController.js";
import cors from "cors"; // Permite Requisições entre Origens Diferentes

const corsOptions = {
    origin: "htpp://localhost:8000",
    optionsSuccessStatus: 200
};

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'Alura/Imersao_back_end/uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})

// Cria uma instância do multer com a configuração de armazenamento
const upload = multer({ dest: "Alura/Imersao_back_end/uploads" , storage});

const routes = (app) => {
    // Avisa o express que ele pode CONVERTER tudo que se pareça com JSON em JSON
    app.use(express.json());

    // Rota para listar todos os posts
    // GET /posts
    app.get("/posts", listarPosts);

    // Rota para criar um novo post
    // POST /posts
    app.post("/posts", postarNovoPost);

    // Rota para fazer upload de uma imagem
    // POST /upload
    // O parâmetro 'imagem' indica o nome do campo no formulário, que contém o arquivo a ser enviado
    app.post("/upload", upload.single("imagem"), uploadImagem);

    // Roda para ATUALIZAR um registro
    app.put("/upload/:id", atualizarNovoPost);

    app.put("/delete/:id", deletarNovoPost);

    app.use(cors(corsOptions));
}

export default routes;
