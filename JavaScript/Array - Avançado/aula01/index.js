/**
 * Revisão [ARRAY]
 */

const nomes = ['Anastácio', 'Cassiano', 'Paulino'];
nomes[2] = 'João';
// console.log(nomes)

const novo = [...nomes]; // Cópia o array (sem referência)

nomes.pop() // Remove no Final
nomes.shift() // Remove no inicio

novo.push('Wallace'); // Adiciona um novo item no final do nosso array
nomes.unshift('Eurico'); // Adiciona um novo item no inicio do nosso array

// console.log(novo)
// console.log(novo.slice(1, -1)) // Fatia um Array

const meuNome = 'Anastácio Cassiano Paulino';
let meuNomes = meuNome.split(' '); // Converte a STRING num array com base um caracter

console.log(meuNomes)

meuNomes = meuNomes.join(' ') // Converte o ARRAY numa STRING com base um caracter

console.log(meuNomes)