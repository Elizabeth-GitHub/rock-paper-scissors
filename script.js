function getComputerSelection() {
    const options = ['rock', 'paper', 'scissors'];
    let choice = options[Math.floor(Math.random() * options.length)];
    displaySignComputer(choice);

    return choice
}

function capitaliseFirstLetter(word) {
    return newWord = word[0].toUpperCase() + word.slice(1,);
};

function displaySignComputer(signComputer) {
    return choiceComputer.innerText = `Computer's choice: ${capitaliseFirstLetter(signComputer)}`;
}

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
}

function playRound(playerSelection) {
    const computerSelection = getComputerSelection();
    let answer = "";
    let finalAnswer = "";

    if (playerSelection === computerSelection) {
        finalAnswer = `Draw! You both have selected ${playerSelection[0].toUpperCase() + playerSelection.slice(1,)}`;
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

    displayRoundResult(finalAnswer);
    return finalAnswer;
}

function playGame() {
    let playerScore = 0;
    let computerScore = 0; 

    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            const playerChoice = event.target.textContent.toLowerCase();
            const resultCurrent = playRound(playerChoice);

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
            }

            if (playerScore === 5 || computerScore === 5) {
                if (playerScore > computerScore) {
                    console.log('Congratulations, you win!');
                }
                else if (computerScore > playerScore) {
                    console.log('Sorry, you lose!');
                }
                else {
                    console.log('It\'s a tie!');
                }
            }
        });
    });
        }

const buttonRock = document.getElementById('buttonRock');
const buttonPaper= document.getElementById('buttonPaper');
const buttonScissors= document.getElementById('buttonScissors');
const buttons = document.querySelectorAll('.button');
const choicePlayer = document.createElement('div')
document.body.appendChild(choicePlayer);
const choiceComputer = document.createElement('div');
document.body.appendChild(choiceComputer);
const resultRound= document.createElement('div');
document.body.appendChild(resultRound);playGame

function displayRoundResult(result) {
    resultRound.innerText = result;
  };

function displaySignPlayer(signPlayer) {
    choicePlayer.innerText = `Your choice: ${capitaliseFirstLetter(signPlayer)}}`;
};

playGame();