let body = document.querySelector("body");
body.innerHTML = "<header><button id='fotos'>Mostrar Fotos</button></header>";
let botaoFotos = document.querySelector("#fotos");

botaoFotos.onclick = function() {
    body.innerHTML += "<div id='main'></div>";
    let divFotos = document.querySelector("div#main");
    for (let i = 1; i < 6; i++) {
        divFotos.innerHTML += `<img src='imagens/imagem${i}.png' alt=''></img>`
    }
}
