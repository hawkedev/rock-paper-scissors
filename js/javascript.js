/* FULL GAME */

/* define available choices */
let choices = ["Rock", "Paper", "Scissors"];
let choicesNumber = choices.length;
let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => playRound);
})


/*
for (let i=1; i<=5; i++) {
    let computerSelection = computerChoice(choicesNumber);
    console.log("Computer selected: " + computerSelection);
    let playerSelection = playerChoice();
    console.log("Player selected: " + playerSelection);
    let partialResult = winner(computerSelection, playerSelection)[0];
    console.log(partialResult);
    computerScore += winner(computerSelection, playerSelection)[2];
    console.log("Computer's score: " + computerScore);
    playerScore += winner(computerSelection, playerSelection)[1];
    console.log("Player's score: " + playerScore);
}

if (computerScore > playerScore) {
    console.log("COMPUTER WINS!")
} else
if (computerScore < playerScore) {
    console.log("PLAYER WINS!")
} else {
    console.log("TIE!")
}
*/



/* FUNCTIONS */

/* calculate computer's choice */
function computerChoice(choicesNumber) {
    let computerSelectionNumber = Math.floor(Math.random()*choicesNumber);
    let computerSelection = choices[computerSelectionNumber];
    return computerSelection;
}

/*retrieve user's choice */
function playerChoice() {
    let playerInput = prompt("What's your choice? Rock, paper or scissors?");
    let playerSelection = playerInput[0].toUpperCase()+playerInput.slice(1).toLowerCase()
    return(playerSelection);
}

/* define winner */
function winner(computerSelection, playerSelection) {
    let result;
    let playerScore;
    let computerScore;
    if (computerSelection == "Rock" && playerSelection == "Rock") {
        result = "Tie!";
        playerScore = 1;
        computerScore = 1;
        return [result, playerScore, computerScore];
    } else
    if (computerSelection == "Rock" && playerSelection == "Paper") {
        result = "Paper beats Rock! Player wins!"
        playerScore = 1;
        computerScore = 0;
        return [result, playerScore, computerScore];
    } else
    if (computerSelection == "Rock" && playerSelection == "Scissors") {
        result = "Rock beats Scissors! Computer wins!"
        playerScore = 0;
        computerScore = 1;
        return [result, playerScore, computerScore];
    } else
    if (computerSelection == "Paper" && playerSelection == "Rock") {
        result = "Paper beats Rock! Computer wins!"
        playerScore = 0;
        computerScore = 1;
        return [result, playerScore, computerScore];
    } else
    if (computerSelection == "Paper" && playerSelection == "Paper") {
        result = "Tie!"
        playerScore = 1;
        computerScore = 1;
        return [result, playerScore, computerScore];
    } else
    if (computerSelection == "Paper" && playerSelection == "Scissors") {
        result = "Scissors beats Paper! Player wins!"
        playerScore = 1;
        computerScore = 0;
        return [result, playerScore, computerScore];
    } else
    if (computerSelection == "Scissors" && playerSelection == "Rock") {
        result = "Rock beats Scissors! Player wins!"
        playerScore = 1;
        computerScore = 0;
        return [result, playerScore, computerScore];
    } else
    if (computerSelection == "Scissors" && playerSelection == "Paper") {
        result = "Scissors beats Paper! Computer wins!"
        playerScore = 0;
        computerScore = 1;
        return [result, playerScore, computerScore];
    } else
    if (computerSelection == "Scissors" && playerSelection == "Scissors") {
        result = "Tie!"
        playerScore = 1;
        computerScore = 1;
        return [result, playerScore, computerScore];
    }
}


