function somar(){
    var numero1 = parseFloat(document.getElementById("n1").value)
    var numero2 = parseFloat(document.getElementById("n2").value)
    var res = document.getElementById("res")
    res.innerHTML = numero1 + numero2
   
}

function subtracao(){
    var numero1 = parseFloat(document.getElementById("n3").value)
    var numero2 = parseFloat(document.getElementById("n4").value)
    var res = document.getElementById("resu")
    res.innerHTML = numero1 - numero2
 
}


function multiplicacao(){
    var numero1 = parseFloat(document.getElementById("n5").value)
    var numero2 = parseFloat(document.getElementById("n6").value)
    var res = document.getElementById("resul")
    res.innerHTML = numero1 * numero2

}

function divisao(){
    // document.getElementById("n8").style.border = "1px solid black"
    var numero1 = parseFloat(document.getElementById("n7").value)
    var numero2 = parseFloat(document.getElementById("n8").value)
    var res = document.getElementById("result")
    if(numero2 !== 0){
        res.innerHTML = (numero1 / numero2).toFixed(1)                

    }else{
        res.innerHTML = "Não é permitido divisão por 0"
        document.getElementById("n8").style.border = "2px solid red"
    }

}

function media(){
   
    var m1 = parseFloat(document.getElementById("m1").value)
    var m2 = parseFloat(document.getElementById("m2").value) 
    var m3 = parseFloat(document.getElementById("m3").value)
    var m4 = parseFloat(document.getElementById("m4").value)
    var m5 = parseFloat(document.getElementById("m5").value)
    var  media = document.getElementById("respMedia")
    var res = (m1 + m2 + m3 + m4 + m5) / 5
    var msg = document.getElementById("msg")
    
    if(res >= 7){
        media.textContent = res
        msg.textContent = "Passou"
        msg.style.color = "green";
    }else{
        media.textContent = res
        msg.textContent = "Reprovou"
        msg.style.color = "red"
    }
}

function calcular(){
    var numero1 = parseFloat(document.getElementById("n9").value)
    var numero2 = parseFloat(document.getElementById("n10").value)
    var resulta = document.getElementById("resIMC")
    var Resultado = numero2 / (numero1 * numero1)
    var msgt = document.getElementById("msgt")
    if(Resultado>= 40.0){
        resulta.textContent = Resultado.toFixed(1)
        msgt.textContent = "OBESIDADE GRAU 3"
        msgt.style.color = "red"
    }else if(Resultado<=39.9 && Resultado>=35.0){
        resulta.textContent = Resultado.toFixed(1)
        msgt.textContent = "OBESIDADE GRAU 2"
        msgt.style.color = "red"
    }else if(Resultado<=34.9 && Resultado>=30.0){
        resulta.textContent = Resultado.toFixed(1)
        msgt.textContent = "OBESIDADE GRAU 1"
        msgt.style.color = "orange"
    }else if(Resultado<=29.9 && Resultado>= 25.0){
        resulta.textContent = Resultado.toFixed(1)
        msgt.textContent = "SOBREPESO"
        msgt.style.color = "orange"
    }else if(Resultado<=24.9 && Resultado>= 18.6){
        resulta.textContent = Resultado.toFixed(1)
        msgt.textContent = "NORMAL"
        msgt.style.color = "green"
    }else if(Resultado <= 18.5){
        resulta.textContent = Resultado.toFixed(1)
        msgt.textContent = "ABAIXO DO NORMAL"
        msgt.style.color = "blue"
    }
    
}
function balada(){
    var numero1 = parseFloat(document.getElementById("n11").value)
    var resulta = document.getElementById("resBalada")
    var resultado = 2025 - numero1
    var msgtd = document.getElementById("msgtd")
    if(resultado < 18){
        resulta.textContent = resultado
        msgtd.textContent = "NÃO PODE ENTRAR XARÁ"
        msgtd.style.color = "red"
    }else{
        resulta.textContent = resultado
        msgtd.textContent = "Pode entrar lindão"
        msgtd.style.color = "green"
    }

}