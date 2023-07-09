/**
 * filter_01.js
 * @description iterando cada elemento do array com filter e criando um novo array só 
 *              de impares.
 */

const numeros = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ];
const impares = numeros.filter(value => {
    if (value % 2 > 0) {
        return true;
    }
});

console.log('Array numeros', numeros);
console.log('Array impares', impares);
