/**
 * for_7.js
 * @author Alan Alencar
 * @description mostrar a potencia de 3, todos os números pares entre
 *              0 e 20.
 *              função JS: Math.pow(base, expoente);
 */

for (let i = 0; i <= 20; i = i + 2) {
    console.log(`O cubo de ${i} é ${Math.pow(i, 3)}`);
}

console.log('Terminei ...');