let userInput = '';
let botInput = '';
let userImage = '';
let botImage = '';
let showGame = document.querySelector('.moves');
let showStatus = document.querySelector('.status');
let showScore = document.querySelector('.score');
let displayWhole = document.querySelector('.gamePlay');



let scoreBoard = {
    wins: 0,
    losses: 0,
    ties: 0
}


function resetGame() {
    window.location.reload();
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

function findWinner(user,bot) {
    showGame.innerHTML = `You <img src=${userImage}> Bot <img src=${botImage}>`

    if (user == bot) {
        showStatus.innerHTML = "Its a tie";
        scoreBoard.ties++;
    }

    else {
        if (user == 'rock') {
            if (bot == 'scissor') {
                showStatus.innerHTML = "You won!";
                scoreBoard.wins++;
            }

            else {
                showStatus.innerHTML = "You lost!";
                scoreBoard.losses++;
            }
        }


        if (user == 'paper') {
            if (bot == 'rock') {
                showStatus.innerHTML = "You won!";
                scoreBoard.wins++;
            }


            else {
                showStatus.innerHTML = "You lost!";
                scoreBoard.losses++;
            }
        }

        if (user == 'scissor') {
            if (bot == 'paper') {
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
        genBotMove();

        findWinner(userInput, botInput);
    }

    if (event.key == 2) {
        userInput = 'paper';
        userImage = 'images/paper-emoji.png';
        genBotMove();

        findWinner(userInput, botInput);
    }


    if (event.key == 3) {
        userInput = 'scissor';
        userImage = 'images/scissors-emoji.png';
        genBotMove();
        
        findWinner(userInput, botInput);
    }
})
