const fibonacci = function (num) {
  if (num == 0) {
    return 0
  } else if (num < 0) {
    return 'OOPS'
  }
  let base = [1, 1]
  for (let i = 1, length = num - 1; i < length; i++) {
    base.push(base[i] + base[i - 1])
  }
  return base[base.length - 1]
}

// Do not edit below this line
module.exports = fibonacci
