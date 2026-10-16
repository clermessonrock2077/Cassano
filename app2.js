class Animal{
    constructor(n, c="desconhecido", a=0.0, p=0, r="Vira-Lata"){
        this.nome = n;
         this.cor = c;
         this.altura = a;
         this.peso = p;
        this.raca = r;
    }
    falar(){
        alert("oi");
    }
   comer(kg){
    this.peso = this.peso + kg;
    alert("Comi");
   }
   cagar(kg){
    this.peso = this.peso = kg;
    alert("Caguei");
   }
   saudar(){
        let msg = `Olá meu nome é ${this.nome}\n`;
        msg = msg+ `Cor: ${this.cor} Raça:${this.raca}\n`
        msg = msg+`Peso: ${this.peso}\n`
        msg = msg+`Altura: ${this.altura}\n`
        return msg;
   }
}
   class Cachorro extends Animal{
    constructor(n, c="desconhecido", a=0.0, p=0, r="Vira-Lata"){
        super(n,c,a,p,r);
        this.patas = 4;
    }
    falar(){
        alert("OH pôtencia");
    }
   }

   class Passaro extends Animal{
        constructor(n, c="desconhecido", a=0.0, p=0.0, r="desconhecido"){
            super(n,c,a,p,r);
        }
        falar(){
            alert("FIU FIU")
        }
   }
const Christian = new Animal("Christian Todi😎");
const mel = new Animal("Mel", "Amarelo", 1.10, 45, "Pitbulll");
const leleco = new Passaro("leleco Jhonson")