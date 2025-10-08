function MudarCor(){

    // Acessa o elemento body para mudar a cor de fundo
    const corpo = document.body;

    // Acessa todos os elementos h1 
    const titulo = document.querySelectorAll('h1');

    // Acessa todos os elementos p
    const paragrafo = document.querySelectorAll('p');

    // Mudar a cor de fundo do body para preto
    corpo.style.backgroundColor = "black";

    // Mudar a cor do texto de todos os parágrafos para branco

    // Precisa de um loop pois querySelectorAll retorna uma lista (NodeList)
    titulo.forEach(h1 => {

        h1.style.color = "white";

    })

    paragrafo.forEach(p =>{

        p.style.color = "white";

    })

}