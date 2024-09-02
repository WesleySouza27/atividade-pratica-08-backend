const nomes = []

for (let i = 1; i <= 5; i++) {
    let inserirNomes = prompt(`digite o ${i}° nome`)
    nomes.push(inserirNomes)
}


document.write('nomes em ordem direta: <br>')
document.write('<br>')
for (let i = 0; i < nomes.length; i ++) {
    document.write(nomes[i] + ', ')
}

document.write('<br>')
document.write('<br>')

document.write('nomes em ordem reversa: <br>')
document.write('<br>')
for (let i = nomes.length - 1; i >= 0; i--) {
    document.write(nomes[i] + ', ')
}

