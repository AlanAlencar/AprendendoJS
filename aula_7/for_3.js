/**
 * for_3.js
 * @author Alan Alencar
 * @description aprendendo a usar a instrução for, modo avançado.
 */

let x = 1;

// for (inicio; condicao; incremento) 
for ( ; x <= 5; x++) {
    console.log(`O valor de X é ${x}`);
}
// Agora é possível acessar x porque ele está no mesmo escopo.
console.log(`Chegamos ao fim e o valor de X é ${x}`);