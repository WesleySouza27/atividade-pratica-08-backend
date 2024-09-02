let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
let soma = 0

for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i]
}

document.write(`esta é a soma de todos os 20 elementos ${soma}`)