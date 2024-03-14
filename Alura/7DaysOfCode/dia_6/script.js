let frutas = [];
let bebidas = [];
let congelados = [];
let doces = [];

const comprasTexto = document.querySelector("#comprastexto");

const inserirItem = function() {
    let produtoInserido = prompt("Que item deseja inserir:");
    let categoriaProduto = prompt("Em qual categoria esse item se encaixa??\n[1]Frutas\n[2]Bebidas\n[3]Congelados\n[4]Doces");
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

const removerItem = function() {
alert(`LISTA ATUAL:\nFRUTAS: ${frutas}\nBEBIDAS: ${bebidas}\nCONGELADOS: ${congelados}\nDOCES: ${doces}`);
}


do {
    if (frutas.length == 0 && bebidas.length == 0 && congelados.length == 0 && doces.length == 0) {
        var desejaAdicionar = prompt("Deseja adicionar uma comida na sua lista de compras?\n>Sim\nou\n>Não");
        if (desejaAdicionar == "s" || desejaAdicionar == "sim" || desejaAdicionar == "Sim" || desejaAdicionar == "S") {
            inserirItem();
        }
    }
    else {
        var desejaAdicionar = prompt("Qual ação deseja realizar agora:\n[1] Novo item\n[2] Remover item\n[3] Sair");
        if (desejaAdicionar == 1) {
            inserirItem();
        }
        
        else if (desejaAdicionar == 2) {
            removerItem();
        }

        else if (desejaAdicionar == 3) {
            break;
        }
    }
} while (desejaAdicionar != "n");


comprasTexto.innerHTML = `
Frutas.........: ${frutas}
<br>Bebidas.......: ${bebidas}
<br>Congelados.: ${congelados}
<br>Doces...........: ${doces}`;
