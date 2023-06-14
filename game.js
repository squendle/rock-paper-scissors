// My Rock Paper Scissors Game
//
//
// 1. Create function "getComputerChoice()" to randomly return either 'Rock,' 'Paper,' or         'Scissors.'
//    Return R P or S string randomly.
//    Return a random value every time the function is called
//
// 2. Create a function playRound() that plays a single round of RPS.
//    Function should take two parameters, playerSelection and computerSelection
//    Return a string that declares the winner of the round.
//    playerSelection should be case insensitive, so that the player can enter any caps/lowers
//    Results of this function should Return, not console.log()
//   
// 3. Create a function game() that plays 5 rounds, keeps score, and reports a winner or loser at the end
//    use console.log to display the results of each round and the winner at the end
//
//
//
//

let choices = [
  "Rock",
  "Paper",
  "Scissors"
];

function getComputerChoice() {
  return choices[Math.floor(Math.random()*choices.length)];
}

// let playerSelection = prompt("Let's play Rock, Paper, Scissors! Enter your choice...", '').toLowerCase();
// let computerSelection = getComputerChoice();


  
let playerSelection = 
  prompt("Let's play Rock, Paper, Scissors! Enter your choice...", '').toLowerCase();
    
function capitalize(playerSelection){
  let first = playerSelection.charAt(0);
  let firstUp = first.toUpperCase();
  playerSelection = playerSelection.replace(first, firstUp);
  return playerSelection;
}

playerSelection = capitalize(playerSelection);
let computerSelection = getComputerChoice();
  
function playRound() {
  if (playerSelection === "Rock" && computerSelection === "Paper") {
    return "You lose! Paper covers Rock!";
  } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
    return "You win! Rock destroys Scissors!";
  } else if (playerSelection === "Rock" && computerSelection === "Rock") {
    return "It's a tie! Play again!";
  } else if (playerSelection === "Paper" && computerSelection === "Paper") {
    return "It's a tie! Play again!";
  } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
    return "You lose! Scissors cut Paper!";
  } else if (playerSelection === "Paper" && computerSelection === "Rock") {
    return "You win! Paper covers Rock!"; 
  } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
    return "You win! Scissors cut Paper!";  
  } else if (playerSelection === "Scissors" && computerSelection === "Scissors") {
    return "It's a tie! Play again!";
  } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
    return "You lose! Rock destroys Scissors!";  
  } else {
    return 'You must enter "Rock," "Paper," or "Scissors..."';  
  }
}

function game(){
  

}
