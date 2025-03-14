function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value;

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const listItem = document.createElement("li");
    const taskContent = document.createElement("span");
    taskContent.textContent = taskText;

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = function() {
        listItem.remove();
    };

    listItem.appendChild(taskContent);
    listItem.appendChild(deleteBtn);
    
    document.getElementById("taskList").appendChild(listItem);
    
    input.value = "";
}

document.getElementById("taskInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});