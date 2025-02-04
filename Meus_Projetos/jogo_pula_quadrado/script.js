// BUG: Se você clicar muito desesperadamente pra reiniciar o jogo, o boneco fica meio que resetando o pulo.

// Ao reiniciar jogo, clicar na seta de reiniciar faz o personagem já começar pulando.
// Se segurar pra pular, ele demora aqueles 1 seg antes de pular infinito, resolver.
// Dificultar o jogo a cada x segundos. Fazer ser aleatório, replayability
// Colocar moedas aleatórias?
// Adicionar sons.

const pontos = document.querySelector("#pontos");
const divJogo = document.querySelector("#jogo");
const personagem = document.querySelector("#personagem");
const obstaculo = document.querySelector("#obstaculo");
obstaculo.classList.add("animacaoDeslizar");
const classeAnimacaoDeslizar = document.querySelector(".animacaoDeslizar");
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
    if (setaRecarregar.style.display == "block") {
        recarregarJogo();
    }

    // O pulo pode ser iniciado clicar "Espaço, W, Z, ou seta pra cima"
    if (teclaPressionada.code === "Space" || teclaPressionada.code === "KeyW" || teclaPressionada.code === "ArrowUp" || teclaPressionada.code === "KeyZ") {
        pularPersonagem();
    }
}

function pularPersonagem() {
    if (!gameOver) { // Caso o jogo ainda não tenha acabado
        console.log("RODANDO PULO.........")
        // Iniciar animação de pulo somente se o personagem já não estiver pulando
        if (!personagem.classList.contains("animacaoPular")) {
            personagem.classList.add("animacaoPular");

            let intervaloDoPulo = setInterval(() => {
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
    // DIFICULDADES:
    let velocidadeObstaculoRapido = "deslizarObstaculo 0.8s linear";        // Padrão
    let velocidadeObstaculoPadrao = "deslizarObstaculo 2s linear";          // Rápido
    let velocidadeObstaculoPadraoRapido = "deslizarObstaculo 1.4s linear";  // Devagar
    let velocidadeObstaculoDevagar = "deslizarObstaculo 3s linear";         // Muito Devagar
    let velocidadeObstaculoMuitoDevagar = "deslizarObstaculo 4s linear";    // Quase pouco rápido

    let listaVelocidades = [velocidadeObstaculoRapido, velocidadeObstaculoPadrao, velocidadeObstaculoPadraoRapido, velocidadeObstaculoDevagar, velocidadeObstaculoMuitoDevagar]; // Lista com os "leveis" (cada level muda a velocidade dos obstaculos)
    // let velocidadAleatoria = Math.floor(Math.random() * listaVelocidades.length);
    // let velocidadeObstaculo = listaVelocidades[velocidadAleatoria];

    let variavelPulosBemSucedidos = 0;
    pontos.innerHTML = `${variavelPulosBemSucedidos}`; // Reseta a pontuação pra 0;
    classeAnimacaoDeslizar.style.animation = "deslizarObstaculo 2s linear"; // O primeiro obstaculo é sempre igual

    let intervaloDoDeslizamento = setInterval(() => {

        obstaculo.onanimationend = () => {
            variavelPulosBemSucedidos++;
            pontos.innerHTML = `${variavelPulosBemSucedidos}`; // Aumenta a pontuação a cada pulo pulado (kkkkk)
            console.log(`Pulos bem sucedidos: ${variavelPulosBemSucedidos}`);

            classeAnimacaoDeslizar.style.animation = "none";
            classeAnimacaoDeslizar.offsetWidth; // Força o navegador a reconhecer que houve uma mudança de estilo, garantindo que a animação reinicie corretamente. 

            // Vai alterando a velocidade do obstaculo conforme o tempo for passando

            // PROBLEMA: CADA OBSTACULO ESTÁ ATUALMENTE VINDO ALEATÓRIO, JÁ QUE A CADA EXECUÇÃO É ALEATORIZADO UMA NOVA VELOCIDADE
            if (variavelPulosBemSucedidos < 2) { // Muda a velocidade do obstaculo até a condição não ser verdadeira
                let velocidadAleatoria = Math.floor(Math.random() * listaVelocidades.length);
                let velocidadeObstaculo = listaVelocidades[velocidadAleatoria];

                classeAnimacaoDeslizar.style.animation = velocidadeObstaculo;
            }

            else if (variavelPulosBemSucedidos < 10) {
                let velocidadAleatoria = Math.floor(Math.random() * listaVelocidades.length);
                let velocidadeObstaculo = listaVelocidades[velocidadAleatoria];

                classeAnimacaoDeslizar.style.animation = velocidadeObstaculo;
            }

            else if (variavelPulosBemSucedidos < 13) {
                let velocidadAleatoria = Math.floor(Math.random() * listaVelocidades.length);
                let velocidadeObstaculo = listaVelocidades[velocidadAleatoria];

                classeAnimacaoDeslizar.style.animation = velocidadeObstaculo;
            }

            else if (variavelPulosBemSucedidos < 14) {
                let velocidadAleatoria = Math.floor(Math.random() * listaVelocidades.length);
                let velocidadeObstaculo = listaVelocidades[velocidadAleatoria];

                classeAnimacaoDeslizar.style.animation = velocidadeObstaculo;
            }

            else if (variavelPulosBemSucedidos >= 14) { // Continua infinitamente em uma boa velocidade
                classeAnimacaoDeslizar.style.animation = "deslizarObstaculo 1.5s linear";
            }
        }


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
            classeAnimacaoDeslizar.style.animation = "none";
            // alert("TÁ RORANDO")
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
    }, 10);
}


function recarregarJogo() {
    obstaculo.classList.add("animacaoDeslizar");
    obstaculo.style.left = "108%";

    personagem.style.backgroundColor = "brown";
    personagem.style.top = "100%";

    gameOver = false;
    setaRecarregar.style.display = "none";

    iniciarJogo();
}
