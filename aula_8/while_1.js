/**
 * while_1.js
 * @author Alan Alencar
 * @description aprendendo a usar a instrução while com JS.
 * @remarks para usar while, o programador deve estar bem consciente de
 *          controlar todo o fluxo da estrutura de repetição para evitar
 *          que um "loop infinito" ocorra.
 */

// Boa prática sempre declarar e inicializar sua variável.
let contador = 1; // irá ser a variável de controle do loop while.

while (contador < 10) { // condição para o loop repetir.
    console.log(`${contador} - oi`);
    contador += 2; // é o mesmo que contador = contador + 2;
} // antes de finalizar, vai sempre checar se a condição é verdadeira.

console.log('Fim do loop while');