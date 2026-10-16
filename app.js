const balu = {
  nome:"Balu Epstein",
  cor:"Branco",
  altura:0.58,
  peso:11.5,
  raca:"Epstein",
  latir(){
    alert("au au");
  },
  comer(kg){
    this.peso = this.peso + kg;
  },
  cagar(kg){
    this.peso = this.peso - kg;
  },
  saudar(){
    let msg = `Hello i am ${this.nome}\n`;
    msg = msg+`cor: ${this.cor} raça:${this.raca}\n`
    msg  = msg+`peso: ${this.peso}\n`
    msg  = msg+`Altura: ${this.altura}\n`
    alert(msg)


  }
}
