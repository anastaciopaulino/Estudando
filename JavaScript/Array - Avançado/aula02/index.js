/**
 * SPLICE
 */

const nomes = ['Maria',  'João', 'Eduardo', 'Gabriel', 'Júlia'];
// PUSH
//nomes.splice(nomes.length, 0, 'Anastácio')

// UNSHIFT
nomes.splice(0, 0, 'Anastácio')
console.log(nomes);


// nomes.splice(índice, delete, elem1, elem2, elem3)
// POP 
// const removidos = nomes.splice(-1, 1);

// SHIFT
// const removidos = nomes.slice(0, 1);
