// Descomentar para remover os arquivos locais (deletar o save)
// localStorage.clear();

// formata os números grandes, exemplo: 10000 -> 10k 
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

// Variáveis dos upgrades: elemento, preço, texto do preço, texto da quantidade e quantidade:
const listaUpgrades = [
    "confeiteira",
    "chef",
    "padaria",
    "confeitaria",
    "supermercado",
    "cafeteria",
    "gourmet"
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
    0.5, // confeiteira  + PPS (Pudim Por Segundo)
    1,   // chef         + PPC (Pudim Por Clique)
    15,  // padaria      + PSS
    100, // confeitaria  + PPS
    250, // supermercado + PPS
    750, // cafeteria    + PPS
    1    // gourmet        PPC * Poder_gourmet (vai multiplicando por 2)
];

const listaPrecoInicialUpgrades = [
    10,     // confeiteira
    100,    // chef
    500,    // padaria
    3_000,  // confeitaria
    20_000, // supermercado
    35_000, // cafeteria
    350_000 // gourmet
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
});


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

// Clicar para comprar algum UPGRADE
function clicarNoUpgrade(upgrade) {

    // Se conseguir pagar pelo UPGRADE
    if (pudins >= precoUpgrades[upgrade]) {
        // Som ao comprar UPGRADE
        tocarAudio(audiosTocaveis["comprarUpgrade"]);

        quantidadeUpgrade[upgrade]++;
        paragrafoQuantidadeUpgrades[upgrade].innerHTML = quantidadeUpgrade[upgrade];

        // salva a quantidade de upgrades no computador para não perder o progresso
        localStorage.setItem(`upgrade_${upgrade} .quantidade_upgrade`, quantidadeUpgrade[upgrade]);
        
        // Gasta os pudins para adquirir o upgrade
        pudins -= precoUpgrades[upgrade];
        atualizarQuantidadePudins();

        // Aumenta o preço do upgrade
        precoUpgrades[upgrade] += 1.15 * precoUpgrades[upgrade];

        // salva o preço dos upgrades no computador para não perder o progresso
        localStorage.setItem(`upgrade_${upgrade} .custo_upgrade`, precoUpgrades[upgrade]);
        paragrafoPrecoUpgrades[upgrade].innerHTML = `Pudins: ${formatarNumero.format(precoUpgrades[upgrade])}`;

        // Ativar TOOLTIP do UPGRADE
        elementosUpgrade[upgrade].querySelector(".informacoes_upgrade").classList.add("mostrar_before", "mostrar_after");


        // Diferenciar PPC de PPS
        if (upgrade === "chef" || upgrade === "gourmet") {
            // Caso o UPGRADE for PPC
    
            // Recompensa fornecida pelo UPGRADE
            atualizarPudinsPorClique();

            // Caso for GOURMET
            if (upgrade === "gourmet") {
                // Esse upgrade está sempre ativo, porém, a cada compra DELE o PPC (Poder por Click) total é multiplicado pelo poder DESTE upgrade, começando com x1.
                poderUpgrades["gourmet"] *= 2;
            }
        }

        else {
            // Caso o UPGRADE for PPS
    
            // Atualizar texto do TOOLTIP
            atualizarTooltip(upgrade);
    
            // Recompensa fornecida pelo UPGRADE
            atualizarPudinsPorSegundo();
        }
    }

}

// ARRUMAR AS MELHORIAS, DEIXAR O CÓDIGO MAIS SIMPLES.
// Upgrade Confeiteira:
elementosUpgrade["confeiteira"].addEventListener("click", () => {
    
    // Se conseguir pagar pelo UPGRADE
    if (pudins >= precoUpgrades["confeiteira"]) {

        // 1° Melhoria:
        if (quantidadeUpgrade["confeiteira"] >= 2 & !melhoriasCompradas["confeiteira_1"]) {
            elementosMelhorias["confeiteira_1"].classList.add("aparecer");
        }

        // 2° Melhoria:
        if (quantidadeUpgrade["confeiteira"] >= 15 & !melhoriasCompradas["confeiteira_2"]) {
            elementosMelhorias["confeiteira_2"].classList.add("aparecer");
        }

        // 3° Melhoria:
        if (quantidadeUpgrade["confeiteira"] >= 25 & !melhoriasCompradas["confeiteira_3"]) {
            elementosMelhorias["confeiteira_3"].classList.add("aparecer");
        }

        // 4° Melhoria:
        if (quantidadeUpgrade["confeiteira"] >= 50 & !melhoriasCompradas["confeiteira_4"]) {
            elementosMelhorias["confeiteira_4"].classList.add("aparecer");
        }

        // 5° Melhoria:
        if (quantidadeUpgrade["confeiteira"] >= 100 & !melhoriasCompradas["confeiteira_5"]) {
            elementosMelhorias["confeiteira_5"].classList.add("aparecer");
        }

    }
});

// Upgrade Chef:
elementosUpgrade["chef"].addEventListener("click", () => {
    if (pudins >= precoUpgrades["chef"]) {

        // 1° Melhoria:
        if (quantidadeUpgrade["chef"] >= 2 & !melhoriasCompradas["chef_1"]) {
            elementosMelhorias["chef_1"].classList.add("aparecer");
        }

        // 2° Melhoria:
        if (quantidadeUpgrade["chef"] >= 7 & !melhoriasCompradas["chef_2"]) {
            elementosMelhorias["chef_2"].classList.add("aparecer");
        }

        // 3° Melhoria:
        if (quantidadeUpgrade["chef"] >= 10 & !melhoriasCompradas["chef_3"]) {
            elementosMelhorias["chef_3"].classList.add("aparecer");
        }
    }
});

// Upgrade Padaria
elementosUpgrade["padaria"].addEventListener("click", () => {
    if (pudins >= precoUpgrades["padaria"]) {
   
        // 1° Melhoria:
        if (quantidadeUpgrade["padaria"] >= 2 & !melhoriasCompradas["padaria_1"]) {
            elementosMelhorias["padaria_1"].classList.add("aparecer");
        }

        // 2° Melhoria:
        if (quantidadeUpgrade["padaria"] >= 10 & !melhoriasCompradas["padaria_2"]) {
            elementosMelhorias["padaria_2"].classList.add("aparecer");
        }
    }
});

// Upgrade Confeitaria
elementosUpgrade["confeitaria"].addEventListener("click", () => {
    if (pudins >= precoUpgrades["confeitaria"]) {

        // 1° Melhoria:
        if (quantidadeUpgrade["confeitaria"] >= 2 & !melhoriasCompradas["confeitaria_1"]) {
            elementosMelhorias["confeitaria_1"].classList.add("aparecer");
        }

        // 2° Melhoria:
        if (quantidadeUpgrade["confeitaria"] >= 15 & !melhoriasCompradas["confeitaria_2"]) {
            elementosMelhorias["confeitaria_2"].classList.add("aparecer");
        }

    }
});

// Upgrade Supermercado
elementosUpgrade["supermercado"].addEventListener("click", () => {
    if (pudins >= precoUpgrades["supermercado"]) {

        // 1° Melhoria:
        if (quantidadeUpgrade["supermercado"] >= 2 & !melhoriasCompradas["supermercado_1"]) {
            elementosMelhorias["supermercado_1"].classList.add("aparecer");
        }

        // 2° Melhoria:
        if (quantidadeUpgrade["supermercado"] >= 15 & !melhoriasCompradas["supermercado_2"]) {
            elementosMelhorias["supermercado_2"].classList.add("aparecer");
        }

    }
});

// Upgrade Cafeteria
elementosUpgrade["cafeteria"].addEventListener("click", () => {
    if (pudins >= precoUpgrades["cafeteria"]) {

        // 1° Melhoria:
        if (quantidadeUpgrade["cafeteria"] >= 2 & !melhoriasCompradas["cafeteria_1"]) {
            elementosMelhorias["cafeteria_1"].classList.add("aparecer");
        }

        // 2° Melhoria:
        if (quantidadeUpgrade["cafeteria"] >= 15 & !melhoriasCompradas["cafeteria_2"]) {
            elementosMelhorias["cafeteria_2"].classList.add("aparecer");
        }

    }
});

// Função atualizar PPS total
function atualizarPudinsPorSegundo() {
    let totalPPS = 0;
    listaUpgradesPorSegundo.forEach(upgrade => {
        totalPPS += poderUpgrades[upgrade] * quantidadeUpgrade[upgrade];
        console.log(`PODER UPGRADE ${upgrade}: ${poderUpgrades[upgrade]}\nQTD upgrade ${upgrade}: ${quantidadeUpgrade[upgrade]}\n\n`);
    });

    pudinsPorSegundo = totalPPS;
    console.log(`===============\nTOTAL PPS: ${pudinsPorSegundo}\n===============`);

    // Exibe abaixo do PUDIM o PPS
    PPS.innerHTML = `PPS: ${formatarNumero.format(pudinsPorSegundo)}`;
}

// Função atualizar PPC total
function atualizarPudinsPorClique() {
    console.log(`PPC = (1 + ${poderUpgrades["chef"] * quantidadeUpgrade["chef"]}) * ${poderUpgrades["gourmet"]}`);

    // Atualiza o PPC (Poder Por Clique): 1 (base) + PPC do Chef * Poder do Gourmet (duplica o PPC)     
    poderDoClique = (1 + (poderUpgrades["chef"] * quantidadeUpgrade["chef"])) * poderUpgrades["gourmet"];
    console.log(`=======\n PPC ${poderDoClique}\n=======`);

    // Atualizar texto do TOOLTIP
    atualizarTooltip("chef");
    atualizarTooltip("gourmet");
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
    50,      // confeiteira_1
    15,      // confeiteira_2
    15,      // confeiteira_3
    15,      // confeiteira_4
    15,      // confeiteira_5
    500,     // chef_1
    15,      // chef_2
    15,      // chef_3
    2_000,   // padaria_1
    15,      // padaria_2
    15_000,  // confeitaria_1
    15,      // confeitaria_2
    50_000,  // supermercado_1
    15,      // supermercado_2
    125_000, // cafeteria_1
    15       // cafeteria_2
];

const elementosMelhorias = {};
const melhoriasCompradas = {};
const elementosClasseMelhoria = {};
const precoMelhorias = {};
const listaItensEPrecosMelhorias = [];

listaMelhorias.forEach((melhoria, index) => {

    // Elementos HTML "melhoria"
    elementosMelhorias[melhoria] = document.querySelector(`#melhoria_${melhoria}`);

    // Melhorias compradas (para salvar no localStorage)
    // - Se o localStorage tiver alguma data sobre "comprei_melhoria_confeiteira1", então ela foi comprada (true), senão, continuar o comportamente padrão (false)
    melhoriasCompradas[melhoria] = localStorage.getItem(`comprei_melhoria_${melhoria}`) ? true : false;

    // O elemento ".melhoria" dentro da div "#melhoria_${melhoria}"
    elementosClasseMelhoria[melhoria] = elementosMelhorias[melhoria].querySelector(".melhoria");

    // Atribui os preços a cada melhoria
    precoMelhorias[melhoria] = listaPrecoMelhorias[index];

    // Lista com as MELHORIAS
    listaItensEPrecosMelhorias.push(
        [elementosClasseMelhoria[melhoria], precoMelhorias[index]]
    );

    // Atribui uma função ao clicar nas MELHORIAS
    elementosMelhorias[melhoria].onclick = () => {
        clicarNaMelhoria(melhoria);
    };

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
        atualizarPudinsPorSegundo();
        
        // Armazena a informação no localStorage de que a melhoria foi comprada, e não deverá aparecer mais.
        localStorage.setItem(`comprei_melhoria_${melhoria}`, true);

        // DESCOBRIR COMO FAZER
        // benefício da melhoria
        // poderUpgrades["confeiteira"] += 0.5;
        // localStorage.setItem("poder_upgrade_confeiteira", poderUpgrades["confeiteira"]);
        // atualizarTooltip("confeiteira");
    }

}

elementosMelhorias["confeiteira_1"].addEventListener("click", () => {
    if (pudins >= precoMelhoriaConfeiteira1) {

        // benefício da melhoria
        poderUpgrades["confeiteira"] += 0.5;
        localStorage.setItem("poder_upgrade_confeiteira", poderUpgrades["confeiteira"]);
        atualizarTooltip("confeiteira");
    }
});

elementosMelhorias["confeiteira_2"].addEventListener("click", () => {
    if (pudins >= precoMelhoriaConfeiteira2) {

        // benefício da melhoria
        poderUpgrades["confeiteira"] += 3;
        localStorage.setItem("poder_upgrade_confeiteira", poderUpgrades["confeiteira"]);
        atualizarTooltip("confeiteira");
    }
});

elementosMelhorias["confeiteira_3"].addEventListener("click", () => {
    if (pudins >= precoMelhoriaConfeiteira3) {

        // benefício da melhoria
        poderUpgrades["confeiteira"] += 3;
        localStorage.setItem("poder_upgrade_confeiteira", poderUpgrades["confeiteira"]);
        atualizarTooltip("confeiteira");
    }
});

elementosMelhorias["confeiteira_4"].addEventListener("click", () => {
    if (pudins >= precoMelhoriaConfeiteira4) {

        // benefício da melhoria
        poderUpgrades["confeiteira"] += 3;
        localStorage.setItem("poder_upgrade_confeiteira", poderUpgrades["confeiteira"]);
        atualizarTooltip("confeiteira");
    }
});

elementosMelhorias["confeiteira_5"].addEventListener("click", () => {
    if (pudins >= precoMelhoriaConfeiteira5) {

        // benefício da melhoria
        poderUpgrades["confeiteira"] += 3;
        localStorage.setItem("poder_upgrade_confeiteira", poderUpgrades["confeiteira"]);
        atualizarTooltip("confeiteira");
    }
});

elementosMelhorias["chef_1"].addEventListener("click", () => {
    if (pudins >= precoMelhoriaChef1) {

        // benefício da melhoria
        poderUpgrades["chef"] += 1;
        localStorage.setItem("poder_upgrade_chef", poderUpgrades["chef"]);
        atualizarTooltip("chef");
    }
});

elementosMelhorias["chef_2"].addEventListener("click", () => {
    if (pudins >= precoMelhoriaChef2) {

        // benefício da melhoria
        poderUpgrades["confeiteira"] += 3;
        localStorage.setItem("poder_upgrade_confeiteira", poderUpgrades["confeiteira"]);
        atualizarTooltip("chef");
    }
});

elementosMelhorias["chef_3"].addEventListener("click", () => {
    if (pudins >= precoMelhoriaChef3) {

        // benefício da melhoria
        poderUpgrades["confeiteira"] += 3;
        localStorage.setItem("poder_upgrade_confeiteira", poderUpgrades["confeiteira"]);
        atualizarTooltip("chef");
    }
});

elementosMelhorias["padaria_1"].addEventListener("click", () => {
    if (pudins >= precoMelhoriaPadaria1) {

        // benefício da melhoria
        poderUpgrades["padaria"] += 15;
        localStorage.setItem("poder_upgrade_padaria", poderUpgrades["padaria"]);
        atualizarTooltip("padaria");
    }
});

elementosMelhorias["padaria_2"].addEventListener("click", () => {
    if (pudins >= precoMelhoriaPadaria2) {

        // benefício da melhoria
        poderUpgrades["confeiteira"] += 3;
        localStorage.setItem("poder_upgrade_confeiteira", poderUpgrades["confeiteira"]);
        atualizarTooltip("padaria");
    }
});

elementosMelhorias["confeitaria_1"].addEventListener("click", () => {
    if (pudins >= precoMelhoriaConfeitaria1) {

        // benefício da melhoria
        poderUpgrades["confeitaria"] += 100;
        localStorage.setItem("poder_upgrade_confeitaria", poderUpgrades["confeitaria"]);
        atualizarTooltip("confeitaria");
    }
});

elementosMelhorias["confeitaria_2"].addEventListener("click", () => {
    if (pudins >= precoMelhoriaConfeitaria2) {

        // benefício da melhoria
        poderUpgrades["confeiteira"] += 3;
        localStorage.setItem("poder_upgrade_confeiteira", poderUpgrades["confeiteira"]);
        atualizarTooltip("confeitaria");
    }
});

elementosMelhorias["supermercado_1"].addEventListener("click", () => {
    if (pudins >= precoMelhoriaSupermercado1) {

        // benefício da melhoria
        poderUpgrades["supermercado"] += 250;
        localStorage.setItem("poder_upgrade_supermercado", poderUpgrades["supermercado"]);
        atualizarTooltip("supermercado");
    }
});

elementosMelhorias["supermercado_2"].addEventListener("click", () => {
    if (pudins >= precoMelhoriaSupermercado2) {

        // benefício da melhoria
        poderUpgrades["confeiteira"] += 3;
        localStorage.setItem("poder_upgrade_confeiteira", poderUpgrades["confeiteira"]);
        atualizarTooltip("supermercado");
    }
});

elementosMelhorias["cafeteria_1"].addEventListener("click", () => {
    if (pudins >= precoMelhoriaCafeteria1) {

        // benefício da melhoria
        poderUpgrades["cafeteria"] += 750;
        localStorage.setItem("poder_upgrade_cafeteria", poderUpgrades["cafeteria"]);
        atualizarTooltip("cafeteria");
    }
});

elementosMelhorias["cafeteria_2"].addEventListener("click", () => {
    if (pudins >= precoMelhoriaCafeteria2) {

        // benefício da melhoria
        poderUpgrades["confeiteira"] += 3;
        localStorage.setItem("poder_upgrade_confeiteira", poderUpgrades["confeiteira"]);
        atualizarTooltip("cafeteria");
    }
});



// Informações do TOOLTIP das MELHORIAS (descrição, nome e preço)
elementosMelhorias["confeiteira_1"].addEventListener("mouseover", () => {
    mostrarTooltip("Curso EAD de confeiteira", `${precoMelhoriaConfeiteira1} Pudins`, "Aumenta a produção das confeiteiras em 2x");
});

elementosMelhorias["confeiteira_2"].addEventListener("mouseover", () => {
    mostrarTooltip("Aulas com quem sabe", `${precoMelhoriaConfeiteira2} Pudins`, "...");
});

elementosMelhorias["confeiteira_3"].addEventListener("mouseover", () => {
    mostrarTooltip("Aulas com quem sabe", `${precoMelhoriaConfeiteira3} Pudins`, "...");
});

elementosMelhorias["confeiteira_4"].addEventListener("mouseover", () => {
    mostrarTooltip("Aulas com quem sabe", `${precoMelhoriaConfeiteira4} Pudins`, "...");
});

elementosMelhorias["confeiteira_5"].addEventListener("mouseover", () => {
    mostrarTooltip("Aulas com quem sabe", `${precoMelhoriaConfeiteira5} Pudins`, "...");
});

elementosMelhorias["chef_1"].addEventListener("mouseover", () => {
    mostrarTooltip("Gato cozinheiro", `${precoMelhoriaChef1} Pudins`, "+1 Poder do Clique para cada Chef");
});

elementosMelhorias["chef_2"].addEventListener("mouseover", () => {
    mostrarTooltip("Tony Stark brasileiro", `${precoMelhoriaChef2} Pudins`, "...");
});

elementosMelhorias["chef_3"].addEventListener("mouseover", () => {
    mostrarTooltip("Nome a ser criado...", `${precoMelhoriaChef3} Pudins`, "...");
});

elementosMelhorias["padaria_1"].addEventListener("mouseover", () => {
    mostrarTooltip("Pãochorro de forma", `${precoMelhoriaPadaria1} Pudins`, "Aumenta a produção das padarias em 2x");
});

elementosMelhorias["padaria_2"].addEventListener("mouseover", () => {
    mostrarTooltip("Especialista em pães", `${precoMelhoriaPadaria2} Pudins`, "...");
});

elementosMelhorias["confeitaria_1"].addEventListener("mouseover", () => {
    mostrarTooltip("Nome: Nome Legal", `${precoMelhoriaConfeitaria1} Pudins`, "Aumenta a produção das confeitarias em 2x");
});

elementosMelhorias["confeitaria_2"].addEventListener("mouseover", () => {
    mostrarTooltip("Nome: Nome Legal", `${precoMelhoriaConfeitaria2} Pudins`, "...");
});

elementosMelhorias["supermercado_1"].addEventListener("mouseover", () => {
    mostrarTooltip("Nome: Nome Legal", `${precoMelhoriaSupermercado1} Pudins`, "Aumenta a produção das supermercado em 2x");
});

elementosMelhorias["supermercado_2"].addEventListener("mouseover", () => {
    mostrarTooltip("Nome: Nome Legal", `${precoMelhoriaSupermercado2} Pudins`, "...");
});

elementosMelhorias["cafeteria_1"].addEventListener("mouseover", () => {
    mostrarTooltip("Cookie clica 🍪", `${precoMelhoriaCafeteria1} Pudins`, "Aumenta a produção das cafeterias em 2x");
});

elementosMelhorias["cafeteria_2"].addEventListener("mouseover", () => {
    mostrarTooltip("Café na Lua", `${precoMelhoriaCafeteria2} Pudins`, "...");
});


const itensMelhorias = document.querySelectorAll(".item_melhoria");

// Para fechar o TOOLTIP
itensMelhorias.forEach((item) => {
    item.addEventListener("mouseout", () => {
        // Se tirar o mouse de cima das MELHORIAS, fechar o TOOLTIP
        fecharTooltip();
    });
})

// Mostrar a TOOLTIP das MELHORIAS
function mostrarTooltip(txtNomeMelhoria, txtPrecoMelhoria, txtDescricaoMelhoria) {
    let informacoesMelhorias = document.querySelector("#informacoes_melhorias");
    informacoesMelhorias.style.display = "flex";

    informacoesMelhorias.querySelector("#nome_melhoria").innerHTML = txtNomeMelhoria;
    informacoesMelhorias.querySelector("#preco_melhoria").innerHTML = txtPrecoMelhoria;
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
        atualizarComponentesDeTempo();
    // v atualiza a cada 1 segundo (igual o Worker, porém o código não roda ao desfocar a janela)
}, 1000);

}

function atualizarComponentesDeTempo() {

    // PUDINS
    // Aumenta a quantidade de PUDINS por segundo de acordo com o PPS atual
    pudins += pudinsPorSegundo;
    atualizarQuantidadePudins();

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
    listaItensEPrecosMelhorias.forEach(melhoria => {
        if (melhoria[1] > pudins) {
            melhoria[0].classList.add("melhoria_cara");
        }
        else {
            melhoria[0].classList.remove("melhoria_cara");
        }
    });

    // Resumindo a função de cima
    // if (precoMelhoria > pudins) {
    //     "deixar a melhoria apagada (indisponível para compra)"
    // }
    // else {
    //     "deixar a melhoria brilhante (disponível para compra)"
    // }

}

// Atualiza o texto do TOOLTIP dos UPGRADES
function atualizarTooltip(upgrade) {

    // Caso seja CHEF ou GOURMET
    if (upgrade === "chef") {
        elementosUpgrade[upgrade].querySelector(".informacoes_upgrade").setAttribute("data-tooltip", `+${poderUpgrades[upgrade]} PPC\n\nTotal: ${poderUpgrades[upgrade] * quantidadeUpgrade[upgrade]} PPC`);
        elementosUpgrade["gourmet"].querySelector(".informacoes_upgrade").setAttribute("data-tooltip", `${poderDoClique} x 2\n\nTotal: ${poderDoClique} PPC`);
        return;
    }

    if (upgrade === "gourmet") {
        elementosUpgrade[upgrade].querySelector(".informacoes_upgrade").setAttribute("data-tooltip", `Duplica o PPC\n\nTotal: ${poderDoClique} PPC`);
        return;
    }

    // Caso seja um upgrade de PPS (todos os outros)
    elementosUpgrade[upgrade].querySelector(".informacoes_upgrade").setAttribute("data-tooltip", `+${formatarNumero.format(poderUpgrades[upgrade])} PPS\n\nTotal: ${formatarNumero.format(poderUpgrades[upgrade] * quantidadeUpgrade[upgrade])} PPS`);
}


// Exibe as melhorias disponíveis para compra ao recarregar a página (localStorage)
/// *SIMPLIFICAR O CÓDIGO, SE NÃO VAI REPETIR MUITA COISA

// 1° Melhoria:
if (quantidadeUpgrade["confeiteira"] >= 2 & !melhoriasCompradas["confeiteira_1"]) {
    elementosMelhorias["confeiteira_1"].classList.add("aparecer");
}

// 2° Melhoria:
if (quantidadeUpgrade["confeiteira"] >= 15 & !melhoriasCompradas["confeiteira_2"]) {
    elementosMelhorias["confeiteira_2"].classList.add("aparecer");
}

// 3° Melhoria:
if (quantidadeUpgrade["confeiteira"] >= 25 & !melhoriasCompradas["confeiteira_3"]) {
    elementosMelhorias["confeiteira_3"].classList.add("aparecer");
}

// 4° Melhoria:
if (quantidadeUpgrade["confeiteira"] >= 50 & !melhoriasCompradas["confeiteira_4"]) {
    elementosMelhorias["confeiteira_4"].classList.add("aparecer");
}

// 5° Melhoria:
if (quantidadeUpgrade["confeiteira"] >= 100 & !melhoriasCompradas["confeiteira_5"]) {
    elementosMelhorias["confeiteira_5"].classList.add("aparecer");
}

// 1° Melhoria:
if (quantidadeUpgrade["chef"] >= 2 & !melhoriasCompradas["chef_1"]) {
    elementosMelhorias["chef_1"].classList.add("aparecer");
}

// 2° Melhoria:
if (quantidadeUpgrade["chef"] >= 7 & !melhoriasCompradas["chef_2"]) {
    elementosMelhorias["chef_2"].classList.add("aparecer");
}

// 3° Melhoria:
if (quantidadeUpgrade["chef"] >= 10 & !melhoriasCompradas["chef_3"]) {
    elementosMelhorias["chef_3"].classList.add("aparecer");
}

// 1° Melhoria:
if (quantidadeUpgrade["padaria"] >= 2 & !melhoriasCompradas["padaria_1"]) {
    elementosMelhorias["padaria_1"].classList.add("aparecer");
}

// 2° Melhoria:
if (quantidadeUpgrade["padaria"] >= 10 & !melhoriasCompradas["padaria_2"]) {
    elementosMelhorias["padaria_2"].classList.add("aparecer");
}

// 1° Melhoria:
if (quantidadeUpgrade["confeitaria"] >= 2 & !melhoriasCompradas["confeitaria_1"]) {
    elementosMelhorias["confeitaria_1"].classList.add("aparecer");
}

// 2° Melhoria:
if (quantidadeUpgrade["confeitaria"] >= 15 & !melhoriasCompradas["confeitaria_2"]) {
    elementosMelhorias["confeitaria_2"].classList.add("aparecer");
}

// 1° Melhoria:
if (quantidadeUpgrade["supermercado"] >= 2 & !melhoriasCompradas["supermercado_1"]) {
    elementosMelhorias["supermercado_1"].classList.add("aparecer");
}

// 2° Melhoria:
if (quantidadeUpgrade["supermercado"] >= 15 & !melhoriasCompradas["supermercado_2"]) {
    elementosMelhorias["supermercado_2"].classList.add("aparecer");
}

// 1° Melhoria:
if (quantidadeUpgrade["cafeteria"] >= 2 & !melhoriasCompradas["cafeteria_1"]) {
    elementosMelhorias["cafeteria_1"].classList.add("aparecer");
}

// 2° Melhoria:
if (quantidadeUpgrade["cafeteria"] >= 15 & !melhoriasCompradas["cafeteria_2"]) {
    elementosMelhorias["cafeteria_2"].classList.add("aparecer");
}
