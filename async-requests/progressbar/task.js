document.forms.file.addEventListener('submit', (event)=> {
    event.preventDefault();
    const xhr = new XMLHttpRequest;
    xhr.upload.addEventListener('progress', (e) => {
       // const progress = document.getElementById( 'progress' );
       // progress.value = 0.7;
       const progress = document.getElementById( 'progress' );
       if (e.lengthComputable) {
            progress.value = e.loaded/e.total;
      }
    }) 
})

xhr.open('POST', '/form/');
let formData = new FormData(document.forms.file);
xhr.send(formData); 


