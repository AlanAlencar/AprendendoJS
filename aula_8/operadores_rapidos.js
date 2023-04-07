/**
* operadores_rapidos.js
* @author Alan Alencar
* @description sintaxe alternativa para operadores matemáticos.
* @remarks não é fato que esta nova sintaxe é mais performática, apenas
*          que trás uma leitura mais limpa e dá area de um código mais
*          profissional. É apenas uma opção do programdor.
*/

// declara uma variável number e atribui o valor de 500 a ela.
let valor = 500;

console.log('Atualmente é', valor); // exibirá 500.

valor += 100; // valor = valor + 100;
console.log('Atualmente é', valor); // exibirá 600.

valor /= 100; // valor = valor / 100;
console.log('Atualmente é', valor); // exibirá 6.

valor *= 5; // valor = valor * 5;
console.log('Atualmente é', valor); // exibirá 30.

valor -= 20; // valor = valor - 20;
console.log('Atualmente é', valor); // exibirá 10.

console.log('Fim do programa.');