const combustivel = 5.79
const gastoKm = 12
const distanciaKm = 1580

function mediaKm(){
    return (combustivel / gastoKm) * distanciaKm
}

const calculo = mediaKm()

console.log(calculo)