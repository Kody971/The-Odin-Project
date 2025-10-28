const add = function (num1, num2) {
  return num1 + num2
}

const subtract = function (num1, num2) {
  return num1 - num2
}

const sum = function (arr) {
  return arr.reduce((acc, curr) => acc + curr, 0)
}

const multiply = function (arr) {
  return arr.reduce((acc, curr) => acc * curr, 1)
}

const power = function (num1, num2) {
  return num1 ** num2
}

const factorial = function (num) {
  if (num == 0 || num == 1) {
    return 1
  } else {
    let result = 1
    while (num != 1) {
      result *= num
      num--
    }
    return result
  }
}

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
}
