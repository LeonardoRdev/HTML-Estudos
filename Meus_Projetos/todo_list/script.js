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

// Declarando o tempo inicial:
let dataDia = new Date();
let dataHora = dataDia.getHours();
let dataMinuto = dataDia.getMinutes();
let dataSegundo = dataDia.getSeconds();

// localStorage.clear();
let listaTarefasSalvas = JSON.parse(localStorage.getItem("array_tarefas_salvas")) || [];
if (listaTarefasSalvas.length !== 0) {
    salvarTarefasNoLocalStorage(listaTarefasSalvas);

}

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

    console.log(`ID da nova tarefa: ${idTarefa}`);
    
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
        <div id="tempo-tarefa">
            <p id="tempo-em-minutos">${inputTempoTarefa.value} minutos</p>
            <p id="hora-aproximada-conclusao-tarefa">(${adicionarZero(dataHora)}:${adicionarZero(dataMinuto)})</>
        </div>
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
    listaTarefasSalvas = JSON.parse(localStorage.getItem("array_tarefas_salvas")) || [];
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

    // Retorna o novo valor de "horas", "minutos" e "segundos"
    return {horas, minutos, segundos}
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
        let paragrafoTempoEstimadoConclusao = tarefa.querySelector("p:nth-of-type(2)");
        let textoComMinutosTarefa = paragrafo.textContent;
        let MinutosTarefa = parseInt(textoComMinutosTarefa.split(" ")[0]);

        // O programa deixará de somar o tempo de uma tarefa, caso ela esteja concluída 
        if (!input.checked) {
            somaMinutosDaLista += MinutosTarefa;
            
            // estilização ao marcar e desmarcar tarefas: 
            label.style.textDecoration = "none";
            paragrafo.style.textDecoration = "none";
            paragrafoTempoEstimadoConclusao.style.textDecoration = "none";
        }
        
        // Caso a tarefa esteja concluída:
        else {
            label.style.textDecoration = "line-through";
            paragrafo.style.textDecoration = "line-through";
            paragrafoTempoEstimadoConclusao.style.textDecoration = "line-through";
        }

    }

    dataMinuto += somaMinutosDaLista;
    let resultado = ajustarMinutosHoras(dataHora, dataMinuto, dataSegundo);
        
    // Mostra o horário esperado para finalizar as atividades:
    let horarioAtual = `${adicionarZero(resultado.horas)}:${adicionarZero(resultado.minutos)}:${adicionarZero(resultado.segundos)}`;
    horarioFimAtividades.innerHTML = horarioAtual;

    atualizarPrevisaoConclusaoCadaTarefa();
}

function excluirTarefa(tarefa) {
    divTarefas.removeChild(tarefa);

    // Para remover a tarefa do localStorage
    listaTarefasSalvas.forEach((txtTarefa, index) => {
        if (txtTarefa === null) {
            // Caso a tarefa seja "null"
            return
        }

        if (txtTarefa.includes(tarefa.id)) {
            // Define a tarefa como null
            listaTarefasSalvas[index] = null;
        }

    });

    // Salva o novo array com a tarefa excluida
    localStorage.setItem("array_tarefas_salvas", JSON.stringify(listaTarefasSalvas));
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

            const inputCheckbox = novaTarefa.querySelector(`#input-tarefa${index+1}`);

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

function atualizarPrevisaoConclusaoCadaTarefa() {
    
    const elementoTarefas = document.querySelectorAll(".tarefa");
    let somaTotalMinutosTarefas = 0;

    elementoTarefas.forEach((tarefa) => {
        // Soma em uma única variável os minutos definidos para cada tarefa
        somaTotalMinutosTarefas += parseInt(tarefa.querySelector("#tempo-em-minutos").innerHTML);

        let input = tarefa.querySelector("input");
        // Caso a tarefa esteja concluída, o programa deixará de somar o valor dela
        if (input.checked) {
            somaTotalMinutosTarefas -= parseInt(tarefa.querySelector("#tempo-em-minutos").innerHTML);
        }

        // Inicia o horário atual
        let dataDia = new Date();
        let dataHora = dataDia.getHours();
        let dataMinuto = dataDia.getMinutes();
        let dataSegundo = dataDia.getSeconds();

        // Soma, a cada tarefa, o valor de seu tempo estimado para essa variável acumuladora
        dataMinuto += somaTotalMinutosTarefas;
        let resultado = ajustarMinutosHoras(dataHora, dataMinuto, dataSegundo);
        
        // Mostra o horário esperado para finaliza cada atividade:
        let stringHorarioFormatado = (`(${adicionarZero(resultado.horas)}:${adicionarZero(resultado.minutos)})`)
        tarefa.querySelector("#hora-aproximada-conclusao-tarefa").innerHTML = stringHorarioFormatado;
    });
}
