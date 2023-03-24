/**
 * switch_2.js
 * @author Alan Alencar
 * @description usar a estrutura switch como alternativa no código.
 * @remarks pode-se usar com tipos number também.
 *          cuidado para não esquecer o Break.
 *          case funcionando como OU (||)  
 */

const andar = 2; // number;

switch (andar) {
  case 1:
  case 2:
    console.log('Pilotis');
    break;
  case 5:
    console.log('Andar da empresa');
    break;
  default:
    console.log('Prédio errado');
}