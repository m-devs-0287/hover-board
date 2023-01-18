const container = document.getElementById('container')

const colors = ['#ac6696','#9cb6d1','#728cbe','#817bb5','#815a9f','#a9ccd1','#8dc0c9','','','#65a1c9','#2c83b0','#2c83b0','#b3c6cb','#8eb7c4','#8eb7c4']

const SQUARES = 500

for (let i = 0; i < SQUARES; i++) {
  const square = document.createElement('div')
  square.classList.add('square')

  square.addEventListener('mouseover', ()=> setColor(square))
  square.addEventListener('mouseout', ()=> removeColor(square))

  container.appendChild(square)
}

function setColor(e){
  const color = getRandomColor()
  e.style.backgroundColor = color
  e.style.boxShadow = `0 0 2px ${color},0 0 10px ${color} `
  
}
function removeColor(e){
  e.style.backgroundColor = '#1d1d1d'
  e.style.boxShadow = `0 0 2px #000`

}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)]
}