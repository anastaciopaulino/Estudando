/**
 * Parâmetros de funções
 */

// Funções criadas com a palavra function tem uma variavel 
// especial que se chama:arguments, que sustenta todos os 
// argumentos enviados
/*
function funcao() {
  let total = 0;
  for (let argumento of arguments) {
    total += argumento;
  }

  console.log(total);
}

funcao(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
*/
// Parâmentros via desestruturação*
/*
function funcao({ nome, sobrenome, idade }) {
  console.log(nome, sobrenome, idade);
}

funcao({ nome: 'Anastácio', sobrenome: 'Paulino', idade: 17 });
*/
// Rest ope...
function conta(operador, acumulador, ...numeros) {
  for (let numero of numeros) {
    acumulador = operador === '+' ? acumulador + numero : operador === '-' ? acumulador - numero : 'PASS';
  }

  console.log(acumulador)
}

conta('+', 0, 20, 30, 40, 50)