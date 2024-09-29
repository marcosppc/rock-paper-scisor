//CREATE a function to get the user choice -> getUserChoice
//The user input MUST be a string equal to "Rock", "Paper" or "Scisorss"
//Return the value 

//CREATE a function to get the computer choice -> getComputerChoice
//return a random string value between "Rock", "Paper" or "Scisorss"

//CREATE a function that evaluate the user input and the computer input -> getResult
//The parameters used will be the userInput and computerInput

//IF both inputs are EQUAL, they DRAW

//ELSE

//IF userInput equals to Rock and computerInput equals Scisor, user WINS
//IF userInput equals to Rock and computerInput equals Paper, computer WINS

//IF userInput equals to Paper and computerInput equals Rock, user WINS
//IF userInput equals to Paper and computerInput equals Scisor, computer WINS

//IF userInput equals to Scisor and computerInput equals Rock, computer WINS
//IF userInput equals to Scisor and computerInput equals Paper, user WINS

//RETURN a message in the console showing who won

//Scores
let userScore = 0;
let computerScore = 0;

//User choice
function getUserChoice() {
    let userChoice = prompt("Rock, Paper or Scisor?");
    console.log(`You chose: ${userChoice}`);
    return userChoice.toLowerCase();
}

//Computer choice
function getComputerChoice() {
    //Returns 0, 1 or 2
    let randomChoice = Math.floor(Math.random() * 3);
    let computerChoice;
    if (randomChoice === 0) {
        computerChoice = "Rock";
    } else if (randomChoice === 1) {
        computerChoice = "Paper";
    } else {
        computerChoice = "Scisor";
    }
    console.log(`Computer chose: ${computerChoice}`);
    return computerChoice.toLowerCase();
}

//One round
function playRound(user, computer) {
    if (user === computer) {
        console.log("DRAW!");
    } else {
       if ((user === "rock") & (computer === "scisor") | (user === "paper") & (computer === "rock") | (user === "scisor") & (computer === "paper")) {
            userScore++;
            console.log(`You Won! ${user} beats ${computer}`);
        } else {
            console.log(`You lose! ${user} beats ${computer}`);
            computerScore++;
        }
    }
}

//Entire game (5 rounds)
function playGame() {
    for(let i = 0; i < 5; i++) {
        playRound(getUserChoice(), getComputerChoice());
        console.log(`Score: User ${userScore} | Computer ${computerScore}`)
    }
}

playGame();

















