/**
 * desafio_01.js
 * @description Quantas ocorrëncias do número 8 tem no array?
 */

const numeros = [ 1, 4, 7, 2, 8 , 9, 2, 8, 8, 1 ];
let oitos = 0;

numeros.forEach(numero => {
    if (numero === 8) {
        oitos++;
    }
});

console.log(numeros);
console.log(`Achei ${oitos} número 8 no array`);