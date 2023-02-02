const form = document.querySelector("#form")
const nameInput = document.querySelector("#name")
const emailInput = document.querySelector("#email")
const passwordInput = document.querySelector("#password")
const jobSelector = document.querySelector("#job")
const messageTextArea = document.querySelector("#message")

form.addEventListener("submit", (event) => {
 event.preventDefault()
 
 if(nameInput.value === ''){
  alert("Por favor, ppreencha seu nome.")
  return
 }

 if (emailInput.value === '' || !isEmailValid(emailInput.value)) {
  alert("Por favor, preencha seu email corretamente.")
  return
 }

 if (!validatePassword(passwordInput.value, 8)) {
  alert("A senha precisa ser no mínimo de 8 dígitos.")
  return
 }

 if(jobSelector.value === ''){
  alert("Por favor, selecione a sua situação.")
  return
 }

 if(messageTextArea.value === ''){
  alert("Por favor, escreva uma mensagem.")
  return
 }

 form.submit()
})

function isEmailValid(email){
  const emailRegex = new RegExp(
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
  )

  if(emailRegex.test(email)){
    return true
  }

  return false
}

function validatePassword(password, minDigits) {
  if (password.length >= minDigits) {
    return true
  }

  return false
}