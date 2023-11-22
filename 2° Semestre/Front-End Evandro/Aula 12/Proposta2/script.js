// Criando variáveis que são tags no HTML

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


// JavaScript
resolver.onclick = function() {
    let numeroEscolhido = document.querySelector("input#numero_escolhido");
    if(numeroEscolhido.value <= 0) {
        numeroEscolhido.value = 1;
    }
    tabuada.innerHTML = "";
    for(let i = 1; i < 11 ; i++) { // Quando i for = 11, ele pará o loop
        tabuada.innerHTML += `<p class="numero_da_tabuada${i}">${numeroEscolhido.value} x ${i} = ${Math.round(numeroEscolhido.value * i)}</p>`
        
        let numeros_da_tabuada = document.querySelector(`p.numero_da_tabuada${i}`);
        numeros_da_tabuada.style.margin = "5px 0";
        numeros_da_tabuada.style.fontFamily = "sans-serif";
        numeros_da_tabuada.style.fontSize = "1.12em";
    }
}
