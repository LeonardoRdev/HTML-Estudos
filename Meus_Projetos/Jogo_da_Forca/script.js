// TELA INICIAL

var botaoJogar = document.querySelector("#botao-jogar");
var menuOpcoes = document.querySelector("#menu-opcoes");
var telaInicial = document.querySelector("main #tela-inicial");
var interfaceJogo = document.querySelector("main #interface-jogo");
botaoJogar.addEventListener("click", () => { // BOTAO JOGAR
    var tentativas = 6;

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
        jogadorUmTituloInput.style.fontSize = "2.1em";
        jogadorUmTituloInput.style.color = "#E0B02F";
        jogadorUmTituloInput.style.textShadow = "1px 1px 2px #000";
        labelPalavraSecreta.style.fontSize = "1.5em";
        labelPalavraSecreta.style.color = "#fff";
        labelPalavraSecreta.style.marginBottom = "0.15em";
        labelPalavraSecreta.style.textShadow = "3px 3px 4px #000A";
        inputPalavraSecreta.style.fontSize = "1.8em";
        inputPalavraSecreta.style.padding = " 0.2em 0 0.2em 0.3em";
        inputPalavraSecreta.style.marginTop = ".2em";


        // Botão "Começar Jogo"
        botaoComecarJogo.addEventListener("click", () => {
            const inputPalavraSecreta = document.querySelector("#input-palavra-secreta");
            // A palavra secreta é transformada em maiúscula, não tem acentos, os espaços antes e depois da palavra são removidos, os espaços são trocados por "-", e é transformado em um array:
            var arrayPalavraSecreta = inputPalavraSecreta.value.toUpperCase().normalize("NFD").trim().replace(/[\u0300-\u036f]/g, "").replace(/ /g, "-").split('');

            var progressoPalavraSecreto = arrayPalavraSecreta.slice();
            let listaChutesErrados = [];

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

            telaInicial.style.display = "none";
            interfaceJogo.style.display = "flex";


            // Botão enviar (chute)
            const botaoEnviar = document.querySelector("#enviar");
            botaoEnviar.addEventListener("click", () => {
                const inputChute = document.querySelector("#chute");

                // FAZER CONDIÇÃO, se letra estiver na palavra secreta OU palavra secreta inteira estiver correta.

                let temNaPalavra = false;
                // Verifica se a palavra não é um espaço vazio: " ";
                // função trim() -> remove os espaços antes e depois da palavra digitada, para evitar erros.
                if (inputChute.value.toUpperCase().replace(/\s/g, "").trim() !== "") {
                    for (let i in arrayPalavraSecreta) {
                        if (arrayPalavraSecreta[i] == inputChute.value.toUpperCase().trim()) {
                            progressoPalavraSecreto[i] = inputChute.value.toUpperCase().trim();
                            console.log("Tem na palavra!\n");
                            temNaPalavra = true;
                        }
                    }

                    // CASO ERRAR:
                    console.log(`TEM_NA_PALAVRA: ${temNaPalavra}\n`)
                    if (temNaPalavra == false) {
                        let chutesErrados = document.querySelector("#chutes-errados p");

                        // Caso a palavra chutada tenha sido chutada erroniamente pela 1° vez:
                        if (listaChutesErrados.indexOf(inputChute.value.toUpperCase().trim()) === -1 ) {
                            listaChutesErrados.push(inputChute.value.toUpperCase().trim());

                            // Lista de chute em uma única variável String:
                            let varTodosChutesErrados = "";
                            for (chute of listaChutesErrados) {
                                varTodosChutesErrados += `${chute} | `;
                            }

                            chutesErrados.innerHTML = `${varTodosChutesErrados}`;

                            console.log("Não tem na palavra\n");
                            let ilustracaoForca = document.querySelector("#ilustracao-forca img");
    
                            // (tentativas-7) * -1) faz com que o contador suba em vez de descer: 1, 2, 3... até 6.
                            ilustracaoForca.setAttribute("src", `imagens/forca${(tentativas - 7) * -1}.png`)
                            ilustracaoForca.setAttribute("alt", `forca ${(tentativas - 7) * -1}/6`)
                            tentativas--;
                        }

                    }
                }
                else {
                    console.log("Usuário tentou enviar ' ' ");
                }

                // Se acabarem as tentativas:
                if (tentativas == 0) {
                    const underlinePalavraEscondida = document.querySelector("#underline-palavra-escondida");
                    let respostaPalavraSecreta = "";

                    for (letra of arrayPalavraSecreta) {
                        respostaPalavraSecreta += `${letra} `;
                    }

                    underlinePalavraEscondida.innerHTML = respostaPalavraSecreta;
                    underlinePalavraEscondida.style.color = "#e82e3e";
                    let inputChuteDiv = document.querySelector("#input-chute");
                    inputChuteDiv.style.display = "none";
                    fimDeJogo = document.querySelector("#fim-de-jogo");
                    fimDeJogo.style.display = "flex";
                }

                console.log(progressoPalavraSecreto);
                let palavraSecretaCompleta = "";
                for (let caractere of progressoPalavraSecreto) {
                    palavraSecretaCompleta += `${caractere} `;
                }

                if (tentativas != 0) {
                    const underlinePalavraEscondida = document.querySelector("#underline-palavra-escondida");
                    underlinePalavraEscondida.innerHTML = palavraSecretaCompleta;
                }


                // Se descobrir a palavra toda (vencer):
                console.log(`Palavra secreta: ${inputPalavraSecreta.value.toUpperCase()}`)
                console.log('Digitada: ' + inputChute.value.toUpperCase().replace(/\s/g, ""));

                if (progressoPalavraSecreto.indexOf("_ ") === -1 || inputPalavraSecreta.value.toUpperCase() == inputChute.value.toUpperCase().replace(/\s/g, "")) {
                    let inputChuteDiv = document.querySelector("#input-chute");
                    inputChuteDiv.style.display = "none";
                    fimDeJogo = document.querySelector("#fim-de-jogo");
                    fimDeJogo.style.display = "flex";
                    fimDeJogoH2 = document.querySelector("#fim-de-jogo h2");
                    fimDeJogoH2.innerHTML = "😎 Você Venceu! 😁";
                    fimDeJogoParagrafo = document.querySelector("#fim-de-jogo p");
                    fimDeJogoParagrafo.innerHTML = "Parabéns por adivinhar a palavra!";
                
                    // Imagem da forca de vitória:
                    let ilustracaoForca = document.querySelector("#ilustracao-forca img");
                    ilustracaoForca.setAttribute("src", `imagens/forca_salvado.png`)
                    ilustracaoForca.setAttribute("alt", `Menino fora da forca e sorridente`)


                    // Se vencer por chutar a palavra inteira, mostrar a palavra:
                    let respostaPalavraSecreta = "";
                    for (letra of arrayPalavraSecreta) {
                        respostaPalavraSecreta += `${letra} `;
                    }
                    underlinePalavraEscondida.innerHTML = respostaPalavraSecreta;

                    // E não marcar a palavra chutada como erro:
                    let chutesErrados = document.querySelector("#chutes-errados p");
                    
                    let varTodosChutesErrados = "";
                    listaChutesErrados.pop();
                    for (chute of listaChutesErrados) {
                        varTodosChutesErrados += `${chute} | `;
                    }

                    chutesErrados.innerHTML = `${varTodosChutesErrados}`;
                }

                inputChute.value = "";
            });

        });

        // Botão para voltar para a página inicial:
        const botaoJogarNovamente = document.querySelector("#jogar-novamente");
        botaoJogarNovamente.addEventListener('click', () => {
            window.location.reload();
        })

    });

});





// Para o form não atualizar a página
const formChutarPalavra = document.querySelector("#form-chutar-palavra");
cancelarEnvioFormulario(formChutarPalavra);

function cancelarEnvioFormulario(form) {
    form.addEventListener('submit', e => {
        e.preventDefault();
    });
}