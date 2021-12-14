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

console.log(computerPlay())