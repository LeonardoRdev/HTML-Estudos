let divImagemPudins = document.querySelector("#pudins");
let pudimApertado = document.querySelector("#pudim_apertado");
let quantidadePudins = document.querySelector("#quantidade_pudins")
let pudins = 0;
let poderDoClique = 1;

let precoUpgradeConfeiteira = 0;
let precoUpgradeChef = 0;
let precoUpgradePadaria = 0;
let precoUpgradeConfeitaria = 0;
let precoUpgradeSupermercado = 0;
let precoUpgradeCafeteria = 0;
let precoUpgradeGourmet = 0;

let divCustoUpgrade = document.querySelectorAll(".custo_upgrade");

let upgrade1 = divCustoUpgrade[0].querySelector(`p`);
let upgrade2 = divCustoUpgrade[1].querySelector(`p`);
let upgrade3 = divCustoUpgrade[2].querySelector(`p`);
let upgrade4 = divCustoUpgrade[3].querySelector(`p`);
let upgrade5 = divCustoUpgrade[4].querySelector(`p`);
let upgrade6 = divCustoUpgrade[5].querySelector(`p`);
let upgrade7 = divCustoUpgrade[6].querySelector(`p`);

upgrade1.addEventListener("click", () => {
    console.log("Clique no upgrade 1 detectado");
});

divImagemPudins.addEventListener("click", () => {
    pudins += poderDoClique;

    quantidadePudins.innerHTML = `Pudins: ${pudins}`
});
