function arraySomaNumeros(numerosArray){

    let soma = 0; // Inicializa a variável de soma

    for(let i = 0; i < numerosArray.length; i++){

        soma += numerosArray[i]; // Adiciona cada número à soma

    }

    return soma; // Retorna a soma total

}

const meusNumeros = [1, 2, 3, 4, 5];
const total = arraySomaNumeros(meusNumeros);
console.log(total);