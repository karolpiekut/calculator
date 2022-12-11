/* calculator functions */

function multiply(...par) {
    return par.reduce(
        (acc, curr) => acc * curr
    );
}

function divide(...par) {
    return par.reduce(
        (acc, curr) => acc / curr
    );
}

function add(...par) {
    return par.reduce(
        (acc, curr) => acc + curr
    );
}

function deduct(...par) {
    return par.reduce(
        (acc, curr) => acc - curr
    );
}

function deltaPercentage(par1, par2) {
    return (par1 - par2) / par1 * 100;
}

function squareRoot(par) {
    return Math.sqrt(par);
}

function percentage(par1) {
    return par1 / 100;
}

function operate(fun, par1, par2) {
    return fun(par1, par2);
}

/* event listeners and query selectors */

let buttons = document.querySelectorAll("button");
let screen = document.querySelector("#screen");
Array.from(buttons).forEach(button =>
    button.addEventListener("click", theActualWork));
/* the meat */
let input = 0;
let operator;

function theActualWork(userPressed) {
    let select = userPressed.target.value;

    //displays first digit and, populates input and operator variable
    if (Number.isNaN(parseInt(select)) === false || select === ".") {
        input += select;
    } else {
        operator = select;
    }
    screen.innerText = parseInt(input);

    if (operator !== null) {
        if (operator === "+"){
            console.log(screen.innerText = add(input, userPressed.target.value));
            //screen.innerText = add(input, userPressed.target.value);
        }
    }


    console.log(input);
    console.log(operator);
}











