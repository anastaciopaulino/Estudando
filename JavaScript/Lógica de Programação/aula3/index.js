/*
&& -> Todas as expressões precisam ser verdadeiras para que retorne true
|| -> Todas as expressões precisam ser falsas para que retorne falso

FALSY
*false
0
'' "" ´´
null / undefined
NaN
*/

// console.log('Anastácio Paulino' && 0 && 'Maria')

/*
function oi() {
    return 'Olá';
}

let vaiExecutar = false;

console.log(vaiExecutar && oi()) */

const corUsuario = null;
const corPadrao = corUsuario || 'Preto';

console.log(corPadrao);