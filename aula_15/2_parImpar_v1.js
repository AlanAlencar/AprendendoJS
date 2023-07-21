/**
 * 2_parImpar_v1.js
 * @author Alan Alencar
 * @description gerar um novo array a partir de uma base, do mesmo tamanho só que com 
 *              as posições de números impares com a string Impar e as pares com Par.
 */

const numeros = [ 0, 8, 3, 61, 34, 28, 17, 6, 2, 5, 11, 38, 41, 51, 16, 61, 8 ];
let arrayParImpar = [];
for (const numero of numeros) { // estrutura de repetição.
    if (numero % 2 > 0) { // É um número ímpar.
        arrayParImpar.push('Ímpar');
    } else {
        arrayParImpar.push('Par');
    }
}
console.table(numeros);
console.table(arrayParImpar);