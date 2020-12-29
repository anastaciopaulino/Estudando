/*
Estrutura de Repetição (FOR IN)
Ele lê os indices ou chaves de um objeto
*/

// const frutas = ['Banana', 'Maçã', 'Pera', 'Morango', 'Uva'];

// for (let indice in frutas) {
//   console.log(indice)
// }

const pessoa = {
  nome: 'Anastácio',
  sobrenome: 'Paulino',
  idade: 17
}

for (let chave in pessoa) {
  console.log(pessoa[chave]);
}