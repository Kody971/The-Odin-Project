const repeatString = (word, numb) => {
  if (numb < 0) {
    return 'ERROR'
  }
  let result = ''
  while (numb != 0) {
    result += word
    numb--
  }
  return result
}

// console.log(repeatString('sdk', -1))

// Do not edit below this line
module.exports = repeatString
