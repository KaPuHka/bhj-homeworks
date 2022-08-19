let fontsizes = document.querySelectorAll('.book__control_font-size > .font-size');
fontsizes = Array.from(fontsizes);


fontsizes.forEach(item => { item.addEventListener("click", (event) => {
    let active = fontsizes.find(font => font.className.includes('active'));
    active.className = active.className.replace('font-size_active', '');

    let itemClass = item.className;
    item.className = itemClass + ' font-size_active';
    event.preventDefault();

    let size = item.getAttribute('data-size');
    setFontSize(size);
})});


let book = document.getElementById('book');
function setFontSize(size) {
    if (size === 'small')
        book.className = 'book book_fs-small';
    else if (size === 'big')
        book.className = 'book book_fs-big';
    else
        book.className = 'book';
}