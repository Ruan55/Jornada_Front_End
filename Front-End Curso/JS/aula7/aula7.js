// Eventos DOM
let area = window.document.getElementById("area");

area.addEventListener("click", clicar);
area.addEventListener("mouseenter", entrar);
area.addEventListener("mouseout", saiu);

function clicar(){
    
    area.innerText = "Clicou!";

    area.style.background = "red";

}

function entrar(){
    
    area.innerText = "Entrou!";

    area.style.background = "blue";

    area.style.color = "white";

}

function saiu(){
    
    area.innerText = "Saiu!";

    area.style.background = "yellow";

    area.style.color = "black";

}

function somar(){

    let txtnumber1 = window.document.getElementById("txtnumber1");
    let txtnumber2 = window.document.querySelector("input#txtnumber2");

    let res = window.document.getElementById("res");

    let number1 = Number(txtnumber1.value);
    let number2 = Number(txtnumber2.value);

    let resultado = number1 + number2;

    res.innerHTML = `Resultado: ${number1} + ${number2} = <strong>${resultado}</strong>`;

}