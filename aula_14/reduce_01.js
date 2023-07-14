/**
 * reduce_01.js
 * @description Reduzir um array para qualquer coisa.
 */

const numeros = [ 2, 4, 7, 2, 9, 9, 2, 8, 8, 1 ]; // soma dá 52.
const total = numeros.reduce((accumulator, numero) => {
    return accumulator + numero;
}, 0);

console.log(`A soma dos números é ${total}`);