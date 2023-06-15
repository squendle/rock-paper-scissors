// My Rock Paper Scissors Game

const choices = [
  "Rock",
  "Paper",
  "Scissors"
];

function getComputerChoice() {
  return choices[Math.floor(Math.random()*choices.length)];
}


function playRound() {
  
  let computerSelection = getComputerChoice();

  let playerSelection = 
  prompt("Enter your choice...", '').toLowerCase();
  
  function capitalize(playerSelection){
    let first = playerSelection.charAt(0);
    let firstUp = first.toUpperCase();
    playerSelection = playerSelection.replace(first, firstUp);
    return playerSelection;
  }
  
  playerSelection = capitalize(playerSelection);
  
  if (playerSelection === "Rock" && computerSelection === "Paper") {
    return "You lose! Paper covers Rock!";
  } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
    return "You win! Rock destroys Scissors!";
  } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
    return "You lose! Scissors cut Paper!";
  } else if (playerSelection === "Paper" && computerSelection === "Rock") {
    return "You win! Paper covers Rock!"; 
  } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
    return "You win! Scissors cut Paper!";  
  } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
    return "You lose! Rock destroys Scissors!";
  } else if (playerSelection === computerSelection) {
    return "It's a Tie! Play again!"
  } else {
    return 'You must enter "Rock," "Paper," or "Scissors..."';  
  }
}


function game(){
  
  alert("Let's play Rock, Paper, Scissors! Best of 5 wins...");
  let wins = 0;
  let losses = 0;

  for (let rounds = 0; rounds < 5; rounds++) {

  let roundResult = playRound();

    if (roundResult === "It's a Tie! Play again!" || roundResult === 'You must enter "Rock," "Paper," or "Scissors..."') {
      console.log("You both chose the same!");
      console.log(roundResult);
      rounds--;

    } else if (roundResult === "You lose! Paper covers Rock!") {
      console.log("You chose Rock");
      console.log("Computer chose Paper");
      console.log(roundResult);
      losses++;
      console.log("Wins: " + wins + " " + "Losses: " + losses);

    } else if (roundResult === "You win! Rock destroys Scissors!") {
      console.log("You chose Rock");
      console.log("Computer chose Scissors");
      console.log(roundResult);
      wins++;
      console.log("Wins: " + wins + " " + "Losses: " + losses);
      
    } else if (roundResult === "You lose! Scissors cut Paper!") {
      console.log("You chose Paper");
      console.log("Computer chose Scissors");
      console.log(roundResult); 
      losses++;
      console.log("Wins: " + wins + " " + "Losses: " + losses);
      
    } else if (roundResult === "You win! Paper covers Rock!") {
      console.log("You chose Paper");
      console.log("Computer chose Rock");
      console.log(roundResult); 
      wins++;
      console.log("Wins: " + wins + " " + "Losses: " + losses);
      
    } else if (roundResult === "You win! Scissors cut Paper!") {
      console.log("You chose Scissors");
      console.log("Computer chose Paper");
      console.log(roundResult); 
      wins++;
      console.log("Wins: " + wins + " " + "Losses: " + losses);
      
    } else if (roundResult === "You lose! Rock destroys Scissors!") {
      console.log("You chose Scissors");
      console.log("Computer chose Rock");
      console.log(roundResult); 
      losses++;
      console.log("Wins: " + wins + " " + "Losses: " + losses);
    }
  }
  if (wins > losses) {
    console.log("You win the game!");
  } else {
    console.log("You lose the game! Loser!");
  }
}
