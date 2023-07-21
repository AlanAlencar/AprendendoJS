/**
 * 3_somaPositivo_v3.js
 * @author Alan Alencar
 * @description percorre um array e soma os números positivos e exibe na console.
 */
// command chaining
const soma = [ 10, -101, 276, -34, -18, 87, 71, 61, 18, -19, -1, 0 ]
    .filter(numero => numero >= 0)
    .reduce((acumulador, valor) => acumulador + valor, 0);

console.log(`A soma dos números positivos do array é ${soma}`);