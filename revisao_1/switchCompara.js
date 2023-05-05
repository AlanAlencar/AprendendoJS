/**
 * switchCompara.js
 * @author Alan Alencar
 * @description Usando a estrutura switch para comparar  o modelo e dar uma dica.
 * 
 *              Suv = Veículo alto, robusto e bonito demais.
 *              Sedan = Espaçoso e muito bacana.
 *              Hatch = Linhas esportivas e sem bagageiro.
 *              Esportivo = Carro de boy e Boya.
 *              Eletrico = Futuro, caro mas luxuoso.
 */

const CATEGORIA_AUTOMOVEL = 'Sedan';

switch (CATEGORIA_AUTOMOVEL) {
    case 'Suv':
        console.log('Veículo alto, robusto e bonito demais.');  
        break;
    case 'Sedan':
        console.log('Espaçoso e muito bacana.');  
        break;
    case 'Hatch':
        console.log('Linhas esportivas e sem bagageiro.');  
        break;
    case 'Esportivo':
        console.log('Carro de boy e Boya.');  
        break;
    case 'Eletrico':
        console.log('Futuro, caro mas luxuoso.');  
        break;
    default:
        console.log('Categoria Desconhecida.');
}


if (CATEGORIA_AUTOMOVEL === 'Suv') {
    console.log('Veículo alto, robusto e bonito demais.');
} else {
    if (CATEGORIA_AUTOMOVEL === 'Sedan') {
        console.log('Espaçoso e muito bacana.'); 
    } else {
        if (CATEGORIA_AUTOMOVEL === 'Hatch') {
            console.log('Linhas esportivas e sem bagageiro.'); 
        } else {
            if (CATEGORIA_AUTOMOVEL === 'Esportivo') {
                console.log('Carro de boy e Boya.'); 
            } else {
                if (CATEGORIA_AUTOMOVEL === 'Eletrico') {
                    console.log('Futuro, caro mas luxuoso.');
                } else {
                    console.log('Categoria Desconhecida.');
                }
            }
        }
    }
}


