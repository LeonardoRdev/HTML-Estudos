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
        imagens.style.width = "250px";
        imagens.style.height = "170px"
        imagens.style.border = "2px solid violet";
    }
}
