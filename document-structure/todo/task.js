document.getElementById("task__input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        const taskInput = document.getElementById("task__input");
        const taskText = taskInput.value; 
        if (taskText) { 
            const taskDiv = document.createElement("div");
            taskDiv.className = "task";
         
            const titleDiv = document.createElement("div");
            titleDiv.className = "task__title";
            titleDiv.textContent = taskText;
          
            const removeLink = document.createElement("a");
            removeLink.href = "#";
            removeLink.className = "task__remove";
            removeLink.innerHTML = "&times;"; 

            removeLink.addEventListener("click", function() {
                taskDiv.remove(); 
            });

            taskDiv.appendChild(titleDiv);
            taskDiv.appendChild(removeLink);
            
            document.getElementById("tasks__list").appendChild(taskDiv);

            taskInput.value = "";
            taskInput.focus();
        };
    };    
});