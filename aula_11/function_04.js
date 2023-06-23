/**
 * function_04.js
 * @author Alan Alencar
 * @description lambda function, arrow function com um parametro, body mais complexa.
 */

const motd = () => {
    const mes = [ 'Janeiro', 'Feveiro', 'Março', 'Abril', 'Maio', 'Junho', 
                  'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro' ]; // Array com nome dos meses.
    const hoje = new Date(); // objeto data com a data atual.

    return `Seja bem-vindo. Hoje é ${hoje.getDate()} de ${mes[hoje.getMonth()]} do ano de ${hoje.getFullYear()}`;
}

console.log(motd());