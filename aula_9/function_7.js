/**
 * function_7.js
 * @author Alan Alencar
 * @description aprendendo usar funções. Criando nossas próprias functions. valor default.
 *              e tipo diferente.
 * @cuidado já existe a função Math.pow(base, expoente)
 */

function cubo(base = 0) { // só funciona o valor padrão para tipos undefined.
    console.log(typeof base);
    console.log(`O cubo de ${base} é`, base * base * base);
}

cubo(9); // passando o parametro como number.
cubo('9'); // passando o parametro como um string.
cubo('9A'); // passando o parametro como um string não sendo um número válido.

cubo(null); // passando o parametro como null.

console.log('Fim do processamento.');