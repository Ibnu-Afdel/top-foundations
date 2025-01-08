"use strict";
function add(a, b) {
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
let firstNumber = '';
let lastNumber = '';
let operator = '';
function operate(firstNumber, lastNumber, operator) {
    let result;
    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(lastNumber);
    if (operator === '+') {
        result = add(num1, num2);
    }
    else if (operator === '-') {
        result = subtract(num1, num2);
    }
    else if (operator === '*') {
        result = multiply(num1, num2);
    }
    else if (operator === '/') {
        if (num2 === 0) {
            showResult.textContent = 'error: cant divide by zero (clear and start again)';
            showFirstNum.textContent = '';
            showLastNumber.textContent = '';
            showOperator.textContent = '';
            return 'error';
        }
        result = divide(num1, num2);
    }
    else {
        result = 'Invalid operator';
    }
    return result;
}
const showFirstNum = document.querySelector('.fistNumber');
const showOperator = document.querySelector('.operator');
const showLastNumber = document.querySelector('.lastNumber');
const showResult = document.querySelector('.result');
const numberButtons = document.querySelectorAll('.number-button');
numberButtons.forEach((button) => {
    button.addEventListener('click', function () {
        if (operator) {
            lastNumber = showLastNumber.textContent += button.textContent;
        }
        else {
            firstNumber = showFirstNum.textContent += button.textContent;
        }
    });
});
const tabEqual = document.querySelector('#equals');
tabEqual.addEventListener('click', function () {
    if (firstNumber && lastNumber && operator) {
        const calcResult = operate(firstNumber, lastNumber, operator);
        if (calcResult === 'error') {
            firstNumber = '';
            lastNumber = '';
            operator = '';
            return;
        }
        showResult.textContent = `= ${calcResult}`;
        firstNumber = calcResult.toString();
        lastNumber = '';
        operator = '';
        showFirstNum.textContent = firstNumber;
        showLastNumber.textContent = '';
        showOperator.textContent = '';
        showResult.textContent = '';
    }
});
const tabAdd = document.querySelector('#add');
tabAdd.addEventListener('click', function () {
    if (firstNumber && lastNumber && operator) {
        const calcResult = operate(firstNumber, lastNumber, operator);
        showFirstNum.textContent = calcResult.toString();
        firstNumber = calcResult.toString();
        lastNumber = '';
        showLastNumber.textContent = '';
    }
    operator = showOperator.textContent = '+';
});
const tabSub = document.querySelector('#sub');
tabSub.addEventListener('click', function () {
    if (firstNumber && lastNumber && operator) {
        const calcResult = operate(firstNumber, lastNumber, operator);
        showFirstNum.textContent = calcResult.toString();
        firstNumber = calcResult.toString();
        lastNumber = '';
        showLastNumber.textContent = '';
    }
    operator = showOperator.textContent = '-';
});
const tabDiv = document.querySelector('#div');
tabDiv.addEventListener('click', function () {
    if (firstNumber && lastNumber && operator) {
        const calcResult = operate(firstNumber, lastNumber, operator);
        showFirstNum.textContent = calcResult.toString();
        firstNumber = calcResult.toString();
        lastNumber = '';
        showLastNumber.textContent = '';
    }
    operator = showOperator.textContent = '/';
});
const tabMul = document.querySelector('#mul');
tabMul.addEventListener('click', function () {
    if (firstNumber && lastNumber && operator) {
        const calcResult = operate(firstNumber, lastNumber, operator);
        showFirstNum.textContent = calcResult.toString();
        firstNumber = calcResult.toString();
        lastNumber = '';
        showLastNumber.textContent = '';
    }
    operator = showOperator.textContent = '*';
});
const tabClear = document.querySelector('#clr');
tabClear.addEventListener('click', function () {
    firstNumber = '';
    operator = '';
    lastNumber = '';
    showFirstNum.textContent = '';
    showLastNumber.textContent = '';
    showOperator.textContent = '';
    showResult.textContent = '';
});
