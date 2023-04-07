/**
 * while_4.js
 * @author Alan Alencar
 * @description aprendendo a usar a instrução while com JS.
 * @remarks o último código agora usando constantes para mudar a 
 *          quantidade de interações do loop.
 */

const QTD_REPETICOES = 12, EXTRA = 9;
const INCREMENTO = 2;
let i = 1; // contador não pode ser constante.

while (i < QTD_REPETICOES) { // qtd execuções comparado com a constante.
	console.log(`${i} - oi`);
    i += INCREMENTO; // incremento agora é constante.
  
    if (i > EXTRA) { // comparação de saída do loop.
        break;
    }

}

console.log('Fim do loop while');