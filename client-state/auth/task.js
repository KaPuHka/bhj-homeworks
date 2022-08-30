let btn = document.getElementById('signin__btn');
let sform = document.getElementById('signin__form');
let inputControls = sform.getElementsByClassName('control');
inputControls = Array.from(inputControls);

let userWelcome = document.getElementById('welcome');
let userSignIn = document.getElementById('signin');

let localeStorage = this.localStorage;
let userId = localeStorage.getItem('userId');
// check known user
if (userId) {
    welcome(userId);
}

// welcome
function welcome(userId) {
    localeStorage.setItem('userId', userId);
    userWelcome.classList.add('welcome_active');
    userWelcome.innerText +=userId;
    userSignIn.classList.remove('signin_active');
}


// login
btn.addEventListener('click', (e) => {
    e.preventDefault();
    let params = '';
    inputControls.forEach(iControl => {
        params += iControl.name+'='+iControl.value+'&';
    });
   
    const xml = new XMLHttpRequest();
    const url = 'https://netology-slow-rest.herokuapp.com/auth.php';
    xml.open('POST', url, false);
    xml.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    
    xml.onreadystatechange = function() {
        if(xml.readyState == 4 && xml.status == 200) {
           let result = JSON.parse(xml.responseText);
           if (result.success) { 
             userId = result.user_id;
             welcome(userId);
           } else {
                alert('try again :-(');
           }
        }
    }
    xml.send(params);
})
