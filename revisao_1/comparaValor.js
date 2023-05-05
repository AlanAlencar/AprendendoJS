/**
 * comparaValor.js
 * @author Alan Alencar
 * @description Como comparar valores em if.
 */

let foo = 5; // número, o tipo primitivo será number.
let bar = '5'; // string, pois está entre aspas. o tipo primitivo será string.
let soma = foo + bar;

console.log(soma); // ? 10, 55 ????? 

console.log('O tipo de foo é', typeof foo);
console.log('O tipo de bar é', typeof bar);
console.log('O tipo de soma é', typeof soma);

if (foo ==  bar) { // compara o valor de foo com o de bar
    console.log('Operador == | São iguais'); // Muito cuidado. Erro de lógica que mata.
} else {
    console.log('Operador == | São diferentes');
}

if (foo === bar) { // compara o valor de foo com o de bar, e verifica se são do mesmo tipo.
    console.log('Operador === | São iguais'); 
} else {
    console.log('Operador === | São diferentes');
}

// Atenção, perigoso
if (soma > 15) {
    console.log('Soma é maior que 15');
} else {
    console.log('Soma é menor ou igual a 15');
}