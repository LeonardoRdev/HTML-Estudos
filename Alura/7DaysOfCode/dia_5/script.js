let frutas = [];
let bebidas = [];
let congelados = [];
let doces = [];

const comprasTexto = document.querySelector("#comprastexto");

do {
    var desejaAdicionar = prompt("Deseja adicionar uma comida na sua lista de compras?\n>Sim\nou\n>Não");
    if (desejaAdicionar != "n") {
        let produtoInserido = prompt("Que item deseja inserir:\n*Exemplo: batata");
        let categoriaProduto = prompt("Em qual categoria essa comida se encaixa??\n[1]Frutas\n[2]Bebidas\n[3]Congelados\n[4]Doces");
        if (categoriaProduto == 1) {
            // Frutas
            frutas.push(produtoInserido);
        }

        else if (categoriaProduto == 2) {
            // Bebidas
            bebidas.push(produtoInserido);
        }

        else if (categoriaProduto == 3) {
            // Congelados
            congelados.push(produtoInserido);
        }

        else if (categoriaProduto == 4) {
            // Doces
            doces.push(produtoInserido);
        }

        else {
            alert("Lista inválida!!")
        }
    }

} while (desejaAdicionar != "n");

comprasTexto.innerHTML = `
Frutas.........: ${frutas}
<br>Bebidas.......: ${bebidas}
<br>Congelados.: ${congelados}
<br>Doces...........: ${doces}`;
