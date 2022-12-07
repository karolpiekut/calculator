/*let buttons = document.querySelectorAll("button");
let screen = document.querySelector("#screen");
Array.from(buttons).forEach(button =>
    button.addEventListener("click", usrSelect));

function usrSelect(event) {
    let arrVal = [];
    const select = event.target;
    arrVal.push(select.value);
    screen.innerText = arrVal;
}
*/

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

