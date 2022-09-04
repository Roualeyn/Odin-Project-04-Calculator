function sum(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(a, b, sign) {
    return sign == "+" ? sum(a,b)
    : sign == "-" ? subtract(a,b)
    : sign == "*" ? multiply(a,b)
    : sign == "/" ? divide(a,b)
    : NaN;
}