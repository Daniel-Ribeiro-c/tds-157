function calcular(id1, id2, respId, operador){
// alert("Epa ta funcionando!")
var num1 = parseFloat(document.getElementById(id1).value)
var num2 = parseFloat(document.getElementById(id2).value)
var resultado
console.log(id1, id2, respId, operador, num1, num2)

switch (operador) {
    case '+':
        resultado = num1 + num2
        break;
        case '-':
            resultado = num1 - num2
        break;
        case '*':
            resultado = num1 * num2
        break;
        case '/':
            if(num2 !== 0){
                resultado = num1 / num2
            }else{
                resultado = "Erro: divisão por 0!!"
            }
        break;
    default: "Operador inválido"
        break;
}
document.getElementById(respId).textContent = formatNumber(resultado)
}

function formatNumber(x){
if(Number.isInteger(x)){
    return x
}else if(x !== "Erro: divisão por 0!!"){
    return x.Tofixed(2)
}else{
    return x
}
}