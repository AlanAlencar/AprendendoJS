/**
 * map_01.js
 * @description iterando cada elemento do array com map.
 *              criar um novo array a partir do array números 
 *              contendo apenas os números ímpares.
 *              V1 - usando métodos de arrays e "for"
 */

const numeros = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ];
const impares = []; // vazio.

console.log('Array numeros', numeros);
console.log('Array impares, ANTES:', impares);

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 > 0) { // É impar?
        impares.push(numeros[i]);
    }
}

console.log('Array impares, DEPOIS:', impares);
