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
            <h3>Jogador 1</h3>
            <form id="form-palavra-secreta">
                <label for="palavra-secreta">Digite a palavra secreta:</label>
                <input id="palavra-secreta" name="palavra-secreta" placeholder="Ex: esqueleto"></input>
                <button id="botao-comecar-jogo">Começar Jogo</button>
            </form>`

            const formPalavraSecreta = document.querySelector("#form-palavra-secreta");
            const botaoComecarJogo = document.querySelector("#botao-comecar-jogo");
            cancelarEnvioFormulario(formPalavraSecreta); // Previne o form de atualizar a página

            formPalavraSecreta.style.display = "flex";
            formPalavraSecreta.style.flexDirection = "column";
            botaoComecarJogo.style.marginTop = "2em";

            // Botão "Começar Jogo"
            botaoComecarJogo.addEventListener("click", () => {
                telaInicial.style.display = "none";
                interfaceJogo.style.display = "flex";
            })
        })

});




// Para o form não atualizar a página
const formChutarPalavra = document.querySelector("#form-chutar-palavra");
cancelarEnvioFormulario(formChutarPalavra);

function cancelarEnvioFormulario(form) {
    form.addEventListener('submit', e => {
        e.preventDefault();
    });
}

// Botão enviar (chute)
const botaoEnviar = document.querySelector("#enviar");
botaoEnviar.addEventListener("click", () => {
    alert("enviado");
});
