/**
 * Metodos úteis para objects
 */

 // Já vimos
//  Object.keys() => MOstra a chave
//  Object.freeze() => Congela o objeto
//  Object.defineProperties() => define várias propriedades
//  Object.defineProperty() => define uma propriedade
const produto = {nome: 'Caneca', preco: 1000};

// Copiando (Object.assign())
//const outraCoisa = Object.assign({}, produto, { materia: 'porcelana'});

// Retornar as propriedades(Object.getOwnPropertyDescriptor())
// console.log(Object.getOwnPropertyDescriptor(produto, 'nome'))

// Retornar as chaves (Object.entries(), Object.values())
console.log(Object.entries(produto))