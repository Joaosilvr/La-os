// exercicio 7

let bichinhos = Number(prompt('Quantos bichinhos você tem?'))

if (bichinhos === 0) {
    console.log('Que pena! Você pode adotar um pet!');
} else {
    let nomebichinhos = []
    for(let i = 0; i < bichinhos; i++) {
        let nomes = prompt('digite o nome de seu bichinho')
        nomebichinhos.push(nomes)
    }
    console.log(nomebichinhos);
}
