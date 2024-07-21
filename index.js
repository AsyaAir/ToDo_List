document.getElementById('add_task_button').addEventListener('click', function() {
    const taskInput = document.getElementById('task_input');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        addTask(taskText);
        taskInput.value = '';
    }
});

function addTask(taskText) {
    const taskList = document.getElementById('task_list');

    const listItem = document.createElement('li');
    listItem.textContent = taskText;
    listItem.classList.add('task_item');
    listItem.addEventListener('click', function() {
        this.classList.toggle('completed');
    });

    taskList.appendChild(listItem);
}