let userChoice //create a variable for user's choice of weapon
let computerChoice//create a variable to store computer's choice of weapon

function getComputerChoice() { //use a function to randomly assign weapon to computer's variable
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
}

let userScore = 0
console.log(userScore)
let computerScore = 0
console.log(computerScore)

function playRound (userChoice, computerChoice) {
    if (userChoice === computerChoice) { //use conditional statements to determine the winner of a round
        document.getElementById("message").innerHTML=`You chose ${userChoice}, computer chose ${computerChoice}, it's a tie!`; //print the message announcing the winner and weapons of choice        
    }
    else if ((userChoice === "rock" && computerChoice === "paper")||(userChoice === "paper" && computerChoice === "scissors")||(userChoice === "scissors" && computerChoice === "rock")) {
        document.getElementById("message").innerHTML=`You chose ${userChoice}, Computer chose ${computerChoice}, Computer scores!`;
        computerScore++
    }
    else /*if ((userChoice === "rock" && computerChoice === "scissors")||(userChoice === "paper" && computerChoice === "rock")||(userChoice === "scissors" && computerChoice === "paper"))*/{
        document.getElementById("message").innerHTML=`You chose ${userChoice}, Computer chose ${computerChoice}, User scores!`;
        userScore++
    }
    document.getElementById("user_score").innerHTML=`${userScore}`;
    document.getElementById("computer_score").innerHTML=`${computerScore}`;
}

const btn = document.querySelectorAll('button');
btn.forEach((button) => {
    button.addEventListener('click', () => {
        userChoice = `${button.id}`;
        computerChoice = getComputerChoice();
        playRound(userChoice, computerChoice);
        checkWin(userScore, computerScore);
    });
});

/*const btnRock = document.querySelector('#rock');
btnRock.addEventListener('click', () => {
    userChoice = "rock";
    computerChoice = getComputerChoice();
    playRound(userChoice, computerChoice);
    checkWin(userScore, computerScore);
});

const btnPaper = document.querySelector('#paper');
btnPaper.addEventListener('click', () => {
    userChoice = "paper";
    computerChoice = getComputerChoice();
    playRound(userChoice, computerChoice);
    checkWin(userScore, computerScore);
});

const btnScissors = document.querySelector('#scissors');
btnScissors.addEventListener('click', () => {
    userChoice = "scissors";
    computerChoice = getComputerChoice();
    playRound(userChoice, computerChoice);
    checkWin(userScore, computerScore);
}); */

function checkWin (userScore, computerScore) {
    if (userScore===5) {
        document.getElementById("message").innerHTML="User wins!"; //display message for the winner
        setTimeout(() => {location.reload();}, "2000");
    }
    else if (computerScore===5) {
        document.getElementById("message").innerHTML="Computer wins!";
        setTimeout(() => {location.reload();}, "2000");
    } 
}
/*
function game() {
    while (userScore<5 && computerScore<5) { //create a loop which will keep playing the game until user or computer scores 5 points
        userChoice = prompt("Choose your weapon: Rock, Paper or Scissors?", "").toLowerCase();//assign new value to variable holding user's choice of weapon, make it case insensitive
        if (((userChoice!=="rock")&&(userChoice!=="paper")&&(userChoice!=="scissors"))||userChoice===null) {//create a contingency in case of a typo or choice of null allowing another choice without making the loop run needlessly
            alert ("Weapon unavailable, pick again!");
            userChoice = prompt("Choose your weapon: Rock, Paper or Scissors?", "").toLowerCase();
        }
        console.log(userChoice)
        computerChoice = getComputerChoice();//assign new value to variable holding computer's choice of weapon
        console.log(computerChoice)
        playRound(userChoice, computerChoice);//play a round    
    }
    if (userScore===5) {
        alert ("User wins!") //display message for the winner
    }
    else if (computerScore===5) {
        alert ("Computer wins!")
    } 
}
console.log(game()) //run the game */