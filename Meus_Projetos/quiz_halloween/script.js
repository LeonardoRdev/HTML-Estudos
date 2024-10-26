const divComRespostas = document.querySelector("#respostas");
const  respostas = document.querySelectorAll(".resposta");
let arrayRespostas = [];

respostas.forEach((resposta, index) => {

    // Aleatoriza a ordem das respostas
    arrayRespostas[index] = resposta;

    // Função ao clicar em alguma resposta
    resposta.onclick = () => {

        // Caso acertar a resposta
        if (resposta.id === "resposta1") {
            resposta.style.backgroundColor = "#0f08"
        }

        // Caso errar a resposta
        else {
            resposta.style.backgroundColor = "#f00B"
        }
    }
});


// Função para aleatorizar a ordem das respostas
function aleatorizarOrdemRespostas() {

    let novaOrdemRespostas = [];
    let tamanhoArrayRespostas = arrayRespostas.length;

    for (let i = 0; i < tamanhoArrayRespostas; i++) {
    
        // Pega um item aleatório do array original, e passa para um novo array
        let indiceEscolhido = Math.floor(Math.random() * arrayRespostas.length);
        novaOrdemRespostas.push(arrayRespostas[indiceEscolhido]);
        arrayRespostas.splice(indiceEscolhido, 1);
    }

    // Limpa a div que contém as respostas (sem estarem embaralhadas)
    divComRespostas.innerHTML = "";

    // Adiciona as respostas com a nova ordem (aleatória)
    novaOrdemRespostas.forEach((resposta) => {
        divComRespostas.appendChild(resposta);
    })

}

aleatorizarOrdemRespostas();
