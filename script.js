function disableButton(buttonToDisable) {
    buttonToDisable.disabled = true;
    buttonToDisable.style.display = 'none';
};

function enableButton(buttonToEnable) {
    buttonToEnable.disabled = false;
    buttonToEnable.style.display = 'flex';
};

function disableContainer(containerToDisable) {
  containerToDisable.style.display = 'none';
};

function enableContainer(containerToEnable) {
  containerToEnable.style.display = 'flex';
};


function getComputerSelection() {
    const options = ['rock', 'paper', 'scissors'];
    let choice = options[Math.floor(Math.random() * options.length)];
    choiceComputer.innerText = `Computer's choice: ${capitaliseFirstLetter(choice)}`;

    return choice;
};

function capitaliseFirstLetter(word) {
    return newWord = word[0].toUpperCase() + word.slice(1,);
};

function getRoundResult(roundResult, playerSign, computerSign) {
    let detailedResult = roundResult;

    if (roundResult === "You win! ") {
        detailedResult += `${capitaliseFirstLetter(playerSign)} ${playerSign === "scissors" ? "beat" : "beats"} ${
            capitaliseFirstLetter(computerSign)}`;
    }
    else {
        detailedResult += `${capitaliseFirstLetter(computerSign)} ${computerSign === "scissors" ? "beat" : "beats"} ${
            capitaliseFirstLetter(playerSign)}`;
    }

    return detailedResult;
};

function playRound(playerSelection) {
    const computerSelection = getComputerSelection();
    let answer = '';
    let finalAnswer = '';

    if (playerSelection === computerSelection) {
        finalAnswer = `Draw! You both have selected ${capitaliseFirstLetter(playerSelection)}`;
    }
    else {
        switch (playerSelection) {
            case "rock":
                if (computerSelection === "paper") {
                    answer = "You lose! ";
                }
                else {
                    answer = "You win! ";
                }
                break;
            case "paper":
                if (computerSelection === "rock") {
                    answer = "You win! ";
                }
                else {
                    answer = "You lose! ";
                }
                break;
            case "scissors":
                if (computerSelection === "rock") {
                    answer = "You lose! ";
                }
                else {
                    answer = "You win! ";
                }
                break;
        }

        finalAnswer= getRoundResult(answer, playerSelection, computerSelection);
    }
    resultRound.innerText = finalAnswer;
    return finalAnswer;
};

let playerScore = 0;
let computerScore = 0;
let currentRound = 1;

function resetGame() {
  // Reset the scores and current round
  playerScore = 0;
  computerScore = 0;
  currentRound = 1;

  // Clear the result and final elements
  resultRound.innerText = '';
  finalResult.innerText = '';
  finalVerdict.innerText = '';

  // Enable the game buttons
  buttonsChoice.forEach(button => {
    button.disabled = false;
  });

  // Disable the new game button
  buttonNewGame.disabled = true;
}

function playGame() {
  // Call the resetGame function to reset the game
  resetGame();

  // Set the initial score text
  scoreCurrent.innerText = `Score: ${playerScore} : ${computerScore}`;

  buttonsChoice.forEach(button => {
    button.addEventListener('click', (event) => {
      const playerChoice = event.target.textContent.toLowerCase();
      const resultCurrent = playRound(playerChoice);
      
      numberRound.innerText = `ROUND ${currentRound}`;
      currentRound++;
      choicePlayer.innerText = `Your choice: ${capitaliseFirstLetter(playerChoice)}`;

      if (resultCurrent.startsWith('You win!')) {
        playerScore++;
      } 
      else if (resultCurrent.startsWith('You lose!')) {
        computerScore++;
      } 
      else {
        playerScore++;
        computerScore++;
      };
      scoreCurrent.innerText = `Score: ${playerScore} : ${computerScore}`;

      if (playerScore === 5 || computerScore === 5) {
        finalResult.innerText = `FINAL SCORE: ${playerScore} : ${computerScore}`;
        if (playerScore > computerScore) {
          finalVerdict.innerText = 'Congratulations, you win!';
        } else if (computerScore > playerScore) {
          finalVerdict.innerText = 'Sorry, you lose!';
        } else {
          finalVerdict.innerText = 'It\'s a tie!';
        }

        // Disable the buttons to prevent further play
        buttonsChoice.forEach(button => {
          button.disabled = true;
        });

        // Display the new game and close buttons
        buttonNewGame.style.display = 'flex';
        buttonNewGame.disabled = false;   
        buttonClose.style.display = 'flex';
        buttonClose.disabled = false;
        messageFinal.style.display = 'flex';           
      }
    });
  });
};

// PRESTART CONTENT
const containerPreStart = document.createElement('div');
const greetings = document.createElement('div');
greetings.innerText = 'WELCOME TO ROCK-SCISSORS-PAPER!'
const buttonStartGame = document.createElement('button');
buttonStartGame.innerText = 'START';

document.body.appendChild(containerPreStart);
containerPreStart.appendChild(greetings);
containerPreStart.appendChild(buttonStartGame);
        
// MAIN CONTENT
const containerMain = document.createElement('div');
document.body.appendChild(containerMain);

const buttonsChoice = document.querySelectorAll('.buttonChoice');
buttonsChoice.forEach(button => {
  containerMain.appendChild(button)
});
// Round information
const containerRound = document.createElement('div');
const containerChoices = document.createElement('div');
const numberRound = document.createElement('p');
const choicePlayer = document.createElement('p');
const choiceComputer = document.createElement('p');
const resultRound= document.createElement('p');
const scoreCurrent = document.createElement('p');
containerMain.appendChild(containerRound);
containerRound.appendChild(containerChoices);
containerRound.appendChild(numberRound);
containerChoices.appendChild(choicePlayer);
containerChoices.appendChild(choiceComputer);
containerRound.appendChild(resultRound);
containerRound.appendChild(scoreCurrent);
// Final information
const containerFinal = document.createElement('div');
const finalResult = document.createElement('p');
const finalVerdict = document.createElement('p');
const messageFinal = document.createElement('p');
messageFinal.textContent = 'The game has ended. What would you like to do?';
messageFinal.style.display = 'none';
const buttonNewGame = document.createElement('button');
buttonNewGame.textContent = 'New Game';
disableButton(buttonNewGame);
const buttonClose = document.createElement('button');
buttonClose.textContent = 'Close';
disableButton(buttonClose);
containerMain.appendChild(containerFinal);
containerFinal.appendChild(finalResult);
containerFinal.appendChild(finalVerdict);
containerFinal.appendChild(messageFinal);
containerFinal.appendChild(buttonNewGame);
containerFinal.appendChild(buttonClose);
disableContainer(containerMain);


// CONTENT AFTER CLICKING THE 'CLOSE BUTTON'
const containerAfterClose = document.createElement('div');
const messageAfterClose = document.createElement('div');
const buttonMainContent = document.createElement('button'); ////

messageAfterClose.innerText = 'Thank you for the Game!'
document.body.appendChild(containerAfterClose);
containerAfterClose.appendChild(messageAfterClose);
containerAfterClose.style.display = 'none';
disableContainer(containerAfterClose);



buttonNewGame.addEventListener('click', () => {
    playGame();
  });

buttonClose.addEventListener('click', () => {
    containerMain.style.display = 'none';
    containerAfterClose.style.display = 'flex';
});

buttonStartGame.addEventListener('click', () => {
  disableContainer(containerPreStart);
  enableContainer(containerMain);
})

playGame();