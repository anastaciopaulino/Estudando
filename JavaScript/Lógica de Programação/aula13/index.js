/*
Estrutura de repetição (FOR OF)
*/

const nomes = ['Anastácio', 'Paulino', 'Cassiano', 'Eurico']

// nome = 'Anastácio Paulino'

// FOR CLASSIC - Geralmente com iteráveis (array, strings)
// for (let i = 0; i < nome.length; i++) {
//   console.log(nome[i])
// }

// FOR IN - Retorna o indice ou chave (string, array ou objetos)
// for (let i in nome) {
//   console.log(nome[i])
// }

// FOR OF - Retorna o valor em si (interáveis, arrays ou strings)
for (let valor of nomes) {
  console.log(valor);
}