const reset = () => {
  // do something
}

const del = () => {
  // do something
}

const division = (num1, num2) => {
  return num1 / num2
}

const multiply = (num1, num2) => {
  return num1 * num2
}

const addition = (num1, num2) => {
  return num1 + num2
}

const subtract = (num1, num2) => {
  return num1 - num2
}

const getArithmetic = val => {
  const arithmetic = document.querySelector('.arithmetic').textContent
  if (arithmetic) {
    return result
  }
  return val.value
}

const userInput = val => {
  const input = document.querySelector('.num2')
  input.textContent = input.textContent + val.value
}

const getNumber = val => {
  const number1 = document.querySelector('.num1')
  const number2 = document.querySelector('.num2')

  return [parseint(number1.textContent), parseInt(number2.textContent)]
}

const result = () => {
  const arithmeticList = ['division', 'multiply', 'addition', 'subtract']

  // determine num1 num2 arithmetic value
  // if (arithmetic.includes(val.value)) {
  //   if (num1Value && num2Value && arithmeticValue) {
  //   }
  //   arithmeticValue = val.value
  //   const total = parseInt(val.value) + baseValueNum2
  //   num2.textContent = `${total}`
  //   num2Value += total
  // } else {
  //   num1 += val.value
  // }
  // const input = []

  // calculating
  switch (getArithmetic()) {
    case 'division':
      return division(num1, num2)
    case 'multiply':
      return multiply(num1, num2)
    case 'addition':
      return addition(num1, num2)
    case 'subtract':
      return subtract(num1, num2)
  }
}

const resultContainer = document.querySelector('.result-container')
const buttonContainer = document.querySelector('.button-container')
