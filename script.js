function getComputerSelection() {
    const options = ['rock', 'paper', 'scissors'];
    let choice = options[Math.floor(Math.random() * options.length)];
    console.log(`computer selection: ${choice}`);

    return choice
}


function getRoundResult(roundResult, playerSign, computerSign) {
    let detailedResult = roundResult;

    if (roundResult === "You win! ") {
        detailedResult += `${playerSign} ${playerSign === "Scissors" ? "beat" : "beats"} ${
            computerSign}`;
    }
    else {
        detailedResult += `${computerSign} ${computerSign === "Scissors" ? "beat" : "beats"} ${
            playerSign}`;
    }
    return detailedResult;
}

function playRound(playerSelection) {
    const computerSelection = getComputerSelection();
    let answer = "";
    let finalAnswer = "";

    if (playerSelection === computerSelection) {
        finalAnswer = `Draw! You both have selected ${playerSelection}`;
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

    //let allRoundsResult = finalScore(answer, previousResult);
    //return [finalAnswer, allRoundsResult];
    console.log(finalAnswer);
    return finalAnswer;
}

   


/*function sameRegister(str) {
    let correctRegister = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

    return correctRegister;
}

function finalScore(currentResult, currentScore) {
    if (currentResult === "You win! ") {
        currentScore[0] += 1; 
    }
    else if (currentResult === "You lose! ") {
        currentScore[currentScore.length - 1] += 1;
    }
    else {
        currentScore = currentScore.map(element => element + 1);
    }
    return currentScore;
}

function finalMessage(score) {
    let playerResult = score[0];
    let computerResult = score[1];
    let verdict = "Draw!";
    let finalResult = `${score[0]} : ${score[1]}`;


    if (playerResult > computerResult) {
        verdict = "You win!";
    }
    else if (playerResult < computerResult) {
        verdict = "You lose!";
    }
    return [verdict, finalResult];
}


function getFinalAnswer(gameResult, playerChoice, computerChoice) {
    let detailedResult = gameResult;

    if (gameResult === "You win! ") {
        detailedResult += `${playerChoice} ${playerChoice === "Scissors" ? "beat" : "beats"} ${
            computerChoice}`;
    }
    else {
        detailedResult += `${computerChoice} ${computerChoice === "Scissors" ? "beat" : "beats"} ${
            playerChoice}`;
    }
    return detailedResult;
}


function playRound(playerSelection, computerSelection, previousResult) {
    let player = sameRegister(playerSelection);
    let answer = "";
    let finalAnswer = "";

    if (player === computerSelection) {
        finalAnswer = `Draw! You both have selected ${player}`;
    }
    else {
        switch (player) {
            case "Rock":
                if (computerSelection === "Paper") {
                    answer = "You lose! ";
                }
                else {
                    answer = "You win! ";
                }
                break;
            case "Paper":
                if (computerSelection === "Rock") {
                    answer = "You win! ";
                }
                else {
                    answer = "You lose! ";
                }
                break;
            case "Scissors":
                if (computerSelection === "Rock") {
                    answer = "You lose! ";
                }
                else {
                    answer = "You win! ";
                }
                break;
        }

        finalAnswer= getFinalAnswer(answer, player, computerSelection);
    }

    let allRoundsResult = finalScore(answer, previousResult);
    return [finalAnswer, allRoundsResult];
}


/*function game(numberOfRounds) {
    let initialResult = [0, 0];
    let farewell = "Game Over!";

    for (let round = 0; round < numberOfRounds; round++) {
        //const playerSelection = prompt("Rock, Paper, or Scissors?");
        const computerSelection = getComputerChoice();
        var [roundResult, gameResult] = playRound(playerSelection, computerSelection, initialResult);
        initialResult = gameResult;
        console.log(`Round ${round + 1}: ${roundResult}`);
    }
    finalMessage = finalMessage(gameResult);

    console.log(farewell);
    console.log(finalMessage[0]) // Verdict
    console.log(finalMessage[1]); // Result
}


const rounds = 5;
game(rounds);*/

const buttonRock = document.getElementById('buttonRock');
const buttonPaper= document.getElementById('buttonPaper');
const buttonScissors= document.getElementById('buttonScissors');

let playerChoice = ''

buttonRock.addEventListener('click', function() {
    playerChoice = buttonRock.textContent.toLowerCase();
    console.log(`player selection: ${playerChoice}`);
    playRound(playerChoice);
});

buttonPaper.addEventListener('click', function() {
    playerChoice = buttonPaper.textContent.toLowerCase();
    console.log(`player selection: ${playerChoice}`);
    playRound(playerChoice);
});

buttonScissors.addEventListener('click', function() {
    playerChoice = buttonScissors.textContent.toLowerCase();
    console.log(`player selection: ${playerChoice}`);
    playRound(playerChoice);
});
