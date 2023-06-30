/**
 * array_05.js
 * @description criar um array e percorrer com for.
 */

const cars = ['honda', 'toyota', 'peugeot', 'volks', 'ford', 'chevrolet'];
// usando for.
for (let indice = 0; indice < cars.length; indice++) {
    console.log(`${indice} - ${cars[indice]}`);
}