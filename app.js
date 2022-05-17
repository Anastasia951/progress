let valueInput, animateInput, hideInput, circle
document.addEventListener("DOMContentLoaded", function (event) {
  initInputs()
  initListeners()
});

function initInputs() {
  valueInput = document.querySelector('.progress__value')
  animateInput = document.querySelector('.progress__animate')
  hideInput = document.querySelector('.progress__hide')
  circle = document.querySelector('.progress__circle')
}

function initListeners() {
  valueInput.addEventListener('change', drawCircle)
  animateInput.addEventListener('change', rotateCircle)
  hideInput.addEventListener('change', hideCircle)
}
function rotateCircle() {
  animateInput.checked ? circle.classList.add('rotate') : circle.classList.remove('rotate')
}
function drawCircle() {
  let value = parseInt(this.value)
  circle.style.background = `conic-gradient( 
    rgb(255, 213, 23) ${value * 360 / 100}deg, transparent 0)`
}
function hideCircle() {
  hideInput.checked ? circle.style.visibility = 'hidden' : circle.style.visibility = 'visible'
}