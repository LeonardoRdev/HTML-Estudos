import express from "express";

// "app" agora é o SERVIDOR
const app = express();

// Vamos iniciar o servidor com o "listen"
app.listen("3000", () => {
    console.log("Servidor do Samuel escutando...");
});

// Configura uma rota chamada "/samuel"
app.get("/samuel", (req, res) => {
    res.status(200).send("Filme novo legal");
});
