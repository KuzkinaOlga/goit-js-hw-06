const inputRef = document.querySelector('#font-size-control');
const span = document.querySelector('#text')
const inputChange = (event) => {
    // console.log(event.currentTarget.value);
    span.style.fontSize = `${inputRef.value}px`  
}
inputChange();
inputRef.addEventListener("input", inputChange)