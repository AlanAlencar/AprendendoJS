/**
 * numerosAleatorios.js
 * @author Alan Alencar
 * @description Gerador de Números Randômicos entre 1 e 6 (dado)
 * @version 1.0.0 primeira versão do programa.
 */

// Gere 150 números aleatórios, entre 1 e 6. (jogar o dado)

// Gera um número aleatório entre 1 e 6 SEMPRE.
function dice() {
    const resultado = Math.floor(Math.random() * 6) + 1; // Random gera um número entre 0 e 1.
    return resultado;
}


for (let index = 1; index <= 150; index++) {
    let numeroDaSorte = dice();
    console.log(`${index} - Número da sorte é ${numeroDaSorte}`);
}
