const arrayNumeros = [1, 2, 3, 4, 5];

// O map recebe uma função anônima (arrow function) que duplica cada número
const arrayDobrado = arrayNumeros.map(function(numero){

    return numero * 2;

})

console.log(arrayDobrado); 