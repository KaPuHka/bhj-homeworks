const clickerCounter = document.getElementById("clicker__counter");
const clickerImg = document.getElementById("cookie");

clickerImg.onclick = function() {
    clickerCounter.textContent ++; 
    setTimeout((element) => { element.width = 200; }, 200, clickerImg);
    clickerImg.width = 250;
}

