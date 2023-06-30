/**
 * array_03.js
 * @description cria um array com vários tipos.
 */

let car = ['peugeot', '207', 2012, 'flex', false]; 

console.log(`Tipo: ${typeof car}`); // object
console.log(`Qtd itens no array: ${car.length}`); // 5
console.log(car);
console.log(`O carro do Marlon é o ${car[1]}, da marca ${car[0]}, ano fabricação ${car[2]}`);
