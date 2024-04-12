// BARRA COM MENU
const menuIcon = document.querySelector("#menuIcon");

menuIcon.onclick = function () {
    let menu = document.querySelector("nav");
    if (menu.style.transform == "translateY(85px)") {
        menuIcon.style.transform = "rotateZ(0deg)";
        menu.style.transform = "translateY(-180px)";
    }
    else {
        menuIcon.style.transform = "rotateZ(90deg)";
        menu.style.transform = "translateY(85px)";
    }
}



// SIGNOS
const signo = document.getElementsByClassName("signo");
let descricaoSigno = document.querySelector("section#descricaoSigno")
for (let s = 0; s < 12; s++) { // Looping que roda de 0 a 11 (passa por todos os signos)
    signo[s].onmouseover = function() {
        descricaoSigno.style.display = "flex"; // faz aparecer a caixinha com a previsão de cada signo
        descricaoSigno.style.flexDirection = "column"
        descricaoSigno.style.justifyContent = "space-between"
        if (s == 0) {
            // Áries
            descricaoSigno.innerHTML = "<p class='nomeSigno'>Áries</p><p class='previsao'>20 de março a 20 de abril</p>";
            document.querySelector("section#descricaoSigno p.nomeSigno").style.margin = "0";
            document.querySelector("section#descricaoSigno p.nomeSigno").style.fontSize = "1.7em";
            document.querySelector("section#descricaoSigno p.previsao").style.backgroundColor = "white";
            document.querySelector("section#descricaoSigno p.previsao").style.padding = "5px";
            document.querySelector("section#descricaoSigno p.previsao").style.margin = "0";
            descricaoSigno.style.margin = "10px 20px 0 "
        }
        else if (s == 1) {
            // Gêmeos
            descricaoSigno.innerHTML = "<p class='nomeSigno'>Gêmeos</p><p class='previsao'>21 de maio a 20 de junho</p>";
            document.querySelector("section#descricaoSigno p.nomeSigno").style.margin = "0";
            document.querySelector("section#descricaoSigno p.nomeSigno").style.fontSize = "1.7em";
            document.querySelector("section#descricaoSigno p.previsao").style.backgroundColor = "white";
            document.querySelector("section#descricaoSigno p.previsao").style.padding = "5px";
            document.querySelector("section#descricaoSigno p.previsao").style.margin = "0";
            descricaoSigno.style.margin = "252px 20px 0";
            if (document.querySelector("img.signo").width == "175") {
                document.querySelector("section#descricaoSigno").style.marginTop = "150px";
                // alert("foi mesmo")
            }
            else if (document.querySelector("img.signo").width == "105") {
                document.querySelector("section#descricaoSigno").style.marginTop = "105px";
            }
            else if (document.querySelector("img.signo").width == "63") {
                document.querySelector("section#descricaoSigno").style.marginTop = "85px";
            }
        }
        else if (s == 2) {
            // Leão
            descricaoSigno.innerHTML = "<p class='nomeSigno'>Leão</p><p class='previsao'>22 de julho a 22 de agosto</p>";
            document.querySelector("section#descricaoSigno p.nomeSigno").style.margin = "0";
            document.querySelector("section#descricaoSigno p.nomeSigno").style.fontSize = "1.7em";
            document.querySelector("section#descricaoSigno p.previsao").style.backgroundColor = "white";
            document.querySelector("section#descricaoSigno p.previsao").style.padding = "5px";
            document.querySelector("section#descricaoSigno p.previsao").style.margin = "0";
            descricaoSigno.style.margin = "494px 20px 0"
            if (document.querySelector("img.signo").width == "175") {
                document.querySelector("section#descricaoSigno").style.marginTop = "290px"
            }
            else if (document.querySelector("img.signo").width == "105") {
                document.querySelector("section#descricaoSigno").style.marginTop = "200px";
            }
            else if (document.querySelector("img.signo").width == "63") {
                document.querySelector("section#descricaoSigno").style.marginTop = "155px";
            }
        }
        else if (s == 3) {
            // Libra
            descricaoSigno.innerHTML = "<p class='nomeSigno'>Libra</p><p class='previsao'>23 de setembro a 22 de outubro</p>";
            document.querySelector("section#descricaoSigno p.nomeSigno").style.margin = "0";
            document.querySelector("section#descricaoSigno p.nomeSigno").style.fontSize = "1.7em";
            document.querySelector("section#descricaoSigno p.previsao").style.backgroundColor = "white";
            document.querySelector("section#descricaoSigno p.previsao").style.padding = "5px";
            document.querySelector("section#descricaoSigno p.previsao").style.margin = "0";
            descricaoSigno.style.margin = "736px 20px 0"
            if (document.querySelector("img.signo").width == "175") {
                document.querySelector("section#descricaoSigno").style.marginTop = "430px"
            }
            else if (document.querySelector("img.signo").width == "105") {
                document.querySelector("section#descricaoSigno").style.marginTop = "295px";
            }
            else if (document.querySelector("img.signo").width == "63") {
                document.querySelector("section#descricaoSigno").style.marginTop = "225px";
            }
        }
        else if (s == 4) {
            // Sargitário
            descricaoSigno.innerHTML = "<p class='nomeSigno'>Sargitário</p><p class='previsao'>22 de novembro a 21 de dezembro</p>";
            document.querySelector("section#descricaoSigno p.nomeSigno").style.margin = "0";
            document.querySelector("section#descricaoSigno p.nomeSigno").style.fontSize = "1.7em";
            document.querySelector("section#descricaoSigno p.previsao").style.backgroundColor = "white";
            document.querySelector("section#descricaoSigno p.previsao").style.padding = "5px";
            document.querySelector("section#descricaoSigno p.previsao").style.margin = "0";
            descricaoSigno.style.margin = "978px 20px 0"
            if (document.querySelector("img.signo").width == "175") {
                document.querySelector("section#descricaoSigno").style.marginTop = "570px"
            }
            else if (document.querySelector("img.signo").width == "105") {
                document.querySelector("section#descricaoSigno").style.marginTop = "390px";
            }
            else if (document.querySelector("img.signo").width == "63") {
                document.querySelector("section#descricaoSigno").style.marginTop = "295px";
            }
        }
        else if (s == 5) {
            // Aquário
            descricaoSigno.innerHTML = "<p class='nomeSigno'>Aquário</p><p class='previsao'>21 de janeiro a 19 de fevereiro</p>";
            document.querySelector("section#descricaoSigno p.nomeSigno").style.margin = "0";
            document.querySelector("section#descricaoSigno p.nomeSigno").style.fontSize = "1.7em";
            document.querySelector("section#descricaoSigno p.previsao").style.backgroundColor = "white";
            document.querySelector("section#descricaoSigno p.previsao").style.padding = "5px";
            document.querySelector("section#descricaoSigno p.previsao").style.margin = "0";
            descricaoSigno.style.margin = "1220px 20px 0"
            if (document.querySelector("img.signo").width == "175") {
                document.querySelector("section#descricaoSigno").style.marginTop = "710px"
            }
            else if (document.querySelector("img.signo").width == "105") {
                document.querySelector("section#descricaoSigno").style.marginTop = "485px";
            }
            else if (document.querySelector("img.signo").width == "63") {
                document.querySelector("section#descricaoSigno").style.marginTop = "365px";
            }
        }
        else if (s == 6) {
            // Touro
            descricaoSigno.innerHTML = "<p class='nomeSigno'>Touro</p><p class='previsao'>21 de abril a 20 de maio</p>";
            document.querySelector("section#descricaoSigno p.nomeSigno").style.margin = "0";
            document.querySelector("section#descricaoSigno p.nomeSigno").style.fontSize = "1.7em";
            document.querySelector("section#descricaoSigno p.previsao").style.backgroundColor = "white";
            document.querySelector("section#descricaoSigno p.previsao").style.padding = "5px";
            document.querySelector("section#descricaoSigno p.previsao").style.margin = "0";
            descricaoSigno.style.margin = "10px 20px 0"
        }
        else if (s == 7) {
            // Câncer
            descricaoSigno.innerHTML = "<p class='nomeSigno'>Câncer</p><p class='previsao'>21 de junho a 21 de julho</p>";
            document.querySelector("section#descricaoSigno p.nomeSigno").style.margin = "0";
            document.querySelector("section#descricaoSigno p.nomeSigno").style.fontSize = "1.7em";
            document.querySelector("section#descricaoSigno p.previsao").style.backgroundColor = "white";
            document.querySelector("section#descricaoSigno p.previsao").style.padding = "5px";
            document.querySelector("section#descricaoSigno p.previsao").style.margin = "0";
            descricaoSigno.style.margin = "252px 20px 0"
            if (document.querySelector("img.signo").width == "175") {
                document.querySelector("section#descricaoSigno").style.marginTop = "150px"
            }
            else if (document.querySelector("img.signo").width == "105") {
                document.querySelector("section#descricaoSigno").style.marginTop = "105px";
            }
            else if (document.querySelector("img.signo").width == "63") {
                document.querySelector("section#descricaoSigno").style.marginTop = "85px";
            }
        }
        else if (s == 8) {
            // Virgem
            descricaoSigno.innerHTML = "<p class='nomeSigno'>Virgem</p><p class='previsao'>23 de agosto a 22 de setembro</p>";
            document.querySelector("section#descricaoSigno p.nomeSigno").style.margin = "0";
            document.querySelector("section#descricaoSigno p.nomeSigno").style.fontSize = "1.7em";
            document.querySelector("section#descricaoSigno p.previsao").style.backgroundColor = "white";
            document.querySelector("section#descricaoSigno p.previsao").style.padding = "5px";
            document.querySelector("section#descricaoSigno p.previsao").style.margin = "0";
            descricaoSigno.style.margin = "494px 20px 0"
            if (document.querySelector("img.signo").width == "175") {
                document.querySelector("section#descricaoSigno").style.marginTop = "290px"
            }
            else if (document.querySelector("img.signo").width == "105") {
                document.querySelector("section#descricaoSigno").style.marginTop = "200px";
            }
            else if (document.querySelector("img.signo").width == "63") {
                document.querySelector("section#descricaoSigno").style.marginTop = "155px";
            }
        }
        else if (s == 9) {
            // Escorpião
            descricaoSigno.innerHTML = "<p class='nomeSigno'>Escorpião</p><p class='previsao'>23 de outubro a 21 de novembro</p>";
            document.querySelector("section#descricaoSigno p.nomeSigno").style.margin = "0";
            document.querySelector("section#descricaoSigno p.nomeSigno").style.fontSize = "1.7em";
            document.querySelector("section#descricaoSigno p.previsao").style.backgroundColor = "white";
            document.querySelector("section#descricaoSigno p.previsao").style.padding = "5px";
            document.querySelector("section#descricaoSigno p.previsao").style.margin = "0";
            descricaoSigno.style.margin = "736px 20px 0"
            if (document.querySelector("img.signo").width == "175") {
                document.querySelector("section#descricaoSigno").style.marginTop = "430px"
            }
            else if (document.querySelector("img.signo").width == "105") {
                document.querySelector("section#descricaoSigno").style.marginTop = "295px";
            }
            else if (document.querySelector("img.signo").width == "63") {
                document.querySelector("section#descricaoSigno").style.marginTop = "225px";
            }
        }
        else if (s == 10) {
            // Capricórnio
            descricaoSigno.innerHTML = "<p class='nomeSigno'>Capricórnio</p><p class='previsao'>22 de dezembro a 21 de janeiro</p>";
            document.querySelector("section#descricaoSigno p.nomeSigno").style.margin = "0";
            document.querySelector("section#descricaoSigno p.nomeSigno").style.fontSize = "1.7em";
            document.querySelector("section#descricaoSigno p.previsao").style.backgroundColor = "white";
            document.querySelector("section#descricaoSigno p.previsao").style.padding = "5px";
            document.querySelector("section#descricaoSigno p.previsao").style.margin = "0";
            descricaoSigno.style.margin = "978px 20px 0"
            if (document.querySelector("img.signo").width == "175") {
                document.querySelector("section#descricaoSigno").style.marginTop = "570px"
            }
            else if (document.querySelector("img.signo").width == "105") {
                document.querySelector("section#descricaoSigno").style.marginTop = "390px";
            }
            else if (document.querySelector("img.signo").width == "63") {
                document.querySelector("section#descricaoSigno").style.marginTop = "295px";
            }
        }
        else if (s == 11) {
            // Peixes
            descricaoSigno.innerHTML = "<p class='nomeSigno'>Peixes</p><p class='previsao'>20 de fevereiro a 20 de março</p>";
            document.querySelector("section#descricaoSigno p.nomeSigno").style.margin = "0";
            document.querySelector("section#descricaoSigno p.nomeSigno").style.fontSize = "1.7em";
            document.querySelector("section#descricaoSigno p.previsao").style.backgroundColor = "white";
            document.querySelector("section#descricaoSigno p.previsao").style.padding = "5px";
            document.querySelector("section#descricaoSigno p.previsao").style.margin = "0";
            descricaoSigno.style.margin = "1220px 20px 0"
            if (document.querySelector("img.signo").width == "175") {
                document.querySelector("section#descricaoSigno").style.marginTop = "710px"
            }
            else if (document.querySelector("img.signo").width == "105") {
                document.querySelector("section#descricaoSigno").style.marginTop = "485px";
            }
            else if (document.querySelector("img.signo").width == "63") {
                document.querySelector("section#descricaoSigno").style.marginTop = "365px";
            }
        }
    }
}
