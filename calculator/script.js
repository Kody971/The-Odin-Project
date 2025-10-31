const arithmetic = document.querySelector('.arithmetic')
const num1 = document.querySelector('.num1')
const num2 = document.querySelector('.num2')

const reset = () => {
  // do something
}

const del = () => {
  // do something
}

const division = (...val) => {
  num1.textContent = parseInt(val[0]) / parseInt(val[1])
}

const multiply = (...val) => {
  num1.textContent = parseInt(val[0]) * parseInt(val[1])
}

const addition = (...val) => {
  num1.textContent = parseInt(val[0]) + parseInt(val[1])
}

const subtract = (...val) => {
  num1.textContent = parseInt(val[0]) - parseInt(val[1])
}

const checkArithmetic = val => {
  if (arithmetic.textContent && num1.textContent && num2.textContent) {
    return result(val.value)
  }
  arithmetic.textContent = val.value
  num1.textContent = num2.textContent
  num2.textContent = ''
  return val.value
}

const userInput = val => {
  num2.textContent += val.value
}

const getNumber = () => {
  return [num1.textContent, num2.textContent]
}

const result = val => {
  if (val == 'total') {
    console.log('=')
    switch (arithmetic.textContent) {
      case '/':
        num2.textContent = division(getNumber())
        num1.textContent = ''
      case 'x':
        num2.textContent = multiply(getNumber())
        num1.textContent = ''
      case '+':
        num2.textContent = addition(getNumber())
        num1.textContent = ''
      case '-':
        num2.textContent = subtract(getNumber())
        num1.textContent = ''
    }
  } else {
    switch (arithmetic.textContent) {
      case '/':
        num1.textContent = division(getNumber())
      case 'x':
        num1.textContent = multiply(getNumber())
      case '+':
        num1.textContent = addition(getNumber())
      case '-':
        num1.textContent = subtract(getNumber())
    }
  }
}
