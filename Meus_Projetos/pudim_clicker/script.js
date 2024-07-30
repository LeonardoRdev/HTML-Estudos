let divImagemPudins = document.querySelector("#pudins");
let pudimApertado = document.querySelector("#pudim_apertado");
let quantidadePudins = document.querySelector("#quantidade_pudins")
let pudins = 0;
let poderDoClique = 1;

divImagemPudins.addEventListener("click", () => {
    pudins += poderDoClique;

    quantidadePudins.innerHTML = `Pudins: ${pudins}`
});
