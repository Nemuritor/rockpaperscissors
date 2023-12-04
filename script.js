function game()
{
    let playerScore = 0;
    let computerScore = 0;
    let roundCount = 0;
    let paperBtn = document.querySelector('#paper');
    let rockBtn = document.querySelector("#rock");
    let scissorsBtn = document.querySelector("#scissors");
    let resetGameBtn = document.querySelector("#resetGame");
    //let computerSelection = getComputerChoice();
    let roundResult = "";
    //const playerSelection = prompt("Please choose rock, paper, or scissors.");
    let playerSelection = "";
    paperBtn.addEventListener("click", () => {
        console.log("You clicked the paper button!");
        playerSelection = "paper";
        let computerSelection = getComputerChoice();
        roundResult = playRound(playerSelection, computerSelection);
        console.log("Result: "+roundResult);

        if (roundResult === "player") {
            playerScore += 1;
            roundCount += 1;
        } else if (roundResult === "computer") {
            computerScore += 1;
            roundCount += 1;
        } else if (roundResult === "tie") {
            playerScore += 1;
            computerScore += 1;
            roundCount += 1;
        }

        document.getElementById("result-text").innerHTML = "Player: "+playerScore+" | Computer: "+computerScore;

        if(roundCount == 5){
            document.getElementById("result-text").innerHTML = "Final Score - Player: "+playerScore+" | Computer: "+computerScore;
            document.getElementById("resetGame").style.display = "inline";
            document.getElementById("scissors").style.display = "none";
            document.getElementById("rock").style.display = "none";
            document.getElementById("paper").style.display = "none";
            playerScore = 0;
            computerScore = 0;
            roundCount = 0;
        }
    });
    
    rockBtn.addEventListener("click", () => {
        console.log("You clicked the rock button!");
        playerSelection = "rock";
        let computerSelection = getComputerChoice();
        roundResult = playRound(playerSelection, computerSelection);
        console.log("Result: "+roundResult);

        if (roundResult === "player") {
            playerScore += 1;
            roundCount += 1;
        } else if (roundResult === "computer") {
            computerScore += 1;
            roundCount += 1;
        } else if (roundResult === "tie") {
            playerScore += 1;
            computerScore += 1;
            roundCount += 1;
        }

        document.getElementById("result-text").innerHTML = "Player: "+playerScore+" | Computer: "+computerScore;

        if(roundCount == 5){
            document.getElementById("result-text").innerHTML = "Final Score - Player: "+playerScore+" | Computer: "+computerScore;
            document.getElementById("resetGame").style.display = "inline";
            document.getElementById("scissors").style.display = "none";
            document.getElementById("rock").style.display = "none";
            document.getElementById("paper").style.display = "none";
            playerScore = 0;
            computerScore = 0;
            roundCount = 0;
        }
    });
    
    scissorsBtn.addEventListener("click", () => {
        console.log("You clicked the scissors button!");
        playerSelection = "scissors";
        let computerSelection = getComputerChoice();
        roundResult = playRound(playerSelection, computerSelection);
        console.log("Result: "+roundResult);

        if (roundResult === "player") {
            playerScore += 1;
            roundCount += 1;
        } else if (roundResult === "computer") {
            computerScore += 1;
            roundCount += 1;
        } else if (roundResult === "tie") {
            playerScore += 1;
            computerScore += 1;
            roundCount += 1;
        }

        document.getElementById("result-text").innerHTML = "Player: "+playerScore+" | Computer: "+computerScore;

        if(roundCount == 5){
            document.getElementById("result-text").innerHTML = "Final Score - Player: "+playerScore+" | Computer: "+computerScore;
            document.getElementById("resetGame").style.display = "inline";
            document.getElementById("scissors").style.display = "none";
            document.getElementById("rock").style.display = "none";
            document.getElementById("paper").style.display = "none";
            playerScore = 0;
            computerScore = 0;
            roundCount = 0;
        }
    });
    
    resetGameBtn.addEventListener("click", () => {
        document.getElementById("result-text").innerHTML = "Player: 0 | Computer: 0";
        document.getElementById("resetGame").style.display = "none";
        document.getElementById("scissors").style.display = "inline";
        document.getElementById("rock").style.display = "inline";
        document.getElementById("paper").style.display = "inline";
    });
    
    //console.log("Final Score - Player: "+playerScore+" | Computer: "+computerScore);
    //console.log("Round Count: "+roundResult);
    
    
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
/*const paperBtn = document.querySelector('#paper');
const rockBtn = document.querySelector("#rock");
const scissorsBtn = document.querySelector("#scissors");

paperBtn.addEventListener("click", () => {
    console.log("You clicked the paper button!");
});

rockBtn.addEventListener("click", () => {
    console.log("You clicked the rock button!");
});

scissorsBtn.addEventListener("click", () => {
    console.log("You clicked the scissors button!");
});*/