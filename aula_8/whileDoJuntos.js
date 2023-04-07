/**
 * whileDoJuntos.js
 * @author Alan Alencar
 * @description while e do juntos.
 */

let i = 1; // iniciado com 1.

while (i <= 2) { // vai executar porque i é igual a 1.
	console.log('Olá do while');
    i++;
} // fim do loop while.

/*
 * mesmo a condição do while que fica no final do do, ser i <= 2 e
 * o valor de i ser 3, ou seja, não retorna verdadeiro, com o loop
 * do, vai sempre executar uma primeira vez.
 */
do {
	console.log('Olá do do');
    i++; // i = 4 pois chegou como 3 ao entrar no do {...} while
} while (i <= 2); // do {...} while (condição);

console.log('Fim do loop');