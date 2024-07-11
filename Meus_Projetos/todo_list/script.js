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

// Declarando o tempo inicial:
let dataDia = new Date();
let dataHora = dataDia.getHours();
let dataMinuto = dataDia.getMinutes();
let dataSegundo = dataDia.getSeconds();

botaoEnviar.addEventListener("click", () => {

    if (inputTarefa.value == "" || inputTempoTarefa.value == "" || inputTempoTarefa.value < 1) {
        return;
    }

    let somaMinutos = 0;

    somaMinutos += parseInt(inputTempoTarefa.value);
    dataMinuto += somaMinutos;
    
    // Se as tarefas passarem de 59 minutos, adicionar 1 hora:
    if (dataMinuto > 59) {
        let resultado = transformarEmHoras(dataMinuto);
        dataHora += resultado.adicionarHoras;
        dataMinuto = resultado.novosMinutos;
    }
    
    // Se as tarefas passarem de 23:59, resetar para 00:00
    if (dataHora > 23) {
        dataHora = dataHora % 24;
    }

    // Mostra o horário do fim das atividades:
    let horarioAtual = `${adicionarZero(dataHora)}:${adicionarZero(dataMinuto)}:${adicionarZero(dataSegundo)}`;
    horarioFimAtividades.innerHTML = horarioAtual;
    divHorarioFimAtividades.style.display = "flex";


    listaIdTarefas[idTarefa] = parseInt(inputTempoTarefa.value);

    divTarefas.innerHTML += `
                <div class="tarefa" id="tarefa${idTarefa}">
                    <input type="checkbox" id="input-tarefa${idTarefa}">
                    <label for="input-tarefa${idTarefa}">${inputTarefa.value}</label>
                    <p>${inputTempoTarefa.value} minutos</p>

                    <button class="excluir-tarefa" type="button" onclick="excluirTarefa(${idTarefa}, ${listaIdTarefas[idTarefa]},${dataHora},${dataMinuto},${dataSegundo})">X</button>
                </div>
    `;

    // Diminui o tempo total, reduzindo de acordo com a tarefa excluída:
    let botoesExcluirTarefa = document.querySelectorAll(".excluir-tarefa");
    for (i=1; i < botoesExcluirTarefa.length; i++) {
        botoesExcluirTarefa[i].addEventListener("click", (event) => {

            // Elemento pai do botão:
            let tarefaDiv = event.target.parentElement;

            // Pega o <p> da div pai, que possui o tempo da tarefa:
            let pElement = tarefaDiv.querySelector("p");

            // Pega o conteúdo de <p> (o tempo da tarefa):
            let tempoTarefa = pElement.textContent;

            // Atualizada o tempo com o novo tempo da tarefa exluída:
            dataMinuto -= parseInt(tempoTarefa);

            if (dataMinuto < 0) {
                let resultado = diminuirHoras(dataMinuto);
                dataHora -= resultado.removerHoras;
                dataMinuto = resultado.novosMinutos;
            }

            // Mostra o horário do fim das atividades:
            let dataDia = new Date();
            let dataSegundo = dataDia.getSeconds();
            let horarioAtual = `${adicionarZero(dataHora)}:${adicionarZero(dataMinuto)}:${adicionarZero(dataSegundo)}`;
            horarioFimAtividades.innerHTML = horarioAtual;
        })
    }

    // a fazer:
    // Você não está excluindo as tarefas de verdade, apenas escondendo elas, então o ID continua existindo, logo a estilização de cor sim cor não, não funciona.
    // Minutos negativos precisam subtrair a -1 de "hora", além de ficarem positivos. Exemplo: (-4 min não pode).

    idTarefa++;
});

function excluirTarefa(idTarefa, tempoTarefa, horas, minutos, segundos) {
    let tarefaX = document.querySelector(`#tarefa${idTarefa}`);
    tarefaX.remove();
    
    console.log(`tarefa feita no minuto:\n${minutos}`)
    // Atualiza o tempo sem os minutos dessa tarefa excluida
    //minutos -=  tempoTarefa

    // let horarioAtual = `${adicionarZero(horas)}:${adicionarZero(minutos)}:${adicionarZero(segundos)}`;
    // horarioFimAtividades.innerHTML = horarioAtual;
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

function diminuirHoras(minutos) {
    let removerHoras = 1; // arruma isso, se for mais de 120 minutos dá ruim.

    // Aqui também, se for + 120 dá ruim
    let novosMinutos = (60 + minutos); // minutos são negativos

    return {removerHoras, novosMinutos}
}
