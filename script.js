function sum(a, b) {
    return Number(a) + Number(b);
}

function subtract(a, b) {
    return Number(a) - Number(b);
}

function multiply(a, b) {
    return Number(a) * Number(b);
}

function divide(a, b) {
    return Number(a) / Number(b);
}

function operate(a, b) {
    let result;
    const sign = calculator.operator;
    if (sign == "+") {
        result = sum(a,b);
    } else if (sign == "-") {
        result = subtract(a,b);
    } else if (sign == "*") {
        result = multiply(a,b);
    } else if (sign == "/") {
        result = divide(a,b);
    } else {
        throw "Operate has invalid sign";
    }
    calculator.currentBar.innerText = result;
    return result;
}

function processOperatorPressed() {
    if (calculator.firstValue == "") {
        calculator.firstValue = calculator.current;
        calculator.operator = this.innerText;
        calculator.current = "";
    } else if (this.innerText == "="){
        calculator.current = operate(calculator.firstValue, calculator.current);
        calculator.operator = "";
        calculator.firstValue = "";
    } else {
        calculator.firstValue = operate(calculator.firstValue, calculator.current);
        calculator.operator = this.innerText;
        calculator.current = "";
    }
}

function processNumberPressed() {
    if (this.innerText == "." && calculator.current.includes(".")) {
        return;
    }
    calculator.current += this.innerText;
    calculator.currentBar.innerText = calculator.current;
}

function clearAll() {
    calculator.firstValue = "";
    calculator.operator = ""
    calculator.current = "";
    calculator.currentBar.innerText = "";
}

const calculator = {
    firstValue: "",
    operator: "",
    current: "",
    currentBar: document.querySelector(".result-bar")
};

// Add listener to every number
for (let button of document.querySelectorAll(".number")) {
    button.addEventListener("click", processNumberPressed);
};

// Add listener to operators
for (let button of document.querySelectorAll(".operator")) {
    button.addEventListener("click", processOperatorPressed);
}

// Add listener to clear button.
document.querySelector("#c").addEventListener("click", clearAll);
