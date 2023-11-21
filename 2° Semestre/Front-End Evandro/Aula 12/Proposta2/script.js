let resolver = document.querySelector("input#resolver");
let tabuada = document.querySelector("div#tabuada");

let header = document.querySelector("header");
let main = document.querySelector("main");

let form = document.querySelector("form");
let inputNumeroEscolhido = document.querySelector("input#numero_escolhido");

// CSS
header.style.display = "flex";
header.style.justifyContent = "center";
header.style.fontSize = "1.4em";
header.style.textAlign = "center";

main.style.display = "flex";
main.style.flexDirection = "column";
main.style.alignItems = "center";

form.style.display = "flex";
form.style.flexDirection = "column";
form.style.border = "4px solid black";
form.style.padding = "30px 20px";

inputNumeroEscolhido.style.padding = "5px 8px";
inputNumeroEscolhido.style.width = "400px";
inputNumeroEscolhido.style.fontSize = "1.2em";
inputNumeroEscolhido.style.backgroundColor = "#d1e8ff";
inputNumeroEscolhido.style.border = "2px solid black";

resolver.style.marginTop = "20px";
resolver.style.fontSize = "1.4em"
resolver.style.width = "420px";
resolver.style.padding = "6px 0";

tabuada.style.marginTop = "30px";
tabuada.style.fontSize = "1.6em";

resolver.onclick = function() {
    let numeroEscolhido = document.querySelector("input#numero_escolhido");
    if(numeroEscolhido.value <= 0) {
        numeroEscolhido.value = 1;
    }
    tabuada.innerHTML = "";
    for(let i = 1; i < 11 ; i++) {
        tabuada.innerHTML += `${numeroEscolhido.value} x ${i} = ${Math.round(numeroEscolhido.value * i)}<br>`
    }
}
