let TaskEnt=document.querySelector('.add-task');
let AddBtn = document.querySelector('.add-btn');
let TaskList = document.querySelector('.task-list');

let tasks = [];

AddBtn.addEventListener('click', function() {
    tasks.push(TaskEnt.value);
    TaskEnt.value = '';
    DisplayTasks();
});

function DisplayTasks() {
    TaskList.innerHTML = '';
    tasks.forEach(function(task, index) {
        let taskitem = document.createElement('li');
        taskitem.classList.add('task-item');
        taskitem.innerHTML = `
            <span class="task-text">${task}</span>
            <button class="delete-btn" data-index="${index}">Delete</button>
            <button class="done-btn" data-index="${index}">Done</button>
        `;
        TaskList.appendChild(taskitem);
    });

    let deleteButtons = document.querySelectorAll('.delete-btn');
    deleteButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            let index = this.getAttribute('data-index');
            tasks.splice(index, 1);
            DisplayTasks();
        });
    });
    
    let doneButtons = document.querySelectorAll('.done-btn');
    doneButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            let taskItem = this.closest('li');
            taskItem.style.textDecoration = 'line-through';
        });
    });
}       