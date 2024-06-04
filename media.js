const notas = [1, 2, 4];

function calculoMedia() {
    let soma = 0;
    for (let i = 0; i < notas.length; i++) {
        soma += notas[i];
    }
    const media = soma / notas.length;
    return media;
}

const resultado = calculoMedia();
console.log("Média: ${resultado}");

if (resultado < 5) {
    console.log("Reprovado");
} else if (resultado >= 5 && resultado < 7) {
    console.log("Recuperação");
} else {
    console.log("Aprovado");
}
