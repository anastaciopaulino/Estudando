class ValidarCPF {
  constructor(cpfEnviado){
    this.cpfEnviado = cpfEnviado;
  }

  get cpfLimpo(){
    return this.cpfEnviado.replace(/\D+/g, '');
  }

  valida(){
    if(typeof this.cpfLimpo === 'undefined') return false;
    if(this.cpfLimpo.length !== 11) return false;
    if(this.isSequencia()) return false;

    const cpfParcil = this.cpfLimpo.slice(0, -2);
    const digito1 = this.criarDigito(cpfParcil);
    const digito2 = this.criarDigito(cpfParcil + digito1);

    const novoCpf = cpfParcil + digito1 + digito2;

    return novoCpf === this.cpfLimpo;
  }

  criarDigito(cpfParcil) {
    const cpfArray = Array.from(cpfParcil);
    let regressivo = cpfArray.length + 1;
    const total = cpfArray.reduce((acu, val)=>{
      acu += (regressivo * Number(val));
      regressivo--
      return acu;
    }, 0);

    const digito = 11 - (total % 11);
    return digito > 9 ? '0' : String(digito);
  }

  isSequencia(){
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
    return sequencia === this.cpfLimpo;
  }

}

const cpf = new ValidarCPF('705.484.450-52');
console.log(cpf.cpfLimpo)
console.log(cpf.valida());