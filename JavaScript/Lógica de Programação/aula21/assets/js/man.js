const inputTarefa = document.querySelector('.input-nova-tarefa');
const btnTarefa = document.querySelector('.btn-add-tarefa');
const tarefas = document.querySelector('.tarefas');

function criarLi(){
  const li = document.createElement('li');
  return li;
}

inputTarefa.addEventListener('keypress', function(e){
  if(e.keyCode === 13){
    if (!inputTarefa.value) return;
    criarTarefa(inputTarefa.value);
  }
})

function CriarBotaoApagar(li){
  li.innerText += ' ';
  const botaoApagar = document.createElement('button')
  botaoApagar.innerText = 'Apagar';
  botaoApagar.setAttribute('class', 'apagar');
  botaoApagar.setAttribute('title', 'Apagar essa tarefa');
  li.appendChild(botaoApagar);

}

function limparInput(){
  inputTarefa.value = '';
  inputTarefa.focus();
}

function criarTarefa(texto) {
  const li = criarLi();
  li.innerText = texto;
  tarefas.appendChild(li)
  limparInput();
  CriarBotaoApagar(li);
  salvarTarefas();
}

btnTarefa.addEventListener('click', function(e){
  if (!inputTarefa.value) return;
  criarTarefa(inputTarefa.value);
})

document.addEventListener('click', function(e){
  const el = e.target;

  if (el.classList.contains('apagar')){
    el.parentElement.remove();
    salvarTarefas();
  }
})

function salvarTarefas() {
  const liTarefas = tarefas.querySelectorAll('li');
  const listaDeTarefas = [];

  for (let tarefa of liTarefas) {
    let tarefaTexto = tarefa.innerText;
    tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
    listaDeTarefas.push(tarefaTexto);
  }

  const tarefasJSON = JSON.stringify(listaDeTarefas);
  localStorage.setItem('tarefas', tarefasJSON)
}

function adicionaTarefasSalvas() {
  const tarefas = localStorage.getItem('tarefas');
  const listaDeTarefas = JSON.parse(tarefas);

  for (let tarefa of listaDeTarefas){
    criarTarefa(tarefa);
  }
}

adicionaTarefasSalvas()