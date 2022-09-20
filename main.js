let pScore = 0;
let cScore = 0

function getComputerChoice() {
    const randomNum = Math.floor(Math.random() * 3)
        if(randomNum === 0) {
            return 'rock'
        } else if (randomNum === 1)  {
            return 'paper'
        } else {
            return 'scissor'
        }
}
console.log(getComputerChoice())

function playRound(playerSelection,computerSelection) {
    if(playerSelection === computerSelection) {
        return 'Its a Tie!'
    } else if (playerSelection === 'rock' && computerSelection === 'scissor') {
        pScore++
        return "You Win! Rock beats Scissor"
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        pScore++
        return "You Win! Paper beats Rock"
    } else if (playerSelection === 'scissor' && computerSelection === 'paper') {
        pScore++
        return "You Win! Scissor beats Paper"
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        cScore++
        return "You Lost! Paper beats Rock"
    } else if (playerSelection === 'paper' && computerSelection === 'scissor') {
        cScore++
        return "You Lost! Scissor beats Rock"
    } else if (playerSelection === 'scissor' && computerSelection === 'rock') {
        cScore ++
        return "You Lost! Rock beats Scissor"
    }
}

function game() {
    
        const playerSelection = prompt("Rock, Paper, Scissor").toLowerCase()
        const computerSelection = getComputerChoice()
     return   playRound(playerSelection,computerSelection)
    
}

for (let i=0; i < 5; i++){
console.log(game())
console.log(pScore)
console.log(cScore)
}