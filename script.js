const container = document.querySelector('.container')
const colors = ['#F2275D', '#2ECEF2', '#F2E205', '#8C8303', '#F25835', '#0D8C44', '#F2CAB3', '#3F0640']
const squares = 500

for(let i = 0; i < squares; i++) {
  const square = document.createElement('div')
  square.classList.add('square')

  square.addEventListener('mouseover', () => setColor(square))

  square.addEventListener('mouseout', () => removeColor(square))

  container.appendChild(square)
}

function setColor(element) {
  const color = getRandomColor()
  element.style.background = color
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
  element.style.background = '#404040'
  element.style.boxShadow = '0 0 .2rem black'
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)]
}