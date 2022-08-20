//                      localStorage


// Inserindo Dado
// Restart sem perder Dados
localStorage.setItem("nome", "Douglas")

//Resgatar Item
const nome = localStorage.getItem("nome", "Douglas")
console.log(nome)

//Resgatar Item que não existe
const lastName = localStorage.getItem("lastname")
console.log(lastName)

if (!lastName){
    console.log("Sem Sobrenome!")
}

//Remover Item 
localStorage.removeItem("nome")

//Limpar todos os Itens

localStorage.setItem("A", 1)
localStorage.setItem("B", 2)
//console.log(typeof localStorage.getItem("A"))

localStorage.clear()

//                   sessionStorage


//Restart perdendo Dados

sessionStorage.setItem("number", 22)

//Resgatar Item
const i = sessionStorage.getItem("number")
console.log(i)

//Remover Item
sessionStorage.removeItem("number")

//Limpar todos os Itens
sessionStorage.clear()

//Salvar Objetos 
const person = {
    name: "Douglas",
    age: 17,
    job: "Developer"
}
//Forma Errada
//localStorage.setItem("person", person)

//Forma certa
localStorage.setItem("person", JSON.stringify(person))

//Resgatando Object
const getPerson = localStorage.getItem("person")
console.log(getPerson)

//Apenas algo específico do Object
const personObject = JSON.parse(getPerson)
console.log(typeof personObject)

console.log(personObject.job)