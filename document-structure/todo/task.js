document.getElementById("tasks__add").addEventListener('click', function(event) {
    event.preventDefault();
    const taskInput = document.getElementById("task__input");
    const taskText = taskInput.value.trim(); 
    const tasksList = document.getElementById("tasks__list");
    if (taskText) { 
        tasksList.insertAdjacentHTML('afterbegin', `
            <div class="task">
                <div class="task__title">
                    ${taskText}
                </div>
                <a href="#" class="task__remove">&times;</a>
            </div>
        `);
        taskInput.value = "";
        taskInput.focus();
    };
    document.querySelector('.task__remove').addEventListener("click", function(e) {
        e.target.parentElement.remove(); 
    });     
});