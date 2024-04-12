function show_hide() {
    let image = document.getElementById("imageShow")
    let alternate = document.getElementById("alternateButton")
    if (alternate.innerHTML == "Mostrar") {
    image.src = "o jogo.jpg";
    image.style.width = "40%";
    image.style.display = "flex";
    image.style.boxShadow = "0px 0px 25px 2.5px";
    alternate.innerHTML = "Esconder";
    } else {
        image.style.display = "none";
        alternate.innerHTML = "Mostrar";
    }
}

// function show_hide() {
//     // console.log(document.getElementById("alternateButton").innerHTML);
//     if (document.getElementById("alternateButton").innerHTML == "Mostrar") {
//     document.getElementById("imageShow").src = "o jogo.jpg"
//     document.getElementById("imageShow").style.width = "40%";
//     document.getElementById("imageShow").style.boxShadow = "0px 0px 25px 2.5px";
//     document.getElementById("alternateButton").innerHTML = "Esconder"
//     } else {
//         // document.getElementById("imageShow").src = ""
//         document.getElementById("imageShow").style.width = "0%";
//         document.getElementById("alternateButton").innerHTML = "Mostrar"
//     }
// }
