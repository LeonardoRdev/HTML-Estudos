function novaRodada() {
  const divVerdadeiroFalso = document.querySelector("#verdadeiro-falso");
  const divQtdMunicaoVerdadeiro = document.querySelector("#div-qtd-municao-verdadeiro");
  const divQtdMunicaoFalso = document.querySelector("#div-qtd-municao-falso");

  const quantidadeBalas = document.querySelectorAll(".selecionar-qtd");
  const qtdBalasRestantes = document.querySelector("#qtd-restante");
  const chanceVerdadeiro = document.querySelector("#chance-verdadeiro");

  const botaoReiniciarRodada = document.querySelector("#reiniciar-rodada");
  const botaoBalaDisparadaVerdadeira = document.querySelector("#bala-disparada-verdadeira");
  const botaoBalaDisparadaFalsa = document.querySelector("#bala-disparada-falsa");

  let qtdBalasVerdadeiras = false;
  let qtdBalasFalsas = false;

  quantidadeBalas.forEach((qtd => {
    qtd.onclick = (() => {

      //      o !qtdBalas é para você não ficar resetando a função se clicar de novo na div.
      if (qtd.classList.contains("verdadeiro") && !qtdBalasVerdadeiras) {
        divQtdMunicaoVerdadeiro.replaceChildren(qtd);
        console.log(qtd)
        qtdBalasVerdadeiras = parseInt(qtd.innerHTML);
      }

      else if (qtd.classList.contains("falso") && !qtdBalasFalsas) {
        divQtdMunicaoFalso.replaceChildren(qtd);
        console.log(qtd)
        qtdBalasFalsas = parseInt(qtd.innerHTML);
      }

      //  Calcular quantidade TOTAL de balas e %TOTAL da bala ser verdadeira.
      if (qtdBalasVerdadeiras && qtdBalasFalsas) {
        calcularBalas();
      }

    });
  }));
  //   Fim QuantidadeBalas.forEach

  botaoReiniciarRodada.onclick = (() => {

    //  Temporario:
    qtdBalasRestantes.innerHTML = "0";
    chanceVerdadeiro.innerHTML = "0%"


    divVerdadeiroFalso.innerHTML = `
      <div id="div-qtd-municao-verdadeiro" class="div-qtd-municao">
        <div class="selecionar-qtd verdadeiro">1</div>
        <div class="selecionar-qtd verdadeiro">2</div>
        <div class="selecionar-qtd verdadeiro">3</div>
        <div class="selecionar-qtd verdadeiro">4</div>
      </div>
      
      <div id="div-qtd-municao-falso" class="div-qtd-municao">
        <div class="selecionar-qtd falso">1</div>
        <div class="selecionar-qtd falso">2</div>
        <div class="selecionar-qtd falso">3</div>
        <div class="selecionar-qtd falso">4</div>
      </div>`;
    novaRodada();
  });


  botaoBalaDisparadaVerdadeira.onclick = (() => {
    if (qtdBalasVerdadeiras !== false && qtdBalasFalsas !== false && qtdBalasVerdadeiras > 0) {
      qtdBalasVerdadeiras--;
      divQtdMunicaoVerdadeiro.querySelector(".selecionar-qtd").innerHTML = qtdBalasVerdadeiras;
      calcularBalas();
    }

  });

  botaoBalaDisparadaFalsa.onclick = (() => {
    if (qtdBalasFalsas !== false && qtdBalasVerdadeiras !== false && qtdBalasFalsas > 0) {
      qtdBalasFalsas--;
      divQtdMunicaoFalso.querySelector(".selecionar-qtd").innerHTML = qtdBalasFalsas;
      calcularBalas();
    }
  });



  function calcularBalas() {
    qtdBalasRestantes.innerHTML = `${qtdBalasVerdadeiras + qtdBalasFalsas}`;
    if (qtdBalasFalsas == 0) {
      if (qtdBalasVerdadeiras > 0) {
        chanceVerdadeiro.innerHTML = `100%`;
      }
      else {
        chanceVerdadeiro.innerHTML = `0%`;
      }
    }
    else {
      chanceVerdadeiro.innerHTML = `${((qtdBalasVerdadeiras / (qtdBalasVerdadeiras + qtdBalasFalsas)) * 100).toFixed(0)}%`;
      calcularBalas();
    }
  }

}
// Fim função novaRodada



novaRodada();
