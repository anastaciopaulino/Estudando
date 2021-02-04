/**
 * Prototypes
 */

function Pessoa(nome, sobrenome){
  this.nome = nome;
  this.sobrenome = sobrenome;
}

Pessoa.prototype.estouAqui = 'Hahahaha';
Pessoa.prototype.nomeCompleto = () => `${this.nome} ${this.sobrenome}`;

const p1 = new Pessoa('Anastácio', 'Paulino');
const p2 = new Pessoa('Cassiano', 'Paulino');

console.log(p1.estouAqui)