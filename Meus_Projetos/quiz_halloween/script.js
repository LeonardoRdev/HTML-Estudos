let score = 0;
const paragrafoScore = document.querySelector("#score");

const divsComRespostas = document.querySelectorAll(".respostas");
divsComRespostas.forEach((possiveisRespostas) => {

    const respostas = possiveisRespostas.querySelectorAll(".resposta");
    let arrayRespostas = [];
    
    respostas.forEach((resposta, index) => {

        // Aleatoriza a ordem das respostas
        arrayRespostas[index] = resposta;
        
        
        // Função ao clicar em alguma resposta
        resposta.onclick = () => {
    
            // Caso acertar a resposta
            if (resposta.id === "resposta1") {
                resposta.style.backgroundColor = "#0f08";
                tocarAudio(audiosTocaveis["respostaCorreta"]);

                if (!resposta.closest(".perguntas").classList.contains("pergunta-respondida")) {
                    score++;
                }
            }
    
            // Caso errar a resposta
            else {
                resposta.style.backgroundColor = "#f00B";
                tocarAudio(audiosTocaveis["respostaErrada"]);
            }

            // # Ao chutar pela primeira vez:

            // Revela a explicação da resposta
            resposta.closest(".perguntas").querySelector("#div-explicacao").style.backgroundColor = "transparent";
            resposta.closest(".perguntas").querySelector("#div-explicacao").style.borderRadius = "0";
            resposta.closest(".perguntas").querySelector("#div-explicacao").style.backgroundImage = "none";
            resposta.closest(".perguntas").querySelector("#explicacao").style.color = "#000";

            // Marca a pergunta como "respondida", impedindo de receber mais pontos por ela
            resposta.closest(".perguntas").classList.add("pergunta-respondida");
            paragrafoScore.innerHTML = `Pontuação: ${score}/${divsComRespostas.length}`;

            console.log(`Pontuação: ${score}`);
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
        possiveisRespostas.innerHTML = "";

        // Adiciona as respostas com a nova ordem (aleatória)
        novaOrdemRespostas.forEach((resposta) => {
            possiveisRespostas.appendChild(resposta);
        })

    }
    aleatorizarOrdemRespostas();
});


// Tocar áudio ao escolher alternativa
listaAudios = [
    "respostaCorreta",
    "respostaErrada"
];

const audiosTocaveis = {};

listaAudios.forEach((audio) => {
    audiosTocaveis[audio] = new Audio();
    audiosTocaveis[audio].src = `../Arquivos_pagina_inicial/audios/quiz_halloween/${audio}.mp3`;
});

function tocarAudio(audio) {
    audio.play();

    // Caso o usuário clique várias vezes (antes do áudio acabar)
    if (audio.currentTime != 0) {
        audio.currentTime = 0;
    }
}