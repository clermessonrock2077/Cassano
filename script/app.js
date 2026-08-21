var nasc =  1991;
let nome =  "Clermesson";
const viva = true;

function calcidade(ano=2026){
    let idade = ano - nasc;
    alert(`Dentro de função - idade ${idade}`);
    return idade;
}
calcidade();
alert(`Fora da funcao : idade ${idade}`);
alert(`fora da funcao: chamado calciade ${calcidade(2027)}`)