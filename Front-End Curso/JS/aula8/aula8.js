function VerificarNacionalidade(){

let txtnacionalidade = window.document.querySelector('input#txtnacionalidade');

let resultado = window.document.querySelector('div#resultado');

// Permite que tenha acesso aos dados
let nacionalidade = txtnacionalidade.value; 

if(nacionalidade == "Brasil"){

    resultado.innerHTML = `<p>Você é <strong>Brasileiro</strong>!</p>`;

}

if(nacionalidade == "Estados Unidos"){

    resultado.innerHTML = `<p>Você é <strong>Americano</strong>!</p>`;

}

if(nacionalidade == "Espanha"){

    resultado.innerHTML = `<p>Você é <strong>Espanhol</strong>!</p>`;

}

}