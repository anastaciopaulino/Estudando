/**
 * Mixins
 */

const falar = {
  falar(){
  console.log(`${this.nome} está falando`);
  }
};

const comer = {
  falar(){
  console.log(`${this.nome} está comendo`);
  }
};

const beber = {
  falar(){
  console.log(`${this.nome} está bebendo`);
  }
};

const pessoaPrototype = Object.assign({}, falar, beber, comer)

function criaPessoa(nome, sobrenome){

  return Object.create(pessoaPrototype, {
    nome: {value: nome, enumerable: true},
    sobrenome: {value: sobrenome}
  });
}

const p1 = criaPessoa('Anastácio', 'Paulino');
console.log(p1.falar());