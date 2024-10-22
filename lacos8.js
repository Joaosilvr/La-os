// exercicio 8

// A
let arrayOriginal = [1,2,3,4,5,6,7,8,9,10]

function imprimirArray(numerosA) {
    for(let i = 0; i < numerosA.length; i++) {
        console.log(numerosA[i]);
    }   
}
// imprimirArray(arrayOriginal)

// B

function dividirArray(numerosDivi){
    for(let i = 0; i < numerosDivi.length; i++) {
        console.log(numerosDivi[i] / 10);
    }
}
// dividirArray(arrayOriginal)

// C 

function ArrayPares(numerosPares) {
    let novoArray = []
    for(let i = 0; i < numerosPares.length; i++) {
        if (numerosPares[i] % 2 == 0) {
            novoArray.push(numerosPares[i])
        }
        
    }
    console.log(novoArray);
}
// ArrayPares(arrayOriginal)

// D 

function arrayString(arrayString) {
    let novoArray = []

    for(let i = 0; i < arrayString.length; i++) {
        novoArray.push([`O elemento do índex ${i} é: ${arrayOriginal[i]}.`])
    }
    console.log(novoArray);
    
}
arrayString(arrayOriginal)

// E 

function maiorMenorDaString(array) {
    let maior = array[0]
    let menor = array[0]

    for(let i = 0; i < array.length; i++) {
        if (array[i] > maior) {
            maior = array[i]
        }
    }

    for(let i = 0; i < array.length; i++) {
        if (array[i] < menor) {
            menor = array[i]
        }
    }
    console.log('Maior númerio', maior);
    console.log('Menor númerio', menor);

}

maiorMenorDaString(arrayOriginal)