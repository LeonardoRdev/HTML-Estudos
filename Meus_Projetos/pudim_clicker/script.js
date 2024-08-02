// Definindo as variáveis:

let divImagemPudins = document.querySelector("#pudins");
let pudimApertado = document.querySelector("#pudim_apertado");
let quantidadePudins = document.querySelector("#quantidade_pudins");

// Pudins / Poder do Clique / Preços iniciais:
let pudins = 0;
let poderDoClique = 1;

let precoUpgradeConfeiteira = 10;
let precoUpgradeChef = 100;
let precoUpgradePadaria = 500;
let precoUpgradeConfeitaria = 3000;
let precoUpgradeSupermercado = 10000;
let precoUpgradeCafeteria = 35000;
let precoUpgradeGourmet = 150000;

// Variáveis dos upgrades: quantidade e preços

let upgradeConfeiteira = document.querySelector("#upgrade_confeiteira");
let upgradeChef = document.querySelector("#upgrade_chef");
let upgradePadaria = document.querySelector("#upgrade_padaria");
let upgradeConfeitaria = document.querySelector("#upgrade_confeitaria");
let upgradeSupermercado = document.querySelector("#upgrade_supermercado");
let upgradeCafeteria = document.querySelector("#upgrade_cafeteria");
let upgradeGourmet = document.querySelector("#upgrade_gourmet");

let precoParagrafoConfeiteira = upgradeConfeiteira.querySelector(".custo_upgrade p");
let precoParagrafoChef = upgradeChef.querySelector(".custo_upgrade p");
let precoParagrafoPadaria = upgradePadaria.querySelector(".custo_upgrade p");
let precoParagrafoConfeitaria = upgradeConfeitaria.querySelector(".custo_upgrade p");
let precoParagrafoSupermercado = upgradeSupermercado.querySelector(".custo_upgrade p");
let precoParagrafoCafeteria = upgradeCafeteria.querySelector(".custo_upgrade p");
let precoParagrafoGourmet = upgradeGourmet.querySelector(".custo_upgrade p");

let paragrafoQuantidadeUpgradeConfeiteira = upgradeConfeiteira.querySelector(".quantidade_upgrade");
let quantidadeUpgradeConfeiteira = 0;

let paragrafoQuantidadeUpgradeChef = upgradeChef.querySelector(".quantidade_upgrade");
let quantidadeUpgradeChef = 0;

let paragrafoQuantidadeUpgradePadaria = upgradePadaria.querySelector(".quantidade_upgrade");
let quantidadeUpgradePadaria = 0;

let paragrafoQuantidadeUpgradeConfeitaria = upgradeConfeitaria.querySelector(".quantidade_upgrade");
let quantidadeUpgradeConfeitaria = 0;

let paragrafoQuantidadeUpgradeSupermercado = upgradeSupermercado.querySelector(".quantidade_upgrade");
let quantidadeUpgradeSupermercado = 0;

let paragrafoQuantidadeUpgradeCafeteria = upgradeCafeteria.querySelector(".quantidade_upgrade");
let quantidadeUpgradeCafeteria = 0;

let paragrafoQuantidadeUpgradeGourmet = upgradeGourmet.querySelector(".quantidade_upgrade");
let quantidadeUpgradeGourmet = 0;


// FUNÇÕES COMPRAR UPGRADE:
// Upgrade Confeiteira:
upgradeConfeiteira.addEventListener("click", () => {
    if (pudins >= precoUpgradeConfeiteira) {
        quantidadeUpgradeConfeiteira++;
        paragrafoQuantidadeUpgradeConfeiteira.innerHTML = quantidadeUpgradeConfeiteira;

        pudins -= precoUpgradeConfeiteira
        atualizarQuantidadePudins();

        // Aumenta o preço do upgrade:
        precoUpgradeConfeiteira++;

        
        // Recompensa fornecida pelo Upgrade:
        // Alterar para PPS (pudim por segundo)
        poderDoClique++;
        precoParagrafoConfeiteira.innerHTML = `Pudins: ${precoUpgradeConfeiteira}`;
    }
});

// Upgrade Chef:
upgradeChef.addEventListener("click", () => {
    if (pudins >= precoUpgradeChef) {
        quantidadeUpgradeChef++;
        paragrafoQuantidadeUpgradeChef.innerHTML = quantidadeUpgradeChef;

        pudins -= precoUpgradeChef
        atualizarQuantidadePudins();

        precoUpgradeChef = (precoUpgradeChef + 3) * 7;
        poderDoClique++;
        precoParagrafoChef.innerHTML = `Pudins: ${precoUpgradeChef}`;
    }
});

// Upgrade Padaria
upgradePadaria.addEventListener("click", () => {
    if (pudins >= precoUpgradePadaria) {
        quantidadeUpgradePadaria++;
        paragrafoQuantidadeUpgradePadaria.innerHTML = quantidadeUpgradePadaria;

        pudins -= precoUpgradePadaria
        atualizarQuantidadePudins();

        precoUpgradePadaria = (precoUpgradePadaria + 3) * 7;
        poderDoClique++;
        precoParagrafoPadaria.innerHTML = `Pudins: ${precoUpgradePadaria}`;
    }
});

// Upgrade Confeitaria
upgradeConfeitaria.addEventListener("click", () => {
    if (pudins >= precoUpgradeConfeitaria) {
        quantidadeUpgradeConfeitaria++;
        paragrafoQuantidadeUpgradeConfeitaria.innerHTML = quantidadeUpgradeConfeitaria;

        pudins -= precoUpgradeConfeitaria
        atualizarQuantidadePudins();

        precoUpgradeConfeitaria = (precoUpgradeConfeitaria + 3) * 7;
        poderDoClique++;
        precoParagrafoConfeitaria.innerHTML = `Pudins: ${precoUpgradeConfeitaria}`;
    }
});

// Upgrade Supermercado
upgradeSupermercado.addEventListener("click", () => {
    if (pudins >= precoUpgradeSupermercado) {
        quantidadeUpgradeSupermercado++;
        paragrafoQuantidadeUpgradeSupermercado.innerHTML = quantidadeUpgradeSupermercado;

        pudins -= precoUpgradeSupermercado
        atualizarQuantidadePudins();

        precoUpgradeSupermercado = (precoUpgradeSupermercado + 3) * 7;
        poderDoClique++;
        precoParagrafoSupermercado.innerHTML = `Pudins: ${precoUpgradeSupermercado}`;
    }
});

// Upgrade Cafeteria
upgradeCafeteria.addEventListener("click", () => {
    if (pudins >= precoUpgradeCafeteria) {
        quantidadeUpgradeCafeteria++;
        paragrafoQuantidadeUpgradeCafeteria.innerHTML = quantidadeUpgradeCafeteria;

        pudins -= precoUpgradeCafeteria
        atualizarQuantidadePudins();

        precoUpgradeCafeteria = (precoUpgradeCafeteria + 3) * 7;
        poderDoClique++;
        precoParagrafoCafeteria.innerHTML = `Pudins: ${precoUpgradeCafeteria}`;
    }
});

// Upgrade Restaurante Gourmet
upgradeGourmet.addEventListener("click", () => {
    if (pudins >= precoUpgradeGourmet) {
        quantidadeUpgradeGourmet++;
        paragrafoQuantidadeUpgradeGourmet.innerHTML = quantidadeUpgradeGourmet;

        pudins -= precoUpgradeGourmet
        atualizarQuantidadePudins();

        precoUpgradeGourmet = (precoUpgradeGourmet + 3) * 7;
        poderDoClique++;
        precoParagrafoGourmet.innerHTML = `Pudins: ${precoUpgradeGourmet}`;
    }
});


// Clicar no PUDIM:
divImagemPudins.addEventListener("click", () => {
    pudins += poderDoClique;

    atualizarQuantidadePudins();
});

function atualizarQuantidadePudins() {
    quantidadePudins.innerHTML = `Pudins: ${pudins}`
}
