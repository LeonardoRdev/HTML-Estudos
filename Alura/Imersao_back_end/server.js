import express from "express"; // Importa o framework Express para criação e gerenciamento do servidor
import routes from "./src/routes/postsRoutes.js"; // Importa as rotas definidas no arquivo de rotas

// "app" agora representa o servidor Express
const app = express();

// Torna a pasta "uploads" pública, permitindo que os arquivos nela sejam acessados diretamente
app.use(express.static("./uploads"));

// Configura as rotas da aplicação utilizando o arquivo de rotas importado
routes(app);

// Inicia o servidor na porta 3000
app.listen("3000", () => {
    console.log("Servidor escutando na porta 3000..."); // Exibe uma mensagem no console quando o servidor começa a rodar
});
