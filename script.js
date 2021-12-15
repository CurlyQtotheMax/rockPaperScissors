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

const playerSelection = "rock";
const computerSelection = computerPlay();

function playRound(playerSelection, computerSelection){

    playerSelection = playerSelection.toLowerCase();
    


    if( 
        playerSelection === computerSelection
    ){
        return("It's a tie");
    }

    if(
        playerSelection === "rock" && computerSelection === "paper"
    ){
        return("Computer wins");
    }

    if(
        playerSelection === "rock" && computerSelection === "scissors"
    ){
        return("Player Wins");
    }

}




console.log("computerSelection is " + computerSelection);
console.log(playRound(playerSelection, computerSelection));
