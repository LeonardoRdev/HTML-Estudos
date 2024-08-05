// Definindo as variáveis:

let divImagemPudins = document.querySelector("#pudins");
let pudimApertado = document.querySelector("#pudim_apertado");
let quantidadePudins = document.querySelector("#quantidade_pudins");

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

let precoUpgradeConfeiteira = 10;
let precoUpgradeChef = 100;
let precoUpgradePadaria = 500;
let precoUpgradeConfeitaria = 3000;
let precoUpgradeSupermercado = 10000;
let precoUpgradeCafeteria = 35000;
let precoUpgradeGourmet = 150000;


// FUNÇÕES:
// Clicar no PUDIM:
divImagemPudins.addEventListener("click", () => {
    pudins += poderDoClique;

    atualizarQuantidadePudins();
});


// Atualizar contador de Pudins:
function atualizarQuantidadePudins() {
    quantidadePudins.innerHTML = `Pudins: ${pudins}`
}


// Upgrade Confeiteira:
elementosUpgrade["confeiteira"].addEventListener("click", () => {
    if (pudins >= precoUpgradeConfeiteira) {
        quantidadeUpgrade["confeiteira"]++
        paragrafoQuantidadeUpgrade["confeiteira"].innerHTML = quantidadeUpgrade["confeiteira"];

        // Gasta os pudins para adquirir o upgrade:
        pudins -= precoUpgradeConfeiteira
        atualizarQuantidadePudins();

        // Aumenta o preço do upgrade:
        precoUpgradeConfeiteira++;
        precoParagrafosUpgrades["confeiteira"].innerHTML = `Pudins: ${precoUpgradeConfeiteira}`;

        // Recompensa fornecida pelo Upgrade:
        // "Alterar para PPS (pudim por segundo)"
        poderDoClique++;
    }
});

// Upgrade Chef:
elementosUpgrade["chef"].addEventListener("click", () => {
    if (pudins >= precoUpgradeChef) {
        quantidadeUpgrade["chef"]++
        paragrafoQuantidadeUpgrade["chef"].innerHTML = quantidadeUpgrade["chef"];

        pudins -= precoUpgradeChef
        atualizarQuantidadePudins();

        precoUpgradeChef = (precoUpgradeChef + 3) * 7;
        precoParagrafosUpgrades["chef"].innerHTML = `Pudins: ${precoUpgradeChef}`;

        poderDoClique++;
    }
});

// Upgrade Padaria
elementosUpgrade["padaria"].addEventListener("click", () => {
    if (pudins >= precoUpgradePadaria) {
        quantidadeUpgrade["padaria"]++
        paragrafoQuantidadeUpgrade["padaria"].innerHTML = quantidadeUpgrade["padaria"];

        pudins -= precoUpgradePadaria
        atualizarQuantidadePudins();

        precoUpgradePadaria = (precoUpgradePadaria + 3) * 7;
        precoParagrafosUpgrades["padaria"].innerHTML = `Pudins: ${precoUpgradePadaria}`;

        poderDoClique++;
    }
});

// Upgrade Confeitaria
elementosUpgrade["confeitaria"].addEventListener("click", () => {
    if (pudins >= precoUpgradeConfeitaria) {
        quantidadeUpgrade["confeitaria"]++
        paragrafoQuantidadeUpgrade["confeitaria"].innerHTML = quantidadeUpgrade["confeitaria"];

        pudins -= precoUpgradeConfeitaria
        atualizarQuantidadePudins();

        precoUpgradeConfeitaria = (precoUpgradeConfeitaria + 3) * 7;
        precoParagrafosUpgrades["confeitaria"].innerHTML = `Pudins: ${precoUpgradeConfeitaria}`;

        poderDoClique++;
    }
});

// Upgrade Supermercado
elementosUpgrade["supermercado"].addEventListener("click", () => {
    if (pudins >= precoUpgradeSupermercado) {
        quantidadeUpgrade["supermercado"]++
        paragrafoQuantidadeUpgrade["supermercado"].innerHTML = quantidadeUpgrade["supermercado"];

        pudins -= precoUpgradeSupermercado
        atualizarQuantidadePudins();

        precoUpgradeSupermercado = (precoUpgradeSupermercado + 3) * 7;
        precoParagrafosUpgrades["supermercado"].innerHTML = `Pudins: ${precoUpgradeSupermercado}`;

        poderDoClique++;
    }
});

// Upgrade Cafeteria
elementosUpgrade["cafeteria"].addEventListener("click", () => {
    if (pudins >= precoUpgradeCafeteria) {
        quantidadeUpgrade["cafeteria"]++
        paragrafoQuantidadeUpgrade["cafeteria"].innerHTML = quantidadeUpgrade["cafeteria"];

        pudins -= precoUpgradeCafeteria
        atualizarQuantidadePudins();

        precoUpgradeCafeteria = (precoUpgradeCafeteria + 3) * 7;
        precoParagrafosUpgrades["cafeteria"].innerHTML = `Pudins: ${precoUpgradeCafeteria}`;

        poderDoClique++;
    }
});

// Upgrade Restaurante Gourmet
elementosUpgrade["gourmet"].addEventListener("click", () => {
    if (pudins >= precoUpgradeGourmet) {
        quantidadeUpgrade["gourmet"]++
        paragrafoQuantidadeUpgrade["gourmet"].innerHTML = quantidadeUpgrade["gourmet"];

        pudins -= precoUpgradeGourmet
        atualizarQuantidadePudins();

        precoUpgradeGourmet = (precoUpgradeGourmet + 3) * 7;
        precoParagrafosUpgrades["gourmet"].innerHTML = `Pudins: ${precoUpgradeGourmet}`;

        poderDoClique++;
    }
});
