let counterValue = 0;
const buttonDecrement = document.querySelector('[data-action="decrement"]');
const span = document.querySelector('#value');
buttonDecrement.addEventListener("click", () => {
    counterValue -= 1;
    span.textContent = counterValue;
  console.log(counterValue);
});
const buttonIncrement = document.querySelector('[data-action="increment"]');
buttonIncrement.addEventListener("click", () => {
    counterValue += 1;
    span.textContent = counterValue;
  console.log(counterValue);
});

