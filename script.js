let scores, roundScore, activePlayer;
points = [0,0];
roundscore = 0;
activePlayer = 1;





document.querySelector('.btn-roll').addEventListener('click', function(){
    //1. Random number
    let dice;
    dice = Math.floor(Math.random() * 6)+1;
    //2. Display the number
    let diceIcon = document.querySelector('.dice');
    diceIcon.classList.remove('hidden');
    diceIcon.src = `img/${dice}.svg`;
    //3. Update the round score IF the rolled score was NOT a 1;
    

})







