/**
 * for_10.js
 * @author Alan Alencar
 * @description Impedir a exibição da mensagem para valores de i
 *              > (maior) 6 contando de 1 à 10.
 */

const MAXIMO = 100;

console.log('\nContando com desnecessários\n');

for (let i = 1; i <= MAXIMO; i++) {
    if (i < 7) { // maneira jr de fazer as coisas. Mas funciona.
        console.log(`Número ${i}`);
    }
    console.log('Execução desnecessária');
} // dispara a próxima iteração.

console.log('\nContando novamente sem desnecessários\n');

for (let i = 1; i <= MAXIMO; i++) {
    if (i > 6) { // maneira senior de fazer.
        continue; // dispara a próxima iteração quando for maior que 6.
    }
    console.log(`Número ${i}`);
    console.log('Execução desnecessária');
} // dispara a próxima iteração, quando for menor que 6

console.log('Terminei ...');