// Definindo as variáveis:

let divImagemPudins = document.querySelector("#pudins");
let pudimApertado = document.querySelector("#pudim_apertado");
let quantidadePudins = document.querySelector("#quantidade_pudins");
let ultimoUpgrade = document.querySelector("#ultimo_upgrade");

const audioClicarPudim = new Audio();
audioClicarPudim.src = "../Arquivos_pagina_inicial/audios/boing.mp3";
const audioComprarUpgrade = new Audio();
audioComprarUpgrade.src = "../Arquivos_pagina_inicial/audios/comprar_upgrade1.mp3";

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
let poderDoClique = 111;
let pudinsPorSegundo = 0;

poderUpgrade["confeiteira"] = 0.5; // + Pudim Por Segundo
// poderUpgrade["chef"] = 1; // + Poder Por Clique
poderUpgrade["padaria"] = 15; // + PPS
poderUpgrade["confeitaria"] = 100; // + PPS
poderUpgrade["supermercado"] = 250; // + PPS
poderUpgrade["cafeteria"] = 750; // + PPS
// poderUpgrade["gourmet"] = 2; // * PPC

let precoUpgradeConfeiteira = 10;
let precoUpgradeChef = 100;
let precoUpgradePadaria = 500;
let precoUpgradeConfeitaria = 3000;
let precoUpgradeSupermercado = 10000;
let precoUpgradeCafeteria = 35000;
let precoUpgradeGourmet = 350000;

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
}, 1000);


// FUNÇÕES:
// Clicar no PUDIM:
divImagemPudins.addEventListener("click", () => {
    // Som ao clickar:
    audioClicarPudim.play();
    if (audioClicarPudim.currentTime != 0) {
        // Se clickar muito rápido, reiniciar o som:
        audioClicarPudim.currentTime = 0;
    }

    pudins += poderDoClique;

    atualizarQuantidadePudins();
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

        // Gasta os pudins para adquirir o upgrade:
        pudins -= precoUpgradeConfeiteira;
        atualizarQuantidadePudins();

        // Aumenta o preço do upgrade:
        precoUpgradeConfeiteira += 1.5 * quantidadeUpgrade["confeiteira"];
        precoParagrafosUpgrades["confeiteira"].innerHTML = `Pudins: ${precoUpgradeConfeiteira.toFixed(1)}`;

        // Recompensa fornecida pelo Upgrade:
        pudinsPorSegundo += poderUpgrade["confeiteira"] * quantidadeUpgrade["confeiteira"];
        atualizarPudinsPorSegundo();
        ultimoUpgrade.innerHTML = `PPS: ${pudinsPorSegundo.toFixed(1)}`;
    }
});

// Upgrade Chef:
elementosUpgrade["chef"].addEventListener("click", () => {
    if (pudins >= precoUpgradeChef) {
        tocarSomComprarUpgrade();
        quantidadeUpgrade["chef"]++;
        paragrafoQuantidadeUpgrade["chef"].innerHTML = quantidadeUpgrade["chef"];

        pudins -= precoUpgradeChef;
        atualizarQuantidadePudins();

        precoUpgradeChef += 0.7 * precoUpgradeChef + (1.2 * quantidadeUpgrade["chef"]);
        precoParagrafosUpgrades["chef"].innerHTML = `Pudins: ${precoUpgradeChef.toFixed(1)}`;

        poderDoClique++;
        poderUpgrade["confeiteira"] = 3;
        atualizarPudinsPorSegundo();
        ultimoUpgrade.innerHTML = `PPS: ${pudinsPorSegundo.toFixed(1)}`;
        // ultimoUpgrade.innerHTML = `+${poderDoClique} Pudins por clique!`;
    }
});

// Upgrade Padaria
elementosUpgrade["padaria"].addEventListener("click", () => {
    if (pudins >= precoUpgradePadaria) {
        tocarSomComprarUpgrade();
        quantidadeUpgrade["padaria"]++;
        paragrafoQuantidadeUpgrade["padaria"].innerHTML = quantidadeUpgrade["padaria"];

        pudins -= precoUpgradePadaria;
        atualizarQuantidadePudins();

        precoUpgradePadaria += 0.7 * precoUpgradePadaria + (1.3 * quantidadeUpgrade["padaria"]);
        precoParagrafosUpgrades["padaria"].innerHTML = `Pudins: ${precoUpgradePadaria.toFixed(1)}`;

        pudinsPorSegundo += 15;
        ultimoUpgrade.innerHTML = `PPS: ${pudinsPorSegundo.toFixed(1)}`;
    }
});

// Upgrade Confeitaria
elementosUpgrade["confeitaria"].addEventListener("click", () => {
    if (pudins >= precoUpgradeConfeitaria) {
        tocarSomComprarUpgrade();
        quantidadeUpgrade["confeitaria"]++;
        paragrafoQuantidadeUpgrade["confeitaria"].innerHTML = quantidadeUpgrade["confeitaria"];

        pudins -= precoUpgradeConfeitaria;
        atualizarQuantidadePudins();

        precoUpgradeConfeitaria += 0.3 * precoUpgradeConfeitaria + (1.5 * quantidadeUpgrade["confeitaria"]);
        precoParagrafosUpgrades["confeitaria"].innerHTML = `Pudins: ${precoUpgradeConfeitaria.toFixed(1)}`;

        pudinsPorSegundo += 100;
        ultimoUpgrade.innerHTML = `PPS: ${pudinsPorSegundo.toFixed(1)}`;
    }
});

// Upgrade Supermercado
elementosUpgrade["supermercado"].addEventListener("click", () => {
    if (pudins >= precoUpgradeSupermercado) {
        tocarSomComprarUpgrade();
        quantidadeUpgrade["supermercado"]++;
        paragrafoQuantidadeUpgrade["supermercado"].innerHTML = quantidadeUpgrade["supermercado"];

        pudins -= precoUpgradeSupermercado;
        atualizarQuantidadePudins();

        precoUpgradeSupermercado += 0.6 * precoUpgradeSupermercado + (1.5 * quantidadeUpgrade["supermercado"]);
        precoParagrafosUpgrades["supermercado"].innerHTML = `Pudins: ${precoUpgradeSupermercado.toFixed(1)}`;

        pudinsPorSegundo += 250;
        ultimoUpgrade.innerHTML = `PPS: ${pudinsPorSegundo.toFixed(1)}`;
    }
});

// Upgrade Cafeteria
elementosUpgrade["cafeteria"].addEventListener("click", () => {
    if (pudins >= precoUpgradeCafeteria) {
        tocarSomComprarUpgrade();
        quantidadeUpgrade["cafeteria"]++;
        paragrafoQuantidadeUpgrade["cafeteria"].innerHTML = quantidadeUpgrade["cafeteria"];

        pudins -= precoUpgradeCafeteria;
        atualizarQuantidadePudins();

        precoUpgradeCafeteria += 0.4 * precoUpgradeCafeteria + (1.5 * quantidadeUpgrade["cafeteria"]);
        precoParagrafosUpgrades["cafeteria"].innerHTML = `Pudins: ${precoUpgradeCafeteria.toFixed(1)}`;

        pudinsPorSegundo += 750;
        ultimoUpgrade.innerHTML = `PPS: ${pudinsPorSegundo.toFixed(1)}`;
    }
});

// Upgrade Restaurante Gourmet
elementosUpgrade["gourmet"].addEventListener("click", () => {
    if (pudins >= precoUpgradeGourmet) {
        tocarSomComprarUpgrade();
        quantidadeUpgrade["gourmet"]++;
        paragrafoQuantidadeUpgrade["gourmet"].innerHTML = quantidadeUpgrade["gourmet"];

        pudins -= precoUpgradeGourmet;
        atualizarQuantidadePudins();

        precoUpgradeGourmet += 0.7 * precoUpgradeGourmet + (1.5 * quantidadeUpgrade["gourmet"]);
        precoParagrafosUpgrades["gourmet"].innerHTML = `Pudins: ${precoUpgradeGourmet.toFixed(1)}`;

        poderDoClique *= 2;
        ultimoUpgrade.innerHTML = `2x Pudins por clique! (${poderDoClique})`;
    }
});

function tocarSomComprarUpgrade() {
    audioComprarUpgrade.play();
    if (audioComprarUpgrade.currentTime != 0) {
        // Se clickar muito rápido, reiniciar o som:
        audioComprarUpgrade.currentTime = 0;
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
        poderUpgrade[upgrade];
        quantidadeUpgrade[upgrade];
        totalPPS += poderUpgrade[upgrade] * quantidadeUpgrade[upgrade];
        console.log(`PODER UPGRADE ${upgrade}: ${poderUpgrade[upgrade]}\nQTD upgrade ${upgrade}: ${quantidadeUpgrade[upgrade]}\n\n`);
    });

    pudinsPorSegundo = totalPPS;
    console.log(`===============\nTOTAL PPS: ${pudinsPorSegundo}\n===============`);

}