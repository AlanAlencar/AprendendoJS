/**
 * exibeValores.js
 * @author Alan Alencar
 * @description Exibir na console todos os valores de um array
 * @version 1.0.0 primeira versão do programa.
 */

let fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 43, 65, 108]; // sequencia fibo.
console.log('Exibe os 12 primeiros números do Fibonacci');
console.log(fibonacci[0]); // forma equivocada de fazer.
console.log(fibonacci[1]);
console.log(fibonacci[2]);
console.log(fibonacci[3]);
console.log(fibonacci[4]);
console.log(fibonacci[5]);
console.log(fibonacci[6]);
console.log(fibonacci[7]);
console.log(fibonacci[8]);
console.log(fibonacci[9]);
console.log(fibonacci[10]);
console.log(fibonacci[11]);

console.log('\nExibe os 12 primeiros números do Fibonacci com FOR.');
for (let index = 0; index < 12; index++) { // forma inteligente de fazer.
    console.log(fibonacci[index]); 
}