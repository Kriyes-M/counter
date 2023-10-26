const counterText = document.getElementById('counterText');
const decreaseButton = document.getElementsByClassName('js-decrease-button')[0];
const resetButton = document.querySelector('.js-reset-button');
const increaseButton = document.querySelectorAll('.js-increase-button')[0];

let value = 0;

function increaseValue() {
  value++;
  // counterText.innerText = String(Number(counterText.innerText) + 1);
  counterText.innerText = value;
}

function decreaseValue(num) {
  value--;
  // counterText.innerText = String(Number(counterText.innerText) - 1);
  counterText.innerText = value;
}

function resetValue() {
  value = 0;
  counterText.innerText = value;
}

// event listeners

increaseButton.addEventListener('click', increaseValue);
decreaseButton.addEventListener('click', decreaseValue);
resetButton.addEventListener('click', resetValue);