// Form | Adicionar Tarefas
const inputTarefa = document.querySelector("#input-tarefa");
const inputTempoTarefa = document.querySelector("#input-tempo-tarefa");
const botaoEnviar = document.querySelector("#botao-enviar");

// Horário do término das atividades:
const divHorarioFimAtividades = document.querySelector("div#horario-fim-atividades");
const horarioFimAtividades = document.querySelector("#horario-fim-atividades #horario");

// Form | Tarefas adicionadas
const divTarefas = document.querySelector("div#tarefas")
let idTarefa = 1;

botaoEnviar.addEventListener("click", () => {
    let dataDia = new Date();
    let dataHora = adicionarZero(dataDia.getHours());
    let dataMinuto = adicionarZero(dataDia.getMinutes());
    let dataSegundo = adicionarZero(dataDia.getSeconds());
    
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

    if (inputTarefa.value == "" || inputTempoTarefa.value == "") {
        return;
    }

    divTarefas.innerHTML += `
                <div class="tarefa" id="tarefa${idTarefa}">
                    <input type="radio" id="tarefa${idTarefa}">
                    <label for="tarefa${idTarefa}">${inputTarefa.value}</label>
                    <p>${inputTempoTarefa.value}</p>

                    <button class="excluir-tarefa" id="tarefa${idTarefa}" type="button" onclick="excluirTarefa(${idTarefa})">X</button>
                </div>
    `;
    idTarefa++;
});

function excluirTarefa(idTarefa) {
    let tarefaX = document.querySelector(`#tarefa${idTarefa}`);
    tarefaX.style.display = "none";
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
