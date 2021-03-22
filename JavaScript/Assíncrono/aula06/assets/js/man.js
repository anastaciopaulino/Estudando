fetch('pessoas.json')
  .then(resposta => resposta.json())
  .then(json => carregaElementosNaPagina(json));

  function carregaElementosNaPagina(json){
    const container = document.querySelector('.container');
    const table = document.createElement('table');

    container.appendChild(table);
    for(let pessoa of json){
      const tr = document.createElement('tr');

      let td = document.createElement('td');
      td.innerHTML = pessoa.nome;
      tr.appendChild(td);


      td = document.createElement('td');
      td.innerHTML = pessoa.idade;
      tr.appendChild(td);


      td = document.createElement('td');
      td.innerHTML = pessoa.salario;

      tr.appendChild(td);
      table.appendChild(tr);
    }
  }