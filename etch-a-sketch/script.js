const baseTotalBox = 16

const createBox = total => {
  for (let i = 0; i < total ** 2; i++) {
    const square = document.createElement('div')
    square.style.height = Math.floor(960 / total) + 'px'
    square.style.width = Math.floor(960 / total) + 'px'
    document.querySelector('.container').appendChild(square)
  }
}

const addEventBox = arr => {
  arr.forEach(item => {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)

    item.addEventListener(
      'mouseover',
      () => (item.style.backgroundColor = `rgb(${r},${g},${b})`)
    )
    item.addEventListener(
      'mousedown',
      () => (item.style.backgroundColor = 'transparent')
    )
  })
}

const removeBox = arr => {
  arr.forEach(item => {
    item.remove()
  })
}

const newGrid = arr => {
  let userChoice
  while (true) {
    userChoice = Number(prompt('Enter new grid (max 100)'), 16)
    if (
      isNaN(userChoice) ||
      userChoice < 16 ||
      userChoice > 100 ||
      userChoice === '' ||
      userChoice === null
    ) {
      alert('Please insert number 1 to 100')
      return
    } else {
      removeBox(arr)
      createBox(userChoice)
      const allSquare = [...document.querySelector('.container').children]
      addEventBox(allSquare)
      return
    }
  }
}

createBox(baseTotalBox)
const allSquare = [...document.querySelector('.container').children]
addEventBox(allSquare)
document.querySelector('.new-grid').addEventListener('click', event => {
  const allSquare = [...document.querySelector('.container').children]
  newGrid(allSquare, event)
})
