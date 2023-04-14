/**
 * function_8.js
 * @author Alan Alencar
 * @description aprendendo usar funções. Criando nossas próprias functions. valor default.
 *              e tipo diferente e com validação.
 * @cuidado já existe a função Math.pow(base, expoente)
 */

function cubo(base = 0) { // só funciona o valor padrão para tipos undefined.
    // testar se o valor de base é de fato um number.
    if (typeof base !== 'number') {
        base = 0; // atribui um number.
    }
    console.log(`O cubo de ${base} é`, base * base * base);
}

cubo(); // chamando sem passar o parametro, isto é o mesmo que undefined.
cubo(9); // passando o parametro como number.
cubo('9'); // passando o parametro como um string. (não vai funcionar mais).
cubo('9A'); // passando o parametro como um string não sendo um número válido.

cubo(null); // passando o parametro como null.

console.log('Fim do processamento.');