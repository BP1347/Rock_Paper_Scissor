function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3);
        return randomNum

}
let compPick = () => {
switch (getComputerChoice()) {
    case 0:
        return 'rock'
        break;
    case 1:
        return 'paper'
        break;
    case 2:
        return 'scissor'
        break;
       
}
}
 let playerScore = 0
 let compScore = 0


function playRound(playerSelection, computerSelection) {
   
   let playerScore = 0;
    let compScore = 0;
   
    if (playerSelection === computerSelection) {
        return 'Its a Tie!'
    } else if (playerSelection === 'rock' && computerSelection === 'scissor') {
        return 'I win ' + playerScore + 1
        
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'I win ' + playerScore + 1
    } else if (playerSelection === 'scissor' && computerSelection === 'paper') {
        return 'I win ' + playerScore + 1
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return 'You win ' + compScore + 1
    } else if (playerSelection === 'paper' && computerSelection === 'scissor') {
        return 'You win ' + compScore +1
    } else if (playerSelection === 'scissor' && computerSelection === 'rock') {
        return 'You win ' + compScore + 1
    }
    console.log(playerScore)
    console.log(compScore)
}


const computerSelection = compPick()
let playerSelection =window.prompt("Let's play RPS")


//function game() {
  
  // return playRound(playerSelection,computerSelection)
        //for(let i = 0; i < playRound.length; i++){
           //console.log(playRound(i))
        

console.log(playRound(playerSelection, computerSelection))
 
