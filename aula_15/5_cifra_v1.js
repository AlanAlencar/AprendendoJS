/**
 * 5_cifra_v1.js
 * @author Alan Alencar
 * @description criar uma cifra a partir de uma string.
 *              regra: toda palavra maior que 4 letras, vai ser transformada em:
 *              primeira letra, + tamanho até a última, + ultima letra.
 *              ex: Me ajuda a desenvolver um código em Javascript.
 *                  Me a3a e d9r um c4o em J8t
 */

const frase = 'Me ajuda a desenvolver um código em Javascript';
const palavras = frase.split(' ');
const cifras = palavras.map(palavra => {
    if (palavra.length >= 4) {
        return palavra[0] + (palavra.length - 2) + palavra[palavra.length - 1];
    } else {
        return palavra;
    }
});

const fraseCifrada = cifras.join(' ');
console.log(frase);
console.log(fraseCifrada);