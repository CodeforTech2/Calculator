let firstOperand = '';
let secondOperand = '';
let currentOperation = null;

const btns = document.querySelectorAll('.btn');
const currentResult = document.querySelector('.current-result');
const previousResult = document.querySelector('.previous-result');
const clearAll = document.querySelector('#clear-all');
const clearEntry = document.querySelector('#clear-entry');

//Use calculator with GUI 
btns.forEach(btn => btn.addEventListener('click', (e) => {
    console.log(e.target);
    const firstNumber = e.target.innerHTML; 
    // currentResult.innerHTML += firstNumber;
    appendNumber(firstNumber)
}));

//Use calculator with keyboard
function matchKey(e) {
    const number = document.querySelector(`button[key = "${e.key}"]`);
    if (!number) return;
    appendNumber(number.textContent);
    if (number.classList.contains('operator')) {
        firstOperand = appendNumber(number.textContent);
        console.log(firstOperand);
    }
}
window.addEventListener('keydown', matchKey);

//Append number to currentResults
function appendNumber(nr) {
    if (currentResult.textContent === '0') {
        resetScreen();
    }
    currentResult.textContent += nr;
} 

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

//Function to set the curent operation
function setOperation() {

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