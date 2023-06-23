/**
 * function_08.js
 * @author Alan Alencar
 * @description lambda function como rest parameter. versão 2. (somar 5 números)
 */

// consistente, retrocompatível.
const somar = (x = 0, y = 0, z = 0, a = 0, b = 0) => {
    return x + y + z + a + b;
}

console.log(somar(10, 20, 5, 6, 7)); // 48.
console.log(somar(10, 20)); // 30.