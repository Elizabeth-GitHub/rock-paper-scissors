//PRE-CONTENT
const containerPreStart = document.createElement('div');
const containerHeaderStart = document.createElement('div');
const headerStart = document.createElement('h1');
const containerTextWelcome = document.createElement('div');
const textWelcome = document.createElement('p');
const containerImageStart = document.createElement('div');
const imageStart = document.createElement('img');
const containerBottomContent = document.createElement('div');
const textReadyStart = document.createElement('p');
const buttonStartGame = document.createElement('button');
// MAIN CONTENT
const containerMain = document.createElement('div');
const containerRules = document.createElement('div');
const rules = document.createElement('p');
const containerLetsStart = document.createElement('div');
const textMakeChoice = document.createElement('p');
const containerButtonsChoice = document.getElementById('buttons-container');;
const containerInformationRound = document.createElement('div');
const buttonsChoice = document.querySelectorAll('.buttons-choice');
const numberRound = document.createElement('h2');
const containerChoices = document.createElement('div');
const choicePlayer = document.createElement('p');
const choiceComputer = document.createElement('p');
const resultRound = document.createElement('h3');
let textLetsStart = document.createElement('h1');
// MODAL WINDOW
const containerModal = document.createElement('div');
const contentModal = document.createElement('div');
const containerGameResult = document.createElement('div');
const textGameOver = document.createElement('h2');
/*const textGameResult = document.createElement('p');
const textGameComment = document.createElement('p');*/
const tableResult = document.createElement('table');
const thead = document.createElement('thead');
const tbody = document.createElement('tbody');
const tableResultHeaderRow= document.createElement('tr');
const tableResultHeaderPlayer = document.createElement('th');
const tableResultHeaderComputer = document.createElement('th');
const tableResultDataRow = document.createElement('tr');
const tableResultDataPlayer = document.createElement('td');
const tableResultDataComputer = document.createElement('td');
const buttonNewGame = document.createElement('button');
const buttonClose = document.createElement('button');
// CONTENT AFTER 'CLOSE' BUTTON
const containerAfterClose = document.createElement('div');
const buttonHomePage = document.createElement('button');
//FOOTER
const containerFooter = document.createElement('div');
const creator = document.createElement('p');
const credits = document.createElement('p');
//PLAY VARIABLES
let playerScore = 0;
let computerScore = 0;
let roundNumber = 1; 

containerPreStart.setAttribute('id', 'container-prestart');
containerPreStart.setAttribute('class', 'containers-prestart containers');
containerHeaderStart.setAttribute('id', 'container-headertart');
containerHeaderStart.setAttribute('class', 'containers-prestart containers');
containerTextWelcome.setAttribute('id', 'container-textwelcome');
containerTextWelcome.setAttribute('class', 'containers-prestart containers');
containerImageStart.setAttribute('id', 'container-imagestart');
containerImageStart.setAttribute('class', 'containers-prestart containers');
containerBottomContent.setAttribute('id', 'container-text-ready');
containerBottomContent.setAttribute('class', 'containers-prestart containers');
headerStart.setAttribute('id', 'main-headerstart');
headerStart.setAttribute('class', 'main-header');
headerStart.innerText = 'ROCK PAPER SCISSORS';
textWelcome.setAttribute('id', 'text-welcome');
textWelcome.setAttribute('class', 'text-start');
textWelcome.innerText = 'Welcome to the classic game of Rock Paper Scissors!\nIn this game, you\'ll be playing against a computer opponent to see who can outsmart the other...'
imageStart.src = './images/photo-start.png';
imageStart.alt = 'A warm handshake';
imageStart.setAttribute('id', 'image-start');
imageStart.setAttribute('class', 'image');
textReadyStart.setAttribute('id', 'text-readystart');
textReadyStart.setAttribute('class', 'text-start');
textReadyStart.innerText =  'Ready to face the challenge?\nClick the start button and let the game begin!'
buttonStartGame.setAttribute('id', 'buttonStartGame');
buttonStartGame.setAttribute('class', 'buttons');
buttonStartGame.innerText = 'START GAME';
//
containerMain.setAttribute('id', 'container-main');
containerMain.setAttribute('class', 'containers-main containers');
containerMain.style.display = 'none';
containerRules.setAttribute('id', 'container-rules');
containerRules.setAttribute('class', 'containers-playpage containers');
rules.setAttribute('id', 'rules');
rules.setAttribute('class', 'text-playpage');
rules.innerHTML = '<div style="text-align:center;"><strong style="border-bottom: 2px solid #F21905;">The rules are simple:</strong></div>On each turn, you and your opponent will choose one of three options - rock, paper, or scissors.<br>\
                  Rock beats scissors, scissors beats paper, and paper beats rock.\nThe winner of each round is determined by these rules.<br>\
                  You\'ll play a total of <span style="color:#F21905">five</span> rounds, and the player with the most wins at the end of the game is declared the winner.<br>\
                  If there\'s a tie, the game will continue until there\'s a clear winner.'; 
containerLetsStart.setAttribute('id', 'container-letsstart');
containerLetsStart.setAttribute('class', 'containers-playpage containers');
textLetsStart.setAttribute('id', 'text-letsstart');
textLetsStart.setAttribute('class', 'text-playpage');
textLetsStart.innerText = 'LET\'S START!'
textMakeChoice.setAttribute('id', 'text-makechoice');
textMakeChoice.setAttribute('class', 'text-playpage');
textMakeChoice.innerText = 'MAKE YOUR CHOICE:'
containerInformationRound.setAttribute('id', 'container-informationround');
containerInformationRound.setAttribute('class', 'comtainers-playpage containers');
numberRound.setAttribute('class', 'text-playpage text-informationround');
containerChoices.setAttribute('id', 'container-choices');
containerChoices.setAttribute('class', 'containers-playpage containers');
choicePlayer.setAttribute('class', 'text-playpage choices text-informationround');
choiceComputer.setAttribute('class', 'text-playpage choices text-informationround');
resultRound.setAttribute('id', 'round-result');
resultRound.setAttribute('class', 'text-playpage text-informationround');
//
containerModal.setAttribute('id', 'container-modal');
containerModal.setAttribute('class', 'containers-modal containers');
contentModal.setAttribute('id', 'content-modal');
contentModal.setAttribute('class', 'containers-modal containers');
containerGameResult.setAttribute('id', 'container-gameresult');
containerGameResult.setAttribute('class', 'containers');
textGameOver.setAttribute('id', 'text-gameover');
textGameOver.setAttribute('class', 'text-modal');
textGameOver.innerText = 'GAME OVER!';
/*textGameResult.setAttribute('id', 'text-gameresult');
textGameResult.setAttribute('class', 'text-modal');*/
tableResultHeaderPlayer.textContent = 'YOU';
tableResultHeaderComputer.textContent = 'COMPUTER';
tableResultDataPlayer.textContent = '0';
tableResultDataComputer.textContent = '1';
/*textGameComment.setAttribute('id', 'text-gamecomment');
textGameComment.setAttribute('class', 'text-modal');*/
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
containerFooter.setAttribute('id', 'container-footer');
containerFooter.setAttribute('class', 'containers');
creator.setAttribute('id', 'creator');
creator.setAttribute('class', 'text-footer');
creator.innerText = 'Created by Elizabeth Developer';
credits.setAttribute('id', 'credits');
credits.setAttribute('class', 'text-footer');
credits.innerText = 'All images used in this project were generated using the Canva AI Image Generator.';

document.body.appendChild(containerPreStart);
containerPreStart.appendChild(containerHeaderStart);
containerPreStart.appendChild(containerTextWelcome);
containerPreStart.appendChild(containerImageStart);
containerPreStart.appendChild(containerBottomContent);
containerHeaderStart.appendChild(headerStart);
containerTextWelcome.appendChild(textWelcome);
containerPreStart.appendChild(buttonStartGame);
containerImageStart.appendChild(imageStart);
containerBottomContent.appendChild(textReadyStart);
containerBottomContent.appendChild(buttonStartGame);
//
document.body.appendChild(containerMain);
containerMain.appendChild(containerRules);
containerMain.appendChild(containerLetsStart);
containerMain.appendChild(containerButtonsChoice);
containerMain.appendChild(containerInformationRound);
containerMain.appendChild(containerModal);
containerRules.appendChild(rules);
containerLetsStart.appendChild(textLetsStart);
containerLetsStart.appendChild(textMakeChoice);
containerInformationRound.appendChild(numberRound);
containerInformationRound.appendChild(containerChoices);
containerChoices.appendChild(choicePlayer);
containerChoices.appendChild(choiceComputer);
containerInformationRound.appendChild(resultRound);
//
containerModal.appendChild(contentModal);
contentModal.appendChild(containerGameResult);
contentModal.appendChild(buttonNewGame);
contentModal.appendChild(buttonClose);
containerGameResult.appendChild(textGameOver);
/*containerGameResult.appendChild(textGameResult);
containerGameResult.appendChild(textGameComment);*/
containerGameResult.appendChild(tableResult);
tableResult.appendChild(thead);
tableResult.appendChild(tbody);
thead.appendChild(tableResultHeaderRow);
tableResultHeaderRow.appendChild(tableResultHeaderPlayer);
tableResultHeaderRow.appendChild(tableResultHeaderComputer);
tbody.appendChild(tableResultDataRow);
tableResultDataRow.appendChild(tableResultDataPlayer);
tableResultDataRow.appendChild(tableResultDataComputer);

document.body.appendChild(containerAfterClose);
containerAfterClose.appendChild(buttonHomePage);

document.body.appendChild(containerFooter);
containerFooter.appendChild(creator);
containerFooter.appendChild(credits);

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

function changeLetsStart(round) {
  if (round === 1) {
    return textLetsStart.innerText = 'LET\'S START!' ;
  }
  else if (round === 2) {
    textLetsStart.innerText = 'ONE MORE ROUND!' ;
  }
};

function disableButtonsChoice() {
  buttonsChoice.forEach(button => {
    button.disabled = true;;
  })
};

function enableButtonsChoice() {
  buttonsChoice.forEach(button => {
    button.disabled = false;;
  })
};

function disableContainer(containerToDisable) {
  containerToDisable.style.display = 'none';
};

function enableContainer(containerToEnable) {
  containerToEnable.style.display = 'flex';
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
  disableContainer(containerInformationRound);
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
  changeLetsStart(roundNumber);
};

function playGame(playerSign) {
  let computerSign = getComputerChoice();
  let roundResult = 'It\'s a tie!';
  let roundComment = `You both have selected ${capitaliseFirstLetter(playerSign)}`;

  console.log(`Round: ${roundNumber}`);
  console.log(`Your choice: ${capitaliseFirstLetter(playerSign)}`);
  console.log(`Computer choice: ${capitaliseFirstLetter(computerSign)}`);
  numberRound.innerText = `ROUND ${roundNumber} RESULT:`;
  choicePlayer.innerHTML = `Your choice: ${capitaliseFirstLetter(playerSign)}`;
  choiceComputer.innerHTML = `Computer choice: ${capitaliseFirstLetter(computerSign)}`;

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
  enableContainer(containerInformationRound);
  roundNumber++;
  changeLetsStart(roundNumber);
  console.log('Round result:',roundResult, roundComment);
  console.log(`Player score: ${playerScore}\nComputer score: ${computerScore}`);
  resultRound.innerText = `${roundResult}\n${roundComment}`;

  if (playerScore === 5 || computerScore === 5) {
    console.log('Game Over!');
    console.log(`Final Score:\nPlayer:${playerScore}\nComputer${computerScore}`);
    /*textGameResult.innerHTML= `Final Score:\nPlayer:${playerScore}\nComputer${computerScore}`;*/

    if (playerScore > computerScore) {
      console.log('You win the game!');
      /*textGameComment.innerText = 'You win the game!'*/
    } 
    else if (playerScore < computerScore) {
      console.log('The computer wins the game!');
      /*textGameComment.innerText = 'The computer wins the game!'*/
    } 
    else {
      console.log('The game ends in a tie!');
      /*textGameComment.innerText = 'The game ends in a tie!';*/
    }
    /*tableResultDataPlayer.textContent = playerScore.toString();
    tableResultDataComputer.textContent = computerScore.toString();*/
    disableButtonsChoice();
    showModalWindow();
    
  }
};
