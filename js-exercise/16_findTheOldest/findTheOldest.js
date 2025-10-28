const findTheOldest = function (arr) {
  const averageBirthYear =
    arr.reduce((acc, curr) => acc + curr.yearOfBirth, 0) / arr.length - 1
  const allKey = arr.filter(item => !('yearOfDeath' in item))

  if (allKey.length == 0 || allKey[0].yearOfBirth > averageBirthYear) {
    return arr.sort(
      (a, b) => a.yearOfDeath - a.yearOfBirth - (b.yearOfDeath - b.yearOfBirth)
    )[arr.length - 1]
  }

  if (allKey[0].yearOfBirth < averageBirthYear) {
    return allKey[0]
  }
}

// Do not edit below this line
module.exports = findTheOldest
