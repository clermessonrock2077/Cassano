let nasc = prompt("Digite seu ano de nascimento:");
nasc = perseInt(nasc);

let viva = confirm("Se está viva, clique ok")

if (viva){
    alert(`Você tem ${2026-nasc} anos.`)
} else{
    alert("Você morreu")
}