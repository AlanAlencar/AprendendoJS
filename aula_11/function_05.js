/**
 * function_05.js
 * @author Alan Alencar
 * @description lambda function como parametro, versão 1.
 */

const executa = (func, foo, bar) => {
    // executa a função func do parametro passado foo e bar como parametro.
    console.log(func(foo, bar)); 
}

// O primeiro parâmetro é uma função e os dois últimos é numéricos.
executa(function (x, y) { return x + y }, 15, 100);

/**
 * Entendendo a maluquice:
 * ----------------------------
 * a função "function (x, y) { return x + y } vai ser passada para o parametro func."
 * o valor 15 vai ser passado para o parametro "foo"
 * o valor 100 vai ser passado para o parametro "bar"
 */