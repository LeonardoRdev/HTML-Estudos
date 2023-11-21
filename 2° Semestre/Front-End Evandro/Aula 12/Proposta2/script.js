let resolver = document.querySelector("input#resolver");
let tabuada = document.querySelector("main");

resolver.onclick = function() {
    let numeroEscolhido = document.querySelector("input#numero_escolhido");
    if(numeroEscolhido.value <= 0) {
        numeroEscolhido.value = 1;
    }
    tabuada.innerHTML = "";
    for(let i = 1; i < 11 ; i++) {
        tabuada.innerHTML += `${numeroEscolhido.value} x ${i} = ${Math.round(numeroEscolhido.value * i, 3)}<br>`
    }
}
