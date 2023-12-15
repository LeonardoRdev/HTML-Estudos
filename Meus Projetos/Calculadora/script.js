let resultadoNumero = document.querySelector("#resultado_numero");
let botoesCalculadora = [];


for (let i = 1; i <= 24; i++) {
    botoesCalculadora.push(document.querySelector("#botao" + i ));
}

botoesCalculadora[2].onclick = function() {
    resultadoNumero.innerHTML = 0;
}

botoesCalculadora[8].onclick = function() {
    resultadoNumero.innerHTML += 7;
}

botoesCalculadora[9].onclick = function() {
    resultadoNumero.innerHTML += 8;g
}

botoesCalculadora[10].onclick = function() {
    resultadoNumero.innerHTML += 9;
}

botoesCalculadora[12].onclick = function() {
    resultadoNumero.innerHTML += 4;
}

botoesCalculadora[13].onclick = function() {
    resultadoNumero.innerHTML += 5;
}

botoesCalculadora[14].onclick = function() {
    resultadoNumero.innerHTML += 6;
}

botoesCalculadora[16].onclick = function() {
    resultadoNumero.innerHTML += 1;
}

botoesCalculadora[17].onclick = function() {
    resultadoNumero.innerHTML += 2;
}

botoesCalculadora[18].onclick = function() {
    resultadoNumero.innerHTML += 3;
}

botoesCalculadora[20].onclick = function() {
    resultadoNumero.innerHTML = "eita";
}

botoesCalculadora[21].onclick = function() {
    resultadoNumero.innerHTML += 0;
}

botoesCalculadora[22].onclick = function() {
    resultadoNumero.innerHTML += ",";
}
