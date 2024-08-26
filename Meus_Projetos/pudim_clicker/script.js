// Definindo as variáveis:

let divImagemPudins = document.querySelector("#pudins");
let pudimApertado = document.querySelector("#pudim_apertado");
let quantidadePudins = document.querySelector("#quantidade_pudins");
let ultimoUpgrade = document.querySelector("#ultimo_upgrade");

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
let poderDoClique = 100;
let pudinsPorSegundo = 0;

poderUpgrade["confeiteira"] = 0.5; // + Pudim Por Segundo
poderUpgrade["chef"] = 1; // + Poder Por Clique
poderUpgrade["padaria"] = 15; // + PPS
poderUpgrade["confeitaria"] = 100; // + PPS
poderUpgrade["supermercado"] = 250; // + PPS
poderUpgrade["cafeteria"] = 750; // + PPS
poderUpgrade["gourmet"] = 1; // * PPC

let precoUpgradeConfeiteira = 10;
let precoUpgradeChef = 100;
let precoUpgradePadaria = 500;
let precoUpgradeConfeitaria = 3000;
let precoUpgradeSupermercado = 10000;
let precoUpgradeCafeteria = 35000;
let precoUpgradeGourmet = 350000;

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
        atualizarPudinsPorSegundo();

        // 1° Melhoria:
        if (quantidadeUpgrade["confeiteira"] >= 2) {
            melhoriaConfeiteira1.classList.add("aparecer");
        }

        // 2° Melhoria:
        if (quantidadeUpgrade["confeiteira"] >= 15) {
            melhoriaConfeiteira2.classList.add("aparecer");
        }

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

        // poderDoClique++;
        atualizarPudinsPorClique();
        
        // 1° Melhoria:
        if (quantidadeUpgrade["chef"] >= 2) {
            melhoriaChef1.classList.add("aparecer");
        }

        // 2° Melhoria:
        if (quantidadeUpgrade["chef"] >= 15) {
            melhoriaChef2.classList.add("aparecer");
        }
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

        precoUpgradePadaria += 0.5 * precoUpgradePadaria + (1.3 * quantidadeUpgrade["padaria"]);
        precoParagrafosUpgrades["padaria"].innerHTML = `Pudins: ${precoUpgradePadaria.toFixed(1)}`;

        atualizarPudinsPorSegundo();
                
        // 1° Melhoria:
        if (quantidadeUpgrade["padaria"] >= 2) {
            melhoriaPadaria1.classList.add("aparecer");
        }

        // 2° Melhoria:
        if (quantidadeUpgrade["padaria"] >= 15) {
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

    ultimoUpgrade.innerHTML = `PPS: ${pudinsPorSegundo.toFixed(1)}`;
}

const listaUpgradesPorClique = [
    "chef",
    "gourmet"
];

function atualizarPudinsPorClique() {
    let totalPPC = 0;
    listaUpgradesPorClique.forEach(upgrade => {
        console.log(`PODER UPGRADE ${upgrade}: ${poderUpgrade[upgrade]}\nQTD upgrade ${upgrade}: ${quantidadeUpgrade[upgrade]}\n\n`);
        totalPPC += poderUpgrade[upgrade] * quantidadeUpgrade[upgrade];
   });

   poderDoClique = 1 + totalPPC;
}

// Melhorias para os upgrades:
let melhoriaConfeiteira1 = document.querySelector("#melhoria_confeiteira_1");
let melhoriaConfeiteira2 = document.querySelector("#melhoria_confeiteira_2");
let melhoriaChef1 = document.querySelector("#melhoria_chef_1");
let melhoriaChef2 = document.querySelector("#melhoria_chef_2");
let melhoriaPadaria1 = document.querySelector("#melhoria_padaria_1");
let melhoriaPadaria2 = document.querySelector("#melhoria_padaria_2");
let melhoriaConfeitaria1 = document.querySelector("#melhoria_confeitaria_1");
let melhoriaConfeitaria2 = document.querySelector("#melhoria_confeitaria_2");
let melhoriaSupermercado1 = document.querySelector("#melhoria_supermercado_1");
let melhoriaSupermercado2 = document.querySelector("#melhoria_supermercado_2");
let melhoriaCafeteria1 = document.querySelector("#melhoria_cafeteria_1");
let melhoriaCafeteria2 = document.querySelector("#melhoria_cafeteria_2");

let precoMelhoriaConfeiteira1 = 50;
let precoMelhoriaConfeiteira2 = 11;
let precoMelhoriaChef1 = 500;
let precoMelhoriaChef2 = 11;
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
    precoMelhoriaChef1,
    precoMelhoriaChef2,
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
    [melhoriaChef1.querySelector(".melhoria"), precoMelhoriaChef1],
    [melhoriaChef2.querySelector(".melhoria"), precoMelhoriaChef2],
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
        melhoriaConfeiteira2.style.display = "none";
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
        melhoriaChef2.style.display = "none";
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
        melhoriaCafeteria2.style.display = "none";
        atualizarPudinsPorSegundo();
    }
});



// Abrir o TOOLTIP
melhoriaConfeiteira1.addEventListener("mouseover", () => {
    mostrarTooltip("Curso EAD de confeiteira", `${precoMelhoriaConfeiteira1} Pudins`, "Aumenta a produção das confeiteiras em 2x");
});

melhoriaConfeiteira2.addEventListener("mouseover", () => {
    mostrarTooltip("Nome: Nome Legal", `${precoMelhoriaConfeiteira2} Pudins`, "Aumenta os pudins recebidos em 2x");
});

melhoriaChef1.addEventListener("mouseover", () => {
    mostrarTooltip("Gato cozinheiro", `${precoMelhoriaChef1} Pudins`, "+1 Poder do Clique para cada Chef");
});

melhoriaChef2.addEventListener("mouseover", () => {
    mostrarTooltip("Tony Stark brasileiro", `${precoMelhoriaChef2} Pudins`, "Aumenta os pudins recebidos em 4x");
});

melhoriaPadaria1.addEventListener("mouseover", () => {
    mostrarTooltip("Pãochorro de forma", `${precoMelhoriaPadaria1} Pudins`, "Aumenta a produção das padarias em 2x");
});

melhoriaPadaria2.addEventListener("mouseover", () => {
    mostrarTooltip("Especialista em pães", `${precoMelhoriaPadaria2} Pudins`, "Aumenta os pudins recebidos em 6x");
});

melhoriaConfeitaria1.addEventListener("mouseover", () => {
    mostrarTooltip("Nome: Nome Legal", `${precoMelhoriaConfeitaria1} Pudins`, "Aumenta a produção das confeitarias em 2x");
});

melhoriaConfeitaria2.addEventListener("mouseover", () => {
    mostrarTooltip("Nome: Nome Legal", `${precoMelhoriaConfeitaria2} Pudins`, "Aumenta os pudins recebidos em 8x");
});

melhoriaSupermercado1.addEventListener("mouseover", () => {
    mostrarTooltip("Nome: Nome Legal", `${precoMelhoriaSupermercado1} Pudins`, "Aumenta a produção das supermercado em 2x");
});

melhoriaSupermercado2.addEventListener("mouseover", () => {
    mostrarTooltip("Nome: Nome Legal", `${precoMelhoriaSupermercado2} Pudins`, "Aumenta os pudins recebidos em 10x");
});

melhoriaCafeteria1.addEventListener("mouseover", () => {
    mostrarTooltip("Cookie clica 🍪", `${precoMelhoriaCafeteria1} Pudins`, "Aumenta a produção das cafeterias em 2x");
});

melhoriaCafeteria2.addEventListener("mouseover", () => {
    mostrarTooltip("Nome: Nome Legal", `${precoMelhoriaCafeteria2} Pudins`, "Aumenta os pudins recebidos em 12x");
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