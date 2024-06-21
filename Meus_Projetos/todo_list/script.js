// Form | Adicionar Tarefas
const inputTarefa = document.querySelector("#input-tarefa");
const inputTempoTarefa = document.querySelector("#input-tempo-tarefa");
const botaoEnviar = document.querySelector("#botao-enviar");


// Form | Tarefas adicionadas
const divTarefas = document.querySelector("div#tarefas")
let idTarefa = 1;

botaoEnviar.addEventListener("click", () => {
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
