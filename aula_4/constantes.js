/**
 * constantes.js
 * ---------------
 * @author Alan Alencar
 * @description Como criar variáveis com JS
 * @run node ./constantes.js
 */

// Constantes em JS são variáveis com valores imutáveis.

const pais = 'Brazil';
const nomePlaneta = 'Terra';
const gravidade = 9.80665; // m/s^2 (metros por segundo ao quadrado);
const velocidadeSom = 1238; // km/h

console.log('\nEstamos no planeta', nomePlaneta);
console.log('Meu pais é o', pais);
console.log('A gravidade por aqui é em média', gravidade, 'm/sˆ2');
console.log('E a velocidade da som é', velocidadeSom, 'km/h\n');
console.log('Espera, escrevi o nome do meu pais com Z e é com S');
pais = 'Brasil'; // irá lançar uma exceção, que aprenderemos tratar depois.
console.log('Agora com o nome correto', pais);

// Fim: Alan Alencar