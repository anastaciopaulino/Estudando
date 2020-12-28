/*
Atribuição via desestruturação (ARRAY)
... rest
... spread
*/

// const numbers = [1213, 2243, 3234, 4123, 5243, 6324, 7213, 845, 9453];

// const [primeiroNumero, segundoNumero, ...resto] = numbers;

// console.log(resto)

const numeros = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

const [, [ , , seis]] = numeros;

console.log(seis);