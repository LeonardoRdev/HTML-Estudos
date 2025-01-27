// Se segurar pra pular, ele demora aqueles 1 seg antes de pular infinito, resolver.

const divJogo = document.querySelector("#jogo");
const personagem = document.querySelector("#personagem");
const obstaculo = document.querySelector("#obstaculo");
obstaculo.classList.add("animacaoDeslizar");

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

let intervaloDoDeslizamento = setInterval(() => {
    let divJogoX = divJogo.getBoundingClientRect().left;
    
    let personagemY = personagem.getBoundingClientRect().top;
    let personagemX = personagem.getBoundingClientRect().left;
    let personagemWidth = personagem.getBoundingClientRect().width;
    let personagemHeight = personagem.getBoundingClientRect().height;

    let obstaculoY = obstaculo.getBoundingClientRect().top;
    let obstaculoX = obstaculo.getBoundingClientRect().left;
    let obstaculoWidth = obstaculo.getBoundingClientRect().width;


    // Se encostar no obstaculo (tanto por cima quanto dos lados)
    if (obstaculoX < personagemX + personagemWidth && obstaculoX > personagemX - personagemWidth && parseFloat(personagemY + personagemHeight) > obstaculoY) {
        // "pausa" o jogo no frame da derrota
        personagem.style.backgroundColor = "black";
        obstaculo.classList.remove("animacaoDeslizar");
        obstaculo.style.left = `${obstaculoX - divJogoX + obstaculoWidth - 2}px`; // Esse "- 2" é por conta da hitbox que tem alguns px a mais do que aparenta, então ficaria um espaço em branco meio paia

        // Parar de enviar obstaculos
        clearInterval(intervaloDoDeslizamento);
    }
    
    // Caso não esteja enconstando (serve basicamente pra resetar a cor pra padrão após)
    else {
        // (não serve mais por conta do ClearInterval() ao encostar no obstaculo, ainda vou ver se vou precisar disso mais tarde)
        personagem.style.backgroundColor = "brown";
    }

}, 1);
