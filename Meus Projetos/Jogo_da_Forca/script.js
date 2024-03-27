const form = document.querySelector("form");
form.addEventListener('submit', e => {
    e.preventDefault();
});

const enviar = document.querySelector("#enviar");
enviar.addEventListener("click", () => {
    alert("enviado");
})
