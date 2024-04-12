// BARRA COM MENU
const menuIcon = document.querySelector("#menuIcon");

menuIcon.onclick = function () {
    let menu = document.querySelector("nav");
    if (menu.style.transform == "translateY(85px)") {
        menuIcon.style.transform = "rotateZ(0deg)";
        menu.style.transform = "translateY(-180px)";
    }
    else {
        menuIcon.style.transform = "rotateZ(90deg)";
        menu.style.transform = "translateY(85px)";
    }
}



// QUIZ VOCACIONAL
const finalizarQuiz = document.querySelector("#enviar"); // Botão de finalizar Quiz

finalizarQuiz.onclick = function () {
    let aSuaVocacao = document.querySelector("#sua_vocacao")
    let resultadoCaixa = document.querySelector("#resultado");
    let resultado = document.querySelector("#resultado p");
    let descricaoResultado = document.querySelector("#rating p");
    
    // Pontos marcados para cada vocação
    let programador = 0;
    let designer = 0;
    let redes = 0;
    let seguranca = 0;
    let vocacao = "Vocação"; // Mensagem mostrando a Vocação
    let descricaoVocacao = "Descrição da Vocação" // Mensagem mostrando a descrição da Vocação

    let pergunta1 = document.quiz.q1;
    let pergunta2 = document.quiz.q2;
    let pergunta3 = document.quiz.q3;
    let pergunta4 = document.quiz.q4;
    let pergunta5 = document.quiz.q5;
    const perguntas = [pergunta1, pergunta2, pergunta3, pergunta4, pergunta5];

    for (let i = 0; i < 5; i++) { // Roda as 5 perguntas do quiz e pontua dependendo da alternativa escolhida
        if (perguntas[i][0].checked) {
            designer += 1;
        }
        else if (perguntas[i][1].checked) {
            programador += 1;
        }
        else if (perguntas[i][2].checked) {
            seguranca += 1;
        }
        else if (perguntas[i][3].checked) {
            redes += 1;
        }
    }
    if (designer > programador && designer > seguranca && designer > redes) {
        vocacao = "Designer!";
        descricaoVocacao = "Você tem uma vocação para a área de design na TI. Isso significa que você é criativo, tem um olho apurado para detalhes estéticos e gosta de criar interfaces gráficas atraentes e soluções visuais. Sua paixão está em combinar funcionalidade com estética para proporcionar experiências agradáveis aos usuários."
    }
    else if (programador > designer && programador > seguranca && programador > redes) {
        vocacao = "Programador!";
        descricaoVocacao = "Sua vocação aponta para a programação na área de TI. Você é um solucionador de problemas lógico e criativo, com habilidades em escrever código e desenvolver aplicativos. Sua capacidade de transformar conceitos em software funcional é uma habilidade valiosa na indústria de tecnologia."
    }
    else if (seguranca > designer && seguranca > programador && seguranca > redes) {
        vocacao = "Segurança da Informação!";
        descricaoVocacao = "Seu perfil indica uma vocação para a área de segurança da informação. Você é altamente consciente de questões de privacidade e segurança online. Sua capacidade de identificar e lidar com ameaças cibernéticas é essencial para proteger dados e sistemas críticos."
    }
    else if (redes > designer && redes > programador && redes > seguranca) {
        vocacao = "Redes!";
        descricaoVocacao = "Sua vocação está na área de redes de computadores. Isso significa que você é habilidoso em configurar, otimizar e solucionar problemas de conectividade de redes. Você gosta de entender como os dispositivos se comunicam e garantir que a infraestrutura de rede funcione de maneira eficaz e eficiente."
    }
    else if (designer == 0 && programador == 0 && seguranca == 0 && redes == 0){
        vocacao = "Apressado!!";
        descricaoVocacao = "Responda ao quiz para descobrir a sua vocação!"
    }
    else {
        vocacao = "Versátil"
        descricaoVocacao = "Suas respostas sugerem um perfil versátil em TI, abrangendo várias áreas de interesse. O quiz não forneceu uma indicação clara de uma única vocação, o que pode ser considerado uma vantagem, pois você tem a capacidade de se destacar em diferentes domínios da tecnologia!"
    }

    // Exibe quantos pontos cada vocação marcou -> Designer, Programador, Segurança e Redes respectivamente.
    // alert("Aqui estão todos:" + designer + programador + seguranca + redes);

    // Muda o display de "none" para "block", fazendo com que o resultado do quiz apareça!
    aSuaVocacao.style.display = "block";
    resultadoCaixa.style.display = "block";
    resultado.innerHTML = vocacao; // Diz a sua vocação segundo suas respostas
    descricaoResultado.innerHTML = descricaoVocacao; // Descreve a sua vocação
}
