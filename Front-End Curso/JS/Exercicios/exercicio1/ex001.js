function Carregar(){

    let msg = window.document.querySelector("div#msg");
    
    let imagem = window.document.getElementById('imagem');

    let dataDeHoje = new Date();

    // let horaAtual = dataDeHoje.getHours();

    let horaAtual = 22;

    msg.innerHTML = `Agora são ${horaAtual} horas`; 

    if(horaAtual >= 0 && horaAtual < 12){

        // Bom dia!
        imagem.src = 'imagens/manha-imagem.jpg';
        document.body.style.background = "#e2cd9f";

    }

    else if(horaAtual >= 12 && horaAtual < 18){

        // Boa tarde
        imagem.src = 'imagens/tarde-imagem.jpg';
        document.body.style.background = "#a5550aff";

    }

    else{

        // Boa noite
        imagem.src = 'imagens/noite-imagem.jpg';
        document.body.style.background = "#020974ff";

    }

}

