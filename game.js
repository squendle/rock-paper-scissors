// Changing colors of choice images and div outlines on mouse hover

const choiceDivs = document.querySelectorAll(".choice");
const gungnir = document.querySelector("#gungnir");
const mjolnir = document.querySelector("#mjolnir");
const fiskegarn = document.querySelector("#fiskegarn");
const choiceImgs = [mjolnir, gungnir, fiskegarn];

function changeDivColor(e) {
  this.classList.add('hovered');
  if (choiceDivs[0].classList.contains('hovered')) {
      mjolnir.setAttribute("src", "img/mjolnir2.png");
    }
  if (choiceDivs[1].classList.contains('hovered')) {
    fiskegarn.setAttribute("src", "img/fiskegarn2.png");
  }
  if (choiceDivs[2].classList.contains('hovered')) {
    gungnir.setAttribute("src", "img/gungnir2.png");
  }
};

function removeDivColor(e) {
  this.classList.remove('hovered');
  if (!choiceDivs[0].classList.contains('hovered')) {
    mjolnir.setAttribute("src", "img/mjolnir.png");
  }
  if (!choiceDivs[1].classList.contains('hovered')) {
  fiskegarn.setAttribute("src", "img/fiskegarn.png");
  }
  if (!choiceDivs[2].classList.contains('hovered')) {
  gungnir.setAttribute("src", "img/gungnir.png");
  }
};





function removeImgColor(e) {

;}

choiceDivs.forEach(choice => choice.addEventListener("mouseover", changeDivColor));
choiceDivs.forEach(choice => choice.addEventListener("mouseout", removeDivColor));





// My Rock Paper Scissors Game

const choices = [
  "rock",
  "paper",
  "scissors"
];

function getComputerChoice() {
  return choices[Math.floor(Math.random()*choices.length)];
}

// This is the function for a single round of RPS.
function playRound() {
  
  let computerSelection = getComputerChoice();
 
  let playerSelection = 
  prompt("Enter your choice...", '').toLowerCase();
 
  if (playerSelection === "rock" && computerSelection === "paper") {
    return "You lose! Paper covers Rock!";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return "You win! Rock destroys Scissors!";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return "You lose! Scissors cut Paper!";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return "You win! Paper covers Rock!"; 
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return "You win! Scissors cut Paper!";  
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return "You lose! Rock destroys Scissors!";
  } else if (playerSelection === computerSelection) {
    return "It's a Tie! Play again!"
  } else {
    return 'You must enter "Rock," "Paper," or "Scissors..."';  
  }
}

// Here's the actual game function to play 5 rounds.
// function game(){

//   alert("Let's play Rock, Paper, Scissors! Best of 5 wins...");
//   let wins = 0;
//   let losses = 0;

//   for (let rounds = 0; rounds < 5; rounds++) {

//   let roundResult = playRound();

//     if (roundResult === "It's a Tie! Play again!") {
//       console.log("You both chose the same!");
//       console.log(roundResult);
//       rounds--;

//     } else if (roundResult === 'You must enter "Rock," "Paper," or "Scissors..."') {
//       console.log(roundResult);
//       rounds--;
    
//     } else if (roundResult === "You lose! Paper covers Rock!") {
//       console.log("You chose Rock");
//       console.log("Computer chose Paper");
//       console.log(roundResult);
//       losses++;
//       console.log("Wins: " + wins + " " + "Losses: " + losses);

//     } else if (roundResult === "You win! Rock destroys Scissors!") {
//       console.log("You chose Rock");
//       console.log("Computer chose Scissors");
//       console.log(roundResult);
//       wins++;
//       console.log("Wins: " + wins + " " + "Losses: " + losses);
      
//     } else if (roundResult === "You lose! Scissors cut Paper!") {
//       console.log("You chose Paper");
//       console.log("Computer chose Scissors");
//       console.log(roundResult); 
//       losses++;
//       console.log("Wins: " + wins + " " + "Losses: " + losses);
      
//     } else if (roundResult === "You win! Paper covers Rock!") {
//       console.log("You chose Paper");
//       console.log("Computer chose Rock");
//       console.log(roundResult); 
//       wins++;
//       console.log("Wins: " + wins + " " + "Losses: " + losses);
      
//     } else if (roundResult === "You win! Scissors cut Paper!") {
//       console.log("You chose Scissors");
//       console.log("Computer chose Paper");
//       console.log(roundResult); 
//       wins++;
//       console.log("Wins: " + wins + " " + "Losses: " + losses);
      
//     } else if (roundResult === "You lose! Rock destroys Scissors!") {
//       console.log("You chose Scissors");
//       console.log("Computer chose Rock");
//       console.log(roundResult); 
//       losses++;
//       console.log("Wins: " + wins + " " + "Losses: " + losses);
//     }
//   }

//   if (wins > losses) {
//     console.log("You win the game!");
//   } else {
//     console.log("You lose the game! Loser!");
//   }
// }

// FUTURE UPDATE! I would like for the game to end automatically if wins or losses reaches 3 before all the rounds are played. I can kind of grok how in my brain but I'm not sure how to break a loop early like that yet. More to follow as more is learned.
