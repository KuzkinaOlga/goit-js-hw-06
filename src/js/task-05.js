let span = document.querySelector('#name-output')
const inputRef = document.querySelector('#name-input')
inputRef.addEventListener("input", (event) => {
    // span.textContent = event.currentTarget.value
    // if (event.currentTarget.value.trim() === "") {
    //     span.textContent = 'Anonymous';
    // }
    span.textContent = event.currentTarget.value.trim() !== "" ? event.currentTarget.value : 'Anonymous';
})

