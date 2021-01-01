/**
 * Tratamento de erros (TRY, CATCH, THROW)
 * Se ocorrer um erro no bloco TRY o CATCH será lançado, 
 * se não o CATCH não é lançado
 */

//  try {
//    console.log(NaoExisto);
//  } catch (error) {
//    console.log('Não existo');
//    console.log(error)
//  }

function soma(x, y) {
  if (typeof x !== 'number' || typeof y !== 'number') {
    throw new Error('X e Y precisam ser numeros');
  }

  return x + y
}

try{
  console.log(soma(1, 'a'))
} catch (error) {
  // console.log(error);
  console.log('Alguma coisa mais amigável para o usuário');
}
