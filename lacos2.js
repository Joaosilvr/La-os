// exercicio 2

function receberArray(numeros) {
    let maior = numeros[0]

    for (let i = 0; i < numeros.length; i++) {
        const valorAtual = numeros[i]    
        if(valorAtual > maior){
            maior = valorAtual
        }
    }
    return maior
}   

console.log(receberArray([1,2,5,7,39,3]));



 



function arrayM(num) {
    let maior1 = num[0]

    for(let i = 0; i < num.length; i++ ) {
        const valor = num[i] 
            if (valor > maior1) {
                maior1 = valor
            }
        }
    return maior1
}

console.log(arrayM([10,20,30,10,20,600]));