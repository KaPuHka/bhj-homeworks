const messages = document.querySelector( '.chat-widget__messages' );

messages.innerHTML += `
  <div class="message">
    <div class="message__time">`+getCurrentFormattedTime()+`</div>
    <div class="message__text">
      Добрый день, мы ещё не проснулись. Позвоните через 10 лет
    </div>
  </div>
`;

const texts = [
    'В этом нет смысла. На каком языке Вы пытаетесь со мной общаться? ',
    'Здравствуйте. Я ничем не могу Вам помочь',
    'Сначала скажите, как Вы нашли нас?',
    'Звучит неубедительно.',
    'Попробуйте перезагрузить страницу',
    'Где Вы находитесь территориально?',
    'Сформулируйте здесь в чате Ваши претензии',
    'Задавайте правильные вопросы',
    'С какой целью Вы интересуетесь нашей продукцией?',
    'Оператор Олег ответит Вам в ближайшие три минуты.'
]


// chat-widget_active
let chart = document.querySelector(".chat-widget");
chart.addEventListener('click', () => {
    chart.classList.add('chat-widget_active');
        
});

// По нажатию Enter отправкa в чат непустого текстового сообщения
let inputMessage = document.getElementById('chat-widget__input');
inputMessage.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        send(inputMessage);
        clean(inputMessage);
    }
})
// inputMessage
// inputMessage.addEventListener('input', (event) => {
//    console.log(inputMessage.value);
// }) 

function clean(ele){
   // if (event.key === 'Enter') {
        ele.value = '';
   // } 
}


// onkeydown="send(this)"  
function send(ele){
    // if (event.key === 'Enter'
    if (ele.value !== '') {
        let chartId = 'bot-'+document.getElementsByClassName('message_client').length+1;

        // inner html
        messages.innerHTML += `
            <div class="message message_client">
            <div class="message__time">`
                +getCurrentFormattedTime()+
            `</div>
            <div class="message__text">`
                + ele.value +
            `</div>
        </div>
        `;
        messages.innerHTML += `
            <div class="message">
            <div class="message__time">`
                +getCurrentFormattedTime()+
            `</div>
            <div class="message__text" id="`+chartId+`">`
                +texts[Math.floor(Math.random()*texts.length)]+
            `</div>
        </div>
        `;

        let last = document.getElementById(chartId);
        last.scrollIntoView();
    }
}



// time
function getCurrentFormattedTime() {
    let currentDate = new Date();
    let h = currentDate.getHours() < 10 ? '0'+currentDate.getHours() : currentDate.getHours();
    let min = currentDate.getMinutes() < 10 ? '0'+currentDate.getMinutes() : currentDate.getMinutes();
    return h+':'+min;
}