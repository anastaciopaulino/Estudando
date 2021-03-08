/**
 * Mais sobre Prototypes
 */
/*
const objA = {
  chaveA: 'A'
};

const objB = new Object();
objB.chaveB = 'B';

const objC = {
  chaveC: 'C'
};

Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objB);

console.log(objC.chaveA);*/

function Produto(nome, preco){
  this.nome = nome;
  this.preco = preco;
}

Produto.prototype.desconto = function(porcento) {
  this.preco = this.preco - (this.preco * (porcento / 100));
};

const p1 = new Produto('Camisa', 500);

const p2 = {
  nome: 'Caneca',
  preco: 100
};

const p3 = Object.create(Produto.prototype, {
  preco: {
   writable: true,
   value: 124,
   configurable: true 
  },
  tamanho: {
    writable: true,
    value: 23,
    configurable: true 
   }
})

Object.setPrototypeOf(p2, Produto.prototype);

p3.desconto(10)

p1.desconto(100)
console.log(p3);