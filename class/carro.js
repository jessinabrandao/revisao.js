class carro{
    marca;
    cor;
    gastoKm;

    constructor(marca, cor, gastoKm){
        this.marca = marca
        this.cor = cor
        this.gastoKm = gastoKm
    }

    calcularGasto(distanciaKm, precoCombustivel){
        return distanciaKm * this.gastoKm * precoCombustivel
    }
}

const ford = new carro("ford", "branco", 1 / 12)
console.log(ford.calcularGasto(70, 5))