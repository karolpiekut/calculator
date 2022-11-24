let buttons = document.querySelectorAll("button");

Array.from(buttons).forEach(button =>
    button.addEventListener("click", test));

function test(event) {
    const select = event.target;
    console.log(select.value);
}

