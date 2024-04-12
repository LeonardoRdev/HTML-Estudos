function checkAnswers() {
    let score = 0;
    if (document.quiz.q1[2].checked) { // Se o documento forms de nome 'quiz' tiver o radio de nome 'q1' marcado:
        score += 1
    }
    if (document.quiz.q2[0].checked) {
        score += 1
    }
    if (document.quiz.q3[1].checked) {
        score += 1
    }
    document.querySelector("div#results").style.display = "block";
    let rating = document.querySelector("footer p#rating");
    let results = document.querySelector("div#results p");
    results.innerHTML = "Você obteve " + score + "/3 pontos!";
    if (score == 0) {
        rating.innerHTML = "Você pode melhorar...";
    } else if (score == 1) {
        rating.innerHTML = "Pelo menos acertou uma 😅";
    } else if (score == 2) {
        rating.innerHTML = "Até que você foi bem 😁";
    } else {
        rating.innerHTML = "Usando o <b>ChatGPT</b> fica fácil 🤖";
    }

}