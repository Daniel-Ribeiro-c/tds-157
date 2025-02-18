function somar(){
    var numero1 = parseFloat(document.getElementById("n1").value)
    var numero2 = parseFloat(document.getElementById("n2").value)
    var res = document.getElementById("res")
    res.innerHTML = numero1 + numero2
    return res
}

function subtracao(){
    var numero3 = parseFloat(document.getElementById("n3").value)
    var numero4 = parseFloat(document.getElementById("n4").value)
    var resu = document.getElementById("resu")
    resu.innerHTML = numero3 - numero4
    return resu
}


function multiplicacao(){
    var numero5 = parseFloat(document.getElementById("n5").value)
    var numero6 = parseFloat(document.getElementById("n6").value)
    var resul = document.getElementById("resul")
    resul.innerHTML = numero5 * numero6
    return resul
}

function divisao(){
    var numero7 = parseFloat(document.getElementById("n7").value)
    var numero8 = parseFloat(document.getElementById("n8").value)
    var result = document.getElementById("result")
    result.innerHTML = numero7 / numero8
    return result
}