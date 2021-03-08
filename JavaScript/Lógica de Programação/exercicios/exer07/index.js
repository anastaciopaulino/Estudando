/*
 * Escreva uma função que recebe um número e retorne o sehuinte:
 * Número é divisível por 3 = Fizz
 * Número é divisível por 5 = Buzz
 * Número é divisível po ambos = FizzBuzz
 * Número NÃO é divisível por ambos = Returne o Própio número
 * Checar se o número é realmente um número != Returne o Própio número
 * Use a função com números de 0 a 100
 */

 function fizzBuzz(num) {
   if (typeof num !== 'number') {
     return num;
   } 

   if(num % 3 === 0 && num % 5 === 0) {
     return 'FizzBuzz';
   } else if (num % 5 === 0) {
     return 'Buzz';
   } else if (num % 3 === 0) {
     return 'Fizz';
   } else {
     return num
   }

 }

 console.log('a', fizzBuzz('a'));

 for (let i = 0; i <= 100; i++) {
   console.log(i, fizzBuzz(i));
 }