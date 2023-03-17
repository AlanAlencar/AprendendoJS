/**
 * if_2.js
 * @author Alan Alencar
 * @description aprendendo condicionais com JS.
 * @remarks Cálculo do novo salário conforme tabela abaixo.
 *          Quem ganha até r$ 1200, receberá 8%.
 *          Quem ganha entre r$ 1201 e r$ 4000, receberá 6%.
 *          Quem ganha acima de r$ 4000 receberá 5%.
 * @attention ESTE PROGRAMA TEM UM BUG SÉRIO.
 *            A correção está no if_3.js
 */

let salarioAtual = 3999.00; // Salario para cálculo.

console.log('Inicio do programa.');

// Primeira faixa.
if (salarioAtual <= 1200) {
    console.log('O salário r$', salarioAtual, 'será de r$', salarioAtual * 1.08, 'na faixa dos 8%' );
    salarioAtual = salarioAtual * 1.08;
}
// Segunda faixa.
if (salarioAtual >= 1201 && salarioAtual <= 4000) {
    console.log('O salário r$', salarioAtual, 'será de r$', salarioAtual * 1.06, 'na faixa dos 6%');
    salarioAtual = salarioAtual * 1.06;
}
// Terceira faixa.
if (salarioAtual > 4000) {
    console.log('O salário r$', salarioAtual, 'será de r$', salarioAtual * 1.05, 'na faixa dos 5%' );
    salarioAtual = salarioAtual * 1.05;
}

console.log('🏁 Fim do programa.');
