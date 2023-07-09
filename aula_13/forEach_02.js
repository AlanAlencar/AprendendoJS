/**
 * forEach_02.js
 * @description iterando cada elemento do array com forEach
 */

const numeros = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ];
numeros.forEach(value => {
    if (value % 2 > 0) { // é impar?
        console.log(`${value} é ímpar.`);
    }
});
