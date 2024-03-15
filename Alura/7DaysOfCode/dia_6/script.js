let frutas = [];
let bebidas = [];
let congelados = [];
let doces = [];

let todasListas = [frutas, bebidas, congelados, doces];

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
    let removerEsteItem = prompt(`LISTA ATUAL:\n\nFrutas.............: ${frutas}\nBebidas.........: ${bebidas}\nCongelados.: ${congelados}\nDoces.............: ${doces}\n\nQue item deseja remover?`);
    let itemEncontado = false;
    for(let i = 0; i < todasListas.length; i++) {
        if (todasListas[i].includes(removerEsteItem)) {
            alert(`ITEM ENCONTRADO!\n\nItem "${removerEsteItem}" removido com sucesso!`);
            todasListas[i].splice(todasListas[i].indexOf(removerEsteItem), 1)
            itemEncontado = true;
        }
    }
    if (itemEncontado == false) {
        alert(`Item "${removerEsteItem}" não encontrado D:`);
    }
    return; 
}


do {
    if (frutas.length == 0 && bebidas.length == 0 && congelados.length == 0 && doces.length == 0) {
        var desejaAdicionar = prompt("Deseja adicionar uma comida na sua lista de compras?\n[1] Sim\n[2] Não");
        if (desejaAdicionar == 1) {
            inserirItem();
        }
        else if (desejaAdicionar == 2) {
            // Gambiarra pra sair se digitar "2" na primeira rodada.
            desejaAdicionar = 3;
        }
        else {
            alert("FAVOR INSERIR UMA OPÇÃO VÁLIDA!!");
            desejaAdicionar = 0;
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
} while (desejaAdicionar != 3);


comprasTexto.innerHTML = `
Frutas.........: ${frutas}
<br>Bebidas.......: ${bebidas}
<br>Congelados.: ${congelados}
<br>Doces...........: ${doces}`;
