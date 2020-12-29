/*
 * NodeList
*/

const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const backgroundBody = estilosBody.backgroundColor;

for (let p of ps) {
  p.style.backgroundColor = backgroundBody;
  p.style.color = '#fff';
}