let textoTitulo = document.querySelector("#texto-titulo");

let nome = prompt("Qual seu nome: ");
let idade = prompt("Qual sua idade: ");
let linguagem = prompt("Qual linguagem de programação você anda estudando: ");

let gostaOuNao = prompt(`${nome}, você gosta de estudar ${linguagem}??
1 para SIM
2 para NÃO`);


if (gostaOuNao == 1) {
    textoTitulo.innerHTML = `Olá ${nome}, você tem ${idade} anos e já está apredendo ${linguagem}! (e ainda gosta dela!)`;
}

else if (gostaOuNao == 2) {
    textoTitulo.innerHTML = `Olha ${nome}, procure outra linguagem que você goste mais que ${linguagem}, por que você ainda tem ${idade} e ainda dá tempo!`
}

else {
    textoTitulo.innerHTML = `${nome}, as opções eram ou 1 ou 2, não tem outro jeito, agora dá F5 e refaz tudo`
}
