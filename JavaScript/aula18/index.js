/*
 * Tratamento de erros (TRY, CATCH, FINALLY)
 * No FINALLY o bloco é sempre executado, não importa se há ou não erros
 */

//  try {
//    console.log('Abri um arquivo');
//    console.log('Manipulei o arquivo e gerou erro');
//    console.log('Fechei o arquivo');
//  } catch (e) {
//    console.log('Deu erro');
//  } finally {
//    console.log('Fechei o arquivo');
//  }

// Criando uma função que retorna a hora
function retornarHora(data) {
  if (data && !(data instanceof Date)) {
    throw TypeError('Esperando uma instância de Date.');
  }

  if(!data) {
    data = new Date();
  }

  return data.toLocaleTimeString('pt-br', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  })
}

try {
  const data = new Date('01-01-1970 19:22:38')
  const hora = retornarHora(data)
  console.log(hora)
} catch (e) {
  // Tratar erro
} finally {
  console.log('Tenha um bom dia')
}