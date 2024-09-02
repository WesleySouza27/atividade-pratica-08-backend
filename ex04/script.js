const lista = [1 , 2, 3, 4, 5, 6, 7, 8, 9, 10]
let numero = parseInt(prompt('digite um numero inteiro'))
let achou = false

for (let i = 0; i < lista.length; i++) {
    if (numero === lista[i]) {
        document.write(`o numero esta na lista!`)
        achou = true
        break
    }   
}

if (!achou) {
    document.write(`o numero não esta na lista!`)
}