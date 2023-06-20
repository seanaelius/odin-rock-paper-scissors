//Request name from user
//let name = prompt("What is your name?");
const name = 'MASTERCHEFCANADA'

//START COUNTING WINS VS LOSS
let wins = 0;
let loss = 0;

const playerScore = document.querySelector('.player')
const computerScore = document.querySelector('.computer')
const results = document.querySelector('.results')

//Create a function called getComputerChoice
function getComputerChoice() {
    //Function will randomly return rock, paper, scissors
    //Get a random number from 0-2
    let choice = Math.floor(Math.random() * 3)
    //console.log(choice)
    //If number = 0, get rock
    if (choice == 0) {
        return "rock";
        //If number = 1, get paper
    } else if (choice == 1) {
        return "paper";
        //If number = 2, get scissors
    } else {
        return "scissors";
    }
}

//Create a function that plays a single round of rock paper scissors
//Function should take two parameters - the playerSelection and computerSelection
function playRound(playerSelection, computerSelection) {
    //Tie cases (rock and rock, paper and paper, scissors and scissors)
    if (playerSelection === computerSelection) {
        console.log("T")
        //Win cases! (rock beats scissors, paper beats rock, scissors beats paper)
    } else if ((playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "paper" && computerSelection == "rock") || (playerSelection == "scissors" && computerSelection == "paper")) {
        console.log("W")
        wins += 1;
        playerScore.textContent = `${wins}`
        //Lose cases! (reverse of win cases)
    } else if ((playerSelection == "scissors" && computerSelection == "rock") || (playerSelection == "rock" && computerSelection == "paper") || (playerSelection == "paper" && computerSelection == "scissors")) {
        console.log("L")
        loss += 1;
        computerScore.textContent = `${loss}`
    }
}

//Game status declaration
const gameStatus = document.querySelector('.game-status')
const instructions = document.querySelector('.instructions')

//Declare buttons
const rockButton = document.querySelector('#rock')
const paperButton = document.querySelector('#paper')
const scissorsButton = document.querySelector('#scissors')


//Event Rock
rockButton.addEventListener('click', function () {
    const computerSelection = getComputerChoice()
    playRound('rock', computerSelection)
});

//Event Paper
paperButton.addEventListener('click', function () {
    const computerSelection = getComputerChoice()
    playRound('paper', computerSelection)
})

//Event Scissors
scissorsButton.addEventListener('click', function () {
    const computerSelection = getComputerChoice()
    playRound('scissors', computerSelection)
})
