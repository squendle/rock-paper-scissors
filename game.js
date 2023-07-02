// Changing colors of choice images, text, and div outlines on mouseover

const choiceDivs = document.querySelectorAll(".choice");
const choiceText = document.querySelectorAll("div.choiceBox > p");
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

choiceDivs.forEach(choice => choice.addEventListener("mouseover", changeChoiceColor));
choiceDivs.forEach(choice => choice.addEventListener("mouseout", removeChoiceColor));


// My Rock Paper Scissors Game

// array of possible computer choices
const choices = [
  "rock",
  "paper",
  "scissors"
];

//the DOM selectors for the divs containing the choices and results
const mjolnir = document.querySelector("#rock");
const fiskegarn = document.querySelector("#paper");
const gungnir = document.querySelector("#scissors");

const results = document.querySelector("#results");
const wldDisplay = document.createElement("h2");

//wld return statements
const winRS = "You win! Mjolnir shatters Gungnir!"
const winPR = "You win! Fiskegarn entangles Mjolnir!"
const winSP = "You win! Gungnir slices Fiskegarn!"
const loseRP = "You lose! Fiskegarn entangles Mjolnir!"
const losePS = "You lose! Gungnir slices Fiskegarn!"
const loseSR = "You lose! Mjolnir shatters Gungnir!"
const draw = "It's a draw! Return to battle!"

// computerSelection random picker function
function getComputerChoice() {
  return choices[Math.floor(Math.random()*choices.length)];
};

// This is the function for a single round of RPS.
function playRound(playerSelection) {

  let computerSelection = getComputerChoice();

  if (playerSelection === 'rock' && computerSelection === 'paper'){
    wldDisplay.textContent = loseRP;
    results.appendChild(wldDisplay);
  } else if (playerSelection === 'rock' && computerSelection === 'scissors'){
    wldDisplay.textContent = winRS;
    results.appendChild(wldDisplay);
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    wldDisplay.textContent = winPR;
    results.appendChild(wldDisplay);
  } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    wldDisplay.textContent = losePS;
    results.appendChild(wldDisplay);
  } else if (playerSelection === 'scissors' && computerSelection === 'rock'){
    wldDisplay.textContent = loseSP;
    results.appendChild(wldDisplay);
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    wldDisplay.textContent = winSP;
    results.appendChild(wldDisplay);
  } else if (playerSelection === computerSelection) {
    wldDisplay.textContent = draw;
    results.appendChild(wldDisplay);
  } else {
    wldDisplay.textContent = "";
    results.appendChild(wldDisplay);
  };

};

//DOM event listeners to play rounds.
mjolnir.addEventListener("click", function() {
  playRound("rock")
});
fiskegarn.addEventListener("click", function () {
  playRound("paper")
});
gungnir.addEventListener("click", function() {
  playRound("scissors")
});