/**
 * function_09.js
 * @author Alan Alencar
 * @description lambda function como REST parameter. versão 3. (somar quantos eu quiser)
 */

// rest parameter (...valores)
const somar = (...valores) => {
    // ...valores (rest parameter, que é um array)
    let total = 0;
    for (let x = 0; x < valores.length; x++) { // inicia no index 0.
        total += valores[x];
    }
    return total;
}

console.log(somar(10, 20));
console.log(somar(10, 20, 30, 40, 50));
console.log(somar(10, 20, 30, 40, 50, 60, 70, 80));
console.log(somar(10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120));
console.log(somar(5, 7, 3, 4.6, 6.9, 3, 7.2, 5, 4, 100, 110, 120, 10, 20, 1000, 1001));
