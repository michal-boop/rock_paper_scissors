let userChoice = prompt("Choose your weapon: Rock, Paper or Scissors?", "Rock").toLowerCase();//create a variable for user's choice of weapon, make it case insensitive
console.log(userChoice)
let computerChoice = getComputerChoice();//create a variable to store computer's choice of weapon
console.log(computerChoice)
function getComputerChoice() {
    let computerWeapon
    let x = Math.ceil(Math.random()*9);
    console.log(x);
    if (x<=3) {
        computerWeapon = "rock";
    }
    else if (x<=6) {
        computerWeapon = "paper";
    }
    else {
        computerWeapon = "scissors";
    }
    console.log(computerWeapon)
    return computerWeapon;  
}//use a function to randomly assign weapon to computer's variable
let userScore = 0
console.log(userScore)
let computerScore = 0
console.log(computerScore)
function playRound (userChoice, computerChoice) {
    if (userChoice === computerChoice) { //use conditional statements to determine the winner of a round
        alert (`You chose ${userChoice}, computer chose ${computerChoice}, it's a tie!`) //print the message announcing the winner and weapons of choice
    }
    else if ((userChoice === "rock" && computerChoice === "paper")||(userChoice === "paper" && computerChoice === "scissors")||(userChoice === "scissors" && computerChoice === "rock")) {
        alert (`You chose ${userChoice}, computer chose ${computerChoice}, computer scores!`)
        computerScore++
        alert (`User: ${userScore} vs Computer: ${computerScore}`)
    }
    else {
        alert (`You chose ${userChoice}, computer chose ${computerChoice}, user scores!`)
        userScore++
        alert (`User: ${userScore} vs Computer: ${computerScore}`)
    }
}
playRound(userChoice, computerChoice)//play one round of the game
