const preencheMarcas = () => {
    const url = `https://parallelum.com.br/fipe/api/v1/${model}/marcas`;
    fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(marcas => {
        const selMarca = document.getElementById('selMarcas');
        marcas.forEach(marca => {
            const option = document.createElement('option');
            option.text = marca.nome;
            option.value = marca.codigo;
            selMarca.add(option);
        });
    })
    .catch(err => {
        console.error(`💀 algo deu errado: ${err}`);
    });
}

const preencherModelos = idMarca => {
    const url = `https://parallelum.com.br/fipe/api/v1/${model}/marcas/${idMarca}/modelos`;
    fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(modelos => {
        const selModelos = document.getElementById('selModelos');
        modelos.modelos.forEach(modelo => {
            const option = document.createElement('option');
            option.text = modelo.nome;
            option.value = modelo.codigo;
            selModelos.add(option);
        });
        selModelos.selectedIndex = 0;
    })
    .catch(err => {
        console.error(`💀 algo deu errado: ${err}`);
    });
}

const preencherAnos = (idMarca, idModelo) => {
    const url = `https://parallelum.com.br/fipe/api/v1/${model}/marcas/${idMarca}/modelos/${idModelo}/anos`;
    fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(anos => {
        const selModelosAno = document.getElementById('selModelosAno');
        anos.forEach(ano => {
            const option = document.createElement('option');
            option.text = ano.nome;
            option.value = ano.codigo;
            selModelosAno.add(option);
        });
        selModelosAno.selectedIndex = 0;
    })
    .catch(err => {
        console.error(`💀 algo deu errado: ${err}`);
    });
}

const exibeIPVA = (idMarca, idModelo, idAno) => {
    const url = `https://parallelum.com.br/fipe/api/v1/${model}/marcas/${idMarca}/modelos/${idModelo}/anos/${idAno}`;
    fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(resultado => {
        const aliquota = parseFloat(document.getElementById('selUF').value);
        document.getElementById('fldValor').value = resultado.Valor;
        document.getElementById('fldAliquota').value = aliquota + '%';

        const valorVeiculo = parseFloat(resultado.Valor
            .toUpperCase()
            .replace('R$', '')
            .replaceAll('.', '')
            .replace(',', '.'));

        document.getElementById('valor').textContent = `R$ ${(valorVeiculo * (aliquota / 100)).toLocaleString('pt-BR', { maximumFractionDigits: 2 })}`;
    })
    .catch(err => {
        console.error(`💀 algo deu errado: ${err}`);
    });
}

/**
 * Event Listener para o Select de Modelos/Ano.
 * Sempre que for selecionado uma opção vai Calcular o IPVA.
 */
document.getElementById('selModelosAno').addEventListener('change', function() {
    const idAno = this.value;
    const idModelo = document.getElementById('selModelos').value;
    const idMarca = document.getElementById('selMarcas').value;  
    exibeIPVA(idMarca, idModelo, idAno);
})

/**
 * Event Listener para o Select de Modelos.
 * Sempre que for selecionado uma opção vai disparar a carga
 * da api e preencher o select de Modelos/Ano.
 */
document.getElementById('selModelos').addEventListener('change', function() {
    const idModelo = this.value;
    const idMarca = document.getElementById('selMarcas').value;
    clearAllSelects(['selModelosAno']);   
    preencherAnos(idMarca, idModelo);
})

/**
 * Event Listener para o Select de Marcas.
 * Sempre que for selecionado uma opção vai disparar a carga
 * da api e preencher o select de Modelos.
 */
document.getElementById('selMarcas').addEventListener('change', function() {
    const idMarca = this.value;
    clearAllSelects(['selModelos', 'selModelosAno']);   
    preencherModelos(idMarca);
})

/**
 * Event Listener para o Select de UF.
 * Sempre que for selecionado uma opção vai disparar a carga
 * da api e preencher o select de Marcas.
 */
document.getElementById('selUF').addEventListener('change', function() {
    preencheMarcas();
})