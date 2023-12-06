let main = document.querySelector("main");

// let nomes = ["Leonardo", "João", "Cesar", "Caio", "Guilherme", "Bruno", "JVNS"];
// let idades = [19, 19, 18, 16, 19, 19, 19];

// var nomes = new Array("Leonardo", "João", "Cesar", "Caio", "Guilherme", "Bruno", "JVNS")

// nomes[7] = "Pedrinho";
// idades[7] = 42;


// for (i = 0; i < nomes.length; i++) {
//     main.innerHTML += "<p class='conteudo'>" + nomes[i] + " tem " + idades[i] + " anos</p>";
// }


// var nomes = [];
// var idades = [];
// for (i = 0; i <= 7; i++) {
//     nomes[i] = prompt(`Digite o nome da posição ${i}:`);
//     idades[i] = prompt(`Digite a idade de ${nomes[i]}:`)
// }

// for (i = 0; i < nomes.length; i++) {
//     main.innerHTML += `<p class="conteudo">o ${i}° nome é: ${nomes[i]} e possue ${idades[i]} anos!</p>`
// }




// # MATRIZ CIDADES

// var cidades = [
//     ["Campinas", "Jaú", "Itú"],
//     ["Jales", "Curitiba", "Osasco"],
//     ["Guarulhos", "Araraquara", "Rio Branco"]
// ];

// var cidades = [[], [], []];
// cidades[0][0] = "Campinas";
// cidades[0][1] = "Jaú";
// cidades[0][2] = "Itú";
// cidades[1][0] = "jales";
// cidades[1][1] = "curitiba";
// cidades[1][2] = "Osasco";
// cidades[2][0] = "Guarulhos";
// cidades[2][1] = "Araraquara";
// cidades[2][2] = "Rio Branco";

// var cidades = new Array(
//     ["Campinas", "Jaú", "Itú"],
//     ["Jales", "Curitiba", "Osasco"],
//     ["Guarulhos", "Araraquara", "Rio Branco"]
// )

// for (coluna = 0; coluna < cidades.length; coluna++) {
//     for (linha = 0; linha < cidades[coluna].length; linha++) {
//         main.innerHTML += "<p class='conteudo'>" + cidades[linha][coluna] + "</p>";
//     }
// }





// Função ARMAZENAR
let armazenar = document.querySelector("#armazenar");
armazenar.onclick = function () {
    // Obter os dados digitados no formulário e armazenar em um vetor chamado "cliente"
    var cliente = [];
    cliente[0] = document.querySelector("#nome"); // Nome
    cliente[1] = document.querySelector("#idade") // idade
    cliente[2] = document.querySelector("#telefone"); // Telefone
    cliente[3] = document.querySelector("#email"); // E-mail

    // Exibir os valores armazenados no vetor cliente, usando laço de repetição
    main.innerHTML = ""
    for (i = 0; i < cliente.length; i++) {
        main.innerHTML += `<p class="conteudo">${cliente[i].value}</p>`
    }   
}
