let slides = document.querySelectorAll('.slider__items > .slider__item');
slides = Array.from(slides);

let next = document.querySelector('.slider__arrow_next');
clickArrow(next);
let prev = document.querySelector('.slider__arrow_prev');
clickArrow(prev, false);

function clickArrow(elem, forward = true){
    elem.onclick = function(){
        let actSlide = slides.find(slide => slide.className.includes('active'));
        let oldActive = slides.indexOf(actSlide);
        if (forward) {
            newActive =(oldActive+1)%slides.length;
        } else {
            newActive = (oldActive > 0) ? (oldActive-1): slides.length-1;
        }
        activateSlide(oldActive, newActive);
    }
}

function activateSlide(old, pos){
   let activeClass = slides[old].className;
   let inactiveClass = slides[pos].className;
   slides[old].className = inactiveClass;
   slides[pos].className = activeClass;
}


