let counts = document.getElementsByClassName('product__quantity-control');
counts = Array.from(counts);
counts.forEach(count => 
    count.addEventListener('click', (event)=>{
        let changeButtons = Array.from(count.classList);
        let product = count.closest(".product");
        let x = product.getElementsByClassName("product__quantity-value")[0];
        quantity = x.innerText;

        if (changeButtons.includes("product__quantity-control_inc"))
            quantity++;
        if (changeButtons.includes("product__quantity-control_dec") && quantity>0)
            quantity--;   
        x.innerText = quantity;
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
    let x = product.getElementsByClassName("product__quantity-value")[0];
    let quantity = x.innerText;
    x.innerText = 1;
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
            x = alreadyInCart.getElementsByClassName("cart__product-count")[0]; 
            x.innerText = parseInt(quantity) +parseInt(x.innerText);
        }
    }
    
}