/**
 * function_13.js
 * @author Alan Alencar
 * @description conceito de funções dentro de funções. (inside functions) - Parte 2
 */

/* soma dois argumentos */
function soma(x = 0, y = 0) {
    console.log(`a soma entre x=${x} e y=${y} é igual à ${ x + y }`);
}

for(let i = 1; i <= 10; i++) {
    //soma(); // sem passar parâmetros.
    //soma(i); // chamar passando apenas o 1o parametro.
    soma(i, i + 10); // chamar passando os dois parametros.
}