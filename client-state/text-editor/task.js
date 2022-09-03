let text = document.getElementById('editor');
let textValue = this.localStorage.getItem('textValue');
text.value = textValue;


text.addEventListener('keydown', (event)=> {
    if(event.key === 'Enter') {
        this.localStorage.setItem('textValue', text.value.trim());
    }
}) 

