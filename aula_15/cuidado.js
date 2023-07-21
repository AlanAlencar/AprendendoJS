/**
 * cuidado.js
 * @author Alan Alencar
 * @description criar cópias de arrays sem pensar na linguagem.
 */

// Referencia de memória.
const suporte = [ 'Icaro', 'Thalita', 'Aline' ];
const suporteV2 = suporte; // referência para um endereço de memória.

console.log('Antes:');
console.table(suporte);
console.table(suporteV2);

suporteV2.push('Daniel');

console.log('Depois:');
console.table(suporte);
console.table(suporteV2);

// Para criar dois arrays distintos
const fabrica = [ 'Alan', 'Eliziane', 'Fujie' ];
const fabricaV2 = fabrica.map(nome => nome); // clone de fabrica.

console.log('Antes:');
console.table(fabrica);
console.table(fabricaV2);

fabricaV2.push('Marlon');

console.log('Depois:');
console.table(fabrica);
console.table(fabricaV2);