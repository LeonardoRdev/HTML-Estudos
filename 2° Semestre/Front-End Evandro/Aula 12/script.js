// Criando o "HTML" da página
let body = document.querySelector("body");
body.innerHTML = "<header></header><div id='main'></div>";

let header = document.querySelector("header");
header.innerHTML = "<button id='mostrar_fotos'>Mostrar Fotos</button><button id='organizar_fotos'>Organizar Fotos</button>";

let botaoMostrarFotos = document.querySelector("#mostrar_fotos");
let botaoOrganizarFotos = document.querySelector("#organizar_fotos");

let divFotos = document.querySelector("div#main");

// CSS
botaoOrganizarFotos.style.display = "none";

header.style.display = "flex";
header.style.alignItems = "center";
header.style.justifyContent = "center";
header.style.padding = "10px 0 0 0";

botaoMostrarFotos.style.fontSize = "2em";
botaoOrganizarFotos.style.fontSize = "2em";

divFotos.style.padding = "30px 20px";


// JavaScript "de verdade":
botaoMostrarFotos.onclick = function () {
    divFotos.innerHTML = "";
    for (let i = 1; i < 6; i++) {
        divFotos.innerHTML += `<img id='imagem${i}' src='imagens/imagem${i}.png' alt='Imagem ${i}'></img>`;
    }

    // Faz uma "troca" de botões:
    botaoMostrarFotos.style.display = "none";
    botaoOrganizarFotos.style.display = "block";
}

botaoOrganizarFotos.onclick = function () {
    for (let i = 1; i < 6; i++) {
        imagens = document.querySelector(`#imagem${i}`);
        
        //CSS
        imagens.style.width = "300px";
        imagens.style.height = "200px"
        imagens.style.border = "2px solid #ccc";
        imagens.style.borderRadius = "5px"
    }
    // CSS
    divFotos.style.display = "flex";
    divFotos.style.gap = "20px 25px";
    divFotos.style.flexWrap = "wrap";
    divFotos.style.justifyContent = "space-around";
}
