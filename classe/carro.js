class Carro {
    constructor(marca, cor, gastoKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoKm = gastoKm;
    }

    calcularGastoDePercurso(distancia, precoCombustivel) {
        return distancia * this.gastoKm * precoCombustivel;
    }
}

const uno = new Carro("Fiat", "Branco", 1 / 12);
console.log(uno.calcularGastoDePercurso(70, 5));