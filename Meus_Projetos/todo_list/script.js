// Agora a página salva as tarefas, porém, mesmo se excluir, ao recarregar a página todas tarefas voltam.

// Form | Adicionar Tarefas
const inputTarefa = document.querySelector("#input-tarefa");
const inputTempoTarefa = document.querySelector("#input-tempo-tarefa");
const botaoEnviar = document.querySelector("#botao-enviar");

// Horário do término das atividades:
const divHorarioFimAtividades = document.querySelector("div#horario-fim-atividades");
const horarioFimAtividades = document.querySelector("#horario-fim-atividades #horario");

// Form | Tarefas adicionadas
const divTarefas = document.querySelector("div#tarefas");
let idTarefa = localStorage.getItem("idTarefa_salvo") ? parseInt(localStorage.getItem("idTarefa_salvo")) : 1

// localStorage.clear();

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

    // Verificação para saber se a tarefa é válida:
    if (inputTarefa.value == "" || inputTempoTarefa.value == "" || inputTempoTarefa.value < 1) {
        return;
    }

    let somaMinutos = 0;

    somaMinutos += parseInt(inputTempoTarefa.value);
    dataMinuto += somaMinutos;

    console.log(`ID: ${idTarefa}`);
    
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

    // O botão "excluirTarefa" vai passar na função "excluirTarefa" a própria tarefa em que ele se encontra.
    const botaoExcluirTarefa = document.createElement("button");
    botaoExcluirTarefa.classList.add("excluir-tarefa");
    botaoExcluirTarefa.type = "button";
    botaoExcluirTarefa.textContent = "X";
    botaoExcluirTarefa.addEventListener("click", () => excluirTarefa(novaTarefa));

    novaTarefa.appendChild(botaoExcluirTarefa);
    divTarefas.appendChild(novaTarefa);

    // Salva informações no localStorage
    let listaTarefasSalvas = JSON.parse(localStorage.getItem("array_tarefas_salvas")) || [];
    listaTarefasSalvas.push(novaTarefa.innerHTML);
    localStorage.setItem("array_tarefas_salvas", JSON.stringify(listaTarefasSalvas));

    salvarTarefasNoLocalStorage(listaTarefasSalvas);

    const inputCheckbox = novaTarefa.querySelector(`#input-tarefa${idTarefa}`);

    // Mostra o horário do fim das atividades e o mostra:
    atualizarTimer();
    divHorarioFimAtividades.style.display = "flex";

    // Diminui o tempo total esperado para a conclusão das tarefas:
    inputCheckbox.addEventListener("click", () => {
        atualizarTimer();

    });

    botaoExcluirTarefa.addEventListener("click", () => {
        atualizarTimer();

    })

    // Limpa os inputs, para uma possível nova tarefa ser adicionada.
    inputTarefa.value = "";
    inputTempoTarefa.value = "";

    idTarefa++;
    localStorage.setItem("idTarefa_salvo", idTarefa);
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

        // Pega o valor do P e junto tudo numa variável e joga todos os minutos em dataMinuto.
        let tarefa = divTarefas.children[i]
        let input = tarefa.querySelector("input");
        let label = tarefa.querySelector("label");
        let paragrafo = tarefa.querySelector("p");
        let textoComMinutosTarefa = paragrafo.textContent;
        let MinutosTarefa = parseInt(textoComMinutosTarefa.split(" ")[0]);

        // O programa deixará de somar o tempo de uma tarefa, caso ela esteja concluída 
        if (!input.checked) {
            somaMinutosDaLista += MinutosTarefa;
            
            // estilização ao marcar e desmarcar tarefas: 
            label.style.textDecoration = "none";
            paragrafo.style.textDecoration = "none";
        }
        
        // Caso a tarefa esteja concluída:
        else {
            label.style.textDecoration = "line-through";
            paragrafo.style.textDecoration = "line-through";
        }

    }

    dataMinuto += somaMinutosDaLista;
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

function salvarTarefasNoLocalStorage(listaTarefasSalvas) {

    listaTarefasSalvas.forEach((tarefa, index) => {
        console.log(`index: ${index+1}\nidTarefa: ${idTarefa}`)
        if (listaTarefasSalvas[index] != null & index+1 != idTarefa & document.querySelector(`#tarefa${index+1}`) == null) {
            // alert(document.querySelector(`#tarefa${index}`))

            const novaTarefa = document.createElement("div");
            novaTarefa.classList.add("tarefa");
            novaTarefa.id = `tarefa${index+1}`;

            novaTarefa.innerHTML = listaTarefasSalvas[index];

            // O botão "excluirTarefa" vai passar na função "excluirTarefa" a própria tarefa em que ele se encontra.
            const botaoExcluirTarefa = document.createElement("button");
            botaoExcluirTarefa.classList.add("excluir-tarefa");
            botaoExcluirTarefa.type = "button";
            botaoExcluirTarefa.textContent = "X";
            botaoExcluirTarefa.addEventListener("click", () => excluirTarefa(novaTarefa));
        
            novaTarefa.appendChild(botaoExcluirTarefa);
            divTarefas.appendChild(novaTarefa);

            console.log(`Tarefa ${index + 1}: ${(listaTarefasSalvas[index])}`);

            const inputCheckbox = novaTarefa.querySelector(`#input-tarefa${index+1}`);
            console.log(`\n\nINPUT CHECKBOX:\n${inputCheckbox}\n\n`);

            // Mostra o horário do fim das atividades e o mostra:
            atualizarTimer();
            divHorarioFimAtividades.style.display = "flex";

            // Diminui o tempo total esperado para a conclusão das tarefas:
            inputCheckbox.addEventListener("click", () => {
                atualizarTimer();

            });

            botaoExcluirTarefa.addEventListener("click", () => {
                atualizarTimer();

            });
        }
    });
}