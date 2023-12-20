let resultadoNumero = document.querySelector("#resultado_numero");
let botoesDaCalculadora = [];

let numerosSelecionados = []; // Lista com todos os números que estão sendo mostrados.


for (let i = 1; i <= 24; i++) {
    botoesDaCalculadora.push(document.querySelector("#botao" + i ));
}


let selecionarNumero = function(numeroEscolhido) { // Lê toda a lista de números selecionados e mostra no resultadoNumero
    if (numeroEscolhido === 0 && numerosSelecionados.length === 0 || numerosSelecionados.length === 11) { // não pode 000 e limite de 11 números
        return;
    }
    numerosSelecionados.push(numeroEscolhido);
    resultadoNumero.innerHTML = "";
    for (numero of numerosSelecionados) {
        resultadoNumero.innerHTML += numero;
    }
    console.log(numerosSelecionados);
    console.log(numerosSelecionados.length);
}


botoesDaCalculadora[1].onclick = function() { // Botão "CE"
    numerosSelecionados = [];
    resultadoNumero.innerHTML = 0;
}

botoesDaCalculadora[2].onclick = function() { // Botão "C"
    numerosSelecionados = [];
    resultadoNumero.innerHTML = 0;
}


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
    resultadoNumero.innerHTML = "eita";
}

botoesDaCalculadora[21].onclick = function() { // Botão "0"
    selecionarNumero(0);
}

botoesDaCalculadora[22].onclick = function() { // Botão ","
    resultadoNumero.innerHTML += ",";
}
