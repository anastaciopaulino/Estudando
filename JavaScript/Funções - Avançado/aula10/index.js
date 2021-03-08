/**
 * Funções construtoras => Objetos
 */

function Pessoa(nome, sobrenome) {
  // Atributos ou metodos Privados
  const ID = 1234;

  const metodoInterno = function(){

  };

  // Atributos ou metodos publicos
  this.nome = nome;
  this.sobrenome = sobrenome;
}

const p1 = new Pessoa('Anastácio', 'Paulino');

console.log();