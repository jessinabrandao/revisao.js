let listNum = [9, 4, 2, 2]
let soma = 0

for (let i = 0; i < listNum.length; i++) {
    const valores = listNum[i];
    
    soma = soma + valores
}

function verificador(soma){
    if (soma % 2 === 0){
        return "A soma dos valores é PAR"
    }
    else {
        return "A soma dos Valores é IMPAR"
    }
}

const resultado = verificador(soma)
console.log(resultado)




