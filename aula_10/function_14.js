/**
 * function_14.js
 * @author Alan Alencar
 * @description conceito de funções dentro de funções. (inside functions) - Parte 3
 */

/* soma dois argumentos */
function soma(x = 0, y = 0) {
    exibeResultado(x + y);
}

/* exibe o resultado */
function exibeResultado(valor) {
    console.log(`O resultado da soma é ${valor}`);
}

for(let i = 1; i <= 10; i++) {
    soma(i, i + 10); // chamar passando os dois parametros.
    exibeResultado(i + (i + 10)); // mesma coisa de chamar soma com dois parametros.
}