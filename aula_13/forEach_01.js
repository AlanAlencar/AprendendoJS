/**
 * forEach_01.js
 * @description iterando cada elemento do array com forEach
 */

const carros = [ 'Fox', '207', 'X5', 'Kicks', 'Corolla', 'Golf', 'Vectra' ];

console.log('\nCom for\n')
// Usando for como estrutura de repetição.
for (let i = 0; i < carros.length; i++) {
    console.log(carros[i]); 
}
console.log('\nCom forEach\n')
// forEach
carros.forEach((value, index, arr) => {
    console.log(value);
});
