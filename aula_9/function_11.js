/**
 * function_11.js
 * @author Alan Alencar
 * @description Exibir o cubo dos N primeiros números crescente e decrescentes.
 * @cuidado já existe a função Math.pow(base, expoente)
 */

console.time('Job');

const MAXIMO = 5; // <- quantas vezes vai rodar o loop. MUDE AQUI.

function cubo(base = 0) { // só funciona o valor padrão para tipos undefined.
    // testar se o valor de base é de fato um number.
    base = typeof base !== 'number' ? 0 : base; // ternário.
    return base * base * base;
}

console.time('For crescente');
for (let base = 1; base <= MAXIMO; base++) { // repetição.
    console.log(`O cubo de ${base} é ${cubo(base)}`);
}
console.timeEnd('For crescente');

for (let base = MAXIMO; base >= 1; base--) { // repetição decrescente.
    console.log(`O cubo de ${base} é ${cubo(base)}`);
}

console.log('Fim do processamento.');

console.timeEnd('Job'); // mesmo label lá do início.