/*
 * Reduce 
 */

// Some todos os números (reduce)
// Retorne um array com os pares (Filter)
// Retorne um array com o dobro dos valores (Map)
const numeros = [5, 50, 1, 2, 3, 4, 6, 432, 23, 321];
const total = numeros.reduce(function(acumulador, valor){
  acumulador += valor;
  return acumulador;
}, 0);

const pares = numeros.reduce(function(acumulador, valor){
  if(valor % 2 === 0) acumulador.push(valor);
  return acumulador;
}, []);

const dobro = numeros.reduce(function(acumulador, valor) {
  acumulador.push(valor*2);
  return acumulador;
}, [])


// Retorne a pessoa mais velha
const pessoas = [
  {nome: 'Anastácio', idade: 62},  
  {nome: 'Maria', idade: 23},  
  {nome: 'Eduardo', idade: 55},  
  {nome: 'Letícia', idade: 19},  
  {nome: 'Rosana', idade: 323},  
  {nome: 'Wallace', idade: 46}
];

const maisVelha = pessoas.reduce(function(acumulador, obj){
  if(obj.idade > acumulador.idade){
    acumulador = obj;
  }

  return acumulador;
})

console.log(maisVelha);