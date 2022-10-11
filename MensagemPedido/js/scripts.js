//Login
function Acess(event) {

  event.preventDefault();
  var name = document.getElementsByName('name')[0].value;
  var favorite = document.getElementsByName('favorite')[0].value;
  var senha = document.getElementsByName('senha')[0].value;

  if (name == "raissa" && favorite == "sorvete" && senha == "roxo") {
    alert("Acertoouuu❤!!");
    window.location = "tela.html";
  }
  else {
    alert("Errado, tente novamente!");
  }
}

//Carrossel
const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");

let idx = 0;
function carrossel() {
  idx++;

  if (idx > img.length - 1) {
    idx = 0;
  }

  imgs.style.transform = `translateX(${-idx * 500}px)`;
}

setInterval(carrossel, 1200);

//função clicar do botao

let r = document.getElementById("btn")
r.addEventListener("click", btt)

function btt(alert) {
  alert(`
  Ray, eu quero te dizer que hoje eu sou muito feliz com você, nunca ninguém cuidou tão bem de mim como você cuida, o Douglas escolheu muito bem ao me deixar com você, quando ele fala ao seu respeito é mais do que claro do quanto ele é sincero, verdadeiro e de como você é surpreendente...
  Que o senhor permita isso pra sempre, não quero sair mais dos seus cuidados kkkkk muito obrigado, por mesmo em dias de confusão, onde eu acabo me pertubando, você me acalma e me traz amor.
  EU TE AMO!`)
}