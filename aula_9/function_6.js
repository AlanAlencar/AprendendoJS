/**
 * function_6.js
 * @author Alan Alencar
 * @description aprendendo usar funções. Criando nossas próprias functions. valor default.
 * @cuidado já existe a função Math.pow(base, expoente)
 */

function cubo(base = 0) { // só funciona o valor padrão para tipos undefined.
    console.log(`O cubo de ${base} é`, base * base * base);
}

cubo(); // <- erro, esqueci de passar a base como parametro.

console.log('Fim do processamento.');