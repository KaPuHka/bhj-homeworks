
let textsWithTips = document.getElementsByClassName("has-tooltip");
textsWithTips = Array.from(textsWithTips);

textsWithTips.forEach((element, idx)=> {
    let tip = element.getAttribute("title");
    let posLeft = element.offsetLeft;
    let posTop = element.offsetTop + 20;
    let id = "tooltip-"+idx;
    element.removeAttribute("title");
    let inner = `<div class="tooltip" id="`+id+`" style="left: `+posLeft+`px; top: `+posTop+`px">`
                                + tip +
                          `</div> `;
                    
    element.insertAdjacentHTML('beforeEnd', inner);
    element.addEventListener('click', (event) => {
        event.preventDefault();
        
        let txt = document.getElementById(id);
        if (!txt.className.includes('tooltip_active'))
            txt.classList.add('tooltip_active')
        else
            txt.classList.remove('tooltip_active');
    })
});