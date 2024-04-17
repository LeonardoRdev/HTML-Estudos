let corpo = document.querySelector("body");
let curvatura = document.querySelector(".item4");

corpo.style.backgroundColor = "#fff";
corpo.style.transition = "0.8s"
curvatura.style.transition = "0.8s"

corpo.onclick = () => {
    console.log(corpo.style.backgroundColor)
    if(corpo.style.backgroundColor == "rgb(255, 255, 255)") {
        corpo.style.backgroundColor = "#111";
        curvatura.style.backgroundColor = "#111"
    }
    else {
        corpo.style.backgroundColor = "#fff";
        curvatura.style.backgroundColor = "#fff"
    }
}