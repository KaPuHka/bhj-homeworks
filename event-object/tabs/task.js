let tabs = document.querySelectorAll("#tabs1 .tab");
let itemActive = document.querySelector("#tabs1 .tab_active");
tabs = Array.from(tabs);
// find current active tab
let currentPos = tabs.indexOf(itemActive);

tabs.forEach(item => { item.onclick = function(){
    // save previous active tab
    let previousPos = currentPos;
    // new active tab is this tab
    currentPos = tabs.indexOf(item);
    switchTabs(previousPos, currentPos);
}});

// find all elements, which should change the status
let contents = document.querySelectorAll("#tabs1 .tab__content");
contents = Array.from(contents);

// actualize
function switchTabs(pre, act){
    actElements(tabs);
    actElements(contents);
    // switch className
    function actElements(elements) {
        let classActive = elements[pre].className;
        elements[pre].className = elements[act].className;
        elements[act].className = classActive;    
    }
}



