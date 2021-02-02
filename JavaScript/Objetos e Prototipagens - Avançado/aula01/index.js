// Revisão

/*/ Formas literal
const pessoa1 = {
  nome: 'Anastácio',
  sobrenome: 'Paulino',
  idade: 17
};
console.log(pessoa1);

// Object()
const pessoa2 = Object();
pessoa2.nome = 'Eurico';
pessoa2.sobrenome = 'Paulino';

console.log(pessoa2)

for (let chave in pessoa2){
  console.log(pessoa2[chave]);
}

*/

// Factory function / 
function criaPessoa(nome, sobrenome){
  return {
    nome, 
    sobrenome,
    get nomeCompleto(){
      return `${this.nome} ${this.sobrenome}`;
    }
  };
}

// const p1 = criaPessoa('Anastácio', 'Paulino');
// console.log(p1.nomeCompleto);

// Construct function
function Pessoa(nome, sobrenome){
  this.nome = nome;
  this.sobrenome = sobrenome;
}
const p1 = new Pessoa('Anastácio', 'Paulino');
console.log(p1);