/**
 * array_18.js
 * @description sortear um array, ordenar decrescente de números, corrigido
 */

const numeros = [10, 4, 8, 2, 99, 62, 3, 2];
console.table(numeros);
numeros.sort((x, y) => y - x);
console.table(numeros);
