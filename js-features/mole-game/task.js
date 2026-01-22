addCounterDead = document.getElementById("dead");
addCounterLost = document.getElementById("lost");

const holes = document.querySelectorAll('.hole');
holes.forEach((hole) => {
    hole.addEventListener('click', () => {
        hole.className.includes('hole_has-mole') ?  addCounterDead.textContent++ : addCounterLost.textContent++ ;
    if(addCounterDead.textContent ==10) {
        alert("Победа!");
        location.reload();
    }
    if(addCounterLost.textContent == 5) {
        alert("Вы проиграли :(");
        location.reload();
    }
    })
    
})