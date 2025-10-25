const leapYears = function (numb) {
  return (numb % 4 == 0 && numb % 100 != 0) || numb % 400 == 0
}

// Do not edit below this line
module.exports = leapYears
