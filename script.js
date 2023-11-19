function game()
{
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Please choose rock, paper, or scissors.");
        const computerSelection = getComputerChoice();
        const roundResult = playRound(playerSelection, computerSelection);
        //alert(roundResult);
        console.log("Result: "+roundResult);

        if (roundResult === "player") {
            playerScore += 1;
        } else if (roundResult === "computer") {
            computerScore += 1;
        }
    }
    console.log("Final Score - Player: "+playerScore+" | Computer: "+computerScore);

    if(playerScore > computerScore) {
        console.log("Player wins!");
    } else if(playerScore < computerScore) {
        console.log("Computer wins!");
    } else {
        console.log("It's a tie!");
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        return "tie";
    } else if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            return "computer";
        } else if (computerSelection === "rock") {
            return "player";
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            return "player";
        } else if(computerSelection === "rock") {
            return "computer";
        }
    } else if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            return "computer";
        } else if (computerSelection === "scissors") {
            return "player";
        }
    }
    
}

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;
    if (choice === 1 ) {
        return "paper";
    } else if (choice === 2) {
        return "scissors";
    } else {
        return "rock";
    }
}

game();
