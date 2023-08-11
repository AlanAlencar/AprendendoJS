/**
 * script.js
 * @author Alan Alencar
 * @description consultar API da parallelum para buscar dados da tabela FIPE
 * @remarks Obrigado Deivid Fortuna.
 */

const preencheMarcas = () => {
    const url = 'https://parallelum.com.br/fipe/api/v1/carros/marcas';
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
    const url = `https://parallelum.com.br/fipe/api/v1/carros/marcas/${idMarca}/modelos`;
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
    const url = `https://parallelum.com.br/fipe/api/v1/carros/marcas/${idMarca}/modelos/${idModelo}/anos`;
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
    const url = `https://parallelum.com.br/fipe/api/v1/carros/marcas/${idMarca}/modelos/${idModelo}/anos/${idAno}`;
    fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(resultado => {
        document.getElementById('fldMarca').value = resultado.Marca;
        document.getElementById('fldModelo').value = resultado.Modelo;
        document.getElementById('fldAnoModelo').value = resultado.AnoModelo;
        document.getElementById('fldCombustivel').value = resultado.Combustivel;
        document.getElementById('fldValor').value = resultado.Valor;

        const valorVeiculo = parseFloat(resultado.Valor
            .toUpperCase()
            .replace('R$', '')
            .replaceAll('.', '')
            .replace(',', '.'));
        document.getElementById('fldIPVA').value = `R$ ${(valorVeiculo * 0.04).toLocaleString('pt-BR')}`;
    })
    .catch(err => {
        console.error(`💀 algo deu errado: ${err}`);
    });
}

document.getElementById('selModelosAno').addEventListener('change', function() {
    const idAno = this.value;
    const idModelo = document.getElementById('selModelos').value;
    const idMarca = document.getElementById('selMarcas').value;
    exibeIPVA(idMarca, idModelo, idAno);
})

document.getElementById('selModelos').addEventListener('change', function() {
    const idModelo = this.value;
    const idMarca = document.getElementById('selMarcas').value;
    document.querySelectorAll('#selModelosAno option').forEach(option => option.remove()); 
    preencherAnos(idMarca, idModelo);
})

document.getElementById('selMarcas').addEventListener('change', function() {
    const idMarca = this.value;
    document.querySelectorAll('#selModelos option').forEach(option => option.remove());   
    preencherModelos(idMarca);
})

// Iniciando.
preencheMarcas();