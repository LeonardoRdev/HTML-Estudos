let resultadoNumero = document.querySelector("#resultado_numero");
let operacao = document.querySelector("#operacao");
let botoesDaCalculadora = [];

let numerosSelecionados = []; // Lista com todos os números que estão sendo mostrados.
let numeroResultante = ""; // É a lista de cima toda junta em um único número;
let numerosSelecionadosOperacao = [];
let numeroResultanteOperacao = "";


for (let i = 1; i <= 24; i++) {
    botoesDaCalculadora.push(document.querySelector("#botao" + i ));
}


const selecionarNumero = function(numeroEscolhido, operacao = false) { // Lê toda a lista de números selecionados e mostra no resultadoNumero
    if (numeroEscolhido === 0 && numerosSelecionados.length === 0 || numerosSelecionados.length === 11 || numeroEscolhido === "." && numerosSelecionados.indexOf(".") >= 0) { // não pode 000 e limite de 11 números
        return;
    }
    if (numeroEscolhido === "." && numerosSelecionados.length === 0) {
        numerosSelecionados.push(0); // Se caso o usuário clicar no "," antes de qualquer outra coisa
    }

    if (operacao === true) {
        realizandoOperacao();
        return;
    }
    
    numerosSelecionados.push(numeroEscolhido);
    rodarArray();
}

const rodarArray = function() {
    numeroResultante = ""; // Precisamos definir como string para os números não se somarem, e sim aparecerem um após o outro

    for (numero of numerosSelecionados) {
        numeroResultante += numero;
    }
    
    numeroResultante = parseFloat(numeroResultante); // Agora sim o resultado é um número de verdade
    resultadoNumero.innerHTML = numeroResultante;
}

// BOTÕES -> LIMPAR

botoesDaCalculadora[1].onclick = function() { // Botão "CE"
    numerosSelecionados = [0];
    rodarArray();
}

botoesDaCalculadora[2].onclick = function() { // Botão "C"
    numerosSelecionados = [0];
    rodarArray();
    operacao.innerHTML = "";
}

botoesDaCalculadora[3].onclick = function() { // Botão "Apagar"
    numerosSelecionados.pop();
    if (numerosSelecionados.length === 0) {
        numerosSelecionados = [0];
    }
    rodarArray();
}


// BOTÕES -> CÁLCULOS
botoesDaCalculadora[7].onclick = function() { // Botão "/"

}

botoesDaCalculadora[11].onclick = function() { // Botão "X"
    // Tem que fazer com que ele rode a função "selecionarNumero" até que o botão "=" ou "C" ou "CE" seja pressionado
    operacao.innerHTML = `${numeroResultante} x`
}

botoesDaCalculadora[15].onclick = function() { //Botão "-"

}
botoesDaCalculadora[19].onclick = function() { // Botão "+"

}


// BOTÕES -> NÚMEROS
botoesDaCalculadora[8].onclick = function() { // Botão "7"
    selecionarNumero(7);
}

botoesDaCalculadora[9].onclick = function() { // Botão "8"
    selecionarNumero(8);
}

botoesDaCalculadora[10].onclick = function() { // Botão "9"
    selecionarNumero(9);
}

botoesDaCalculadora[12].onclick = function() { // Botão "4"
    selecionarNumero(4);
}

botoesDaCalculadora[13].onclick = function() { // Botão "5"
    selecionarNumero(5);
}

botoesDaCalculadora[14].onclick = function() { // Botão "6"
    selecionarNumero(6);
}

botoesDaCalculadora[16].onclick = function() { // Botão "1"
    selecionarNumero(1);
}

botoesDaCalculadora[17].onclick = function() { // Botão "2"
    selecionarNumero(2);
}

botoesDaCalculadora[18].onclick = function() { // Botão "3"
    selecionarNumero(3);
}

botoesDaCalculadora[20].onclick = function() { // Botão "+/-"
    numeroResultante *= -1;
    resultadoNumero.innerHTML = numeroResultante;
}

botoesDaCalculadora[21].onclick = function() { // Botão "0"
    selecionarNumero(0);
}

botoesDaCalculadora[22].onclick = function() { // Botão ","
    selecionarNumero(".");
}
