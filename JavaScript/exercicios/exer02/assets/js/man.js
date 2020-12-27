let h1 = document.getElementById('hora')

function getDiaSemana(dia) {
  let diaSemanaTexto
  switch (dia) {
    case 0:
      diaSemanaTexto = 'Domingo';
      break
    case 1:
      diaSemanaTexto = 'Segunda';
      break
    case 2:
      diaSemanaTexto = 'Terça';
      break
    case 3:
      diaSemanaTexto = 'Quarta';
      break
    case 4:
      diaSemanaTexto = 'Quinta';
      break
    case 5:
      diaSemanaTexto = 'Sexta';
      break
    case 6:
      diaSemanaTexto = 'Sabado';
      break
    default:
      diaSemanaTexto = 'Ups... Não encontrado!'
  }

  return diaSemanaTexto;
}

function getMes(mes) {
  let mesString;
  switch (mes) {
    case 2:
      mesString = 'Fevereiro';
      break
    case 11:
      mesString = 'Novembro';
      break
    case 5:
      mesString = 'Maio';
      break
    case 6:
      mesString = 'Junho';
      break
    case 7:
      mesString = 'Julho';
      break
    case 8:
      mesString = 'Agosto';
      break
    case 12:
      mesString = 'Dezembro';
      break
    case 1:
      mesString = 'Janeiro';
      break
    case 3:
      mesString = 'Março';
      break
    case 4:
      mesString = 'Abril';
      break
    case 9:
      mesString = 'Setembro';
      break
    case 10:
      mesString = 'Outubro';
      break
    default:
      mesString = 'Ups... Não encontrado!'
  }

  return mes
}

function formatar(data) {

  let hora = data.getHours();
  let min = data.getMinutes();
  let ano = data.getFullYear();
  let dia = data.getDate();
  let diaSemana = data.getDay();
  let mes = getMes(data.getMonth() + 1);

  diaSemana = getDiaSemana(diaSemana);

  return diaSemana  + ', ' + dia + ' de ' + mes + ' de ' + ' ' + ano + ' ' + hora + ':' + min;
}

const data = new Date()

h1.innerText = formatar(data);