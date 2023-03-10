/**
 * varOuLet_1.js
 * ---------------
 * @author Alan Alencar
 * @description Diferenças entre declarar variáveis com Var ou Let.
 * @run node ./varOuLet_1.js
 */

// Escopo global com var

var foo = 1;

console.log('VAR foo antes do bloco:', foo, '\n');

{
    var bar = 'Alan';
    console.log('VAR foo dentro do bloco:', foo);
    console.log('VAR bar dentro do bloco:', bar, '\n');
}

console.log('VAR foo depois do bloco:', foo);
console.log('VAR bar depois do bloco:', bar, '\n');


// FIM: Alan Alencar