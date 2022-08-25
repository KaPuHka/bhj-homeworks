let counts = document.getElementsByClassName('product__quantity-control');
counts = Array.from(counts);
counts.forEach(count => 
    count.addEventListener('click', (event)=>{
        let changeButtons = Array.from(count.classList);
        let product = count.closest(".product");
        let quantityEle = product.getElementsByClassName("product__quantity-value")[0];
        quantity = quantityEle.innerText;

        if (changeButtons.includes("product__quantity-control_inc"))
            quantity++;
        if (changeButtons.includes("product__quantity-control_dec") && quantity>1)
            quantity--;   
        quantityEle.innerText = quantity;
}))

let addButtons = document.getElementsByClassName('product__add');
addButtons = Array.from(addButtons);
addButtons.forEach(adb => 
    adb.addEventListener('click', (event) => {
        let product = adb.closest(".product");
        addToCart(product);
}))

let cart = document.querySelector('.cart__products');
function addToCart(product) {
    let id = product.getAttribute("data-id");
    let quantityEle = product.getElementsByClassName("product__quantity-value")[0];
    let quantity = quantityEle.innerText;
    quantityEle.innerText = 1;
    if (quantity > 0) {
        let alreadyInCart = document.getElementById(id);
        if ( !alreadyInCart) {
            let imgSrc = product.querySelector('img').getAttribute("src");
            let inner = `<div class="cart__product" data-id="`+id+`" id="`+id+`">
                            <img class="cart__product-image" src="`+imgSrc+`">
                            <div class="cart__product-count">`+quantity+`</div>
                        </div>`;
            cart.insertAdjacentHTML('beforeEnd', inner);
        } else {
            quantityEle = alreadyInCart.getElementsByClassName("cart__product-count")[0]; 
            quantityEle.innerText = parseInt(quantity) +parseInt(quantityEle.innerText);
        }
    }
    
}