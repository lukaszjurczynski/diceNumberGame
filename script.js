let scores, roundScore, activePlayer, diceIcon, gamePlaying;
start();

document.querySelector('.btn-roll').addEventListener('click', function(){
    if(gamePlaying) {
        //1. Random number
        let dice;
        dice = Math.floor(Math.random() * 6)+1;
        //2. Display the number
        diceIcon = document.querySelector('.dice');
        diceIcon.classList.remove('hidden');
        diceIcon.src = `img/${dice}.svg`;
        //3. Update the round score IF the rolled score was NOT a 1;
        if (dice !== 1) {
            roundScore += dice;
            document.querySelector(`#round-${activePlayer}`).textContent = roundScore;
        } else {
            //next player
            nextPlayer();
        }
    }
})

document.querySelector('.btn-add').addEventListener('click', function(){
    if(gamePlaying){
 // Add roundScore to Global score
 points[activePlayer] += roundScore;
 //Update the UI
 document.querySelector('#score-'+ activePlayer).textContent = points[activePlayer];
 
 //Check if player won the game
 if (points[activePlayer] >= 20) {
     document.querySelector(`#name-${activePlayer}`).textContent = "WINNER!";
     diceIcon.classList.add('hidden');
     document.querySelector(`.player-${activePlayer}-block`).classList.add('winner');
     document.querySelector(`.player-${activePlayer}-block`).classList.remove('active');
     gamePlaying = false;
 } else {
     nextPlayer();
 }
    }
   
})

function nextPlayer (){
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;
        document.querySelector('#round-0').textContent = '0';
        document.querySelector('#round-1').textContent = '0';

        document.querySelector('.player-0-block').classList.toggle('active');
        document.querySelector('.player-1-block').classList.toggle('active');
        diceIcon.classList.add('hidden');
}

document.querySelector('.btn-new').addEventListener('click', start);

function start() {
    points = [0, 0];
    activePlayer = 0;
    roundScore = 0;

    document.querySelector('#score-0').textContent = '0';
    document.querySelector('#round-0').textContent = '0';
    document.querySelector('#score-1').textContent = '0';
    document.querySelector('#round-1').textContent = '0';
    document.querySelector(`#name-0`).textContent = "Player 1";
    document.querySelector(`#name-1`).textContent = "Player 2";
    document.querySelector(`.player-0-block`).classList.remove('winner');
    document.querySelector(`.player-1-block`).classList.remove('winner');
    document.querySelector(`.player-0-block`).classList.remove('active');
    document.querySelector(`.player-1-block`).classList.remove('active');
    document.querySelector(`.player-0-block`).classList.add('active');
    gamePlaying = true;
}





