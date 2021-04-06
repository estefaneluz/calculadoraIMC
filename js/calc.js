document.getElementById("btnCalc").addEventListener('click', function(event){
  event.preventDefault();

  const altura = parseFloat(document.getElementById("altura").value);
  const peso = parseFloat(document.getElementById("peso").value); 
  const calculo = peso/(altura*altura); 


  if(calculo <= 18.5) {
    document.getElementById("resultado").innerHTML = "Total: "+calculo.toFixed(2)+ ". Você está abaixo do peso."
  }
  else if(calculo> 18.5 && calculo<=24.9) {
    document.getElementById("resultado").innerHTML = "Total: "+calculo.toFixed(2)+ ". Você está com o peso ideal."
  }
  else if(calculo>24.9 && calculo <=29.9) {
    document.getElementById("resultado").innerHTML = "Total: "+calculo.toFixed(2)+ ". Você está com Sobrepeso."
  }
  else if(calculo>29.9 && calculo <=34.9) {
    document.getElementById("resultado").innerHTML = "Total: "+calculo.toFixed(2)+ ". Você está com Obesidade grau 1."
  }
  else if(calculo>34.9 && calculo <=39.9) {
    document.getElementById("resultado").innerHTML = "Total: "+calculo.toFixed(2)+ ". Você está com Obesidade grau 2."
  }

  else if(calculo>39.9) {
    document.getElementById("resultado").innerHTML = "Total: "+calculo.toFixed(2)+ ". Você está com Obesidade grau 3."
  }


})