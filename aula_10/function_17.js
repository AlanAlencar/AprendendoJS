/**
 * function_17.js
 * @author Alan Alencar
 * @description função soma como Function Expression
 */

let soma = function (x = 0, y = 0) {
    /* exibe o resultado */
    const exibeResultado = function (valor) {
        console.log(`O resultado da soma é ${valor}`);
    }
    // Apenas o código escrito dentro da função soma é que pode chamar exibeResultado()
    exibeResultado(x + y);
}

for(let i = 1; i <= 3; i++) {
    soma(i, i + 10); // chamar passando os dois parametros.
}

console.log('Fim do processamento.');