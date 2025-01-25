// Se segurar pra pular, ele demora aqueles 1 seg antes de pular infinito, resolver.

const personagem = document.querySelector("#personagem");
const obstaculo = document.querySelector("#obstaculo");

window.onclick = () => {
    pularPersonagem();
}

window.onkeydown = (teclaPressionada) => {
    // O pulo pode ser iniciado clicar "Espaço, W, Z, ou seta pra cima"
    if (teclaPressionada.code === "Space" || teclaPressionada.code === "KeyW" || teclaPressionada.code === "ArrowUp" || teclaPressionada.code === "KeyZ") {
        pularPersonagem();

    }
}

function pularPersonagem() {
        // Iniciar animação de pulo somente se o personagem já não estiver pulando
        if (!personagem.classList.contains("animacaoPular")) {
            personagem.classList.add("animacaoPular");

            intervaloDoPulo = setInterval(() => {
                // Remove a animação de pular após o tempo dela acabar (0.75s)
                personagem.classList.remove("animacaoPular");
                clearInterval(intervaloDoPulo);
            }, 750);
        }

}

setInterval(() => {
    let personagemY = personagem.getBoundingClientRect().top;
    let personagemX = personagem.getBoundingClientRect().left;
    let personagemWidth = personagem.getBoundingClientRect().width;
    let personagemHeight = personagem.getBoundingClientRect().height;

    let obstaculoY = obstaculo.getBoundingClientRect().top;
    let obstaculoX = obstaculo.getBoundingClientRect().left;

    // Se encostar no obstaculo (tanto por cima quanto dos lados)
    if (obstaculoX < personagemX + personagemWidth && obstaculoX > personagemX - personagemWidth && parseFloat(personagemY + personagemHeight) > obstaculoY) {
        personagem.style.backgroundColor = "black";
    }
    
    // Caso não esteja enconstando (serve basicamente pra resetar a cor pra padrão após)
    else {
        personagem.style.backgroundColor = "brown";
    }

}, 10)
