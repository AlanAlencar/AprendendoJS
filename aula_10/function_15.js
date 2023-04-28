/**
 * function_15.js
 * @author Alan Alencar
 * @description conceito de funções dentro de funções. (inside functions) - Parte 4 FINAL
 */

/* soma dois argumentos */
function soma(x = 0, y = 0) {

    /* exibe o resultado */
    function exibeResultado(valor) {
        console.log(`O resultado da soma é ${valor}`);
    }
    // Apenas o código escrito dentro da função soma é que pode chamar exibeResultado()
    exibeResultado(x + y);

} // a partir desta fecha chaves, não poderá mais acessar exibeResultado()

for(let i = 1; i <= 20; i++) {
    soma(i, i + 10); // chamar passando os dois parametros.
}

console.log('Fim do processamento.');