/**
 * SetInterval
 */

 function mostraHora() {
   let data = new Date();

   return data.toLocaleString('pt-br', {
     hour12: false
   })
 }

 const timer = setInterval(function(){
   console.log(mostraHora())
 }, 1000);

 setTimeout(function(){
   clearInterval(timer);
 }, 3000);

 setTimeout(function(){
   console.log('Olá Mundo!');
 }, 20000)

