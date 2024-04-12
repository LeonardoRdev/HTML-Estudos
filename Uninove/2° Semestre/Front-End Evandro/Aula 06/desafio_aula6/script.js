function enviar() {
    let nome = document.getElementById("nome").value
    let senha = document.getElementById("senha").value
    if (nome === "Pedro" & senha === "1234") {
        location.href="restrito.html"
    }
    else {
        console.log(document.getElementById("acess_denied").innerHTML)
        document.getElementById("acess_denied").style.display = "flex";
    }
}

function abrir() {
    window.open("https://www.youtube.com/@ToddyComMococa/videos")
}
