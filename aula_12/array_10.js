/**
 * array_10.js
 * @description criar um array e incluir novos valores com push
 */

const exibe = (car) => {
    console.log(car);
}

const cars = ['honda', 'toyota', 'peugeot'];
cars.forEach(exibe);
cars.push('bmw', 'hyundai');
console.log('\nNova lista:\n');
cars.forEach(exibe);