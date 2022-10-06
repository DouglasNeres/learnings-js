//Login
function Acess(event) {
  
    event.preventDefault();
    var senha = document.getElementsByName('senha')[0].value;
    senha = senha.toLowerCase();
  
    if (senha == "rayninda") {
      alert("Acertoouuu❤!!");
      window.location = "tela.html";
    }
    else{
      alert("Errado, tente novamente!");
    }
  }

  //Carrossel
  const imgs = document.getElementById("img");
  const img = document.querySelectorAll("#img img");
  
  let idx = 0;
  function carrossel() {
      idx++;
  
      if(idx > img.length - 1){
          idx = 0;
      }
  
      imgs.style.transform = `translateX(${-idx * 500}px)`;
  } 
  
  setInterval(carrossel, 1200);