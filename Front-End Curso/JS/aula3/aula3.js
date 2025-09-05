// let nome = window.prompt('Qual é o seu nome?')

// window.alert('É um grande prazer te conhecer! ' + nome)

/* 

Tipos de conversão:

Number(n) para converter para números

String(n) para converter para strings

*/

let primeiroNumero = Number(window.prompt('Digite o primeiro número'))
let segundoNumero = Number(window.prompt('Digite o segundo número'))

let resultado = primeiroNumero + segundoNumero

// O sinal + pode servir tanto para adição(number) quanto para concatenação(string)

window.alert('A soma entre ' + primeiroNumero + ' + ' + segundoNumero + ' resulta em ' + resultado)