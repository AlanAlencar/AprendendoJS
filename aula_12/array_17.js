/**
 * array_17.js
 * @description sortear um array, ordenar crescente de números, corrigido
 */

const numeros = [10, 4, 8, 2, 99, 62, 3, 2];
console.table(numeros);
numeros.sort((x, y) => x - y);
console.table(numeros);
