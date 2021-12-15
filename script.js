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

function playRound(playerSelection, computerSelection){

    if( 
        playerSelection === computerSelection
    ){
        return("It's a tie");
    }

    if(
        playerSelection === "rock" && computerSelection === "paper" ||
        playerSelection === "paper" && computerSelection === "scissors" ||
        playerSelection === "scissors" && computerSelection === "rock"
    ){
        return(computerSelection + " beats " + playerSelection + "Computer wins");
    }

    if(
        playerSelection === "rock" && computerSelection === "scissors" ||
        playerSelection === "paper" && computerSelection === "rock" ||
        playerSelection === "scissors" && computerSelection === "paper" 
    ){
        return(playerSelection + " beats " + computerSelection + "Player Wins");
    }

}

function game(){

    let input = window.prompt("Rock, paper or scissors?");
    let playerInput = input.toLowerCase();

    alert(playRound(playerInput, computerPlay()));
    
}


game()
//console.log("computerSelection is " + computerSelection);
//console.log(playRound(playerSelection, computerSelection));
