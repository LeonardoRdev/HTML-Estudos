// Início da Função novaRodada
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

  const divCelular = document.querySelector("#celular");
  const rodadaAtual = document.querySelector("#rodada-atual");
  let contagemDeRodada = 0;
  rodadaAtual.innerHTML = `Rodada Atual: ${contagemDeRodada}`;
  divCelular.style.gridTemplateRows = `repeat(${8}, 1fr)`;
  let numeroMaximoRodadas = 0;
  iniciaSelecionarOpcaoCelular();

  quantidadeBalas.forEach((qtd => {
    qtd.onclick = (() => {

      //      o !qtdBalas é para você não ficar resetando a função se clicar de novo na div.
      if (qtd.classList.contains("verdadeiro") && !qtdBalasVerdadeiras) {
        divQtdMunicaoVerdadeiro.replaceChildren(qtd);
        // console.log(qtd)
        qtdBalasVerdadeiras = parseInt(qtd.innerHTML);
      }

      else if (qtd.classList.contains("falso") && !qtdBalasFalsas) {
        divQtdMunicaoFalso.replaceChildren(qtd);
        // console.log(qtd)
        qtdBalasFalsas = parseInt(qtd.innerHTML);
      }

      //  Calcular quantidade TOTAL de balas e %TOTAL da bala ser verdadeira.
      if (qtdBalasVerdadeiras && qtdBalasFalsas) {
        calcularBalas();
      }

    });
  }));
  //   Fim QuantidadeBalas.forEach



  // =================================
  //        REINICIAR RODADA
  // =================================

  botaoReiniciarRodada.onclick = (() => {
    reiniciarRodada();
  });

  function reiniciarRodada() {
    divCelular.innerHTML = `
<!--   1ª Rodada   -->
    <div id="rodada-celular1" class="rodadas-celular">
      <p class="numero-rodada-celular">1ª</p>
      <div class="celular-diz-verdadeiro celular-diz"></div>
      <div class="celular-diz-falso celular-diz"></div>
    </div>

    <!--   2ª Rodada   -->
    <div id="rodada-celular2" class="rodadas-celular">
      <p class="numero-rodada-celular">2ª</p>
      <div class="celular-diz-verdadeiro celular-diz"></div>
      <div class="celular-diz-falso celular-diz"></div>
    </div>

    <!--   3ª Rodada   -->
    <div id="rodada-celular3" class="rodadas-celular">
      <p class="numero-rodada-celular">3ª</p>
      <div class="celular-diz-verdadeiro celular-diz"></div>
      <div class="celular-diz-falso celular-diz"></div>
    </div>

    <!--   4ª Rodada   -->
    <div id="rodada-celular4" class="rodadas-celular">
      <p class="numero-rodada-celular">4ª</p>
      <div class="celular-diz-verdadeiro celular-diz"></div>
      <div class="celular-diz-falso celular-diz"></div>
    </div>

    <!--   5ª Rodada   -->
    <div id="rodada-celular5" class="rodadas-celular">
      <p class="numero-rodada-celular">5ª</p>
      <div class="celular-diz-verdadeiro celular-diz"></div>
      <div class="celular-diz-falso celular-diz"></div>
    </div>

    <!--   6ª Rodada   -->
    <div id="rodada-celular6" class="rodadas-celular">
      <p class="numero-rodada-celular">6ª</p>
      <div class="celular-diz-verdadeiro celular-diz"></div>
      <div class="celular-diz-falso celular-diz"></div>
    </div>

    <!--   7ª Rodada   -->
    <div id="rodada-celular7" class="rodadas-celular">
      <p class="numero-rodada-celular">7ª</p>
      <div class="celular-diz-verdadeiro celular-diz"></div>
      <div class="celular-diz-falso celular-diz"></div>
    </div>

    <!--   8ª Rodada   -->
    <div id="rodada-celular8" class="rodadas-celular">
      <p class="numero-rodada-celular">8ª</p>
      <div class="celular-diz-verdadeiro celular-diz"></div>
      <div class="celular-diz-falso celular-diz"></div>
    </div>`;
    rodadaAtualCelular = 0;

    //  Temporario:
    qtdBalasRestantes.innerHTML = "0";
    chanceVerdadeiro.innerHTML = "0%";


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
  }
  // Fim da função Reiniciar Rodada


  botaoBalaDisparadaVerdadeira.onclick = (() => {
    if (qtdBalasVerdadeiras !== false && qtdBalasFalsas !== false && qtdBalasVerdadeiras > 0) {
      qtdBalasVerdadeiras--;
      divQtdMunicaoVerdadeiro.querySelector(".selecionar-qtd").innerHTML = qtdBalasVerdadeiras;
      calcularBalas();

      // Guarda automaticamente o resultado da rodada no "celular à esquerda"
      registroAutomaticoCelular(1);
    }

  });

  botaoBalaDisparadaFalsa.onclick = (() => {
    if (qtdBalasFalsas !== false && qtdBalasVerdadeiras !== false && qtdBalasFalsas > 0) {
      qtdBalasFalsas--;
      divQtdMunicaoFalso.querySelector(".selecionar-qtd").innerHTML = qtdBalasFalsas;
      calcularBalas();

      // Guarda automaticamente o resultado da rodada no "celular à esquerda"
      registroAutomaticoCelular(0);
    }
  });


  // =================================
  //        CALCULAR BALAS
  // =================================
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
    }

    if (numeroMaximoRodadas === 0) {
      numeroMaximoRodadas = qtdBalasVerdadeiras + qtdBalasFalsas;

      const rodadasCelular = document.querySelectorAll(".rodadas-celular");
      rodadasCelular.forEach((rodadaCelular) => {
        let idRodadaCelular = rodadaCelular.id.slice(-1);
        if (idRodadaCelular > numeroMaximoRodadas) {
          rodadaCelular.remove();
        }
      });
      divCelular.style.gridTemplateRows = `repeat(${numeroMaximoRodadas}, 1fr)`;
    }

    else {
      contagemDeRodada++;
      rodadaAtual.innerHTML = `Rodada Atual: ${contagemDeRodada}`;

      if (contagemDeRodada >= numeroMaximoRodadas) {
        // reiniciarRodada(); Se arrumar isso aqui da pra fazer a rodada reiniciar automaticamente ao disparar todos os tiros da doze
        //         ===================================
        //                        ATENÇÃO
        //         ===================================
      }
    }
  }

}
// Fim da Função novaRodada

novaRodada();

// =================================
//        FUNÇÕES DO CELULAR
// =================================

// Início da Função definirRodadaCelular 
function iniciaSelecionarOpcaoCelular() {

  let selecionarCelularDiz = document.querySelectorAll(".celular-diz");
  selecionarCelularDiz.forEach((opcao) => {
    opcao.onclick = () => {
      opcao.classList.add("rodada-celular-definida");

      // Caso escolha "Disparo Verdadeiro"
      if (opcao.classList.contains("celular-diz-verdadeiro")) {
        const divPaiDaEscolha = opcao.closest(".rodadas-celular");

        divPaiDaEscolha.style = "opacity: 100%";
        divPaiDaEscolha.querySelector(".celular-diz-falso").classList.add("esconder");
      }

      // Caso escolha "Disparo Falso"
      else {
        const divPaiDaEscolha = opcao.closest(".rodadas-celular");

        divPaiDaEscolha.style = "opacity: 100%";
        divPaiDaEscolha.querySelector(".celular-diz-verdadeiro").classList.add("esconder");
      }

    }
  });
}
// Fim da Função definirRodadaCelular


// Início da Função registroAutomaticoCelular
let rodadaAtualCelular = 0;

function registroAutomaticoCelular(resultadoRodadaPassada) {
  rodadaAtualCelular++;
  const rodadaAtualCelularHTML = document.querySelector(`#rodada-celular${rodadaAtualCelular}`);
  const opcaoEscolhida = rodadaAtualCelularHTML.querySelectorAll(".celular-diz");

  // Caso o resultado da rodada passado seja FALSO
  if (resultadoRodadaPassada === 0) {
    rodadaAtualCelularHTML.style = "opacity: 100%";
    rodadaAtualCelularHTML.querySelector(".celular-diz-verdadeiro").classList.add("esconder");

    rodadaAtualCelularHTML.querySelector(".celular-diz-falso").classList.add("rodada-celular-definida");
  }

  // Caso o resultado da rodada passado seja VERDADEIRO
  else {
    rodadaAtualCelularHTML.style = "opacity: 100%";
    rodadaAtualCelularHTML.querySelector(".celular-diz-falso").classList.add("esconder");

    rodadaAtualCelularHTML.querySelector(".celular-diz-verdadeiro").classList.add("rodada-celular-definida");
  }

}
// Fim da Função registroAutomaticoCelular