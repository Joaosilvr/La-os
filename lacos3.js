// exercicio 3
function juntarFrase(palavras) {
let fraseFinal = ''
for (let palavra of palavras) {
    fraseFinal += palavra + ' '
    }
return fraseFinal.trimEnd()
}
console.log(juntarFrase(['oi','sumido','tudo','bem?']));

  