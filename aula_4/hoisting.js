/**
 * hoisting.js
 * ---------------
 * @author Alan Alencar
 * @description consumir a variável antes dela ser criada no programa.
 * @run node ./hoisting.js
 */

// ambas as variáveis vão apresentar valores undefined.

console.log('Sou natural de', cidade, 'no estado de', estado);

var cidade = 'Montes Clados';
var estado = 'MG';

// FIM: Alan Alencar