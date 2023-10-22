function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    const taskList = document.getElementById("taskList");

    const li = document.createElement("li");
    li.innerHTML = `
        <i class="fas fa-check-circle" onclick="completeTask(this)"></i>
        <span>${taskText}</span>
        <i class="fas fa-trash" onclick="deleteTask(this)"></i>
    `;

    taskList.appendChild(li);
    taskInput.value = "";
}

function completeTask(element) {
    const li = element.parentElement;
    li.classList.toggle("complete");

    
    const icon = element;
    if (li.classList.contains("complete")) {
        icon.classList.remove("fa-check-circle");
        icon.classList.add("fa-check-circle");
    } else {
        icon.classList.remove("fa-check-circle");
        icon.classList.add("fa-check-circle");
    }
}

function deleteTask(element) {
    const li = element.parentElement;
    li.remove();
}