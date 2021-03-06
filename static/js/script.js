// alert('Hello');

function ageInDays() {
    let birthYear = prompt('What is your birth year?');
    let yearInDays = (2020 - birthYear) * 365;
    let h1 = document.createElement('h1');
    h1.setAttribute('id', 'ageDays');
    let conc = document.createTextNode('Your Age is ' + yearInDays + ' years old');
    h1.appendChild(conc);
    document.getElementById('age').appendChild(h1);
}

function reset() {
    document.getElementById('ageDays').remove();
}

function catGenerator() {
    let img = document.createElement('img');
    img.setAttribute('src', 'https://cdn.cnn.com/cnnnext/dam/assets/180830100926-02-new-zealand-cat-stock-super-tease.jpg');
    img.width = 200;
    document.getElementById('imageDiv').appendChild(img);
}

// Challenge 3 on paper, scissors, rock game

function rpsGame(yourChoice) {
    console.log(yourChoice.id);
    let humanChoice, computerChoice;
    humanChoice = yourChoice.id;
    computerChoice = numberToChoice(generateRandomNumber());
    console.log('computer choice is ', computerChoice);

    let results = decideWinner(humanChoice, computerChoice); // [0, 1] human lost / computer won
    let message = finalMessage(results) // 'You won'

    console.log(message);
    rpsFrontEnd(humanChoice, computerChoice, message) // These are the outputs to the screen
}

function generateRandomNumber() {
    return Math.floor(Math.random() * 3);
}

function numberToChoice(number) {
    return ['rock', 'paper', 'scissors'][number];
}

function decideWinner(humanChoice, computerChoice) {
    let rpsDatabase = {
        'rock': {'scissors': 1, 'rock': 0.5, 'paper': 0},
        'paper': {'rock': 1, 'paper': 0.5, 'scissors': 0},
        'scissors': {'paper': 1, 'scissors': 0.5, 'rock': 0}
    }

    var humanScore = rpsDatabase[humanChoice][computerChoice];
    var computerScore = rpsDatabase[computerChoice][humanChoice];
    
    return [humanScore, computerScore];
}

function finalMessage([humanScore, computerScore]) {
  if (humanScore === 0) {
      return {'message': 'You lost!', 'color': 'red'};
  } else if ( humanScore === 0.5) {
      return {'message': 'You tied!', 'color': 'yellow'};
  } else if ( humanScore === 1) {
    return {'message': 'You won!', 'color': 'green'};
 }
}

function rpsFrontEnd(humanImageChoice, computerImageChoice, finalMessage) {
    let imageDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }

    // removing the images so we can display the computer and human selected images

    document.getElementById('rock').remove(); 
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    // Creating containers for the images and message to be displayed
    let humanDiv = document.createElement('div');
    let computerDiv =  document.createElement('div');
    let messageDiv =  document.createElement('div');

    // Adding human selected image
    humanDiv.innerHTML = "<img src='" + imageDatabase[humanImageChoice] + "' style=' box-shadow: 10px 10px 22px 0px rgba(0, 0, 255, 0.658);'>";
    // humanDiv.innerHTML = "<img src='" + imageDatabase[humanImageChoice] + "' height=150 width=150>";
    document.getElementById('flex-game-box').appendChild(humanDiv);

    // Adding message with specific colours
    messageDiv.innerHTML = "<h2 >" + finalMessage.message + "</h2>";
    messageDiv.style.color = finalMessage.color;
    document.getElementById('flex-game-box').appendChild(messageDiv);

    // Adding computer selected image
    computerDiv.innerHTML = "<img src='" + imageDatabase[computerImageChoice] + "' style=' box-shadow: 10px 10px 22px 0px rgba(255, 0, 0, 0.658);'>";
    document.getElementById('flex-game-box').appendChild(computerDiv);
}

// For changing colours of buttons

let all_buttons = document.getElementsByTagName('button');
let copyAllButtons = [];
for (let i = 0; i < all_buttons.length; i++) {
    copyAllButtons.push(all_buttons[i].classList[1]);
}
console.log(copyAllButtons);
// copyAllButtons[0].classList.remove('btn-primary');

function buttonColourChanger(chosenColour) {
    console.log(chosenColour.value);
    if (chosenColour.value === 'red') {
        buttonRed();
    } else if (chosenColour.value === 'blue') {
        buttonBlue();
    } else if (chosenColour.value === 'green') {
        buttonGreen();
    } else if (chosenColour.value === 'reset') {
        buttonReset();
    } else if (chosenColour.value === 'random') {
        buttonRandom();
    }
}

function buttonRed() {
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger');
    }
}

function buttonBlue() {
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-primary');
    }
}

function buttonGreen() {
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');
    }
}

function buttonReset() {
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyAllButtons[i]);
    }
}

function buttonRandom() {
    let colours = ['btn-primary', 'btn-success', 'btn-danger'];

    for (let i = 0; i < all_buttons.length; i++) {
        let answer = Math.floor(Math.random() * 3);
        console.log(answer);
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(colours[answer]);
    }
}

// Coding black Jack game

/* This is a nicer way to target html button elements instead of adding onclick() function
* in your html code and calling hitAction() function from there, we can do all in
* javascript as shown below. Note that the hitAction function doesn't need an opening and
* closing brackets. We use just the name of the function.
*/
document.querySelector('#hit-button').addEventListener('click', hitAction);

document.querySelector('#stand-button').addEventListener('click', dealerLogic);

document.querySelector('#deal-button').addEventListener('click', blackJackDeal);

let blackJackGame = {
    'player': {'scoreSpan': '#player-score', 'div': '#playerBoard', 'score': 0},
    'dealer': {'scoreSpan': '#dealer-score', 'div': '#computerBoard', 'score': 0},
    'cards': ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'K', 'J', 'Q', 'A'],
    'cardsMap': {'2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'K': 10, 'J': 10, 'Q': 10, 'A': [1, 11]},
    'wins': 0,
    'losses': 0,
    'draws': 0,
    'isStand': false,
    'turnsOver': false
}

const PLAYER = blackJackGame['player'];
const DEALER = blackJackGame['dealer'];

const hitSound = new Audio('static/sounds/swish.m4a'); // Creating a sound using Audio() object
const winSound = new Audio('static/sounds/cash.mp3');
const lossSound = new Audio('static/sounds/aww.mp3');

function hitAction() {
    // hit button only works when isStand is false
    if (blackJackGame['isStand'] === false) {
        let card = randomCard();
        showCard(PLAYER, card);
        updateScore(card, PLAYER);
        showScore(PLAYER);
    }
}

function showCard(activePlayer, cardLink) {
    // alert('you clicked on hit button');
    if (activePlayer['score'] <= 21) {   
        let cardImage = document.createElement('img');
        cardImage.src = `./static/images/${cardLink}.png`;
        cardImage.setAttribute('id', 'card-images')
        document.querySelector(activePlayer['div']).appendChild(cardImage);

        hitSound.play(); // used to play the sound
    }
}

function blackJackDeal() {
  if (blackJackGame['turnsOver'] === true) {
      blackJackGame['isStand'] = false;
    computeWinner(); 
    // let winner = computeWinner();
    // showWinner(winner);
    let playerImages = document.querySelector('#playerBoard').querySelectorAll('img');

    let dealerImages = document.querySelector('#computerBoard').querySelectorAll('img');
    // console.log(allImages);

    for(let i = 0; i < playerImages.length; i++) {
        playerImages[i].remove();
    }

    for(let i = 0; i < dealerImages.length; i++) {
        dealerImages[i].remove();
    }
    PLAYER['score'] = 0;
    DEALER['score'] = 0;
    document.querySelector('#player-score').textContent = 0;
    document.querySelector('#dealer-score').textContent = 0;

    
    document.querySelector('#player-score').style.color = '#ffffff';
    document.querySelector('#dealer-score').style.color = '#ffffff';

    // change take to let's play on clickinh deal button and change its colour to black
    document.querySelector('#showResult').textContent = "Let's Play"; 
    document.querySelector('#showResult').style.color = 'black';

    blackJackGame['turnsOver'] === true;
  }
}

function randomCard() {
    let randomIndex = Math.floor(Math.random() * 13);
    return blackJackGame['cards'][randomIndex];
}

function updateScore(card, activePlayer) {
    if (card === 'A') {
         // If adding 11 keeps me below 21, then add 11 otherwise addd 1
        if ( activePlayer['score'] + blackJackGame['cardsMap'][card][1] <= 21) {
            activePlayer['score'] += blackJackGame['cardsMap'][card][1];
        } else {
            activePlayer['score'] += blackJackGame['cardsMap'][card][0]; 
        }
    } else {
        activePlayer['score'] += blackJackGame['cardsMap'][card];
    }
}

function showScore(activePlayer) {
    if (activePlayer['score'] > 21) {
        document.querySelector(activePlayer['scoreSpan']).textContent = 'BUST!'; 
        document.querySelector(activePlayer['scoreSpan']).style.color = 'red'; 
    } else {
        document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score'];
        document.querySelector(activePlayer['scoreSpan']).style.color = 'red'; 
    }
}

// Creating an async delay function 
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function dealerLogic() {
    blackJackGame['isStand'] = true // set isStand to true when Stand button is clicked
    
    while (DEALER['score'] < 16 && blackJackGame['isStand'] === true) {
        let card = randomCard();
        showCard(DEALER , card);
        updateScore(card, DEALER );
        showScore(DEALER );
        await sleep(1000); // calling the sleep function for every 1ms
    }

    blackJackGame['turnsOver'] = true // setting turnsOver to true to show everyone has finished playing
    let winner = computeWinner();
    showWinner(winner);
}

// Computing winner and return who just won
// Update wins, draws and losses
function computeWinner() {
    let winner;
    if (PLAYER['score'] <= 21) {
        // higher score than dealer or when dealer bursts
        if (PLAYER['score'] > DEALER['score'] || (DEALER['score'] > 21)) {
            blackJackGame['wins']++;
            winner = PLAYER;
        } else if (PLAYER['score'] < DEALER['score'] ) {
            blackJackGame['losses']++;
            winner = DEALER;
        } else if (PLAYER['score'] === DEALER['score'] ) {
            blackJackGame['draws']++;
        }

        // Condition: Player bursts but dealer doesn't
    } else if (PLAYER['score'] > 21 && DEALER['score'] <= 21) {
        blackJackGame['losses']++;
        winner = DEALER;

        // Condition: When Player and Dealer bursts
    } else if (PLAYER['score'] > 21 && DEALER['score'] > 21) {
        blackJackGame['draws']++;
    }
    console.log('winner is ', winner);
    return winner;
}

function showWinner(winner) {
    let message, messageColor;

    if (blackJackGame['turnsOver'] === true) {
        if (winner === PLAYER) {
            document.querySelector('#wins-points').textContent = blackJackGame['wins'];
            message = 'You won!';
            messageColor = 'green';
            winSound.play();
        } else if (winner === DEALER) {
            document.querySelector('#losses-points').textContent = blackJackGame['losses'];
            message = 'You lost!';
            messageColor = 'red';
            lossSound.play();
        } else {
            document.querySelector('#draws-points').textContent = blackJackGame['draws'];
            message = 'You drew';
            messageColor = 'black';
        }
    
        document.querySelector('#showResult').textContent = message;
        document.querySelector('#showResult').style.color = messageColor;
    }
}

