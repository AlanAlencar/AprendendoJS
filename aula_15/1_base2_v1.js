/**
 * 1_base2_v1.js
 * @author Alan Alencar
 * @description iterar com um array de numeros e exibir o valor elevado
 *              a base 2. 
 *              Qualquer forma de iterar. "for"
 */

const numeros = [ 0, 8, 3, 61, 34, 28, 17, 6, 2, 5, 11, 38, 41, 51, 16, 61, 8 ]; // 17 elementos.
// for, while, do while - apresentar o valor da número na console.
for (let i = 0; i < numeros.length; i++) {
    console.log(`${numeros[i]} elevado a base 2 é ${numeros[i] * numeros[i]}`);
}