/**
 * 5_cifra_v2.js
 * @author Alan Alencar
 * @description criar uma cifra a partir de uma string.
 *              regra: toda palavra maior que 4 letras, vai ser transformada em:
 *              primeira letra, + tamanho até a última, + ultima letra.
 *              ex: Me ajuda a desenvolver um código em Javascript.
 *                  Me a3a e d9r um c4o em J8t
 */

const fraseCifrada = 'Me ajuda a desenvolver um código em Javascript'
    .split(' ')
    .map(palavra => palavra.length >= 4 ? palavra[0] + (palavra.length - 2) + palavra[palavra.length - 1] : palavra)
    .join(' ');
console.log(fraseCifrada);