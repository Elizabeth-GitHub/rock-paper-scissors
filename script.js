function getComputerChoice() {
    let options = ["Rock", "Paper", "Scissors"];
    let choice = options[Math.floor(Math.random() * options.length)];
    console.log(choice)
    return choice
}

function playRound(playerSelection, computerSelection) {
    let player = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    let answer = `Draw! You both have selected ${playerSelection}`;

    if(player === computerSelection) {
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
        
        let finalAnswer = answer;
        if (answer === "You win! ") {
            finalAnswer += `${player} ${player === "Scissors" ? "beat" : "beats"} ${computerSelection}`;
        }
        else {
            finalAnswer += `${computerSelection} ${computerSelection === "Scissors" ? "beat" : "beats"} ${player}`;
        }
        return finalAnswer;
    }
}

const playerSelection = "Rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
