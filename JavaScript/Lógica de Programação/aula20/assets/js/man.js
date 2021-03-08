const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

let horaHTML = document.querySelector('.hora');
let minutoHTML = document.querySelector('.minuto');
let segundoHTML = document.querySelector('.segundo');

let timer;

function zeroEsquerda(num) {
  if (String(num).length < 2) {
    return '0' + num;
  }
  return num
}

function contarSegundos() {
  let segundos = parseInt(segundoHTML.innerText);
  let horas = parseInt(horaHTML.innerText);
  let minutos = parseInt(minutoHTML.innerText);

  if (segundos >= 59) {
    if (minutos >= 59) {
      horas += 1;
      minutos = '00'
      segundos = '00'
    } else {
      minutos += 1
    }
    horaHTML.innerText = zeroEsquerda(horas);
    minutoHTML.innerText = zeroEsquerda(minutos);
    return segundoHTML.innerText = '00'
  }

  return segundoHTML.innerText = zeroEsquerda(segundos + 1);
}

iniciar.addEventListener('click', function (envet) {
  timer = setInterval(function () {
    contarSegundos();
  }, 1000)
  relogio.style.color = 'black';
})

pausar.addEventListener('click', function (envet) {
  clearInterval(timer);
  relogio.style.color = 'red';
})

zerar.addEventListener('click', function (envet) {
  clearInterval(timer);
  horaHTML.innerText = '00';
  minutoHTML.innerText = '00';
  segundoHTML.innerText = '00';
  relogio.style.color = 'black';
})