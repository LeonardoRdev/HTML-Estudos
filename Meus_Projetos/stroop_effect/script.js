// FAZER:
// Ao clicar em qualquer botão, iniciar o jogo. Trocar a seta de voltar página por uma de recarregar a página
// O primeiro timer do intervalo não mostra nenhuma palavra, só depois do "tempoEntrePalavras" passar.

const setaVoltarPagina = document.querySelector("#seta-voltar-pagina");
const headerConfiguracoes = document.querySelector("header");

console.log(Math.floor(Math.random() * 3));

// Lista com cores que apareceram (tanto seus nomes quantos as respectivas cores em hexadecimal)
const listaNomeCores = [
    "VERMELHO",
    "AMARELO",
    "PRETO",
    "VERDE",
    "ROXO",
    "AZUL",
];

const listaHexadecimalCores = [
    "#ff1212",  // Vermelho
    "#faf32a",  // Amarelo
    "#000",     // Preto
    "##3cdb37", // Verde
    "#ab29d6",  // Roxo
    "#19c1e3"   // Azul
];

// Botões de dificuldade
const divConfiguracaoDificuldade = document.querySelector("#configuracao-dificuldade");
const botaoDificuldadeFacil = document.querySelector("#botao-dificuldade-facil");
const botaoDificuldadeMedio = document.querySelector("#botao-dificuldade-medio");
const botaoDificuldadeDificil = document.querySelector("#botao-dificuldade-dificil");

botaoDificuldadeFacil.onclick = () => {
    iniciarJogo(3);
}

botaoDificuldadeMedio.onclick = () => {
    iniciarJogo(1);
}

botaoDificuldadeDificil.onclick = () => {
    iniciarJogo(0.5);
}

// Função que inicia o "jogo"
function iniciarJogo(tempoEntrePalavras) {
    // Ir para a tela do jogo
    telaDoJogo(true);

    let repeticoes = 0;

    // Inicia o intervalo com as palavras
    const intervalo = setInterval(() => {
        // Lógica para alterar as palavras e cores
        const palavraDaVez = document.querySelector("#palavra-da-vez");
        palavraDaVez.innerHTML = listaNomeCores[Math.floor(Math.random() * listaNomeCores.length)];
        palavraDaVez.style.color = listaHexadecimalCores[Math.floor(Math.random() * listaHexadecimalCores.length)];

        // Contagem das repetições
        repeticoes++;
        console.log(`Repetições ${repeticoes}`)
        // console.log(`Passou ${tempoEntrePalavras} segundo(s)`);

        // Termina o intervalo após 10 repetições
        if (repeticoes >= 10) {
            clearInterval(intervalo);
            palavraDaVez.innerHTML = "";
            telaDoJogo(false);
        }

    }, tempoEntrePalavras * 1000);
}

function telaDoJogo(entrarNoJogo) {
    // Se for iniciar o jogo
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
