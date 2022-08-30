let modal = document.getElementById('subscribe-modal');
if (! get_cookie('modal_close')){
    activate(modal);
} 

// function from stackoverflow
function get_cookie(name){
    return document.cookie.split(';').some(c => {
        return c.trim().startsWith(name + '=');
    });
}

// close popup
let clicksClose = document.getElementsByClassName("modal__close modal__close_times");
clicksClose[0].onclick = function() {
    hidden(modal);
    document.cookie = 'modal_close=true; SameSite=None; Secure';
} 


function activate(element) {
    const elementClass = element.className;
    element.className = [elementClass, "modal_active"].join(' '); 
}

function hidden(element) {
    const elementClass = element.className;
    element.className = elementClass.replace("modal_active","") 
}
