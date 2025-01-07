// FAZER:
// Ao clicar em qualquer botão, iniciar o jogo. Trocar a seta de voltar página por uma de recarregar a página;
// O primeiro timer do intervalo não mostra nenhuma palavra, só depois do "tempoEntrePalavras" passar;
// Estilização: radiante circular com cinza no meio e branco dos lados;
// "reroll" caso a próxima palavra tenha o mesmo nome e mesma cor da anterior (usar while);
// Agora falta trocar o idioma do "ajuda" -> (?).


// Variáveis
const setaVoltarPagina = document.querySelector("#seta-voltar-pagina");
const headerConfiguracoes = document.querySelector("header");
const botaoAjuda = document.querySelector("#botao-configuracao-ajuda");
const divMenuAjuda = document.querySelector("#menu-de-ajuda");
let idiomaPagina = "brasil";
let menuLinguasAberto = false;

// Lista com cores que apareceram (tanto seus nomes quantos as respectivas cores em hexadecimal)
// const listaNomeCores = [
//     "VERMELHO",
//     "AMARELO",
//     "PRETO",
//     "VERDE",
//     "ROXO",
//     "AZUL",
//     "ROSA",
//     "MARROM"
// ];

const listaNomeDificuldades = {
    brasil: ["Fácil", "Médio", "Difícil"],
    espanha: ["Fácil", "Medio", "Difícil"],
    japones: ["簡単", "中級", "難しい"], // Kantan, Chūkyū, Muzukashii
    franca: ["Facile", "Moyen", "Difficile"],
    arabe: ["سهل", "متوسط", "صعب"], // Sahal, Mutawaset, Sa'b
    china: ["简单", "中等", "困难"], // Jiǎndān, Zhōngděng, Kùnnán
    eua: ["Easy", "Medium", "Hard"]
}

const listaNomePreparese = {
    brasil: "PREPARE-SE",
    espanha: "PREPÁRATE",
    japones: "準備してください", // Junbi shite kudasai
    franca: "PRÉPAREZ-VOUS",
    arabe: "استعد", // Ista'id
    china: "准备好", // Zhǔnbèi hǎo
    eua: "PREPARE YOURSELF"
};

const listaNomeCores = {
    brasil: ["VERMELHO", "AMARELO", "PRETO", "VERDE", "ROXO", "AZUL", "ROSA", "MARROM"],
    espanha: ["ROJO", "AMARILLO", "NEGRO", "VERDE", "MORADO", "AZUL", "ROSA", "MARRÓN"],
    japones: ["赤", "黄色", "黒", "緑", "紫", "青", "ピンク", "茶色"], // Aka, Kiiro, Kuro, Midori, Murasaki, Ao, Pinku, Chairo
    franca: ["ROUGE", "JAUNE", "NOIR", "VERT", "VIOLET", "BLEU", "ROSE", "MARRON"],
    arabe: ["أحمر", "أصفر", "أسود", "أخضر", "أرجواني", "أزرق", "وردي", "بني"], // Ahmar, Asfar, Aswad, Akhdar, Urjuwani, Azraq, Wardi, Bunni
    china: ["红色", "黄色", "黑色", "绿色", "紫色", "蓝色", "粉色", "棕色"], // Hóngsè, Huángsè, Hēisè, Lǜsè, Zǐsè, Lánsè, Fěnsè, Zōngsè
    eua: ["RED", "YELLOW", "BLACK", "GREEN", "PURPLE", "BLUE", "PINK", "BROWN"]
};


const listaHexadecimalCores = [
    "#ff1212",  // Vermelho
    "#faf32a",  // Amarelo
    "#000",     // Preto
    "#3cdb37",  // Verde
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
    iniciarJogo(0.7, 40);
}


// Função que inicia o "jogo"
function iniciarJogo(tempoEntrePalavras, quantidadePalavras) {
    // Ir para a tela do jogo
    telaDoJogo(true);

    let repeticoes = 0;
    const palavraDaVez = document.querySelector("#palavra-da-vez");
    palavraDaVez.innerHTML = listaNomePreparese[idiomaPagina];


    // Inicia o intervalo com as palavras
    const intervalo = setInterval(() => {
        // Lógica para alterar as palavras e cores

        palavraDaVez.innerHTML = listaNomeCores[idiomaPagina][Math.floor(Math.random() * listaNomeCores[idiomaPagina].length)];
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
    botaoAjuda.style.animation = "none";

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


// Botão de lingua "bandeiras"
const listaBandeiras = [
    "brasil",
    "espanha",
    "japones",
    "franca",
    "arabe",
    "china",
    "eua"
];

const elementoBandeira = {};

listaBandeiras.forEach((bandeira) => {
    elementoBandeira[bandeira] = document.querySelector(`#bandeira-${bandeira}`);
    elementoBandeira[bandeira].onclick = () => {
        clicarNaBandeira(elementoBandeira[bandeira]);
        console.log(`=-==-==-=-==-==-=-==\n`)
    };
});


function clicarNaBandeira(elementoBandeiraClicada) {
    // *fechar menu
    if (menuLinguasAberto === true) {
        // Se o menu estiver aberto, fechar o menu e selecionar a língua escolhida
        menuLinguasAberto = false;
        escolherNovaLingua(elementoBandeiraClicada);
        fecharMenuLinguas();
    }
    
    // *abrir menu
    else {
        // Se o menu estiver fechado, abrir o menu com as línguas.
        menuLinguasAberto = true;
        abrirMenuLinguas();
    }

    console.log(`Menu aberto? -> ${menuLinguasAberto}`)
}


// FUNÇÃO FECHAR MENU LÍNGUAS (selecionar língua)
function fecharMenuLinguas() {
    let bandeiras = document.querySelectorAll(".bandeiras");
    let translateY = 0;
    
    bandeiras.forEach((bandeira) => {
        // Esconder as bandeiras
        bandeira.style.opacity = "0";
        bandeira.style.transform = `TranslateY(${translateY}px)`;
    });

    // Exibir somente a bandeira escolhida
    let elementoBandeiraAtual = document.querySelector(".bandeira-atual");
    elementoBandeiraAtual.style.opacity = "1";
    
    // Função para trocar o idioma da página
    let nomeBandeiraClicada = elementoBandeiraAtual.id.split("-")[1];
    trocarIdioma(nomeBandeiraClicada);
}


// FUNÇÃO ABRIR MENU LÍNGUAS
function abrirMenuLinguas() {
    let bandeiras = document.querySelectorAll(".bandeiras");
    let translateY = 0;

    bandeiras.forEach((bandeira) => {
        // Exibir todas as bandeiras
        bandeira.style.opacity = "1";
        bandeira.style.transform = `TranslateY(${translateY}px)`;
        translateY += 75;
    });
}


// FUNÇÃO DE ESCOLHER OUTRO IDIOMA
function escolherNovaLingua(elementoBandeiraEscolhida) {
    let elementoBandeiraAtual = document.querySelector(".bandeira-atual");
    console.log(`Elemento: ${elementoBandeiraEscolhida}`)
    elementoBandeiraAtual.classList.remove("bandeira-atual");
    elementoBandeiraEscolhida.classList.add("bandeira-atual");
}


function trocarIdioma(novoIdioma) {
    // Altera o idioma para o idioma selecionado
    idiomaPagina = novoIdioma;

    // Altera o texto da seleção de dificuldades
    const textoEscolhaDificuldade = document.querySelectorAll(".botao-escolha-dificuldade");
    textoEscolhaDificuldade[0].innerHTML = listaNomeDificuldades[idiomaPagina][0];
    textoEscolhaDificuldade[1].innerHTML = listaNomeDificuldades[idiomaPagina][1];
    textoEscolhaDificuldade[2].innerHTML = listaNomeDificuldades[idiomaPagina][2];
}
