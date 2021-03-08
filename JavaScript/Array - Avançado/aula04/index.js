/*FILTER === Sempre retorna um array, com a mesma quantidade de elementos
 *ou menos.
*/

// Retorne os números maiores que 10
const numeros = [5, 50, 1, 2, 3, 4, 6, 432, 23, 321];
const numerosFiltrados = numeros.filter(valor => valor);

// console.log(numerosFiltrados);

// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com a
const pessoas = [
  {nome: 'Anastácio', idade: 62},  
  {nome: 'Maria', idade: 23},  
  {nome: 'Eduardo', idade: 55},  
  {nome: 'Letícia', idade: 19},  
  {nome: 'Rosana', idade: 32},  
  {nome: 'Wallace', idade: 47}
];

const pessoasComNomeGrande = pessoas.filter(function(valor){
  return valor.nome.length > 5;
})

const pessoasIdosas = pessoas.filter(function(valor){
  return valor.idade > 50
})

const pessoasComA = pessoas.filter(function(valor){
  return valor.nome.toLowerCase().endsWith('a');
})

console.log(pessoasComA);

