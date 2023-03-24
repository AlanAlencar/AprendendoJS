/**
 * pgtoComissao.js
 * @author Alan Alencar
 * @description calcula o pagamento de comissão para um vendedor de automóveis.
 * @remarks regras:
 *          -----------------------------------------------------------
 *          carro usado = 8.5% de comissão sobre valor bruto.
 *          carro zero = 9.16% sobre o líquido. Impostos são 12,87%
 *          montante superar 10 unidades = bônus de r$ 1000
 *          montante superar 18 unidades = bônus de r$ 1650
 *          -----------------------------------------------------------
 *          dar os parabéns se receber um bônus.
 */

// Imposto e % comissões sobre novos e usados
const IMPOSTO = 0.1287; // %
const PERC_USADO = 0.085; // $
const PERC_NOVO = 0.0916; // $
// Usados
const qtdVendaUsados = 8;
const valorVendaUsados = 68765.88;
// Novos
const qtdVendaNovos = 5;
const valorVendaNovos = 154876.34;
const valorLiquidoNovos = valorVendaNovos - (valorVendaNovos * IMPOSTO);
// Totais
const totalVendidos = qtdVendaUsados + qtdVendaNovos;
const comissao = (valorVendaUsados * PERC_USADO) + (valorLiquidoNovos * PERC_NOVO);
let bonus = 0; // Inicia sem bônus.

if (qtdVendaUsados + qtdVendaNovos > 10 && qtdVendaUsados + qtdVendaNovos < 18) {
    bonus = 1000;
} else if (qtdVendaUsados + qtdVendaNovos > 18) {
    bonus = 1650;
}

console.log(`\nExtrato de comissão:\n`);
console.log(`+-NOVOS-------------------------------------->`);
console.log(`| Unidade(s) vendida(s): ${qtdVendaNovos}`);
console.log(`| Montante total: r$ ${valorVendaNovos}`);
console.log(`| Comissão de ${PERC_NOVO * 100}% será de r$ ${(valorLiquidoNovos * PERC_NOVO).toFixed(2)}`);
console.log(`+-USADOS------------------------------------->`);
console.log(`| Unidade(s) vendida(s): ${qtdVendaUsados}`);
console.log(`| Montante total: r$ ${valorVendaUsados}`);
console.log(`| Comissão de ${PERC_USADO * 100}% será de r$ ${(valorVendaUsados * PERC_USADO).toFixed(2)}`);
console.log(`+-BÔNUS-------------------------------------->`);
console.log(`| Total unidades de novos e usados: ${totalVendidos}`);
console.log(`| Bônus adicional: r$ ${bonus}`);
console.log(`+-TOTAL A RECEBER-------------------------------------->`);
console.log(`| Comissão com bônus: r$ ${(comissao + bonus).toFixed(2)}`);
if (bonus > 0) {
    console.log(`| Parabéns, você recebeu um bônus pela suas vendas.`);
}
console.log(`+------------------------------------------------------<\n`);

// FIM: Alan Alencar
