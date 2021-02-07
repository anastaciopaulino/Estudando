/**
 * Herança
 */

 function Produto(nome, preco){
   this.nome = nome;
   this.preco = preco;
 }

 Produto.prototype.aumento = function(quantia){
   this.preco += quantia;
 };

 Produto.prototype.desconto = function(quantia){
  this.preco -= quantia;
};

function Camiseta(nome, preco, cor){
  Produto.call(this, nome, preco);
  this.cor = cor;
}

Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

Camiseta.prototype.aumento = function(percentual){
  this.preco = this.preco + (this.preco* (percentual/100));
};

function Caneca(nome, preco, material){
  Produto.call(this, nome, preco);
  this.material = material;
}

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

Caneca.prototype.desconto = function(percentual){
  this.preco = this.preco - (this.preco * (percentual/100));
}

const caneca = new Caneca('Mol', 8.4, 'Vidro');
caneca.desconto(50);
console.log(caneca);

const camiseta = new Camiseta('Regata', 7.5, 'Preta');
camiseta.aumento(100);
console.log(camiseta);