//Ajouter un EventListener sur le bouton "addTodo"
    //Créer un élément <li> dans le conteneur <ul> ayant la valeur du champ
        //Ajouter un bouton à l'élément <li>, ayant un ID "delete" et associé à la tâche
let btn = document.querySelector("input#addTodo");

btn.addEventListener("click", (event) => {
    let nameTask = document.getElementsByName("nameTask")[0].value;

    event.preventDefault();
    let content = document.getElementById("taskList");
    let li = document.createElement("li");
    li.textContent = `${nameTask}`;
    content.appendChild(li);

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Supprimer";
    deleteBtn.id = "delete";
    li.appendChild(deleteBtn);

    deleteBtn.addEventListener("click", (e) => {
        e.target.parentNode.remove();
    });
});


    

console.log("nametask:", nameTask);
console.log("ul:", content);
console.log("li:", li);

//Ajouter un EventListener sur le bouton delete
    //Supprimer la tâche associée au bouton delete