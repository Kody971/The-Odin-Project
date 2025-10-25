const sumAll = function (num1, num2) {
  if (
    num1 < 0 ||
    num2 < 0 ||
    !Number.isInteger(num1) ||
    !Number.isInteger(num2)
  ) {
    return 'ERROR'
  }
  let arr = []
  let min = Math.min(num1, num2)
  let max = Math.max(num1, num2)
  for (let i = min; i <= max; i++) {
    arr.push(i)
  }
  return arr.reduce((acc, curr) => acc + curr)
}

// Do not edit below this line
module.exports = sumAll
