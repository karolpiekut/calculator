let buttons = document.querySelectorAll("button");
let screen = document.querySelector("#screen");
Array.from(buttons).forEach(button =>
    button.addEventListener("click", usrSelect));

function usrSelect(event) {
    const select = event.target;
    screen.innerText = select.value;
}



/*
press a digit button

 */