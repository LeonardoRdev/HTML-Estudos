// FAZER:
// Ao iniciar o jogo. Trocar a seta de voltar página por uma de recarregar a página;


// Variáveis
const setaVoltarPagina = document.querySelector("#seta-voltar-pagina");
const headerConfiguracoes = document.querySelector("header");
const botaoAjuda = document.querySelector("#botao-configuracao-ajuda");
const divMenuAjuda = document.querySelector("#menu-de-ajuda");
let fundoTeste = document.querySelector("#fundo-teste");
let idiomaPagina = "brasil";
let menuLinguasAberto = false;

// Lista com cores que aparecerão (nome das cores)
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
    eua: "GET READY"
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


// Menu ajuda "?"
const listaPalavrasTextoAjuda = {
    brasil: [
        "Explicando o Teste",  // 0
        "O teste é o seguinte: vão aparecer alguns textos coloridos na tela, e o seu trabalho é falar, em voz alta, a <b>COR</b> em que o texto está escrito. É só isso! 🤠",  // 1
        "Vamos para um exemplo, diga as seguintes cores em voz alta:",  // 2
        "AMARELO",  // 3
        "ROXO",  // 4
        "PRETO",  // 5
        "VERMELHO",  // 6
        "AZUL",  // 7
        "VERDE",  // 8
        "A resposta seria: vermelho, amarelo, preto, verde, roxo, azul.",  // 9
        "Agora você sabe como o efeito stroop funciona, mas será que tens o que é necessário para esmagares o meu teste??" // 10
    ],
    espanha: [
        "Explicando la Prueba",  // 0
        "La prueba es la siguiente: aparecerán algunos textos de colores en la pantalla, y tu tarea es decir, en voz alta, el <b>COLOR</b> en el que está escrito el texto. ¡Eso es todo! 🤠",  // 1
        "Vamos con un ejemplo, di los siguientes colores en voz alta:",  // 2
        "AMARILLO",  // 3
        "MORADO",  // 4
        "NEGRO",  // 5
        "ROJO",  // 6
        "AZUL",  // 7
        "VERDE",  // 8
        "La respuesta sería: rojo, amarillo, negro, verde, morado, azul.",  // 9
        "Ahora sabes cómo funciona el efecto stroop, pero ¿tienes lo necesario para superar mi prueba??" // 10
    ],
    japones: [
        "テストの説明",  // 0
        "テストは次の通りです：画面にいくつかの色付きのテキストが表示されます。あなたの仕事は、そのテキストが書かれている <b>色</b> を声に出して言うことです。それだけです！🤠",  // 1
        "例に進みましょう。次の色を声に出して言ってください:",  // 2
        "黄色",  // 3
        "紫",  // 4
        "黒",  // 5
        "赤",  // 6
        "青",  // 7
        "緑",  // 8
        "答えは: 赤, 黄色, 黒, 緑, 紫, 青.",  // 9
        "これでストループ効果の仕組みがわかりましたが、私のテストに挑戦する準備はできていますか??" // 10
    ],
    franca: [
        "Explication du Test",  // 0
        "Le test est le suivant : des textes colorés apparaîtront à l'écran, et votre tâche est de dire, à voix haute, la <b>COULEUR</b> dans laquelle le texte est écrit. C'est tout ! 🤠",  // 1
        "Passons à un exemple, dites les couleurs suivantes à voix haute :",  // 2
        "JAUNE",  // 3
        "VIOLET",  // 4
        "NOIR",  // 5
        "ROUGE",  // 6
        "BLEU",  // 7
        "VERT",  // 8
        "La réponse serait : rouge, jaune, noir, vert, violet, bleu.",  // 9
        "Maintenant, vous savez comment fonctionne l'effet stroop, mais avez-vous ce qu'il faut pour réussir mon test ??" // 10
    ],
    arabe: [
        "شرح الاختبار",  // 0
        "الاختبار كالتالي: ستظهر بعض النصوص الملونة على الشاشة، ومهمتك هي قول <b>اللون</b> الذي كُتب به النص بصوت عالٍ. هذا كل شيء! 🤠",  // 1
        "لنأخذ مثالًا، قل الألوان التالية بصوت عالٍ:",  // 2
        "أصفر",  // 3
        "أرجواني",  // 4
        "أسود",  // 5
        "أحمر",  // 6
        "أزرق",  // 7
        "أخضر",  // 8
        "الإجابة ستكون: أحمر، أصفر، أسود، أخضر، أرجواني، أزرق.",  // 9
        "الآن تعرف كيف يعمل تأثير ستروب، لكن هل لديك ما يلزم لتجاوز اختباري؟" // 10
    ],
    china: [
        "测试说明",  // 0
        "测试如下：屏幕上会出现一些彩色文本，你的任务是大声说出 <b>颜色</b> 的文本。就是这样！🤠",  // 1
        "让我们看一个例子，请大声说出以下颜色：",  // 2
        "黄色",  // 3
        "紫色",  // 4
        "黑色",  // 5
        "红色",  // 6
        "蓝色",  // 7
        "绿色",  // 8
        "答案是：红色、黄色、黑色、绿色、紫色、蓝色。",  // 9
        "现在你知道斯特鲁普效应是如何工作的，但你有能力通过我的测试吗？？" // 10
    ],
    eua: [
        "Explaining the Test",  // 0
        "The test is as follows: some colored texts will appear on the screen, and your task is to say, out loud, the <b>COLOR</b> in which the text is written. That's it! 🤠",  // 1
        "Let's go to an example, say the following colors out loud:",  // 2
        "YELLOW",  // 3
        "PURPLE",  // 4
        "BLACK",  // 5
        "RED",  // 6
        "BLUE",  // 7
        "GREEN",  // 8
        "The answer would be: red, yellow, black, green, purple, blue.",  // 9
        "Now you know how the stroop effect works, but do you have what it takes to crush my test??" // 10
    ]
};


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
    palavraDaVez.style.color = "#FFF";

    let indicePalavraAleatoriaIntervaloPassado = "";
    let indiceCorAleatoriaIntervaloPassado = "";
    let indicePalavraAleatoria = "";
    let indiceCorAleatoria = "";

    // Inicia o intervalo com as palavras
    const intervalo = setInterval(() => {
        // Lógica para alterar as palavras e cores
        
        // Sorteia a nova palavra e cor para que não seja indêntico ao do intervalo passado
        do {
            indicePalavraAleatoria = Math.floor(Math.random() * listaNomeCores[idiomaPagina].length);
            indiceCorAleatoria = Math.floor(Math.random() * listaHexadecimalCores.length);
        } while (indiceCorAleatoria === indiceCorAleatoriaIntervaloPassado && indicePalavraAleatoria === indicePalavraAleatoriaIntervaloPassado);

        // Pega a palavra e cor do intervalo passado
        indicePalavraAleatoriaIntervaloPassado = indicePalavraAleatoria;
        indiceCorAleatoriaIntervaloPassado = indiceCorAleatoria;

        // Altera de fato a palavra e a cor
        palavraDaVez.innerHTML = listaNomeCores[idiomaPagina][indicePalavraAleatoria];
        palavraDaVez.style.color = listaHexadecimalCores[indiceCorAleatoria];

        // Contagem das repetições
        repeticoes++;
        // console.log(`Repetição: ${repeticoes}`);
        // console.log(`indicePalavraAleatoria -> ${indicePalavraAleatoria}\nindiceCorAleatoria -> ${indiceCorAleatoria}\n=====================================\n`);

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

        // Estilização do fundo
        fundoTeste.style.background = "radial-gradient(circle, #0004 3%, #0002 15%, transparent 30%)";
    }

    // Caso termine o jogo
    else {
        divConfiguracaoDificuldade.style.display = "flex";
        setaVoltarPagina.style.display = "block";
        headerConfiguracoes.style.display = "block";

        // Estilização do fundo
        fundoTeste.style.background = "transparent";
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
        bandeira.style.transform = `TranslateY(${translateY}%)`;
        translateY += 120; // % do espaçamento
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


    // Altera o texto do menu ajuda "?"
    // Variáveis
    const titulo = divMenuAjuda.querySelector("h3");

    const pExplicacao1 = divMenuAjuda.querySelector("#explicacao-1");
    const pExplicacao2 = divMenuAjuda.querySelector("#explicacao-2");

    const divExemplo1 = divMenuAjuda.querySelector("#div-exemplo-1");
    const paragrafosDivExemplo1 = divExemplo1.querySelectorAll("p");
    const p1DivExemplo1 = paragrafosDivExemplo1[0];
    const p2DivExemplo1 = paragrafosDivExemplo1[1];
    const p3DivExemplo1 = paragrafosDivExemplo1[2];

    const divExemplo2 = divMenuAjuda.querySelector("#div-exemplo-2");
    const paragrafosDivExemplo2 = divExemplo2.querySelectorAll("p");
    const p1DivExemplo2 = paragrafosDivExemplo2[0];
    const p2DivExemplo2 = paragrafosDivExemplo2[1];
    const p3DivExemplo2 = paragrafosDivExemplo2[2];

    const pRespostaMenu = divMenuAjuda.querySelector("#resposta-menu");
    const pAgoraVoceSabeMenu = divMenuAjuda.querySelector("#agora-voce-sabe-menu");

    // Trocando os textos
    titulo.innerHTML = listaPalavrasTextoAjuda[idiomaPagina][0];
    pExplicacao1.innerHTML = listaPalavrasTextoAjuda[idiomaPagina][1];
    pExplicacao2.innerHTML = listaPalavrasTextoAjuda[idiomaPagina][2];

    p1DivExemplo1.innerHTML = listaPalavrasTextoAjuda[idiomaPagina][3];
    p2DivExemplo1.innerHTML = listaPalavrasTextoAjuda[idiomaPagina][4];
    p3DivExemplo1.innerHTML = listaPalavrasTextoAjuda[idiomaPagina][5];

    p1DivExemplo2.innerHTML = listaPalavrasTextoAjuda[idiomaPagina][6];
    p2DivExemplo2.innerHTML = listaPalavrasTextoAjuda[idiomaPagina][7];
    p3DivExemplo2.innerHTML = listaPalavrasTextoAjuda[idiomaPagina][8];
    
    pRespostaMenu.innerHTML = listaPalavrasTextoAjuda[idiomaPagina][9];
    pAgoraVoceSabeMenu.innerHTML = listaPalavrasTextoAjuda[idiomaPagina][10];
}
