const show = document.querySelector("#show");

show.onclick= function() {
    let imagem = document.querySelector("main")
    let textoBotao = document.querySelector("nav button")
    if (textoBotao.innerHTML == "Mostrar") {
        textoBotao.innerHTML = "Esconder"
        imagem.style.transform = "translateX(0px)";
    }
    else {
        textoBotao.innerHTML = "Mostrar"
        imagem.style.transform = "translateX(-102vw)";
    }
}