/**
 * varOuLet_2.js
 * ---------------
 * @author Alan Alencar
 * @description Diferenças entre declarar variáveis com Var ou Let.
 * @run node ./varOuLet_2.js
 */

// Escopo local com let

let foo = 1;

console.log('VAR foo antes do bloco:', foo, '\n');

{
    let bar = 'Alan';
    console.log('VAR foo dentro do bloco:', foo);
    console.log('VAR bar dentro do bloco:', bar, '\n');
}

console.log('VAR foo depois do bloco:', foo);
console.log('VAR bar depois do bloco:', bar, '\n'); // vai gerar erro aqui.


// FIM: Alan Alencar