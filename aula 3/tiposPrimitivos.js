/**
 * tiposPrimitivos.js
 * ----------------------
 * @author Alan Alencar
 * @description declara variáveis para tipos primitivos e usa o operador typeof
 * @run node ./tiposPrimitivos.js
 */

// para declarar uma variável usamos a palavra reservada let.
let nome = 'Alan'; // cria e inicializa. Por inferëncia será string.
let sobrenome = "Alan"; // Por inferëncia será string.
let alturaMts = 1.85; // Por inferëncia será number.
let numeroSapato = 43; // Por inferëncia será number.
let aposentado = false; // Por inferência será boolean.
let corOlhos = undefined; // Por inferêncua será undefined.
let calvo = null; // Por inferência será object (null é object)

console.log('\n+-------------------------------------------------------');
console.log(' Tipos primitivos de variáveis em JS');
console.log('+-------------------------------------------------------');
console.log(' "nome" é do tipo:', typeof nome, ',e contém:', nome);
console.log(' "sobrenome" é do tipo:', typeof sobrenome, ',e contém:', sobrenome);
console.log(' "alturaMts" é do tipo:', typeof alturaMts, ',e contém:', alturaMts);
console.log(' "numeroSapato" é do tipo:', typeof numeroSapato, ',e contém:', numeroSapato);
console.log(' "aposentado" é do tipo:', typeof aposentado, ',e contém:', aposentado);
console.log(' "corOlhos" é do tipo:', typeof corOlhos, ',e contém:', corOlhos);
console.log(' "calvo" é do tipo:', typeof calvo, ',e contém:', calvo);
console.log('+-------------------------------------------------------\n')