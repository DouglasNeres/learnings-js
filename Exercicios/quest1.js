//1 – Calcule a média de diversas notas digitadas pelo usuário.
let nota1 = Number(prompt('Digite a primeira nota:'))
let nota2 = Number(prompt('Digite a segunda nota:'))
let nota3 = Number(prompt('Digite a terceira nota:'))

const media = ((nota1 + nota2 + nota3)/3).toFixed(2)
document.write(`A média as três notas é igual a: ${media}`)

