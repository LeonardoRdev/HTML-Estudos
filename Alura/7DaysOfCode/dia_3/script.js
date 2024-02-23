let textoTitulo = document.querySelector("#texto-titulo");

let carreiraSeguida = prompt(`Qual carreira deseja seguir?
Para 'Front-end' digite 1
Para 'Back-end'  digite 2`);

if (carreiraSeguida == 1) {
    carreiraSeguida = "Frond-end";
    prompt(`E entre React ou Vue, qual você prefere??
    1 = React
    2 = Vue`);
} 

else {
    carreiraSeguida = "Back-end";
    prompt(`E entre C# ou Java, qual você prefere??
    1 = C#
    2 = Java`);
}

let virarFullstack = prompt(`Você deseja continuar sua carreira como ${carreiraSeguida} ou virar Fullstack?
1 = Continuar na carreira atual
2 = Virar Fullstack`);

let sair = false;
while (sair === false) {
    let continuarRespondendo = prompt(`Tem mais alguma tecnologia que você gostaria de aprender?
    digite 'ok' para continuar.`);
    if (continuarRespondendo == 'ok') {
        let tecnologiaDesejada = prompt(`Qual tecnologia você deseja aprender sobre?`)
        alert(`${tecnologiaDesejada} é uma ótima escolha! Boa sorte com seus estudos!`)
    }
    else {
        alert(`Obrigado por experimentar o programa!`)
        sair = true;
    }
}
