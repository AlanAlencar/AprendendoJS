/**
 * for_8.js
 * @author Alan Alencar
 * @description mostrar a potencia de 3, todos os números pares entre
 *              0 e 20, contando de 1 em 1.
 *              função JS: Math.pow(base, expoente);
 *                         % = módulo e me devolve o resto da divisão.
 *                         ex: var % 2;
 */

for (let i = 0; i <= 20; i++) {
    if (i % 2 === 0) { // é par
        console.log(`${i} elevado ao cubo é ${Math.pow(i, 3)}`);
    }
}

console.log('Terminei ...');