

function calcular() {
  let peso = document.getElementById('peso');
  let altura = document.getElementById('altura');
  let resultado = document.getElementById('resultado');

  // Calculado o IMC
  let imc = peso / (altura**2);

  let status;

  if (imc < 18.5) {
    status = 'Abaixo do Peso'
  } else if (imc <= 18.5 && imc >= 24.9) {
    status = 'Peso Normal'
  } else if (imc <= 25 && imc >= 29.9){
    status = 'Sobrepeso'
  } else if (imc <= 30 && imc >= 34.9){
    status = 'Obesidade grau 1'
  } else if(imc <= 35 && imc >= 39.9) {
    status = 'Obesidade grau 2'
  } else if(imc > 40) {
    status = 'Obesidade grau 3'
  }
   
}