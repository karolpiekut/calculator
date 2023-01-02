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

function operate(par1, fun, par2) {
    if (fun(par1, par2).toString().length > 9) {
        return fun(par1, par2).toFixed(9);
    } else {
        return fun(par1, par2);
    }
}

/* event listeners and query selectors */

let buttons = document.querySelectorAll("button");
let screen = document.querySelector("#screen");
Array.from(buttons).forEach(button =>
    button.addEventListener("click", theActualWork));
/* the meat */


let input = 0;
let valuesArr = [];
screen.innerText = 0;
let evaluation = 0;



function theActualWork(userPressed) {
    let select = userPressed.target.value; //user selection passed to select variable

    if (Number.isNaN(parseFloat(select)) === false || select === ".") {
        input += select;  //sets first input integer or float
    } else if (Number.isNaN(parseFloat(select)) === true || select !== "." || select !== "=") { //if operator selected, push first value into array
        valuesArr.push(parseFloat(input)); //push first value into array
        input = 0; //sets input back to 0
    }


    //operations
    if (select === "+") {
        valuesArr.push(add);
        console.log(valuesArr);
    } else if (select === "-") {
        valuesArr.push(deduct);
        console.log(valuesArr);
    }

    else if (select === "CE/C") { //resets calc
        input = 0;
        valuesArr = [];
        //need logic when equals will only execute if valuesArr.length === 2;
    }


    if (select === "=") {
        evaluation = operate(valuesArr[0], valuesArr[1], valuesArr[2]);
        console.log(evaluation);
        valuesArr = [];
        input = 0;
        console.log(valuesArr);
        console.log(input);
    }
    //calc display

    if (input === 0) {
        screen.innerText = input; //display value when 0
    } else {
        screen.innerText = input.slice(1); //display value without a leading 0
    }
}


/*

if number push into input, then once operator pressed, push to arr, then push arr into operator as well, then set input to 0 and allow more input from the function,
if valueArr.length is 2, then execute operate function

if (operator !== null) {
    if (operator === "√"){
        screen.innerText = operate(squareRoot, input);
        //console.log(screen.innerText = add(input, userPressed.target.value));
        //screen.innerText = add(input, userPressed.target.value);
    }  else if (operator === "+") {
        screen.innerText = operate(add, input, userPressed.target.value);
    }
}
*/



