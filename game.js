function computerPlay()
{
    let ar = ["rock", "paper", "scissors"]
    return ar[Math.floor(Math.random() * ar.length)];
}

function playRound(){
    let userSymbol = prompt("Choose rock, paper os sicssors")
    let 
    userSymbol = userSymbol.toLowerCase()
    while(userSymbol != "rock" || userSymbol != "paper" || userSymbol != "scissors"){
        userSymbol = prompt("Choose rock, paper os sicssors")
    }

}