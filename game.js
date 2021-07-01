function computerPlay()
{
    let ar = ["rock", "paper", "scissors"]
    return ar[Math.floor(Math.random() * ar.length)];
}

function playRound(playerSelection, computerSelection, playerScore, computerScore, tieNumber){
    if(playerSelection == computerSelection){
        tieNumber++
        return "It's a tie! You and computer both have chosen " + playerSelection
    }
    else if((playerSelection == "paper" && computerSelection == "scissors") || (playerSelection == "scissors" && computerSelection == "rock") || (playerSelection == "rock" && computerSelection == "paper")){
        computerScore++
        return "You've lost! Computer took " + computerSelection + " and you chose + " + playerSelection
    }
    else{
        playerScore++
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
    let userSymb = getUserSymbol()
    let computerSymb = computerPlay()
    console.log(playRound(userSymb, computerSymb, userScore, computerScore, tieNumber))
    console.log("| Player score: "+ userScore + " | Computer score: "+ computerScore+" | Number of ties: " + tieNumber+" |")
}