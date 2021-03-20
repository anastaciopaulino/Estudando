/**
 * Metódos de Promeses
 */

function rand(min, max){
  min *= 1000;
  max *= 1000;

  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo){
  return new Promise((resolve, reject) => {
    if(typeof msg !== 'string') {
      reject(false);
      return;
    }

    setTimeout(() => {
      resolve(msg.toUpperCase() + ' Passei na promise.');
    }, tempo);
  });
}

// Promise.all, Promise.race, Promise.resolve, Promise.reject
const promises = [
  esperaAi('Promise 1', 3000),
  esperaAi('Promise 2', 5000),
  esperaAi('Promise 3', 1000),
];

// Promise.all(promises)
//   .then(function(valor){
//     console.log(valor);
//   })
//   .catch(function(erro){
//     console.log(erro);
//   })

// Promise.race(promises)
//   .then(function(valor){
//     console.log(valor);
//   })
//   .catch(function(erro){
//     console.log(erro);
//   })

function baixaPagina() {
  const emCache = false;

  if(emCache) {
    return Promise.resolve('Página em Cache');
  } else {
    return esperaAi('Baixei a Página', rand(1, 3000));
  }
}

baixaPagina()
  .then(dadosPagina => console.log(dadosPagina)) 
  .catch( e => console.log(e))