/**
 * Retorno de funções
 * Retorna um valor e termina a função
 */
/*
function criarPessoa(nome, sobrenome) {
  return {nome, sobrenome};
}

const p1 = criarPessoa('Anastácio', 'Paulino');

console.log(typeof p1); */

/*
function falaFrase(comeco) {
  function falaResto(resto) {
    return comeco + ' ' + resto;
  }

  return falaResto;
}

const olaMundo = falaFrase('Olá');
console.log(olaMundo('Mundo!'));
*/

function criarMultiplicador(multiplicador) {
  // Multiplicador
  return (n) => n * multiplicador;
}

const duplicar = criarMultiplicador(2);
console.log(duplicar(6))