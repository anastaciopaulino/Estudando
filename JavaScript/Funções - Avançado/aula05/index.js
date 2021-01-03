/**
 * Closure (Habilidade de uma função em acessar o seu escopo léxico)
 */

function retornaFuncao() {
  const nome = 'Anastácio';
  return function () {
    return nome;
  }
}

const funcao = retornaFuncao();

console.dir(funcao());