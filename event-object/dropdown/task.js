// open and close dropdown
let list = document.querySelector(".dropdown__list");
let value = document.querySelector(".dropdown__value");

value.addEventListener('click', dropdown);

function dropdown(){
    let name = list.className;
    list.className = name.includes('active') ? 
        name.replace('dropdown__list_active', ''): name + ' dropdown__list_active';
}

let items= document.querySelectorAll(".dropdown__item");
items = Array.from(items).forEach(item => 
    item.addEventListener('click', (event) => changevalue(event, item.textContent)));

function changevalue(event, txt){
    value.textContent = txt; 
    dropdown();
    event.preventDefault();
}
 
