let names = ["player 1",]

//Event Name
const nameButton = document.querySelector('#name')
nameButton.addEventListener('click', function () {
    newName = prompt("What is your name?")
    names.push(`${newName}`)
    gameProgress.textContent = 'You changed your name! Press Start to start a new game!'
    results.textContent = ''
    wins = 0;
    loss = 0;
    playerScore.textContent = `${wins}`
    computerScore.textContent = `${loss}`
});

//START COUNTING WINS VS LOSS
let wins = 0;
let loss = 0;

const playerScore = document.querySelector('.player')
const computerScore = document.querySelector('.computer')
const results = document.querySelector('.results')
const gameProgress = document.querySelector('.game-progress')

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
    let name = names.slice(-1)
    //Tie cases (rock and rock, paper and paper, scissors and scissors)
    if (playerSelection === computerSelection) {
        playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
        results.textContent = `You tie with the Computer! ${playerSelection} does not beat ${computerSelection}.`
        if ((wins >= 5) || (loss >= 5)) {
            wins = 0;
            loss = 0;
            gameProgress.textContent = 'Start new game!'
            playerScore.textContent = `${wins}`
            computerScore.textContent = `${loss}`
            results.textContent = ''
        }
        //Win cases! (rock beats scissors, paper beats rock, scissors beats paper)
    } else if ((playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "paper" && computerSelection == "rock") || (playerSelection == "scissors" && computerSelection == "paper")) {
        playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
        results.textContent = `You won against the Computer! ${playerSelection} beats ${computerSelection}.`
        wins += 1;
        if ((wins < 5) & (loss < 5)) {
            playerScore.textContent = `${wins}`
        } else if (wins == 5) {
            playerScore.textContent = `${wins}`
            gameProgress.textContent = `${name} wins with a final score of ${wins}-${loss}`
        } else if ((wins >= 5) || (loss >= 5)) {
            wins = 0;
            loss = 0;
            gameProgress.textContent = 'Start new game!'
            playerScore.textContent = `${wins}`
            computerScore.textContent = `${loss}`
            results.textContent = ''
        }
        //Lose cases! (reverse of win cases)
    } else if ((playerSelection == "scissors" && computerSelection == "rock") || (playerSelection == "rock" && computerSelection == "paper") || (playerSelection == "paper" && computerSelection == "scissors")) {
        playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
        results.textContent = `You lost to the Computer! ${playerSelection} loses to ${computerSelection}.`
        loss += 1;
        if ((wins < 5) & (loss < 5)) {
            computerScore.textContent = `${loss}`
        } else if (loss == 5) {
            computerScore.textContent = `${loss}`
            gameProgress.textContent = `Computer wins with a final score of ${wins}-${loss}`
        } else if ((loss >= 5) || (wins >= 5)) {
            wins = 0;
            loss = 0;
            gameProgress.textContent = 'Start new game!'
            playerScore.textContent = `${wins}`
            computerScore.textContent = `${loss}`
            results.textContent = ''
        }
    }
}

//Game status declaration
const gameStatus = document.querySelector('.game-status')
const instructions = document.querySelector('.instructions')

//Declare buttons
const rockButton = document.querySelector('#rock')
const paperButton = document.querySelector('#paper')
const scissorsButton = document.querySelector('#scissors')

//Declare Start and Reset Buttons
const startButton = document.querySelector('#start')
const resetButton = document.querySelector('#reset')

//Event Start
startButton.addEventListener('click', function () {
    let name = names.slice(-1)
    gameProgress.textContent = `Welcome ${name} to a classic game of rock, paper, scissors! Click an option to start your first game!`
});

//Event Reset
resetButton.addEventListener('click', function () {
    gameProgress.textContent = 'You reset the game! Press Start to start a new game!'
    results.textContent = ''
    wins = 0;
    loss = 0;
    playerScore.textContent = `${wins}`
    computerScore.textContent = `${loss}`
});


//Event Rock
rockButton.addEventListener('click', function () {
    gameProgress.textContent = 'Game in progress..'
    const computerSelection = getComputerChoice()
    playRound('rock', computerSelection)
});

//Event Paper
paperButton.addEventListener('click', function () {
    gameProgress.textContent = 'Game in progress..'
    const computerSelection = getComputerChoice()
    playRound('paper', computerSelection)
})

//Event Scissors
scissorsButton.addEventListener('click', function () {
    gameProgress.textContent = 'Game in progress..'
    const computerSelection = getComputerChoice()
    playRound('scissors', computerSelection)
})
