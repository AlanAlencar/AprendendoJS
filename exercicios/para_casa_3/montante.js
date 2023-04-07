/**
 * montante.js
 * @author Alan Alencar
 * @description Exibe o montante dos 1.000 (mil) primeiros números com duas casas deciamais.
 */

let montante = 0; // cria e inicializa com zero.

for (let i = 1; i <= 1000; i++) {
    montante += i; // valor atual de montante + valor de i.
}

console.log(`O montante da soma dos 1.000 primeiros números é r$ ${montante.toFixed(2)}`);

// FIM: Alan Alencar