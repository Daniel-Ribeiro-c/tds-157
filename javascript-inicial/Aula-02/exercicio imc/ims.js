function calcular(){
    var numero1 = parseFloat(document.getElementById("n1").value)
    var numero2 = parseFloat(document.getElementById("n2").value)
    var res = document.getElementById("res")
    res.innerHTML = peso / (altura * altura)
    var msg = document.getElementById("msg")
    if(res >= 40.0){
        msg.textContent = res
        msg.textContent = "OBESIDADE GRAU 3"
    }else if(res>=40.0 && res<35.0){
        msg.textContent = res
        msg.textContent = "OBRESIDADE GRAU 2"
    }else if(res>=35.0 && res<30.0){
        msg.textContent = res
        msg.textContent = "OBESIDADE GRAU 1"
    }else if(res>=29.9 && res< 25.0){
        msg.textContent = res
        msg.textContent = "SOBREPESO"
    }else if(res>=24.9 && res<= 18.6){
        msg.textContent = res
        msg.textContent = "NORMAL"
    }else{
        msg.textContent = res
        msg.textContent = "ABAIXO DO NORMAL"
    }
}