/**
 * find_02.js
 * @description permite efetuar busca em um array. 
 *              exemplo usando find.
 */

const herois = [ // array com 7 herois. 0 até 6. (tamanho - 1)
    'Capitão América', 'Mulher Maravilha',
    'Hulk', 'Homem de Ferro', 'Tarzan',
    'SpidErMan', 'Superman'
];
// find encerra a execução quando encontra a primeira ocorrëncia.
let achei = herois.find(heroi => heroi.toLocaleLowerCase() === 'Spiderman'.toLocaleLowerCase());
achei ? console.log('❎ Spiderman consta do array.') : console.log('❌ Spiderman não encontrado.');