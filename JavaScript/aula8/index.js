/*
 Mais diferenças entre VAR e LET
*/

const status = true;

// LET tem escopo de bloco {... Bloco }
// VAR só tem escopo de função
/*
let nome = 'Anastácio';
var nome2 = 'Anastácio'; // Cria

var nome2 = 'Cassiano' // Redeclara a variavel
console.log(nome2)

if (status) {
  let nome = 'Cassiano'; // Cria
  // console.log(nome, nome2);

  if (status) {
    let nome = 'Paulino...' // Cria
    // console.log(nome, nome2)
  }
} */
// Escopo da função
/*
function falaOi() {
  var nome = 'Anastácio';
  console.log(nome);
}

// console.log(nome); // vai dar erro

falaOi();
*/
// Roice** A endgine do JS eleva a variavel.
console.log(sobrenome);

var sobrenome = 'Miranda'; // Funciona

console.log(nome);

let nome; // Não funciona