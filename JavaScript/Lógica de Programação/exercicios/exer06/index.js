/*
 * Escreva uma função chama ePaisagem que recebe dois argumentos.
 * Largura e altura de uma imagem (number).
 * Retorne true se a imagem estiver no modo paisagem.
*/

const ePaisagem = (altura, largura) => altura >= largura ? false : true;

console.log(ePaisagem(1920, 1920));