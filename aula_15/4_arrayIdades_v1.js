/**
 * 4_arrayIdades_v1.js
 * @author Alan Alencar
 * @description percorre um array de objetos, e cria um novo array com menor idade, 
 *              maior idade e diferença entre elas.
 *              ex: [ 20, 53, 33 ]
 */

const alunos = [ { nome: 'John', idade: 28 }, 
                 { nome: 'Thiago', idade: 21 },
                 { nome: 'Júlia', idade: 20 }, 
                 { nome: 'Sarah', idade: 29 },
                 { nome: 'Alan', idade: 53 }, 
                 { nome: 'Laura', idade: 23 } ];

const idades = alunos.map(aluno => aluno.idade);
const menorIdade = Math.min(...idades);
const maiorIdade = Math.max(...idades);
const resultadoFinal = [ menorIdade, maiorIdade, maiorIdade - menorIdade ];

console.log(resultadoFinal);