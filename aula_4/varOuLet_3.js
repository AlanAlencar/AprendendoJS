/**
 * varOuLet_3.js
 * ---------------
 * @author Alan Alencar
 * @description Diferenças entre declarar variáveis com Var ou Let.
 * @run node ./varOuLet_3.js
 */

// Escopo global par var e escopo local para let.

var nome = 'Alan';
let sobrenome = 'Alencar';

console.log('VAR nome antes do if contém:', nome);
console.log('VAR sobrenome antes do if contém:', sobrenome, '\n');

if (true) {
    var nome = 'Stella';
    let sobrenome = 'Kardashian';
    console.log('VAR nome dentro do if contém:', nome);
    console.log('VAR sobrenome dentro do if contém:', sobrenome, '\n');
}

console.log('VAR nome após contém:', nome);
console.log('VAR sobrenome após contém:', sobrenome, '\n');

// FIM: Alan Alencar