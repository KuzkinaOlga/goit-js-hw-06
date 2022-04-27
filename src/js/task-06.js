const inputRef = document.querySelector('#validation-input');
inputRef.addEventListener("blur", (event) => {
    const input = event.currentTarget;
    const requiredLength = Number(input.dataset.length)
    console.log(input.value.length);
    console.log(input.dataset.length);

    if (input.value.length === requiredLength) {
        input.classList.add("valid")
        input.classList.remove("invalid")
        console.log("равны");
    } else {
        input.classList.add("invalid")
        input.classList.remove("valid")
        console.log("не равны");
    }
        

})
