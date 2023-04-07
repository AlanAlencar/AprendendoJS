/**
 * diaUtil.js
 * @author Alan Alencar
 * @description Analisa uma string com switch para saber se é dia útil ou não.
 * @remarks Regras:
 *          Dia útil: "Hoje é dia de trabalhar."
 *          Dia não útil: "Tenha um ótimo descanso."
 *          🤩 Terça-feira será considerado feriado. 
 */

const DIA_DA_SEMANA = 'Quinta';

// instrução switch para decidir mensagem.
switch (DIA_DA_SEMANA) {
    case 'Segunda':
    case 'Segunda-feira':
    case 'Quarta':
    case 'Quarta-feira':
    case 'Quinta':
    case 'Quinta-feira':
    case 'Sexta':
    case 'Sexta-feira':
        console.log(`${DIA_DA_SEMANA}, Hoje é dia de trabalhar.`);
        break;
    case 'Terça':
    case 'Terça-feira':
    case 'Sábado':
    case 'Domingo':
        console.log(`${DIA_DA_SEMANA}, Tenha um ótimo descanso.`);
        break;
    default:
        console.log(`${DIA_DA_SEMANA}, não é um dia conhecido.`);
}

// FIM: Alan Alencar