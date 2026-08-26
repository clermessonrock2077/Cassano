var nasc =  1991;
let nome =  "Clermesson";
const viva = true;

function calcidade(ano=2026){
    let idade = ano - nasc;
    let menor;
    if (idade < 18){
        menor = true;
       var podebeber = false;
    }else{
        menor = false;
        var podebeber = true
    }
   alert(`${nome} è menor de idade?? ${menor} \nIdade: ${idade}\npode beber:${podebeber}`)
    return idade;
}
calcidade();
alert(` pode beber: ${podebeber}`)
alert(`Fora da funcao : idade ${idade}`);
alert(`fora da funcao: chamado calciade ${calcidade(2027)}`)