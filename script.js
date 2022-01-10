const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');

const whoWins = document.querySelector('#whoWins');
const playerChose = document.querySelector('#playerChose');
const computerChose = document.querySelector('#computerChose');
const playerScore = document.querySelector('#playerScore');
const computerScore = document.querySelector('#computerScore');
const game = document.querySelector('#game');

let playerInput = "no input";


scissorsButton.addEventListener('click', () => {
    playRound("scissors", computerPlay());
});
paperButton.addEventListener('click', () => {
    playRound("paper", computerPlay());
});
rockButton.addEventListener('click', () => {
    playRound("rock", computerPlay());
});

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

    playerChose.textContent = playerSelection;
    computerChose.textContent = computerSelection;

    if( 
        playerSelection === computerSelection
    ){
        whoWins.textContent = "It's a tie!"
    }

    if(
        playerSelection === "rock" && computerSelection === "paper" ||
        playerSelection === "paper" && computerSelection === "scissors" ||
        playerSelection === "scissors" && computerSelection === "rock"
    ){
        
        computerScore.textContent++;
        whoWins.textContent = computerSelection + " beats " + playerSelection + " Computer wins!";
    }

    if(
        playerSelection === "rock" && computerSelection === "scissors" ||
        playerSelection === "paper" && computerSelection === "rock" ||
        playerSelection === "scissors" && computerSelection === "paper" 
    ){
        
        playerScore.textContent++;
        whoWins.textContent = playerSelection + " beats " + computerSelection + " Player wins!";
    }

    if(playerScore.textContent == '5' || computerScore.textContent == '5'){
        winning();
    }
    

}
function winning(){
    if (playerScore.textContent == '5'){

        game.textcontent = 'Player wins everything';
        console.log('player wins');

    }if(computerScore.textContent == '5'){

        game.textContent = 'Computer wins everything';
        console.log('computer wins');

    }
}


