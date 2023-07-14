/**
 * reduce_02.js
 * @description Frenquencia de repetição.
 *              ┌─────────┬────────┐
 *              │ (index) │ Values │
 *              ├─────────┼────────┤
 *              │   18    │   2    │
 *              │   20    │   2    │
 *              │   21    │   3    │
 *              │   50    │   1    │
 *              │   53    │   2    │
 *              └─────────┴────────┘
 */

const funcionarios = [
    { nome: 'Marlon', idade: 18, cargo: 'Tester' },
    { nome: 'Alan Alencar', idade: 53, cargo: 'Diretor de Tecnologia' },
    { nome: 'Icaro', idade: 20, cargo: 'Suporte' },
    { nome: 'Aline', idade: 18, cargo: 'Suporte' },
    { nome: 'Thalita', idade: 21, cargo: 'Suporte' },
    { nome: 'Daniel', idade: 21, cargo: 'Suporte' },
    { nome: 'Leonardo Braz', idade: 53, cargo: 'DBA' },
    { nome: 'Geraldo', idade: 50, cargo: 'Delphi Programmer' },
    { nome: 'Fujie', idade: 21, cargo: 'Tester' },
    { nome: 'Eliziane', idade: 20, cargo: 'Tester' }
]

const idades = funcionarios.reduce((accumulator, { idade }) => {
    accumulator[idade] = accumulator[idade] + 1 || 1; // curto-circuito
    return accumulator;
}, {});

console.table(idades);