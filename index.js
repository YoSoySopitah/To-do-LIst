var taskArray = [];

function addtask() {
    var task = document.getElementById("task").value.trim();
    if (task) {
        taskArray.push({ text: task, completed: false });
        updateTaskList();
    }
    document.getElementById("task").value = "";
    return false;
}

function updateTaskList() {
    var taskList = document.getElementById("taskss");
    taskList.innerHTML = "";
    for (var i = 0; i < taskArray.length; i++) {
        var li = document.createElement("li");
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = taskArray[i].completed;
        checkbox.onchange = (function(index) {
            return function() {
                taskArray[index].completed = this.checked;
                span.style.textDecoration = this.checked ? "line-through" : "none";
            };
        })(i);

        var span = document.createElement("span");
        span.textContent = taskArray[i].text;
        span.style.marginLeft = "10px";
        if (taskArray[i].completed) {
            span.style.textDecoration = "line-through";
        }

        var deleteButton = document.createElement("button");
        deleteButton.className = "button is-danger is-small";
        deleteButton.textContent = "Delete";
        deleteButton.onclick = (function(index) {
            return function() {
                deleteTask(index);
            };
        })(i);

        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(deleteButton);
        taskList.appendChild(li);
    }
}

function deleteTask(index) {
    taskArray.splice(index, 1);
    updateTaskList();
}