/**
 * function_4.js
 * @author Alan Alencar
 * @description aprendendo a usar funções com JS, junto com loop e passando parametro, 
 *              contando regressivo.
 */

function digaOla(valor) {
    console.log('Olá, o valor de i é', valor);
}

// loops
for (let i = 10; i >= 1; i--) {
    digaOla(i);
}

console.log('Fim do processamento.');