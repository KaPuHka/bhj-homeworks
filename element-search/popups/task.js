let modal = document.getElementById('modal_main');
let success = document.getElementById('modal_success');

activate(modal);

// close popup
let clicksClose = document.getElementsByClassName("modal__close modal__close_times");

for( let i =0; i< clicksClose.length; i++) {
    clicksClose[i].onclick = function() {
        hidden(modal);
        hidden(success);
    } 
}

// click on "Сделать хорошо"
let clickSuccess = document.getElementsByClassName('show-success');

clickSuccess[0].onclick = function() {
    hidden(modal);
    activate(success);
}

function activate(element) {
    const elementClass = element.className;
    element.className = [elementClass, "modal_active"].join(' '); 
}

function hidden(element) {
    const elementClass = element.className;
    element.className = elementClass.replace("modal_active","") 
}
