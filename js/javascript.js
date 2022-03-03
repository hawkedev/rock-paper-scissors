/* FULL GAME */

/* define available choices */
let choices = ["Rock", "Paper", "Scissors"];
let choicesNumber = choices.length;
let playerScore = 0;
let computerScore = 0;

const container = document.querySelector("#container");
const contentPlayerChoice = document.createElement("div");
const contentComputerChoice = document.createElement("div");
const contentResult = document.createElement("div");
const contentPlayerScore = document.createElement("div");
const contentComputerScore = document.createElement("div");
const contentFinalResult = document.createElement("div");

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", function(e) {playRound(button.value)});
});

function playRound(playerSelection) {
    
    if (playerScore<5 && computerScore<5) {

        contentPlayerChoice.textContent = `Player selected ${playerSelection}`;
        container.appendChild(contentPlayerChoice);

        let computerSelection = computerChoice(choicesNumber);
        contentComputerChoice.textContent = `Computer selected ${computerSelection}`;
        container.appendChild(contentComputerChoice);

        let partialResult = winner(computerSelection, playerSelection)[0];
        contentResult.textContent = `${partialResult}`;
        container.appendChild(contentResult);

        playerScore += winner(computerSelection, playerSelection)[1];
        contentPlayerScore.textContent = `${"Player's score: " + playerScore}`;
        container.appendChild(contentPlayerScore);

        computerScore += winner(computerSelection, playerSelection)[2];
        contentComputerScore.textContent = `${"Computer's score: " + computerScore}`;
        container.appendChild(contentComputerScore);
    } else
    if (playerScore=5 && computerScore<5) {
        contentFinalResult.textContent = "PLAYER WINS!";
        container.appendChild(contentFinalResult);
    } else
    if (computerScore=5 && playerScore<5) {
        contentFinalResult.textContent = "COMPUTER WINS!";
        container.appendChild(contentFinalResult);
    } else {
        contentFinalResult.textContent = "TIE!";
        container.appendChild(contentFinalResult);
    };
};


/* FUNCTIONS */

/* calculate computer's choice */
function computerChoice(choicesNumber) {
    let computerSelectionNumber = Math.floor(Math.random()*choicesNumber);
    let computerSelection = choices[computerSelectionNumber];
    return computerSelection;
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
