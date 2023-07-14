/**
 * find_01.js
 * @description permite efetuar busca em um array. 
 *              exemplo usando laço for com if.
 */

const herois = [ // array com 7 herois. 0 até 6. (tamanho - 1)
    'Capitão América', 'Mulher Maravilha',
    'Hulk', 'Homem de Ferro', 'Tarzan',
    'Spiderman', 'Superman'
];

let achei = false;

for (let i = 0; i < herois.length; i++) {
    if (herois[i].toLocaleLowerCase() === 'Spiderman'.toLocaleLowerCase()) {
        achei = true;
    }
}

if (achei) {
    console.log('❎ Spiderman consta do array.');
} else {
    console.log('❌ Spiderman não encontrado.');
}
