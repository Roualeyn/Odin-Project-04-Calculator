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
}

function operate(a, b, sign) {
    return sign == "+" ? sum(a,b)
    : sign == "-" ? subtract(a,b)
    : sign == "*" ? multiply(a,b)
    : sign == "/" ? divide(a,b)
    : NaN;
}