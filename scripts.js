// Tasks Container
const tasksContainer = document.getElementById('tasksContainer');
const addNewTask = event => {
    event.preventDefault();
    const { value } = event.target.taskText;
    if(!value) return;
    const task = document.createElement('div');
    task.classList.add('task', 'roundBorder');
    task.addEventListener('click', DeleteTask)
    task.textContent = value;
    tasksContainer.prepend(task);
    event.target.reset();
};
const DeleteTask = event => {
    event.target.parentNode.remove('task');
};
