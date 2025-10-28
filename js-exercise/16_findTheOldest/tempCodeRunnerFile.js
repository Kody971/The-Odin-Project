const findTheOldest = function (arr) {
  const averageBirthYear =
    arr.reduce((acc, curr) => acc + curr.yearOfBirth, 0) / arr.length - 1
  const missingKey = arr.filter(item => !('yearOfDeath' in item))

  if (missingKey && missingKey[0].yearOfBirth < averageBirthYear) {
    return missingKey[0]
  }

  return arr.sort(
    (a, b) => a.yearOfDeath - a.yearOfBirth - (b.yearOfDeath - b.yearOfBirth)
  )[arr.length - 1]
}

const people = [
  {
    name: 'Carly',
    yearOfBirth: 1942,
    yearOfDeath: 1970,
  },
  {
    name: 'Ray',
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: 'Jane',
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
]

console.log(findTheOldest(people).name)

// Do not edit below this line
module.exports = findTheOldest
