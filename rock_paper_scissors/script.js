let humanScore = 0
let computerScore = 0
let draw = 0
const arr = ['rock', 'paper', 'scissors']
let round = 5
const allButton = [...document.querySelectorAll('button')]
const buttonContainer = document.querySelector('.button-container')
const result = document.querySelector('.result')

function random(array) {
  return Math.floor(Math.random() * array.length)
}

function getComputerChoice() {
  return arr[random(arr)]
}

function getHumanChoice(val) {
  return val.value
}

function firstCharUpper(word) {
  return word.slice(0, 1).toUpperCase() + word.slice(1)
}

function reset() {
  window.location.reload()
}

function showScore() {
  alert(
    `SCORE:\nUSER(${humanScore})    COMP(${computerScore})    DRAW(${draw})\n`
  )
}

function showResult() {
  if (humanScore > computerScore) {
    result.textContent = 'YOU WIN!'
  } else if (humanScore < computerScore) {
    result.textContent = 'YOU LOSE!'
  } else {
    result.textContent = 'DRAW'
  }
  setTimeout(showScore, 1000)
}

function playRound(objButton) {
  const humanChoice = getHumanChoice(objButton)
  const computerChoice = getComputerChoice()

  if (round != 0) {
    if (humanChoice === computerChoice) {
      draw++
      result.textContent = 'Draw'
    } else if (
      (humanChoice === 'rock' && computerChoice === 'paper') ||
      (humanChoice === 'paper' && computerChoice === 'scissors') ||
      (humanChoice === 'scissors' && computerChoice === 'rock')
    ) {
      computerScore++
      result.textContent = `You lose! ${firstCharUpper(
        computerChoice
      )} beats ${firstCharUpper(humanChoice)}`
    } else {
      humanScore++
      result.textContent = `You win! ${firstCharUpper(
        humanChoice
      )} beats ${firstCharUpper(computerChoice)}`
    }
    round--
  }

  // add reset button
  if (round == 0) {
    allButton.forEach(button => button.remove())
    const resetButton = document.createElement('button')
    resetButton.textContent = 'Reset'
    buttonContainer.appendChild(resetButton)
    resetButton.addEventListener('click', reset)
    setTimeout(showResult, 2000)
  }
}
