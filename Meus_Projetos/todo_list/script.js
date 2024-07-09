// Form | Adicionar Tarefas
const inputTarefa = document.querySelector("#input-tarefa");
const inputTempoTarefa = document.querySelector("#input-tempo-tarefa");
const botaoEnviar = document.querySelector("#botao-enviar");

// Horário do término das atividades:
const divHorarioFimAtividades = document.querySelector("div#horario-fim-atividades");
const horarioFimAtividades = document.querySelector("#horario-fim-atividades #horario");

// Form | Tarefas adicionadas
const divTarefas = document.querySelector("div#tarefas")
let listaIdTarefas = [];
let idTarefa = 1;
let somaMinutos = 0

botaoEnviar.addEventListener("click", () => {
    let dataDia = new Date();
    let dataHora = adicionarZero(dataDia.getHours());
    let dataMinuto = adicionarZero(dataDia.getMinutes());
    let dataSegundo = adicionarZero(dataDia.getSeconds());
    
    if (inputTarefa.value == "" || inputTempoTarefa.value == "" || inputTempoTarefa.value < 1) {
        return;
    }

    somaMinutos += parseInt(inputTempoTarefa.value);
    dataMinuto += somaMinutos;
    
    // Se as tarefas passarem de 59 minutos, adicionar 1 hora:
    if (dataMinuto > 59) {
        let resultado = transformarEmHoras(dataMinuto);
        dataHora += resultado.adicionarHoras;
        dataMinuto = adicionarZero(resultado.novosMinutos);
    }
    
    // Se as tarefas passarem de 23:59, resetar para 00:00
    if (dataHora > 23) {
        dataHora = adicionarZero(dataHora % 24);
    }

    // Mostra o horário do fim das atividades:
    let horarioAtual = `${dataHora}:${dataMinuto}:${dataSegundo}`;
    horarioFimAtividades.innerHTML = horarioAtual;
    divHorarioFimAtividades.style.display = "flex";

    listaIdTarefas[idTarefa] = parseInt(inputTempoTarefa.value);


    divTarefas.innerHTML += `
                <div class="tarefa" id="tarefa${idTarefa}">
                    <input type="checkbox" id="input-tarefa${idTarefa}">
                    <label for="input-tarefa${idTarefa}">${inputTarefa.value}</label>
                    <p>${inputTempoTarefa.value} minutos</p>

                    <button class="excluir-tarefa" id="tarefa${idTarefa}" type="button" onclick="excluirTarefa(${idTarefa}, ${listaIdTarefas[idTarefa]},${dataHora},${dataMinuto},${dataSegundo})">X</button>
                </div>
    `;
    idTarefa++;
});

function excluirTarefa(idTarefa, tempoTarefa, horas, minutos, segundos) {
    let tarefaX = document.querySelector(`#tarefa${idTarefa}`);
    tarefaX.style.display = "none";
    // Atualiza o tempo sem os minutos dessa tarefa excluida
    minutos -=  tempoTarefa

    let horarioAtual = `${adicionarZero(horas)}:${adicionarZero(minutos)}:${adicionarZero(segundos)}`;
    horarioFimAtividades.innerHTML = horarioAtual;
}

function adicionarZero(horario) {
    return horario < 10 ? `0${horario}` : horario;
}

function transformarEmHoras(minutos) {
    let adicionarHoras = parseInt(minutos / 60);
    let novosMinutos = minutos % 60;

    // alert(`adicionar Horas: ${adicionarHoras}\nNovos Minutos: ${novosMinutos}`);

    return {adicionarHoras, novosMinutos} ;
}
