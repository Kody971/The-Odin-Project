const convertToCelsius = function (numb) {
  const result = ((numb - 32) * 5) / 9
  return parseFloat(result.toFixed(1))
}

const convertToFahrenheit = function (numb) {
  const result = (9 / 5) * numb + 32
  return parseFloat(result.toFixed(1))
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
}
