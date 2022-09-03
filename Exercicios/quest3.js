//3 – Peça ao usuário para digitar 5 números em uma caixa de texto. Verifique qual é o maior número e exiba-o.
let num1 = Number(prompt('1° número:'))
let num2 = Number(prompt('2° número:'))
let num3 = Number(prompt('3° número:'))
let num4 = Number(prompt('4° número'))
let num5 = Number(prompt('5° número:'))

//Primeira forma usando Math.max
var max = Math.max(num1, num2, num3, num4, num5);
document.write(`O maior número é: ${max}`)

//Segunda forma Usando If
//Diferenças
/*
if (num1 > num2 && num1 > num3 && num1 > num4 && num1 > num5) {
    document.write(`O primeiro número: ${num1},é o MAIOR!`)
}

if (num2 > num1 && num2 > num3 && num2 > num4 && num2 > num5) {
    document.write(`O segundo número: ${num2},é o MAIOR!`)
}

if (num3 > num1 && num3 > num2 && num3 > num4 && num1 > num5) {
    document.write(`O terceiro número: ${num3},é o MAIOR!`)
}

if (num4 > num1 && num4 > num2 && num4 > num3 && num4 > num5) {
    document.write(`O quarto número: ${num4},é o MAIOR!`)
}

if (num5 > num1 && num5 > num2 && num5 > num3 && num5 > num4) {
    document.write(`O quinto número: ${num5},é o MAIOR!`)
}


//Igualdades
if (num1 === num2 && num2 === num3 && num3 === num4 && num4 === num5) {
    document.write(`Todos são iguais!`)
} */

