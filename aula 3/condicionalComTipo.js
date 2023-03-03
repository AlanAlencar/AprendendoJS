/**
 * condicionalComTipo.js
 * -------------------------------
 * @author Alan Alencar
 * @description usando if para testar se pode fazer a operação matemática.
 * @run node ./condicionalComTipo.js
 */

let num1 = '5'; // string.
let num2 = 2; // number.

/*
 * Atenção porque a comparação tem que ser: 'string' e não 'String'.
 * || significa OU.
 */
if (typeof num1 == 'string' || typeof num2 == 'string') { 
	console.log('Não é possível efetuar a soma matemática. só concatenar.');
    console.log('A concatenação entre', num1, 'e', num2, 'resulta em:', num1 + num2);
} else {
	console.log('A soma de', num1, 'e', num2, 'resulta em:', num1 + num2); 
}

num1 = 5; // agora é number
num2 = 2; // number.

/*
 * Repetindo.
 */
if (typeof num1 == 'string' || typeof num2 == 'string') { 
	console.log('Não é possível efetuar a soma matemática. só concatenar.');
    console.log('A concatenação entre', num1, 'e', num2, 'resulta em:', num1 + num2);
} else {
	console.log('A soma de', num1, 'e', num2, 'resulta em:', num1 + num2); 
}
