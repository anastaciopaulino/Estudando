/**
 * Concatenando Arrays
*/

const a1 = [1, 2, 3];
const a2 = [4, 5, 6];

// CONCAT
// const a3 = a1.concat(a2);

// ... spread
const a3 = [...a1, ...a2, 'Anastácio'];
console.log(a3);