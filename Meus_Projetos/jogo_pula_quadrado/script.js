// Ao reiniciar jogo, clicar na seta de reiniciar faz o personagem já começar pulando.
// Se segurar pra pular, ele demora aqueles 1 seg antes de pular infinito, resolver.
// Adicionar sons.

const divJogo = document.querySelector("#jogo");
const personagem = document.querySelector("#personagem");
const obstaculo = document.querySelector("#obstaculo");
obstaculo.classList.add("animacaoDeslizar");
const setaRecarregar = document.querySelector("#seta-recarregar");
// setaRecarregar.style.display = "none";
let gameOver = false;

setaRecarregar.onclick = () => {
    recarregarJogo();
}

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
    console.log(`Pular personagem\nGAME OVER -> ${gameOver}`)
    if (!gameOver) { // Caso o jogo ainda não tenha acabado
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
}

// "Início do jogo" (começar a enviar obstaculos imediatamente ao abrir a página)
iniciarJogo();

function iniciarJogo() {
    let intervaloDoDeslizamento = setInterval(() => {
        let divJogoX = divJogo.getBoundingClientRect().left;
        let divJogoY = divJogo.getBoundingClientRect().top;

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
            obstaculo.classList.remove("animacaoDeslizar");
            obstaculo.style.left = `${obstaculoX - divJogoX + obstaculoWidth - 2}px`; // Esse "- 2" é por conta da hitbox que tem alguns px a mais do que aparenta, então ficaria um espaço em branco meio paia

            personagem.style.backgroundColor = "black";
            personagem.classList.remove("animacaoPular");
            personagem.style.top = `${personagemY - divJogoY + personagemHeight - 4}px`;

            setaRecarregar.style.display = "block";

            gameOver = true;

            // Parar de enviar obstaculos
            clearInterval(intervaloDoDeslizamento);
        }
    }, 1);
}


function recarregarJogo() {
    obstaculo.classList.add("animacaoDeslizar");
    obstaculo.style.left = "108%"

    personagem.style.backgroundColor = "brown";
    personagem.style.top = "100%"

    gameOver = false;
    setaRecarregar.style.display = "none";

    iniciarJogo();
}
