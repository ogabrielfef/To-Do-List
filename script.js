// função que marca uma tasks como selecionada ao clickar nela
function color(a) {
  a.addEventListener('click', (event) => {
    const newColor = document.getElementsByClassName('ativo');

    if (newColor.length !== 0) {
      newColor[0].classList.remove('ativo');
    }
    event.target.classList.add('ativo');
  });
}

// função para marcar a tarefa como finalizada ao dar dois clicks
function finalizar(finaliza) {
  finaliza.addEventListener('dblclick', (event) => {
    const teste = event.target;

    if (teste.classList.contains('completed')) {
      event.target.classList.remove('completed');
    } else {
      event.target.classList.add('completed');
    }
  });
}

// cria tarefa
document.getElementById('criar-tarefa').addEventListener('click', () => {
  const taskItens = document.getElementById('texto-tarefa').value;

  const listTask = document.getElementById('lista-tarefas');

  const createList = document.createElement('li');

  createList.className = 'itenList';
  createList.innerText = taskItens;
  listTask.appendChild(createList);
  document.getElementById('texto-tarefa').value = '';
  color(listTask);
  finalizar(createList);
});

// apaga todas as tarefas
document.getElementById('apaga-tudo').addEventListener('click', () => {
  const apaga = document.querySelectorAll('.itenList');
  for (let i = 0; i < apaga.length; i += 1) {
    apaga[i].remove();
  }
});

// apagar todas tarefas que estiverem marcadas como finalizadas
document.getElementById('remover-finalizados').addEventListener('click', () => {
  const apagaFinalizados = document.querySelectorAll('.completed');
  for (let i = 0; i < apagaFinalizados.length; i += 1) {
    apagaFinalizados[i].remove();
  }
});

// apagar a tarefa que estiver selecionada
document.querySelector('#remover-selecionado').addEventListener('click', () => {
  const apagaSelecionado = document.querySelectorAll('.ativo');
  for (let i = 0; i < apagaSelecionado.length; i += 1) {
    apagaSelecionado[i].remove();
  }
});
