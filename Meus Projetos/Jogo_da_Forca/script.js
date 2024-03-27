// Botão JOGAR
const botaoJogar = document.querySelector("#botao-jogar");
const telaInicial = document.querySelector("main #tela-inicial");
const interfaceJogo = document.querySelector("main #interface-jogo");
botaoJogar.addEventListener("click", () => {
    telaInicial.style.display = "none";
    interfaceJogo.style.display = "flex";
});




// Para o form não atualizar a página
const form = document.querySelector("form");
form.addEventListener('submit', e => {
    e.preventDefault();
});

// Botão enviar (chute)
const botaoEnviar = document.querySelector("#enviar");
botaoEnviar.addEventListener("click", () => {
    alert("enviado");
});
