// Definindo as variáveis:

let divImagemPudins = document.querySelector("#pudins");
let pudimApertado = document.querySelector("#pudim_apertado");
let quantidadePudins = document.querySelector("#quantidade_pudins");
let PPS = document.querySelector("#pudins_por_segundo");

const audioClicarPudim = new Audio();
audioClicarPudim.src = "../Arquivos_pagina_inicial/audios/boing.mp3";
const audioComprarUpgrade = new Audio();
audioComprarUpgrade.src = "../Arquivos_pagina_inicial/audios/comprar_upgrade1.mp3";
const audioComprarMelhoria = new Audio();
audioComprarMelhoria.src = "../Arquivos_pagina_inicial/audios/comprar_upgrade2.mp3";

// Variáveis dos upgrades: elemento, texto preço, texto quantidade e quantidade:
const listaUpgrades = [
    "confeiteira",
    "chef",
    "padaria",
    "confeitaria",
    "supermercado",
    "cafeteria",
    "gourmet"
];

const elementosUpgrade = {};
const precoParagrafosUpgrades = {};
const paragrafoQuantidadeUpgrade = {};
const quantidadeUpgrade = {};
const poderUpgrade = {};

listaUpgrades.forEach(upgrade => {
    let elementoUpgrade = document.querySelector(`#upgrade_${upgrade}`);
    elementosUpgrade[upgrade] = elementoUpgrade;
    precoParagrafosUpgrades[upgrade] = elementoUpgrade.querySelector(`.custo_upgrade p`);
    paragrafoQuantidadeUpgrade[upgrade] = elementoUpgrade.querySelector(`.quantidade_upgrade`);
    quantidadeUpgrade[upgrade] = 0;
});

// Pudins / Poder do Clique / Preços iniciais dos upgrades:
let pudins = 0;
let poderDoClique = 1;
let pudinsPorSegundo = 0;

poderUpgrade["confeiteira"] = 0.5; // + Pudim Por Segundo
poderUpgrade["chef"] = 1; // + Poder Por Clique
poderUpgrade["padaria"] = 15; // + PPS
poderUpgrade["confeitaria"] = 100; // + PPS
poderUpgrade["supermercado"] = 250; // + PPS
poderUpgrade["cafeteria"] = 750; // + PPS
poderUpgrade["gourmet"] = 1; // ²PPS

let precoUpgradeConfeiteira = 10;
let precoUpgradeChef = 100;
let precoUpgradePadaria = 500;
let precoUpgradeConfeitaria = 3000;
let precoUpgradeSupermercado = 20000;
let precoUpgradeCafeteria = 35000;
let precoUpgradeGourmet = 350000;

// TOOLTIPS (remover depois?)
atualizarTooltip("confeiteira");
atualizarTooltip("chef");
atualizarTooltip("padaria");
atualizarTooltip("confeitaria");
atualizarTooltip("supermercado");
atualizarTooltip("cafeteria");
atualizarTooltip("gourmet");

// FUNÇÕES:
// Clicar no PUDIM:
divImagemPudins.addEventListener("click", (e) => {
    // Som ao clickar:
    audioClicarPudim.play();
    if (audioClicarPudim.currentTime != 0) {
        // Se clickar muito rápido, reiniciar o som:
        audioClicarPudim.currentTime = 0;
    }

    pudins += poderDoClique;

    atualizarQuantidadePudins();


    // Efeito do cursor ao clicar no pudim
    let x = e.pageX;
    let y = e.pageY

    let span = document.createElement("span");
    let paragrafo = document.createElement("p");
    paragrafo.innerHTML = `+${poderDoClique}`;
    span.appendChild(paragrafo);
    span.classList.add("click_effect");
    span.style.top = y + "px";
    span.style.left = x + "px";
    document.body.appendChild(span);

    setTimeout(() => {
        span.remove();
    }, 1500);

});

// Atualizar contador de Pudins:
function atualizarQuantidadePudins() {
    // Gambiarra por conta do Javascript, já que ele não calcula números flutuantes com precisão:
    pudins = Math.round(pudins * 10) / 10;
    quantidadePudins.innerHTML = `Pudins: ${pudins}`;
}


// Upgrade Confeiteira:
elementosUpgrade["confeiteira"].addEventListener("click", () => {
    
    if (pudins >= precoUpgradeConfeiteira) {
        tocarSomComprarUpgrade();
        quantidadeUpgrade["confeiteira"]++;
        paragrafoQuantidadeUpgrade["confeiteira"].innerHTML = quantidadeUpgrade["confeiteira"];
        
        // Ativar TOOLTIP do UPGRADE
        elementosUpgrade["confeiteira"].querySelector(".informacoes_upgrade").classList.add("mostrar_before", "mostrar_after");

        // Atualizar texto do TOOLTIP
        atualizarTooltip("confeiteira");
        
        // Gasta os pudins para adquirir o upgrade:
        pudins -= precoUpgradeConfeiteira;
        atualizarQuantidadePudins();

        // Aumenta o preço do upgrade:
        precoUpgradeConfeiteira += 1.5 * quantidadeUpgrade["confeiteira"];
        precoParagrafosUpgrades["confeiteira"].innerHTML = `Pudins: ${precoUpgradeConfeiteira.toFixed(1)}`;

        // Recompensa fornecida pelo Upgrade:
        atualizarPudinsPorSegundo();

        // 1° Melhoria:
        if (quantidadeUpgrade["confeiteira"] >= 2) {
            melhoriaConfeiteira1.classList.add("aparecer");
        }

        // 2° Melhoria:
        if (quantidadeUpgrade["confeiteira"] >= 15) {
            melhoriaConfeiteira2.classList.add("aparecer");
        }

        // 3° Melhoria:
        if (quantidadeUpgrade["confeiteira"] >= 25) {
            melhoriaConfeiteira3.classList.add("aparecer");
        }

        // 4° Melhoria:
        if (quantidadeUpgrade["confeiteira"] >= 50) {
            melhoriaConfeiteira4.classList.add("aparecer");
        }

        // 5° Melhoria:
        if (quantidadeUpgrade["confeiteira"] >= 100) {
            melhoriaConfeiteira5.classList.add("aparecer");
        }

    }
});

// Upgrade Chef:
elementosUpgrade["chef"].addEventListener("click", () => {
    if (pudins >= precoUpgradeChef) {
        tocarSomComprarUpgrade();
        quantidadeUpgrade["chef"]++;
        paragrafoQuantidadeUpgrade["chef"].innerHTML = quantidadeUpgrade["chef"];

        // Ativar TOOLTIP do UPGRADE
        elementosUpgrade["chef"].querySelector(".informacoes_upgrade").classList.add("mostrar_before", "mostrar_after");

        pudins -= precoUpgradeChef;
        atualizarQuantidadePudins();

        precoUpgradeChef += 0.7 * precoUpgradeChef + (1.2 * quantidadeUpgrade["chef"]);
        precoParagrafosUpgrades["chef"].innerHTML = `Pudins: ${precoUpgradeChef.toFixed(1)}`;

        // poderDoClique++;
        atualizarPudinsPorClique();
        
        // 1° Melhoria:
        if (quantidadeUpgrade["chef"] >= 2) {
            melhoriaChef1.classList.add("aparecer");
        }

        // 2° Melhoria:
        if (quantidadeUpgrade["chef"] >= 7) {
            melhoriaChef2.classList.add("aparecer");
        }

        // 3° Melhoria:
        if (quantidadeUpgrade["chef"] >= 10) {
            melhoriaChef3.classList.add("aparecer");
        }
    }
});

// Upgrade Padaria
elementosUpgrade["padaria"].addEventListener("click", () => {
    if (pudins >= precoUpgradePadaria) {
        tocarSomComprarUpgrade();
        quantidadeUpgrade["padaria"]++;
        paragrafoQuantidadeUpgrade["padaria"].innerHTML = quantidadeUpgrade["padaria"];

        // Ativar TOOLTIP do UPGRADE
        elementosUpgrade["padaria"].querySelector(".informacoes_upgrade").classList.add("mostrar_before", "mostrar_after");

        // Atualizar texto do TOOLTIP
        atualizarTooltip("padaria");

        pudins -= precoUpgradePadaria;
        atualizarQuantidadePudins();

        precoUpgradePadaria += 0.5 * precoUpgradePadaria + (1.3 * quantidadeUpgrade["padaria"]);
        precoParagrafosUpgrades["padaria"].innerHTML = `Pudins: ${precoUpgradePadaria.toFixed(1)}`;

        atualizarPudinsPorSegundo();
                
        // 1° Melhoria:
        if (quantidadeUpgrade["padaria"] >= 2) {
            melhoriaPadaria1.classList.add("aparecer");
        }

        // 2° Melhoria:
        if (quantidadeUpgrade["padaria"] >= 10) {
            melhoriaPadaria2.classList.add("aparecer");
        }
    }
});

// Upgrade Confeitaria
elementosUpgrade["confeitaria"].addEventListener("click", () => {
    if (pudins >= precoUpgradeConfeitaria) {
        tocarSomComprarUpgrade();
        quantidadeUpgrade["confeitaria"]++;
        paragrafoQuantidadeUpgrade["confeitaria"].innerHTML = quantidadeUpgrade["confeitaria"];

        // Ativar TOOLTIP do UPGRADE
        elementosUpgrade["confeitaria"].querySelector(".informacoes_upgrade").classList.add("mostrar_before", "mostrar_after");

        // Atualizar texto do TOOLTIP
        atualizarTooltip("confeitaria");

        pudins -= precoUpgradeConfeitaria;
        atualizarQuantidadePudins();

        precoUpgradeConfeitaria += 0.4 * precoUpgradeConfeitaria + (1.5 * quantidadeUpgrade["confeitaria"]);
        precoParagrafosUpgrades["confeitaria"].innerHTML = `Pudins: ${precoUpgradeConfeitaria.toFixed(1)}`;

        atualizarPudinsPorSegundo();
                
        // 1° Melhoria:
        if (quantidadeUpgrade["confeitaria"] >= 2) {
            melhoriaConfeitaria1.classList.add("aparecer");
        }

        // 2° Melhoria:
        if (quantidadeUpgrade["confeitaria"] >= 15) {
            melhoriaConfeitaria2.classList.add("aparecer");
        }

    }
});

// Upgrade Supermercado
elementosUpgrade["supermercado"].addEventListener("click", () => {
    if (pudins >= precoUpgradeSupermercado) {
        tocarSomComprarUpgrade();
        quantidadeUpgrade["supermercado"]++;
        paragrafoQuantidadeUpgrade["supermercado"].innerHTML = quantidadeUpgrade["supermercado"];

        // Ativar TOOLTIP do UPGRADE
        elementosUpgrade["supermercado"].querySelector(".informacoes_upgrade").classList.add("mostrar_before", "mostrar_after");

        // Atualizar texto do TOOLTIP
        atualizarTooltip("supermercado");

        pudins -= precoUpgradeSupermercado;
        atualizarQuantidadePudins();

        precoUpgradeSupermercado += 0.6 * precoUpgradeSupermercado + (1.5 * quantidadeUpgrade["supermercado"]);
        precoParagrafosUpgrades["supermercado"].innerHTML = `Pudins: ${precoUpgradeSupermercado.toFixed(1)}`;

        atualizarPudinsPorSegundo();
                
        // 1° Melhoria:
        if (quantidadeUpgrade["supermercado"] >= 2) {
            melhoriaSupermercado1.classList.add("aparecer");
        }

        // 2° Melhoria:
        if (quantidadeUpgrade["supermercado"] >= 15) {
            melhoriaSupermercado2.classList.add("aparecer");
        }

    }
});

// Upgrade Cafeteria
elementosUpgrade["cafeteria"].addEventListener("click", () => {
    if (pudins >= precoUpgradeCafeteria) {
        tocarSomComprarUpgrade();
        quantidadeUpgrade["cafeteria"]++;
        paragrafoQuantidadeUpgrade["cafeteria"].innerHTML = quantidadeUpgrade["cafeteria"];

        // Ativar TOOLTIP do UPGRADE
        elementosUpgrade["cafeteria"].querySelector(".informacoes_upgrade").classList.add("mostrar_before", "mostrar_after");

        // Atualizar texto do TOOLTIP
        atualizarTooltip("cafeteria");

        pudins -= precoUpgradeCafeteria;
        atualizarQuantidadePudins();

        precoUpgradeCafeteria += 0.4 * precoUpgradeCafeteria + (1.5 * quantidadeUpgrade["cafeteria"]);
        precoParagrafosUpgrades["cafeteria"].innerHTML = `Pudins: ${precoUpgradeCafeteria.toFixed(1)}`;

        atualizarPudinsPorSegundo();
                
        // 1° Melhoria:
        if (quantidadeUpgrade["cafeteria"] >= 2) {
            melhoriaCafeteria1.classList.add("aparecer");
        }

        // 2° Melhoria:
        if (quantidadeUpgrade["cafeteria"] >= 15) {
            melhoriaCafeteria2.classList.add("aparecer");
        }

    }
});

// Upgrade Restaurante Gourmet
elementosUpgrade["gourmet"].addEventListener("click", () => {
    if (pudins >= precoUpgradeGourmet) {
        tocarSomComprarUpgrade();
        quantidadeUpgrade["gourmet"]++;
        paragrafoQuantidadeUpgrade["gourmet"].innerHTML = quantidadeUpgrade["gourmet"];

        // Ativar TOOLTIP do UPGRADE
        elementosUpgrade["gourmet"].querySelector(".informacoes_upgrade").classList.add("mostrar_before", "mostrar_after");

        pudins -= precoUpgradeGourmet;
        atualizarQuantidadePudins();

        precoUpgradeGourmet += 0.7 * precoUpgradeGourmet + (1.5 * quantidadeUpgrade["gourmet"]);
        precoParagrafosUpgrades["gourmet"].innerHTML = `Pudins: ${precoUpgradeGourmet.toFixed(1)}`;

        // Esse upgrade está sempre ativo, porém, a cada compra DELE o PPC (Poder por Click) total é multiplicado pelo poder DESTE upgrade, começando com x1.
        poderUpgrade["gourmet"] *= 2;
        atualizarPudinsPorClique();
    }
});

function tocarSomComprarUpgrade() {
    audioComprarUpgrade.play();
    if (audioComprarUpgrade.currentTime != 0) {
        // Se clickar muito rápido, reiniciar o som:
        audioComprarUpgrade.currentTime = 0;
    }
}

function tocarSomComprarMelhoria() {
    audioComprarMelhoria.play();
    if (audioComprarMelhoria.currentTime != 0) {
        // Se clickar muito rápido, reiniciar o som:
        audioComprarMelhoria.currentTime = 0;
    }
}

const listaUpgradesPorSegundo = [
    "confeiteira",
    "padaria",
    "confeitaria",
    "supermercado",
    "cafeteria",
];


function atualizarPudinsPorSegundo() {
    let totalPPS = 0;
    listaUpgradesPorSegundo.forEach(upgrade => {
        totalPPS += poderUpgrade[upgrade] * quantidadeUpgrade[upgrade];
        console.log(`PODER UPGRADE ${upgrade}: ${poderUpgrade[upgrade]}\nQTD upgrade ${upgrade}: ${quantidadeUpgrade[upgrade]}\n\n`);
    });

    pudinsPorSegundo = totalPPS;
    console.log(`===============\nTOTAL PPS: ${pudinsPorSegundo}\n===============`);

    PPS.innerHTML = `PPS: ${pudinsPorSegundo.toFixed(1)}`;
}

function atualizarPudinsPorClique() {
   console.log(`PPC = (1 + ${poderUpgrade["chef"] * quantidadeUpgrade["chef"]}) * ${poderUpgrade["gourmet"]}`);

   poderDoClique = (1 + (poderUpgrade["chef"] * quantidadeUpgrade["chef"])) * poderUpgrade["gourmet"];
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

// Comprar Melhorias
melhoriaConfeiteira1.addEventListener("click", () => {
    // Preço da melhoria
    if (pudins >= precoMelhoriaConfeiteira1) {
        tocarSomComprarMelhoria();

        pudins -= precoMelhoriaConfeiteira1;
        atualizarQuantidadePudins();

        // benefício da melhoria
        poderUpgrade["confeiteira"] += 0.5;
        atualizarTooltip("confeiteira");
        melhoriaConfeiteira1.style.display = "none";
        atualizarPudinsPorSegundo();
    }
});

melhoriaConfeiteira2.addEventListener("click", () => {
    // Preço da melhoria
    if (pudins >= precoMelhoriaConfeiteira2) {
        tocarSomComprarMelhoria();

        pudins -= precoMelhoriaConfeiteira2;
        atualizarQuantidadePudins();

        // benefício da melhoria
        poderUpgrade["confeiteira"] += 3;
        atualizarTooltip("confeiteira");
        melhoriaConfeiteira2.style.display = "none";
        atualizarPudinsPorSegundo();
    }
});

melhoriaConfeiteira3.addEventListener("click", () => {
    // Preço da melhoria
    if (pudins >= precoMelhoriaConfeiteira3) {
        tocarSomComprarMelhoria();

        pudins -= precoMelhoriaConfeiteira3;
        atualizarQuantidadePudins();

        // benefício da melhoria
        poderUpgrade["confeiteira"] += 3;
        atualizarTooltip("confeiteira");
        melhoriaConfeiteira3.style.display = "none";
        atualizarPudinsPorSegundo();
    }
});

melhoriaConfeiteira4.addEventListener("click", () => {
    // Preço da melhoria
    if (pudins >= precoMelhoriaConfeiteira4) {
        tocarSomComprarMelhoria();

        pudins -= precoMelhoriaConfeiteira4;
        atualizarQuantidadePudins();

        // benefício da melhoria
        poderUpgrade["confeiteira"] += 3;
        atualizarTooltip("confeiteira");
        melhoriaConfeiteira4.style.display = "none";
        atualizarPudinsPorSegundo();
    }
});

melhoriaConfeiteira5.addEventListener("click", () => {
    // Preço da melhoria
    if (pudins >= precoMelhoriaConfeiteira5) {
        tocarSomComprarMelhoria();

        pudins -= precoMelhoriaConfeiteira5;
        atualizarQuantidadePudins();

        // benefício da melhoria
        poderUpgrade["confeiteira"] += 3;
        atualizarTooltip("confeiteira");
        melhoriaConfeiteira5.style.display = "none";
        atualizarPudinsPorSegundo();
    }
});

melhoriaChef1.addEventListener("click", () => {
    // Preço da melhoria
    if (pudins >= precoMelhoriaChef1) {
        tocarSomComprarMelhoria();

        pudins -= precoMelhoriaChef1;
        atualizarQuantidadePudins();

        // benefício da melhoria
        poderUpgrade["chef"] += 1;
        atualizarTooltip("chef");
        melhoriaChef1.style.display = "none";
        atualizarPudinsPorClique();
    }
});

melhoriaChef2.addEventListener("click", () => {
    // Preço da melhoria
    if (pudins >= precoMelhoriaChef2) {
        tocarSomComprarMelhoria();

        pudins -= precoMelhoriaChef2;
        atualizarQuantidadePudins();

        // benefício da melhoria
        poderUpgrade["confeiteira"] += 3;
        atualizarTooltip("chef");
        melhoriaChef2.style.display = "none";
        atualizarPudinsPorSegundo();
    }
});

melhoriaChef3.addEventListener("click", () => {
    // Preço da melhoria
    if (pudins >= precoMelhoriaChef3) {
        tocarSomComprarMelhoria();

        pudins -= precoMelhoriaChef3;
        atualizarQuantidadePudins();

        // benefício da melhoria
        poderUpgrade["confeiteira"] += 3;
        atualizarTooltip("chef");
        melhoriaChef3.style.display = "none";
        atualizarPudinsPorSegundo();
    }
});

melhoriaPadaria1.addEventListener("click", () => {
    // Preço da melhoria
    if (pudins >= precoMelhoriaPadaria1) {
        tocarSomComprarMelhoria();

        pudins -= precoMelhoriaPadaria1;
        atualizarQuantidadePudins();

        // benefício da melhoria
        poderUpgrade["padaria"] += 15;
        atualizarTooltip("padaria");
        melhoriaPadaria1.style.display = "none";
        atualizarPudinsPorSegundo();
    }
});

melhoriaPadaria2.addEventListener("click", () => {
    // Preço da melhoria
    if (pudins >= precoMelhoriaPadaria2) {
        tocarSomComprarMelhoria();

        pudins -= precoMelhoriaPadaria2;
        atualizarQuantidadePudins();

        // benefício da melhoria
        poderUpgrade["confeiteira"] += 3;
        atualizarTooltip("padaria");
        melhoriaPadaria2.style.display = "none";
        atualizarPudinsPorSegundo();
    }
});

melhoriaConfeitaria1.addEventListener("click", () => {
    // Preço da melhoria
    if (pudins >= precoMelhoriaConfeitaria1) {
        tocarSomComprarMelhoria();

        pudins -= precoMelhoriaConfeitaria1;
        atualizarQuantidadePudins();

        // benefício da melhoria
        poderUpgrade["confeitaria"] += 100;
        atualizarTooltip("confeitaria");
        melhoriaConfeitaria1.style.display = "none";
        atualizarPudinsPorSegundo();
    }
});

melhoriaConfeitaria2.addEventListener("click", () => {
    // Preço da melhoria
    if (pudins >= precoMelhoriaConfeitaria2) {
        tocarSomComprarMelhoria();

        pudins -= precoMelhoriaConfeitaria2;
        atualizarQuantidadePudins();

        // benefício da melhoria
        poderUpgrade["confeiteira"] += 3;
        atualizarTooltip("confeitaria");
        melhoriaConfeitaria2.style.display = "none";
        atualizarPudinsPorSegundo();
    }
});

melhoriaSupermercado1.addEventListener("click", () => {
    // Preço da melhoria
    if (pudins >= precoMelhoriaSupermercado1) {
        tocarSomComprarMelhoria();

        pudins -= precoMelhoriaSupermercado1;
        atualizarQuantidadePudins();

        // benefício da melhoria
        poderUpgrade["supermercado"] += 250;
        atualizarTooltip("supermercado");
        melhoriaSupermercado1.style.display = "none";
        atualizarPudinsPorSegundo();
    }
});

melhoriaSupermercado2.addEventListener("click", () => {
    // Preço da melhoria
    if (pudins >= precoMelhoriaSupermercado2) {
        tocarSomComprarMelhoria();

        pudins -= precoMelhoriaSupermercado2;
        atualizarQuantidadePudins();

        // benefício da melhoria
        poderUpgrade["confeiteira"] += 3;
        atualizarTooltip("supermercado");
        melhoriaSupermercado2.style.display = "none";
        atualizarPudinsPorSegundo();
    }
});

melhoriaCafeteria1.addEventListener("click", () => {
    // Preço da melhoria
    if (pudins >= precoMelhoriaCafeteria1) {
        tocarSomComprarMelhoria();

        pudins -= precoMelhoriaCafeteria1;
        atualizarQuantidadePudins();

        // benefício da melhoria
        poderUpgrade["cafeteria"] += 750;
        atualizarTooltip("cafeteria");
        melhoriaCafeteria1.style.display = "none";
        atualizarPudinsPorSegundo();
    }
});

melhoriaCafeteria2.addEventListener("click", () => {
    // Preço da melhoria
    if (pudins >= precoMelhoriaCafeteria2) {
        tocarSomComprarMelhoria();

        pudins -= precoMelhoriaCafeteria2;
        atualizarQuantidadePudins();

        // benefício da melhoria
        poderUpgrade["confeiteira"] += 3;
        atualizarTooltip("cafeteria");
        melhoriaCafeteria2.style.display = "none";
        atualizarPudinsPorSegundo();
    }
});



// Abrir o TOOLTIP
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

// Para fechar o TOOLTIP
let itensMelhorias = document.querySelectorAll(".item_melhoria");
itensMelhorias.forEach((item) => {
    item.addEventListener("mouseout", () => {
        fecharTooltip();
    });
})

function mostrarTooltip(txtNomeMelhoria, txtPrecoMelhoria, txtDescricaoMelhoria) {
    let informacoesMelhorias = document.querySelector("#informacoes_melhorias");
    informacoesMelhorias.style.display = "flex";

    informacoesMelhorias.querySelector("#nome_melhoria").innerHTML = txtNomeMelhoria;
    informacoesMelhorias.querySelector("#preco_melhoria").innerHTML = txtPrecoMelhoria;
    informacoesMelhorias.querySelector("#descricao_melhoria").innerHTML = txtDescricaoMelhoria;
}

function fecharTooltip() {
    let informacoesMelhorias = document.querySelector("#informacoes_melhorias");

    informacoesMelhorias.style.display = "none";
}


// Atualizar upgrades disponíveis para compra
setInterval(() => {
    pudins += pudinsPorSegundo;
    atualizarQuantidadePudins();

    // Faz com que os upgrades disponíveis para compra fiquem coloridos:
    listaUpgrades.forEach(upgrade => {
        // Se o preço do upgrade for maior que a atual quantidade de pudins:
        if (precoParagrafosUpgrades[upgrade].textContent.split(": ")[1] > pudins) {
            elementosUpgrade[upgrade].classList.add("upgrade_caro");
        }
        else {
            elementosUpgrade[upgrade].classList.remove("upgrade_caro");
        }
    });


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

}, 1000);


// Atualiza o texto do TOOLTIP
function atualizarTooltip(upgrade) {
    if (upgrade === "chef") {
        elementosUpgrade[upgrade].querySelector(".informacoes_upgrade").setAttribute("data-tooltip", `+${poderUpgrade[upgrade]} PPC\n\nTotal: ${poderUpgrade[upgrade] * quantidadeUpgrade[upgrade]} PPC`);
        elementosUpgrade["gourmet"].querySelector(".informacoes_upgrade").setAttribute("data-tooltip", `${poderDoClique} x 2\n\nTotal: ${poderDoClique} PPC`);
        return;
    }
    if (upgrade === "gourmet") {
        elementosUpgrade[upgrade].querySelector(".informacoes_upgrade").setAttribute("data-tooltip", `Duplica o PPC\n\nTotal: ${poderDoClique} PPC`);
        return;
    }

    elementosUpgrade[upgrade].querySelector(".informacoes_upgrade").setAttribute("data-tooltip", `+${poderUpgrade[upgrade]} PPS\n\nTotal: ${poderUpgrade[upgrade] * quantidadeUpgrade[upgrade]} PPS`);
}
