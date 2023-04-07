/**
 * do_1.js
 * @author Alan Alencar
 * @description aprendendo a usar a instrução do { ... } while com JS.
 * @remarks uma alternativa do while { ... }
 */

let i = 1;

do { // sempre vai executar uma primeira vez. A condição é no final.
	console.log('Olá do do');
    i++;
} while (i <= 2); // do {...} while (condição);

console.log('Fim do loop do');