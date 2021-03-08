/**
 * Controlo de Fluxo com BREAK && CONTINUE
 */

 const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

 for (let value of numeros) {
   if (value % 2 == 0) {
     continue;
   } else {
     console.log('Parou')
     break;
   }
   console.log('PASSOU')
 }