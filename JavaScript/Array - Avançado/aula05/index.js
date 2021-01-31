/**
 * MAP ===> Vai sempre retornar o mesmo tamanho do array real
 */

const numeros = [5, 50, 1, 2, 3, 4, 6, 432, 23, 321];
const numerosEmDobro = numeros.map(valor => valor * 2);

// console.log(numerosEmDobro);

// Para cada elemento:
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave "nome" do objeto
// Adicione uma chave id em cada objeto

const pessoas = [
  {nome: 'Anastácio', idade: 62},  
  {nome: 'Maria', idade: 23},  
  {nome: 'Eduardo', idade: 55},  
  {nome: 'Letícia', idade: 19},  
  {nome: 'Rosana', idade: 32},  
  {nome: 'Wallace', idade: 47}
];

const nomes = pessoas.map(function(obj){
  return `${obj.nome}`;
})

const idades = pessoas.map(obj => ({idade: obj.idade}));

const id = pessoas.map((obj, indice) => {
  const newObj = {...obj};
  newObj.id = indice++;
  return newObj;
});

console.log(id)