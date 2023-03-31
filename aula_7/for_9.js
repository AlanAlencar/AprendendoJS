/**
 * for_9.js
 * @author Alan Alencar
 * @description quebrar a repetição antes da condição do for com o
 *              comando break;
 */

for (let i = 1; i <= 10; i++) {
    if (i > 4) { // forçando quebrar o for, antes de i <= 10.
        break; // joga pra fora, primeira linha após o } fecha colchete
    }
    console.log(`Contando em ${i}`);
}

console.log('terminei ...');