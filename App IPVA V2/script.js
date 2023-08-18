const aliquotas = [
    { uf: 'Escolha uma UF', sigla: 'SO', carros: 0, motos: 0, caminhoes: 0 },
    { uf: 'Acre', sigla: 'AC', carros: 2, motos: 1, caminhoes: 1 },
    { uf: 'Alagoas', sigla: 'AL', carros: 3, motos: 3.25, caminhoes: 1 },
    { uf: 'Amapá', sigla: 'AP', carros: 3, motos: 3, caminhoes: 1.5 },
    { uf: 'Amazonas', sigla: 'AM', carros: 3, motos: 3, caminhoes: 2 },
    { uf: 'Bahia', sigla: 'BA', carros: 2.5, motos: 2.5, caminhoes: 2.5 },
    { uf: 'Ceará', sigla: 'CE', carros: 2.5, motos: 2.5, caminhoes: 2 },
    { uf: 'Distrito Federal', sigla: 'DF', carros: 2, motos: 2, caminhoes: 1 },
    { uf: 'Espírito Santo', sigla: 'ES', carros: 2, motos: 2, caminhoes: 1 },
    { uf: 'Goiás', sigla: 'GO', carros: 3.75, motos: 3.45, caminhoes: 3 },
    { uf: 'Maranhão', sigla: 'MA', carros: 2.5, motos: 2.5, caminhoes: 2 },
    { uf: 'Minas Gerais', sigla: 'MG', carros: 4, motos: 3, caminhoes: 2 },
    { uf: 'Mato Grosso', sigla: 'MT', carros: 3, motos: 2.5, caminhoes: 2.5 },
    { uf: 'Mato Grosso do Sul', sigla: 'MS', carros: 3, motos: 3, caminhoes: 2 },
    { uf: 'Pará', sigla: 'PA', carros: 2.5, motos: 2.5, caminhoes: 1 },
    { uf: 'Paraíba', sigla: 'PB', carros: 2.5, motos: 2.5, caminhoes: 2.5 },
    { uf: 'Paraná', sigla: 'PR', carros: 3.5, motos: 3.5, caminhoes: 3.5 },
    { uf: 'Pernambuco', sigla: 'PE', carros: 2.5, motos: 2.5, caminhoes: 2 },
    { uf: 'Piauí', sigla: 'PI', carros: 2.5, motos: 2.5, caminhoes: 2 },
    { uf: 'Rio de Janeiro', sigla: 'RJ', carros: 4, motos: 3, caminhoes: 2 },
    { uf: 'Rio Grande do Norte', sigla: 'RN', carros: 3, motos: 3, caminhoes: 1.5 },
    { uf: 'Rio Grande do Sul', sigla: 'RS', carros: 3, motos: 3, caminhoes: 2 },
    { uf: 'Rondônia', sigla: 'RO', carros: 3, motos: 3, caminhoes: 2 },
    { uf: 'Roraima', sigla: 'RR', carros: 3, motos: 2, caminhoes: 2 },
    { uf: 'Santa Catarina', sigla: 'SC', carros: 2, motos: 2, caminhoes: 1 },
    { uf: 'Sergipe', sigla: 'SE', carros: 3, motos: 2.5, caminhoes: 2 },
    { uf: 'São Paulo', sigla: 'SP', carros: 4, motos: 2, caminhoes: 2 },
    { uf: 'Tocantins', sigla: 'TO', carros: 2, motos: 3, caminhoes: 2 },
]

let model = null;

/**
 * selectEmoji - Troca as classes do CSS para os botões.
 * @param {string} emojiId 
 */
function selectEmoji(emojiId) {
    const emojiButtons = document.querySelectorAll('.emoji-button');
    emojiButtons.forEach(button => {
        if (button.id === emojiId) { // o botão é o que eu selecionei?
            button.classList.add('selected'); // Adiciono estilo CSS de selected.
        } else {
            button.classList.remove('selected'); // Retiro estilo CSS de selected.
        }
    });
    model = emojiId;
    clearAllSelects(['selMarcas', 'selModelos', 'selModelosAno', 'selUF']);
    fillSelectUF();
}

/**
 * Preenche o select com as UFs e os valores de percentual do IPVA 
 * para o modelo escolhido, carro, moto ou caminhão.
 */
function fillSelectUF() {
    const selUF = document.getElementById('selUF');
    aliquotas.forEach(aliquota => {
        const option = document.createElement('option');
        option.text = aliquota.uf;
        option.value = aliquota[model];
        selUF.add(option);
    });
}

/**
 * clearAllSelects - apaga todos os objetos selects enviados no array
 * @param {array de strings} selects 
 */
function clearAllSelects(selects) {
    selects.forEach(select => {
        document.querySelectorAll(`#${select} option`).forEach(option => option.remove());
    })
}