/**
 * IIFE => Immediately invoked function expression
 */

(function (idade, peso) {

  const sobrenome = 'Paulino';
  function criarNome(nome) {
    return nome + ' ' + sobrenome;
  }

  function falaNome() {
    console.log(criarNome('Anastácio'));
  }

  falaNome();

  console.log(arguments);

})(30, 80)