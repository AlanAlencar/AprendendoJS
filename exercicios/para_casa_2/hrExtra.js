/**
 * hrExtra.js
 * @author Alan Alencar
 * @description calcula o pagamento de horas extras segundo regras específicas.
 * @remarks deve cumprir 44 horas semanais ao valor de r$ 45.87 a hora. 
 *          o que ultrapassar desta quantidade, deve ser pago r$ 65.42 até 55 horas 
 *          e r$ 75.44 acima de 55 horas trabalhadas na semana. 
 *          ----------------------------------------------------------
 *          1. criar uma constante para representar quantas horas ele trabalhou na semana.
 *          2. calcular o valor total do pagamento da semana considerando a regra acima.
 *          3. exibir na console, o valor total, o valor das horas extra na primeira faixa
 *             e o valor das horas extras na segunda faixa se houver horas aplicáveis.
 *          4. se o valor das horas trabalhadas na semana for inferior a 44 horas, 
 *             dar um alerta na console alertando sobre o débito que ele ficou 
 *             com a empresa em horas.     
 */

// Definições
const JORNADA_SEMANAL_OBRIGATORIA = 44;
const VALOR_HR_BASE = 45.87; // valor hr contratual até 44 hrs semanais.
const VALOR_HR_FAIXA_ATE_55HRS = 65.42; // valor hora da primeira faixa da HH.
const VALOR_HR_FAIXA_ACIMA_55HRS = 75.44; // valor hora da última faixa da HH.

// Variáveis inicializadas com zero. (importante não usar como undefined)
let valorTotalAReceber = valorBase = valorTotalFaixaAte55 = valorTotalFaixaAcima55 = 0;

// Base de horas para cálculo, altere aqui.
const hrsSemanaisTrabalhadas = 72; // apenas valores inteiros de horas.

// Verificar se ficou devendo horas para a empresa.
if (hrsSemanaisTrabalhadas < JORNADA_SEMANAL_OBRIGATORIA) { // trabalhou menos que devia.
    console.log(`>>> Alerta, o funcionário está em débito de ${JORNADA_SEMANAL_OBRIGATORIA - hrsSemanaisTrabalhadas} hrs.`);
    console.log(`Pelas ${hrsSemanaisTrabalhadas} hrs trabalhadas vai receber r$ ${(hrsSemanaisTrabalhadas * VALOR_HR_BASE).toFixed(2)}`)
} else { // cumpriu a jornada obrigatório ou até mais, vamos analisar.
    valorBase = JORNADA_SEMANAL_OBRIGATORIA * VALOR_HR_BASE;
    if (hrsSemanaisTrabalhadas <= 55) { // temos hrs na faixa 1 para cobrar.
        valorTotalFaixaAte55 = (hrsSemanaisTrabalhadas - JORNADA_SEMANAL_OBRIGATORIA) * VALOR_HR_FAIXA_ATE_55HRS;
    } else { // se chegar aqui é porque ultrapassou as 55 hrs.
        valorTotalFaixaAte55 = (55 - JORNADA_SEMANAL_OBRIGATORIA) * VALOR_HR_FAIXA_ATE_55HRS;
        valorTotalFaixaAcima55 = (hrsSemanaisTrabalhadas - 55) * VALOR_HR_FAIXA_ACIMA_55HRS;
    }
    valorTotalAReceber = valorBase + valorTotalFaixaAte55 + valorTotalFaixaAcima55;

    console.log(`+------------------------------------->`);
    console.log(`| Extrato Semanal de remuneração:`);
    console.log(`+------------------------------------->`);
    console.log(`| Semanal base: r$ ${valorBase.toFixed(2)}`);
    console.log(`| H/H até 55 hrs: r$ ${valorTotalFaixaAte55.toFixed(2)}`);
    console.log(`| H/H acima de 55 hrs: r$ ${valorTotalFaixaAcima55.toFixed(2)}`);
    console.log(`| ------------------------------------>`);
    console.log(`| TOTAL A RECEBER: r$ ${valorTotalAReceber.toFixed(2)}`);
    console.log(`+------------------------------------->\n`);
}

// FIM: Alan Alencar