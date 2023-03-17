/**
 * if_3.js
 * @author Alan Alencar
 * @description aprendendo condicionais com JS.
 * @remarks Cálculo do novo salário conforme tabela abaixo.
 *          Quem ganha até r$ 1200, receberá 8%.
 *          Quem ganha entre r$ 1201 e r$ 4000, receberá 6%.
 *          Quem ganha acima de r$ 4000 receberá 5%.
 * @attention Correção do bug de cálculo do novo salário.
 */

let salarioAtual = 3999.00; // Salario para cálculo.
let salarioCorrigido; // Receberá o novo salário calculado pela faixa.

console.log('Inicio do programa.');

// Primeira faixa.
if (salarioAtual <= 1200) {
    salarioCorrigido = salarioAtual * 1.08;
    console.log('O salário r$', salarioAtual, 'será de r$', salarioCorrigido, 'na faixa dos 8%' );
}
// Segunda faixa.
if (salarioAtual >= 1201 && salarioAtual <= 4000) {
    salarioCorrigido = salarioAtual * 1.06;
    console.log('O salário r$', salarioAtual, 'será de r$', salarioCorrigido, 'na faixa dos 6%');
}
// Terceira faixa.
if (salarioAtual > 4000) {
    salarioCorrigido = salarioAtual * 1.05;
    console.log('O salário r$', salarioAtual, 'será de r$', salarioCorrigido, 'na faixa dos 5%' );
}

console.log('🏁 Fim do programa.');
