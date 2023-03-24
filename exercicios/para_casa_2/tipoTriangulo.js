/**
 * tipoTriangulo.js
 * @author Alan Alencar
 * @description analisa as medidas de um triangulo e diz qual sua
 *              classificação considerando seus lados.
 * @remarks obrigatório usar três constantes numéricas para os lados.
 *          -----------------------------------------------------------
 *          triang. Equilátero = três lados iguais.
 *          triang. Isósceles = pelo menos dois lados iguais.
 *          triang. Escaleno = todos os lados diferentes.
 */

const ladoA = 10;
const ladoB = 10;
const ladoC = 11;

console.log('Classifição do triângulo:');

// Equilátero
if (ladoA === ladoB && ladoB === ladoC) {
    console.log(`Triang. Equilátero. Os 3 lados iguais. A = ${ladoA}, B = ${ladoB} e C = ${ladoC}`);
}

// Isósceles
if ((ladoA === ladoB && ladoA !== ladoC) || 
    (ladoA === ladoC && ladoA !== ladoB) ||
    (ladoB === ladoC && ladoB !== ladoA)) {
    console.log(`Triang. Isósceles. 2 lados iguais. A = ${ladoA}, B = ${ladoB} e C = ${ladoC}`);
}

// Escaleno
if (ladoA != ladoB && ladoA != ladoC && ladoB != ladoC) {
    console.log(`Triang. Escaleno. Os 3 lados são diferentes. A = ${ladoA}, B = ${ladoB} e C = ${ladoC}`);
}

// FIM: Alan Alencar