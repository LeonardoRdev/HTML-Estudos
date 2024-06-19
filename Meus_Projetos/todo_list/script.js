// Form | Adicionar Tarefas
const inputTarefa = document.querySelector("#input-tarefa");
const inputTempoTarefa = document.querySelector("#input-tempo-tarefa");
const botaoEnviar = document.querySelector("#botao-enviar");


// Form | Tarefas adicionadas
const formTarefas = document.querySelector("form#tarefas");
let idTarefa = 1;

botaoEnviar.addEventListener("click", () => {
    if (inputTarefa.value == "" || inputTempoTarefa.value == "") {
        return;
    }

    formTarefas.innerHTML += `
        <div class="tarefa-a-fazer">
            <div id="tarefa">
                <input type="radio" id="tarefa${idTarefa}">
                <label for="tarefa${idTarefa}">${inputTarefa.value}</label>
            </div>
        <div id="tempo-tarefa">
            <p>${inputTempoTarefa.value} minutos</p>
            <button>X</button>
            </div>
        </div>
    `;
    idTarefa++;
})