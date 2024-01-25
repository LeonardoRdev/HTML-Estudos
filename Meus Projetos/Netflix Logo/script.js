// let botao = document.querySelector("#mudarTema");
let corpo = document.querySelector("body");
let curvatura = document.querySelector(".item4");

corpo.style.backgroundColor = "#fff";
// botao.style.border = "solid 2px black";

corpo.onclick = () => {
    console.log(corpo.style.backgroundColor)
    if(corpo.style.backgroundColor == "rgb(255, 255, 255)") {
        corpo.style.backgroundColor = "#111";
        curvatura.style.backgroundColor = "#111"
        // botao.style.border = "solid 2px white";
    }
    else {
        corpo.style.backgroundColor = "#fff";
        curvatura.style.backgroundColor = "#fff"
        // botao.style.border = "solid 2px black";
    }
}
