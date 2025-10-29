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

const result = (func, num1, num2) => {
  switch (func) {
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
