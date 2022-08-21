let boxes = document.getElementsByClassName("interests_active");

boxes = Array.from(boxes);
boxes.forEach(cb => {
    // find parent, then find input
    let current = cb.closest('.interest').querySelector('input');
    let children = cb.querySelectorAll('input');
    children = Array.from(children);
    current.addEventListener('change', () => {
        let state = current.checked;
        children.forEach(child => {
            child.checked = state;
        })
    })
    children.forEach(child => {
        child.addEventListener('change', () => {
            if(!child.checked){
                current.indeterminate = children.find(c => c.checked);
                current.checked = false;
            }  else {
                let allChecked = children.find(c => !c.checked);
                current.indeterminate = allChecked;
                current.checked = !allChecked;
            }
        })
    })
});
