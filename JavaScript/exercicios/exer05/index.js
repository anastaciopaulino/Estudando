/*
 Escreva uma função que recebe 2 números e retorne o maior deles
*/

function maior(num1, num2) {
  if(num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

const Maior = maior(123, 32)

console.log(Maior)