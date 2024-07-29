let divImagemPudins = document.querySelector("#pudins");
let pudimAmassado = document.querySelector("#pudim_amassado");
let quantidadePudins = document.querySelector("#quantidade_pudins")
let pudins = 0;

divImagemPudins.addEventListener("click", () => {
    pudins += 1;

    quantidadePudins.innerHTML = `Pudins: ${pudins}`
});
