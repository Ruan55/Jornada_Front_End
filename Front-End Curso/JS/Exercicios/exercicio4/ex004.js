function Tabuada(){

    let num = document.getElementById('txtnumber');
    let tab = document.getElementById('seltab');

    if(num.value.length == 0){

        window.alert("Por favor digite um número!");

    }

    else{

        let numero = Number(num.value);
        let c = 1;

        tab.innerHTML = "";

        while(c <= 10){

            let item = document.createElement('option');

            item.text = `${numero} x ${c} = ${numero * c}`;

            item.value = `tab${c}`;

            tab.appendChild(item);

            c++;

        }

    }

}