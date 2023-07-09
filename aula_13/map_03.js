/**
 * map_03.js
 * @description iterando cada elemento do array com map e retornar o dobro 
 *              quando for valores pares.
 */

const numeros = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ];
const paresDobrados = numeros.map(value => {
    if (value % 2 === 0) {
        return value * 2;
    } else {
        return value;
    }
});

console.log('Array numeros', numeros);
console.log('Array pares dobrados', paresDobrados);
