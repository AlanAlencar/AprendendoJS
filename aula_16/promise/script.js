/**
 * script.js
 * @author Alan Alencar
 * @description Aprendendo JS assíncrono.
 */

const consomeAPI = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('👊🏻 Show, deu tudo certo.');
        }, 5000);
    });
}

console.log('Iniciando meu programa.');
console.log('Agora vou chamar a API');
consomeAPI()
  .then((result) => { // sucesso (resolve)
    console.log(result) 
  })
  .catch((err) => {
    console.error(err);
  });
console.log('Fim do programa.');