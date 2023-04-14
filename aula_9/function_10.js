/**
 * function_10.js
 * @author Alan Alencar
 * @description aprendendo usar funções. Criando nossas próprias functions. valor default.
 *              e tipo diferente e com validação, e retornando valor.
 * @cuidado já existe a função Math.pow(base, expoente)
 */

function cubo(base = 0) { // só funciona o valor padrão para tipos undefined.
    // testar se o valor de base é de fato um number.
    base = typeof base !== 'number' ? 0 : base; // ternário.
    return base * base * base;
}

let resultado = cubo(3); // guardo o resultado em uma variável. Consome memória.
console.log(`O valor do cubo de 3 é ${resultado}`); // 27

// Agora vou multiplicar por 2 o cubo de 3.
console.log(`O valor do cubo de 3 é ${resultado * 2}`); // 54

// Chamar direto sem guardar em um variável. Não consome memória.
console.log(`O valor do cubo de 5 é ${cubo(5)}`); // 125

// Agora vou multiplicar por 2 o cubo de 5.
console.log(`O cubo de 5 multiplicado por 2 é ${cubo(5) * 2}`); // 250

console.log('Fim do processamento.');