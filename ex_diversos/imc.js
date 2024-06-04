class pessoa{
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome
        this.peso = peso
        this.altura = altura
    }

    calcularImc(){
        return this.peso / (this.altura * this.altura)
    }
}

const jessina = new pessoa ("Jéssina", 65, 1.60)
console.log(jessina.calcularImc())