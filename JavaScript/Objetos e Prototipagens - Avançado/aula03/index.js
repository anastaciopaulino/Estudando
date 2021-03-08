/**
 * Getters e Setters
*/

function Produto (nome, preco, estoque){
  this.nome = nome;
  this.preco = preco;

  let estoquePrivado = estoque
  Object.defineProperty(this, 'estoque', {
      enumerable: false, // Mostra a chave
      configurable: true, // Configurável
      get: function (){
        return estoque;
      },
      set: function(value){
        if(typeof value !== 'number'){
          throw new TypeError('Bad value');
        }
        estoquePrivado = estoque;
      }
  });
}

function criaProduto(nome){
  return {
    get nome() {
      return nome;
    },
    set nome(value){
      nome = value;
    }
  };
}

const p2 = criaProduto('Camisola');
console.log(p2)
p2.nome = 'Teste';
console.log(p2.nome)

// const p1 = new Produto('Camisa', 20, 3);
// p1.estoque = 123
// console.log(p1.estoque)