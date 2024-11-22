// # Arquivo responsável por todas as ROTAS feitas no servidor

import express from "express";
import listarPosts from "../controllers/postsController.js";

const routes = (app) => {
    // Avisa o express que ele pode CONVERTER tudo que se pareça com JSON em JSON
    app.use(express.json());

    // Configura uma rota chamada "/posts" que possui todos os posts
    app.get("/posts", listarPosts);

    app.get("/posts/:id", (req, res) => {
        const index = buscarIDRequisicao(req.params.id);
        res.status(200).json(posts[index]);
    });
}

export default routes;
