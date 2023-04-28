/**
 * function_18.js
 * @author Alan Alencar
 * @description função soma como Function Expression e arrow function
 * @atençao
 * let soma = (x = 0, y = 0) => { ... }  // com arrow function. confuso demais.
 * let soma = function (x = 0, y = 0) { ... } // função expression. fácil de ler e pouco confuso.
 * function soma(x = 0, y = 0) { ... } // function declaration, fácil de ler e manter.
 */

/* arrow function */
let soma = (x = 0, y = 0) => {
    console.log(`O resultado da soma é ${x + y}`);
}

for(let i = 1; i <= 5; i++) {
    soma(i, i + 10); // chamar passando os dois parametros.
}

console.log('Fim do processamento.');