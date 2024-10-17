function add(a, b){
    return a+b;
}

function subtract(a, b){
    return a-b;
}
function multiply(a, b){
    return a*b;
}
function divide(a, b){
    return a/b;
}

let firstNumber = ''
let lastNumber = ''
let operator = '';
let result = '';

function operate(firstNumber, lastNumber, operator){
    if (operator === '+'){
       result = add(+firstNumber, +lastNumber);
    } else if (operator === '-'){
        result = subtract(+firstNumber, +lastNumber);
    } else if (operator === '*'){
       result =  multiply(+firstNumber, +lastNumber);
    } else if (operator === '/'){
        result = divide(+firstNumber, +lastNumber);
    }
    return result;
}

const showFirstNum = document.querySelector('.fistNumber');
const showOperator = document.querySelector('.operator');
const showLastNumber = document.querySelector('.lastNumber');
const showResult = document.querySelector('.result');

const numberButtons = document.querySelectorAll('.number-button');


numberButtons.forEach(button => {
    button.addEventListener('click', function () {
        if (operator) {
            // Append the clicked number to lastNumber
            lastNumber = showLastNumber.textContent += button.textContent;
        } else {
            // Append the clicked number to firstNumber
            firstNumber = showFirstNum.textContent += button.textContent;
        }
    });
});


const tabEqual = document.querySelector('#equals');
tabEqual.addEventListener('click', function (){
     showResult.textContent = `= ${operate(firstNumber, lastNumber, operator)}`;
})
const tabAdd = document.querySelector('#add');
tabAdd.addEventListener('click', function (){
     operator = (showOperator.textContent = '+');
})
const tabSub = document.querySelector('#sub');
tabSub.addEventListener('click', function (){
    operator = (showOperator.textContent = '-');
})
const tabDiv = document.querySelector('#div');
tabDiv.addEventListener('click', function (){
    operator = (showOperator.textContent = '/');
})
const tabMul = document.querySelector('#mul');
tabMul.addEventListener('click', function (){
    operator = (showOperator.textContent = '*');
})
const tabClear = document.querySelector('#clr');
tabClear.addEventListener('click', function (){
    firstNumber = ''
    operator = ''
    lastNumber = ''
    showFirstNum.textContent = ''
    showLastNumber.textContent = ''
    showOperator.textContent = ''
})