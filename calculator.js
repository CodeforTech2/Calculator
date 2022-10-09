let firstOperand = '';
let secondOperand = '';
let currentOperation = null;

const btnsNumbers = document.querySelectorAll('.number');
const btnsOperators = document.querySelectorAll('.operator');
const clearAll = document.querySelector('#clear-all');
const clearEntry = document.querySelector('#clear-entry');
let currentResult = document.querySelector('.current-result');
let previousResult = document.querySelector('.previous-result');

//Use calculator with GUI 
btnsNumbers.forEach(btn => btn.addEventListener('click', (e) => {
    // console.log(e.target);
    appendNumber(btn.textContent);
}));
btnsOperators.forEach(btn => btn.addEventListener('click', (e) => {
    // console.log(e.target);
    setOperation(btn.textContent);
}));

//Use calculator with keyboard
function matchKey(e) {
    const number = document.querySelector(`button[key = "${e.key}"]`);
    if (!number) return;
    appendNumber(number.textContent);
    if (number.classList.contains('operator')) {
        // console.log(number.textContent)
       setOperation(number.textContent);
    }
}
window.addEventListener('keydown', matchKey);

//Append number to currentResults
function appendNumber(nr) {
    if (currentResult.textContent === '0') {
        resetScreen();
    }
    currentResult.textContent += nr;
};

//Function to set the current operation
function setOperation(operator) {
    firstOperand = currentResult.textContent;
    console.log(firstOperand);
    currentOperation = operator;
    console.log(operator);
    previousResult.textContent = `${firstOperand} ${currentOperation}` 
};
setOperation();

//Calculate the operations
function evaluate() {

};

//Reset screen/eliminate 0 to start adding numbers
function resetScreen() {
    currentResult.textContent = '';
}

// Function to reset all calculation made before
function resetAll() {
    clearAll.addEventListener('click', () => {
        currentResult.innerHTML = 0;
        previousResult.innerHTML = '';
    });
};
resetAll();
//Function to reset only the curent entry numbers/operations
function resetEntry() {
    clearEntry.addEventListener('click', () => {
        currentResult.innerHTML = '';
    })
};
resetEntry();

//The 4 operators basic functions
function add(a, b) {
    return a + b;
};

function substract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    return a / b;
};

//
function operate(operator, a, b) {
    a = Number(a);
    b = Number(b);

    switch(operator) {
        case '+':
            return add(a + b);
            break;
        case '-':
            return substract(a, b);
            break;
        case '*':
            return multiply(a, b);
            break;
        case '/':
            if (b === 0) return null;
            else return divide(a, b);
            break
        default:
            return null;
    };
};