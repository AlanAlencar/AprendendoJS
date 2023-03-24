/**
 * hrExtra_chatGPT.js
 * @author OpenIA, chatGPT
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

const horasTrabalhadas = 72; // Altere aqui a quantidade de horas trabalhadas na semana

const horasNormais = 44;
const valorHoraNormal = 45.87;
const valorHoraExtra1 = 65.42;
const valorHoraExtra2 = 75.44;

let valorTotal = 0;
let valorHoraExtra1Total = 0;
let valorHoraExtra2Total = 0;

if (horasTrabalhadas < horasNormais) {
  console.log(`ATENÇÃO: O funcionário ficou devendo ${horasNormais - horasTrabalhadas} horas para a empresa.`);
} else {
  valorTotal += horasNormais * valorHoraNormal;

  if (horasTrabalhadas <= 55) {
    valorHoraExtra1Total = (horasTrabalhadas - horasNormais) * valorHoraExtra1;
    valorTotal += valorHoraExtra1Total;
  } else {
    valorHoraExtra1Total = (55 - horasNormais) * valorHoraExtra1;
    valorHoraExtra2Total = (horasTrabalhadas - 55) * valorHoraExtra2;
    valorTotal += valorHoraExtra1Total + valorHoraExtra2Total;
  }

  console.log(`Valor total a ser pago: R$${valorTotal.toFixed(2)}`);

  if (valorHoraExtra1Total > 0) {
    console.log(`Valor das horas extras (até 55 horas): R$${valorHoraExtra1Total.toFixed(2)}`);
  }

  if (valorHoraExtra2Total > 0) {
    console.log(`Valor das horas extras (acima de 55 horas): R$${valorHoraExtra2Total.toFixed(2)}`);
  }
}
