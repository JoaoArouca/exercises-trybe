function geraEstados () {
    let estados = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul',
'Minas Gerais', 'Pará', 'Paraíba' ,'Paraná', 'Pernambuco', 'Piauí Rio de Janeiro',
'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina',
'São Paulo', 'Sergipe', 'Tocantins'];
    for (let index = 0; index < estados.length; index++) {
        let select = document.getElementById('brasil-states');
        let makeOptions = document.createElement("option");
        makeOptions.innerText = estados[index];
        select.appendChild(makeOptions);
    }
}

window.onload = geraEstados;
