function disableContainer(containerToDisable) {
  containerToDisable.style.display = 'none';
};

function enableContainer(containerToEnable) {
  containerToEnable.style.display = 'flex';
};

function showModalWindow() {
  containerModal.style.display = 'flex';
  contentModal.style.display = 'flex';
};

function hideModalWindow() {
  containerModal.style.display = 'none';
  contentModal.style.display = 'none';
}

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

  // Set the initial score text
  scoreCurrent.innerText = `Score: ${playerScore} : ${computerScore}`;
  numberRound.innerText = `ROUND ${currentRound}`;
  playGame(playerScore, computerScore, currentRound); ///
}

function playGame(playerScore, computerScore, currentRound) {
  // Call the resetGame function to reset the game
  //resetGame();
  console.log(`Score before the game: ${playerScore}, ${computerScore}`);
  

  buttonsChoice.forEach(button => {
    button.addEventListener('click', (event) => {
      const playerChoice = event.target.textContent.toLowerCase();
      const resultCurrent = playRound(playerChoice);
      console.log(resultCurrent);
      
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
      console.log(`player score: ${playerScore}, computer score: ${computerScore}`);

      if (playerScore === 5 || computerScore === 5) {
        finalResult.innerText = `FINAL SCORE: ${playerScore} : ${computerScore}`;
        console.log(finalResult);
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

        showModalWindow();   
        return;    
      }
    });
  });
};

// PRESTART CONTENT
const containerPreStart = document.createElement('div');
const greetings = document.createElement('div');
const buttonStartGame = document.createElement('button');
greetings.innerText = 'WELCOME TO ROCK-SCISSORS-PAPER!'
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
disableContainer(containerMain);
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
const containerModal = document.createElement('div');
const contentModal = document.createElement('div');

const finalResult = document.createElement('p');
const finalVerdict = document.createElement('p');
const messageFinal = document.createElement('p');
const buttonNewGame = document.createElement('button');
const buttonClose = document.createElement('button');
buttonClose.textContent = 'Close';
containerModal.setAttribute('id', 'modal-overlay');
contentModal.setAttribute('id', 'modal');
messageFinal.textContent = 'The game has ended. What would you like to do?';
buttonNewGame.textContent = 'New Game';
containerMain.appendChild(containerModal);
containerModal.appendChild(contentModal);
contentModal.appendChild(finalResult);
contentModal.appendChild(finalVerdict);
contentModal.appendChild(messageFinal);
contentModal.appendChild(buttonNewGame);
contentModal.appendChild(buttonClose);

// CONTENT AFTER CLICKING THE 'CLOSE BUTTON'
const containerAfterClose = document.createElement('div');
const messageAfterClose = document.createElement('div');
const buttonMainContent = document.createElement('button'); 
buttonMainContent.innerText = 'COME BACK TO THE MAIN PAGE';
messageAfterClose.innerText = 'Thank you for the Game!'
document.body.appendChild(containerAfterClose);
containerAfterClose.appendChild(messageAfterClose);
containerAfterClose.appendChild(buttonMainContent);
containerAfterClose.style.display = 'none';
disableContainer(containerAfterClose);



buttonNewGame.addEventListener('click', () => {
    hideModalWindow() 
    resetGame();
  });

buttonClose.addEventListener('click', () => {
    containerMain.style.display = 'none';
    containerAfterClose.style.display = 'flex';
});

buttonStartGame.addEventListener('click', () => {
  disableContainer(containerPreStart);
  enableContainer(containerMain);
});

buttonMainContent.addEventListener('click', () => {
  window.location.reload();
});

resetGame();
