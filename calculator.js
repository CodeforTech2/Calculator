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
    currentResult.innerHTML += firstNumber;
    
    
}));

function matchKey(e) {
    const number = document.querySelector(`button[key = "${e.key}"]`);
    if (!number) return;
    // currentResult.innerHTML += number.textContent;
    // console.log(currentResult.innerHTML);
    console.log(number.classList.contains('number'));
    if (number.classList.contains('number')) {
        currentResult.innerHTML += number.textContent;
        // console.log(currentResult.innerHTML);
    } else if (number.classList.contains('operator')) {
        const firstValue = currentResult.innerHTML;
        const operator = number.innerHTML;
        currentResult.innerHTML += number.textContent;
        // console.log(firstValue);
        // console.log(operator);
    } else if (number.classList.contains('number')) {
        const secondValue = currentResult.innerHTML;
        console.log(secondValue);
    }
}

window.addEventListener('keydown', matchKey);

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
