/**
 * forEach_03.js
 * @description iterando cada elemento do array com forEach.
 *              É exatamente o programa forEach_02.js só que com uma function
 *              declarativa.
 */

function eImpar(value, index) {
    if (value % 2 > 0) { // é impar?
        console.log(`${value} é ímpar e está no índice ${index}.`);
    }
}

const numeros = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ];
// forEach( (valor do array, indice da iteração, próprio array (todo) ))
numeros.forEach(eImpar);