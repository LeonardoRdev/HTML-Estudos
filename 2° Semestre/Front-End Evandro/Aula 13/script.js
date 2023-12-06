let main = document.querySelector("main");

let nomes = ["Leonardo", "João", "Cesar", "Caio", "Guilherme", "Bruno", "JVNS"];
let idades = [19, 19, 18, 16, 19, 19, 19];

for(i = 0; i < nomes.length; i++) {
    main.innerHTML += "<p class='conteudo'>" + nomes[i] + " tem "+ idades[i] + " anos</p>";
}

var cidades =  [
    ["Campinas", "Jaú", "Itú"],
    ["Jales", "Curitiba", "Osasco"],
    ["Guarulhos", "Araraquara", "Rio Branco"]
];

// document.write(cidades[1][1]);