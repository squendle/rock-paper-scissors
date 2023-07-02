// Changing colors of choice images, text, and div outlines on mouseover

const choiceDivs = document.querySelectorAll(".choice");
const choiceText = document.querySelectorAll("div.choice-box > p");
const gungnirImg = document.querySelector("#gungnir");
const mjolnirImg = document.querySelector("#mjolnir");
const fiskegarnImg = document.querySelector("#fiskegarn");

function changeChoiceColor(e) {
  this.classList.add('hovered');
  if (choiceDivs[0].classList.contains('hovered')) {
      mjolnirImg.setAttribute("src", "img/mjolnir2.png");
      choiceText[0].classList.add('purp-text');
    }
  if (choiceDivs[1].classList.contains('hovered')) {
    fiskegarnImg.setAttribute("src", "img/fiskegarn2.png");
    choiceText[1].classList.add('purp-text');
  }
  if (choiceDivs[2].classList.contains('hovered')) {
    gungnirImg.setAttribute("src", "img/gungnir2.png");
    choiceText[2].classList.add('purp-text');
  }
};

function removeChoiceColor(e) {
  this.classList.remove('hovered');
  if (!choiceDivs[0].classList.contains('hovered')) {
    mjolnirImg.setAttribute("src", "img/mjolnir.png");
    choiceText[0].classList.remove('purp-text');
  }
  if (!choiceDivs[1].classList.contains('hovered')) {
  fiskegarnImg.setAttribute("src", "img/fiskegarn.png");
  choiceText[1].classList.remove('purp-text');
  }
  if (!choiceDivs[2].classList.contains('hovered')) {
  gungnirImg.setAttribute("src", "img/gungnir.png");
  choiceText[2].classList.remove('purp-text');
  }
};

function changeTextColor(e) {
  this.classList.toggle('purp-text');
}

choiceDivs.forEach(choice => choice.addEventListener("mouseover", changeChoiceColor));
choiceDivs.forEach(choice => choice.addEventListener("mouseout", removeChoiceColor));


// My Mjolnir Fiskegarn Gungnir Game


//the DOM selectors for the divs containing the choices
const mjolnir = document.querySelector("#rock");
const fiskegarn = document.querySelector("#paper");
const gungnir = document.querySelector("#scissors");

//DOM selectors for top message display

const topDisplay = document.querySelector('#top-display');
const topMessage = document.createElement('h2');
const playerDisplay = document.querySelector('#player-display');
const playerMessage = document.createElement('p');
const godsDisplay = document.querySelector('#gods-display');
const godsMessage = document.createElement('p');
//DOM selectors for results and scoreboard

const resultDisplay = document.querySelector("#results");
const winCountDisplay = document.querySelector("#win-count");
const lossCountDisplay = document.querySelector("#loss-count");
const wldMessage = document.createElement("h2");
const winCounter = document.createElement("h2");
const lossCounter = document.createElement("h2");

//wld return statements & counters
const winRS = "You win! Mjolnir shatters Gungnir!"
const winPR = "You win! Fiskegarn entangles Mjolnir!"
const winSP = "You win! Gungnir slices Fiskegarn!"
const loseRP = "You lose! Fiskegarn entangles Mjolnir!"
const losePS = "You lose! Gungnir slices Fiskegarn!"
const loseSR = "You lose! Mjolnir shatters Gungnir!"
const draw = "It's a draw! Return to battle!"
let winCount = 0;
let lossCount = 0;

//play again button stuff
const playAgain = document.createElement("a");
playAgain.textContent = "Play Again?";
playAgain.setAttribute('href', 'javascript:newGame()');
playAgain.addEventListener("mouseover", changeTextColor);
playAgain.addEventListener("mouseout", changeTextColor);
playAgain.addEventListener("click", changeTextColor);

// computerSelection random picker function
function getComputerChoice() {
  return choices[Math.floor(Math.random()*choices.length)];
};

let computerSelection;
let playerSelection;

// array of possible computer choices
const choices = [
  "Mjolnir",
  "Fiskegarn",
  "Gungnir"
];

// This is the function for a single round of RPS.
function playRound(playerSelection) {
  if (playerSelection === 'Mjolnir' && computerSelection === 'Fiskegarn'){
    return loseRP;    
  } else if (playerSelection === 'Mjolnir' && computerSelection === 'Gungnir'){
    return winRS;
  } else if (playerSelection === 'Fiskegarn' && computerSelection === 'Mjolnir') {
    return winPR;
  } else if (playerSelection === 'Fiskegarn' && computerSelection === 'Gungnir') {
    return losePS;
  } else if (playerSelection === 'Gungnir' && computerSelection === 'Mjolnir'){
    return loseSR;
  } else if (playerSelection === 'Gungnir' && computerSelection === 'Fiskegarn') {
   return winSP;
  } else if (playerSelection === computerSelection) {
    return draw;
  } else {
    return "";
  };
};

//this updates the score display and various messages

function updateScoreboard(result) {
  if (result === winRS) {
    winCount+= 1;
    wldMessage.textContent = winRS;
    resultDisplay.appendChild(wldMessage);
    winCounter.textContent = winCount;
    winCountDisplay.appendChild(winCounter);
    lossCounter.textContent = lossCount;
    lossCountDisplay.appendChild(lossCounter);
  } else if (result === winPR) {
    winCount+= 1;
    wldMessage.textContent = winPR;
    resultDisplay.appendChild(wldMessage);
    winCounter.textContent = winCount;
    winCountDisplay.appendChild(winCounter);
    lossCounter.textContent = lossCount;
    lossCountDisplay.appendChild(lossCounter);
  } else if (result === winSP){
    winCount+= 1;
    wldMessage.textContent = winSP;
    resultDisplay.appendChild(wldMessage);
    winCounter.textContent = winCount;
    winCountDisplay.appendChild(winCounter);
    lossCounter.textContent = lossCount;
    lossCountDisplay.appendChild(lossCounter);
  } else if (result === loseRP) {
    lossCount += 1;
    wldMessage.textContent = loseRP;
    resultDisplay.appendChild(wldMessage);
    lossCounter.textContent = lossCount;
    lossCountDisplay.appendChild(lossCounter);
    winCounter.textContent = winCount;
    winCountDisplay.appendChild(winCounter);
  } else if (result === losePS) {
    lossCount += 1;
    wldMessage.textContent = losePS;
    resultDisplay.appendChild(wldMessage);
    lossCounter.textContent = lossCount;
    lossCountDisplay.appendChild(lossCounter);
    winCounter.textContent = winCount;
    winCountDisplay.appendChild(winCounter);
  } else if (result === loseSR) {
    lossCount += 1;
    wldMessage.textContent = loseSR;
    resultDisplay.appendChild(wldMessage);
    lossCounter.textContent = lossCount;
    lossCountDisplay.appendChild(lossCounter);
    winCounter.textContent = winCount;
    winCountDisplay.appendChild(winCounter);
  } else if (result === draw) {
    wldMessage.textContent = draw;
    resultDisplay.appendChild(wldMessage);
    winCounter.textContent = winCount;
    winCountDisplay.appendChild(winCounter);
    lossCounter.textContent = lossCount;
    lossCountDisplay.appendChild(lossCounter);
  }
};

// this function checks for a winner after each round and updates the scoreboard and main display accordingly

function checkForWin() {
  if (winCount === 5){
    topMessage.textContent = "YOU WIN!";
    topDisplay.appendChild(topMessage);
    playerMessage.textContent = "";
    playerDisplay.appendChild(playerMessage);
    godsMessage.textContent = "";
    godsDisplay.appendChild(godsMessage);
    wldMessage.textContent = "You have pleased the gods! Odin shall welcome you to Valhalla!";
    resultDisplay.appendChild(wldMessage);
    winCounter.textContent = "";
    lossCounter.textContent = "";
    winCountDisplay.appendChild(winCounter);
    lossCountDisplay.appendChild(lossCounter);
    resultDisplay.appendChild(playAgain);
  } else if (lossCount === 5) {
    topMessage.textContent = "YOU LOSE!"
    topDisplay.appendChild(topMessage);
    playerMessage.textContent = "";
    playerDisplay.appendChild(playerMessage);
    godsMessage.textContent = "";
    godsDisplay.appendChild(godsMessage);
    wldMessage.textContent = "The gods are displeased. Your shame shall follow you forever in Hel.";
    resultDisplay.appendChild(wldMessage);
    winCounter.textContent = "";
    lossCounter.textContent = "";
    winCountDisplay.appendChild(winCounter);
    lossCountDisplay.appendChild(lossCounter);
    resultDisplay.appendChild(playAgain);
  }
};


//new game function

function newGame(){
  winCount = 0;
  lossCount = 0;
  resultDisplay.removeChild(wldMessage);
  resultDisplay.removeChild(playAgain);
  topDisplay.removeChild(topMessage);
};

//DOM event listeners to play rounds.
mjolnir.addEventListener("click", function() {
  computerSelection = getComputerChoice();
  playerSelection = "Mjolnir"
  result = playRound(playerSelection);
  playerMessage.textContent = `You chose ${playerSelection}`;
  playerDisplay.appendChild(playerMessage);
  godsMessage.textContent = `The gods chose ${computerSelection}`;
  godsDisplay.appendChild(godsMessage);
  updateScoreboard(result);
  checkForWin();
});

fiskegarn.addEventListener("click", function () {
  computerSelection = getComputerChoice();
  playerSelection = "Fiskegarn"
  result = playRound(playerSelection);
  playerMessage.textContent = `You chose ${playerSelection}`;
  playerDisplay.appendChild(playerMessage);
  godsMessage.textContent = `The gods chose ${computerSelection}`;
  godsDisplay.appendChild(godsMessage);
  updateScoreboard(result);
  checkForWin();
});

gungnir.addEventListener("click", function() {
  computerSelection = getComputerChoice();
  playerSelection = "Gungnir"
  result = playRound(playerSelection);
  playerMessage.textContent = `You chose ${playerSelection}`;
  playerDisplay.appendChild(playerMessage);
  godsMessage.textContent = `The gods chose ${computerSelection}`;
  godsDisplay.appendChild(godsMessage);
  updateScoreboard(result);
  checkForWin();
});