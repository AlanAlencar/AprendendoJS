/**
 * while_3.js
 * @author Alan Alencar
 * @description aprendendo a usar a instrução while com JS.
 * @remarks este primeiro código foi estipulado que o loop com while
 *          deveria acontecer 15 vezes, mas a partir do momento que 
 *          a variável de controle for maior que 8, é para forçar o
 *          abandono do loop while, agora da forma mais adequada e
 *          segura.
 */

// Declara variável de controle e inicia com 1.
let i = 1;

while (i < 15) { // condiçao para qtd execuções.
    console.log(`${i} - oi`);
    i += 3; // incremente em 3 o valor de i.
  
    if (i > 8) { // condição para deixar o loop antes do fim.
        /* 
         * usar break ao invés da técnica como no programa anterior: i = 15;
         * com o break não interessa se você mudar a quantidade de loop.
         * bem mais seguro e profissional.
         */
        break;
    }
}

console.log('Fim do loop while');