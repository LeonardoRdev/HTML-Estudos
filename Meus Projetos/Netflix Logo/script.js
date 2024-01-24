let botao = document.querySelector("#mudarTema");
let corpo = document.querySelector("body");

corpo.style.backgroundColor = "#fff";
botao.style.border = "solid 2px black";

botao.onclick = () => {
    console.log(corpo.style.backgroundColor)
    if(corpo.style.backgroundColor == "rgb(255, 255, 255)") {
        corpo.style.backgroundColor = "#111";
        botao.style.border = "solid 2px white";
    }
    else {
        corpo.style.backgroundColor = "#fff";
        botao.style.border = "solid 2px black";
    }
}
