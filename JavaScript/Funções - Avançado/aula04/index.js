/**
 * Escopo Léxico
 */

const nome = 'Anastácio'

function falaNome() {
  console.log(nome);
}

function usaFalaNome() {
  const nome = 'Paulino';
  falaNome();
}

usaFalaNome()