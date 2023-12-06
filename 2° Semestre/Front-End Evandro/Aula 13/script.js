let main = document.querySelector("main");

// let nomes = ["Leonardo", "João", "Cesar", "Caio", "Guilherme", "Bruno", "JVNS"];
// let idades = [19, 19, 18, 16, 19, 19, 19];
// nomes[7] = "Pedrinho";
// idades[7] = 42;


// for(i = 0; i < nomes.length; i++) {
//     main.innerHTML += "<p class='conteudo'>" + nomes[i] + " tem "+ idades[i] + " anos</p>";
// }


// var cidades =  [
//     ["Campinas", "Jaú", "Itú"],
//     ["Jales", "Curitiba", "Osasco"],
//     ["Guarulhos", "Araraquara", "Rio Branco"]
// ];

var cidades = [[], [], []];
cidades[0][0] = "Campinas";
cidades[0][1] = "Jaú";
cidades[0][2] = "Itú";
cidades[1][0] = "jales";
cidades[1][1] = "curitiba";
cidades[1][2] = "Osasco";
cidades[2][0] = "Guarulhos";
cidades[2][1] = "Araraquara";
cidades[2][2] = "Rio Branco";

for(coluna = 0; coluna < cidades.length; coluna++) {
    for(linha = 0; linha < cidades[coluna].length; linha++) {
        main.innerHTML += "<p class='conteudo'>"+ cidades[linha][coluna] + "</p>";
    }
}
