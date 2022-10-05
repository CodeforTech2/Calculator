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
    const number = document.querySelector(`button[data-key = "${e.keyCode}"]`);
    if (!number) return;
    console.log(number);
    currentResult.innerHTML = number.textContent;
}


window.addEventListener('keydown', matchKey);

// Function to reset all calculation made before
function resetAll() {
    clearAll.addEventListener('click', () => {
        currentResult.innerHTML = '';
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