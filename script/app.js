var nasc =  1991;
let nome =  "Clermesson";
const viva = true;

function calcidade(ano=2026){
    let idade = ano - nasc;

    if (idade < 18){
       let menor = true;
    }else{
        let menor = false;
    }
   alert(`${nome} è menor de idade?? ${menor} \nIdade: ${idade}`)
    return idade;
}
calcidade();
alert(`Fora da funcao : idade ${idade}`);
alert(`fora da funcao: chamado calciade ${calcidade(2027)}`)