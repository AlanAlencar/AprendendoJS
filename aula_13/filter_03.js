/**
 * filter_03.js
 * @description iterando cada elemento do array com filter e criando um novo array só 
 *              com carros da Peugeot, com filter.
 *              V2
 */

const carros = [ { nome: '207', marca: 'Peugeot' }, 
                 { nome: 'X5', marca: 'BMW' },
                 { nome: 'Virtuos', marca: 'Volks' },
                 { nome: 'Polo', marca: 'Volks' },
                 { nome: 'T-Cross', marca: 'Volks' },
                 { nome: '208', marca: 'Peugeot' },
                 { nome: '308', marca: 'Peugeot' },
                 { nome: 'X6', marca: 'BMW' } ];

function soPeugeot(carro) {
    return carro.marca === 'Peugeot';
}
const peugeot = carros.filter(soPeugeot);
console.log(peugeot);