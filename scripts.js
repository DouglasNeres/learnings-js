//Declarações iniciais teste.
/*
  let nome = 'Douglas'
let idade = '16' 
let cidade = 'Crateús'
let sonho = 'Técnico da Informação'

document.write('Olá ' + nome + ' Que atualmente tem: ' + idade + ' anos, reside na cidade ' + cidade + ' e além de tudo sonha em ser ' + sonho + '!')  

//Utilização de alguns conceitos das aualas JS.

let nome = prompt('Digite seu Nome: ')
let nascimento = Number(prompt('Em que ano você nasceu?'))
let idade = (2022-nascimento)
let profissional = prompt('Trabalha em que profissão: ')
let ganho = Number(prompt('Quanto deseja receber?'))

document.write(`Olá, <strong>${nome}</strong>! Seu nome possui ${nome.length} letras, podem ser maiúsculas como: ${nome.toUpperCase()}, ou minúsculas como: ${nome.toLowerCase()}. Tendo, ${idade} anos. <br/> Tem a Profissão de <strong>${profissional}</strong>.<br/>`)
document.write('Deseja receber um total de <strong>' + ganho.toLocaleString('pr-BR', {style: 'currency', currency: 'USD'})+ '</strong>') 

//Operadores teste. E outros testes no NodeJS.

let obj1 = Number(prompt('Diga um número:'))
let obj2 = Number(prompt('Escolha outro número:'))
let adição = obj1 + obj2
let subtração = obj1 - obj2 
let multiplicação = obj1 * obj2
let divisãoReal = obj1 / obj2
let divisãoInteira = obj1 % obj2
let potencia1 = obj1**2
let potencia2 = obj2**2

document.write(`A Adição dos seus números é igual a: ${adição}, a Subtração: ${subtração}, a Multiplicação: ${multiplicação}, a Divisão Real: ${divisãoReal}, a Divisão Inteira: ${divisãoInteira} o primeiro número ao quadrado: ${potencia1} e o segundo número ao quadrado: ${potencia2} !!`)

/*--ESTUDOS DOM--*/
let titulo = document.querySelector('.titulo')
let a = document.getElementsByTagName('h3')
let subtitulo = document.getElementById('subti')
titulo.style.background = 'cyan'
document.write('Execução: ', a.innerText = 'DOM <br>')
document.write('Utilizando alguns conceitos DOM: ', subtitulo.innerText)

