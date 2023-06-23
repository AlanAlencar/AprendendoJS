/**
 * function_03.js
 * @author Alan Alencar
 * @description lambda function, arrow function com um parametro, body ou concise
 */

// block body
const dobro = (valor) => {
    return valor * 2;
}

// concise body
const triplo = (valor) => valor * 3;

/*
// block body version
const aleatorio = (valor) => {
    if (valor % 2 === 0) {
        // return valor * 3;
        return triplo(valor);
    } else {
        // return valor * 2;
        return dobro(valor);
    }
}
*/

// concise body version
const aleatorio = (valor) => valor % 2 === 0 ? triplo(valor) : dobro(valor);

console.log(`O dobro de 2 é ${dobro(2)}`);
console.log(`O triplo de 2 é ${triplo(2)}`);
console.log(`Aleatorio de 10 é ${aleatorio(10)}`);
console.log(`Aleatorio de 11 é ${aleatorio(11)}`);
