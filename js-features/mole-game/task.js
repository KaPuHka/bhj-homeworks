const countDead = document.getElementById("dead");
const countLost = document.getElementById("lost");

for (let index = 1; index<10; index++) {
    let clickHole = document.getElementById(`hole${index}`);
    clickHole.onclick = function() {
        if (clickHole.className.includes('mole')){
            countDead.textContent ++; 
            if (countDead.textContent >= 10){
                alert('you win!');
                newGame();
            }
        } else {
            countLost.textContent ++; 
            if (countLost.textContent >= 5){
                alert('you lost!');
                newGame();
            }        
        }        
    }
}

function newGame() {
    countDead.textContent = 0;
    countLost.textContent = 0;
}
