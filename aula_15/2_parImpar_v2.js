/**
 * 2_parImpar_v2.js
 * @author Alan Alencar
 * @description gerar um novo array a partir de uma base, do mesmo tamanho só que com 
 *              as posições de números impares com a string Impar e as pares com Par.
 */

const numeros = [ 0, 8, 3, 61, 34, 28, 17, 6, 2, 5, 11, 38, 41, 51, 16, 61, 8 ];
const arrayParImpar = numeros.map(numero => numero % 2 > 0 ? 'Ímpar' : 'Par');

console.table(numeros);
console.table(arrayParImpar);