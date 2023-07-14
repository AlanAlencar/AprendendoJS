/**
 * findIndex_0`1`.js
 * @description Encontrar qual é a posição de um condição.
 */

const herois = [ //  Spiderman está no index 5
    'Capitão América', 'Mulher Maravilha',
    'Hulk', 'Homem de Ferro', 'Tarzan',
    'Spiderman', 'Superman'
];
// find encerra a execução quando encontra a primeira ocorrëncia.
let achei = herois.findIndex(heroi => heroi.toLocaleLowerCase() === 'Spiderman'.toLocaleLowerCase());
console.log(achei);