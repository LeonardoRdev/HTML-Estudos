// Criando o "HTML" da página
let body = document.querySelector("body");
body.innerHTML = "<header></header><div id='main'></div>";

let header = document.querySelector("header");
header.innerHTML = "<button id='mostrar_fotos'>Mostrar Fotos</button><button id='organizar_fotos'>Organizar Fotos</button>";

let botaoMostrarFotos = document.querySelector("#mostrar_fotos");
let botaoOrganizarFotos = document.querySelector("#organizar_fotos");

let divFotos = document.querySelector("div#main");

// JavaScript "de verdade":
botaoMostrarFotos.onclick = function () {
    divFotos.innerHTML = "";
    for (let i = 1; i < 6; i++) {
        divFotos.innerHTML += `<img src='imagens/imagem${i}.png' alt='Imagem ${i}'></img>`;
    }
}

botaoOrganizarFotos.onclick = function () {
    alert("mudou!");
}
