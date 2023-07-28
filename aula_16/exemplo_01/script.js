/**
 * script.js
 * @author Alan Alencar
 * @description Aprendendo JS assíncrono.
 */

const somar = (foo, bar) => {
    return foo + bar;
}

const multiplicar = async (foo, bar) => {
    return foo * bar;
}

console.log('Somar', somar(6, 1));

multiplicar(6, 2)
  .then(value => {
    console.log('Multiplicar', value);
  });

console.log('Somar', somar(7, 1));