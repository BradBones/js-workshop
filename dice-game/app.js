/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

// Global variables declared here to avoid writting var over and over.
var scores, roundScores, activePlayer;

// Default settings for main math mechanics.
// ...note that 'scores' holds both player's scores as an array as it's DRYer.
scores = [0, 0];
roundScore = 0;
activePlayer = 0;

// Hide the dice in the begining using CSS display set to 'none'.
document.querySelector('.dice').style.display = 'none';

// Setting all scores to 0 by default in the DOM.
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

// Event handler with an anonymous function for the dice roll button.
document.querySelector('.btn-roll').addEventListener('click', function() {
    // Generate a random number between 0-5 and add 1 to make it 1-6 and assign it to the dice variable.
    var dice = Math.floor(Math.random() * 6) + 1;
    // Display the result.
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';
    // Update the round score IF the rolled number was not a 1.
    if (dice !== 1) {
        // Add score
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
        // Next player's turn.
        nextPlayer();
    }
});


// Set up for the hold button.
document.querySelector('.btn-hold').addEventListener('click', function() {
    // Add current sore to global score.
    scores[activePlayer] += roundScore;
    // Update the UI.
    document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
    // Check if player won the game.
    if (scores[activePlayer] >= 20) {
        document.getElementById('name-' + activePlayer).textContent = 'Winner!';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
    } else {
        // Next player's turn.
        nextPlayer();
    }
});


// Inter-round reset function - Resets the UI each time players switch turns within a game.
function nextPlayer() {
    // Next player - using the ternary operator instead of an IF statement.
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    // Set the roundScore back to 0 (so player looses thier accumulated points).
    roundScore = 0;
    // Reset unheld (banked) scores to 0.
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    // Switch UI to the other player.
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';
}




/*************
 * IDEAS TO MAKE IT BETTER
 */
// Have the dice rotate 90 degrees per click, so that when the same number is rolled twice in a row, it still seems like something happened.
// When you roll a 1, there should be a message.
// Animation to show the trun being changed from player to player. (Page of a book turning?)

// // Printing the dice roll result to the DOM (two methods): (Note that in both cases the #ID can be manipulated in JS!)
// // ...method one '.textContent' - Use case: When plain text is required (less code).
// document.querySelector('#current-' + activePlayer).textContent = dice;
// // ...method two '.innerHTML' - Use case: When HTML tags need to be written to the DOM.
// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';


// // Adding or removing classes:
    // document.querySelector('.player-0-panel').classList.remove('active');
    // document.querySelector('.player-1-panel').classList.add('active');









