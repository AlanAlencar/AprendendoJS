/**
 * switch_3.js
 * @author Alan Alencar
 * @description 3 formas de escrever o mesmo código
 * @remarks irei alterar apenas o nome da constante e variável para
 *          estar tudo funcionando corretamente.
 */

/**
 * primeira versão (programador Junior)
 * ! usar if e é o programa com maior quantidade de linhas.
 */
const alturaMts = 1.46;
let estatura;

if (alturaMts > 1.60) {
  estatura = 'Alta';
} else {
  estatura = 'Baixinho';
}

console.log(`Um cidadão de ${alturaMts} mts, é ${estatura}`);

/**
 * segunda versão (programador Pleno)
 * ! segunda versão usando ternário já na criação da variável.
 */
const alturaMts2 = 1.46;
let estatura2 = alturaMts > 1.60 ? 'Alta' : 'Baixinho';

console.log(`Um cidadão de ${alturaMts2} mts, é ${estatura2}`);

/**
 * terceira versão (programador Senior)
 * ! sem usar variável, realizando o ternário no template string.
 */
 const alturaMts3 = 1.76;
 console.log(`Um cidadão de ${alturaMts3} mts, é ${alturaMts3 > 1.60 ? 'Alta' : 'Baixinho'}`);
 

/**
 * Nota:
 * --------------
 * Nem sempre o programa do Senior por ter menos linhas de programação
 * vai dizer que ele é mais inteligente, simplesmente vai demonstrar
 * que ele é mais proficiente na linguagem e sabe encurtar caminho, 
 * mas o viés negativo disto é a complexidade para futuras melhorias
 * com outros desenvolvedores que não são tão proficientes como ele.
 * 
 * Então, o meio termo é talvez o ponto de equilíbrio a se atingir.
 * Procure ser otimizado, mas sendo mais claro no código para que
 * outros devs possam trabalhar bem nele no futuro.
 * 
 * Alan Alencar
 */