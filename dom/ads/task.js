let rotators = document.querySelectorAll('.rotator > .rotator__case');
rotators = Array.from(rotators);
let count = rotators.length;

setInterval(()=> {
    let active = rotators.find(item => item.className.includes('active'));
    let idx = rotators.indexOf(active);
    idxNew =(idx+1)%rotators.length;
    switchActive(idx, idxNew);
}, 2000);

function switchActive(oldPos, newPos){
    let activeClass = rotators[oldPos].className;
    let inactiveClass = rotators[newPos].className;
    rotators[oldPos].className = inactiveClass;
    rotators[newPos].className = activeClass;
 }
 