try {
    let xhr = new XMLHttpRequest();
    let srcUrl = "https://netology-slow-rest.herokuapp.com/poll.php";
    xhr.responseType = 'json';
    xhr.open('GET', srcUrl, true); 
    xhr.onload  = function() {
        let jsonResponse = xhr.response;
        let inner; let id;
        document.getElementById('poll__title').textContent = jsonResponse.data.title;
        let allAnswers = document.getElementById('poll__answers');
        allAnswers.classList.remove('poll__answers_active');
        jsonResponse.data.answers.forEach((answer, idx) => {
            id = 'answ-'+idx;
            inner = `<button class="poll__answer" id="`+id+`">
                        `+ answer+`
                    </button>`;
            allAnswers.insertAdjacentHTML('beforeEnd', inner);
            vote(idx);
        });

        function vote(idx) {
            id = 'answ-'+idx;
            document.getElementById(id).addEventListener('click', (event)=> {
                event.preventDefault();
                const xhrPost = new XMLHttpRequest();
                xhrPost.open( 'POST', 'https://netology-slow-rest.herokuapp.com/poll.php' );
                xhrPost.setRequestHeader( 'Content-type', 'application/x-www-form-urlencoded' );
                xhrPost.send( 'vote='+jsonResponse.id+'&answer='+idx );
                xhrPost.onload  = function() {
                    getStatistic(xhrPost.response)
                };
            })
        }
    };
    xhr.send();

    function getStatistic(jsonStatistics) {
        
    }

    
} catch(error) {
    console.error(error);
}