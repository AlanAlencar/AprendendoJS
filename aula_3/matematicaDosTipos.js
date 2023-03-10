/**
 * matematicaDosTipos.js
 * -------------------------------
 * @author Alan Alencar
 * @description demonstra o comportamento da coerção em JS.
 * @run node ./matematicaDosTipos.js
 */

let num1 = '5'; // string.
let num2 = 2; // number.

console.log('\nA matemática dos tipos com JS');
console.log('num1 é do tipo:', typeof num1, 'e contém:', num1);
console.log('num2 é do tipo:', typeof num2, 'e contém:', num2, '\n');

// Operador + (mais) é adição quando os tipos são números e concatenação com string.
let resultadoAdicao = num1 + num2; 
console.log('A adição de', num1, 'e', num2, 'resulta em:', resultadoAdicao);
console.log('E o resultado vai ser do tipo:', typeof resultadoAdicao,'\n');

// Operador -
let resultadoSubtracao = num1 - num2; 
console.log('A subtração de', num1, 'e', num2, 'resulta em:', resultadoSubtracao);
console.log('E o resultado vai ser do tipo:', typeof resultadoSubtracao,'\n');

// Operador *
let resultadoMultiplicacao = num1 * num2; 
console.log('A multiplicação de', num1, 'e', num2, 'resulta em:', resultadoMultiplicacao);
console.log('E o resultado vai ser do tipo:', typeof resultadoMultiplicacao,'\n');

// Operador /
let resultadoDivisao = num1 / num2; 
console.log('A divisão entre', num1, 'e', num2, 'resulta em:', resultadoDivisao);
console.log('E o resultado vai ser do tipo:', typeof resultadoDivisao,'\n');

// Operador + com -
let resultado = num1 + num2 - 8; 
console.log('A operação', num1, '+', num2, '- 8',  'resulta em:', resultado);
console.log('E o resultado vai ser do tipo:', typeof resultado,'\n');
