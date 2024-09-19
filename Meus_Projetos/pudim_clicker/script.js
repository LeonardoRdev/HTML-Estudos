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

// Atribuindo valor para cada variável de Upgrade
listaUpgrades.forEach((upgrade, index) => {
    let elementoUpgrade = document.querySelector(`#upgrade_${upgrade}`);
    elementosUpgrade[upgrade] = elementoUpgrade;

    // BABABA
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
        if (quantidadeUpgrade["confeiteira"] >= 2 & !compreiMelhoriaConfeiteira1) {
            melhoriaConfeiteira1.classList.add("aparecer");
        }

        // 2° Melhoria:
        if (quantidadeUpgrade["confeiteira"] >= 15 & !compreiMelhoriaConfeiteira2) {
            melhoriaConfeiteira2.classList.add("aparecer");
        }

        // 3° Melhoria:
        if (quantidadeUpgrade["confeiteira"] >= 25 & !compreiMelhoriaConfeiteira3) {
            melhoriaConfeiteira3.classList.add("aparecer");
        }

        // 4° Melhoria:
        if (quantidadeUpgrade["confeiteira"] >= 50 & !compreiMelhoriaConfeiteira4) {
            melhoriaConfeiteira4.classList.add("aparecer");
        }

        // 5° Melhoria:
        if (quantidadeUpgrade["confeiteira"] >= 100 & !compreiMelhoriaConfeiteira5) {
            melhoriaConfeiteira5.classList.add("aparecer");
        }

    }
});

// Upgrade Chef:
elementosUpgrade["chef"].addEventListener("click", () => {
    if (pudins >= precoUpgrades["chef"]) {

        // 1° Melhoria:
        if (quantidadeUpgrade["chef"] >= 2 & !compreiMelhoriaChef1) {
            melhoriaChef1.classList.add("aparecer");
        }

        // 2° Melhoria:
        if (quantidadeUpgrade["chef"] >= 7 & !compreiMelhoriaChef2) {
            melhoriaChef2.classList.add("aparecer");
        }

        // 3° Melhoria:
        if (quantidadeUpgrade["chef"] >= 10 & !compreiMelhoriaChef3) {
            melhoriaChef3.classList.add("aparecer");
        }
    }
});

// Upgrade Padaria
elementosUpgrade["padaria"].addEventListener("click", () => {
    if (pudins >= precoUpgrades["padaria"]) {
   
        // 1° Melhoria:
        if (quantidadeUpgrade["padaria"] >= 2 & !compreiMelhoriaPadaria1) {
            melhoriaPadaria1.classList.add("aparecer");
        }

        // 2° Melhoria:
        if (quantidadeUpgrade["padaria"] >= 10 & !compreiMelhoriaPadaria2) {
            melhoriaPadaria2.classList.add("aparecer");
        }
    }
});

// Upgrade Confeitaria
elementosUpgrade["confeitaria"].addEventListener("click", () => {
    if (pudins >= precoUpgrades["confeitaria"]) {

        // 1° Melhoria:
        if (quantidadeUpgrade["confeitaria"] >= 2 & !compreiMelhoriaConfeitaria1) {
            melhoriaConfeitaria1.classList.add("aparecer");
        }

        // 2° Melhoria:
        if (quantidadeUpgrade["confeitaria"] >= 15 & !compreiMelhoriaConfeitaria2) {
            melhoriaConfeitaria2.classList.add("aparecer");
        }

    }
});

// Upgrade Supermercado
elementosUpgrade["supermercado"].addEventListener("click", () => {
    if (pudins >= precoUpgrades["supermercado"]) {

        // 1° Melhoria:
        if (quantidadeUpgrade["supermercado"] >= 2 & !compreiMelhoriaSupermercado1) {
            melhoriaSupermercado1.classList.add("aparecer");
        }

        // 2° Melhoria:
        if (quantidadeUpgrade["supermercado"] >= 15 & !compreiMelhoriaSupermercado2) {
            melhoriaSupermercado2.classList.add("aparecer");
        }

    }
});

// Upgrade Cafeteria
elementosUpgrade["cafeteria"].addEventListener("click", () => {
    if (pudins >= precoUpgrades["cafeteria"]) {

        // 1° Melhoria:
        if (quantidadeUpgrade["cafeteria"] >= 2 & !compreiMelhoriaCafeteria1) {
            melhoriaCafeteria1.classList.add("aparecer");
        }

        // 2° Melhoria:
        if (quantidadeUpgrade["cafeteria"] >= 15 & !compreiMelhoriaCafeteria2) {
            melhoriaCafeteria2.classList.add("aparecer");
        }

    }
});

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

function atualizarPudinsPorClique() {
    console.log(`PPC = (1 + ${poderUpgrades["chef"] * quantidadeUpgrade["chef"]}) * ${poderUpgrades["gourmet"]}`);

    // Atualiza o PPC (Poder Por Clique): 1 (base) + PPC do Chef * Poder do Gourmet (duplica o PPC)     
    poderDoClique = (1 + (poderUpgrades["chef"] * quantidadeUpgrade["chef"])) * poderUpgrades["gourmet"];
    console.log(`=======\n PPC ${poderDoClique}\n=======`);

    // Atualizar texto do TOOLTIP
    atualizarTooltip("chef");
    atualizarTooltip("gourmet");
}


// Melhorias para os upgrades:
let melhoriaConfeiteira1 = document.querySelector("#melhoria_confeiteira_1");
let melhoriaConfeiteira2 = document.querySelector("#melhoria_confeiteira_2");
let melhoriaConfeiteira3 = document.querySelector("#melhoria_confeiteira_3");
let melhoriaConfeiteira4 = document.querySelector("#melhoria_confeiteira_4");
let melhoriaConfeiteira5 = document.querySelector("#melhoria_confeiteira_5");
let melhoriaChef1 = document.querySelector("#melhoria_chef_1");
let melhoriaChef2 = document.querySelector("#melhoria_chef_2");
let melhoriaChef3 = document.querySelector("#melhoria_chef_3");
let melhoriaPadaria1 = document.querySelector("#melhoria_padaria_1");
let melhoriaPadaria2 = document.querySelector("#melhoria_padaria_2");
let melhoriaConfeitaria1 = document.querySelector("#melhoria_confeitaria_1");
let melhoriaConfeitaria2 = document.querySelector("#melhoria_confeitaria_2");
let melhoriaSupermercado1 = document.querySelector("#melhoria_supermercado_1");
let melhoriaSupermercado2 = document.querySelector("#melhoria_supermercado_2");
let melhoriaCafeteria1 = document.querySelector("#melhoria_cafeteria_1");
let melhoriaCafeteria2 = document.querySelector("#melhoria_cafeteria_2");

// Melhorias compradas (para salvar no localStorage)
// - Se o localStorage tiver alguma data sobre "comprei_melhoria_confeiteira1", então ela foi comprada (true), senão, continuar o comportamente padrão (false)
let compreiMelhoriaConfeiteira1 = localStorage.getItem("comprei_melhoria_confeiteira1") ? true : false;
let compreiMelhoriaConfeiteira2 = localStorage.getItem("comprei_melhoria_confeiteira2") ? true : false;
let compreiMelhoriaConfeiteira3 = localStorage.getItem("comprei_melhoria_confeiteira3") ? true : false;
let compreiMelhoriaConfeiteira4 = localStorage.getItem("comprei_melhoria_confeiteira4") ? true : false;
let compreiMelhoriaConfeiteira5 = localStorage.getItem("comprei_melhoria_confeiteira5") ? true : false;
let compreiMelhoriaChef1 = localStorage.getItem("comprei_melhoria_chef1") ? true : false;
let compreiMelhoriaChef2 = localStorage.getItem("comprei_melhoria_chef2") ? true : false;
let compreiMelhoriaChef3 = localStorage.getItem("comprei_melhoria_chef3") ? true : false;
let compreiMelhoriaPadaria1 = localStorage.getItem("comprei_melhoria_padaria1") ? true : false;
let compreiMelhoriaPadaria2 = localStorage.getItem("comprei_melhoria_padaria2") ? true : false;
let compreiMelhoriaConfeitaria1 = localStorage.getItem("comprei_melhoria_confeitaria1") ? true : false;
let compreiMelhoriaConfeitaria2 = localStorage.getItem("comprei_melhoria_confeitaria2") ? true : false;
let compreiMelhoriaSupermercado1 = localStorage.getItem("comprei_melhoria_supermercado1") ? true : false;
let compreiMelhoriaSupermercado2 = localStorage.getItem("comprei_melhoria_supermercado2") ? true : false;
let compreiMelhoriaCafeteria1 = localStorage.getItem("comprei_melhoria_cafeteria1") ? true : false;
let compreiMelhoriaCafeteria2 = localStorage.getItem("comprei_melhoria_cafeteria2") ? true : false;

// Preço das MELHORIAS
let precoMelhoriaConfeiteira1 = 50;
let precoMelhoriaConfeiteira2 = 13;
let precoMelhoriaConfeiteira3 = 13;
let precoMelhoriaConfeiteira4 = 13;
let precoMelhoriaConfeiteira5 = 13;
let precoMelhoriaChef1 = 500;
let precoMelhoriaChef2 = 11;
let precoMelhoriaChef3 = 11;
let precoMelhoriaPadaria1 = 2000;
let precoMelhoriaPadaria2 = 11;
let precoMelhoriaConfeitaria1 = 15000;
let precoMelhoriaConfeitaria2 = 11;
let precoMelhoriaSupermercado1 = 50000;
let precoMelhoriaSupermercado2 = 11;
let precoMelhoriaCafeteria1 = 125000;
let precoMelhoriaCafeteria2 = 11;

// Lista com preços das MELHORIAS
const listaPrecoMelhorias = [
    precoMelhoriaConfeiteira1,
    precoMelhoriaConfeiteira2,
    precoMelhoriaConfeiteira3,
    precoMelhoriaConfeiteira4,
    precoMelhoriaConfeiteira5,
    precoMelhoriaChef1,
    precoMelhoriaChef2,
    precoMelhoriaChef3,
    precoMelhoriaPadaria1,
    precoMelhoriaPadaria2,
    precoMelhoriaConfeitaria1,
    precoMelhoriaConfeitaria2,
    precoMelhoriaSupermercado1,
    precoMelhoriaSupermercado2,
    precoMelhoriaCafeteria1,
    precoMelhoriaCafeteria2
];

// Lista com as MELHORIAS
const listaMelhorias = [
    [melhoriaConfeiteira1.querySelector(".melhoria"), precoMelhoriaConfeiteira1],
    [melhoriaConfeiteira2.querySelector(".melhoria"), precoMelhoriaConfeiteira2],
    [melhoriaConfeiteira3.querySelector(".melhoria"), precoMelhoriaConfeiteira3],
    [melhoriaConfeiteira4.querySelector(".melhoria"), precoMelhoriaConfeiteira4],
    [melhoriaConfeiteira5.querySelector(".melhoria"), precoMelhoriaConfeiteira5],
    [melhoriaChef1.querySelector(".melhoria"), precoMelhoriaChef1],
    [melhoriaChef2.querySelector(".melhoria"), precoMelhoriaChef2],
    [melhoriaChef3.querySelector(".melhoria"), precoMelhoriaChef3],
    [melhoriaPadaria1.querySelector(".melhoria"), precoMelhoriaPadaria1],
    [melhoriaPadaria2.querySelector(".melhoria"), precoMelhoriaPadaria2],
    [melhoriaConfeitaria1.querySelector(".melhoria"), precoMelhoriaConfeitaria1],
    [melhoriaConfeitaria2.querySelector(".melhoria"), precoMelhoriaConfeitaria2],
    [melhoriaSupermercado1.querySelector(".melhoria"), precoMelhoriaSupermercado1],
    [melhoriaSupermercado2.querySelector(".melhoria"), precoMelhoriaSupermercado2],
    [melhoriaCafeteria1.querySelector(".melhoria"), precoMelhoriaCafeteria1],
    [melhoriaCafeteria2.querySelector(".melhoria"), precoMelhoriaCafeteria2],
];

// Comprar MELHORIAS
melhoriaConfeiteira1.addEventListener("click", () => {
    // Preço da melhoria
    if (pudins >= precoMelhoriaConfeiteira1) {
        // Som ao comprar MELHORIA
        tocarAudio(audiosTocaveis["comprarMelhoria"]);
        
        pudins -= precoMelhoriaConfeiteira1;
        atualizarQuantidadePudins();

        // benefício da melhoria
        poderUpgrades["confeiteira"] += 0.5;
        localStorage.setItem("poder_upgrade_confeiteira", poderUpgrades["confeiteira"]);

        atualizarTooltip("confeiteira");
        melhoriaConfeiteira1.style.display = "none";
        atualizarPudinsPorSegundo();
        
        // Armazena a informação no localStorage de que a melhoria foi comprada, e não deverá aparecer mais.
        localStorage.setItem("comprei_melhoria_confeiteira1", true);
    }
});

melhoriaConfeiteira2.addEventListener("click", () => {
    // Preço da melhoria
    if (pudins >= precoMelhoriaConfeiteira2) {
        // Som ao comprar MELHORIA
        tocarAudio(audiosTocaveis["comprarMelhoria"]);

        pudins -= precoMelhoriaConfeiteira2;
        atualizarQuantidadePudins();

        // benefício da melhoria
        poderUpgrades["confeiteira"] += 3;
        localStorage.setItem("poder_upgrade_confeiteira", poderUpgrades["confeiteira"]);

        atualizarTooltip("confeiteira");
        melhoriaConfeiteira2.style.display = "none";
        atualizarPudinsPorSegundo();

        // Armazena a informação no localStorage de que a melhoria foi comprada, e não deverá aparecer mais.
        localStorage.setItem("comprei_melhoria_confeiteira2", true);
    }
});

melhoriaConfeiteira3.addEventListener("click", () => {
    // Preço da melhoria
    if (pudins >= precoMelhoriaConfeiteira3) {
        // Som ao comprar MELHORIA
        tocarAudio(audiosTocaveis["comprarMelhoria"]);

        pudins -= precoMelhoriaConfeiteira3;
        atualizarQuantidadePudins();

        // benefício da melhoria
        poderUpgrades["confeiteira"] += 3;
        localStorage.setItem("poder_upgrade_confeiteira", poderUpgrades["confeiteira"]);

        atualizarTooltip("confeiteira");
        melhoriaConfeiteira3.style.display = "none";
        atualizarPudinsPorSegundo();

        // Armazena a informação no localStorage de que a melhoria foi comprada, e não deverá aparecer mais.
        localStorage.setItem("comprei_melhoria_confeiteira3", true);
    }
});

melhoriaConfeiteira4.addEventListener("click", () => {
    // Preço da melhoria
    if (pudins >= precoMelhoriaConfeiteira4) {
        // Som ao comprar MELHORIA
        tocarAudio(audiosTocaveis["comprarMelhoria"]);

        pudins -= precoMelhoriaConfeiteira4;
        atualizarQuantidadePudins();

        // benefício da melhoria
        poderUpgrades["confeiteira"] += 3;
        localStorage.setItem("poder_upgrade_confeiteira", poderUpgrades["confeiteira"]);

        atualizarTooltip("confeiteira");
        melhoriaConfeiteira4.style.display = "none";
        atualizarPudinsPorSegundo();
        
        // Armazena a informação no localStorage de que a melhoria foi comprada, e não deverá aparecer mais.
        localStorage.setItem("comprei_melhoria_confeiteira4", true);
    }
});

melhoriaConfeiteira5.addEventListener("click", () => {
    // Preço da melhoria
    if (pudins >= precoMelhoriaConfeiteira5) {
        // Som ao comprar MELHORIA
        tocarAudio(audiosTocaveis["comprarMelhoria"]);

        pudins -= precoMelhoriaConfeiteira5;
        atualizarQuantidadePudins();

        // benefício da melhoria
        poderUpgrades["confeiteira"] += 3;
        localStorage.setItem("poder_upgrade_confeiteira", poderUpgrades["confeiteira"]);

        atualizarTooltip("confeiteira");
        melhoriaConfeiteira5.style.display = "none";
        atualizarPudinsPorSegundo();
        
        // Armazena a informação no localStorage de que a melhoria foi comprada, e não deverá aparecer mais.
        localStorage.setItem("comprei_melhoria_confeiteira5", true);
    }
});

melhoriaChef1.addEventListener("click", () => {
    // Preço da melhoria
    if (pudins >= precoMelhoriaChef1) {
        // Som ao comprar MELHORIA
        tocarAudio(audiosTocaveis["comprarMelhoria"]);

        pudins -= precoMelhoriaChef1;
        atualizarQuantidadePudins();

        // benefício da melhoria
        poderUpgrades["chef"] += 1;
        localStorage.setItem("poder_upgrade_chef", poderUpgrades["chef"]);

        atualizarTooltip("chef");
        melhoriaChef1.style.display = "none";
        atualizarPudinsPorClique();
        
        // Armazena a informação no localStorage de que a melhoria foi comprada, e não deverá aparecer mais.
        localStorage.setItem("comprei_melhoria_chef1", true);
    }
});

melhoriaChef2.addEventListener("click", () => {
    // Preço da melhoria
    if (pudins >= precoMelhoriaChef2) {
        // Som ao comprar MELHORIA
        tocarAudio(audiosTocaveis["comprarMelhoria"]);

        pudins -= precoMelhoriaChef2;
        atualizarQuantidadePudins();

        // benefício da melhoria
        poderUpgrades["confeiteira"] += 3;
        localStorage.setItem("poder_upgrade_confeiteira", poderUpgrades["confeiteira"]);

        atualizarTooltip("chef");
        melhoriaChef2.style.display = "none";
        atualizarPudinsPorSegundo();
        
        // Armazena a informação no localStorage de que a melhoria foi comprada, e não deverá aparecer mais.
        localStorage.setItem("comprei_melhoria_chef2", true);
    }
});

melhoriaChef3.addEventListener("click", () => {
    // Preço da melhoria
    if (pudins >= precoMelhoriaChef3) {
        // Som ao comprar MELHORIA
        tocarAudio(audiosTocaveis["comprarMelhoria"]);

        pudins -= precoMelhoriaChef3;
        atualizarQuantidadePudins();

        // benefício da melhoria
        poderUpgrades["confeiteira"] += 3;
        localStorage.setItem("poder_upgrade_confeiteira", poderUpgrades["confeiteira"]);

        atualizarTooltip("chef");
        melhoriaChef3.style.display = "none";
        atualizarPudinsPorSegundo();
        
        // Armazena a informação no localStorage de que a melhoria foi comprada, e não deverá aparecer mais.
        localStorage.setItem("comprei_melhoria_chef3", true);
    }
});

melhoriaPadaria1.addEventListener("click", () => {
    // Preço da melhoria
    if (pudins >= precoMelhoriaPadaria1) {
        // Som ao comprar MELHORIA
        tocarAudio(audiosTocaveis["comprarMelhoria"]);

        pudins -= precoMelhoriaPadaria1;
        atualizarQuantidadePudins();

        // benefício da melhoria
        poderUpgrades["padaria"] += 15;
        localStorage.setItem("poder_upgrade_padaria", poderUpgrades["padaria"]);

        atualizarTooltip("padaria");
        melhoriaPadaria1.style.display = "none";
        atualizarPudinsPorSegundo();
        
        // Armazena a informação no localStorage de que a melhoria foi comprada, e não deverá aparecer mais.
        localStorage.setItem("comprei_melhoria_padaria1", true);
    }
});

melhoriaPadaria2.addEventListener("click", () => {
    // Preço da melhoria
    if (pudins >= precoMelhoriaPadaria2) {
        // Som ao comprar MELHORIA
        tocarAudio(audiosTocaveis["comprarMelhoria"]);

        pudins -= precoMelhoriaPadaria2;
        atualizarQuantidadePudins();

        // benefício da melhoria
        poderUpgrades["confeiteira"] += 3;
        localStorage.setItem("poder_upgrade_confeiteira", poderUpgrades["confeiteira"]);

        atualizarTooltip("padaria");
        melhoriaPadaria2.style.display = "none";
        atualizarPudinsPorSegundo();
        
        // Armazena a informação no localStorage de que a melhoria foi comprada, e não deverá aparecer mais.
        localStorage.setItem("comprei_melhoria_padaria2", true);
    }
});

melhoriaConfeitaria1.addEventListener("click", () => {
    // Preço da melhoria
    if (pudins >= precoMelhoriaConfeitaria1) {
        // Som ao comprar MELHORIA
        tocarAudio(audiosTocaveis["comprarMelhoria"]);

        pudins -= precoMelhoriaConfeitaria1;
        atualizarQuantidadePudins();

        // benefício da melhoria
        poderUpgrades["confeitaria"] += 100;
        localStorage.setItem("poder_upgrade_confeitaria", poderUpgrades["confeitaria"]);

        atualizarTooltip("confeitaria");
        melhoriaConfeitaria1.style.display = "none";
        atualizarPudinsPorSegundo();
        
        // Armazena a informação no localStorage de que a melhoria foi comprada, e não deverá aparecer mais.
        localStorage.setItem("comprei_melhoria_confeitaria1", true);
    }
});

melhoriaConfeitaria2.addEventListener("click", () => {
    // Preço da melhoria
    if (pudins >= precoMelhoriaConfeitaria2) {
        // Som ao comprar MELHORIA
        tocarAudio(audiosTocaveis["comprarMelhoria"]);

        pudins -= precoMelhoriaConfeitaria2;
        atualizarQuantidadePudins();

        // benefício da melhoria
        poderUpgrades["confeiteira"] += 3;
        localStorage.setItem("poder_upgrade_confeiteira", poderUpgrades["confeiteira"]);

        atualizarTooltip("confeitaria");
        melhoriaConfeitaria2.style.display = "none";
        atualizarPudinsPorSegundo();
        
        // Armazena a informação no localStorage de que a melhoria foi comprada, e não deverá aparecer mais.
        localStorage.setItem("comprei_melhoria_confeitaria2", true);
    }
});

melhoriaSupermercado1.addEventListener("click", () => {
    // Preço da melhoria
    if (pudins >= precoMelhoriaSupermercado1) {
        // Som ao comprar MELHORIA
        tocarAudio(audiosTocaveis["comprarMelhoria"]);

        pudins -= precoMelhoriaSupermercado1;
        atualizarQuantidadePudins();

        // benefício da melhoria
        poderUpgrades["supermercado"] += 250;
        localStorage.setItem("poder_upgrade_supermercado", poderUpgrades["supermercado"]);

        atualizarTooltip("supermercado");
        melhoriaSupermercado1.style.display = "none";
        atualizarPudinsPorSegundo();
        
        // Armazena a informação no localStorage de que a melhoria foi comprada, e não deverá aparecer mais.
        localStorage.setItem("comprei_melhoria_supermercado1", true);
    }
});

melhoriaSupermercado2.addEventListener("click", () => {
    // Preço da melhoria
    if (pudins >= precoMelhoriaSupermercado2) {
        // Som ao comprar MELHORIA
        tocarAudio(audiosTocaveis["comprarMelhoria"]);

        pudins -= precoMelhoriaSupermercado2;
        atualizarQuantidadePudins();

        // benefício da melhoria
        poderUpgrades["confeiteira"] += 3;
        localStorage.setItem("poder_upgrade_confeiteira", poderUpgrades["confeiteira"]);

        atualizarTooltip("supermercado");
        melhoriaSupermercado2.style.display = "none";
        atualizarPudinsPorSegundo();
        
        // Armazena a informação no localStorage de que a melhoria foi comprada, e não deverá aparecer mais.
        localStorage.setItem("comprei_melhoria_supermercado2", true);
    }
});

melhoriaCafeteria1.addEventListener("click", () => {
    // Preço da melhoria
    if (pudins >= precoMelhoriaCafeteria1) {
        // Som ao comprar MELHORIA
        tocarAudio(audiosTocaveis["comprarMelhoria"]);

        pudins -= precoMelhoriaCafeteria1;
        atualizarQuantidadePudins();

        // benefício da melhoria
        poderUpgrades["cafeteria"] += 750;
        localStorage.setItem("poder_upgrade_cafeteria", poderUpgrades["cafeteria"]);

        atualizarTooltip("cafeteria");
        melhoriaCafeteria1.style.display = "none";
        atualizarPudinsPorSegundo();
        
        // Armazena a informação no localStorage de que a melhoria foi comprada, e não deverá aparecer mais.
        localStorage.setItem("comprei_melhoria_cafeteria1", true);
    }
});

melhoriaCafeteria2.addEventListener("click", () => {
    // Preço da melhoria
    if (pudins >= precoMelhoriaCafeteria2) {
        // Som ao comprar MELHORIA
        tocarAudio(audiosTocaveis["comprarMelhoria"]);

        pudins -= precoMelhoriaCafeteria2;
        atualizarQuantidadePudins();

        // benefício da melhoria
        poderUpgrades["confeiteira"] += 3;
        localStorage.setItem("poder_upgrade_confeiteira", poderUpgrades["confeiteira"]);

        atualizarTooltip("cafeteria");
        melhoriaCafeteria2.style.display = "none";
        atualizarPudinsPorSegundo();
        
        // Armazena a informação no localStorage de que a melhoria foi comprada, e não deverá aparecer mais.
        localStorage.setItem("comprei_melhoria_cafeteria2", true);
    }
});



// Informações do TOOLTIP das MELHORIAS (descrição, nome e preço)
melhoriaConfeiteira1.addEventListener("mouseover", () => {
    mostrarTooltip("Curso EAD de confeiteira", `${precoMelhoriaConfeiteira1} Pudins`, "Aumenta a produção das confeiteiras em 2x");
});

melhoriaConfeiteira2.addEventListener("mouseover", () => {
    mostrarTooltip("Aulas com quem sabe", `${precoMelhoriaConfeiteira2} Pudins`, "...");
});

melhoriaConfeiteira3.addEventListener("mouseover", () => {
    mostrarTooltip("Aulas com quem sabe", `${precoMelhoriaConfeiteira3} Pudins`, "...");
});

melhoriaConfeiteira4.addEventListener("mouseover", () => {
    mostrarTooltip("Aulas com quem sabe", `${precoMelhoriaConfeiteira4} Pudins`, "...");
});

melhoriaConfeiteira5.addEventListener("mouseover", () => {
    mostrarTooltip("Aulas com quem sabe", `${precoMelhoriaConfeiteira5} Pudins`, "...");
});

melhoriaChef1.addEventListener("mouseover", () => {
    mostrarTooltip("Gato cozinheiro", `${precoMelhoriaChef1} Pudins`, "+1 Poder do Clique para cada Chef");
});

melhoriaChef2.addEventListener("mouseover", () => {
    mostrarTooltip("Tony Stark brasileiro", `${precoMelhoriaChef2} Pudins`, "...");
});

melhoriaChef3.addEventListener("mouseover", () => {
    mostrarTooltip("Nome a ser criado...", `${precoMelhoriaChef3} Pudins`, "...");
});

melhoriaPadaria1.addEventListener("mouseover", () => {
    mostrarTooltip("Pãochorro de forma", `${precoMelhoriaPadaria1} Pudins`, "Aumenta a produção das padarias em 2x");
});

melhoriaPadaria2.addEventListener("mouseover", () => {
    mostrarTooltip("Especialista em pães", `${precoMelhoriaPadaria2} Pudins`, "...");
});

melhoriaConfeitaria1.addEventListener("mouseover", () => {
    mostrarTooltip("Nome: Nome Legal", `${precoMelhoriaConfeitaria1} Pudins`, "Aumenta a produção das confeitarias em 2x");
});

melhoriaConfeitaria2.addEventListener("mouseover", () => {
    mostrarTooltip("Nome: Nome Legal", `${precoMelhoriaConfeitaria2} Pudins`, "...");
});

melhoriaSupermercado1.addEventListener("mouseover", () => {
    mostrarTooltip("Nome: Nome Legal", `${precoMelhoriaSupermercado1} Pudins`, "Aumenta a produção das supermercado em 2x");
});

melhoriaSupermercado2.addEventListener("mouseover", () => {
    mostrarTooltip("Nome: Nome Legal", `${precoMelhoriaSupermercado2} Pudins`, "...");
});

melhoriaCafeteria1.addEventListener("mouseover", () => {
    mostrarTooltip("Cookie clica 🍪", `${precoMelhoriaCafeteria1} Pudins`, "Aumenta a produção das cafeterias em 2x");
});

melhoriaCafeteria2.addEventListener("mouseover", () => {
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
    listaMelhorias.forEach(melhoria => {
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
if (quantidadeUpgrade["confeiteira"] >= 2 & !compreiMelhoriaConfeiteira1) {
    melhoriaConfeiteira1.classList.add("aparecer");
}

// 2° Melhoria:
if (quantidadeUpgrade["confeiteira"] >= 15 & !compreiMelhoriaConfeiteira2) {
    melhoriaConfeiteira2.classList.add("aparecer");
}

// 3° Melhoria:
if (quantidadeUpgrade["confeiteira"] >= 25 & !compreiMelhoriaConfeiteira3) {
    melhoriaConfeiteira3.classList.add("aparecer");
}

// 4° Melhoria:
if (quantidadeUpgrade["confeiteira"] >= 50 & !compreiMelhoriaConfeiteira4) {
    melhoriaConfeiteira4.classList.add("aparecer");
}

// 5° Melhoria:
if (quantidadeUpgrade["confeiteira"] >= 100 & !compreiMelhoriaConfeiteira5) {
    melhoriaConfeiteira5.classList.add("aparecer");
}

// 1° Melhoria:
if (quantidadeUpgrade["chef"] >= 2 & !compreiMelhoriaChef1) {
    melhoriaChef1.classList.add("aparecer");
}

// 2° Melhoria:
if (quantidadeUpgrade["chef"] >= 7 & !compreiMelhoriaChef2) {
    melhoriaChef2.classList.add("aparecer");
}

// 3° Melhoria:
if (quantidadeUpgrade["chef"] >= 10 & !compreiMelhoriaChef3) {
    melhoriaChef3.classList.add("aparecer");
}

// 1° Melhoria:
if (quantidadeUpgrade["padaria"] >= 2 & !compreiMelhoriaPadaria1) {
    melhoriaPadaria1.classList.add("aparecer");
}

// 2° Melhoria:
if (quantidadeUpgrade["padaria"] >= 10 & !compreiMelhoriaPadaria2) {
    melhoriaPadaria2.classList.add("aparecer");
}

// 1° Melhoria:
if (quantidadeUpgrade["confeitaria"] >= 2 & !compreiMelhoriaConfeitaria1) {
    melhoriaConfeitaria1.classList.add("aparecer");
}

// 2° Melhoria:
if (quantidadeUpgrade["confeitaria"] >= 15 & !compreiMelhoriaConfeitaria2) {
    melhoriaConfeitaria2.classList.add("aparecer");
}

// 1° Melhoria:
if (quantidadeUpgrade["supermercado"] >= 2 & !compreiMelhoriaSupermercado1) {
    melhoriaSupermercado1.classList.add("aparecer");
}

// 2° Melhoria:
if (quantidadeUpgrade["supermercado"] >= 15 & !compreiMelhoriaSupermercado2) {
    melhoriaSupermercado2.classList.add("aparecer");
}

// 1° Melhoria:
if (quantidadeUpgrade["cafeteria"] >= 2 & !compreiMelhoriaCafeteria1) {
    melhoriaCafeteria1.classList.add("aparecer");
}

// 2° Melhoria:
if (quantidadeUpgrade["cafeteria"] >= 15 & !compreiMelhoriaCafeteria2) {
    melhoriaCafeteria2.classList.add("aparecer");
}
