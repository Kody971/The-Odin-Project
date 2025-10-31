const arithmetic = document.querySelector('.arithmetic')
const num1 = document.querySelector('.num1')
const num2 = document.querySelector('.num2')

const reset = () => {
  window.location.reload()
}

const del = () => {
  if (num2.textContent == 'Infinity') {
    return reset()
  }
  num2.textContent = num2.textContent.slice(0, -1)
}

const division = (...val) => {
  return val[0] / val[1]
}

const multiply = (...val) => {
  return val[0] * val[1]
}

const addition = (...val) => {
  return val[0] + val[1]
}

const subtract = (...val) => {
  return val[0] - val[1]
}

const checkArithmetic = val => {
  console.log('pass')
  if (num2.textContent == 'Infinity') {
    return reset()
  }
  if (arithmetic.textContent && num1.textContent && num2.textContent) {
    result(val)
    arithmetic.textContent = val.value
    return
  }
  if (!num1.textContent && !num2.textContent) {
    return
  }
  if (arithmetic.textContent) {
    arithmetic.textContent = val.value
    return
  }

  arithmetic.textContent = val.value
  num1.textContent = num2.textContent
  num2.textContent = ''
  return val.value
}

const userInput = val => {
  if (num2.textContent == 'Infinity') {
    return reset()
  }
  if (num2.textContent.includes('.') && val.value == '.') {
    return
  }
  if (num2.textContent.length > 10) {
    num2.textContent = Number(num2.textContent + val.value).toExponential()
    return
  }
  num2.textContent += val.value
}

const getNumber = () => {
  return [Number(num1.textContent), Number(num2.textContent)]
}

const resultProperly = val => {
  console.log(val.length)
  if (val.toString().length > 10) {
    return val.toExponential()
  }
  return val
}

const result = val => {
  if (num2.textContent == 'Infinity') {
    return reset()
  }
  if (val.value == 'total') {
    if (!num2.textContent) {
      num2.textContent = num1.textContent
      arithmetic.textContent = ''
      num1.textContent = ''
    }
    switch (arithmetic.textContent) {
      case '/':
        arithmetic.textContent = ''
        num2.textContent = resultProperly(division(...getNumber()))
        num1.textContent = ''
        break
      case 'x':
        arithmetic.textContent = ''
        num2.textContent = resultProperly(multiply(...getNumber()))
        num1.textContent = ''
        break
      case '+':
        arithmetic.textContent = ''
        num2.textContent = resultProperly(addition(...getNumber()))
        num1.textContent = ''
        break
      case '-':
        arithmetic.textContent = ''
        num2.textContent = resultProperly(subtract(...getNumber()))
        num1.textContent = ''
        break
    }
  } else {
    switch (arithmetic.textContent) {
      case '/':
        num1.textContent = resultProperly(division(...getNumber()))
        num2.textContent = ''
        break
      case 'x':
        num1.textContent = resultProperly(multiply(...getNumber()))
        num2.textContent = ''
        break
      case '+':
        num1.textContent = resultProperly(addition(...getNumber()))
        num2.textContent = ''
        break
      case '-':
        num1.textContent = resultProperly(subtract(...getNumber()))
        num2.textContent = ''
        break
    }
  }
}
