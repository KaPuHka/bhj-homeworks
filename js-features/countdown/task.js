const timer = document.getElementById("timer");
let currentDate = new Date();
timer.textContent = currentDate.getSeconds();

function runTimeBack() {
    if (timer.textContent > 0)
        timer.textContent--
    else
        alert('Вы победили в конкурсе!')
}

timerId = setInterval(runTimeBack, 1000);