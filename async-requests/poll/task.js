const styles = `
    .poll__answers_active {
        padding-bottom: 4px;
    }
    .poll__answer {
        margin-left: 2px;
    }
    .poll__answers_hidden {
        visibility: hidden;
    }
    .votes {
        font-weight: bold;
    }
`;
const styleSheet = document.createElement("style")
styleSheet.innerText = styles
document.head.appendChild(styleSheet)



try {
    let xhr = new XMLHttpRequest();
    let srcUrl = "https://netology-slow-rest.herokuapp.com/poll.php";
    xhr.responseType = 'json';
    xhr.open('GET', srcUrl, true); 
    let poll = document.getElementById('poll__title');
    xhr.onload  = function() {
        let jsonResponse = xhr.response;
        let inner; let id;
        poll.textContent = jsonResponse.data.title;
        let allAnswers = document.getElementById('poll__answers');
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
                allAnswers.classList.add('poll__answers_hidden');
                alert('Cпасибо ваш голос засчитан!');
                const xhrPost = new XMLHttpRequest();
                xhrPost.open( 'POST', 'https://netology-slow-rest.herokuapp.com/poll.php' );
                xhrPost.setRequestHeader( 'Content-type', 'application/x-www-form-urlencoded' );
                xhrPost.send( 'vote='+jsonResponse.id+'&answer='+idx );
                xhrPost.responseType = 'json';
                xhrPost.onload  = function() {
                    getStatistic(xhrPost.response)
                };
            })
        }
    };
    xhr.send();

    function getStatistic(jsonStatistics) {
        let count = jsonStatistics.stat.reduce((count, item) => count + item.votes, 0);
        
        
        jsonStatistics.stat.forEach(item => {
            let precentVote = 100*item.votes/count;
            inner = `<div >
                        `+ item.answer+`: 
                        <span class="votes">`+ precentVote.toFixed(2)+` % </span>
                    </div>`;
            poll.insertAdjacentHTML('afterEnd', inner);
        }) 
    }

    
} catch(error) {
    console.error(error);
}