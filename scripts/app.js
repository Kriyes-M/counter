const counterText = document.getElementById('counterText');
const decreaseButton = document.getElementsByClassName('js-decrease-button')[0];
const resetButton = document.querySelector('.js-reset-button');
const increaseButton = document.querySelectorAll('.js-increase-button')[0];

function increaseValue() {
  counterText.innerText = String(Number(counterText.innerText) + 1);
}

function decreaseValue() {
  counterText.innerText = String(Number(counterText.innerText) - 1);
}

function resetValue() {
  counterText.innerText = '0';
}

// event listeners

increaseButton.addEventListener('click', increaseValue);
decreaseButton.addEventListener('click', decreaseValue);
resetButton.addEventListener('click', resetValue);