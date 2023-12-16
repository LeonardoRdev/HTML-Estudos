let resultadoNumero = document.querySelector("#resultado_numero");
let botoesCalculadora = [];
let resultadoLista = [0];

// Tá funcionando +/- como você quer, só criar uma função (24:30) para fazer ele botar numa array e depois rodar a array toda e botar
// em uma variavel a array rodada e botar isso como inner HTML de resultadoNumero 

for (let i = 1; i <= 24; i++) {
    botoesCalculadora.push(document.querySelector("#botao" + i ));
}

// Transformar "resultado.innerhtml = array"

botoesCalculadora[1].onclick = function() { // Botão "CE"
    resultadoLista = [0];
    resultadoNumero.innerHTML = 0;
}

botoesCalculadora[2].onclick = function() { // Botão "C"
    resultadoNumero.innerHTML = 0;
}


botoesCalculadora[8].onclick = function() { // Botão "7"
    resultadoLista.push(7);
    console.log(resultadoLista)
    let isso = ""
    for (elemento of resultadoLista) {
        isso += elemento;
    }
    resultadoNumero.innerHTML = isso;
}

botoesCalculadora[9].onclick = function() { // Botão "8"
    resultadoNumero.innerHTML += 8;
}

botoesCalculadora[10].onclick = function() { // Botão "9"
    resultadoNumero.innerHTML += 9;
}

botoesCalculadora[12].onclick = function() { // Botão "4"
    resultadoNumero.innerHTML += 4;
}

botoesCalculadora[13].onclick = function() { // Botão "5"
    resultadoNumero.innerHTML += 5;
}

botoesCalculadora[14].onclick = function() { // Botão "6"
    resultadoNumero.innerHTML += 6;
}

botoesCalculadora[16].onclick = function() { // Botão "1"
    resultadoNumero.innerHTML += 1;
}

botoesCalculadora[17].onclick = function() { // Botão "2"
    resultadoNumero.innerHTML += 2;
}

botoesCalculadora[18].onclick = function() { // Botão "3"
    resultadoNumero.innerHTML += 3;
}

botoesCalculadora[20].onclick = function() { // Botão "+/-"
    resultadoNumero.innerHTML = "eita";
}

botoesCalculadora[21].onclick = function() { // Botão "0"
    resultadoNumero.innerHTML += 0;
}

botoesCalculadora[22].onclick = function() { // Botão ","
    resultadoNumero.innerHTML += ",";
}
