import express from "express";
import routes from "./src/routes/postsRoutes.js";

// "app" agora é o SERVIDOR
const app = express();

// Abre a pasta "uploads" para que ela possa eventualmente ser PÚBLICA (qualquer pessoa pode ver)
app.use(express.static("./Alura/Imersao_back_end/uploads"));

routes(app);

// Vamos iniciar o servidor com o "listen"
app.listen("3000", () => {
    console.log("Servidor escutando na porta 3000...");
});
