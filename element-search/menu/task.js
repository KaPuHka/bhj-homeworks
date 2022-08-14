
// if menu_sub => remove href
let menuSub = document.querySelectorAll("ul.menu_sub");
menuSub = Array.from(menuSub);
menuSub.forEach(item => {
    let itemsSub = item.closest('.menu__item');
    let itemHref = itemsSub.querySelector('a');
    itemHref.removeAttribute('href');
});


// click on 'menu main links'  => activate 'menu items'
let menuLinks = document.querySelectorAll("ul.menu_main > li.menu__item > a.menu__link"); 
menuLinks = Array.from(menuLinks);
menuLinks.forEach(item => { item.onclick = function(){
    closeAll();
    let itemsSub = item.closest('.menu__item');
    let itemActive = itemsSub.querySelector('.menu_sub');
    let itemClass = itemActive.className;
    itemActive.className = itemClass + ' menu_active';
}});

function closeAll(){
    menuSub.forEach(item => {
        let itemClass = item.className;
        item.className = itemClass.replace('menu_active','');
    });
}




