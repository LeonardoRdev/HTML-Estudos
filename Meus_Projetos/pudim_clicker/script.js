// Descomentar para remover os arquivos locais (deletar o save)
// localStorage.clear();

// Definindo as variáveis
// formata os números grandes, exemplo: 10000 -> 10k 
const formatarNumero = Intl.NumberFormat("en", { notation: "compact"});

let divImagemPudins = document.querySelector("#pudins");
let pudimApertado = document.querySelector("#pudim_apertado");
let quantidadePudins = document.querySelector("#quantidade_pudins");
let PPS = document.querySelector("#pudins_por_segundo");

// Variáveis de áudio
const audioClicarPudim = new Audio();
audioClicarPudim.src = "../Arquivos_pagina_inicial/audios/boing.mp3";
const audioComprarUpgrade = new Audio();
audioComprarUpgrade.src = "../Arquivos_pagina_inicial/audios/comprar_upgrade1.mp3";
const audioComprarMelhoria = new Audio();
audioComprarMelhoria.src = "../Arquivos_pagina_inicial/audios/comprar_upgrade2.mp3";

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

const elementosUpgrade = {};
const precoUpgrades = {};
const precoParagrafosUpgrades = {};
const paragrafoQuantidadeUpgrade = {};
const quantidadeUpgrade = {};
const poderUpgrade = {};

// Atribuindo valor para cada variável de Upgrade
listaUpgrades.forEach(upgrade => {
    let elementoUpgrade = document.querySelector(`#upgrade_${upgrade}`);
    elementosUpgrade[upgrade] = elementoUpgrade;
    precoUpgrades[upgrade] = 0;
    precoParagrafosUpgrades[upgrade] = elementoUpgrade.querySelector(`.custo_upgrade p`);
    paragrafoQuantidadeUpgrade[upgrade] = elementoUpgrade.querySelector(`.quantidade_upgrade`);
    quantidadeUpgrade[upgrade] = localStorage.getItem(`upgrade_${upgrade} .quantidade_upgrade`) ? parseInt(localStorage.getItem(`upgrade_${upgrade} .quantidade_upgrade`)) : 0;
});

// Pudins / Poder do Clique / Preços iniciais dos upgrades:
let pudins = localStorage.getItem("quantidade_pudins") ? parseInt(localStorage.getItem("quantidade_pudins")) : 0;
let poderDoClique = 1;
let pudinsPorSegundo = 0;

// Poder dos Upgrades (O tanto de pudins que cada compra concederá)
poderUpgrade["confeiteira"] = localStorage.getItem("poder_upgrade_confeiteira") ? parseInt(localStorage.getItem("poder_upgrade_confeiteira")): 0.5; // + PPS (Pudim Por Segundo)
poderUpgrade["chef"] = 1; // + Poder Por Clique
poderUpgrade["padaria"] = 15; // + PPS
poderUpgrade["confeitaria"] = 100; // + PPS
poderUpgrade["supermercado"] = 250; // + PPS
poderUpgrade["cafeteria"] = 750; // + PPS
poderUpgrade["gourmet"] = 1; // Poder x PPS

// Preço dos Upgrades
precoUpgrades["confeiteira"] = localStorage.getItem(`upgrade_confeiteira .custo_upgrade`) ? parseInt(localStorage.getItem(`upgrade_confeiteira .custo_upgrade`)) : 10;
precoUpgrades["chef"] = 100;
precoUpgrades["padaria"] = 500;
precoUpgrades["confeitaria"] = 3_000;
precoUpgrades["supermercado"] = 20_000;
precoUpgrades["cafeteria"] = 35_000;
precoUpgrades["gourmet"] = 350_000;

// Recarrega os upgrades (caso recarregar a página)
listaUpgrades.forEach(upgrade => {
    paragrafoQuantidadeUpgrade[upgrade].innerHTML = quantidadeUpgrade[upgrade];
    precoParagrafosUpgrades[upgrade].innerHTML = `Pudins: ${formatarNumero.format(precoUpgrades[upgrade])}`;
    atualizarQuantidadePudins();
    atualizarPudinsPorSegundo();
});


// =======================
// ======= FUNÇÕES =======
// =======================

// Clicar no PUDIM:
divImagemPudins.addEventListener("click", (e) => {
    // Som ao clickar:
    audioClicarPudim.play();
    if (audioClicarPudim.currentTime != 0) {
        // Se clickar muito rápido, reiniciar o som:
        audioClicarPudim.currentTime = 0;
    }

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
    // Gambiarra por conta do Javascript, já que ele não calcula números flutuantes com precisão:
    pudins = Math.round(pudins * 10) / 10;

    // salva os pudins no computador (para não perder o progresso) v
    localStorage.setItem("quantidade_pudins", pudins);

    quantidadePudins.innerHTML = `Pudins: ${formatarNumero.format(pudins)}`;
}

// UPGRADES
// Upgrade Confeiteira:
elementosUpgrade["confeiteira"].addEventListener("click", () => {
    
    // Se conseguir pagar pelo UPGRADE
    if (pudins >= precoUpgrades["confeiteira"]) {
        tocarSomComprarUpgrade();
        quantidadeUpgrade["confeiteira"]++;
        // salva a quantidade de upgrades no computador para não perder o progresso
        localStorage.setItem(`upgrade_confeiteira .quantidade_upgrade`, quantidadeUpgrade["confeiteira"]);

        paragrafoQuantidadeUpgrade["confeiteira"].innerHTML = quantidadeUpgrade["confeiteira"];
        
        // Ativar TOOLTIP do UPGRADE
        elementosUpgrade["confeiteira"].querySelector(".informacoes_upgrade").classList.add("mostrar_before", "mostrar_after");

        // Atualizar texto do TOOLTIP
        atualizarTooltip("confeiteira");
        
        // Gasta os pudins para adquirir o upgrade:
        pudins -= precoUpgrades["confeiteira"];
        atualizarQuantidadePudins();

        // Aumenta o preço do upgrade:
        precoUpgrades["confeiteira"] += 1.5 * quantidadeUpgrade["confeiteira"];

        // salva a quantidade de upgrades no computador para não perder o progresso
        localStorage.setItem(`upgrade_confeiteira .custo_upgrade`, precoUpgrades["confeiteira"]);

        precoParagrafosUpgrades["confeiteira"].innerHTML = `Pudins: ${formatarNumero.format(precoUpgrades["confeiteira"])}`;

        // Recompensa fornecida pelo Upgrade:
        atualizarPudinsPorSegundo();

        // 1° Melhoria:
        if (quantidadeUpgrade["confeiteira"] >= 2 & !compreiMelhoriaConfeiteira1) {
            melhoriaConfeiteira1.classList.add("aparecer");
        }

        // 2° Melhoria:
        if (quantidadeUpgrade["confeiteira"] >= 15 & !compreiMelhoriaConfeiteira2) {
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
    if (pudins >= precoUpgrades["chef"]) {
        tocarSomComprarUpgrade();
        quantidadeUpgrade["chef"]++;
        paragrafoQuantidadeUpgrade["chef"].innerHTML = quantidadeUpgrade["chef"];

        // Ativar TOOLTIP do UPGRADE
        elementosUpgrade["chef"].querySelector(".informacoes_upgrade").classList.add("mostrar_before", "mostrar_after");

        pudins -= precoUpgrades["chef"];
        atualizarQuantidadePudins();

        precoUpgrades["chef"] += 0.7 * precoUpgrades["chef"] + (1.2 * quantidadeUpgrade["chef"]);
        precoParagrafosUpgrades["chef"].innerHTML = `Pudins: ${formatarNumero.format(precoUpgrades["chef"])}`;

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
    if (pudins >= precoUpgrades["padaria"]) {
        tocarSomComprarUpgrade();
        quantidadeUpgrade["padaria"]++;
        paragrafoQuantidadeUpgrade["padaria"].innerHTML = quantidadeUpgrade["padaria"];

        // Ativar TOOLTIP do UPGRADE
        elementosUpgrade["padaria"].querySelector(".informacoes_upgrade").classList.add("mostrar_before", "mostrar_after");

        // Atualizar texto do TOOLTIP
        atualizarTooltip("padaria");

        pudins -= precoUpgrades["padaria"];
        atualizarQuantidadePudins();

        precoUpgrades["padaria"] += 0.5 * precoUpgrades["padaria"] + (1.3 * quantidadeUpgrade["padaria"]);
        precoParagrafosUpgrades["padaria"].innerHTML = `Pudins: ${formatarNumero.format(precoUpgrades["padaria"])}`;

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
    if (pudins >= precoUpgrades["confeitaria"]) {
        tocarSomComprarUpgrade();
        quantidadeUpgrade["confeitaria"]++;
        paragrafoQuantidadeUpgrade["confeitaria"].innerHTML = quantidadeUpgrade["confeitaria"];

        // Ativar TOOLTIP do UPGRADE
        elementosUpgrade["confeitaria"].querySelector(".informacoes_upgrade").classList.add("mostrar_before", "mostrar_after");

        // Atualizar texto do TOOLTIP
        atualizarTooltip("confeitaria");

        pudins -= precoUpgrades["confeitaria"];
        atualizarQuantidadePudins();

        precoUpgrades["confeitaria"] += 0.4 * precoUpgrades["confeitaria"] + (1.5 * quantidadeUpgrade["confeitaria"]);
        precoParagrafosUpgrades["confeitaria"].innerHTML = `Pudins: ${formatarNumero.format(precoUpgrades["confeitaria"])}`;

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
    if (pudins >= precoUpgrades["supermercado"]) {
        tocarSomComprarUpgrade();
        quantidadeUpgrade["supermercado"]++;
        paragrafoQuantidadeUpgrade["supermercado"].innerHTML = quantidadeUpgrade["supermercado"];

        // Ativar TOOLTIP do UPGRADE
        elementosUpgrade["supermercado"].querySelector(".informacoes_upgrade").classList.add("mostrar_before", "mostrar_after");

        // Atualizar texto do TOOLTIP
        atualizarTooltip("supermercado");

        pudins -= precoUpgrades["supermercado"];
        atualizarQuantidadePudins();

        precoUpgrades["supermercado"] += 0.6 * precoUpgrades["supermercado"] + (1.5 * quantidadeUpgrade["supermercado"]);
        precoParagrafosUpgrades["supermercado"].innerHTML = `Pudins: ${formatarNumero.format(precoUpgrades["supermercado"])}`;

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
    if (pudins >= precoUpgrades["cafeteria"]) {
        tocarSomComprarUpgrade();
        quantidadeUpgrade["cafeteria"]++;
        paragrafoQuantidadeUpgrade["cafeteria"].innerHTML = quantidadeUpgrade["cafeteria"];

        // Ativar TOOLTIP do UPGRADE
        elementosUpgrade["cafeteria"].querySelector(".informacoes_upgrade").classList.add("mostrar_before", "mostrar_after");

        // Atualizar texto do TOOLTIP
        atualizarTooltip("cafeteria");

        pudins -= precoUpgrades["cafeteria"];
        atualizarQuantidadePudins();

        precoUpgrades["cafeteria"] += 0.4 * precoUpgrades["cafeteria"] + (1.5 * quantidadeUpgrade["cafeteria"]);
        precoParagrafosUpgrades["cafeteria"].innerHTML = `Pudins: ${formatarNumero.format(precoUpgrades["cafeteria"])}`;

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
    if (pudins >= precoUpgrades["gourmet"]) {
        tocarSomComprarUpgrade();
        quantidadeUpgrade["gourmet"]++;
        paragrafoQuantidadeUpgrade["gourmet"].innerHTML = quantidadeUpgrade["gourmet"];

        // Ativar TOOLTIP do UPGRADE
        elementosUpgrade["gourmet"].querySelector(".informacoes_upgrade").classList.add("mostrar_before", "mostrar_after");

        pudins -= precoUpgrades["gourmet"];
        atualizarQuantidadePudins();

        precoUpgrades["gourmet"] += 0.7 * precoUpgrades["gourmet"] + (1.5 * quantidadeUpgrade["gourmet"]);
        precoParagrafosUpgrades["gourmet"].innerHTML = `Pudins: ${formatarNumero.format(precoUpgrades["gourmet"])}`;

        // Esse upgrade está sempre ativo, porém, a cada compra DELE o PPC (Poder por Click) total é multiplicado pelo poder DESTE upgrade, começando com x1.
        poderUpgrade["gourmet"] *= 2;
        atualizarPudinsPorClique();
    }
});

// Som ao comprar UPGRADE
function tocarSomComprarUpgrade() {
    audioComprarUpgrade.play();
    if (audioComprarUpgrade.currentTime != 0) {
        // Se clickar muito rápido, reiniciar o som:
        audioComprarUpgrade.currentTime = 0;
    }
}

// Som ao comprar MELHORIA
function tocarSomComprarMelhoria() {
    audioComprarMelhoria.play();
    if (audioComprarMelhoria.currentTime != 0) {
        // Se clickar muito rápido, reiniciar o som:
        audioComprarMelhoria.currentTime = 0;
    }
}

function atualizarPudinsPorSegundo() {
    let totalPPS = 0;
    listaUpgradesPorSegundo.forEach(upgrade => {
        totalPPS += poderUpgrade[upgrade] * quantidadeUpgrade[upgrade];
        console.log(`PODER UPGRADE ${upgrade}: ${poderUpgrade[upgrade]}\nQTD upgrade ${upgrade}: ${quantidadeUpgrade[upgrade]}\n\n`);
    });

    pudinsPorSegundo = totalPPS;
    console.log(`===============\nTOTAL PPS: ${pudinsPorSegundo}\n===============`);

    // Exibe abaixo do PUDIM o PPS
    PPS.innerHTML = `PPS: ${formatarNumero.format(pudinsPorSegundo)}`;
}

function atualizarPudinsPorClique() {
    console.log(`PPC = (1 + ${poderUpgrade["chef"] * quantidadeUpgrade["chef"]}) * ${poderUpgrade["gourmet"]}`);

    // Atualiza o PPC (Poder Por Clique): 1 (base) + PPC do Chef * Poder do Gourmet (duplica o PPC)     
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

// Melhorias compradas (para salvar no localStorage)
// - Se o localStorage tiver alguma data sobre "comprei_melhoria_confeiteira1", então ela foi comprada (true), senão, continuar o comportamente padrão (false)
let compreiMelhoriaConfeiteira1 = localStorage.getItem("comprei_melhoria_confeiteira1") ? true : false;
let compreiMelhoriaConfeiteira2 = localStorage.getItem("comprei_melhoria_confeiteira2") ? true : false;
// let compreiMelhoria.....

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
        tocarSomComprarMelhoria();

        pudins -= precoMelhoriaConfeiteira1;
        atualizarQuantidadePudins();

        // benefício da melhoria
        poderUpgrade["confeiteira"] += 0.5;
        localStorage.setItem("poder_upgrade_confeiteira", poderUpgrade["confeiteira"]);

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
        tocarSomComprarMelhoria();

        pudins -= precoMelhoriaConfeiteira2;
        atualizarQuantidadePudins();

        // benefício da melhoria
        poderUpgrade["confeiteira"] += 3;
        localStorage.setItem("poder_upgrade_confeiteira", poderUpgrade["confeiteira"]);

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
        elementosUpgrade[upgrade].querySelector(".informacoes_upgrade").setAttribute("data-tooltip", `+${poderUpgrade[upgrade]} PPC\n\nTotal: ${poderUpgrade[upgrade] * quantidadeUpgrade[upgrade]} PPC`);
        elementosUpgrade["gourmet"].querySelector(".informacoes_upgrade").setAttribute("data-tooltip", `${poderDoClique} x 2\n\nTotal: ${poderDoClique} PPC`);
        return;
    }

    if (upgrade === "gourmet") {
        elementosUpgrade[upgrade].querySelector(".informacoes_upgrade").setAttribute("data-tooltip", `Duplica o PPC\n\nTotal: ${poderDoClique} PPC`);
        return;
    }

    // Caso seja um upgrade de PPS (todos os outros)
    elementosUpgrade[upgrade].querySelector(".informacoes_upgrade").setAttribute("data-tooltip", `+${formatarNumero.format(poderUpgrade[upgrade])} PPS\n\nTotal: ${formatarNumero.format(poderUpgrade[upgrade] * quantidadeUpgrade[upgrade])} PPS`);
}


// Exibe as melhorias disponíveis para compra ao recarregar a página (localStorage)
/// *SIMPLIFICAR O CÓDIGO, SE NÃO VAI REPETIR MUITA COISA
if (quantidadeUpgrade["confeiteira"] >= 2 & !compreiMelhoriaConfeiteira1) {
    melhoriaConfeiteira1.classList.add("aparecer");
}

if (quantidadeUpgrade["confeiteira"] >= 15 & !compreiMelhoriaConfeiteira2) {
    melhoriaConfeiteira2.classList.add("aparecer");
}