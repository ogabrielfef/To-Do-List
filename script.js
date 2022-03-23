document.getElementById('criar-tarefa').addEventListener('click', function receberClick() {
    let taskItens = document.getElementById('texto-tarefa').value;
    let listTask = document.getElementById('lista-tarefas')
    let createList = document.createElement('li')
    createList.className = 'itenList'
    createList.innerText = taskItens;
    listTask.appendChild(createList);
    document.getElementById('texto-tarefa').value ='';
    color(listTask);
});

function color (color){
    color.addEventListener('click', function(event){
       
        let newColor = document.getElementsByClassName('ativo');

        if(newColor.length !==0){
            newColor[0].classList.remove('ativo');
        }
        event.target.classList.add('ativo');
    })
};