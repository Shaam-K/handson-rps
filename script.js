let userInput = '';
let botInput = '';
let userImage = '';
let botImage = '';
let showGame = document.querySelector('.moves');
let showStatus = document.querySelector('.status');
let showScore = document.querySelector('.score');

let scoreBoard = {
    wins: 0,
    losses: 0,
    ties: 0
}

showScore.innerHTML = `<p> Wins: ${scoreBoard.wins} </p> <p> Losses: ${scoreBoard.losses} </p> <p> Ties: ${scoreBoard.ties} </p>`


function resetGame() {
    scoreBoard = {
        wins: 0,
        losses: 0,
        ties: 0
    }

    showScore.innerHTML = `<p> Wins: ${scoreBoard.wins} </p> <p> Losses: ${scoreBoard.losses} </p> <p> Ties: ${scoreBoard.ties} </p>`
}

function genBotMove() {

    randomNum = Math.random();
  
    if(randomNum < 0.33) {
      botInput = 'rock';
      botImage = 'images/rock-emoji.png';
    } else if (randomNum < 0.66) {
      botInput = 'paper';
      botImage = 'images/paper-emoji.png';
    } else {
      botInput = 'scissor';
      botImage = 'images/scissors-emoji.png';
    }
}

function setUser(user) {
    if (user == 'rock') {
        userInput = 'rock';
        userImage = 'images/rock-emoji.png'

        findWinner();
    }

    if (user == 'paper') {
        userInput = 'paper';
        userImage = 'images/paper-emoji.png';

        findWinner();
    }

    if (user == 'scissor') {
        userInput = 'scissor';
        userImage = 'images/scissors-emoji.png';
        
        findWinner();
    }
}

function findWinner() {
    genBotMove();
    showGame.innerHTML = `You <img src=${userImage}> Bot <img src=${botImage}>`;

    if (userInput == botInput) {
        showStatus.innerHTML = "Its a tie";
        scoreBoard.ties++;
    }

    else {
        if (userInput == 'rock') {
            if (botInput == 'scissor') {
                showStatus.innerHTML = "You won!";
                scoreBoard.wins++;
            }

            else {
                showStatus.innerHTML = "You lost!";
                scoreBoard.losses++;
            }
        }


        if (userInput == 'paper') {
            if (botInput == 'rock') {
                showStatus.innerHTML = "You won!";
                scoreBoard.wins++;
            }


            else {
                showStatus.innerHTML = "You lost!";
                scoreBoard.losses++;
            }
        }

        if (userInput == 'scissor') {
            if (botInput == 'paper') {
                showStatus.innerHTML = "You won!";
                scoreBoard.wins++;
            } 

            else {
                showStatus.innerHTML = "You lost!";
                scoreBoard.losses++;
            }
        }
    }

    showScore.innerHTML = `<p> Wins: ${scoreBoard.wins} </p> <p> Losses: ${scoreBoard.losses} </p> <p> Ties: ${scoreBoard.ties} </p>`
}

window.addEventListener('keydown', (event) => {
    if (event.key == 1) {
        userInput = 'rock';
        userImage = 'images/rock-emoji.png'

        findWinner();
    }

    if (event.key == 2) {
        userInput = 'paper';
        userImage = 'images/paper-emoji.png';

        findWinner();
    }


    if (event.key == 3) {
        userInput = 'scissor';
        userImage = 'images/scissors-emoji.png';
        
        findWinner();
    }
})
