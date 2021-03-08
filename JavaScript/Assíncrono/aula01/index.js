/**
 * Promise
*/
function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min)
}

function EsperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    if(typeof msg !== 'string') reject('Bad value');
    setTimeout(() => {
      resolve(msg);
    }, tempo);  
  });
}

EsperaAi('Frase 1', rand(1, 3))
  .then(resposta => {
    console.log(resposta);
    return EsperaAi('Frase 2', rand(1, 3));
  })
  .then(resposta => {
    console.log(resposta);
    return EsperaAi(222, rand(1, 3));
  })
  .then(resposta => {
    console.log(resposta);
  })
  .catch(e => {
    console.log('error: ', e)
  });
