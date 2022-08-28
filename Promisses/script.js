//Criação de promessa

const myPromisse = new Promise((resolve, reject) => {

    const nome = "Douglas"

    if (nome === "Douglas") {
        resolve('Usuário Douglas Encontrado!')
    } else {
        reject('O usuário Douglas não foi Encontrado!')
    }
});

myPromisse.then((data) => {
    console.log(data)
})

//Encadeamentode then's

const myPromisseTwo = new Promise((resolve, reject) => {

    const nome = "Douglas"

    if (nome === "Douglas") {
        resolve('Usuário Douglas Encontrado!')
    } else {
        reject('O usuário Douglas não foi Encontrado!')
    }
});

myPromisseTwo.then((data) => {
    return data.toLowerCase()
}).then((stringModificada) => {
    console.log(stringModificada)
})

//Retorno do Catch
const myPromisseTree = new Promise((resolve, reject) => {

    const nome = "Julian"

    if (nome === "Douglas") {
        resolve('Usuário Douglas Encontrado!')
    } else {
        reject('O usuário Douglas não foi Encontrado!')
    }
});

myPromisseTree.then((data) => {
    console.log(data)
}).catch((err) => {
    console.log(`Aconteceu um erro: ${err}`)
})

//Resolução de várias promessas 
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('P1, OK! Timeout')
    }, 2000)
})

const p2 = new Promise((resolve, reject) => {
    resolve('P2, OK!')
})

const p3 = new Promise((resolve, reject) => {
    resolve('P3, OK!')
})

const resolveAll = Promise.all([p1, p2, p3]).then((data) => {
    console.log(data)
})

console.log("After All()")

//Várias Promessas com Race

const p4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('P4, OK! Timeout')
    }, 2000)
})

const p5 = new Promise((resolve, reject) => {
    resolve('P5, OK!')
})

const p6 = new Promise((resolve, reject) => {
    resolve('P6, OK!')
})

const resolveAllRace = Promise.race([p4, p5, p6]).then((data) => {
    console.log(data)
})

//Fetch request na API do GitHub
//Fetch API

const userName = 'DouglasNeres'

fetch(`https://api.github.com/users/${userName}`, {
    method: 'GET',
    headers: {
        Accept: 'application/vnd.github.v3+json',
    },
}).then((response) =>{
    console.log(typeof response)
    console.log(response)
    return response.json()
}).then((data) =>{
    console.log(`O nome do Usuário é: ${data.name}`)
}).catch((err) =>{
    console.log(`Houve algum Erro: ${err}`)    
})
