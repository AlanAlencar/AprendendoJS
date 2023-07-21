/**
 * 1_base2_v2.js
 * @author Alan Alencar
 * @description iterar com um array de numeros e exibir o valor elevado
 *              a base 2. 
 *              Qualquer forma de iterar. "for of"
 */

const numeros = [ 0, 8, 3, 61, 34, 28, 17, 6, 2, 5, 11, 38, 41, 51, 16, 61, 8 ]; // 17 elementos.
const POTENCIA = 2;
for (const numero of numeros) {
    console.log(`${numero} elevado a base 2 é ${Math.pow(numero, POTENCIA)}`);
}