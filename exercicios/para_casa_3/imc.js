/**
 * imc.js
 * @author Alan Alencar
 * @description Calcular o Índice de Massa Corporal IMC de uma pessoa e apresentar resultado.
 * @remarks Como calcular:
 *          Fórmula do IMC é: IMC = peso / (altura * altura) 
 *          Resultados:
 *              IMC abaixo de 18,5: abaixo do peso
 *              IMC entre 18,5 e 24,9: peso normal
 *              IMC entre 25 e 29,9: sobrepeso
 *              IMC acima de 30: obesidade     
 */

let peso = 87; // peso em quilos.
let altura = 1.85; // altura em metros.
const IMC = peso / (altura * altura); // cálculo do IMC.
const NOME = 'Alan Alencar';

if (IMC < 18.5) {
    console.log(`${NOME}, você está abaixo do seu peso.`);
} else if (IMC >= 18,5 && IMC <= 24.9) {
    console.log(`${NOME}, seu peso é normal.`);
} else if (IMC >= 25 && IMC <= 29.9) {
    console.log(`${NOME}, você está com sobrepeso.`);
} else {
    console.log(`${NOME}, você está obeso.`);
}

// FIM: Alan Alencar