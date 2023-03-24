/**
 * kmToMiles.js
 * @author Alan Alencar
 * @description converte km em milhas.
 * @remarks obrigatório usar constante e template strings.
 *          -------------------------------------------------
 *          1 KM = 0.621371 milhas
 */

const km = 76.83;
const FATOR_CONVERSAO = 0.621371;

console.log(`${km} km(s) equivale à ${(km * FATOR_CONVERSAO).toFixed(2)} milha(s)`);

// FIM: Alan Alencar