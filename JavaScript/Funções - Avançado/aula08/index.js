/**
 * Factory Function
 */

function crearPessoa(nome, sobrenome, altura, peso) {
  return {
    nome,
    sobrenome,

    // Getter
    get nomeCompleto(){
      return `${this.nome} ${this.sobrenome}`;
    }
    ,

    // Setter
    set nomeCompleto(valor){
      valor = valor.split(' ');
      this.nome = valor.shift();
      this.sobrenome = valor.join(' ');
    },
    fala(assunto) {
      return nome + ' está falando ' + assunto;
    },
    altura,
    peso,

    // Getter
     get imc(){ // Vai ter a inicialização de um atributo
      const indice = this.peso / (this.altura ** 2);
      return indice.toFixed(2);
    }
  };
}

const p1 = crearPessoa('Anastácio', 'CP', 1.6, 42);
p1.nomeCompleto = 'Anastácio Cassiano Paulino'
console.log(p1.nomeCompleto)