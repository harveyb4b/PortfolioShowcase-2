const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

const MAX_HIGH_SCORES = 5;

finalScore.innerText = mostRecentScore;
/*Attempting to add user name initial properties of at least 3
function checkUsername () {
    var elMsg = document.getElementById ('feedback');
    var elUsername = document.getElementById ('username');

if (elUsername.value.length < 3) {
elMsg.textContent = 'Username must be 3 characters or less';
 }   else {
 elMsg.textContent = '';
   }
}*/

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
       
});



saveHighScore = (e) => {
    e.preventDefault();


    const score = {
        score: mostRecentScore,
        name: username.value,
    };
    highScores.push(score);
    highScores.sort((a, b) => b.score - a.score);
    highScores.splice(5);

    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.assign('highScores.html');
}
