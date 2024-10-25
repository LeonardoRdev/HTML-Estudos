respostas = document.querySelectorAll(".resposta");

respostas.forEach((resposta) => {
    console.log(resposta)
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
})