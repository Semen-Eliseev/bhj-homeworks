let output = document.getElementById("timer");

const addText = function(){
    output.textContent -= 1;
    if(output.textContent < 0) {
        alert("Вы победили в конкурсе!");
        location.reload();
    }
}
setInterval(addText, 1000)