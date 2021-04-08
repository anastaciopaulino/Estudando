import GeraCPF from './modules/GerarCPF';

import './assets/css/style.css';

const btnGera = document.querySelector('.btn-gerar');

btnGera.addEventListener('click', (e)=>{
  const gera = new GeraCPF();
  const cpfGerado = document.querySelector('.cpf-gerado');

  cpfGerado.innerHTML = gera.geraNovoCpf();
})