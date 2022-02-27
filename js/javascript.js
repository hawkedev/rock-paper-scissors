/* define available choices */
let choices = ["Rock", "Paper", "Scissors"];
let choicesNumber = choices.length;

/* calculate computer's choice */
let computerSelection = computerPlay(choicesNumber);
console.log(computerSelection);

/*retrieve user's choice */
let playerInput = prompt("What's your choice? Rock, paper or scissors?");
let playerSelection = playerInput[0].toUpperCase()+playerInput.slice(1).toLowerCase()
console.log(playerSelection);







function computerPlay(choicesNumber) {
    let computerSelectionNumber = Math.floor(Math.random()*choicesNumber);
    let computerSelection = choices[computerSelectionNumber];
    return computerSelection;
}
