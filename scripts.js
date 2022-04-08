/*  let nome = 'Douglas'
let idade = '16' 
let cidade = 'Crateús'
let sonho = 'Técnico da Informação'

document.write('Olá ' + nome + ' Que atualmente tem: ' + idade + ' anos, reside na cidade ' + cidade + ' e além de tudo sonha em ser ' + sonho + '!')  
 
let nomes = []

while (nomes.length < 5) {
    let a = prompt('Digite os Nomes:')
    nomes.push(a)
}
document.write(`Os nome informados são: ${nomes}`)
 */
let nome = prompt('Digite seu Nome: ')
let nascimento = Number(prompt('Em que ano você nasceu?'))
let idade = (2022-nascimento)
let profissional = prompt('Trabalha em que profissão: ')
let ganho = Number(prompt('Quanto deseja receber?'))

document.write(`Olá, <strong>${nome}</strong>! Seu nome possui ${nome.length} letras, podem ser maiúsculas como: ${nome.toUpperCase()}, ou minúsculas como: ${nome.toLowerCase()}. Tendo, ${idade} anos. <br/> Tem a Profissão de <strong>${profissional}</strong>.<br/>`)
document.write('Deseja receber um total de <strong>' + ganho.toLocaleString('pr-BR', {style: 'currency', currency: 'BRL'})+ '</strong>') 