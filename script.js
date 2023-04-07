function getComputerChoice() {
    let options = ["Rock", "Paper", "Scissors"];
    let choice = options[Math.floor(Math.random() * options.length)];
    console.log(choice)
    return choice
}


function sameRegister(str) {
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


function game(numberOfRounds) {
    let initialResult = [0, 0];

    for (let round = 0; round < numberOfRounds; round++) {
        const playerSelection = prompt("Rock, Paper, or Scissors?");
        const computerSelection = getComputerChoice();
        var [roundResult, gameResult] = playRound(playerSelection, computerSelection, initialResult);
        initialResult = gameResult;
        console.log(`Round ${round + 1}: ${roundResult}`);
    }
    console.log(gameResult);
}


const rounds = 5;
game(rounds);
