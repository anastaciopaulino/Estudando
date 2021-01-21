/**
 * Praticando Factory function
 */

 function CriarCalculadora() {
  this.display = document.querySelector('.display');


  this.inicia = function() {
    this.cliqueBotoes();
    this.pressionaEnter();
  };

  this.pressionaEnter = function() {
    this.display.addEventListener('keyup', (e) => {
      if(e.keyCode === 13){
        this.realizarConta();
      }
    })
  };

  this.realizarConta = function() {
    let conta = this.display.value;

    try{
      conta = eval(conta);

      if(!conta) {
        alert('Conta inválida');
        return;
      }
      this.display.value = String(conta);
    } catch (e){
      alert('Conta inválida');
      return;
    }
  };

  this.clearDisplay = function(){
    this.display.value = ''
  };

  this.apagaUm = function(){
    this.display.value = this.display.value.slice(0, -1);
  };

  this.cliqueBotoes = function(){
    document.addEventListener('click', (e) => {
      const el = e.target;

      if(el.classList.contains('btn-num')){
        this.btnParaDisplay(el.innerText);
      }

      if (el.classList.contains('btn-clear')){
        this.clearDisplay();
      }

      if(el.classList.contains('btn-del')){
        this.apagaUm();
      }

      if(el.classList.contains('btn-eq')){
        this.realizarConta();
      }
    });
  };

  this.btnParaDisplay = function(value){
    this.display.value += value
  };
 }

 const calculadora = new CriarCalculadora();

 calculadora.inicia();