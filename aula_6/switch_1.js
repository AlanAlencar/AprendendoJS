/**
 * switch_1.js
 * @author Alan Alencar
 * @description usar a estrutura switch como alternativa no código.
 * @remarks aprendendo a usar switch quando aplicável.     
 */

let idade = 3; // Alterar o valor antes e executar para testar.
let experiencia = 'adulto';

/**
 * Regra:
 * ! até 10 anos é criança.
 * ! entre 10 e 16 é pré adolescente.
 * ! entre 16 e 18 é adolescente.
 * ! entre 18 e 20 é chato.
 * ! acima dos 30 e abaixo dos 40 é trintão.
 * ! acima dos 40 é veterano.
 */

console.log('Antes dos ifs, Experiencia = ', experiencia);

if (idade <= 10) {
  experiencia = 'Criança';
}

if (idade > 10 && idade <= 16) {
  experiencia = 'Pré adolescente';
}

if (idade > 16 && idade <= 18) {
  experiencia = 'Adolescente';
}

if (idade > 18 && idade <= 20) {
  experiencia = 'Chato';
}

console.log('Depois dos ifs, Experiencia = ', experiencia);

switch (experiencia) {
	case 'Criança':
  	console.log('Você é bem novinho e não pode entrar no parque.');
   	break;
  case 'Pré adolescente':
  	console.log('Seja bem-vindo e tome muito cuidado para não se machucar.');
    break;
  case 'Adolescente':
  	console.log('Vai pra casa estudar.');
    break;
  case 'Chato': 
    console.log('Me desculpe, hoje não abriremos o parque.');
    break;
  default:
    console.log('Seja bem-vindo seu adulto, volte a ser uma criança.');
}