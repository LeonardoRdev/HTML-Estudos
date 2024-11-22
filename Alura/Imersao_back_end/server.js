import express from "express";

// Base de dados
const posts = [
    {
        id: 1,
        descricao: "Uma descrição...",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 2,
        descricao: "Duas descrições...",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 3,
        descricao: "Três descrições...",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 4,
        descricao: "Quatro descrições...",
        imagem: "https://placecats.com/millie/300/150"
    }
];

// "app" agora é o SERVIDOR
const app = express();

// Avisa o express que ele pode CONVERTER tudo que se pareça com JSON em JSON
app.use(express.json());

// Vamos iniciar o servidor com o "listen"
app.listen("3000", () => {
    console.log("Servidor escutando na porta 3000...");
});

// Configura uma rota chamada "/posts" que possui todos os posts
app.get("/posts", (req, res) => {
    res.status(200).json(posts);
});

app.get("/posts/:id", (req, res) => {
    const index = buscarIDRequisicao(req.params.id);
    res.status(200).json(posts[index]);
});


// ======= //
// FUNÇÕES //
// ======= //

// Função para buscar o ID da requisição
function buscarIDRequisicao(id) {
    return posts.findIndex((post) => {
        return post.id === Number(id);
    });
    // *findIndex procura dentro de cada objeto do array até satisfazer a condição "post.id === id"
    // E caso não encontre, retorna o valor -1
}
