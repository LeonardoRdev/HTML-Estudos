import { MongoClient } from 'mongodb';

export default async function conectarAoBanco(stringConexao) {
  // Cria uma variável para armazenar o cliente MongoDB
  let mongoClient;

  try {
    // Cria uma nova instância do cliente MongoDB, passando a string de conexão
    mongoClient = new MongoClient(stringConexao);
    console.log('Conectando ao cluster do banco de dados...');

    // Tenta estabelecer a conexão com o banco de dados
    // A palavra-chave 'await' faz com que a função aguarde a conclusão da conexão
    await mongoClient.connect();
    console.log('Conectado ao MongoDB Atlas com sucesso!');

    // Retorna o cliente conectado para uso em outras partes do código
    return mongoClient;
  } catch (erro) {
    // Caso ocorra algum erro durante a conexão, ele é capturado aqui
    console.error('Falha na conexão com o banco!', erro);

    // Encerra a execução do processo, indicando um erro fatal
    process.exit();
  }
}
