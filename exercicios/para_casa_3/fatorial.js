/**
 * fatorial.js
 * @author Alan Alencar
 * @description Calcular o fatorial de um número inteiro qualquer.
 * @remarks ex: 5! é 5 * 4 * 3 * 2 * 1 = 120   
 */

const NUMERO = 10;
let fatorial = 1; // tem que iniciar com 1 senão apresentará erros.

for (let i = NUMERO ; i >= 1; i--) { // loop decrescente conforme pedido no enunciado.
    fatorial *= i; // equivale a fatorial = fatorial * i;
}

console.log(`${NUMERO}! é ${fatorial}`);

// FIM: Alan Alencar