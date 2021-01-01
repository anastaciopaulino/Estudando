/*
Trabalhando com Data
Date()
01/01/1970 TemeStamp Unix ou época Unix
*/

/*
const data = new Date(1609103731305); // Ano, mês, dia, hora, minuto, segundo, milissegundos.(no formato number)
console.log('Dia: ', data.getDate());
console.log('Mês: ', data.getMonth() + 1);
console.log('Ano: ', data.getFullYear());
console.log('Hora: ', data.getHours());
console.log('Min: ', data.getMinutes());
console.log('Seg: ', data.getSeconds());
console.log('Ms: ', data.getMilliseconds());
console.log('Dia semana: ', data.getDay()); // 0 - Domingo; 6 - Sábado
console.log(data.toString());
console.log(Date.now());
*/

// Criando uma função que manipula a data

function zeroAEsquerda(num) {
  return num >= 10 ? num : '0' + num;
}

function formataData(data) {
  const dia = zeroAEsquerda(data.getDate());
  const mes = zeroAEsquerda(data.getMonth() + 1);
  const ano = zeroAEsquerda(data.getFullYear());
  const seg = zeroAEsquerda(data.getSeconds());
  const hora = zeroAEsquerda(data.getHours());
  const min = zeroAEsquerda(data.getMinutes());

  return dia + '/' + mes + '/' + ano + ' ' + hora + ':' + min + ':' + seg;
}

const data = new Date();
const dataAngola = formataData(data);

console.log(dataAngola);