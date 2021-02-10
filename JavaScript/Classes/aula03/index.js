/**
 * Herança com classes
*/

class DispositivoEletronico {
  constructor(nome) {
    this.nome = nome;
    this.status = false;
  }
  
  ligar() {
    if(this.status === true) return;
    this.status = true;
  }

  desligar() {
    if(this.status === false) return;
    this.status = false;
  }
}

class Smartphone extends DispositivoEletronico {
  constructor(nome, cor, modelo){
    super(nome);
    this.cor = cor;
    this.modelo = modelo;
  }
}

class Tablet extends DispositivoEletronico {
  constructor(nome, temWifi) {
    super(nome);
    this.temWifi = temWifi;
  }

  ligar() {
    console.log('Olha, você alterou o método ligar.');
  }
}

const s1 = new Smartphone('Samsung', 'Preto', 'Galaxy S4');

const t1 = new Tablet('IPad', true);

console.log(t1.ligar());