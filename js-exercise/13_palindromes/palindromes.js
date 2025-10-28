const palindromes = function (string) {
  const filtered = string.toLowerCase().replace(/[^a-z0-9]/g, '')
  return filtered == filtered.split('').reverse().join('')
}

// Do not edit below this line
module.exports = palindromes
