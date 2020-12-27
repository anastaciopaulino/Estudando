/* 
Operadores Lógicos
&& -> AND -> E
|| -> OR -> OU
! -> NOT -> NÃO
*/
const AND = true && false && true && true;// Retorna TRUE se todas as expressões forem verdadeiras
const OR = true || false; // Retorna TRUE se uma das expressões for TRUE

// console.log(OR)

const usuario = 'Anastácio'
const senha = '123456'

const vailogar = usuario === 'Anastácio' && senha === '123456'
console.log(vailogar)