/**
 * desafio_01v2.js
 * @description Quantas ocorrëncias do número 8 tem no array?
 */

const numeros = [ 1, 4, 7, 2, 8 , 9, 2, 8, 8, 1 ];
const oitos = numeros.filter(numero => numero === 8);
console.log(numeros);
console.log(`Achei ${oitos.length} número 8 no array`);