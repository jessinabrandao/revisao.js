const anoNascimento = 2000
const anoAtual = 2024

function calcularAno(anoNascimento, anoAtual){
    return anoAtual - anoNascimento
}

const idadePessoa = calcularAno(anoNascimento, anoAtual)
console.log(idadePessoa)

