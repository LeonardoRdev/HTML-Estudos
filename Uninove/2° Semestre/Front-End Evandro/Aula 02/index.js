function changeTextAcessibility() {
    document.getElementById("explain").innerHTML="Acessibilidade é a qualidade do que é acessível, ou seja, é aquilo que é atingível, que tem acesso fácil."
    document.getElementById("explainFacebook").innerHTML = ""
    document.getElementById("explainTwitter").innerHTML = ""
    document.getElementById("explainInstagram").innerHTML = ""
    document.getElementById("explainYoutube").innerHTML = ""
} 

function changeTextGraduation() {
    document.getElementById("explain").innerHTML="Se matricule na Uninove por apenas R$1249,99!!!"
    document.getElementById("explainFacebook").innerHTML = ""
    document.getElementById("explainTwitter").innerHTML = ""
    document.getElementById("explainInstagram").innerHTML = ""
    document.getElementById("explainYoutube").innerHTML = ""
}

function changeTextSocialMidia() { 
    document.getElementById("explain").innerHTML = "CLIQUE PARA ABRIR ➜➜➜➜➜➜"
    document.getElementById("explainFacebook").innerHTML = "Facebook"
    document.getElementById("explainTwitter").innerHTML = "Twitter"
    document.getElementById("explainInstagram").innerHTML = "Instagram"
    document.getElementById("explainYoutube").innerHTML = "Youtube"


}
function openFacebook() {
    window.open("https://www.facebook.com/uninoveoficial")
}
function openTwitter() {
    window.open("https://twitter.com/uninoveoficial")
}
function openInstagram() {
    window.open("https://www.instagram.com/uninoveoficial/")
}
function openYoutube() {
    window.open("https://www.youtube.com/uninove")
}

    /*location.href="https://www.significados.com.br/acessibilidade/" -> Abre um link na página atual
    window.open("https://www.significados.com.br/acessibilidade/")      -> Abre um link em OUTRA guia*/