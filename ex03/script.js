let numerosPerfeitos = []

let numeroAtual = 1
while (numerosPerfeitos.length < 4) {
    let soma = 0
    for (let i = 1; i <= numeroAtual / 2; i++) {
        if (numeroAtual % i === 0) {
            soma += i
        } 
    }
    if (soma === numeroAtual) {
        numerosPerfeitos.push(' ' + numeroAtual)
    }
    numeroAtual++
    
}

document.write(`Estes são os 4 primeiros numeros perfeitos:  ${numerosPerfeitos}`)