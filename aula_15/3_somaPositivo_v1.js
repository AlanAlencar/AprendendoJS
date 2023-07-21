/**
 * 3_somaPositivo_v1.js
 * @author Alan Alencar
 * @description percorre um array e soma os números positivos e exibe na console.
 */

const numeros = [ 10, -101, 276, -34, -18, 87, 71, 61, 18, -19, -1, 0 ]; // 523
let i = 0, soma = 0;
while(i < numeros.length) {
    if (numeros[i] > 0) {
        soma += numeros[i];
    }
    i++;
}

console.log(`A soma dos números positivos do array é ${soma}`);