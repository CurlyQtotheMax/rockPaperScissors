//console.log("hello world")

function computerPlay (){
    let ranNum = Math.floor(Math.random()*3);

    if (ranNum == 0 ){
        return("rock");
    }else if(ranNum == 1){
        return("paper");
    }else {
        return("scissors");
    }
}

let computerScore = 0;
let playerScore = 0;

function playRound(playerSelection, computerSelection){

    if( 
        playerSelection === computerSelection
    ){
        return("It's a tie!");
    }

    if(
        playerSelection === "rock" && computerSelection === "paper" ||
        playerSelection === "paper" && computerSelection === "scissors" ||
        playerSelection === "scissors" && computerSelection === "rock"
    ){
        computerScore++;
        return(computerSelection + " beats " + playerSelection + " Computer wins!");
        
    }

    if(
        playerSelection === "rock" && computerSelection === "scissors" ||
        playerSelection === "paper" && computerSelection === "rock" ||
        playerSelection === "scissors" && computerSelection === "paper" 
    ){
        playerScore ++;
        return(playerSelection + " beats " + computerSelection + " Player Wins!");
        
    }

}

function game(i){

    if (i==5){
        if(playerScore === computerScore){
            alert("It's a tie, no one is a champion.");
        }
        if(playerScore > computerScore){
            alert("You are the Champion!");
        }
        if(computerScore>playerScore){
            alert("The Computer is the Champion!")
        }
        
    } else{

        let input = window.prompt("Rock, paper or scissors?");
        let playerInput = input.toLowerCase();

        alert(playRound(playerInput, computerPlay()) + " Player: " + playerScore + " " +" Computer: " + computerScore);
    }
}

game(0)
game(1)
game(2)
game(3)
game(4)
game(5)

