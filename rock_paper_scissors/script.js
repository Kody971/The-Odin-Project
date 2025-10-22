const prompt = require('prompt-sync')({ sigint: true })

let humanScore = 0
let computerScore = 0
let draw = 0
const arr = ['rock', 'paper', 'scissors']

function random(array) {
  return Math.floor(Math.random() * array.length)
}

function getComputerChoice() {
  return arr[random(arr)]
}

function getHumanChoice() {
  const choice = prompt("Your choice 'rock' or 'paper' or 'scissors': ")
  return choice.toLowerCase()
}

function firstCharUpper(word) {
  return word.slice(0, 1).toUpperCase() + word.slice(1)
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    draw++
    console.log(
      '=================================================\nDraw\n=================================================\n'
    )
  } else if (
    (humanChoice === 'rock' && computerChoice === 'paper') ||
    (humanChoice === 'paper' && computerChoice === 'scissors') ||
    (humanChoice === 'scissors' && computerChoice === 'rock')
  ) {
    computerScore++
    console.log(
      `=================================================\nYou lose! ${firstCharUpper(
        computerChoice
      )} beats ${firstCharUpper(
        humanChoice
      )}\n=================================================\n`
    )
  } else {
    humanScore++
    console.log(
      `=================================================\nYou win! ${firstCharUpper(
        humanChoice
      )} beats ${firstCharUpper(
        computerChoice
      )}\n=================================================\n`
    )
  }
}

function playGame(rounds) {
  while (rounds != 0) {
    rounds--
    console.log(
      `Score:\nuser(${humanScore})    comp(${computerScore})    draw(${draw})\n`
    )
    playRound(getHumanChoice(), getComputerChoice())
  }
  if (rounds == 0) {
    console.log(
      `Score:\nuser(${humanScore})    comp(${computerScore})    draw(${draw})\n`
    )
  }
}

playGame(5)
