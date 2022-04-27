function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const createButtonRef = document.querySelector('[data-create]')
const destroyButtonRef = document.querySelector('[data-destroy]')
const inputRef = document.querySelector('[type="number"]')
const boxesRef = document.querySelector('#boxes')
let size = 30;
createButtonRef.addEventListener("click", () => {
  console.log(inputRef.value);

  for (let i = 0; i < inputRef.value; i += 1){
    const div = document.createElement("div")
    div.style.width = `${size}px`
    div.style.height = `${size}px`
    size += 10
    div.style.backgroundColor = getRandomHexColor();
    boxesRef.append(div)

  }
  inputRef.value = ""
}
)
destroyButtonRef.addEventListener("click", () => {
  boxesRef.innerHTML = "";
  size = 30;

})
