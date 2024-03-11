rua = document.querySelector("#rua");
bairro = document.querySelector("#bairro");
cidade = document.querySelector("#cidade");

function buscarCep(event, form) {
event.preventDefault();

const inputCep = document.querySelector("#cep");
if (inputCep.value) {
const cep = inputCep.value;

if (cep.length === 8) {
const url = `https://viacep.com.br/ws/${cep}/json/`;
fetch(url)
.then(resposta => resposta.json())
.then(data => mostrarResposta(data))
.catch(erro => console.error(erro));
}

}

}

function mostrarResposta(cep) {
const mensagem = `
CEP: ${cep.cep}
RUA: ${cep.logradouro}
BAIRRO: ${cep.bairro}
CIDADE: ${cep.localidade}`;

// alert(mensagem);

rua.value = cep.logradouro;
bairro.value = cep.bairro;
cidade.value = cep.localidade;

}