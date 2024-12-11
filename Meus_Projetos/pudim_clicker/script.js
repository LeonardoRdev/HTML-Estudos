// Descomentar para remover os arquivos locais (deletar o save)
// localStorage.clear();

// COLOCAR UPGRADES PRA O RESTAURANTE GOURMET (será?)
// Slide para SONS e MÚSICA

// document.querySelector("#botao-teste").onclick = () => {
//     pudins = 0;
// }


// formata os números grandes, exemplo: 10_000 -> 10k 
const formatarNumero = Intl.NumberFormat("en", { notation: "compact"});


// Elementos do PUDIM
let divImagemPudins = document.querySelector("#pudins");
let pudimApertado = document.querySelector("#pudim_apertado");
let quantidadePudins = document.querySelector("#quantidade_pudins");
let PPS = document.querySelector("#pudins_por_segundo");

// Pudins / Poder do Clique / Preços iniciais dos upgrades:
let pudins = localStorage.getItem("quantidade_pudins") ? parseInt(localStorage.getItem("quantidade_pudins")) : 0;
let poderDoClique = 1;
let pudinsPorSegundo = 0;

// Lista com todos os audios
listaAudios = [
    "clicarPudim",
    "comprarUpgrade",
    "comprarMelhoria"
];

const audiosTocaveis = {};

listaAudios.forEach((audio) => {
    audiosTocaveis[audio] = new Audio();
    audiosTocaveis[audio].src = `../Arquivos_pagina_inicial/audios/pudim_clicker/${audio}.mp3`;
});

function tocarAudio(audio) {
    audio.play();

    // Se clicar muito rápido, reiniciar o áudio:
    if (audio.currentTime != 0) {
        audio.currentTime = 0;
    }
}

// Musica de fundo
const musicaDeFundo = new Audio();
musicaDeFundo.src = `../Arquivos_pagina_inicial/audios/pudim_clicker/musicaDeFundo.mp3`;
musicaDeFundo.loop = true;

// Ativa a música somente ao interagir com a página (clicando)
document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('click', () => {
        if (musicaDeFundo.paused) {
            musicaDeFundo.play()
            .then(() => console.log("Música iniciada após recarregar."))
            .catch((err) => console.error("Erro ao tocar música:", err));
        }
    });

});

// Variáveis dos upgrades: elemento, preço, texto do preço, texto da quantidade e quantidade:
const listaUpgrades = [
    "confeiteira",
    "chef",
    "padaria",
    "confeitaria",
    "supermercado",
    "cafeteria",
    "gourmet",
    "planeta"
];

// Lista com todos os upgrades que aumentam o PPS (Pudim Por Segundo)
const listaUpgradesPorSegundo = [
    "confeiteira",
    "padaria",
    "confeitaria",
    "supermercado",
    "cafeteria",
];

// Poder dos Upgrades (O tanto de pudins que cada compra concederá)
const listaPoderInicialUpgrades = [
    0.5,        // confeiteira  + PPS (Pudim Por Segundo)
    1,          // chef         + PPC (Pudim Por Clique)
    20,         // padaria      + PSS
    250,        // confeitaria  + PPS
    5_000,      // supermercado + PPS
    200_000,    // cafeteria    + PPS
    1,          // gourmet        PPC * Poder_gourmet (vai multiplicando por 2)
    1           // planeta        PPC & PPS = ∞
];

const listaPrecoInicialUpgrades = [
    10,                 // confeiteira
    100,                // chef
    500,                // padaria
    15_000,             // confeitaria
    250_000,            // supermercado
    10_000_000,         // cafeteria
    1_000_000,          // gourmet
    1_000_000_000_000   // planeta
];

const elementosUpgrade = {};
const precoUpgrades = {};
const paragrafoPrecoUpgrades = {};
const paragrafoQuantidadeUpgrades = {};
const quantidadeUpgrade = {};
const poderUpgrades = {};

// Atribuindo valor para cada variável de UPGRADE
listaUpgrades.forEach((upgrade, index) => {

    let elementoUpgrade = document.querySelector(`#upgrade_${upgrade}`);
    elementosUpgrade[upgrade] = elementoUpgrade;

    // Atribui uma função ao clicar nos UPGRADES
    elementosUpgrade[upgrade].onclick = () => {
        clicarNoUpgrade(upgrade);
    }

    poderUpgrades[upgrade] =  localStorage.getItem(`poder_upgrade_${upgrade}`) ? parseInt(localStorage.getItem(`poder_upgrade_${upgrade}`)) : listaPoderInicialUpgrades[index];
    precoUpgrades[upgrade] = localStorage.getItem(`upgrade_${upgrade} .custo_upgrade`) ? parseInt(localStorage.getItem(`upgrade_${upgrade} .custo_upgrade`)) : listaPrecoInicialUpgrades[index];
    paragrafoPrecoUpgrades[upgrade] = elementoUpgrade.querySelector(`.custo_upgrade p`);
    quantidadeUpgrade[upgrade] = localStorage.getItem(`upgrade_${upgrade} .quantidade_upgrade`) ? parseInt(localStorage.getItem(`upgrade_${upgrade} .quantidade_upgrade`)) : 0;
    paragrafoQuantidadeUpgrades[upgrade] = elementoUpgrade.querySelector(`.quantidade_upgrade`);
});

// Recarrega os upgrades (caso recarregar a página)
listaUpgrades.forEach(upgrade => {
    paragrafoQuantidadeUpgrades[upgrade].innerHTML = quantidadeUpgrade[upgrade];
    paragrafoPrecoUpgrades[upgrade].innerHTML = `Pudins: ${formatarNumero.format(precoUpgrades[upgrade])}`;
    atualizarQuantidadePudins();
    atualizarPudinsPorSegundo();
    atualizarPudinsPorClique();

    // Ativar TOOLTIP do UPGRADE
    if (quantidadeUpgrade[upgrade] > 0) {
        atualizarTooltipUpgrades(upgrade)
        elementosUpgrade[upgrade].querySelector(".informacoes_upgrade").classList.add("mostrar_before", "mostrar_after");
    }
});


// ========================
// ======== BOTÕES ========
// ======================== 

// Responsividade
const botaoResponsividade = document.querySelector("#botao-responsividade img");
let menuDoBotaoResponsividadeAberto = false;
botaoResponsividade.onclick = () => {
    let aside = document.querySelector("aside");

    if (menuDoBotaoResponsividadeAberto) {
        // Fechar a aba que o botão abre (sair)
        aside.classList.remove("mostrar");

        menuDoBotaoResponsividadeAberto = false;
    }

    else {
        // Abrir a aba do Botão (entrar)
        aside.classList.add("mostrar");

        menuDoBotaoResponsividadeAberto = true;
    }
}

// Configurações
const botaoConfiguracoes = document.querySelector("#botao-configuracoes img");
let menuDoBotaoConfiguracoesAberto = false;
botaoConfiguracoes.onclick = () => {
    const menuConfiguracoes = document.querySelector("#menu-configuracoes");

    if (menuDoBotaoConfiguracoesAberto) {
        // Fechar a aba que o botão abre (sair)
        menuConfiguracoes.classList.remove("mostrar");

        menuDoBotaoConfiguracoesAberto = false;
    }

    else {
        // Abrir a aba do Botão (entrar)
        menuConfiguracoes.classList.add("mostrar");

        menuDoBotaoConfiguracoesAberto = true;
    }
}

// Sliders e Checkbox de SOM e MÚSICA
// Variáveis
volumeSliderMusica = document.querySelector("#volume-musica-slider");
volumeSliderSom = document.querySelector("#volume-som-slider");
const checkSom = document.querySelector("#check-som");
const checkMusica = document.querySelector("#check-musica");

// Funções
// Sliders
volumeSliderMusica.oninput = () => {
    // Estilização do slider
    let valorAudioAtual = volumeSliderMusica.value;
    volumeSliderMusica.style.background = `linear-gradient(90deg, #e85a4e ${valorAudioAtual * 100}%, #FFF ${valorAudioAtual * 100}%)`;

    // Lógica para não alterar o volume caso o checkbox esteja desativado
    if (checkMusica.checked) {
        musicaDeFundo.volume = volumeSliderMusica.value;
    }
}

volumeSliderSom.oninput = () => {
    // Estilização do slider
    let valorAudioAtual = volumeSliderSom.value;
    volumeSliderSom.style.background = `linear-gradient(90deg, #e85a4e ${valorAudioAtual * 100}%, #FFF ${valorAudioAtual * 100}%)`;

    // Lógica para não alterar o volume caso o checkbox esteja desativado
    if (checkSom.checked) {
        listaAudios.forEach((audio) => {
            audiosTocaveis[audio].volume = volumeSliderSom.value;
        });
    }
}

// SOM
// Check-boxs
checkSom.onchange = () => {
    if (checkSom.checked) {
        // Marcar o checkbox (marcado por padrão)
        // Liga os sons da página
        listaAudios.forEach((audio) => {
            audiosTocaveis[audio].volume = volumeSliderSom.value;
        });
    }
    else {
        // Desmarcar o checkbox
        // Desativa os sons da página
        listaAudios.forEach((audio) => {
            audiosTocaveis[audio].volume = 0;
        });
    }
}

// MÚSICA
checkMusica.onchange = () => {
    if (checkMusica.checked) {
        // Marcar o checkbox (marcado por padrão)
        // Liga a música da página
        musicaDeFundo.volume = volumeSliderMusica.value;

    }
    else {
        // Desmarcar o checkbox
        // Desativa a música da página
        musicaDeFundo.volume = 0;
    }
}


// Deletar Progresso
const botaoDeletarProgresso = document.querySelector("#botao-reinciar-procresso");
botaoDeletarProgresso.onclick = () => {
    const opcoesDeSom = document.querySelector("#opcoes-de-som");
    const divDeletarProgresso = document.querySelector("#deletar-progresso");
    const confirmarExclusaoDeDados = document.querySelector("#confirmar-exclusao-de-dados");
    const botaoConfirmarExclusaoDados = document.querySelector("#botao-confirmar-exclusao-dados");
    const botaoCancelarExclusaoDados = document.querySelector("#botao-cancelar-exclusao-dados");

    // Mostrar a tela de confirmação
    opcoesDeSom.classList.add("esconder");
    divDeletarProgresso.classList.add("esconder");
    confirmarExclusaoDeDados.classList.add("mostrar");

    // Botão não, fecha o menu de confirmação
    botaoCancelarExclusaoDados.onclick = () => {
        opcoesDeSom.classList.remove("esconder");
        divDeletarProgresso.classList.remove("esconder");
        confirmarExclusaoDeDados.classList.remove("mostrar");
    }

    // Botão sim, reinicia todo o progresso resetando os dados locais da página
    botaoConfirmarExclusaoDados.onclick = () => {
        localStorage.clear();
        location.reload();
    }


}


// =======================
// ======= FUNÇÕES =======
// ======================= 

// Clicar no PUDIM:
divImagemPudins.addEventListener("click", (e) => {
    // Som ao clicar no pudim:
    tocarAudio(audiosTocaveis["clicarPudim"]);

    // Aumentar a quantidade de Pudins
    pudins += poderDoClique;
    atualizarQuantidadePudins();

    // Efeito do cursor ao clicar no pudim
    let x = e.pageX;
    let y = e.pageY;
    let span = document.createElement("span");
    let paragrafo = document.createElement("p");

    // Valor que sobe ao clicar (PPC)
    paragrafo.innerHTML = `+${formatarNumero.format(poderDoClique)}`;

    // Cria o elemento (efeito) e adiciona uma estilização
    span.appendChild(paragrafo);
    span.classList.add("click_effect");
    span.style.top = y + "px";
    span.style.left = x + "px";
    document.body.appendChild(span);

    // Remove o elemento criado após 1,5 segundos
    setTimeout(() => {
        span.remove();
    }, 1500);

});

// Atualizar contador de Pudins:
function atualizarQuantidadePudins() {
    // Gambiarra por conta do JavaScript, já que ele não calcula números flutuantes com precisão:
    pudins = Math.round(pudins * 10) / 10;

    // salva os pudins no computador (para não perder o progresso)
    localStorage.setItem("quantidade_pudins", pudins);

    quantidadePudins.innerHTML = `Pudins: ${formatarNumero.format(pudins)}`;
}

// ==========================
// ======== UPGRADES ========
// ==========================

// Clicar para comprar qualquer UPGRADE
function clicarNoUpgrade(upgrade) {

    // Se conseguir pagar pelo UPGRADE
    if (pudins >= precoUpgrades[upgrade]) {

        // Som ao comprar UPGRADE
        tocarAudio(audiosTocaveis["comprarUpgrade"]);

        quantidadeUpgrade[upgrade]++;
        paragrafoQuantidadeUpgrades[upgrade].innerHTML = formatarNumero.format(quantidadeUpgrade[upgrade]);

        // salva a quantidade de upgrades no computador para não perder o progresso
        localStorage.setItem(`upgrade_${upgrade} .quantidade_upgrade`, quantidadeUpgrade[upgrade]);
        
        // Gasta os pudins para adquirir o upgrade, mas antes verifica se o preço do upgrade não é ∞ (se jogou você vai entender)
        if (precoUpgrades[upgrade] == "Infinity") {
            precoUpgrades[upgrade] = 0;
            paragrafoPrecoUpgrades[upgrade] = "∞";
            // console.log(`Essa é a conta que ele faz:\n${pudins} - ${precoUpgrades[upgrade]} = ${pudins - precoUpgrades[upgrade]}`);
        } 

        // Gasta os pudins para adquirir o upgrade
        pudins -= precoUpgrades[upgrade];
        atualizarQuantidadePudins();

        // Aumenta o preço do upgrade
        precoUpgrades[upgrade] *= 1.45;

        if (upgrade === "gourmet") {
            // O preço do upgrade "gourmet" aumenta mais ainda
            precoUpgrades[upgrade] *= 1.30;
        }

        // salva o preço dos upgrades no computador para não perder o progresso
        localStorage.setItem(`upgrade_${upgrade} .custo_upgrade`, precoUpgrades[upgrade]);
        paragrafoPrecoUpgrades[upgrade].innerHTML = `Pudins: ${formatarNumero.format(precoUpgrades[upgrade])}`;

        // Ativar TOOLTIP do UPGRADE
        elementosUpgrade[upgrade].querySelector(".informacoes_upgrade").classList.add("mostrar_before", "mostrar_after");


        // Caso o UPGRADE for PPC
        if (upgrade === "chef" || upgrade === "gourmet" || upgrade === "planeta") {

            // Caso for GOURMET
            if (upgrade === "gourmet") {
                // Esse upgrade está sempre ativo, porém, a cada compra DELE o PPC (Poder por Click) total é multiplicado pelo poder DESTE upgrade, começando com x1.
                poderUpgrades["gourmet"] *= 2;
                localStorage.setItem(`poder_upgrade_${upgrade}`, poderUpgrades[upgrade]);
            }

            // Caso o UPGRADE for um PLANETA
            if (upgrade === "planeta") {
                // fazer dinheiro infinito
                poderUpgrades["gourmet"] = 2 ** 1100;
                poderUpgrades["confeiteira"] = 1;

                // Caso o jogador por algum motivo tenha 0 confeiteiras (senão dá bug)
                quantidadeUpgrade["confeiteira"] = quantidadeUpgrade["confeiteira"] > 0 ? quantidadeUpgrade["confeiteira"] : 1;
                poderUpgrades["confeiteira"] = 2 ** 1100;
                atualizarPudinsPorSegundo();

                // Deixar todos os preços para 0??
            }

            // Recompensa fornecida pelo UPGRADE
            atualizarPudinsPorClique();
        }

        // Caso o UPGRADE for PPS
        else {    
            // Recompensa fornecida pelo UPGRADE
            atualizarPudinsPorSegundo();
        }

        // Atualizar texto do TOOLTIP do UPGRADE
        atualizarTooltipUpgrades(upgrade);
    }

}


// Função atualizar PPS total
function atualizarPudinsPorSegundo() {
    let totalPPS = 0;
    listaUpgradesPorSegundo.forEach(upgrade => {
        totalPPS += poderUpgrades[upgrade] * quantidadeUpgrade[upgrade];
        // console.log(`PODER UPGRADE ${upgrade}: ${poderUpgrades[upgrade]}\nQTD upgrade ${upgrade}: ${quantidadeUpgrade[upgrade]}\n\n`);
    });

    pudinsPorSegundo = totalPPS;
    // console.log(`===============\nTOTAL PPS: ${pudinsPorSegundo}\n===============`);

    // Exibe abaixo do PUDIM o PPS
    PPS.innerHTML = `PPS: ${formatarNumero.format(pudinsPorSegundo)}`;
}


// Função atualizar PPC total
function atualizarPudinsPorClique() {
    // console.log(`PPC = (1 + ${poderUpgrades["chef"] * quantidadeUpgrade["chef"]}) * ${poderUpgrades["gourmet"]}`);

    // Atualiza o PPC (Poder Por Clique): 1 (base) + PPC do Chef * Poder do Gourmet (duplica o PPC)     
    poderDoClique = (1 + (poderUpgrades["chef"] * quantidadeUpgrade["chef"])) * poderUpgrades["gourmet"];
    // console.log(`=======\n PPC ${poderDoClique}\n=======`);
}


// =======================
// ====== Melhorias ======
// =======================

// Melhorias para os upgrades:
const listaMelhorias = [
    "confeiteira_1",
    "confeiteira_2",
    "confeiteira_3",
    "confeiteira_4",
    "confeiteira_5",
    "chef_1",
    "chef_2",
    "chef_3",
    "padaria_1",
    "padaria_2",
    "confeitaria_1",
    "confeitaria_2",
    "supermercado_1",
    "supermercado_2",
    "cafeteria_1",
    "cafeteria_2"
];

const listaPrecoMelhorias = [
    50,                  // confeiteira_1
    2_000,               // confeiteira_2
    50_000,              // confeiteira_3
    2_000_000,           // confeiteira_4
    15_000_000,          // confeiteira_5
    2_000,               // chef_1
    20_000,              // chef_2
    200_000,             // chef_3
    3_500,               // padaria_1
    150_000,             // padaria_2
    75_000,              // confeitaria_1
    3_000_000,           // confeitaria_2
    1_500_000,           // supermercado_1
    20_000_000,          // supermercado_2
    100_000_000,         // cafeteria_1
    500_000_000          // cafeteria_2
];

const listaNomeMelhorias = [
    "Curso EAD de confeiteira",                  // confeiteira_1
     "Real ou Bolo??",                           // confeiteira_2
     "Faculdade de confeiteira",                 // confeiteira_3
     "Equipamentos melhores",                    // confeiteira_4
     "Quanto mais braços, melhor!",              // confeiteira_5
     "Gato cozinheiro",                          // chef_1
     "Tony Stark brasileiro",                    // chef_2
     "Desligar o freezer à noite",               // chef_3
     "Pãochorro de forma",                       // padaria_1
     "Especialista em pães",                     // padaria_2
     "Menos dinheiro, mais trabalho!",           // confeitaria_1
     "Nova localização",                         // confeitaria_2
     "Produtos legalizados",                     // supermercado_1
     "Mercadinho BIG BOM",                       // supermercado_2
     "Cookie clica 🍪",                          // cafeteria_1
     "Parceria das grandes"                      // cafeteria_2
];

const listaDescricaoMelhorias = [
    "Tudo tem que começar de algum lugar.<br><br><br>Aumenta a produção das confeiteiras em 2x",                                  // confeiteira_1
    "Para confundir os clientes na hora de comer.<br><br><br>Aumenta a produção das confeiteiras em 4x",                          // confeiteira_2
    "Faculade de confeiteira para os funcionários!!<br><br><br>Aumenta a produção das confeiteiras em 6x",                        // confeiteira_3
    "Com esses novos equipamentos, a produção vai mais que dobrar!! 🔥<br><br><br>Aumenta a produção das confeiteiras em 8x",     // confeiteira_4
    "Quem disse que uma aranha não pode fazer cupcakes?<br><br><br>Aumenta a produção das confeiteiras em 10x",                   // confeiteira_5
    "A comida fica melhor com pelos!<br><br><br>Aumenta a produção dos chefs em 3x",                                              // chef_1
    "Largou os Vingadores pra fazer comida! 🔥<br><br><br>Aumenta a produção dos chefs em 6x",                                    // chef_2
    "Economizar também é ganhar.<br>(pense nisso)<br><br><br>Aumenta a produção dos chefs em 9x",                                 // chef_3
    "Pode ficar tranquilo(a), eles só servem de decoração.<br><br><br>Aumenta a produção das padarias em 2x",                     // padaria_1
    "Ficou careca de tanto estudar os pães.<br><br><br>Aumenta a produção das padarias em 4x",                                    // padaria_2
    "Diminuir o salário dos funcionários em 50%.<br><br><br>Aumenta a produção das confeitarias em 2x",                           // confeitaria_1
    "Mais espaço significa mais clientes!<br><br><br>Aumenta a produção das confeitarias em 4x",                                  // confeitaria_2
    "Agora com produtos legalizados!!<br><br><br>Aumenta a produção dos supermercados em 2x",                                     // supermercado_1
    "Parceria com um dos mais fortes mercados do Brasil!<br><br><br>Aumenta a produção dos supermercados em 4x",                  // supermercado_2
    "Clica no Cookie...<br><br><br>Aumenta a produção das cafeterias em 2x",                                                      // cafeteria_1
    "Nem precisa mais comprar Restaurante Gourmet.<br><br><br>Aumenta a produção das cafeterias em 4x"                            // cafeteria_2
];

const elementosMelhorias = {};
const melhoriasCompradas = {};
const elementosClasseMelhoria = {};
const precoMelhorias = {};
const nomeMelhorias = {};
const descricaoMelhorias = {};

listaMelhorias.forEach((melhoria, index) => {

    // Elementos HTML "melhoria"
    elementosMelhorias[melhoria] = document.querySelector(`#melhoria_${melhoria}`);

    // Melhorias compradas (para salvar no localStorage)
    // - Se o localStorage tiver alguma data sobre "comprei_melhoria_confeiteira1", então ela foi comprada (true), senão, continuar o comportamente padrão (false)
    melhoriasCompradas[melhoria] = localStorage.getItem(`comprei_melhoria_${melhoria}`) ? true : false;

    // O elemento ".melhoria" dentro da div "#melhoria_${melhoria}"
    elementosClasseMelhoria[melhoria] = elementosMelhorias[melhoria].querySelector(".melhoria");

    // Atribui um NOME, PREÇO e DESCRIÇÃO a cada MELHORIA
    nomeMelhorias[melhoria] = listaNomeMelhorias[index];
    precoMelhorias[melhoria] = listaPrecoMelhorias[index];
    descricaoMelhorias[melhoria] = listaDescricaoMelhorias[index];


    // FUNÇÕES
    // Função ao CLICAR nas MELHORIAS
    elementosMelhorias[melhoria].onclick = () => {
        clicarNaMelhoria(melhoria);
    };

    // Função ao PASSAR O MOUSE sobre as MELHORIAS
    elementosMelhorias[melhoria].onmouseover = () => {
        mostrarTooltipMelhorias(nomeMelhorias[melhoria], precoMelhorias[melhoria], descricaoMelhorias[melhoria]);
    };

    // Função ao REMOVER O MOUSE sobre as MELHORIAS
    elementosMelhorias[melhoria].onmouseout = () => {
        fecharTooltip();
    }

});

// Clicar para comprar alguma MELHORIA
function clicarNaMelhoria(melhoria) {

    // Se ter PUDINS suficientes para comprar
    if (pudins >= precoMelhorias[melhoria]) {

        // Som ao comprar MELHORIA
        tocarAudio(audiosTocaveis["comprarMelhoria"]);
        
        // Subtrai a quantidade de PUDINS do preço
        pudins -= precoMelhorias[melhoria];
        atualizarQuantidadePudins();

        elementosMelhorias[melhoria].style.display = "none";
        
        // Armazena a informação no localStorage de que a melhoria foi comprada, e não deverá aparecer mais.
        localStorage.setItem(`comprei_melhoria_${melhoria}`, true);

        
        // # Beneficios da MELHORIA 
        let upgradeBeneficiado = melhoria.split("_")[0];
        let numeroUpgradeComprado = melhoria.split("_")[1];

        // Caso for chef, multiplica o poder dele por 3x a cada upgrade (3x1, 3x2, 3x3...)
        if (upgradeBeneficiado === "chef") {
            poderUpgrades[upgradeBeneficiado] *= 3 * numeroUpgradeComprado;
        }
        
        // Senão, aumenta o poder do upgrade em 2 * (Quantidade de melhorias já compradas) -> (2x1, 2x2, 2x3...)
        else {
            poderUpgrades[upgradeBeneficiado] *= 2 * numeroUpgradeComprado;
        }

        localStorage.setItem(`poder_upgrade_${upgradeBeneficiado}`, poderUpgrades[upgradeBeneficiado]);

        // Atualiza o Tooltip dos UPGRADES
        atualizarTooltipUpgrades(upgradeBeneficiado);

        // Atualiza o PPS e o PPC
        atualizarPudinsPorSegundo();
        atualizarPudinsPorClique();
    }

}

// Mostrar a TOOLTIP das MELHORIAS
function mostrarTooltipMelhorias(txtNomeMelhoria, txtPrecoMelhoria, txtDescricaoMelhoria) {
    let informacoesMelhorias = document.querySelector("#informacoes_melhorias");
    informacoesMelhorias.style.display = "flex";

    informacoesMelhorias.querySelector("#nome_melhoria").innerHTML = txtNomeMelhoria;
    informacoesMelhorias.querySelector("#preco_melhoria").innerHTML = formatarNumero.format(txtPrecoMelhoria);
    informacoesMelhorias.querySelector("#descricao_melhoria").innerHTML = txtDescricaoMelhoria;
}

// Esconder a TOOLTIP (ao tirar o mouse de cima da MELHORIA)
function fecharTooltip() {
    let informacoesMelhorias = document.querySelector("#informacoes_melhorias");

    informacoesMelhorias.style.display = "none";
}

// Verifica se o navegador suporta WEB WORKERS
// *Serve para fazer o código rodar mesmo sem a janela do navegador estar focada
if (window.Worker) {
    // Cria o Worker a partidar do "worker.js"
    const worker = new Worker("worker.js");

    // A cada segundo que o passar no setInterval do Worker, ler a mensagem "tick" e executar o seguinte código:
    worker.onmessage = (event) => {
        if (event.data === "tick") {
            atualizarComponentesDeTempo();
        }
    };

} else { // Caso o navegador não suporte WEB WORKERS

    setInterval(() => {
        // atualiza a cada 1 segundo (igual o Worker, porém o código não roda ao desfocar a janela)
        atualizarComponentesDeTempo();
    }, 1000);
}

// Função realizada a cada SEGUNDO (de 1 em 1 segundo)
function atualizarComponentesDeTempo() {

    // PUDINS
    // Aumenta a quantidade de PUDINS por segundo de acordo com o PPS atual
    pudins += pudinsPorSegundo;
    atualizarQuantidadePudins();

    // UPGRADES
    // Caso você tenha mais de 2 Milhões de Pudins, liberar o último upgrade (ele custa 1T)
    if (pudins > 2_000_000) {
        elementosUpgrade["planeta"].style.display = "block";
    }

    // MELHORIAS
    // Se a melhoria estiver disponível para compra, ficar destacada
    listaMelhorias.forEach((melhoria) => {

        // A cada segundo, faz uma verificação para ver se a MELHORIA de cada UPGRADE pode ficar disponível
        if (pudins >= precoMelhorias[melhoria] * 0.2 & !melhoriasCompradas[melhoria]) {
            elementosMelhorias[melhoria].classList.add("aparecer");
        }

    });
}

// Atualizar os upgrades e melhorias disponíveis para compra a cada 0.1 segundos
setInterval(() => {
    // atualizar a cada 0.1 segundo

    // UPGRADES
    // Faz com que os UPGRADES disponíveis para compra fiquem coloridos:
    listaUpgrades.forEach(upgrade => {
        
        // Se o UPGRADE estiver disponível para compra, ficar destacado
        if (precoUpgrades[upgrade] > pudins) {
            elementosUpgrade[upgrade].classList.add("upgrade_caro");
        }
        else {
            elementosUpgrade[upgrade].classList.remove("upgrade_caro");
        }
    });


    // MELHORIAS
    // Se a melhoria estiver disponível para compra, ficar destacada
    listaMelhorias.forEach((melhoria) => {
        if (precoMelhorias[melhoria] > pudins) {
            // *Deixar a melhoria apagada (indisponível para compra)
            elementosClasseMelhoria[melhoria].classList.add("melhoria_cara");
        }

        else {
            // *Deixar a melhoria brilhante (disponível para compra)
            elementosClasseMelhoria[melhoria].classList.remove("melhoria_cara");
        }

    });
}, 100);


// Atualiza o texto do TOOLTIP dos UPGRADES
function atualizarTooltipUpgrades(upgrade) {

    // Caso seja CHEF ou GOURMET
    if (upgrade === "chef") {
        elementosUpgrade[upgrade].querySelector(".informacoes_upgrade").setAttribute("data-tooltip", `+${poderUpgrades[upgrade]} PPC\n\nTotal: ${formatarNumero.format(poderUpgrades[upgrade] * quantidadeUpgrade[upgrade])} PPC`);
        elementosUpgrade["gourmet"].querySelector(".informacoes_upgrade").setAttribute("data-tooltip", `${poderDoClique} x 2\n\nTotal: ${formatarNumero.format(poderDoClique)} PPC`);
        return;
    }

    if (upgrade === "gourmet") {
        elementosUpgrade[upgrade].querySelector(".informacoes_upgrade").setAttribute("data-tooltip", `Duplica o PPC\n\nTotal: ${formatarNumero.format(poderDoClique)} PPC`);
        return;
    }

    if (upgrade === "planeta") {
        elementosUpgrade[upgrade].querySelector(".informacoes_upgrade").setAttribute("data-tooltip", `Na palma da mão\n\nPudins x ∞`);
        return;
    }

    // Caso seja um upgrade de PPS (todos os outros)
    elementosUpgrade[upgrade].querySelector(".informacoes_upgrade").setAttribute("data-tooltip", `+${formatarNumero.format(poderUpgrades[upgrade])} PPS\n\nTotal: ${formatarNumero.format(poderUpgrades[upgrade] * quantidadeUpgrade[upgrade])} PPS`);
}
