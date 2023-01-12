let btn = document.querySelector("input#addTodo");

btn.addEventListener("click", (event) => {
    let nameTask = document.getElementsByName("nameTask")[0].value;

    event.preventDefault();
    let content = document.getElementById("taskList");
    let li = document.createElement("li");
    li.textContent = `${nameTask}`;
    content.appendChild(li);

    let inputTask = document.getElementsByName("nameTask")[0];
    inputTask.value = ""

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Supprimer";
    deleteBtn.id = "delete";
    li.appendChild(deleteBtn);

    deleteBtn.addEventListener("click", (e) => {
        e.target.parentNode.remove();
    });
});