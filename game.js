function computerPlay()
{
    let ar = ["rock", "paper", "scissors"]
    return ar[Math.floor(Math.random() * ar.length)];
}

function playRound(playerSelection, computerSelection){
    if(playerSelection == computerSelection){
        return "It's a tie! You and computer both have chosen " + playerSelection
    }
    else if((playerSelection == "paper" && computerSelection == "scissors") || (playerSelection == "scissors" && computerSelection == "rock") || (playerSelection == "rock" && computerSelection == "paper")){
        return "You've lost! Computer took " + computerSelection + " and you chose " + playerSelection
    }
    else{
        return "You've won! You chose " + playerSelection + " and computer took " + computerSelection
    }
}

function getUserSymbol(){
    while(true){
        let userSymbol = prompt("Choose rock, paper or scissors")
        userSymbol = userSymbol.toLowerCase()
        console.log(userSymbol)
        if (userSymbol == "rock" || userSymbol == "paper" || userSymbol == "scissors"){
            return userSymbol
        }  
    }
}

function playGame(){
    let userScore = 0, computerScore = 0, tieNumber = 0
    for(let i =0; i < 5; i++){
    let userSymb = getUserSymbol()
    let computerSymb = computerPlay()
    let adam = (playRound(userSymb, computerSymb))
    if(adam.search('won') != -1){
        userScore++;
    }
    else if(adam.search('lost') != -1){
        computerScore++;
    }
    else{
        tieNumber++;
    }
    console.log(adam)
    console.log("| Player score: "+ userScore + " | Computer score: "+ computerScore+" | Number of ties: " + tieNumber+" |")
    }
    
}