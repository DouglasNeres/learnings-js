function Acess(event) {
  
    event.preventDefault();
    var senha = document.getElementsByName('senha')[0].value;
    senha = senha.toLowerCase();
  
    if (senha == "rayninda") {
      alert("Acertoouuu❤❤❤❤❤❤❤!!");
      window.location = "amostra.html";
    }
    else{
      alert("Errado, tente novamente!");
    }
  }