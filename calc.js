document.getElementById("btnCalc").addEventListener('click', function(event){
  event.preventDefault();

  const altura = parseFloat(document.getElementById("altura").value);
  const peso = parseFloat(document.getElementById("peso").value); 
  const calculo = peso/(altura*altura); 

  document.getElementById("resultado").innerHTML = "Total: "+calculo.toFixed(2); 
})