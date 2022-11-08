function returnValue(content) {
    if (!("error" in content)) {
        document.getElementById('rua').value = (content.logradouro)
        document.getElementById('complemento').value = (content.complemento)
        document.getElementById('bairro').value = (content.bairro)
        document.getElementById('localidade').value = (content.localidade)
        document.getElementById('uf').value = (content.uf)
        document.getElementById('ddd').value = (content.ddd)
        document.getElementById('ibge').value = (content.ibge)
        document.getElementById('gia').value = (content.gia)
        document.getElementById('siafi').value = (content.siafi)

    } else {
        alert("CEP NOT FOUND!")
    }
}

function queryCEP(value) {
    let cep = value.replace(/\D/g, '')

    if (cep != "") {
        let validateCEP = /^[0-9]{8}$/
        if (validateCEP.test(cep)) {
            document.getElementById('rua').value = "..."
            let script = document.createElement('script')
            script.src = `https://viacep.com.br/ws/${cep}/json/?callback=returnValue`
            document.body.appendChild(script)
        } else {
            alert("Invalid Format!")
        }
    }
}

    if (queryCEP === queryCEP.reload) {
        queryCEP = ''
    }