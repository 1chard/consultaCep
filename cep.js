'use strict'

const pesquisarCep = async cep => {
    const request = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    const json = await request.json()
    return json;
}

document.getElementById('cep').addEventListener('change', async(e) => {    
    if(/^[0-9]{5}-?[0-9]{3}$/.test(e.target.value)){
        const infoCep = await pesquisarCep(e.target.value);

        document.getElementById('endereco').value = infoCep.logradouro
        document.getElementById('bairro').value = infoCep.bairro
        document.getElementById('cidade').value = infoCep.localidade
        document.getElementById('estado').value = infoCep.uf
    }
    else
        alert('erro')
})