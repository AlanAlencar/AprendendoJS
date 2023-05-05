/**
 * nomeSobrenome.js
 * @author Alan Alencar
 * @description Exibir na console todos os valores de um array
 * @version 1.0.0 primeira versão do programa.
 */

// 10 posições.
let nomeSobrenome = [ 'Alan', 'Alencar' , 
                      'Marcelo', 'Carvalho', 
                      'Francieli', 'Fujie', 
                      'Marlon', 'Correa', 
                      'Eliziane', 'Andrade' ];

for (let index = 0; index < 10; index += 2) {
    console.log(nomeSobrenome[index], nomeSobrenome[index + 1]);
}

/* 
    forma antiga
    console.log(nomeSobrenome[0], nomeSobrenome[1]);
    console.log(nomeSobrenome[2], nomeSobrenome[3]);
    console.log(nomeSobrenome[4], nomeSobrenome[5]);
    console.log(nomeSobrenome[6], nomeSobrenome[7]);
    console.log(nomeSobrenome[8], nomeSobrenome[9]);
*/
