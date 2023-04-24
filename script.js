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
        detailedResult += `${playerSign} ${playerSign === "scissors" ? "beat" : "beats"} ${
            computerSign}`;
    }
    else {
        detailedResult += `${computerSign} ${computerSign === "scissors" ? "beat" : "beats"} ${
            playerSign}`;
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

    console.log(finalAnswer);
    return finalAnswer;
}

function playGame() {
    let playerScore = 0;
    let computerScore = 0; 

    while (playerScore < 5 && computerScore < 5) {


    }
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
document.body.appendChild(resultRound);

function displayRoundResult(result) {
    resultRound.innerText = result;
  };

function handleClick(event) {
    const playerChoice = event.target.textContent.toLowerCase();
    const computerChoice = getComputerSelection();
    const roundResult = playRound(playerChoice, computerChoice);

    choicePlayer.innerText = `Your choice: ${playerChoice[0].toUpperCase() + playerChoice.slice(1,)}`;
}

function displaySignPlayer(signPlayer) {
    choicePlayer.innerText = `Your choice: ${capitaliseFirstLetter(signPlayer)}}`;
};
  
buttons.forEach(button => {
    button.addEventListener('click', handleClick);
});
