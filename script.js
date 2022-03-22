

document.getElementById("criar-tarefa").addEventListener("click", function receberClick (){
    let taskItens = document.getElementById("texto-tarefa").value;
    let listTask = document.getElementById("lista-tarefas")
    let createList = document.createElement("li")
    createList.className = "itenList"
    createList.innerText = taskItens;
    listTask.appendChild(createList);
    document.getElementById('texto-tarefa').value ="";
});

//("itenList");
document.getElementById("itenList").addEventListener("click", function trocaCor(){
    let corDeFundo = document.getElementsByClassName("itenList").value;
    corDeFundo.style.backgroundColor = 'gray'
    corDeFundo.appendChild();
    document.getElementsByClassName("itensList").value = "";
});