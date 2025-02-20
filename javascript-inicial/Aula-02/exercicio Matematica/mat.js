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
    var resultado = document.getElementById("resIMC")
    var mensagem = document.getElementById("msgt")
    var IMC = numero2 / (numero1 * numero1)
   
    
    if(isNaN(numero1) || isNaN(numero2)){
        resultado.textContent= "Digite apenas números"
        resultado.style.color = "red"
        document.getElementById("mensagem").textContent = " "
        return
    }
    resultado.textContent = IMC.toFixed(2)
    if(IMC>= 40.0){
       mensagem.textContent = "OBESIDADE GRAU 3"
       mensagem.style.color = "red"
    }else if(IMC<=39.9 && IMC>=35.0){
       mensagem.textContent = "OBESIDADE GRAU 2"
       mensagem.style.color = "red"
    }else if(IMC<=34.9 && IMC>=30.0){
       mensagem.textContent = "OBESIDADE GRAU 1"
       mensagem.style.color = "orange"
    }else if(IMC<=29.9 && IMC>= 25.0){
       mensagem.textContent = "SOBREPESO"
       mensagem.style.color = "orange"
    }else if(IMC<=24.9 && IMC>= 18.6){
       mensagem.textContent = "NORMAL"
       mensagem.style.color = "green"
    }else if(IMC <= 18.5){
       mensagem.textContent = "ABAIXO DO NORMAL"
       mensagem.style.color = "blue"
    }
    
}
function balada(){
    var nascimento = parseFloat(document.getElementById("n11").value)
    var resulta = document.getElementById("resBalada")
    var msgtd = document.getElementById("msgtd")
    
    if(isNaN(nascimento)){
        resulta.textContent= "Digite apenas números"
        resulta.style.color = "red"
        document.getElementById("msgt").textContent = " "
        return
    }
    const thisYear = new Date().getFullYear();
    const validacao = thisYear - nascimento
    
    resulta.textContent = validacao;
        console.log(resulta)

    if(nascimento > thisYear){
        msgtd.textContent = "Sai daqui anti-cristo, nem nasceu e ja ta na gandaia"
        msgtd.style.color = "red"
    }else{
    if(validacao < 18){
        resulta.textContent = validacao
        msgtd.textContent = "NÃO PODE ENTRAR XARÁ"
        msgtd.style.color = "red"
    }else{
        resulta.textContent = validacao
        msgtd.textContent = "Pode entrar lindão"
        msgtd.style.color = "green"
    }
    }
}