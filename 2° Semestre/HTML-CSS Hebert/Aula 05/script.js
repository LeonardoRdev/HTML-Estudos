const uf = document.querySelector("#uf")
const ufs = ["São Paulo", "Mato Grosso do Sul", "Rio de Janeiro", "Santa Catarina", "Rio Grande do Sul", "Paraná", "Espirito Santo", "Tocantins", "Bahia", "Amazonas"]
const sigla = ["SP", "MS", "RJ", "SC", "RS", "PR", "ES", "TO", "BA", "AM"]
ufs.sort();
sigla.sort();
for (let i = 0; i < ufs.length; i++) {
    uf.innerHTML += "<option value='" + sigla[i] + "'>" + ufs[i] + "</option>"
}


const semestre = document.querySelector("#semestre");
for (let i = 1; i < 6; i++) {
    semestre.innerHTML += "<option value='" + i + "_semestre'>" + i + "° Semestre" + "</option>";
    console.log(i)
}
