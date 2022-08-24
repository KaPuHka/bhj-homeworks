let activeAnimation = document.querySelector('.loader');
try {
    let xhr = new XMLHttpRequest();
    let srcUrl = "https://netology-slow-rest.herokuapp.com/";
    xhr.responseType = 'json';
    xhr.open('GET', srcUrl, true); 
    // xhr.withCredentials = true;
    xhr.onload  = function() {
        activeAnimation.classList.remove('loader_active');
        let jsonResponse = xhr.response;
        let data = jsonResponse.response.Valute;
        let inner;
        
        let items = document.getElementById('items');
        Object.values(data).forEach(item => {
            inner =`
                <div class="item">
                    <div class="item__code">
                    ` +item.CharCode+`
                    </div>
                    <div class="item__value">
                    `+item.Value+`
                    </div>
                    <div class="item__currency">
                        руб.
                    </div>
                </div>`;
            items.insertAdjacentHTML('beforeEnd', inner);
            
        });
        
    };
    xhr.send();

} catch(error) {
    console.error(error);
}



