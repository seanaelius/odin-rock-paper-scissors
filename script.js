//Request name from user
let name = prompt("What is your name?");
//Alert for Instructions!
alert("Please enter \"game()\" in the console log to play Rock Paper Scissors!")
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
        return "You tie with the computer!"
        //Win cases! (rock beats scissors, paper beats rock, scissors beats paper)
    } else if ((playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "paper" && computerSelection == "rock") || (playerSelection == "scissors" && computerSelection == "paper")) {
        return `You Win! ${playerSelection} beats ${computerSelection}!`
        //Lose cases! (reverse of win cases)
    } else if ((playerSelection == "scissors" && computerSelection == "rock") || (playerSelection == "rock" && computerSelection == "paper") || (playerSelection == "paper" && computerSelection == "scissors")) {
        return `You Lose! ${computerSelection} beats ${playerSelection}!`
    }
}

function game() {
    //Define W/L counters
    let wins = 0;
    let loss = 0;
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
        console.log(round)
        //Define result variable to record 4th letter of output
        let result = round.slice(4, 5);
        //If result = W, add one to W counter
        if (result === "W") {
            wins += 1;
            //If result = L, add one to L counter
        } else if (result === "L") {
            loss += 1;
        }
    }
    //At the end compare W and L counters
    //If W > L, player wins
    if (wins > loss) {
        return `${name} wins the game!`
    } else if (wins < loss) {
        //If W < L, computer wins
        return "The Computer wins the game!"
    }
}