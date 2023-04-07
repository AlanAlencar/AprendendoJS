/**
 * montanteV2.js
 * @author Alan Alencar
 * @description Exibe o montante dos 1.000 (mil) primeiros números pares com 
 *              duas casas deciamais.
 */

let montante = 0; // cria e inicializa com zero.

for (let i = 0; i <= 1000; i = i + 2) { // iniciar de zero e controlar o incremento de 2 em 2.
    montante += i; // valor atual de montante + valor de i.
}

console.log(`O montante da soma dos 1.000 primeiros números pares é r$ ${montante.toFixed(2)}`);

// FIM: Alan Alencar
