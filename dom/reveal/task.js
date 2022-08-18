let reveals = document.querySelectorAll('.reveal');
reveals = Array.from(reveals);

setInterval(()=> {
    reveals.forEach( item => {
        let itemClass = item.className;
        if (isInViewport(item)){
            item.className = itemClass + ' reveal_active';
        } else {
            item.className = itemClass.replace('reveal_active','');
        }
    }); 
}, 1000);



let isInViewport = function(element){
    const viewportHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const elemBottom = element.getBoundingClientRect().bottom;   
    return elementTop > viewportHeight || elemBottom < 0   ?  false : true ;
};
