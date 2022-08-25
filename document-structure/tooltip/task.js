
let textsWithTips = document.getElementsByClassName("has-tooltip");
textsWithTips = Array.from(textsWithTips);

textsWithTips.forEach((element, idx)=> {
    element.addEventListener('click', (event) => {
        event.preventDefault();
        let tip = element.getAttribute("title");
        let posLeft = element.offsetLeft;
        let posTop = element.offsetTop + 20;
        let id = "tooltip-id"+idx;
        element.removeAttribute("title");
        let inner = `<div class="tooltip" id="`+id+`" style="left: `+posLeft+`px; top: `+posTop+`px">`
                                + tip +
                        `</div> `;
        if (!document.getElementById(id))           
            element.insertAdjacentHTML('afterEnd', inner);
        let txt = document.getElementById(id);
        if (!txt.className.includes('tooltip_active'))
            txt.classList.add('tooltip_active')
        else
            txt.classList.remove('tooltip_active');
    })
})
