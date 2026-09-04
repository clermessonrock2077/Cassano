
let n1 = Number (prompt ("Digite um número "))
let n2 = Number (prompt ("Digite outro número "))

do {
    op = prompt ("Escolha uma opção:\n")
    msg = msg + "1 - Somar\n"
    msg = msg + "2 - Subtrair\n"
    msg = msg + "3 - Multiplicar\n"
    msg = msg + "4 - Dividir\n"
    msg = msg + "5 - Sair\n"
    op = prompt (msg);
    switch (op) {
        case "1":
            alert (`A soma de ${n1} + ${n2} é ${n1+n2}`);
            break;
        case "2":
            alert (`A subtração de ${n1} - ${n2} é ${n1-n2}`);
            break;  
        case "3":
            alert (`A multiplicação de ${n1} * ${n2} é ${n1*n2}`);
            break;
        case "4":
            alert (`A divisão de ${n1} / ${n2} é ${n1/n2}`);
            break;
        case "5":
            alert ("Até logo!");
            break;
        default:
            alert ("Opção inválida");
            break;
    }   
}while(op != "5");
