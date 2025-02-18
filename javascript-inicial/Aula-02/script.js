const primeiro = 10 
const segundo = 2
const terceiro = 5

function soma(){
    printText()
    var res = segundo + terceiro
    return "resultado: " + segundo + " + " + terceiro + " é " + (segundo + terceiro)
}

function printText(){
    console.log("esta é uma função de soma ")
}

console.log(soma())

function somarComParametro(n1, n2, n3){
    return "O resultado de " + n1 + " + " + n2 + " + " + n3 + " é igual a: " + (n1 + n2 + n3)
}

console.log(somarComParametro(primeiro, segundo, terceiro))

