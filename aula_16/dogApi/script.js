/**
 * script.js
 * @author Alan Alencar
 * @description Acesar DOG API e mostrar imagem de cachorro.
 */

const url = 'https://dog.ceo/api/breeds/image/random';

fetch(url)
  .then(response => {
    if (!response.ok) {
        throw new Error('💩 de m3rda');
    }
    return response.json();
  })
  .then(picture => {
    const tagImg = document.getElementById('picDog'); 
    tagImg.setAttribute('src', picture.message);
  })
  .catch(err => {
    console.error(`💀 deu ruim: ${err}`);
  })