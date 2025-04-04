// Se segurar pra pular, ele demora aqueles 1 seg antes de pular infinito, resolver.
// Adicionar moedas colecionáveis?
// adicionar som ao ganhar ponto.


// Áudios
listaAudios = [
    "pular",
    "encostar",
    "omagah"
];

const audiosTocaveis = {};

listaAudios.forEach((audio) => {
    audiosTocaveis[audio] = new Audio();
    audiosTocaveis[audio].src = `../Arquivos_pagina_inicial/audios/jogo_pula_quadrado/${audio}.mp3`;
})

function tocarAudio(nomeAudio) {
    let audio = audiosTocaveis[nomeAudio];

    if (nomeAudio === "encostar") {
        audiosTocaveis["pular"].pause();

        // Adiciona 20% de chance do áudio de encostar ser o "omagah"
        let numeroAleatorio = Math.floor(Math.random() * 10 + 1);

        if (numeroAleatorio > 8) {
            audio = audiosTocaveis["omagah"];
            audio.volume = 0.3
        }
    }

    audio.play();

    // Caso o áudio for solicitado novamente antes de acabar, reiniciar
    if (audio.currentTime != 0) {
        audio.currentTime = 0;
    }
}

// Definindo variáveis
const classeAnimacaoDeslizar = document.querySelector(".animacaoDeslizar");
const textoDificuldadeAtual = document.querySelector("#dificuldade-atual");
const setaRecarregar = document.querySelector("#seta-recarregar");
const personagem = document.querySelector("#personagem");
const obstaculo = document.querySelector("#obstaculo");
const pontos = document.querySelector("#pontos");
const divJogo = document.querySelector("#jogo");
let gameOver = false;
let intervaloDoPulo;


window.onclick = () => {
    if (setaRecarregar.style.display == "block") {
        recarregarJogo();
    }

    else {
        pularPersonagem();
    }
}

window.onkeydown = (teclaPressionada) => {
    // O pulo pode ser iniciado clicar "Espaço, W, Z, ou seta pra cima"
    if (teclaPressionada.code === "Space" || teclaPressionada.code === "KeyW" || teclaPressionada.code === "ArrowUp" || teclaPressionada.code === "KeyZ") {
        pularPersonagem();
    }
}


function pularPersonagem() {
    if (!gameOver) { // Caso o jogo ainda não tenha acabado
        // console.log("INICIANDO PULO")

        // Iniciar animação de pulo somente se o personagem já não estiver pulando
        if (!personagem.classList.contains("animacaoPular")) {
            personagem.classList.add("animacaoPular");
            tocarAudio("pular");
            personagem.style.backgroundImage = "url(img/personagem_pulando.png)";

            intervaloDoPulo = setInterval(() => {
                console.log("FINALIZANDO ANIMAÇÃO DO PULO")
                // Remove a animação de pular após o tempo dela acabar (0.75s)
                personagem.classList.remove("animacaoPular");

                // Retorna o personagem ao estado "feliz" após encostar no chão em segurança
                if (!gameOver) {
                    personagem.style.backgroundImage = "url(img/personagem_feliz.png)";
                }

                clearInterval(intervaloDoPulo);
            }, 750);
        }
    }
}

// "Início do jogo" (começar a enviar obstaculos imediatamente ao abrir a página)
iniciarJogo();

function iniciarJogo() {
    // DIFICULDADES:
    let velocidadeObstaculoPadrao = "deslizarObstaculo 2s linear";           // Padrão
    let velocidadeObstaculoPadraoRapido = "deslizarObstaculo 1.4s linear";   // Padrão + Rápido
    let velocidadeObstaculoRapido = "deslizarObstaculo 0.8s linear";         // Rápido
    let velocidadeObstaculoMuitoRapido = "deslizarObstaculo 0.4s 1s linear"; // Muito rápido
    let velocidadeObstaculoDevagar = "deslizarObstaculo 3s linear";          // Devagar
    let velocidadeObstaculoMuitoDevagar = "deslizarObstaculo 4s linear";     // Muito Devagar

    let listaVelocidades = ["velocidadePadrao", "velocidadePadraoRapida", "velocidadeRapida", "velocidadeMuitoRapida", "velocidadeDevagar", "velocidadeMuitoDevagar"];
    let listaDificuldades = {
        "velocidadePadrao": {
            "velocidade": velocidadeObstaculoPadrao,
            "qtdVezes": 3
        },

        "velocidadePadraoRapida": {
            "velocidade": velocidadeObstaculoPadraoRapido,
            "qtdVezes": 5
        },

        "velocidadeRapida": {
            "velocidade": velocidadeObstaculoRapido,
            "qtdVezes": 8
        },

        "velocidadeMuitoRapida": {
            "velocidade": velocidadeObstaculoMuitoRapido,
            "qtdVezes": 1
        },

        "velocidadeDevagar": {
            "velocidade": velocidadeObstaculoDevagar,
            "qtdVezes": 3
        },

        "velocidadeMuitoDevagar": {
            "velocidade": velocidadeObstaculoMuitoDevagar,
            "qtdVezes": 1
        },
    };

    let velocidadeAleatoria = Math.floor(Math.random() * listaVelocidades.length);
    let qtdVezesRepetir = listaDificuldades[listaVelocidades[velocidadeAleatoria]]["qtdVezes"];
    let velocidadeObstaculo = listaDificuldades[listaVelocidades[velocidadeAleatoria]]["velocidade"];

    let variavelPulosBemSucedidos = 0;
    let repetirAnimacaoXVezes = variavelPulosBemSucedidos + qtdVezesRepetir;

    pontos.innerHTML = `${variavelPulosBemSucedidos}`; // Reseta a pontuação pra 0 toda vez que inicia um novo jogo.
    classeAnimacaoDeslizar.style.animation = "deslizarObstaculo 1s linear"; // O primeiro obstaculo é sempre igual (por minha escolha, talvez eu mude no futuro, aí é só apagar essa linha)

    let intervaloDoDeslizamento = setInterval(() => {

        obstaculo.onanimationend = function finalizarAnimacaoDeslizar() {
            variavelPulosBemSucedidos++;
            pontos.innerHTML = `${variavelPulosBemSucedidos}`; // Aumenta a pontuação a cada pulo pulado (kkkkk)
            // console.log(`Pulos bem sucedidos: ${variavelPulosBemSucedidos}`);

            classeAnimacaoDeslizar.style.animation = "none";
            classeAnimacaoDeslizar.offsetWidth; // Força o navegador a reconhecer que houve uma mudança de estilo, garantindo que a animação reinicie corretamente. 

            // Vai alterando a velocidade do obstaculo conforme o tempo for passando
            if (variavelPulosBemSucedidos < repetirAnimacaoXVezes) {
                classeAnimacaoDeslizar.style.animation = velocidadeObstaculo;

                // Exibe a dificuldade do obstáculo atual
                const listaIconeDificuldade = {
                    [listaVelocidades[0]]: "⚡", 
                    [listaVelocidades[1]]: "⚡⚡", 
                    [listaVelocidades[2]]: "⚡⚡⚡", 
                    [listaVelocidades[3]]: "⚡⚡⚡⚡⚡", 
                    [listaVelocidades[4]]: "🐢", 
                    [listaVelocidades[5]]: "🐢🐢🐢", 
                }

                textoDificuldadeAtual.innerHTML = `${listaIconeDificuldade[listaVelocidades[velocidadeAleatoria]]}`;
            }

            else { // Trocar para outro nível de dificuldade aleatório

                
                // console.log("NOVA VELOCIDADE DE OBSTACULO:\n");
                velocidadeAleatoria = Math.floor(Math.random() * listaVelocidades.length);

                qtdVezesRepetir = listaDificuldades[listaVelocidades[velocidadeAleatoria]]["qtdVezes"];
                repetirAnimacaoXVezes = variavelPulosBemSucedidos + qtdVezesRepetir;

                velocidadeObstaculo = listaDificuldades[listaVelocidades[velocidadeAleatoria]]["velocidade"];
                // console.log(`Até o round: = ${repetirAnimacaoXVezes}`);
                // console.log(`Velocidade:  = ${velocidadeObstaculo}`);

                variavelPulosBemSucedidos--;
                // Diminiu 1 dos pulos bem sucedidos, pois esse trecho de código só roda caso não tenha nenhuma animação definida para o obstaculo, logo ele adiciona +2 pulos sucedidos na tela de "carregamento"
                // Basicamente: recarrega a função com outra animação, e por isso o -1, já que nenhum obstaculo foi pulado, porém o contador aumentou (e agora diminiu pelo variavelPulosBemSucedidos--)
                finalizarAnimacaoDeslizar();
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

            // "pausa" o jogo no frame da derrota
            obstaculo.classList.remove("animacaoDeslizar");
            obstaculo.style.left = `${obstaculoX - divJogoX + obstaculoWidth - 2}px`; // Esse "- 2" é por conta da hitbox que tem alguns px a mais do que aparenta, então ficaria um espaço em branco meio paia

            personagem.style.backgroundImage = `url(img/personagem_morrido.png)`;
            personagem.classList.remove("animacaoPular");
            personagem.style.top = `${personagemY - divJogoY + personagemHeight - 4}px`;

            setaRecarregar.style.display = "block";

            tocarAudio("encostar");
            gameOver = true;

            // Parar de enviar obstaculos
            clearInterval(intervaloDoDeslizamento);
        }
    }, 10);
}


function recarregarJogo() {
    clearInterval(intervaloDoPulo);
    textoDificuldadeAtual.innerHTML = `🤠`;

    obstaculo.classList.add("animacaoDeslizar");
    obstaculo.style.left = "108%";

    personagem.style.backgroundImage = `url(img/personagem_feliz.png)`;
    personagem.style.top = "100%";

    gameOver = false;
    setaRecarregar.style.display = "none";

    iniciarJogo();
}
