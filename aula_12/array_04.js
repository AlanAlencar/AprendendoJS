/**
 * array_04.js
 * @description criar um array e percorrer com while.
 */

const cars = ['honda', 'toyota', 'peugeot', 'volks', 'ford', 'chevrolet'];
// usando while.
let indice = 0;
while (indice < cars.length) {
    console.log(`${indice} - ${cars[indice]}`);
    indice++;
}