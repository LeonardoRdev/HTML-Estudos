// TELA INICIAL
const botaoJogar = document.querySelector("#botao-jogar");
const menuOpcoes = document.querySelector("#menu-opcoes");
const telaInicial = document.querySelector("main #tela-inicial");
const interfaceJogo = document.querySelector("main #interface-jogo");
botaoJogar.addEventListener("click", () => { // BOTAO JOGAR
    menuOpcoes.innerHTML = `
    <button id="um-jogador">1 JOGADOR</button>
    <button id="dois-jogadores">2 JOGADORES</button>`;
        const umJogador = document.querySelector("#um-jogador");
        const doisJogadores = document.querySelector("#dois-jogadores");

        umJogador.addEventListener("click", () => { // Botão "1 jogador"
            alert("EM DESENVOLVIMENTO...");
        });

        doisJogadores.addEventListener("click", () => { // Botão "2 Jogadores"
            menuOpcoes.innerHTML = `
            <h3 id="jogador-um-titulo-input">Jogador 1</h3>
            <form id="form-palavra-secreta">
                <label for="input-palavra-secreta" id="label-palavra-secreta">Digite a palavra secreta:</label>
                <input id="input-palavra-secreta" name="palavraSecreta" placeholder="Ex: esqueleto" autocomplete="off"></input>
                <button id="botao-comecar-jogo">Começar Jogo</button>
            </form>`

            const formPalavraSecreta = document.querySelector("#form-palavra-secreta");
            cancelarEnvioFormulario(formPalavraSecreta); // Previne o form de atualizar a página
            const botaoComecarJogo = document.querySelector("#botao-comecar-jogo");
            const jogadorUmTituloInput = document.querySelector("#jogador-um-titulo-input");
            const labelPalavraSecreta = document.querySelector("#label-palavra-secreta");
            const inputPalavraSecreta = document.querySelector("#input-palavra-secreta");

            formPalavraSecreta.style.display = "flex";
            formPalavraSecreta.style.flexDirection = "column";
            formPalavraSecreta.style.alignItems = "center";
            botaoComecarJogo.style.marginTop = "2.5em";
            jogadorUmTituloInput.style.fontSize = "2em";
            jogadorUmTituloInput.style.color = "#E0B02F";
            jogadorUmTituloInput.style.textShadow = "1px 1px 2px #000";
            labelPalavraSecreta.style.fontSize = "1.5em";
            inputPalavraSecreta.style.fontSize = "1.8em";
            inputPalavraSecreta.style.padding = " 0.2em 0 0.2em 0.3em";
            inputPalavraSecreta.style.marginTop = ".2em";

            // Botão "Começar Jogo"
            botaoComecarJogo.addEventListener("click", () => {
                salvarPalavraSecreta(inputPalavraSecreta.value);
                telaInicial.style.display = "none";
                interfaceJogo.style.display = "flex";
            })

            // Botão enviar (chute)
            const botaoEnviar = document.querySelector("#enviar");
            botaoEnviar.addEventListener("click", () => {
                const inputChute = document.querySelector("#chute");
                // FAZER CONDIÇÃO, letra estiver na palavra secreta OU palavra secreta inteira.
                
                let arrayPalavraSecreta = inputPalavraSecreta.value.split('');
                let progressoPalavraSecreto = arrayPalavraSecreta.slice();
                for (let i in progressoPalavraSecreto) {
                    progressoPalavraSecreto[i] = "_ ";
                }

                for (let i in arrayPalavraSecreta) {
                    if (arrayPalavraSecreta[i] == inputChute.value) {
                        alert("FOI IGUAL");
                        progressoPalavraSecreto[i] = inputChute.value;
                    }
                }
                console.log(progressoPalavraSecreto);
                let palavraSecretaCompleta = "";
                for (let caractere of progressoPalavraSecreto) {
                    palavraSecretaCompleta += caractere;
                }
                const underlinePalavraEscondida = document.querySelector("#underline-palavra-escondida");
                underlinePalavraEscondida.innerHTML = palavraSecretaCompleta;
                inputChute.value = "";    
            });

        })

});

// Função para salvar a palvra secreta e criar o "_ _ _ _ _ _"
function salvarPalavraSecreta(palavraSecreta) {
    let arrayPalavraSecreta = palavraSecreta.split('');
    let progressoPalavraSecreto = arrayPalavraSecreta.slice();
    for (let i in progressoPalavraSecreto) {
        progressoPalavraSecreto[i] = "_ ";
    }
    function percorrerPalavraSecreta() {
        let palavraSecretaCompleta = "";
        for (let caractere of progressoPalavraSecreto) {
            palavraSecretaCompleta += caractere;
        }
        return palavraSecretaCompleta;
    }
    const underlinePalavraEscondida = document.querySelector("#underline-palavra-escondida");
    underlinePalavraEscondida.innerHTML = percorrerPalavraSecreta();
}


// Para o form não atualizar a página
const formChutarPalavra = document.querySelector("#form-chutar-palavra");
cancelarEnvioFormulario(formChutarPalavra);

function cancelarEnvioFormulario(form) {
    form.addEventListener('submit', e => {
        e.preventDefault();
    });
}