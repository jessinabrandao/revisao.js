const notas = [1, 2, 4]


function calculoMedia (){
    let soma = 0
    for (let i = 0; i < notas.length; i++) {
        soma += notas[i]
    }

    const media = soma / notas.length
    return media

}

if (calculoMedia < 5){
    return console.log("Reprovado")
}

else if(calculoMedia ===5 && calculoMedia < 7){
    return console.log("Recuperação")
}

else{
    return console.log("Aprovado")
}

const resultado = calculoMedia()
console.log(resultado)




