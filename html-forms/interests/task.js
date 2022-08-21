let boxes = document.getElementsByClassName("interests_active");

boxes = Array.from(boxes);
boxes.forEach(cb => {
    // find parent, then find input
    let current = cb.closest('.interest').querySelector('input');
    let children = cb.querySelectorAll('input');
    let parent = current.closest('.interests_active');
    
    children = Array.from(children);
    current.addEventListener('change', () => {
        let state = current.checked;
        children.forEach(child => {
            child.checked = state;
            child.indeterminate = false;
        })
        if (parent) { 
            if (state && !(Array.from(parent.querySelectorAll('input')).find(c => !c.checked)) ){
                parent.closest('.interest').querySelector('input').indeterminate = false;
                parent.closest('.interest').querySelector('input').checked = true;
            } else if (!state && !(Array.from(parent.querySelectorAll('input')).find(c => c.checked)) ) {
                parent.closest('.interest').querySelector('input').indeterminate = false;
                parent.closest('.interest').querySelector('input').checked = false;
            }
        }
        
    })
    children.forEach(child => {
        child.addEventListener('change', () => {
            if(!child.checked){
                current.indeterminate = children.find(c => c.checked);
                current.checked = false;
            } else {
                let allChecked = children.find(c => !c.checked);
                current.indeterminate = allChecked;
                current.checked = !allChecked;
            }
        })
    })
});
