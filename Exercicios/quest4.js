let maior = 0;
let menor = 0;
while(true){
    let entrada = prompt("Digite Idades dos Usuários e quando terminar envie 'break'!")
    if(entrada=="break"){
        break;
    }
    entrada = Number(entrada);
    if(entrada>=18){
        maior++;
    }else{
        menor++;
    }
}

document.write(`${maior} maiores e ${menor} menores de 18 anos`);