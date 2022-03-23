document.getElementById('criar-tarefa').addEventListener('click', function receberClick() {
    
    let taskItens = document.getElementById('texto-tarefa').value;
    
    let listTask = document.getElementById('lista-tarefas')
    
    let createList = document.createElement('li')
    
    createList.className = 'itenList'
    createList.innerText = taskItens;
    listTask.appendChild(createList);
    document.getElementById('texto-tarefa').value = '';
    color(listTask);
    finalizar(createList)
});

function color (color){
    color.addEventListener('click', function(event){
       
        let newColor = document.getElementsByClassName('ativo');

        if(newColor.length !== 0){
            newColor[0].classList.remove('ativo');
        }
        event.target.classList.add('ativo');
    })
};

function finalizar(finaliza){
    finaliza.addEventListener('dblclick', function(event){

            let teste = event.target;

            if(teste.classList.contains('completed')){
                event.target.classList.remove('completed');
            }else{
                event.target.classList.add('completed');
            }
    })
};
