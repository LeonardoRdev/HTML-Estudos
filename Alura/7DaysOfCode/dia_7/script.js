var resultado;

const soma = function(v1, v2) {
    resultado = v1 + v2;
    alert(`RESULTADO:\n${v1} + ${v2} = ${resultado}`);
}

const subtracao = function(v1, v2) {
    resultado = v1 - v2;
    alert(`RESULTADO:\n${v1} - ${v2} = ${resultado}`);
}

const multiplicacao = function(v1, v2) {
    resultado = v1 * v2;
    alert(`RESULTADO:\n${v1} x ${v2} = ${resultado}`);
}

const divisao = function(v1, v2) {
    resultado = v1 / v2;
    alert(`RESULTADO:\n${v1} / ${v2} = ${resultado}`);
}

do {
    var operacaoEscolhida = parseInt(prompt("Qual operação iremos utilizar:\n[1] Soma\n[2] Subtração\n[3] Multiplicação\n[4] Divisão\n\n[5] Sair"));
    if (operacaoEscolhida != 5) {
        var valor1 = parseInt(prompt("Digite o Primeiro valor da equação:"));
        var valor2 = parseInt(prompt("Digite o Segundo valor da equação:"));
    }

    switch(operacaoEscolhida) {
        case 1:
            soma(valor1, valor2);
            break;

        case 2:
            subtracao(valor1, valor2);
            break;

        case 3:
            multiplicacao(valor1, valor2);
            break;

        case 4:
            divisao(valor1, valor2);
            break;

        case 5:
            alert("Até a Próxima!");
            break;

        default:
            alert("Por favor insira uma opção válida!");
    }

} while(operacaoEscolhida != 5);
