
document.getElementById('send').setAttribute('type', 'submit');
let form = document.getElementById('form');
form.setAttribute('enctype', 'multipart/form-data');
form.setAttribute('method', 'POST');
let formData = new FormData(form);

form.addEventListener('submit', function(event) {
  event.preventDefault()
  const xhr = new XMLHttpRequest;
  let url = 'https://netology-slow-rest.herokuapp.com/upload.php';
  xhr.open('POST', url);
  xhr.send(formData); 

  xhr.addEventListener('progress', (e) => {
    let progress = document.getElementById('progress'); 
    progress.value = e.loaded*1e-8;
  })   
});

