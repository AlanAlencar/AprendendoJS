/**
 * function_16.js
 * @author Alan Alencar
 * @description Function Declaration vs Function Expression
 */

// Function Declaration
function digaByeBye(flag) {
    console.log(`${flag} Bye Bye ...`);
}

// Function Expression
let digaTchau = function (flag) {
    console.log(`${flag} Tchau ...`);
}

digaByeBye('🇺🇸');
digaTchau('🇧🇷');

console.log('Fim do processamento.');