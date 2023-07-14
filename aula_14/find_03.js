/**
 * find_03.js
 * @description uso de find. Sempre para na PRIMEIRA ocorrëncia.
 */

const numeros = [ 1, 4, 7, 2, 8 , 9, 2, 8, 8, 1 ];
console.log('Array completo', numeros);
const achei = numeros.find(numero => numero === 8);
console.log(achei);
