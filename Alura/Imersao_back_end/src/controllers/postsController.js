// # Arquivo responsável pelas requisições e respostas ao servidor

import getTodosPosts from "../models/postsModel.js";

export async function listarPosts(req, res) {
    const posts = await getTodosPosts();
    res.status(200).json(posts);
}
