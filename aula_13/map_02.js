/**
 * map_02.js
 * @description iterando cada elemento do array com map.
 *              criar um novo array a partir do array números 
 *              contendo apenas os números ímpares.
 *              V2 - usando map.
 *              MAP sempre retorna um novo array do MESMO tamanho do array iterado.
 */

const numeros = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ];
const impares = numeros.map(value => {
    if (value % 2 > 0) {
        return value;
    }
});

console.log('Array numeros', numeros);
console.log('Array impares', impares);
