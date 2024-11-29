import { GoogleGenerativeAI } from "@google/generative-ai"; // Importa a biblioteca para usar os modelos generativos da Google

// Cria uma instância da API Generative AI usando a chave fornecida em variáveis de ambiente
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Obtém um modelo generativo específico (gemini-1.5-flash) para realizar as operações
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// Função para gerar uma descrição para uma imagem usando o modelo Gemini
export default async function gerarDescricaoComGemini(imageBuffer) {
  const prompt =
    "Gere uma descrição em português do brasil para a seguinte imagem"; // Define o prompt que será usado para gerar a descrição

  try {
    // Prepara os dados da imagem no formato esperado pela API
    const image = {
      inlineData: {
        data: imageBuffer.toString("base64"), // Converte o buffer da imagem para uma string base64
        mimeType: "image/png", // Define o tipo MIME da imagem como PNG
      },
    };

    // Faz a chamada ao modelo generativo com o prompt e a imagem
    const res = await model.generateContent([prompt, image]);

    // Retorna a resposta do modelo ou uma mensagem padrão se não houver descrição disponível
    return res.response.text() || "Alt-text não disponível.";
  } catch (erro) {
    // Loga o erro no console em caso de falha na geração do alt-text
    console.error("Erro ao obter alt-text:", erro.message, erro);

    // Lança uma exceção para ser tratada por quem chamou a função
    throw new Error("Erro ao obter o alt-text do Gemini.");
  }
}
