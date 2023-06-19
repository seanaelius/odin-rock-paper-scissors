//Request name from user
let name = prompt("What is your name?");
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
    //let playerSelection = prompt("What would you like to play this turn? (Rock, Paper, or Scissors)")
    //Return a string that declares the winner of the round
    //Tie cases (rock and rock, paper and paper, scissors and scissors)
    if (playerSelection === computerSelection) {
        return "T"
        //Win cases! (rock beats scissors, paper beats rock, scissors beats paper)
    } else if ((playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "paper" && computerSelection == "rock") || (playerSelection == "scissors" && computerSelection == "paper")) {
        return "W"
        //Lose cases! (reverse of win cases)
    } else if ((playerSelection == "scissors" && computerSelection == "rock") || (playerSelection == "rock" && computerSelection == "paper") || (playerSelection == "paper" && computerSelection == "scissors")) {
        return "L"
    }
    //I want to implement a different system to detect a win as opposed to the string slicing
}

function game() {
    //Define W/L counters
    let wins = 0;
    let loss = 0;
    //ROUND COUNTER
    let roundNumber = 0;
    //While loop continues game until either wins or losses reaches 5 first
    while (wins < 5 & loss < 5) {
        //Define parameters
        const computerSelection = getComputerChoice()
        let playerSelection = prompt("What would you like to play this turn? Rock, Paper or Scissors?")
        //Make playerSelection case-insensitive (Use .toLowerCase())
        playerSelection = playerSelection.toLowerCase()
        //Display Results of the round using console log
        let round;
        round = playRound(playerSelection, computerSelection);
        //Define result variable to record 4th letter of output
        //If result = W, add one to W counter
        if (round === "W") {
            wins += 1;
            console.log(`You Win! ${playerSelection} beats ${computerSelection}!`)
            roundResults.textContent = `You Win! ${playerSelection} beats ${computerSelection}!`
            //If result = L, add one to L counter
        } else if (round === "L") {
            loss += 1;
            console.log(`You Lose! ${computerSelection} beats ${playerSelection}!`)
            roundResults.textContent = `You Lose! ${computerSelection} beats ${playerSelection}!`
        } else if (round === "T") {
            console.log('You Tie with the computer!')
            roundResults.textContent = 'You Tie with the computer!'
        }
        //ADD ROUND COUNTER
        roundNumber += 1;
    }
    //At the end compare W and L counters
    //If W > L, player wins
    if (wins > loss) {
        gameStatus.textContent = `${name} wins the game! ${wins}-${loss}`
    } else if (wins < loss) {
        //If W < L, computer wins
        gameStatus.textContent = `The Computer wins the game! ${wins}-${loss}`
    }
    instructions.textContent = 'Click the button above if you would like to play again!'
}
//Addeventlistener for buttons
//Implement getPlayerChoice() function in here
//Append scoreboard with scoreboard layout and append each score with a value representing their wins
//PRESS BUTTON
const startButton = document.querySelector('.play')
startButton.addEventListener('click', () => {
    //Change game status to game in progress
    gameStatus.textContent = 'Game in progress!'
    instructions.textContent = 'Pick Rock, Paper, Or Scissors!'
})
startButton.addEventListener('click', game)

//CHOOSE ROCK, PAPER, OR SCISSORS
//ROUND END
//PLAYER/COMPUTER WINS THE ROUND!
//SCOREBOARD UPDATE
//GAME END
//PLAYER BEATS COMPUTER WITH A SCORE OF 5-X!

//Game status declaration
const gameStatus = document.querySelector('.game-status')
const instructions = document.querySelector('.instructions')

//Declare buttons
const rockButton = document.querySelector('#rock')
const paperButton = document.querySelector('#paper')
const scissorsButton = document.querySelector('#scissors')

//Round Results Section
const roundResults = document.querySelector('.round-results')