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

function playGame() {
    let playerScore = 0;
    let computerScore = 0;
    let currentRound = 1; 

    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            const playerChoice = event.target.textContent.toLowerCase();
            const resultCurrent = playRound(playerChoice);

            numberRound.innerText = `ROUND ${currentRound}`;
            currentRound ++; 
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
                finalResult.innerText = `FINAL SCORE: ${playerScore} : ${computerScore}`;
                if (playerScore > computerScore) {
                    finalVerdict.innerText = 'Congratulations, you win!';
                }
                else if (computerScore > playerScore) {
                    finalVerdict.innerText = 'Sorry, you lose!';
                }
                else {
                    finalVerdict.innerText = 'It\'s a tie!';
                }
            }
        });  
    });
}

const buttonRock = document.getElementById('buttonRock');
const buttonPaper= document.getElementById('buttonPaper');
const buttonScissors= document.getElementById('buttonScissors');
const buttons = document.querySelectorAll('.button');
const numberRound = document.createElement('div');
document.body.appendChild(numberRound);
const choicePlayer = document.createElement('div')
document.body.appendChild(choicePlayer);
const choiceComputer = document.createElement('div');
document.body.appendChild(choiceComputer);
const resultRound= document.createElement('div');
document.body.appendChild(resultRound);
const finalResult = document.createElement('div');
document.body.appendChild(finalResult);
const finalVerdict = document.createElement('div');
document.body.appendChild(finalVerdict);

playGame();