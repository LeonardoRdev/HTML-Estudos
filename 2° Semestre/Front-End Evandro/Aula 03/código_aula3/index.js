function changeTextAcessibility() {
    document.getElementById("explain").innerHTML="Acessibilidade é a qualidade do que é acessível, ou seja, é aquilo que é atingível, que tem acesso fácil."
} 

function changeTextSocialMidia() { 
    let links
    links = "<a href='https://www.facebook.com/uninoveoficial' target='_blank'>Facebook</a>";
    links += "<a href='https://twitter.com/uninoveoficial' target='_blank'>Twitter</a>";
    links += "<a href='https://www.instagram.com/uninoveoficial/' target='_blank'>Instagram</a>";
    links += "<a href='https://www.youtube.com/uninove?themeRefresh=1' target='blank'>Youtube</a>";
    links += "<a href='https://www.linkedin.com/school/uninove/' target='_blank'>LinkedIn</a>";
    document.getElementById("explain").innerHTML = links;
    }
    