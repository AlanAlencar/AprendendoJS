/**
 * 3_somaPositivo_v2.js
 * @author Alan Alencar
 * @description percorre um array e soma os números positivos e exibe na console.
 */

const numeros = [ 10, -101, 276, -34, -18, 87, 71, 61, 18, -19, -1, 0 ]; // 523
const positivos = numeros.filter(numero => numero >= 0);
const soma = positivos.reduce((acumulador, valor) => acumulador + valor, 0);

console.log(`A soma dos números positivos do array é ${soma}`);