const valores = [3, 8, 2]

let maior = 0

for (let i = 0; i < valores.length; i++) {
    if (valores[i] > maior){
        maior = valores[i]
    }
    
}

console.log(maior)