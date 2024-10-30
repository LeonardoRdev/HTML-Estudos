const divsComRespostas = document.querySelectorAll(".respostas");
divsComRespostas.forEach((possiveisRespostas) => {

    const respostas = possiveisRespostas.querySelectorAll(".resposta");
    let arrayRespostas = [];
    
    respostas.forEach((resposta, index) => {
    
        // Aleatoriza a ordem das respostas
        arrayRespostas[index] = resposta;
    

        // Função ao clicar em alguma resposta
        resposta.onclick = () => {
    
            // Ao chutar pela primeira vez, revelar a explicação da resposta
            resposta.closest(".perguntas").querySelector("#div-explicacao").style.backgroundColor = "transparent";
            resposta.closest(".perguntas").querySelector("#div-explicacao").style.borderRadius = "0";
            resposta.closest(".perguntas").querySelector("#div-explicacao").style.backgroundImage = "none";
            resposta.closest(".perguntas").querySelector("#explicacao").style.color = "#000";
    
            // Caso acertar a resposta
            if (resposta.id === "resposta1") {
                resposta.style.backgroundColor = "#0f08";
            }
    
            // Caso errar a resposta
            else {
                resposta.style.backgroundColor = "#f00B";
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
        possiveisRespostas.innerHTML = "";

        // Adiciona as respostas com a nova ordem (aleatória)
        novaOrdemRespostas.forEach((resposta) => {
            possiveisRespostas.appendChild(resposta);
        })

    }
    aleatorizarOrdemRespostas();
});
