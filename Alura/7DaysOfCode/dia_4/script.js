let numeroAleatorio = Math.ceil(Math.random() * 10);
let tentativasUsadas = 0;

let mensagemTentativasRestastes = document.querySelector("#msg-tentativas-restantes");
const botaoChutar = document.querySelector("#enviar");
const inputChutar = document.querySelector("#chute");
let resultadoChute = document.querySelector("#resultado-chute");

botaoChutar.addEventListener("click", function () {
    if (tentativasUsadas < 3) {
        tentativasUsadas++;
        

        let valorChutado = inputChutar.value;
        if (valorChutado == numeroAleatorio) {
            resultadoChute.innerHTML = "Deu Bom! Você acertou!!";
            resultadoChute.style.color = "#1eeb4e"
            tentativasUsadas = 3;
            return;
        }
        else {
            if (valorChutado > numeroAleatorio) {
                resultadoChute.innerHTML = "Chutou alto...";
            }
            else if (valorChutado < numeroAleatorio && valorChutado != "") {
                resultadoChute.innerHTML = "Chutou baixo...";
            }
            else {
                resultadoChute.innerHTML = "Por favor, apenas números!";
                tentativasUsadas--;
            }
        }

        mensagemTentativasRestastes.innerHTML = `${tentativasUsadas}/3 tentativas restantes`

        if (tentativasUsadas >= 3) {
            resultadoChute.innerHTML = `ACABARAM AS CHANCES<br>o número era ${numeroAleatorio}`;
            resultadoChute.style.color = "#f00";
        }
        inputChutar.value = "";
    }
})
