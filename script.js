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


function playRound(playerSelection, computerSelection) {
    let player = sameRegister(playerSelection);
    let answer = `Draw! You both have selected ${player}`;

    if (player === computerSelection) {
        return answer;
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
        
        let finalAnswer = getFinalAnswer(answer, player, computerSelection);
        return finalAnswer;
    }
}

function game(numberOfRounds) {
    for (let round = 0; round < numberOfRounds; round++) {
        const playerSelection = prompt("Rock, Paper, or Scissors?");
        const computerSelection = getComputerChoice();
        let roundResult = playRound(playerSelection, computerSelection);
        console.log(`Round ${round + 1}: ${roundResult}`);
    }
}


const rounds = 5;
game(rounds);
