function sortear(totalNumeros, quantidadeNumerosMarcados) {
    let numeroSorteado = [];
    let resultado = document.querySelector("#mostrarResultado");
    for(let i = 1 ; i <= quantidadeNumerosMarcados ; i++) {
        numeroSorteado[i - 1] = Math.ceil(Math.random() * totalNumeros); 
        // Math.ceil arredonda pra cima, Math.floor arredonda pra baixo
    }
    resultado.innerHTML = numeroSorteado;
    console.log(numeroSorteado);
}
