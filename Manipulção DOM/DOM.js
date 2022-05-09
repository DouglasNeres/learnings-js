function click() {

let num1 = document.getElementById('num1')
let num2 = document.getElementById('num2')
let resultado = document.getElementById('result')
let nn1 = Number(num1.value)
let nn2 = Number(num2.value)
let valor = nn1+nn2

resultado.innerText = `A soma entre o número: ${nn1} e o ${nn2} é igual a: ${valor}`
}

var a = document.getElementById('area')
a.addEventListener('click', clicar)
a.addEventListener('mouseenter', entrar)
a.addEventListener('mouseout', sair)

function clicar(){
    a.innerText = 'ÓTIMO!'
    a.style.background = 'cyan'
}

function entrar(){
    a.innerText = 'Bom?'
    a.style.background = 'green'
}

function sair(){
    a.innerText = 'Ruim?'
    a.style.background = 'gray'
}
