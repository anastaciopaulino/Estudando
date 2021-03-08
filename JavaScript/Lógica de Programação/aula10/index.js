/*
Atribuição via desestruturação (Object)
... rest
... spread
*/

const pessoa = {
  nome: 'Cassiano',
  sobrenome: 'Paulino',
  idade: 17,
  endereco: {
    quarteirao: 'U',
    apartamento: 'U35-21'
  }
}

// const { nome, sobrenome, idade } = pessoa;
// console.log(nome, sobrenome)

// Podemos dar um valor padrão, e trocar o nome da chave(atributo, metodo)
// const { nome: n = ' ', sobrenome, idade } = pessoa;
// console.log(n, sobrenome)


const { endereco: { quarteirao: q = 1234, apartamento }, sobrenome, ...resto } = pessoa;
console.log(resto)