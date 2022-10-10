let firstOperand = '';
let secondOperand = '';
let currentOperation = null;
let shouldResetScreen = false;

const btnsNumbers = document.querySelectorAll('.number');
const btnsOperators = document.querySelectorAll('.operator');
const currentResult = document.querySelector('.current-result');
const previousResult = document.querySelector('.previous-result');
const clearAll = document.querySelector('#clear-all');
const clearEntry = document.querySelector('#clear-entry');
const equal = document.querySelector('.equal');
const deleteNumber = document.querySelector('#backspace');
const point = document.getElementById('period');
const percentage = document.getElementById('percentage');

//Use calculator with GUI 
btnsNumbers.forEach(btn => btn.addEventListener('click', (e) => {
    // console.log(e.target);
    appendNumber(btn.textContent);
}));
btnsOperators.forEach(btn => btn.addEventListener('click', (e) => {
    // console.log(e.target);
    setOperation(btn.textContent);
}));

equal.addEventListener('click', evaluate);
clearAll.addEventListener('click', resetAll);
clearEntry.addEventListener('click', resetEntry);
point.addEventListener('click', appendPoint);
deleteNumber.addEventListener('click', deleteNr);
percentage.addEventListener('click', getPercentage)

//Use calculator with keyboard
function matchKey(e) {
    // const number = document.querySelector(`button[key = "${e.key}"]`);
    if (e.key >= 0 && e.key <= 9) appendNumber(e.key);
    if (e.key === '.') appendPoint();
    if (e.key === 'Enter' || e.key === '=') evaluate();
    if (e.key === 'Escape') resetAll();
    if (e.key === 'Backspace') deleteNr();
    if (e.key === '/' || e.key === '*' || e.key === '-' || e.key === '+') setOperation(e.key);
}
window.addEventListener('keydown', matchKey);

function getPercentage() {
    if(currentResult.textContent.includes('%')) return;
    firstOperand = currentResult.textContent;
    currentResult.textContent += '%';
    previousResult.textContent = currentResult.textContent;
    currentResult.textContent = Number(firstOperand / 100);
}
//Append number to currentResults
function appendNumber(nr) {
    if (currentResult.textContent === '0' || shouldResetScreen) {
        resetScreen();
    }
    currentResult.textContent += nr;
    shouldResetScreen = false;
};

//Function to set the current operation
function setOperation(operator) {
    if (currentOperation !== null) evaluate();
    firstOperand = currentResult.textContent;
    currentOperation = operator;
    previousResult.textContent = `${firstOperand} ${currentOperation}`;
    shouldResetScreen = true;
};

//Calculate the operations
function evaluate() {
    if (currentOperation === null || shouldResetScreen) return;
    if (currentOperation === '/' && currentResult.textContent === '0') {
        alert("You can't divide by 0!");
        return;
    }
    secondOperand = currentResult.textContent;
    currentResult.textContent = roundResult(operate(currentOperation, firstOperand, secondOperand));
    previousResult.textContent = `${firstOperand} ${currentOperation} ${secondOperand}`;
    currentOperation = null;
};

function deleteNr() {
    currentResult.textContent = currentResult.textContent.toString().slice(0, -1);
};

function appendPoint() {
    if (currentResult.textContent.includes('.')) return;
    currentResult.textContent += '.';
}

function roundResult(number) {
    return Math.round(number * 1000) / 1000
  };

//Reset screen/eliminate 0 to start adding numbers
function resetScreen() {
    currentResult.textContent = '';
}

// Function to reset all calculation made before
function resetAll() {
        currentResult.innerHTML = 0;
        previousResult.innerHTML = '';
        firstOperand = '';
        secondOperand = '';
        currentOperation = null;
};

//Function to reset only the curent entry numbers/operations
function resetEntry() {
        currentResult.innerHTML = '';
        firstOperand = '';
        secondOperand = '';
};

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


function operate(operator, a, b) {
    a = Number(a);
    b = Number(b);

    switch(operator) {
        case '+':
            return add(a, b);
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

// Make the rest of the buttons functional
// After equal is press and then start typing numbers, clear currentResult and start over
