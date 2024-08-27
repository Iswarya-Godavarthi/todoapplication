function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    const taskList = document.getElementById('taskList');
    
    const li = document.createElement('li');

    const span = document.createElement('span');
    span.textContent = taskText;
    span.addEventListener('click', () => toggleComplete(li));

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.className = 'edit';
    editButton.addEventListener('click', () => editTask(span));

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => deleteTask(li));

    li.appendChild(span);
    li.appendChild(editButton);
    li.appendChild(deleteButton);
    taskList.appendChild(li);

    taskInput.value = '';
}

function toggleComplete(taskItem) {
    taskItem.classList.toggle('completed');
}

function editTask(taskSpan) {
    const newTaskText = prompt('Edit your task:', taskSpan.textContent);
    if (newTaskText !== null && newTaskText.trim() !== '') {
        taskSpan.textContent = newTaskText.trim();
    }
}

function deleteTask(taskItem) {
    taskItem.remove();
}
