let firstOperand = '';
let secondOperand = '';

const btns = document.querySelectorAll('.btn');
const currentResult = document.querySelector('.current-result');
const previousResult = document.querySelector('.previous-result');
const clearAll = document.querySelector('#clear-all');
const clearEntry = document.querySelector('#clear-entry');

btns.forEach(btn => btn.addEventListener('click', (e) => {
    console.log(e.target);
    const firstNumber = e.target.innerHTML; 
    // currentResult.innerHTML += firstNumber;
}));

function matchKey(e) {
    const number = document.querySelector(`button[key = "${e.key}"]`);
    if (!number) return;
    // console.log(number.textContent);
    appendNumber(number.textContent);
    
    // if (number.classList.contains('number')) {
    //     // console.log(currentResult.innerHTML);
    //     appendNumber(number);
    // } 
}

window.addEventListener('keydown', matchKey);

//Append number to currentResults
function appendNumber(nr) {
    if (currentResult.textContent === '0') {
        currentResult.textContent = '';
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
}
resetEntry();

function add(a, b) {
    return a + b;
};

function substract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}
