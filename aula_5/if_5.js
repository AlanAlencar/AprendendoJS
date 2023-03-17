/**
 * if_5.js
 * @author Alan Alencar
 * @description aprendendo condicionais com JS agora com else.
 * @attention CODIGO COM BUG.
 *            Será corrigido no if_6.js
 */

const clima = 'Nublado'; // typeof clima retorna string.

if (clima === 'Ensolarado') {
    console.log('Dia 🌞 ensolarado, aproveite para tomar um sorvete.');
}

if (clima === 'Chuvoso') {
    console.log('Dia 🌧️, não esqueça o guarda-chuva.');
}

if (clima === 'Nublado') {
    console.log('Hoje o dia está cinza, mas é bom demais.');
}

if (clima === 'Nevando') {
    console.log('Dia ❄️ vai congelar os ossos.');
} else {
    console.log('O mundo acabou bye bye');
}

