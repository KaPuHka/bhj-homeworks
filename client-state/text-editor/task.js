let text = document.getElementById('editor');
let textValue = this.localStorage.getItem('textValue');

if (textValue) {
    text.value = textValue;
} 

text.addEventListener('keydown', (event)=> {
    if(event.key === 'Enter') {
        if (text.value.length) {
            this.localStorage.setItem('textValue', text.value.trim());
        } else {
            this.localStorage.removeItem('textValue');
        }
    }
}) 

