/**
 * if_6_v2.js
 * @author Alan Alencar
 * @description aprendendo condicionais com JS agora com else.
 *              Refatorado.
 */

const clima = 'Nublado'; // typeof clima retorna string.

if (clima === 'Ensolarado') {
    console.log('Dia 🌞 ensolarado, aproveite para tomar um sorvete.');
} else if (clima === 'Chuvoso') {
    console.log('Dia 🌧️, não esqueça o guarda-chuva.');
} else if (clima === 'Nublado') {
    console.log('Hoje o dia está cinza, mas é bom demais.');
} else if (clima === 'Nevando') {
    console.log('Dia ❄️  vai congelar os ossos.');
} else {
    console.log('💀  O mundo acabou bye bye');
}

// Profissionalismo. Codigo limpo.