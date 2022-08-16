// open and close dropdown
let list = document.querySelector(".dropdown__list");
let value = document.querySelector(".dropdown__value");

value.addEventListener('click', dropdown);

function dropdown(){
    let name = list.className;
    list.className = name.includes('active') ? 
        name.replace('dropdown__list_active', ''): name + ' dropdown__list_active';
}

// change value
let links = document.querySelectorAll(".dropdown__link");
links = Array.from(links).map(item => item.removeAttribute('href'));


let items= document.querySelectorAll(".dropdown__item");
items = Array.from(items).forEach(item => item.addEventListener('click', changevalue));

function changevalue(){
    value.textContent = this.textContent;
    dropdown();
}

// more as one 
