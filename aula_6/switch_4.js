/**
 * switch_4.js
 * @author Alan Alencar
 * @description usando ternário
 * @remarks construção com ternário aninhado. (complexo)
 */

let idade = 19; 

/**
 * Regra:
 * ! até 10 anos é criança.
 * ! entre 10 e 16 é pré adolescente.
 * ! entre 16 e 18 é adolescente.
 * ! acima de 18 é velho.
 */

// Atenção para indentação que facilita a leitura.
const experiencia = idade <= 10 
                      ? 'Criança' 
                      : (idade > 10 && idade <= 16 
                           ? 'Pré Adolescente'
                           : (idade > 16 && idade <= 18
                                ? 'Adolescente'
                                : 'Velho'));

console.log(`Um cidadão de ${idade} anos tem experiência ${experiencia}`);
      