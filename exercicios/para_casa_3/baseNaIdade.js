/**
 * baseNaIdade.js
 * @author Alan Alencar
 * @description Analisa idade do usuário e mostra mensagem por faixa da idade como resposta.
 * @remarks Regras:
 *          Se a idade for menor que 18, exiba "Você é menor de idade"
 *          Se for maior ou igual a 18 e menor que 60, exiba "Você é adulto"
 *          Se for maior ou igual a 60, exiba "Você está na melhor idade agora.”
 */

const IDADE = 18; // associe a idade a verificar nesta constante.

if (IDADE < 18) { // primeira condição.
    console.log(`Com ${IDADE} anos, você é menor de idade.`);
} else if (IDADE >= 18 && IDADE < 60) { // segun da condição.
    console.log(`Com ${IDADE} anos, vocë é adulto.`);
} else { // não sendo nenhuma das duas, será esta.
    console.log(`Com ${IDADE} anos, você está na melhor idade agora.`);
}

// FIM: Alan Alencar