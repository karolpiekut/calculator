/* event listeners and query selectors */

let buttons = document.querySelectorAll("button");
let screen = document.querySelector("#screen");
Array.from(buttons).forEach(button =>
    button.addEventListener("click", theActualWork));

/* calculator functions */
class calculator {
    constructor(a, b)  {
        this.a = a;
        this.b = b;
    }
    get addition() {
        return this.add();
    }
    get deduction() {
        return this.deduct();
    }
    get multiplier() {
        return this.multiply();
    }
    get divider() {
        return this.divide();
    }
    get delta() {
        return this.deltaPercentage();
    }
    get squared() {
        return this.squareRoot();
    }
    get percent() {
        return this.percentage();
    }
    add() {
        return this.a + this.b;
    }
    deduct() {
        return this.a - this.b;
    }
    multiply() {
        return this.a * this.b;
    }
    divide() {
        return this.a / this.b;
    }
    deltaPercentage() {
        return (this.a - this.b) / this.a * 100;
    }
    squareRoot() {
        return Math.sqrt(this.a);
    }
    percentage(){
        return this.a / 100;
    }

}

function operate(fun, par1, par2) {
    return fun(par1, par2);
}


/* the meat */

function theActualWork(userPressed) {
    let select = userPressed.target.value;
    if (Number.isNaN(parseInt(select)) === false || select === ".") {
        screen.innerText = select;
        return select;
    }
}











