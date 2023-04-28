//PRE-CONTENT
const containerPreStart = document.createElement('div');
const buttonStartGame = document.createElement('button');
// MAIN CONTENT
const containerMain = document.createElement('div');
const containerButtonsChoice = document.getElementById('buttons-container');;
const buttonsChoice = document.querySelectorAll('.buttonsChoice');
// MODAL WINDOW
const containerModal = document.createElement('div');
const contentModal = document.createElement('div');
const buttonNewGame = document.createElement('button');
const buttonClose = document.createElement('button');
// CONTENT AFTER 'CLOSE' BUTTON
const containerAfterClose = document.createElement('div');
const buttonHomePage = document.createElement('button');

let playerScore = 0;
let computerScore = 0;
let roundNumber = 1; 

containerPreStart.setAttribute('id', 'container-prestart');
containerPreStart.setAttribute('class', 'containers-prestart containers');
buttonStartGame.setAttribute('id', 'buttonStartGame');
buttonStartGame.setAttribute('class', 'buttons');
buttonStartGame.innerText = 'START GAME';
containerMain.setAttribute('id', 'container-main');
containerMain.setAttribute('class', 'containers-main containers');
containerMain.style.display = 'none';
containerMain.appendChild(containerModal);
containerModal.setAttribute('id', 'container-modal');
containerModal.setAttribute('class', 'containers-modal containers');
contentModal.setAttribute('id', 'content-modal');
contentModal.setAttribute('class', 'containers-modal containers');
buttonNewGame.setAttribute('id', 'button-newgame');
buttonNewGame.setAttribute('class', 'buttons-modal buttons');
buttonNewGame.innerText = 'NEW GAME';
buttonNewGame.disabled = true;
buttonClose.setAttribute('id', 'button-close');
buttonClose.setAttribute('class', 'buttons-modal buttons');
buttonClose.innerText = 'CLOSE';
buttonClose.disabled = true;
containerAfterClose.setAttribute('id', 'container-afterclose');
containerAfterClose.setAttribute('class', 'containers-afterclose containers');
containerAfterClose.style.display = 'none';
buttonHomePage.setAttribute('id', 'button-homepage');
buttonHomePage.setAttribute('class', 'buttons-afterclose buttons');
buttonHomePage.innerText = 'BACK TO HOME PAGE';
buttonHomePage.disabled = true;



document.body.appendChild(containerPreStart);
containerPreStart.appendChild(buttonStartGame);
document.body.appendChild(containerMain);
containerMain.appendChild(containerButtonsChoice);
containerMain.appendChild(containerModal);
containerModal.appendChild(contentModal);
contentModal.appendChild(buttonNewGame);
contentModal.appendChild(buttonClose);
document.body.appendChild(containerAfterClose);
containerAfterClose.appendChild(buttonHomePage);

buttonStartGame.addEventListener('click', () => {
  containerPreStart.style.display = 'none';
  containerMain.style.display = 'flex';
});

buttonsChoice.forEach(button => {
  button.addEventListener('click', handleButtonsChoiceClick);
});

buttonNewGame.addEventListener('click', newGame);
buttonClose.addEventListener('click', moveToCloseContent);
buttonHomePage.addEventListener('click', moveToMainPage);

function disableButtonsChoice() {
  buttonsChoice.forEach(button => {
    button.disabled = true;;
  })
}

function enableButtonsChoice() {
  buttonsChoice.forEach(button => {
    button.disabled = false;;
  })
};

function showModalWindow() {
  containerModal.style.display = 'flex';
  contentModal.style.display = 'flex';
  buttonNewGame.disabled = false;
  buttonClose.disabled = false;
};

function hideModalWindow() {
  containerModal.style.display = 'none';
  contentModal.style.display = 'none';
  buttonNewGame.disabled = true;
  buttonClose.disabled = true;
}

function moveToCloseContent() {
  hideModalWindow();
  containerMain.style.display = 'none';
  buttonNewGame.disabled = true;
  containerAfterClose.style.display = 'flex';
  buttonHomePage.disabled = false;
};

function moveToMainPage() {
  window.location.reload();
}

function handleButtonsChoiceClick(event) {
  const playerChoice = event.target.innerText.toLowerCase();
  playGame(playerChoice);
};

function getComputerChoice() {
  const options = ['rock', 'paper', 'scissors'];
  return options[Math.floor(Math.random() * options.length)];
};

function capitaliseFirstLetter(word) {
  return word[0].toUpperCase() + word.slice(1,);
};

function getRoundComment(resultToComment, playerSelection, computerSelection) {
  if (resultToComment === 'You win!') {
    return `${capitaliseFirstLetter(playerSelection)} ${playerSelection === 'scissors' ? 'beat' : 'beats'} ${
        capitaliseFirstLetter(computerSelection)}`;
      }
  else {
    return `${capitaliseFirstLetter(computerSelection)} ${computerSelection === 'scissors' ? 'beat' : 'beats'} ${
        capitaliseFirstLetter(playerSelection)}`;
      }
};

function updateScore(resultNew) {
  if (resultNew === 'You win!') {
    playerScore++;
  }
  else if (resultNew === 'Computer wins!') {
    computerScore++;
  }
};

function newGame(){
  playerScore = 0;
  computerScore = 0;
  roundNumber = 1;
  
  enableButtonsChoice();
  hideModalWindow();
};

function playGame(playerSign) {
  let computerSign = getComputerChoice();
  let roundResult = 'It\'s a tie!';
  let roundComment = `You both have selected ${capitaliseFirstLetter(playerSign)}`;

  console.log(`Round: ${roundNumber}`);
  console.log(`Your choice: ${capitaliseFirstLetter(playerSign)}`);
  console.log(`Computer choice: ${capitaliseFirstLetter(computerSign)}`);

  if (playerSign !== computerSign) {
    switch (playerSign) {
      case 'rock':
        if (computerSign === 'paper') {
          roundResult = 'Computer wins!';
        }
        else {
          roundResult = 'You win!';
        }
        break;
      case 'paper':
        if (computerSign === 'rock') {
          roundResult = 'You win!';
        }
        else {
          roundResult = 'Computer wins!';
        }
        break;
      case 'scissors':
        if (computerSign === 'rock') {
          roundResult = 'Computer wins!';
        }
        else {
          roundResult = 'You win!';
        }
        break;
    }
    roundComment = getRoundComment(roundResult, playerSign, computerSign);
  }
  
  updateScore(roundResult);
  roundNumber++;

  console.log('Round result:',roundResult, roundComment);
  console.log(`Player score: ${playerScore}\nComputer score: ${computerScore}`);

  if (playerScore === 5 || computerScore === 5) {
    console.log('Game Over!');
    console.log(`Final Score:\nPlayer:${playerScore}\nComputer${computerScore}`);

    if (playerScore > computerScore) {
      console.log('You win the game!');
    } 
    else if (playerScore < computerScore) {
      console.log('The computer wins the game!');
    } 
    else {
      console.log('The game ends in a tie!');
    }
    disableButtonsChoice();
    showModalWindow();
  }
};
