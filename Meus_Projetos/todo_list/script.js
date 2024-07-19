// Form | Adicionar Tarefas
const inputTarefa = document.querySelector("#input-tarefa");
const inputTempoTarefa = document.querySelector("#input-tempo-tarefa");
const botaoEnviar = document.querySelector("#botao-enviar");

// Horário do término das atividades:
const divHorarioFimAtividades = document.querySelector("div#horario-fim-atividades");
const horarioFimAtividades = document.querySelector("#horario-fim-atividades #horario");

// Form | Tarefas adicionadas
const divTarefas = document.querySelector("div#tarefas");
let idTarefa = 1;

// Declarando o tempo inicial:
let dataDia = new Date();
let dataHora = dataDia.getHours();
let dataMinuto = dataDia.getMinutes();
let dataSegundo = dataDia.getSeconds();

// Botão de atualizar o timer (refresh):
const botaoRefresh = document.querySelector("#botao-refresh");
botaoRefresh.addEventListener("click", () => {
    atualizarTimer();
});

// Botão "ENVIAR" tarefa:
botaoEnviar.addEventListener("click", () => {

    if (inputTarefa.value == "" || inputTempoTarefa.value == "" || inputTempoTarefa.value < 1) {
        return;
    }

    let somaMinutos = 0;

    somaMinutos += parseInt(inputTempoTarefa.value);
    dataMinuto += somaMinutos;
    
    // Mostra o horário do fim das atividades:
    ajustarMinutosHoras(dataHora, dataMinuto, dataSegundo);
    divHorarioFimAtividades.style.display = "flex";

    const novaTarefa = document.createElement("div");
    novaTarefa.classList.add("tarefa");
    novaTarefa.id = `tarefa${idTarefa}`;

    novaTarefa.innerHTML = `
        <div id="div-checkbox">
            <div>
                <input type="checkbox" id="input-tarefa${idTarefa}">
            </div>
        </div>
        <label for="input-tarefa${idTarefa}">${inputTarefa.value}</label>
        <p>${inputTempoTarefa.value} minutos</p>
    `;

    const inputCheckbox = novaTarefa.querySelector(`#input-tarefa${idTarefa}`);
    // O botão "excluirTarefa" vai passar na função "excluirTarefa" a própria tarefa em que ele se encontra.
    const botaoExcluirTarefa = document.createElement("button");
    botaoExcluirTarefa.classList.add("excluir-tarefa");
    botaoExcluirTarefa.type = "button";
    botaoExcluirTarefa.textContent = "X";
    botaoExcluirTarefa.addEventListener("click", () => excluirTarefa(novaTarefa));

    novaTarefa.appendChild(botaoExcluirTarefa);
    divTarefas.appendChild(novaTarefa);


    // Diminui o tempo total, reduzindo de acordo com a tarefa excluída:
    inputCheckbox.addEventListener("click", (event) => {
        diminuirTempoTarefaConcluida(event.target, "input");

    });

    botaoExcluirTarefa.addEventListener("click", (event) => {
        diminuirTempoTarefaConcluida(event.target, "button");

    })

    function diminuirTempoTarefaConcluida(event, acao) {
        // Elemento da div (no caso, a div .tarefa):
        let tarefaDiv = event.closest('.tarefa');

        // Pega o <p> da div pai, que possui o tempo da tarefa:
        let pElement = tarefaDiv.querySelector("p");
        // Pega o conteúdo de <p> (o tempo da tarefa):
        let tempoTarefa = pElement.textContent;

        let inputCheckboxElement = tarefaDiv.querySelector("div input");

        console.log(`EVENTO: ${acao}
        \nCaixa marcada: ${inputCheckboxElement.checked}
        \n=============`);


        // Caso o checkbox esteja ativo, não diminuir o tempo novamente:
        if (acao === "button" && inputCheckboxElement.checked) {
            return;
        }

        // Volta o tempo da tarefa já marcada como concluída:
        if (acao === "input" && !inputCheckboxElement.checked) {
            dataMinuto += (parseInt(tempoTarefa) * 2);
        }

        // Atualizada o tempo com o novo tempo da tarefa exluída:
        dataMinuto -= parseInt(tempoTarefa);

        // Mostra o horário do fim das atividades:
        let dataDia = new Date();
        let dataSegundo = dataDia.getSeconds();

        ajustarMinutosHoras(dataHora, dataMinuto, dataSegundo);
    }

    idTarefa++;
});

function ajustarMinutosHoras(horas, minutos, segundos) {
    // Se as tarefas passarem de 59 minutos, adicionar 1 hora:
    if (minutos > 59) {
        let resultado = transformarEmHoras(minutos);
        horas += resultado.adicionarHoras;
        minutos = resultado.novosMinutos;
    }
    
    // Se as tarefas passarem de 23:59, resetar para 00:00
    if (horas > 23) {
        horas = horas % 24;
    }

    if (minutos < 0) {
        let resultado = diminuirHoras(minutos);
        horas -= resultado.removerHoras;
        minutos = resultado.novosMinutos;

        if (horas < 0) { 
            horas = 24 + (horas % 24);
        }
    }

    // Mostra o horário esperado para finalizar as atividades:
    let horarioAtual = `${adicionarZero(horas)}:${adicionarZero(minutos)}:${adicionarZero(segundos)}`;
    horarioFimAtividades.innerHTML = horarioAtual;
}

function atualizarTimer() {
    let dataDia = new Date();
    let dataHora = dataDia.getHours();
    let dataMinuto = dataDia.getMinutes();
    let dataSegundo = dataDia.getSeconds();

    let somaMinutosDaLista = 0;

    for (let i = 0; i < divTarefas.children.length; i++) {
        // alert("entrei no loop")
        // Pega o valor do P e junto tudo numa variável e joga todos os minutos em dataMinuto.

        let tarefa = divTarefas.children[i]
        let textoComMinutosTarefa = tarefa.querySelector("p").textContent;
        let MinutosTarefa = parseInt(textoComMinutosTarefa.split(" ")[0]);

        somaMinutosDaLista += MinutosTarefa;
    }

    dataMinuto += somaMinutosDaLista;
    // alert(somaMinutosDaLista)
    // alert(divTarefas.children.length)

    ajustarMinutosHoras(dataHora, dataMinuto, dataSegundo);
}

function excluirTarefa(tarefa) {
    divTarefas.removeChild(tarefa);
}

function adicionarZero(horario) {
    return horario < 10 ? `0${horario}` : horario;
}

function transformarEmHoras(minutos) {
    let adicionarHoras = parseInt(minutos / 60);
    let novosMinutos = minutos % 60;

    return {adicionarHoras, novosMinutos} ;
}

function diminuirHoras(minutos) {
    // minutos: a quantidade negativa que vai ser subtraida

    let minutosEmHoras = 1;
    
    /* Os minutos são negativos por padrão, então 1 hora sempre será subtraida
    Porém se forem subtraidos mais de 60 min, significa que 2 horas precisam ser subtraidas */

    // Se o tempo removido for mair ou igual a 120 minutos:
    if ((-minutos) > 60) {
        minutosEmHoras += parseInt(-minutos / 60);
    }

    let removerHoras = minutosEmHoras;

    let novosMinutos = (60 - (-minutos % 60)); // minutos são negativos

    return {removerHoras, novosMinutos}
}
