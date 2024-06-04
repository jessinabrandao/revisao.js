const precoEtanol = 5.79
const precoGasolina = 6.90
const gatoKm = 12
const distanciaKm = 1580
const escolha = precoEtanol

function calculoPreco(){
    if (escolha === precoEtanol){
        return (precoEtanol / gatoKm) * distanciaKm
    }

    else{
        return (precoGasolina / gastoKm) * distanciaKm
    }
}

const resultado = calculoPreco()
console.log(resultado)


