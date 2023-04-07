/**
 * montanteV3.js
 * @author Alan Alencar
 * @description Exibe o montante dos 1.000 (mil) primeiros números sendo que para os 
 *              números ímpares somar 10 a cada um deles. Os números pares não sofrem
 *              com este acréscimo.
 */

let montante = 0; // cria e inicializa com zero.

for (let i = 1; i <= 1000; i++) {
    montante += i; // valor atual de montante + valor de i.
    if (i % 2 != 0) { // se for ímpar, adicione 10 ao montante.
        montante += 10;
    }
}

console.log(`O montante da soma dos 1.000 primeiros números é r$ ${montante.toFixed(2)}`);

// FIM: Alan Alencar