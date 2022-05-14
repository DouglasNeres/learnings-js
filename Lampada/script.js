const acender = document.getElementById('On')
const apagar = document.getElementById('Off')
const lampada = document.getElementById('lamp')

function isLamp() {
    return lamp.src.indexOf('quebrada') > -1
}

function isTransicao() {
    return lamp.src.indexOf('acesa') > -1
}


function lampOn() {
    if (!isLamp()) {
        lampada.src = './lampsImgs/acesa.png'

    }
}
function lampTransicao(params) {
    if (!isLamp()) {
        lampada.src = './lampsImgs/transicao.png'

    }

}

function lampOff() {
    if (!isLamp()) {
        lampada.src = './lampsImgs/apagada.png'
    }
}

function lampQuebrar() {
    lampada.src = './lampsImgs/quebrada.png'
}

acender.addEventListener('click', lampOn)
lampada.addEventListener('mouseover', lampTransicao)
lampada.addEventListener('mouseleave', lampOff)
apagar.addEventListener('click', lampOff)
lampada.addEventListener('dblclick', lampQuebrar)