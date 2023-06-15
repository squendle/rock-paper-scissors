// My Rock Paper Scissors Game


// This sets the three choices for the computer to choose from.

const choices = [
  "Rock",
  "Paper",
  "Scissors"
];

// This function returns a random choice from the "choices" array. Need to read up on the Math.floor and Math.random functions more because I don't get how it works with strings...

function getComputerChoice() {
  return choices[Math.floor(Math.random()*choices.length)];
}

// This is the function for a single round of RPS.
function playRound() {
 
// This variable invokes the function from before, assigning one of the "choices" every time the playRound function is called. That's why it needed to be assigned here and not globally, otherwise it wouldn't update the choice every round.
  
  let computerSelection = getComputerChoice();

// Here we declare the variable for the player's choice by prompting them to type it in.
 
  let playerSelection = 
  prompt("Enter your choice...", '').toLowerCase();

// This function takes whatever the player typed and normalizes it to a first letter capitalized string.

  function capitalize(playerSelection){
    let first = playerSelection.charAt(0);
    let firstUp = first.toUpperCase();
    playerSelection = playerSelection.replace(first, firstUp);
    return playerSelection;
  }

// This one applies the resulting string to the variable so it matches with the conditionals below. 

  playerSelection = capitalize(playerSelection);

// This begins the actual round. And statements require both to be true to print the proper result. Self explanatory.
 
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

// This one is the Tie, if the player and computer select the same value.

  } else if (playerSelection === computerSelection) {
    return "It's a Tie! Play again!"

// This one is if the player enters a typo or something other than rock/paper/scissors.
  } else {
    return 'You must enter "Rock," "Paper," or "Scissors..."';  
  }
}

// Here's the actual game function to play 5 rounds.
function game(){

// First we begin with an alert to the player, and declare the wins and losses variables so we can update them as we go.

  alert("Let's play Rock, Paper, Scissors! Best of 5 wins...");
  let wins = 0;
  let losses = 0;

// This is the loop to run 5 rounds. The rounds variable is set to 0 and it increases by one until it hits 5. Then the loop ends and the game is over.

  for (let rounds = 0; rounds < 5; rounds++) {

// Here we invoke the playRound() function at the start of each loop by assigning it to the results variable. 

  let roundResult = playRound();

// Here are the conditionals to display the results of each round and update the round counter accordingly. Ties subtract 1 from rounds, wins/losses add 1 to rounds. Wins and Losses counter updates depending on the roundResult, and displays at the end.

    if (roundResult === "It's a Tie! Play again!") {
      console.log("You both chose the same!");
      console.log(roundResult);
      rounds--;

    } else if (roundResult === 'You must enter "Rock," "Paper," or "Scissors..."') {
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

// After the loop is over and all 5 rounds are played (not counting Ties or typos) the Win or Loss message displays.

  if (wins > losses) {
    console.log("You win the game!");
  } else {
    console.log("You lose the game! Loser!");
  }
}

// FUTURE UPDATE! I would like for the game to end automatically if wins or losses reaches 3 before all the rounds are played. I can kind of grok how in my brain but I'm not sure how to break a loop early like that yet. More to follow as more is learned.
