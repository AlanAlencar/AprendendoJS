/**
 * filter_04.js
 * @description iterando cada elemento do array com filter e criando um novo array só 
 *              com carros da Peugeot, com filter.
 *              V3
 */

const carros = [ { nome: '207', marca: 'Peugeot' }, 
                 { nome: 'X5', marca: 'BMW' },
                 { nome: 'Virtuos', marca: 'Volks' },
                 { nome: 'Polo', marca: 'Volks' },
                 { nome: 'T-Cross', marca: 'Volks' },
                 { nome: '208', marca: 'Peugeot' },
                 { nome: '308', marca: 'Peugeot' },
                 { nome: 'X6', marca: 'BMW' } ];

const soPeugeot = carro => carro.marca === 'Peugeot';
const peugeot = carros.filter(soPeugeot);
console.log(peugeot);