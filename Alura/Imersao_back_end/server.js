import express from "express";
import routes from "./src/routes/postsRoutes.js";

// "app" agora é o SERVIDOR
const app = express();

routes(app);

// Vamos iniciar o servidor com o "listen"
app.listen("3000", () => {
    console.log("Servidor escutando na porta 3000...");
});


// // Base de dados
// const posts = [
//     {
//         id: 1,
//         descricao: "Uma descrição...",
//         imagem: "https://placecats.com/millie/300/150"
//     },
//     {
//         id: 2,
//         descricao: "Duas descrições...",
//         imagem: "https://placecats.com/millie/300/150"
//     },
//     {
//         id: 3,
//         descricao: "Três descrições...",
//         imagem: "https://placecats.com/millie/300/150"
//     },
//     {
//         id: 4,
//         descricao: "Quatro descrições...",
//         imagem: "https://placecats.com/millie/300/150"
//     }
// ];

// ======= //
// FUNÇÕES //
// ======= //

// // Função para buscar o ID da requisição
// function buscarIDRequisicao(id) {
//     return posts.findIndex((post) => {
//         return post.id === Number(id);
//     });
//     /* OBS: findIndex procura dentro de cada objeto do array até satisfazer a condição "post.id === id"
//        E caso não encontre, retorna o valor -1 */
// }
