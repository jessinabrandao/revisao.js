class pessoa{

    constructor(nome, peso, altura){
        this.nome = nome
        this.peso = peso
        this.altura = altura
    }
    
    calcularImc(){
        return this.peso / (this.altura * this.altura)
    }

}

const jose = new pessoa ("José" , 65, 1.65)
console.log(jose.calcularImc())