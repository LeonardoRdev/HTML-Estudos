// FAZER:
// Ao clicar em qualquer botão, iniciar o jogo. Trocar a seta de voltar página por uma de recarregar a página
// O primeiro timer do intervalo não mostra nenhuma palavra, só depois do "tempoEntrePalavras" passar.
// Estilização: radiante circular com cinza no meio e branco dos lados
// "reroll" caso a próxima palavra tenha o mesmo nome e mesma cor da anterior (usar while)

// Variáveis
const setaVoltarPagina = document.querySelector("#seta-voltar-pagina");
const headerConfiguracoes = document.querySelector("header");
const botaoAjuda = document.querySelector("#botao-configuracao-ajuda");
const divMenuAjuda = document.querySelector("#menu-de-ajuda");

// Lista com cores que apareceram (tanto seus nomes quantos as respectivas cores em hexadecimal)
const listaNomeCores = [
    "VERMELHO",
    "AMARELO",
    "PRETO",
    "VERDE",
    "ROXO",
    "AZUL",
    "ROSA",
    "MARROM"
];

const listaHexadecimalCores = [
    "#ff1212",  // Vermelho
    "#faf32a",  // Amarelo
    "#000",     // Preto
    "#3cdb37", // Verde
    "#ab29d6",  // Roxo
    "#0c7ded",  // Azul
    "#ff0084",  // Rosa
    "#572d15"   // Marrom
];

// Botões de dificuldade
const divConfiguracaoDificuldade = document.querySelector("#configuracao-dificuldade");
const botaoDificuldadeFacil = document.querySelector("#botao-dificuldade-facil");
const botaoDificuldadeMedio = document.querySelector("#botao-dificuldade-medio");
const botaoDificuldadeDificil = document.querySelector("#botao-dificuldade-dificil");

botaoDificuldadeFacil.onclick = () => {
    iniciarJogo(3, 15);
}

botaoDificuldadeMedio.onclick = () => {
    iniciarJogo(1, 25);
}

botaoDificuldadeDificil.onclick = () => {
    iniciarJogo(0.5, 40);
}

// Função que inicia o "jogo"
function iniciarJogo(tempoEntrePalavras, quantidadePalavras) {
    // Ir para a tela do jogo
    telaDoJogo(true);

    let repeticoes = 0;
    const palavraDaVez = document.querySelector("#palavra-da-vez");
    palavraDaVez.innerHTML = "PREPARE-SE"


    // Inicia o intervalo com as palavras
    const intervalo = setInterval(() => {
        // Lógica para alterar as palavras e cores
        palavraDaVez.innerHTML = listaNomeCores[Math.floor(Math.random() * listaNomeCores.length)];
        palavraDaVez.style.color = listaHexadecimalCores[Math.floor(Math.random() * listaHexadecimalCores.length)];

        // Contagem das repetições
        repeticoes++;
        console.log(`Repetições ${repeticoes}`)

        // Termina o intervalo após x repetições
        if (repeticoes >= quantidadePalavras) {
            clearInterval(intervalo);
            palavraDaVez.innerHTML = "";
            telaDoJogo(false);
        }

    }, tempoEntrePalavras * 1000);
}

function telaDoJogo(entrarNoJogo) {
    // Se for iniciar o jogo, esconder a tela inicial
    if (entrarNoJogo) {
        divConfiguracaoDificuldade.style.display = "none";
        setaVoltarPagina.style.display = "none";
        headerConfiguracoes.style.display = "none";
    }

    // Caso termine o jogo
    else {
        divConfiguracaoDificuldade.style.display = "flex";
        setaVoltarPagina.style.display = "block";
        headerConfiguracoes.style.display = "block";
    }
}

// Botão de ajuda "?"
botaoAjuda.onclick = () => {
    // Abrir menu
    if (divMenuAjuda.style.display == "flex") {
        divMenuAjuda.style.display = "none";
        divConfiguracaoDificuldade.style.display = "flex";
    }

    // Fechar menu
    else {
        divMenuAjuda.style.display = "flex";
        divConfiguracaoDificuldade.style.display = "none";
    }
}
