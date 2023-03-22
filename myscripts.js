let userChoice //create a variable for user's choice of weapon
let computerChoice//create a variable to store computer's choice of weapon

function getComputerChoice() { //use a function to randomly assign weapon to computer's variable using Math.random function
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
    else /*if ((userChoice === "rock" && computerChoice === "scissors")||(userChoice === "paper" && computerChoice === "rock")||(userChoice === "scissors" && computerChoice === "paper"))*/{ //no need to specify third option since typos are no longer an option
        document.getElementById("message").innerHTML=`You chose ${userChoice}, Computer chose ${computerChoice}, User scores!`; //display results of the current round
        userScore++
    }
    document.getElementById("user_score").innerHTML=`${userScore}`; //display value of scores in the scoreboard table
    document.getElementById("computer_score").innerHTML=`${computerScore}`;
}

const btn = document.querySelectorAll('button'); //target all button elements
btn.forEach((button) => { 
    button.addEventListener('click', () => { //following functions are all triggered by clicking on buttons
        userChoice = `${button.id}`; //but specific value of buttons is assigned as usetChoice
        computerChoice = getComputerChoice(); //computerChoice is assigned after the user
        playRound(userChoice, computerChoice); //function playing a single round is triggered
        checkWin(userScore, computerScore); //conditions for endgame are checked after every round
    });
});


function checkWin (userScore, computerScore) { //this function checks conditions for endgame
    if (userScore===5) {
        setTimeout(() => {document.getElementById("message").innerHTML="User wins!";}, "1000"); //display message for the winner with a slight delay so that a message with results of the last round still runs 
        setTimeout(() => {showImage();}, "2000"); //displays trophy for a user
        setTimeout(() => {location.reload();}, "3000"); //reloads the page erasing the scores
    }
    else if (computerScore===5) {
        setTimeout(() => {document.getElementById("message").innerHTML="Computer wins!";}, "1000");
        setTimeout(() => {location.reload();}, "2000");
    } 
}

function showImage () { //function responsible for showing a trophy in front of everything
    let img = document.createElement("img");
    img.src = "trophy.png";
    img.alt = "Trophy Cup";
    img.style.maxHeight = "80%";
    img.style.zIndex = "1";
    img.style.position = "fixed";
    img.style.top = "50%";
    img.style.marginTop = "-408px";
    img.style.left = "50%";
    img.style.marginLeft = "-343px";
    img.style.filter = "drop-shadow(0 0 100px white)";
    //img.style.transition = "all 2s ease-in"

    document.body.appendChild(img);
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